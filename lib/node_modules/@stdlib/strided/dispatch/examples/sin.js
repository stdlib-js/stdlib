/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int8Array = require( '@stdlib/array/int8' );
var sin = require( '@stdlib/math/base/special/sin' );
var dispatch = require( './../lib' );

function apply( arrays, shape, strides, fcn ) {
	var sx;
	var sy;
	var ix;
	var iy;
	var N;
	var x;
	var y;
	var i;

	N = shape[ 0 ];
	if ( N <= 0 ) {
		return;
	}
	sx = strides[ 0 ];
	if ( sx < 0 ) {
		ix = (1-N) * sx;
	} else {
		ix = 0;
	}
	sy = strides[ 1 ];
	if ( sy < 0 ) {
		iy = (1-N) * sy;
	} else {
		iy = 0;
	}
	x = arrays[ 0 ];
	y = arrays[ 1 ];
	for ( i = 0; i < N; i++ ) {
		y[ iy ] = fcn( x[ ix ] );
		ix += sx;
		iy += sy;
	}
}

var fcns = [
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply,
	apply
];

var types = [
	'float64', 'float64',
	'float32', 'float64',
	'float32', 'float32',
	'int32', 'float64',
	'uint32', 'float64',
	'int16', 'float64',
	'int16', 'float32',
	'uint16', 'float64',
	'uint16', 'float32',
	'int8', 'float64',
	'int8', 'float32',
	'uint8', 'float64',
	'uint8', 'float32',
	'uint8c', 'float64',
	'uint8c', 'float32'
];

var data = [
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin,
	sin
];

var sine = dispatch( fcns, types, data, 5, 1, 1 );

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( x.length );

sine( x.length, x, 1, y, 1 );
console.log( y );

x = new Int8Array( [ 1, 2, 3, 4, 5 ] );
y = new Float32Array( x.length );

sine( x.length, x, 1, y, 1 );
console.log( y );
