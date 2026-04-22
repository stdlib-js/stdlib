<!--

@license Apache-2.0

Copyright (c) {{YEAR}} {{COPYRIGHT}}.

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

# {{README_HEADING}}

> Fill a strided array with pseudorandom numbers drawn from {{README_FROM_DESC}}.

<section class="usage">

## Usage

```javascript
var {{ALIAS}} = require( '@{{PKG}}' );
```

#### {{ALIAS}}( N, {{PARAM_1}}, {{PARAM_1_STRIDE}}, out, so )

Fills a strided array with pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
{{ALIAS}}( out.length, [ {{PARAM_1_VALUE}} ], 0, out, 1 );
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **{{PARAM_1}}**: rate parameter.
-   **{{PARAM_1_STRIDE}}**: index increment for `{{PARAM_1}}`.
-   **out**: output array.
-   **so**: index increment for `out`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to access every other value in `out`,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

{{ALIAS}}( 3, [ {{PARAM_1_VALUE}} ], 0, out, 2 );
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Initial array:
var {{PARAM_1}}0 = new Float64Array( [ {{PARAM_1_VALUE}}, {{PARAM_1_VALUE}}, {{PARAM_1_VALUE}}, {{PARAM_1_VALUE}}, {{PARAM_1_VALUE}}, {{PARAM_1_VALUE}} ] );

// Create offset view:
var {{PARAM_1}}1 = new Float64Array( {{PARAM_1}}0.buffer, {{PARAM_1}}0.BYTES_PER_ELEMENT*3 ); // start at 4th element

// Create an output array:
var out = new Float64Array( 3 );

// Fill the output array:
{{ALIAS}}( out.length, {{PARAM_1}}1, -1, out, 1 );
```

#### {{ALIAS}}.ndarray( N, {{PARAM_1}}, {{PARAM_1_STRIDE}}, {{PARAM_1_OFFSET}}, out, so, oo )

Fills a strided array with pseudorandom numbers drawn from {{README_FROM_DESC}} using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
{{ALIAS}}.ndarray( out.length, [ {{PARAM_1_VALUE}} ], 0, 0, out, 1, 0 );
```

The function has the following additional parameters:

-   **{{PARAM_1_OFFSET}}**: starting index for `{{PARAM_1}}`.
-   **oo**: starting index for `out`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to access every other value in `out` starting from the second value,

```javascript
var out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

{{ALIAS}}.ndarray( 3, [ {{PARAM_1_VALUE}} ], 0, 0, out, 2, 1 );
```

#### {{ALIAS}}.factory( \[options] )

Returns a function for filling strided arrays with pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var random = {{ALIAS}}.factory();
// returns <Function>

// Create an array:
var out = new Float64Array( 10 );

// Fill the array with pseudorandom numbers:
random( out.length, [ {{PARAM_1_VALUE}} ], 0, out, 1 );
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var minstd = require( '@stdlib/random/base/minstd' );

var opts = {
    'prng': minstd.normalized
};
var random = {{ALIAS}}.factory( opts );

var out = new Float64Array( 10 );
random( out.length, [ {{PARAM_1_VALUE}} ], 0, out, 1 );
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var opts = {
    'seed': 12345
};
var random = {{ALIAS}}.factory( opts );

var out = new Float64Array( 10 );
random( out.length, [ {{PARAM_1_VALUE}} ], 0, out, 1 );
```

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = {{ALIAS}}.PRNG;
// returns <Function>
```

#### {{ALIAS}}.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var seed = {{ALIAS}}.seed;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = {{ALIAS}}.factory({
    'prng': minstd
});
// returns <Function>

var seed = random.seed;
// returns null
```

#### {{ALIAS}}.seedLength

Length of underlying pseudorandom number generator seed.

```javascript
var len = {{ALIAS}}.seedLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = {{ALIAS}}.factory({
    'prng': minstd
});
// returns <Function>

var len = random.seedLength;
// returns null
```

#### {{ALIAS}}.state

Writable property for getting and setting the underlying pseudorandom number generator state.

```javascript
var state = {{ALIAS}}.state;
// returns <Uint32Array>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = {{ALIAS}}.factory({
    'prng': minstd
});
// returns <Function>

var state = random.state;
// returns null
```

#### {{ALIAS}}.stateLength

Length of underlying pseudorandom number generator state.

```javascript
var len = {{ALIAS}}.stateLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = {{ALIAS}}.factory({
    'prng': minstd
});
// returns <Function>

var len = random.stateLength;
// returns null
```

#### {{ALIAS}}.byteLength

Size (in bytes) of underlying pseudorandom number generator state.

```javascript
var sz = {{ALIAS}}.byteLength;
// returns <number>
```

If the `factory` method is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;

var random = {{ALIAS}}.factory({
    'prng': minstd
});
// returns <Function>

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, both `{{ALIAS}}` and `{{ALIAS}}.ndarray` leave the output array unchanged.
-   Both `{{ALIAS}}` and `{{ALIAS}}.ndarray` support array-like objects having getter and setter accessors for array element access.

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeros = require( '@stdlib/array/zeros' );
var zeroTo = require( '@stdlib/array/zero-to' );
var logEach = require( '@stdlib/console/log-each' );
var {{ALIAS}} = require( '@{{PKG}}' );

// Specify a PRNG seed:
var opts = {
    'seed': 1234
};

// Create a seeded PRNG:
var rand1 = {{ALIAS}}.factory( opts );

// Create an array:
var x1 = zeros( 10, 'float64' );

// Fill the array with pseudorandom numbers:
rand1( x1.length, [ {{PARAM_1_VALUE}} ], 0, x1, 1 );

// Create another function for filling strided arrays:
var rand2 = {{ALIAS}}.factory( opts );
// returns <Function>

// Create a second array:
var x2 = zeros( 10, 'generic' );

// Fill the array with the same pseudorandom numbers:
rand2( x2.length, [ {{PARAM_1_VALUE}} ], 0, x2, 1 );

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

[@{{BASE_PKG}}]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40{{BASE_PKG}}

[@stdlib/array/uint32]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/array/uint32

</section>

<!-- /.links -->
