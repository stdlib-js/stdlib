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

# hypot

> Compute the [hypotenuse][hypotenuse].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hypot = require( '@stdlib/math/base/special/fast/hypot' );
```

#### hypot( x, y )

Computes the [hypotenuse][hypotenuse].

```javascript
var h = hypot( -5.0, 12.0 );
// returns 13.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For a sufficiently large `x` and/or `y`, computing the hypotenuse will overflow.

    ```javascript
    var h = hypot( 1.0e154, 1.0e154 );
    // returns Infinity
    ```

    Similarly, for sufficiently small `x` and/or `y`, computing the hypotenuse will underflow.

    ```javascript
    var h = hypot( 1e-200, 1.0e-200 );
    // returns 0.0
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random/base/randu' );
var round = require( '@stdlib/math/base/special/round' );
var hypot = require( '@stdlib/math/base/special/fast/hypot' );

var x;
var y;
var h;
var i;

for ( i = 0; i < 100; i++ ) {
    x = round( randu()*100.0 ) - 50.0;
    y = round( randu()*100.0 ) - 50.0;
    h = hypot( x, y );
    console.log( 'hypot(%d,%d) = %d', x, y, h );
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

[hypotenuse]: http://en.wikipedia.org/wiki/Pythagorean_theorem

</section>

<!-- /.links -->
