var should = require('should');

var Enums = require('../');

describe('enums', function () {

  it('enums', function () {
    var status = new Enums([
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
    status.get('CLOSED').should.have.property('code', '1');
    status.getByCode('1').should.have.property('code', '1');
  });

  it('enums', function () {
    var status = new Enums({
      'CLOSED': '1',
      'OPENED': '2'
    });
    should.exist(status);
    status.should.have.property('CLOSED');
    status.should.have.property('OPENED');
    status.CLOSED.ordinal.should.eql(0);
    status.OPENED.ordinal.should.eql(1);
    'CLOSED'.should.eql(status.CLOSED.toString());
    'OPENED'.should.eql(status.OPENED.toString());
    status.get('CLOSED').should.have.property('code', '1');
    status.getByCode('1').should.have.property('code', '1');
  });

});