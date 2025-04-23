<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Tools

> Statistical reduction tools.

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/stats/tools/reduce' );
```

#### ns

Namespace containing tools for performing statistical reductions.

```javascript
var o = ns;
// returns {...}
```

The namespace contains the following:

<!-- <toc pattern="*"> -->

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var max = require( '@stdlib/stats/base/ndarray/max' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ns = require( '@stdlib/stats/tools/reduce' );

// Define a list of supported input dtypes:
var idtypes = [
    'float64',
    'float32',
    'generic'
];

// Define a list of supported output dtypes:
var odtypes = [
    'float64',
    'float32',
    'generic'
];

// Create a dispatch table:
var table = {
    'default': max
};

// Create a function for performing a reduction:
var f = ns.unaryStridedDispatchFactory( table, [ idtypes ], odtypes, 'same' );

// Create an input array:
var xbuf = [ -1.0, 2.0, -3.0, 4.0 ];
var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );

// Perform a reduction:
var out = f( x );
// returns <ndarray>

var v = out.get();
// returns 4.0
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
