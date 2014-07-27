/*
 * bower-list
 * https://github.com/stefanbuck/bower-list
 *
 * Copyright (c) 2014 Stefan Buck
 * Licensed under the MIT license.
 */

'use strict';

var bowerList = require('../');

var options = {
  filter: ['name', 'website']
};

bowerList(options, function(err, data) {
  if (err) {
    throw err;
  }

  console.log(data);
});
