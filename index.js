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
  this.code = item.code || null;
  this.message = item.message || null;
  this.ordinal = ordinal;
}

Item.prototype.toString = function () {
  return this.name;
};

function Enums(enums) {
  this.enums = [];
  if (!Array.isArray(enums)) {
    var tmp = [];
    for (var key in enums) {
      tmp.push({
        name: key,
        code: enums[key]
      });
    }
    enums = tmp;
  }
  for (var i = 0, len = enums.length; i < len; i++) {
    var it = enums[i];
    if (typeof it === 'string') {
      it = {name: it};
    }
    var obj = new Item(it, i);
    this[obj.name] = obj;
    this.enums.push(obj);
  }
}

Enums.prototype.get = function (name) {
  var enums = this.enums;
  for (var i = 0, len = enums.length; i < len; i++) {
    var it = enums[i];
    if (it.name === name) {
      return it;
    }
  }
  return null;
};

Enums.prototype.getByCode = function (code) {
  var enums = this.enums;
  for (var i = 0, len = enums.length; i < len; i++) {
    var it = enums[i];
    if (it.code === code) {
      return it;
    }
  }
  return null;
};

Enums.prototype.values = function () {
  return this.enums;
};

module.exports = Enums;