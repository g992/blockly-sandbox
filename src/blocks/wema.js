import * as Blockly from "blockly/core";

const timeframeDropdown = [
  ["1m", "1m"],
  ["3m", "3m"],
  ["5m", "5m"],
  ["15m", "15m"],
  ["1h", "1h"],
  ["2h", "2h"],
  ["4h", "4h"],
  ["12h", "12h"],
  ["1d", "1d"],
  ["1w", "1w"],
  ["1M", "1M"]
];

const priceDropdown = [
  ["close", "close"],
  ["high", "high"],
  ["low", "low"],
  ["open", "open"]
];

Blockly.Blocks["wema"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("WEMA at")
      .appendField(new Blockly.FieldDropdown(timeframeDropdown), "timeframe");
    this.appendDummyInput()
      .appendField("period")
      .appendField(new Blockly.FieldNumber(14, 0, 200), "period");
    this.appendDummyInput()
      .appendField("price")
      .appendField(new Blockly.FieldDropdown(priceDropdown), "price");
    this.appendDummyInput()
      .appendField("index")
      .appendField(new Blockly.FieldNumber(1, 1, 200), "index");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["wema"] = function (block) {
  var dropdown_timeframe = block.getFieldValue("timeframe");
  var number_period = block.getFieldValue("period");
  var dropdown_price = block.getFieldValue("price");
  var number_index = block.getFieldValue("index");
  // TODO: Assemble JavaScript into code variable.
  var code = `WEMA('${dropdown_timeframe}',${number_period},'${dropdown_price}',${number_index})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["wema_simple"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("WEMA at")
      .appendField(new Blockly.FieldDropdown(timeframeDropdown), "timeframe");
    this.appendDummyInput()
      .appendField("period")
      .appendField(new Blockly.FieldNumber(14, 0, 200), "period");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["wema_simple"] = function (block) {
  var dropdown_timeframe = block.getFieldValue("timeframe");
  var number_period = block.getFieldValue("period");
  // TODO: Assemble JavaScript into code variable.
  var code = `WEMA('${dropdown_timeframe}',${number_period})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
