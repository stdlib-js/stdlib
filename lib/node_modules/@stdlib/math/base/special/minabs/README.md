<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# minabs

> Return the minimum absolute value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minabs = require( '@stdlib/math/base/special/minabs' );
```

#### minabs( \[x\[, y\[, ...args]]] )

Returns the minimum absolute value.

```javascript
var v = minabs( -4.2, 3.14 );
// returns 3.14

v = minabs( +0.0, -0.0 );
// returns +0.0

v = minabs( 4.2, 3.14, -1.0, 6.8 );
// returns 1.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = minabs( 4.2, NaN );
// returns NaN

v = minabs( NaN, 3.14 );
// returns NaN
```

If not provided any arguments, the function returns `+infinity`.

```javascript
var v = minabs();
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, `minabs() = +infinity`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var minabs = require( '@stdlib/math/base/special/minabs' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*1000.0 ) - 500.0;
    y = ( randu()*1000.0 ) - 500.0;
    v = minabs( x, y );
    console.log( 'minabs(%d,%d) = %d', x, y, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

</section>

<!-- /.links -->
