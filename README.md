## jstojson: Convert your javascript object to a valid JSON

# Usage

`jstojson ./test.js`

sample input file - test.js
```
{
  foo: 'bar'
}
```

output - test.json
```
{
  "foo": "bar"
}
```

# Disclaimer

`jstojson` currently utilizes `eval()` method which means if you pass in a malicious piece of code, it could potentially harm your system. So use it at your own risk.
