<template>
    <BlocklyComponent id="blockly1" :options="options" ref="foo"></BlocklyComponent>
    <p id="code">
      <button v-on:click="showCode()">Show JavaScript</button>
      <pre v-html="code"></pre>
    </p>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/base";
import "./blocks/rsi";
import "./blocks/cci";
import "./blocks/bb";
import "./blocks/macd";
import "./blocks/sma";
import "./blocks/ema";
import "./blocks/wma";
import "./blocks/wema";

import "./prompt";
import BlocklyJS from "blockly/javascript";
export default {
  name: "app",
  components: {
    BlocklyComponent,
  },
  data() {
    return {
      code: "",
      options: {
        media: "media/",
        grid: {
          spacing: 25,
          length: 3,
          colour: "#ccc",
          snap: true,
        },
        toolbox: `<xml>
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="base"></block>
            <block type="math_number"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          <category name="RSI" colour="%{BKY_LOOPS_HUE}">
            <block type="rsi_simple"></block>
            <block type="rsi_advanced"></block>
            <block type="rsi"></block>
          </category>
          <category name="CCI" colour="%{BKY_LOOPS_HUE}">
            <block type="cci_simple"></block>
            <block type="cci"></block>
          </category>
          <category name="BB" colour="%{BKY_LOOPS_HUE}">
            <block type="bb_simple"></block>
            <block type="bb"></block>
          </category>
          <category name="MACD" colour="%{BKY_LOOPS_HUE}">
            <block type="macd_simple"></block>
            <block type="macd"></block>
          </category>
          <category name="SMA" colour="%{BKY_LOOPS_HUE}">
            <block type="sma_simple"></block>
            <block type="sma"></block>
          </category>
          <category name="EMA" colour="%{BKY_LOOPS_HUE}">
            <block type="ema_simple"></block>
            <block type="ema"></block>
          </category>
          <category name="WMA" colour="%{BKY_LOOPS_HUE}">
            <block type="wma_simple"></block>
            <block type="wma"></block>
          </category>
          <category name="WEMA" colour="%{BKY_LOOPS_HUE}">
            <block type="wema_simple"></block>
            <block type="wema"></block>
          </category>
        </xml>`,
      },
    };
  },
  methods: {
    showCode() {
      this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  margin: 0;
}
#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
  margin: 0;
  background-color: beige;
}
#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 75%;
}
</style>
