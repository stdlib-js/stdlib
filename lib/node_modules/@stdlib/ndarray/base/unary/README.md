<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# Unary

> Apply a unary callback to elements in a input ndarray and assign results to elements in an output ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var unary = require( '@stdlib/ndarray/base/unary' );
```

#### unary( arrays, fcn )

Applies a unary callback to elements in a input ndarray and assign results to elements in an output ndarray.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var unary = require( '@stdlib/ndarray/base/unary' );

function scale( x ) {
    return x * 10.0;
}

// Create data buffers:
var arr = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ];
var xbuf = new Float64Array( arr);
var ybuf = new Float64Array( 6 );

// Define the shape of the input and output arrays:
var shape = [ 3, 1, 2 ];

// Define the array strides:
var sx = [ 4, 4, 1 ];
var sy = [ 2, 2, 1 ];

// Define the index offsets:
var ox = 1;
var oy = 0;

// Create the input and output ndarray-like objects:
var x = {
    'dtype': 'float64',
    'data': xbuf,
    'shape': shape,
    'strides': sx,
    'offset': ox,
    'order': 'row-major'
};
var y = {
    'dtype': 'float64',
    'data': ybuf,
    'shape': shape,
    'strides': sy,
    'offset': oy,
    'order': 'row-major'
};

// Apply the unary function:
unary( [ x, y ], scale );

console.log( y.data );
// => <Float64Array>[ 20.0, 30.0, 60.0, 70.0, 100.0, 110.0 ]
```

<!-- TODO: Finish documentation -->

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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarray = require( '@stdlib/array/filled' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
var unary = require( '@stdlib/ndarray/base/unary' );

function scale( x ) {
    return x * 10;
}

var N = 10;

var xbuf = filledarray( 0, N, 'generic' );
gfillBy( xbuf.length, xbuf, 1, discreteUniform( -100, 100 ) );

var x = {
    'dtype': 'generic',
    'data': xbuf,
    'shape': [ 5, 2 ],
    'strides': [ 2, 1 ],
    'offset': 0,
    'order': 'row-major'
};
var y = {
    'dtype': 'generic',
    'data': filledarray( 0, N, 'generic' ),
    'shape': x.shape.slice(),
    'strides': shape2strides( x.shape, 'column-major' ),
    'offset': 0,
    'order': 'column-major'
};

unary( [ x, y ], scale );
console.log( ndarray2array( x.data, x.shape, x.strides, x.offset, x.order ) );
console.log( ndarray2array( y.data, y.shape, y.strides, y.offset, y.order ) );
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
