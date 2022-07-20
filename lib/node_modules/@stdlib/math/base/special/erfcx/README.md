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

# erfcx

> Scaled [complementary error function][complementary-error-function].

<section class="intro">

The scaled [complementary error function][complementary-error-function] is defined as

<!-- <equation class="equation" label="eq:scaled_complementary_error_function" align="center" raw="\operatorname{erfcx}(x) = e^{x^2} \operatorname{erfc}(x)" alt="Scaled complementary error function."> -->

<!-- </equation> -->

For large values, the complementary error function is approximately equal to

<!-- <equation class="equation" label="eq:approximation-large-x" align="center" raw="\left( \frac{1}{\sqrt{\pi}} \right) \frac{1}{x}" alt="Approximation for large x"> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var erfcx = require( '@stdlib/math/base/special/erfcx' );
```

#### erfcx( x )

Evaluates the scaled [complementary error function][complementary-error-function].

```javascript
var y = erfcx( 0.0 );
// returns 1.0

y = erfcx( 1.0 );
// returns ~0.4276

y = erfcx( -1.0 );
// returns ~5.01

y = erfcx( 50.0 );
// returns ~0.011

y = erfcx( -50.0 );
// returns +Infinity
```

If provided `NaN`, the function returns `NaN`.

```javascript
var y = erfcx( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
var erfcx = require( '@stdlib/math/base/special/erfcx' );

var x = linspace( -30.0, 30.0, 100 );

var i;
for ( i = 0; i < x.length; i++ ) {
    console.log( 'x: %d, erfcx(x): %d', x[ i ], erfcx( x[ i ] ) );
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

[complementary-error-function]: https://en.wikipedia.org/wiki/Error_function

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
