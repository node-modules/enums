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
    this[item.name] = item;
    this.enums.push(item);
  }
}

Enums.prototype.getByCode = function (code) {
  var enums = this.enums;
  for (var i = 0, len = enums.length; i < len; i++) {
    var item = enums[i];
    if (item.code === code) {
      return item;
    }
  }
  return null;
};

Enums.prototype.values = function () {
  return this.enums;
};

module.exports = Enums;