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

# compose

> [Function composition][function-composition].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var compose = require( '@stdlib/utils/compose' );
```

#### compose( ...fcn )

Returns a composite function. Starting from the right, the composite function evaluates each function and passes the result as an argument to the next function. The result of the leftmost function is the result of the whole.

```javascript
function a( x ) {
    return 2 * x;
}

function b( x ) {
    return x + 3;
}

function c( x ) {
    return x / 5;
}

var f = compose( c, b, a );

var z = f( 6 ); // ((2*x)+3)/5
// returns 3
```

**Only** the rightmost function is explicitly permitted to accept multiple arguments. All other functions are evaluated as **unary** functions.

```javascript
function a( x, y ) {
    return (x*5) + (y*3);
}

function b( r ) {
    return r + 12;
}

var f = compose( b, a );

var z = f( 4, 6 );
// returns 50
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function will throw if provided fewer than `2` input arguments.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var compose = require( '@stdlib/utils/compose' );

function a( x, y ) {
    return x * y;
}

function b( z ) {
    return z + 5;
}

function c( r ) {
    return r / 10;
}

var f = compose( c, b, a );

var v = f( 5, 3 );
// returns 2
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[function-composition]: https://en.wikipedia.org/wiki/Function_composition_%28computer_science%29

</section>

<!-- /.links -->
