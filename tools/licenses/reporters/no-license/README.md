# No License

> Reporter which filters license results for packages not having a license.


<!-- <intro> -->

<!-- </intro> -->


<!-- <usage> -->

## Usage

``` javascript
var reporter = require( '/path/to/stdlib/tools/licenses/reporters/no-license' );
```

#### reporter( results )

Filters licenses results for packages not having a license.

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
Usage: licenses-no-license [options]

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

To pretty print license results,

``` bash
$ licenses | licenses-no-license
```

Example output:

``` text

Packages missing a license:

single-line-log@0.4.1
├── path: /path/to/node_modules/single-line-log
└── repo: https://github.com/freeall/single-line-log

domelementtype@1.3.0
├── path: /path/to/node_modules/domelementtype
└── repo: https://github.com/FB55/domelementtype

domhandler@2.3.0
├── path: /path/to/node_modules/domhandler
└── repo: https://github.com/fb55/DomHandler

domutils@1.5.1
├── path: /path/to/node_modules/domutils
└── repo: https://github.com/FB55/domutils

domelementtype@1.1.3
├── path: /path/to/node_modules/dom-serializer/node_modules/domelementtype
└── repo: https://github.com/FB55/domelementtype

indexof@0.0.1
├── path: /path/to/node_modules/indexof
└── repo: UNKNOWN

merge@1.0.0
├── path: /path/to/node_modules/merge
└── repo: UNKNOWN

taffydb@2.6.2
├── path: /path/to/node_modules/taffydb
└── repo: https://github.com/typicaljoe/taffydb

base64-js@0.0.2
├── path: /path/to/node_modules/bops/node_modules/base64-js
└── repo: https://github.com/beatgammit/deflate-js

uglify-js@2.2.5
├── path: /path/to/node_modules/ruglify/node_modules/uglify-js
└── repo: https://github.com/mishoo/UglifyJS2

path-platform@0.0.1
├── path: /path/to/node_modules/testling/node_modules/path-platform
└── repo: https://github.com/tjfontaine/node-path-platform

```

To use as part of a pipeline,

``` bash
$ licenses | licenses-no-license | cat
{"id":"...","parents":["..."],...,"licenses":{...}}
{"id":"...","parents":["..."],...,"licenses":{...}}
...
```

<!-- </examples> -->

<!-- </cli> -->


<!-- <links> -->

<!-- </links> -->
