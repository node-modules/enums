/**
 * MIT Licensed
 *
 * Authors:
 *   汤尧 <tangyao@taobao.com>
 */

'use strict';

function Enums(items) {
  items = items || [];
  if (items.constructor.name === 'Enums') {
    items = items.enums;
  }
  this.enums = [];
  if (!Array.isArray(items)) {
    items = [items];
  }
  for (var i = 0, len = items.length; i < len; i++) {
    var item = items[i];
    if (typeof item === 'string') {
      item = { name: item };
    }
    item.ordinal = i;
    Object.defineProperty(item, 'eql', {
      configurable: true,
      enumerable: false,
      value: function(that) {
        if (!that || !that.name) {
          return false;
        }
        return this.name === that.name;
      },
    });
    this[item.name] = item;
    this.enums.push(item);
  }
}

Enums.prototype.getByCode = function(code) {
  return this.getBy('code', code);
};

Enums.prototype.getBy = function(name, val) {
  var enums = this.enums;
  for (var i = 0, len = enums.length; i < len; i++) {
    var item = enums[i];
    if (item[name] === val) {
      return item;
    }
  }
  return null;
};

Enums.prototype.values = function() {
  return this.enums;
};

module.exports = Enums;
