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

# strides2order

> Determine the order of a multidimensional array based on a provided stride array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var strides2order = require( '@stdlib/ndarray/base/strides2order' );
```

#### strides2order( strides )

Determines the order of a multidimensional array based on a provided stride array.

```javascript
var order = strides2order( [ 2, 1 ] );
// returns 1

order = strides2order( [ 1, 2 ] );
// returns 2

order = strides2order( [ 3 ] );
// returns 3

order = strides2order( [ 1, 3, 2 ] );
// returns 0

order = strides2order( [] );
// returns 0
```

The function returns one of the following values:

-   `1`: based on the stride array, the array is in row-major order.
-   `2`: based on the stride array, the array is in column-major order.
-   `3`: based on the stride array, the array is in both row-major and column-major order.
-   `0`: based on the stride array, the array is in neither row-major nor column-major order.

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
var strides2order = require( '@stdlib/ndarray/base/strides2order' );

var strides;
var order;
var shape;
var i;
var j;

shape = [ 0, 0, 0 ];

for ( i = 0; i < 20; i++ ) {
    // Generate a random array shape:
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );

    // Compute the strides:
    if ( randu() < 0.5 ) {
        strides = shape2strides( shape, 'row-major' );
    } else {
        strides = shape2strides( shape, 'column-major' );
    }
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;

    // Determine the order:
    order = strides2order( strides );
    console.log( 'Strides: %s. Order: %s.', strides.join( ',' ), order );
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
