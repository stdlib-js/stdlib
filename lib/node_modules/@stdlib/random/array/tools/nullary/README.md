<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# Nullary

> Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.

<section class="usage">

## Usage

```javascript
var Random = require( '@stdlib/random/array/tools/nullary' );
```

#### Random( prng, dtypes, dtype )

Constructor for creating arrays filled with pseudorandom values drawn from a nullary PRNG.

```javascript
var exponential = require( '@stdlib/random/base/exponential' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var random = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );
```

The constructor has the following parameters:

-   **prng**: nullary pseudorandom value generator.
-   **dtypes**: list of supported output data types.
-   **dtype**: default output data type.

#### Random.prototype.generate( len\[, options] )

Returns an array filled with pseudorandom values drawn from a nullary PRNG.

```javascript
var exponential = require( '@stdlib/random/base/exponential' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var random = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );

var v = random.generate( 10 );
// returns <Float64Array>
```

The method has the following parameters:

-   **len**: output array length.
-   **options**: function options.

The method accepts the following options:

-   **dtype**: output array data type. Setting this option, overrides the default output array data type.

By default, the method returns an array having the default output array data type. To override the default, set the `dtype` option.

```javascript
var exponential = require( '@stdlib/random/base/exponential' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var random = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );

var v = random.generate( 10, {
    'dtype': 'float32'
});
// returns <Float32Array>
```

#### Random.prototype.assign( out )

Fills an array with pseudorandom values drawn from a nullary PRNG.

```javascript
var exponential = require( '@stdlib/random/base/exponential' );
var zeros = require( '@stdlib/array/zeros' );

var dtypes = [ 'float64', 'float32', 'generic' ];
var defaultDType = 'float64';

var random = new Random( exponential.factory( 2.0 ), dtypes, defaultDType );

var out = zeros( 10, 'float64' );
// returns <Float64Array>

var v = random.assign( out );
// returns <Float64Array>

var bool = ( v === out );
// returns true
```

The method has the following parameters:

-   **out**: output array.

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var exponential = require( '@stdlib/random/base/exponential' );
var dtypes = require( '@stdlib/array/dtypes' );
var Random = require( '@stdlib/random/array/tools/nullary' );

var dt = dtypes( 'real_floating_point_and_generic' );
var random = new Random( exponential.factory( 2.0 ), dt, 'float64' );

var x = random.generate( 10 );
// returns <Float64Array>

x = random.generate( 10, {
    'dtype': 'float32'
});
// returns <Float32Array>

x = random.generate( 10, {
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
