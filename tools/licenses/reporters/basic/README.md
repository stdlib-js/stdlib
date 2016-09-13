# Reporter

> Basic license information reporter.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var reporter = require( '/path/to/stdlib/tools/licenses/reporters/basic' );
```

#### reporter( results )

Returns (unfiltered) license results.

``` javascript
var licenses = require( '/path/to/stdlib/tools/licenses/licenses' );

licenses( onResults );

function onResults( error, results ) {
    if ( error ) {
        throw error;
    }
    console.dir( reporter( results ) );
}
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
Usage: licenses-reporter [options]

Options:

  -h,    --help                      Print this message.
  -V,    --version                   Print the package version.
```

<!-- </usage> -->


<!-- <notes> -->

### Notes

* Use as part of a standard stream pipeline.

<!-- </notes> -->


<!-- <examples> -->

### Examples

``` bash
$ licenses | licenses-reporter
```

Example output:

``` text

Package licenses:

path-platform@0.0.1
└── license: UNKNOWN

optimist@0.5.2
├── package.json: MIT/X11
└── license: MIT

resolve@0.4.3
├── package.json: MIT
├── license: MIT
└── readme: MIT

shell-quote@1.3.3
├── package.json: MIT
└── readme: MIT

```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->
