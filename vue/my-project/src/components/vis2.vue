 
<template>
  <div class="wrapper">
    <h2>Network</h2>
    <network
    class="network"
    ref="network"
    :nodes="network.nodes"
    :edges="network.edges"
    :options="network.options"
    @click="networkEvent('click')"
    @double-click="networkEvent('doubleClick')"
    @oncontext="networkEvent('oncontext')"
    @hold="networkEvent('hold')"
    @release="networkEvent('release')"
    @select="networkEvent('select')"
    @select-node="networkEvent('selectNode')"
    @select-edge="networkEvent('selectEdge')"
    @deselect-node="networkEvent('deselectNode')"
    @deselect-edge="networkEvent('deselectEdge')"
    @drag-start="networkEvent('dragStart')"
    @dragging="networkEvent('dragging')"
    @drag-end="networkEvent('dragEnd')"
    @hover-node="networkEvent('hoverNode')"
    @blur-node="networkEvent('blurNode')"
    @hover-edge="networkEvent('hoverEdge')"
    @blur-edge="networkEvent('blurEdge')"
    @zoom="networkEvent('zoom')"
    @show-popup="networkEvent('showPopup')"
    @hide-popup="networkEvent('hidePopup')"
    @start-stabilizing="networkEvent('startStabilizing')"
    @stabilization-progress="networkEvent('stabilizationProgress')"
    @stabilization-iterations-done="networkEvent('stabilizationIterationsDone')"
    @stabilized="networkEvent('stabilized')"
    @resize="networkEvent('resize')"
    @init-redraw="networkEvent('initRedraw')"
    @before-drawing="networkEvent('beforeDrawing')"
    @after-drawing="networkEvent('afterDrawing')"
    @animation-finished="networkEvent('animationFinished')"
    @config-change="networkEvent('configChange')"
    @nodes-mounted="networkEvent('nodes-mounted')"
    @nodes-add="networkEvent('nodes-add')"
    @nodes-update="networkEvent('nodes-update')"
    @nodes-remove="networkEvent('nodes-remove')"
    @edges-mounted="networkEvent('edges-mounted')"
    @edges-add="networkEvent('edges-add')"
    @edges-update="networkEvent('edges-update')"
    @edges-remove="networkEvent('edges-remove')">
  </network>
  <button @click="addNode">Add node</button>
  <button @click="addEdge">Add edge</button>
  <button @click="resetNetwork">Reset Network</button>
  <button @click="removeNode">Remove Node</button>
  <button @click="removeEdge">Remove Edge</button> 

  <hr>

  

</div>
</template>

<script>
import { Timeline, Graph2d, Network } from 'vue2vis';
export default {
  data: () => ({
     network: {
      nodes: [
      {id: 1, label:'html color'},
    {id: 2, label:'rgb color'},
    {id: 3, label:'hex color'},
    {id: 4, label:'rgba color'},
    {id: 5, label:'colorObject'},
    {id: 6, label:'colorObject + highlight'},
    {id: 7, label:'colorObject + highlight + hover'}
      ],
      edges: [
        { id: 1, from: 1, to: 3 ,'label':'亲友'},
        { id: 2, from: 1, to: 2 },
        { id: 3, from: 2, to: 4 },
        { id: 4, from: 2, to: 5 },
        { id: 5, from: 3, to: 2 } 
      ],
      options: {
          nodes:{
            shape: 'dot', 
            size: 24,
            font: {
                size: 14,
                color: '#333'
            },
            color: {
              border: 'blue',
              background: '#F00',
              highlight: {
                border:'#FF0',
                background:'#FF0'
              },
              hover: {
                border:'#f00',
                background:  '#f00'
              }
            }, 
          }
      }
    }
  }),
  components: {
    Network,
  },
  methods: {
    networkEvent(eventName) {
      // if (this.networkEvents.length > 500) this.networkEvents = '';
      // this.networkEvents += `${eventName}, `;
    },
    
    addNode() {
      const id = new Date().getTime();
      this.network.nodes.push({ id, label: 'New node' });
    },
    addEdge() {
      const n1 = Math.floor(Math.random() * this.network.nodes.length);
      const n2 = Math.floor(Math.random() * this.network.nodes.length);
      this.network.edges.push({
        id: `${this.network.nodes[n1].id}-${this.network.nodes[n2].id}`,
        from: this.network.nodes[n1].id,
        to: this.network.nodes[n2].id,
      });
    },
    resetNetwork() {
      this.network = {
        nodes: [
          { id: 1, label: 'Node 1' },
          { id: 2, label: 'Node 2' },
          { id: 3, label: 'Node 3' },
          { id: 4, label: 'Node 4' }, 
        ],
        edges: [
          { id: 1, from: 1, to: 3 },
          { id: 2, from: 1, to: 2 },
          { id: 3, from: 2, to: 4 },
          { id: 4, from: 2, to: 5 },
          { id: 5, from: 3, to: 3 },
        ],
        options: {},
      };
    },
    removeNode() {
      this.network.nodes.splice(0, 1);
    },
    removeEdge() {
      this.network.edges.splice(0, 1);
    },
  },
};
</script>

<style>
@import 'vue2vis/dist/vue2vis.css';
* {
  font-family: sans-serif;
}
.wrapper {
  padding: 20px 50px;
  text-align: center;
}
.events {
  text-align: left;
  height: 70px;
}
.network {
  height: 400px;
  border: 1px solid #ccc;
  margin: 5px 0;
}
</style> 