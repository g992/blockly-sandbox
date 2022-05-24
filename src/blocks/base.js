import * as Blockly from "blockly/core";

Blockly.Blocks["base"] = {
  init: function () {
    this.appendValueInput("base").setCheck(null).appendField("base");
    this.setInputsInline(true);
    this.setColour(90);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["base"] = function (block) {
  var value_base = Blockly.JavaScript.valueToCode(
    block,
    "base",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  value_base = value_base.replace("&&", "and");
  value_base = value_base.replace("||", "or");
  return value_base;
};
