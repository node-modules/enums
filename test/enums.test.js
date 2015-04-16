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
    status.CLOSED.should.have.property('ordinal', 0);
    status.getByCode('1').should.have.property('name', 'CLOSED');
    status.getBy('name', 'CLOSED').should.have.property('name', 'CLOSED');
    status.CLOSED.eql(status.CLOSED).should.be.true;
    status.CLOSED.eql(status.OPENED).should.be.false;

    var status2 = new Enums(status);
    status2.should.have.property('CLOSED');
  });

});