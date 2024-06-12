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

# nanmax

> Return the maximum value, ignoring NaN.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nanmax = require( '@stdlib/math/base/special/nanmax' );
```

#### nanmax( x, y )

Returns the maximum value.

```javascript
var v = nanmax( 4.2, 3.14 );
// returns 4.2

v = nanmax( +0.0, -0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns the other operand.

```javascript
var v = nanmax( 4.2, NaN );
// returns 4.2

v = nanmax( NaN, 3.14 );
// returns 3.14
```

If both arguments are `NaN`, the function returns `NaN`.

```javascript
var v = nanmax( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">
    
<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
