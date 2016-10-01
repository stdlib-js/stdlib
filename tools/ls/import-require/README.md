# Import and Require Paths

> List import and require paths.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var ls = require( '/path/to/stdlib/tools/ls/import-require' );
```

#### ls( src )

Searches for import and require paths in a source `string` or [`Buffer`][node-buffer].

``` javascript
var readFile = require( '@stdlib/fs/read-file' ).sync;

var src = readFile( __filename );
var results = ls( src );

console.dir( results );
```

<!-- </usage> -->


<!-- <examples> -->

<!-- ## Examples

``` javascript

``` -->

<!-- </examples> -->


<!-- <cli> -->

---

## CLI

<!-- <usage> -->

### Usage

``` bash
Usage: import-require [options | src]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

* May be used as part of a standard stream pipeline or TTY.

<!-- </notes> -->


<!-- <examples> -->

### Examples

To pretty print results,

``` bash
$ import-require "$(cat ./examples/index.js)"
$ cat ./examples/index.js | import-require
```

Example output:

``` text

Literals:
├── ./../lib/stdlib.js
└── ./../lib

Expressions:
└── prefix+'@stdlib/fs/read-file'

```

To use as part of a pipeline,

``` bash
$ cat ./examples/index.js | import-require | cat
# => {"literals":["./../lib/stdlib.js","./../lib"],"expressions":["prefix+\'@stdlib/fs/read-file\'"]}
```


<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

[node-buffer]: https://nodejs.org/api/buffer.html

<!-- </links> -->
