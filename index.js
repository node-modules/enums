/**!
 * enum - index.js
 *
 * MIT Licensed
 *
 * Authors:
 *   汤尧 <tangyao@taobao.com> 
 */

'use strict';

function Item(item, ordinal) {
  this.name = item.name;
  this.code = item.code;
  this.message = item.message;
  this.ordinal = ordinal;
}

Item.prototype.toString = function () {
  return this.name;
};

function Enum(enums) {
  this.enums = [];
  for (var i = 0, len = enums.length; i < len; i++) {
    var it = new Item(enums[i], i);
    this[it.name] = it;
    this.enums.push(it);
  }
}

Enum.prototype.getEnumByCode = function (code) {
  var enums = this.enums;
  for (var i = 0, len = enums.length; i < len; i++) {
    var it = enums[i];
    if (it.code === code) {
      return it;
    }
  }
  return it;
};

Enum.prototype.values = function () {
  return this.enums;
};

module.exports = Enum;