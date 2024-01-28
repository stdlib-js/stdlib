<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

<!-- lint disable maximum-heading-length -->

# ternaryFactory

> Create a factory function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.

<section class="usage">

## Usage

```javascript
var ternaryFactory = require( '@stdlib/random/strided/tools/ternary-factory' );
```

#### ternaryFactory( prng )

Returns a factory function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>
```

The function has the following parameters:

-   **prng**: ternary pseudorandom number generator.

* * *

#### factory( \[options] )

Returns a function for filling strided arrays with pseudorandom values drawn from a ternary PRNG.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>
```

The function has the following parameters:

-   **options**: function options.

The function supports the following options:

-   **prng**: pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
-   **seed**: pseudorandom value generator seed.
-   **state**: pseudorandom value generator state.
-   **copy**: boolean indicating whether to copy a provided pseudorandom value generator state.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var minstd = require( '@stdlib/random/base/minstd' );
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var opts = {
    'prng': minstd.normalized
};

var random = factory( opts );
// returns <Function>

var out = new Float64Array( 10 );
random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var opts = {
    'seed': 12345
};

var random = factory( opts );
// returns <Function>

var out = new Float64Array( 10 );
random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
```

* * *

#### random( N, param1, sp1, param2, sp2, param3, sp3, out, so )

Fills a strided array with pseudorandom values drawn from a ternary PRNG.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = new Float64Array( 10 );
// returns <Float64Array>

var v = random( out.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 1 );
// returns <Float64Array>
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **param1**: first PRNG parameter.
-   **sp1**: index increment for `param1`.
-   **param2**: second PRNG parameter.
-   **sp2**: index increment for `param2`.
-   **param3**: third PRNG parameter.
-   **sp3**: index increment for `param3`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

random( 3, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

// Initial arrays:
var param1 = new Float64Array( [ 2.0, 2.0, 2.0, 2.0, 2.0, 2.0 ] );
var param2 = new Float64Array( [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ] );
var param3 = new Float64Array( [ 3.0, 3.0, 3.0, 3.0, 3.0, 3.0 ] );

// Create offset views:
var view1 = new Float64Array( param1.buffer, param1.BYTES_PER_ELEMENT*3 ); // start at 4th element
var view2 = new Float64Array( param2.buffer, param2.BYTES_PER_ELEMENT*2 ); // start at 3rd element
var view3 = new Float64Array( param3.buffer, param3.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Create an output array:
var out = new Float64Array( 3 );

// Fill the output array:
random( out.length, view1, -1, view2, 1, view3, 1, out, 1 );
```

#### random.ndarray( N, param1, sp1, op1, param2, sp2, op2, param3, sp3, op3, out, so, oo )

Fills a strided array with pseudorandom values drawn from a ternary PRNG using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = new Float64Array( 10 );
// returns <Float64Array>

var v = random.ndarray( out.length, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, [ 3.0 ], 0, 0, out, 1, 0 );
// returns <Float64Array>
```

The function has the following additional parameters:

-   **op1**: starting index for `param1`.
-   **op2**: starting index for `param2`.
-   **op3**: starting index for `param3`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

random.ndarray( 3, [ 2.0 ], 0, 0, [ 5.0 ], 0, 0, [ 3.0 ], 0, 0, out, 2, 1 );
```

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var prng = random.PRNG;
// returns <Function>
```

#### random.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var seed = random.seed;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### random.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.seedLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### random.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var state = random.state;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### random.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.stateLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### random.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory();
// returns <Function>

var sz = random.byteLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var triangular = require( '@stdlib/random/base/triangular' );

var factory = ternaryFactory( triangular );
// returns <Function>

var random = factory({
    'prng': minstd
});
// returns <Function>

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var triangular = require( '@stdlib/random/base/triangular' );
var zeros = require( '@stdlib/array/zeros' );
var zeroTo = require( '@stdlib/array/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var ternaryFactory = require( '@stdlib/random/strided/tools/ternary-factory' );

// Create a PRNG factory function:
var factory = ternaryFactory( triangular );
// returns <Function>

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create a function for filling strided arrays:
var rand1 = factory( opts );
// returns <Function>

// Create an array:
var x1 = zeros( 10, 'float64' );

// Fill the array with pseudorandom numbers:
rand1( x1.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, x1, 1 );

// Create another function for filling strided arrays:
var rand2 = factory( opts );
// returns <Function>

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
rand2( x2.length, [ 2.0 ], 0, [ 5.0 ], 0, [ 3.0 ], 0, x2, 1 );

// Create a list of indices:
var idx = zeroTo( x1.length, 'generic' );

// Print the array contents:
logEach( 'x1[%d] = %.2f; x2[%d] = %.2f', idx, x1, idx, x2 );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
