# Message Verification and Signing
Okcore implementation of [okcash message signing and verification](http://bitcoin.stackexchange.com/questions/3337/what-are-the-safety-guidelines-for-using-the-sign-message-feature/3339#3339). This is used to cryptographically prove that a certain message was signed by the holder of an address private key.

For more information refer to the [okcore-message](https://github.com/okcashpro/okcore-message) github repo.

## Installation
Message Verification and Signing is implemented as a separate module and you must add it to your dependencies:

For node projects:

```bash
npm install okcore-message --save
```

For client-side projects:

```bash
bower install okcore-message --save
```

## Example
To sign a message:

```javascript
var privateKey = PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H9XORZInM3B3a8BNS65kwgmbnqEuq73rjAQ5VKyVzTrzPOdHdHOY2lfoph5auvMgLSr7bh+nEQSG/f2kv9TnsbY=';
var verified = Message('hello, world').verify(address, signature);
```
