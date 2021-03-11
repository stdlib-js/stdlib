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

var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int8Array = require( '@stdlib/array/int8' );
var sin = require( '@stdlib/math/base/special/sin' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var numel = require( '@stdlib/ndarray/base/numel' );
var dispatch = require( './../lib' );

function apply( arrays, fcn ) {
	var opts;
	var xo;
	var yo;
	var sx;
	var sy;
	var sh;
	var N;
	var x;
	var y;
	var v;
	var i;

	x = arrays[ 0 ];
	sh = x.shape;
	N = numel( sh );
	if ( N <= 0 ) {
		return;
	}
	y = arrays[ 1 ];
	xo = x.order;
	yo = y.order;
	opts = {
		'order': xo
	};
	for ( i = 0; i < N; i++ ) {
		opts.order = xo;
		sx = ind2sub( sh, i, opts );
		v = fcn( x.get.apply( x, sx ) );

		opts.order = yo;
		sy = ind2sub( sh, i, opts );
		sy.push( v );
		y.set.apply( y, sy );
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

var sine = dispatch( fcns, types, data, 2, 1, 1 );

var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );

var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

sine( x, y );
console.log( ybuf );

xbuf = new Int8Array( [ 1, 2, 3, 4, 5 ] );
ybuf = new Float32Array( xbuf.length );

x = ndarray( 'int8', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
y = ndarray( 'float32', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );

sine( x, y );
console.log( ybuf );
