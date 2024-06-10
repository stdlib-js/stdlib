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

# nanmin

> Return the minimum value, ignoring NaN.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var nanmin = require( '@stdlib/math/base/special/nanmin' );
```

#### nanmin( x, y )

Returns the minimum value.

```javascript
var v = nanmin( 4.2, 3.14 );
// returns 3.14

v = nanmin( +0.0, -0.0 );
// returns -0.0
```

If any argument is `NaN`, the function returns the other operand.

```javascript
var v = nanmin( 4.2, NaN );
// returns 4.2

v = nanmin( NaN, 3.14 );
// returns 3.14
```


If both argument are `NaN`, the function returns `NaN`.

```javascript
var v = nanmin( NaN, NaN );
// returns NaN

```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>
