import { useCallback, useState, useMemo } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";
import VideoNode from "../VideoNode/VideoNode";

import styles from "./VideoCreationFrame.module.css";

//TEST
//
//
const initialNodes = [
  {
    id: "node-1",
    type: "videoNode",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
];

const initialEdges = [];
//
//
// TEST
export default function VideoCreationFrame() {
  // TEST
  //
  //
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

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
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}
