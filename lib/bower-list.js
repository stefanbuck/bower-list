/*
 * bower-list
 * https://github.com/stefanbuck/bower-list
 *
 * Copyright (c) 2014 Stefan Buck
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');
var _ = require('lodash');

var REGISTRY_URL = 'https://bower-component-list.herokuapp.com';

var performRequest = function(options, cb) {
  options.json = true;

  request.get(options, function( err, response, body) {
    if (err) {
      return cb(err);
    }
    cb(null, body);
  });
};

module.exports = function(options, cb) {
  options = options || {};
  options.uri = options.uri || REGISTRY_URL;

  var result = {};
  performRequest(options, function(err, data) {
    if (err) {
      return cb(err);
    }
    data.forEach(function(item) {
      if (options.filter) {
         result[item.name] = _.pick(item, options.filter);
      } else {
        result[item.name] = item;
      }
    });
    cb(null, result);
  });
};
