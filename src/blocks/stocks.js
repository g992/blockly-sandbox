/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author abbychau@gmail.com (Abby Chau)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks

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
  ["open", "open"],
  ["high", "high"],
  ["low", "low"],
  ["close", "close"]
];

Blockly.Blocks["rsi"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("RSI at")
      .appendField(new Blockly.FieldDropdown(timeframeDropdown), "timeframe")
      .appendField("period")
      .appendField(new Blockly.FieldNumber(14), "period")
      .appendField("price")
      .appendField(new Blockly.FieldDropdown(priceDropdown), "price")
      .appendField("index")
      .appendField(new Blockly.FieldNumber(1), "index");
    this.setOutput(true);
    this.setColour(230);
  }
};

Blockly.JavaScript["rsi"] = function (block) {
  var timeframe = block.getFieldValue("timeframe");
  var period = block.getFieldValue("period");
  var price = block.getFieldValue("price");
  var index = block.getFieldValue("index");
  var code = `RSI('${timeframe}',${period},${price},${index})`;
  return code;
};

Blockly.Blocks["var"] = {
  init: function () {
    this.setOutput(true, "Number");
    this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "variable");
    this.setColour(230);
    this.setTooltip("variable");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["var"] = function (block) {
  var variable = block.getFieldValue("variable");
  return variable;
};

Blockly.Blocks["base"] = {
  init: function () {
    this.appendValueInput("BaseExpr").appendField("Base");
    this.setInputsInline(true);
    this.setColour(65);
  }
};

Blockly.JavaScript["base"] = function (block) {
  console.log(block);
  var value_baseexpr = block.getFieldValue("BaseExpr");
  Blockly.JavaScript.valueToCode(
    block,
    "BaseExpr",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  console.log(value_baseexpr);

  return value_baseexpr;
};

Blockly.Blocks["stock_buy_simple"] = {
  init: function () {
    this.appendValueInput("Number")
      .setCheck("Number")
      .appendField("Buy Stock ID")
      .appendField(new Blockly.FieldNumber(0), "ID")
      .appendField("For amount")
      .appendField(new Blockly.FieldNumber(0), "Amount")
      .appendField("At Price")
      .appendField(new Blockly.FieldNumber(0), "Price");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["stock_buy_simple"] = function (block) {
  var number_id = block.getFieldValue("ID");
  var number_amount = block.getFieldValue("Amount");
  var number_price = block.getFieldValue("Price");
  var value_number = Blockly.JavaScript.valueToCode(
    block,
    "Number",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `buy(${number_id},${number_amount},${number_price},${value_number});\n`;
  return code;
};

Blockly.Blocks["stock_buy_prog"] = {
  init: function () {
    this.appendValueInput("Number")
      .setCheck("Number")
      .appendField("Buy Stock ID");
    this.appendValueInput("NAME").setCheck("Number").appendField("For amount");
    this.appendValueInput("NAME").setCheck("Number").appendField("At Price");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, "String");
    this.setColour(230);
    this.setTooltip("buy id");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["stock_buy_prog"] = function (block) {
  var value_number = Blockly.JavaScript.valueToCode(
    block,
    "Number",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var value_name = Blockly.JavaScript.valueToCode(
    block,
    "NAME",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var code = `buy(${value_number},${value_name},${value_name});\n`;
  return code;
};

Blockly.Blocks["stock_fetch_price"] = {
  init: function () {
    this.appendValueInput("Fetch")
      .setCheck("Number")
      .appendField("Fetch Price of Stock ID:");
    this.appendDummyInput()
      .appendField("And set to:")
      .appendField(new Blockly.FieldVariable("item"), "variable");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("fetch stock price");
    this.setHelpUrl("https://example.com");
  }
};

Blockly.JavaScript["stock_fetch_price"] = function (block) {
  var value_fetch = Blockly.JavaScript.valueToCode(
    block,
    "Fetch",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  var variable_variable = Blockly.JavaScript.nameDB_.getName(
    block.getFieldValue("variable"),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  var code = `fetch_price(${value_fetch},${variable_variable});\n`;
  return code;
};
