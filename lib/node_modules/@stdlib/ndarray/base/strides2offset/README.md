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

# strides2offset

> Determine the index offset which specifies the location of the first indexed value in a multidimensional array based on a stride array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
```

#### strides2offset( shape, strides )

Returns the index offset which specifies the location of the first indexed value in a multidimensional array.

```javascript
var offset = strides2offset( [ 3, 2 ], [ 2, 1 ] );
// returns 0

offset = strides2offset( [ 3, 2 ], [ -2, 1 ] );
// returns 4
```

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
var numel = require( '@stdlib/ndarray/base/numel' );
var randu = require( '@stdlib/random/base/randu' );
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );

var strides;
var offset;
var shape;
var len;
var arr;
var i;
var j;

shape = [ 0, 0, 0 ];
shape[ 0 ] = discreteUniform( 1, 10 );
shape[ 1 ] = discreteUniform( 1, 10 );
shape[ 2 ] = discreteUniform( 1, 10 );

strides = shape2strides( shape, 'row-major' );
len = numel( shape );

arr = [];
for ( i = 0; i < len; i++ ) {
    arr.push( i );
}
for ( i = 0; i < 100; i++ ) {
    j = discreteUniform( 0, shape.length-1 );
    strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;
    offset = strides2offset( shape, strides );
    console.log( 'arr[0][0][0] = %d', arr[ offset ] );
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
