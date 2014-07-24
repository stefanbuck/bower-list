/*
 * bower-list
 * https://github.com/stefanbuck/bower-list
 *
 * Copyright (c) 2014 Stefan Buck
 * Licensed under the MIT license.
 */

'use strict';

var jsonRequester = require('json-requester');
var REGISTRY_URL = 'https://bower-component-list.herokuapp.com';

module.exports = function(options, cb) {
  if (typeof options === 'function') {
    cb = options;
    options = {};
  }

  options = options || {};
  options.uri = options.uri || REGISTRY_URL;

  jsonRequester(options, function(err, data) {
    if (err) {
      return cb(err);
    }
    cb(null, data);
  });
};
