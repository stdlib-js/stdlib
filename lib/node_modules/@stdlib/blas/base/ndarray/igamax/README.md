<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# igamax

> Find the index of the first element having the maximum absolute value for all elements in a one-dimensional ndarray.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var igamax = require( '@stdlib/blas/base/ndarray/igamax' );
```

#### igamax( arrays )

Finds the index of the first element having the maximum absolute value for all elements in a one-dimensional ndarray.

```javascript
var vector = require( '@stdlib/ndarray/vector/ctor' );

var x = vector( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ], 'generic' );

var idx = igamax( [ x ] );
// returns 3
```

The function has the following parameters:

-   **arrays**: array-like object containing a one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var igamax = require( '@stdlib/blas/base/ndarray/igamax' );

var opts = {
    'dtype': 'generic'
};

var x = discreteUniform( [ 10 ], -500, 500, opts );
console.log( ndarray2array( x ) );

var out = igamax( [ x ] );
console.log( out );
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
