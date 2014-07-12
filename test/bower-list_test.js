'use strict';

var fs = require('fs');
var path = require('path');
var bowerList = require('../lib/bower-list.js');
var assert = require('should');
var sinon = require('sinon');
var request = require('request');

var filename = path.resolve(__dirname, 'response.json')
var response = JSON.parse(fs.readFileSync(filename));

describe('bowerList', function () {

  beforeEach(function() {
    sinon.stub(request, 'get', function(params, cb) {
      if (params.uri === 'http://unknown.host') {
        return cb(new Error('Error'))
      }
      cb(null, null, response);
    });
  });

  afterEach(function() {
    request.get.restore();
  });

  it('list of packages', function(cb) {
    bowerList({}, function(err, result) {
      request.get.called.should.be.true;
      Object.keys(result).should.have.a.lengthOf(10);
      cb(err);
    });
  });

  it('without a filter', function(cb) {
    bowerList({}, function(err, result) {
      request.get.called.should.be.true;
      var firstItem = result[Object.keys(result)[0]];
      Object.keys(firstItem).should.have.a.lengthOf(8);
      cb(err);
    });
  });

  it('with a filter', function(cb) {
    bowerList({filter: ['name']}, function(err, result) {
      request.get.called.should.be.true;
      var firstItem = result[Object.keys(result)[0]];
      Object.keys(firstItem).should.have.a.lengthOf(1);
      cb(err);
    });
  });

  it('catch the error', function(cb) {
    bowerList({uri: 'http://unknown.host'}, function(err, result) {
      err.should.be.an.Error;
      cb();
    });
  });
});
