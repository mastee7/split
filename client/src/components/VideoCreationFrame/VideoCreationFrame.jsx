import React, { useCallback, useRef, useMemo } from "react";
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

  //TEMP
  const initialNodes = [
    {
      id: "node-1",
      type: "videoNode",
      position: { x: 0, y: 0 },
      data: { id: "node-1" },
    },
    {
      id: "node-2",
      type: "videoNode",
      position: { x: 0, y: 0 },
      data: { id: "node-2" },
    },
  ];

  const initialEdges = [];

  const edgeUpdateSuccessful = useRef(true);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((els) => addEdge(params, els)),
    []
  );

  console.log(edges);

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

  const deleteNode = (nodeId) => {
    var arr = nodes;
    arr = arr.filter((value) => {
      return value.id != nodeId;
    });
    setNodes(arr);
  };

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
        <Controls />
      </ReactFlow>
    </div>
  );
}
