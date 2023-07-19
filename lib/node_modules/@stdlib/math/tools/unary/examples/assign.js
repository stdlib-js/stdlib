/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable array-element-newline */

'use strict';

var base = require( '@stdlib/math/base/special/abs' );
var strided = require( '@stdlib/math/strided/special/abs' );
var Float64Array = require( '@stdlib/array/float64' );
var array = require( '@stdlib/ndarray/array' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var dispatcher = require( '@stdlib/ndarray/dispatch' );
var unary = require( '@stdlib/ndarray/base/unary' );
var dispatch = require( './../lib' );

// Define a table for resolving unary functions based on argument data types:
var types = [
	'float64', 'float64',
	'float32', 'float32',
	'generic', 'generic'
];
var data = [
	base,
	base,
	base
];
var nd = dispatcher( unary, types, data, 2, 1, 1 );

var table = {
	'number': base,
	'complex': null,
	'array': strided,
	'ndarray': nd
};

// Create a function which dispatches based on argument types:
var abs = dispatch( table, {
	'output_dtype_policy': 'same'
});

// Provide an array-like object...
var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
var y = new Float64Array( x.length );
abs.assign( x, y );

var i;
for ( i = 0; i < x.length; i++ ) {
	console.log( 'x_%d = %d => abs(x_%d) = %d', i, x[ i ], i, y[ i ] );
}

// Provide an ndarray and broadcast...
x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
y = array( new Float64Array( 12 ), {
	'shape': [ 3, 2, 2 ]
});
abs.assign( x, y );

var sh = y.shape;
var sub;
for ( i = 0; i < y.length; i++ ) {
	sub = ind2sub( sh, i );
	console.log( 'x_%d%d%d = %d => abs(x_%d%d%d) = %d', sub[ 0 ], sub[ 1 ], sub[ 2 ], x.iget( i%x.length ), sub[ 0 ], sub[ 1 ], sub[ 2 ], y.iget( i ) );
}

// Provide a 0-dimensional ndarray and broadcast...
x = new ndarray( 'float64', new Float64Array( [ -1.0 ] ), [], [ 0 ], 0, 'row-major' );
y = array( new Float64Array( 12 ), {
	'shape': [ 3, 2, 2 ]
});
abs.assign( x, y );

sh = y.shape;
for ( i = 0; i < y.length; i++ ) {
	sub = ind2sub( sh, i );
	console.log( 'x_%d%d%d = %d => abs(x_%d%d%d) = %d', sub[ 0 ], sub[ 1 ], sub[ 2 ], x.iget( i%x.length ), sub[ 0 ], sub[ 1 ], sub[ 2 ], y.iget( i ) );
}
