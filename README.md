## About

A JavaScript client for Team Cymru's [Malware Hash Registry](https://www.team-cymru.org/Services/MHR/).

**Note:** The Malware Hash Registry is free for non-commercial use only.

## Install

```sh
$ npm install --save malware-hash-registry
```

## Usage

### Node.js

```javascript
var MalwareHashRegistry = require('malware-hash-registry');

var mhrClient = new MalwareHashRegistry();

// digests can be either MD5 or SHA-1
var digests = [
  '44D88612FEA8A8F36DE82E1278ABB02F', // malware
  '6e88d7fb0ac540ec143943fa0426139b'  // not malware
];

mhrClient.query(digests, function (err, results) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(results);
});
```

## Results Format

```js
{
  '44d88612fea8a8f36de82e1278abb02f': {
    timestamp: 1259633424000,
    detectionRate: 83
  },
  '6e88d7fb0ac540ec143943fa0426139b': {
    timestamp: null,
    detectionRate: null
  }
}
```

### Notes

#### The digest

The digest of the result is **always** lower-case.

If a digest isn't a valid MD5 or SHA-1, the result will not contain that digest.

#### The timestamp

The Malware Hash Registry sends timestamps back as seconds since the epoch.
Since JavaScript timestamps are milliseconds since the epoch, the timestamps
in the results will be milliseconds since the epoch.

The timestamp will be `null` if the Malware Hash Registry doesn't have a
detection rate for the digest.

## Testing

```sh
$ npm test
```

## License

MIT
