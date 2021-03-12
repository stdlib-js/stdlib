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

# Iteration Order

> Given a stride array, determine array iteration order.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var iterationOrder = require( '@stdlib/ndarray/base/iteration-order' );
```

#### iterationOrder( strides )

Returns the array iteration order.

```javascript
var o = iterationOrder( [ 2, 1 ] );
// returns 1

o = iterationOrder( [ -2, 1 ] );
// returns 0

o = iterationOrder( [ -2, -1 ] );
// returns -1
```

The function returns one of the following values:

-   `0`: unordered (strides are of mixed sign).
-   `1`: left-to-right iteration order (strides are all nonnegative).
-   `-1`: right-to-left iteration order (strides are all negative).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var randu = require( '@stdlib/random/base/randu' );
var iterationOrder = require( '@stdlib/ndarray/base/iteration-order' );

var strides;
var shape;
var out;
var i;
var j;

shape = [ 0, 0, 0 ];
shape[ 0 ] = discreteUniform( 1, 10 );
shape[ 1 ] = discreteUniform( 1, 10 );
shape[ 2 ] = discreteUniform( 1, 10 );

strides = shape2strides( shape, 'row-major' );

for ( i = 0; i < 100; i++ ) {
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;
    out = iterationOrder( strides );
    console.log( 'strides: %s => %d', strides.join( ',' ), out );
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
