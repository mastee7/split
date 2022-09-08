import React, { useCallback, useRef, useMemo, useState } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Controls,
  updateEdge,
  addEdge,
} from "react-flow-renderer";
import VideoNode from "../VideoNode/VideoNode";

import styles from "./VideoCreationFrame.module.css";

export default function VideoCreationFrame() {
  const onEdgeUpdateStart = useCallback(() => {
    edgeUpdateSuccessful.current = false;
  }, []);

  const onEdgeUpdate = useCallback((oldEdge, newConnection) => {
    edgeUpdateSuccessful.current = true;
    setEdges((els) => updateEdge(oldEdge, newConnection, els));
  }, []);

  const onEdgeUpdateEnd = useCallback((_, edge) => {
    if (!edgeUpdateSuccessful.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    edgeUpdateSuccessful.current = true;
  }, []);

  function deleteNode(nodeId) {
    setNodes((arr) => {
      return arr.filter((value) => {
        return nodeId.localeCompare(value.id) !== 0;
      });
    });
    console.log("DELETE");
  }

  //TEMP
  const addNode = (e) => {
    setNodes((arr) => [
      ...arr,
      {
        id: index.toString(),
        type: "videoNode",
        position: { x: 0, y: 0 },
        data: { deleteNode },
      },
    ]);
    setIndex(index + 1);
    console.log(nodes);
  };
  //TEMP
  const initialNodes = [];

  const initialEdges = [];

  const edgeUpdateSuccessful = useRef(true);
  const [index, setIndex] = useState(1);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  const onConnect = useCallback((params) => {
    setEdges((arr) => {
      return arr.filter((value) => {
        return (
          value.source !== params.source ||
          value.sourceHandle !== params.sourceHandle
        );
      });
    });
    params.type = 'smoothstep'
    setEdges((els) => addEdge(params, els));
    console.log(params);
    console.log(edges);
  }, []);

  // TEMP

  const nodeTypes = useMemo(() => ({ videoNode: VideoNode }), []);
  //
  //
  // TEST

  return (
    <div className={styles.root}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        snapToGrid
        onEdgeUpdate={onEdgeUpdate}
        onEdgeUpdateStart={onEdgeUpdateStart}
        onEdgeUpdateEnd={onEdgeUpdateEnd}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="top-right"
      >
        <div className={styles.videoCreation__upload}>
          <img className={styles.videoCreation__thumbnail} src="https://media-dspp-driveds.dsautomobiles.com/image/47/0/.30470.119.jpg"/>
          <button className={styles.videoCreation__uploadButton}>Upload</button>
        </div>
        <button className={styles.videoCreation__plusButton} onClick={addNode}>
          +
        </button>
        <Controls />
      </ReactFlow>
    </div>
  );
}
