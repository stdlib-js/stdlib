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

// Provide a number...
var v = abs( -1.0 );
console.log( 'x = %d => abs(x) = %d', -1.0, v );

// Provide an array-like object...
var x = new Float64Array( [ -1.0, -2.0, -3.0 ] );
var y = abs( x );

var i;
for ( i = 0; i < x.length; i++ ) {
	console.log( 'x_%d = %d => abs(x_%d) = %d', i, x[ i ], i, y[ i ] );
}

// Provide an ndarray...
x = array( [ [ -1.0, -2.0 ], [ -3.0, -4.0 ] ] );
y = abs( x );

var sh = x.shape;
var sub;
for ( i = 0; i < x.length; i++ ) {
	sub = ind2sub( sh, i );
	console.log( 'x_%d%d = %d => abs(x_%d%d) = %d', sub[ 0 ], sub[ 1 ], x.iget( i ), sub[ 0 ], sub[ 1 ], y.iget( i ) );
}
