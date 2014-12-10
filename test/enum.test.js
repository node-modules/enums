var should = require('should');

var Enum = require('../');

describe('enum', function () {

  it('enum', function () {
    var status = new Enum([
      {
        name: 'CLOSED',
        code: '1',
        message: 'shop close'
      },
      {
        name: 'OPENED',
        code: '2',
        message: 'shop open'
      }
    ]);
    should.exist(status);
    status.should.have.property('CLOSED');
    status.should.have.property('OPENED');
    status.CLOSED.ordinal.should.eql(0);
    status.OPENED.ordinal.should.eql(1);
    'CLOSED'.should.eql(status.CLOSED.toString());
    'OPENED'.should.eql(status.OPENED.toString());
  });

});