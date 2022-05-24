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

const macdDropdown = [
  ["MACD", "MACD"],
  ["signal", "signal"],
  ["histogram", "histogram"]
];

const truefalseDropdown = [
  ["false", "false"],
  ["true", "true"]
];

Blockly.Blocks["macd"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("MACD at")
      .appendField(new Blockly.FieldDropdown(timeframeDropdown), "timeframe");
    this.appendDummyInput()
      .appendField("fast period")
      .appendField(new Blockly.FieldNumber(5, 0, 200), "fastPeriod");
    this.appendDummyInput()
      .appendField("slow period")
      .appendField(new Blockly.FieldNumber(8, 0, 200), "slowPeriod");
    this.appendDummyInput()
      .appendField("signal period")
      .appendField(new Blockly.FieldNumber(3, 0, 200), "signalPeriod");
    this.appendDummyInput()
      .appendField("line")
      .appendField(new Blockly.FieldDropdown(macdDropdown), "line");
    this.appendDummyInput()
      .appendField("price")
      .appendField(new Blockly.FieldDropdown(priceDropdown), "price");
    this.appendDummyInput()
      .appendField("simple MA oscillator")
      .appendField(
        new Blockly.FieldDropdown(truefalseDropdown),
        "SimpleMAOscillator"
      );
    this.appendDummyInput()
      .appendField("simple MA signal")
      .appendField(
        new Blockly.FieldDropdown(truefalseDropdown),
        "SimpleMASignal"
      );
    this.appendDummyInput()
      .appendField("index")
      .appendField(new Blockly.FieldNumber(1, 1, 200), "index");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["macd"] = function (block) {
  var dropdown_timeframe = block.getFieldValue("timeframe");
  var number_fastPeriod = block.getFieldValue("fastPeriod");
  var number_slowPeriod = block.getFieldValue("slowPeriod");
  var number_signalPeriod = block.getFieldValue("signalPeriod");
  var dropdown_line = block.getFieldValue("line");
  var dropdown_price = block.getFieldValue("price");
  var dropdown_SimpleMAOscillator = block.getFieldValue("SimpleMAOscillator");
  var dropdown_SimpleMASignal = block.getFieldValue("SimpleMASignal");
  var number_index = block.getFieldValue("index");
  // TODO: Assemble JavaScript into code variable.
  var code = `BB('${dropdown_timeframe}',${number_fastPeriod},${number_slowPeriod},${number_signalPeriod},'${dropdown_price}',${dropdown_SimpleMAOscillator},${dropdown_SimpleMASignal},${number_index})['${dropdown_line}']`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks["macd_simple"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("MACD at")
      .appendField(new Blockly.FieldDropdown(timeframeDropdown), "timeframe");
    this.appendDummyInput()
      .appendField("fast period")
      .appendField(new Blockly.FieldNumber(5, 0, 200), "fastPeriod");
    this.appendDummyInput()
      .appendField("slow period")
      .appendField(new Blockly.FieldNumber(8, 0, 200), "slowPeriod");
    this.appendDummyInput()
      .appendField("signal period")
      .appendField(new Blockly.FieldNumber(3, 0, 200), "signalPeriod");
    this.appendDummyInput()
      .appendField("line")
      .appendField(new Blockly.FieldDropdown(macdDropdown), "line");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript["macd_simple"] = function (block) {
  var dropdown_timeframe = block.getFieldValue("timeframe");
  var number_fastPeriod = block.getFieldValue("fastPeriod");
  var number_slowPeriod = block.getFieldValue("slowPeriod");
  var number_signalPeriod = block.getFieldValue("signalPeriod");
  var dropdown_line = block.getFieldValue("line");
  // TODO: Assemble JavaScript into code variable.
  var code = `BB('${dropdown_timeframe}',${number_fastPeriod},${number_slowPeriod},${number_signalPeriod})['${dropdown_line}']`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
