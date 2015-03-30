/**!
 * enum - index.js
 *
 * MIT Licensed
 *
 * Authors:
 *   汤尧 <tangyao@taobao.com> 
 */

'use strict';

function Enums(enums) {
  this.enums = [];
  if (!Array.isArray(enums)) {
    enums = [enums];
  }
  for (var i = 0, len = enums.length; i < len; i++) {
    var item = enums[i];
    if (typeof item === 'string') {
      item = {name: item};
    }
    item.ordinal = i;
    item.eql = function (that) {
      if (!that || !that.name) {
        return false;
      }
      return this.name === that.name;
    }
    this[item.name] = item;
    this.enums.push(item);
  }
}

Enums.prototype.getByCode = function (code) {
  return this.getBy('code', code);
};

Enums.prototype.getBy = function (name, val) {
  var enums = this.enums;
  for (var i = 0, len = enums.length; i < len; i++) {
    var item = enums[i];
    if (item[name] === val) {
      return item;
    }
  }
  return null;
};

Enums.prototype.values = function () {
  return this.enums;
};

module.exports = Enums;