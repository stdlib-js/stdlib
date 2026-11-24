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

> Create an array containing pseudorandom numbers drawn from {{README_FROM_DESC}}.

<section class="usage">

## Usage

```javascript
var {{ALIAS}} = require( '@{{PKG}}' );
```

#### {{ALIAS}}( len, {{PARAM_1}}, {{PARAM_2}}, {{PARAM_3}}\[, options] )

Returns an array containing pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var out = {{ALIAS}}( 10, {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}} );
// returns <{{DEFAULT_TYPED_ARRAY}}>
```

The function has the following parameters:

-   **len**: output array length.
-   **{{PARAM_1}}**: {{PARAM_1_DESC}}.
-   **{{PARAM_2}}**: {{PARAM_2_DESC}}.
-   **{{PARAM_3}}**: {{PARAM_3_DESC}}.
-   **options**: function options.

The function accepts the following `options`:

-   **dtype**: output array data type. Must be a [{{README_DTYPE_KIND_DESC}}][@{{README_DTYPE_KIND_PKG}}] or "generic". Default: `'{{DEFAULT_DTYPE}}'`.

By default, the function returns a [`{{DEFAULT_TYPED_ARRAY}}`][@stdlib/array/{{DEFAULT_DTYPE}}]. To return an array having a different data type, set the `dtype` option.

```javascript
var opts = {
    'dtype': 'generic'
};

var out = {{ALIAS}}( 10, {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, opts );
// returns [...]
```

#### {{ALIAS}}.assign( {{PARAM_1}}, {{PARAM_2}}, {{PARAM_3}}, out )

Fills an array with pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var zeros = require( '@stdlib/array/zeros' );

var x = zeros( 10, '{{DEFAULT_DTYPE}}' );
// returns <{{DEFAULT_TYPED_ARRAY}}>

var out = {{ALIAS}}.assign( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, x );
// returns <{{DEFAULT_TYPED_ARRAY}}>

var bool = ( out === x );
// returns true
```

The function has the following parameters:

-   **{{PARAM_1}}**: {{PARAM_1_DESC}}.
-   **{{PARAM_2}}**: {{PARAM_2_DESC}}.
-   **{{PARAM_3}}**: {{PARAM_3_DESC}}.
-   **out**: output array.

#### {{ALIAS}}.factory( \[{{PARAM_1}}, {{PARAM_2}}, {{PARAM_3}}, ]\[options] )

Returns a function for creating arrays containing pseudorandom numbers drawn from {{README_FROM_DESC}}.

```javascript
var random = {{ALIAS}}.factory();

var out = random( 10, {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}} );
// returns <{{DEFAULT_TYPED_ARRAY}}>

var len = out.length;
// returns 10
```

If provided distribution parameters, the returned generator returns random variates from the specified distribution.

```javascript
var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}} );

var out = random( 10 );
// returns <{{DEFAULT_TYPED_ARRAY}}>

out = random( 10 );
// returns <{{DEFAULT_TYPED_ARRAY}}>
```

If not provided distribution parameters, the returned generator requires that distribution parameters be provided at each invocation.

```javascript
var random = {{ALIAS}}.factory();

var out = random( 10, {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}} );
// returns <{{DEFAULT_TYPED_ARRAY}}>

out = random( 10, {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}} );
// returns <{{DEFAULT_TYPED_ARRAY}}>
```

The function accepts the following `options`:

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the underlying pseudorandom number generator, one must seed the provided `prng` (assuming the provided `prng` is seedable).
-   **seed**: pseudorandom number generator seed.
-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that an underlying generator has exclusive control over its internal state. Default: `true`.
-   **dtype**: default output array data type. Must be a [{{README_DTYPE_KIND_DESC}}][@{{README_DTYPE_KIND_PKG}}] or "generic". Default: `'{{DEFAULT_DTYPE}}'`.

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
var minstd = require( '@stdlib/random/base/minstd' );

var opts = {
    'prng': minstd.normalized
};
var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, opts );

var out = random( 10 );
// returns <{{DEFAULT_TYPED_ARRAY}}>
```

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var opts = {
    'seed': 12345
};
var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, opts );

var out = random( 10, opts );
// returns <{{DEFAULT_TYPED_ARRAY}}>
```

The returned function accepts the following `options`:

-   **dtype**: output array data type. Must be a [{{README_DTYPE_KIND_DESC}}][@{{README_DTYPE_KIND_PKG}}] or "generic". This overrides the default output array data type.

To override the default output array data type, set the `dtype` option.

```javascript
var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}} );

var out = random( 10 );
// returns <{{DEFAULT_TYPED_ARRAY}}>

var opts = {
    'dtype': 'generic'
};
out = random( 10, opts );
// returns [...]
```

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

var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
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

var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
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

var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
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

var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
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

var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
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

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var logEach = require( '@stdlib/console/log-each' );
var {{ALIAS}} = require( '@{{PKG}}' );

// Create a function for generating random arrays originating from the same state:
var random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
    'state': {{ALIAS}}.state,
    'copy': true
});

// Generate 3 arrays:
var x1 = random( 5 );
var x2 = random( 5 );
var x3 = random( 5 );

// Print the contents:
logEach( '%f, %f, %f', x1, x2, x3 );

// Create another function for generating random arrays with the original state:
random = {{ALIAS}}.factory( {{PARAM_1_VALUE}}, {{PARAM_2_VALUE}}, {{PARAM_3_VALUE}}, {
    'state': {{ALIAS}}.state,
    'copy': true
});

// Generate a single array which replicates the above pseudorandom number generation sequence:
var x4 = random( 15 );

// Print the contents:
logEach( '%f', x4 );
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

[@{{README_DTYPE_KIND_PKG}}]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40{{README_DTYPE_KIND_PKG}}

[@stdlib/array/uint32]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/array/uint32

[@stdlib/array/{{DEFAULT_DTYPE}}]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/array/{{DEFAULT_DTYPE}}

</section>

<!-- /.links -->
