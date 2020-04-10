var t=require("bson"),s=require("lodash");class i{constructor(s){this.t=void 0,this.nodeData=void 0,this.t=new t.ObjectId,this.nodeData=s}get id(){return this.t.toHexString()}get data(){return this.nodeData}set data(t){this.nodeData=t}}class h{constructor(){this.map=void 0,this.has=t=>this.map.has(t),this.hasNode=t=>this.has(t.t),this.add=(t,s)=>this.map.set(t,s),this.addNode=t=>!this.hasNode(t)&&this.add(t.t,t),this.getNodeById=t=>this.map.get(t),this.values=()=>this.map.values(),this.entries=()=>this.map.entries(),this.clear=()=>this.map.clear(),this.map=new Map}get size(){return this.map.size}}class e{constructor(t){this.map=new Map,this.clear=()=>this.map.clear(),this.entries=()=>this.map.entries(),this.get=t=>this.map.get(t),this.getEdge=({t:t})=>this.get(t),this.has=t=>this.map.has(t),this.hasEdge=({t:t})=>this.has(t),this.forEach=(t,s)=>this.map.forEach(t,s),this.values=()=>this.map.values(),this.set=(t,s)=>this.map.set(t,s),this.setEdge=t=>this.set(t.t,t),this.getEdgesByTargetNodeId=t=>new Set(s.filter(Object.fromEntries(this.map),s=>s.nodeId.equals(t))),this.removeEdgesByTargetNodeId=t=>this.removeEdges(this.getEdgesByTargetNodeId(t)),this.removeEdges=t=>t.forEach(({t:t})=>this.removeEdgeById(t)),this.removeEdgeById=t=>this.map.delete(t),this.hasEdgeToTargetNodeId=t=>this.getEdgesByTargetNodeId(t).size>0,this.hasEdgeToTargetNode=({t:t})=>this.hasEdgeToTargetNodeId(t),this.map=t?new Map([[t.t,t]]):new Map}get size(){return this.map.size}get length(){return this.map.size}}class r{constructor(s,i){this.t=void 0,this.edgeData=void 0,this.targetNode=void 0,this.t=new t.ObjectId,this.edgeData=i,this.targetNode=s}get id(){return this.t.toHexString()}get data(){return this.edgeData}set data(t){this.edgeData=t}get node(){return this.targetNode}get nodeId(){return this.targetNode.t}get weight(){return this.edgeData.weight}set weight(t){this.edgeData.weight=t}}class n{constructor(t=new Map){this.map=void 0,this.has=t=>this.map.has(t),this.hasNode=t=>this.has(t.t),this.addNode=t=>!this.hasNode(t)&&this.map.set(t.t,new e),this.hasEdge=(t,s)=>this.hasNode(t)&&this.map.get(t.t).hasEdgeToTargetNode(s),this.addEdge=(t,s,i)=>this.addBiEdge(t,s,i),this.addBiEdge=(t,s,i)=>this.addDiEdge(t,s,i)&&this.addDiEdge(s,t,i),this.addDiEdge=(t,s,i)=>this.createMissingNodes(t,s)&&this.map.get(t.t).setEdge(new r(s,i)),this.createMissingNodes=(t,s)=>this.hasSourceAndTarget(t.t,s.t)||this.addMissingNodes(t,s),this.addMissingNodes=(t,s)=>{!this.has(t.t)&&this.addNode(t),!this.has(s.t)&&this.addNode(s)},this.hasSourceAndTarget=(t,s)=>this.has(t)&&this.has(s),this.getEdgeMap=t=>this.map.get(t),this.getEdgeMapByNode=t=>this.getEdgeMap(t.t),this.values=()=>this.map.values(),this.entries=()=>this.map.entries(),this.clear=()=>this.map.clear(),this.removeNode=({t:t})=>this.removeNodeById(t),this.removeNodeById=t=>this.has(t)&&this.map.delete(t)&&this.map.forEach(s=>s.removeEdgesByTargetNodeId(t)),this.map=new Map,t.forEach(this.addNode)}get size(){return this.map.size}}exports.AdjacencyMap=n,exports.Edge=r,exports.EdgeMap=e,exports.Graph=class{constructor(s){this.t=void 0,this.nodeMap=void 0,this.adjacencyMap=void 0,this.metaData=void 0,this.addNode=t=>(this.nodeMap.addNode(t),this.adjacencyMap.addNode(t),t),this.addNodes=t=>t.forEach(t=>this.addNode(t)),this.addNewNode=t=>this.addNode(new i(t)),this.addEdge=(t,s,i)=>this.createMissingNodes(t,s)&&this.adjacencyMap.addEdge(t,s,i),this.addBiEdge=(t,s,i)=>this.addEdge(t,s,i),this.addDiEdge=(t,s,i)=>this.createMissingNodes(t,s)&&this.adjacencyMap.addDiEdge(t,s,i),this.createMissingNodes=(t,s)=>this.hasSourceAndTargetNodes(t,s)||this.addMissingNodes(t,s),this.addMissingNodes=(t,s)=>{!this.hasNode(t)&&this.addNode(t),!this.hasNode(s)&&this.addNode(s)},this.hasSourceAndTargetNodes=(t,s)=>this.hasNode(t)&&this.hasNode(s),this.hasNode=t=>this.nodeMap.hasNode(t),this.t=new t.ObjectId,this.nodeMap=new h,this.adjacencyMap=new n,this.metaData=s}get nodes(){return this.nodeMap.entries()}get nodeValues(){return this.nodeMap.values()}get size(){return this.nodeMap.size}get edgeCount(){return this.adjacencyMap.size}getNodeById(t){return this.nodeMap.getNodeById(t)}},exports.Node=i,exports.NodeMap=h;
//# sourceMappingURL=index.cjs.js.map
