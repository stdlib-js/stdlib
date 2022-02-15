<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# asech

> Compute the [hyperbolic arcsecant][hyperbolic-arcsecant] of a number.

<section class="usage">

## Usage

```javascript
var asech = require( '@stdlib/math/base/special/asech' );
```

#### asech( x )

Computes the [hyperbolic arcsecant][hyperbolic-arcsecant] of `x`.

```javascript
var v = asech( 1.0 );
// returns 0.0

v = asech( 0.5 );
// returns ~1.317

v = asech( 0.0 );
// returns Infinity
```

The domain of `x` is restricted to the interval `[0, 1]`. For `x` outside of this interval, the function returns `NaN`.

```javascript
var v = asech( -1.0 );
// returns NaN

v = asech( 2.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var asech = require( '@stdlib/math/base/special/asech' );

var x = linspace( 0.1, 1.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( asech( x[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[hyperbolic-arcsecant]: https://en.wikipedia.org/wiki/Inverse_hyperbolic_function

</section>

<!-- /.links -->
