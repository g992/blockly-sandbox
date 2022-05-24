<template>
  <div>
    <div class="blocklyDiv" ref="blocklyDiv"></div>
    <xml> </xml>
  </div>
</template>

<script>
import * as Blockly from "blockly";
import { ZoomToFitControl } from "@blockly/zoom-to-fit";
import { createPlayground, toolboxCategories } from "@blockly/dev-tools";
import {
  ScrollOptions,
  ScrollBlockDragger,
  ScrollMetricsManager,
} from "@blockly/plugin-scroll-options";

export default {
  name: "BlocklyComponent",
  props: ["options"],
  mounted() {
    var options = this.$props.options || {
      toolbox: toolboxCategories,
      zoom: {
        controls: true,
      },
      plugins: {
        // These are both required.
        blockDragger: ScrollBlockDragger,
        metricsManager: ScrollMetricsManager,
      },
      move: {
        wheel: true, // Required for wheel scroll to work.
      },
    };
    if (!options.toolbox) {
      options.toolbox = this.$refs["blocklyToolbox"];
    }

    createPlayground(this.$refs["blocklyDiv"], this.createWorkspace, options);
  },
  methods: {
    createWorkspace(blocklyDiv, options) {
      this.workspace = Blockly.inject(blocklyDiv, options);

      const zoomToFit = new ZoomToFitControl(this.workspace);
      zoomToFit.init();
      const scroller = new ScrollOptions(this.workspace);
      scroller.init();

      return this.workspace;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blocklyDiv {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>