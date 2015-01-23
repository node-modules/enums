var should = require('should');

var Enums = require('../');

describe('enums', function () {

  it('enums', function () {
    var status = new Enums([
      {
        name: 'CLOSED',
        code: '1',
        message: 'Shop close'
      },
      {
        name: 'OPENED',
        code: '2',
        message: 'Shop open'
      }
    ]);
    should.exist(status);
    status.should.have.property('CLOSED');
    status.should.have.property('OPENED');
    'CLOSED'.should.eql(status.CLOSED.name);
    'OPENED'.should.eql(status.OPENED.name);
    status.CLOSED.should.have.property('code', '1');
    status.getByCode('1').should.have.property('name', 'CLOSED');
  });

});