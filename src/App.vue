<template>
    <BlocklyComponent id="blockly1" :options="options" ref="foo"></BlocklyComponent>
    <p id="code">
      <button v-on:click="showCode()">Show JavaScript</button>
      <pre v-html="code"></pre>
    </p>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/stocks";
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
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
          </category>
          
          <category name="Indicators" colour="%{BKY_LOOPS_HUE}">
            <block type="var"></block>
            <block type="rsi"></block>
            <block type="stock_buy_prog"></block>
            <block type="stock_fetch_price"></block>
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
  width: 50%;
  height: 50%;
  margin: 0;
  background-color: beige;
}
#blockly1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
  height: 50%;
}
#blockly2 {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
}
</style>
