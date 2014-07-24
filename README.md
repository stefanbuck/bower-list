# bower-list 
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image]

A static list of bower packages


## Install

```bash
$ npm install --save bower-list
```


## Usage

```javascript
var bowerList = require('bower-list');

var options = {
  filter: ['name', 'website']
};
bowerList(options, function(err, data) {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
  // [ { name: '10digit-validation', website: 'https://github.com/10digit/validation' },
  //   { name: '1140px-responsive-css-grid', website: 'https://github.com/aosmialowski/1140px-Responsive-CSS-Grid' },
  //   { name: '15puzzle', website: 'https://github.com/rupertqin/15puzzle' }
  // ]
});

```

## License

Copyright (c) 2014 Stefan Buck. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/bower-list
[npm-image]: https://badge.fury.io/js/bower-list.svg
[daviddm-url]: https://david-dm.org/stefanbuck/bower-list.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/stefanbuck/bower-list
