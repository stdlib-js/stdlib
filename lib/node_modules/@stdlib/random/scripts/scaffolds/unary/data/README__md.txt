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

> Generate pseudorandom numbers drawn from {{README_FROM_DESC}}.

<section class="usage">

## Usage

```javascript
var {{ALIAS}} = require( '@{{PKG}}' );
```

#### {{ALIAS}}( shape, {{PARAM_1}}\[, options] )

Returns an [ndarray][@stdlib/ndarray/ctor] containing pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var arr = {{ALIAS}}( [ 3, 3 ], {{PARAM_1_VALUE}} );
// returns <ndarray>
```

The function has the following parameters:

-   **shape**: output shape.
-   **{{PARAM_1}}**: {{PARAM_1_DESC}}. May be either a scalar or an [ndarray][@stdlib/ndarray/ctor]. When providing an [ndarray][@stdlib/ndarray/ctor], the [ndarray][@stdlib/ndarray/ctor] must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the specified output shape.
-   **options**: function options.

When provided a scalar distribution parameter, every element in the output [ndarray][@stdlib/ndarray/ctor] is drawn from the same distribution. To generate pseudorandom numbers drawn from different distributions, provide a distribution parameter argument as an [ndarray][@stdlib/ndarray/ctor]. The following example demonstrates broadcasting an [ndarray][@stdlib/ndarray/ctor] containing distribution parameters to generate sub-matrices drawn from different distributions.

```javascript
var getShape = require( '@stdlib/ndarray/shape' );
var array = require( '@stdlib/ndarray/array' );

var {{PARAM_1}} = array( [ [ [ {{PARAM_1_VALUE}} ] ], [ [ {{PARAM_1_VALUE_AUX}} ] ] ] );
// returns <ndarray>

var shape = getShape( {{PARAM_1}} );
// returns [ 2, 1, 1 ]

var arr = {{ALIAS}}( [ 2, 3, 3 ], {{PARAM_1}} );
// returns <ndarray>
```

If provided an empty shape, the function returns a zero-dimensional [ndarray][@stdlib/ndarray/ctor].

```javascript
var getShape = require( '@stdlib/ndarray/shape' );

var arr = {{ALIAS}}( [], {{PARAM_1_VALUE}} );
// returns <ndarray>

var shape = getShape( arr );
// returns []

var v = arr.get();
// returns <number>
```

The function accepts the following options:

-   **dtype**: output ndarray data type. Must be {{README_DTYPE_KIND_DESC}} or "generic" [data type][@stdlib/ndarray/dtypes].
-   **order**: ndarray order (i.e., memory layout), which is either `row-major` (C-style) or `column-major` (Fortran-style). Default: `'row-major'`.
-   **mode**: specifies how to handle indices which exceed ndarray dimensions. For a list of supported modes, see [`ndarray`][@stdlib/ndarray/ctor]. Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed ndarray dimensions. If provided fewer modes than dimensions, an [ndarray][@stdlib/ndarray/ctor] instance recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: boolean indicating whether an ndarray should be **read-only**. Default: `false`.

By default, the function returns an [ndarray][@stdlib/ndarray/ctor] having a [data type][@stdlib/ndarray/dtypes] determined by the function's output data type [policy][@stdlib/ndarray/output-dtype-policies]. To override the default behavior, set the `dtype` option.

```javascript
var getDType = require( '@stdlib/ndarray/dtype' );

var opts = {
    'dtype': 'generic'
};

var arr = {{ALIAS}}( [ 3, 3 ], {{PARAM_1_VALUE}}, opts );
// returns <ndarray>

var dt = String( getDType( arr ) );
// returns 'generic'
```

#### {{ALIAS}}.assign( {{PARAM_1}}, out )

Fills an [ndarray][@stdlib/ndarray/ctor] with pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var zeros = require( '@stdlib/ndarray/zeros' );

var out = zeros( [ 3, 3 ] );
// returns <ndarray>

var v = {{ALIAS}}.assign( {{PARAM_1_VALUE}}, out );
// returns <ndarray>

var bool = ( v === out );
// returns true
```

The method has the following parameters:

-   **{{PARAM_1}}**: {{PARAM_1_DESC}}. May be either a scalar or an [ndarray][@stdlib/ndarray/ctor]. When providing an [ndarray][@stdlib/ndarray/ctor], the [ndarray][@stdlib/ndarray/ctor] must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output [ndarray][@stdlib/ndarray/ctor].
-   **out**: output [ndarray][@stdlib/ndarray/ctor].

#### {{ALIAS}}.factory( \[options] )

Returns a function for generating pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var getShape = require( '@stdlib/ndarray/shape' );

var random = {{ALIAS}}.factory();

var out = random( [ 3, 3 ], {{PARAM_1_VALUE}} );
// returns <ndarray>

var sh = getShape( out );
// returns [ 3, 3 ]
```

The method accepts the following options:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: boolean indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var opts = {
    'prng': minstd.normalized
};
var random = {{ALIAS}}.factory( opts );

var out = random( [ 3, 3 ], {{PARAM_1_VALUE}} );
// returns <ndarray>
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = {{ALIAS}}.factory( opts );

var out = random( [ 3, 3 ], {{PARAM_1_VALUE}} );
// returns <ndarray>
```

The function returned by the `factory` method has the same interface and accepts the same options as the `{{ALIAS}}` function above.

#### {{ALIAS}}.PRNG

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

var sz = random.byteLength;
// returns null
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If PRNG state is "shared" (meaning a state array was provided during function creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the function returned by the `factory` method does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant creation function and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other creation functions and/or PRNGs sharing the PRNG's state array).
-   The output data type [policy][@stdlib/ndarray/output-dtype-policies] only applies to the main function and specifies that, by default, the function must return an [ndarray][@stdlib/ndarray/ctor] having {{README_DTYPE_KIND_DESC}} or "generic" [data type][@stdlib/ndarray/dtypes]. For the `assign` method, the output [ndarray][@stdlib/ndarray/ctor] is allowed to have any supported output [data type][@stdlib/ndarray/dtypes].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEach = require( '@stdlib/console/log-each' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var {{ALIAS}} = require( '@{{PKG}}' );

// Create a function for generating random arrays originating from the same state:
var random = {{ALIAS}}.factory({
    'state': {{ALIAS}}.state,
    'copy': true
});

// Generate 3 one-dimensional arrays:
var x1 = random( [ 5 ], {{PARAM_1_VALUE}} );
var x2 = random( [ 5 ], {{PARAM_1_VALUE}} );
var x3 = random( [ 5 ], {{PARAM_1_VALUE}} );

// Print the contents:
logEach( '%f, %f, %f', ndarray2array( x1 ), ndarray2array( x2 ), ndarray2array( x3 ) );

// Create another function for generating random arrays with the original state:
random = {{ALIAS}}.factory({
    'state': {{ALIAS}}.state,
    'copy': true
});

// Generate a two-dimensional array which replicates the above pseudorandom number generation sequence:
var x4 = random( [ 3, 5 ], {{PARAM_1_VALUE}} );

// Convert to a list of nested arrays:
var arr = ndarray2array( x4 );

// Print the contents:
console.log( '' );
logEach( '%f, %f, %f', arr[ 0 ], arr[ 1 ], arr[ 2 ] );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@{{BASE_PKG}}]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40{{BASE_PKG}}

[@stdlib/array/uint32]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/array/uint32

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/dtypes

[@stdlib/ndarray/output-dtype-policies]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/output-dtype-policies

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/ctor

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/ndarray/base/broadcast-shapes

</section>

<!-- /.links -->
