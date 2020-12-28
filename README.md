<img src="http://bitcore.io/css/images/module-message.png" alt="okcore message" height="35">
# Okcash Message Verification and Signing for Okcore


[![NPM Package](https://img.shields.io/npm/v/okcore-message.svg?style=flat-square)](https://www.npmjs.org/package/okcore-message)
[![Build Status](https://img.shields.io/travis/okcashpro/okcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/okcashpro/okcore-message)
[![Coverage Status](https://img.shields.io/coveralls/okcashpro/okcore-message.svg?style=flat-square)](https://coveralls.io/r/okcashpro/okcore-message?branch=master)

okcore-message adds support for verifying and signing okcash messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main okcore repo](https://github.com/okcashpro/okcore) for more information.

## Getting Started

```sh
npm install okcore-message
```

```sh
bower install okcore-message
```

To sign a message:

```javascript
var okcore = require('okcore-lib');
var Message = require('okcore-message');

var privateKey = okcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/okcashpro/okcore/blob/master/CONTRIBUTING.md) on the main okcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/okcashpro/okcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.
Copyright 2016 The Okcore Developers

