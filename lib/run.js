var MalwareHashRegistry = require('malware-hash-registry');

var mhrClient = new MalwareHashRegistry();

var digests = [
  '44D88612FEA8A8F36DE82E1278ABB02F', // eicar
  '6e88d7fb0ac540ec143943fa0426139b' // benign
];

mhrClient.query(digests, function (err, results) {
  if (err) {
    console.error(err);
    return;
  }

  console.log(results);
});
