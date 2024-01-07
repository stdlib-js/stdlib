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

# binaryFactory

> Create a factory function for generating pseudorandom values drawn from a binary PRNG.

<section class="usage">

## Usage

```javascript
var binaryFactory = require( '@stdlib/random/array/tools/binary-factory' );
```

#### binaryFactory( prng, dtypes, dtype )

Returns a factory function for generating pseudorandom values drawn from a binary PRNG.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, 'float64' );
// returns <Function>
```

The function has the following parameters:

-   **prng**: binary pseudorandom number generator.
-   **dtypes**: list of supported output data types.
-   **dtype**: default output array data type.

* * *

#### factory( \[param1, param2, ]\[options] )

Returns a function for generating pseudorandom values drawn from a binary PRNG.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>
```

The function has the following parameters:

-   **param1**: first PRNG parameter.
-   **param2**: second PRNG parameter.
-   **options**: function options.

The function supports the following options:

-   **prng**: pseudorandom number generator which generates uniformly distributed pseudorandom numbers.
-   **seed**: pseudorandom value generator seed.
-   **state**: pseudorandom value generator state.
-   **copy**: boolean indicating whether to copy a provided pseudorandom value generator state.
-   **dtype**: default output array data type. Setting this option overrides the default output array data type provided to the parent function.

If provided PRNG parameters, the function returns a partially applied function for creating arrays, which can be useful when wanting to pass around a parameterized function for array creation.

* * *

### Full Arity

#### random( len, param1, param2\[, options] )

Returns an array of pseudorandom values drawn from a binary PRNG.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var v = random( 10, 2.0, 5.0 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **param1**: first PRNG parameter.
-   **param2**: second PRNG parameter.
-   **options**: function options.

The function accepts the following options:

-   **dtype**: output array data type. Setting this option overrides the default output array data type.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var v = random( 10, 2.0, 5.0, {
    'dtype': 'float32'
});
// returns <Float32Array>
```

#### random.assign( param1, param2, out )

Fills an array with pseudorandom values drawn from a binary PRNG.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var out = zeros( 10, 'float64' );
// returns <Float64Array>

var v = random.assign( 2.0, 5.0, out );
// returns <Float64Array>

var bool = ( out === v );
// returns true
```

The method has the following parameters:

-   **param1**: first PRNG parameter.
-   **param2**: second PRNG parameter.
-   **out**: output array.

### Partial Application

#### random( len\[, options] )

Returns an array of pseudorandom values drawn from a binary PRNG.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory( 2.0, 5.0 );
// returns <Function>

var v = random( 10 );
// returns <Float64Array>

v = random( 10 );
// returns <Float64Array>
```

The function has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The function accepts the following options:

-   **dtype**: output array data type. Setting this option overrides the default output array data type.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory( 2.0, 5.0 );
// returns <Function>

var v = random( 10, {
    'dtype': 'float32'
});
// returns <Float32Array>

v = random( 10, {
    'dtype': 'generic'
});
// returns [...]
```

#### random.assign( out )

Fills an array with pseudorandom values drawn from a binary PRNG.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory( 2.0, 5.0 );
// returns <Function>

var out = zeros( 10, 'float64' );
// returns <Float64Array>

var v = random.assign( out );
// returns <Float64Array>

var bool = ( out === v );
// returns true
```

The method has the following parameters:

-   **out**: output array.

* * *

#### random.PRNG

The underlying pseudorandom number generator.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var prng = random.PRNG;
// returns <Function>
```

#### random.seed

The value used to seed the underlying pseudorandom number generator.

```javascript
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var seed = random.seed;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
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
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.seedLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
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
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var state = random.state;
// returns <Uint32Array>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
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
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var len = random.stateLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
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
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
// returns <Function>

var random = factory();
// returns <Function>

var sz = random.byteLength;
// returns <number>
```

If the `factory` function is provided a PRNG for uniformly distributed numbers, the associated property value on the returned function is `null`.

```javascript
var minstd = require( '@stdlib/random/base/minstd-shuffle' ).normalized;
var arcsine = require( '@stdlib/random/base/arcsine' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];

var factory = binaryFactory( arcsine, dtypes, dtypes[ 0 ] );
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
var arcsine = require( '@stdlib/random/base/arcsine' );
var dtypes = require( '@stdlib/array/dtypes' );
var binaryFactory = require( '@stdlib/random/array/tools/binary-factory' );

var dt = dtypes( 'real_floating_point_and_generic' );

var factory = binaryFactory( arcsine, dt, 'float64' );
// returns <Function>

var random = factory();
// returns <Function>

var x = random( 10, 2.0, 5.0 );
// returns <Float64Array>

x = random( 10, 2.0, 5.0, {
    'dtype': 'float32'
});
// returns <Float32Array>

x = random( 10, 2.0, 5.0, {
    'dtype': 'generic'
});
// returns [...]
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
