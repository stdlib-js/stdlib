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
var Int32Array = require( '@stdlib/array/int32' );
var ind2sub = require( '@stdlib/ndarray/ind2sub' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var numel = require( '@stdlib/ndarray/base/numel' );
var dispatch = require( './../lib' );

function add2( arrays ) {
	var opts;
	var xo;
	var yo;
	var zo;
	var sx;
	var sy;
	var sz;
	var sh;
	var N;
	var x;
	var y;
	var z;
	var v;
	var i;

	x = arrays[ 0 ];
	sh = x.shape;
	N = numel( sh );
	if ( N <= 0 ) {
		return;
	}
	y = arrays[ 1 ];
	z = arrays[ 2 ];
	xo = x.order;
	yo = y.order;
	zo = z.order;
	opts = {
		'order': xo
	};
	for ( i = 0; i < N; i++ ) {
		opts.order = xo;
		sx = ind2sub( sh, i, opts );
		opts.order = yo;
		sy = ind2sub( sh, i, opts );
		v = x.get.apply( x, sx ) + y.get.apply( y, sy );

		opts.order = zo;
		sz = ind2sub( sh, i, opts );
		sz.push( v );
		z.set.apply( z, sz );
	}
}

var fcns = [
	add2,
	add2,
	add2,
	add2,
	add2,
	add2,
	add2,
	add2,
	add2
];

var types = [
	'float64', 'float64', 'float64',
	'float32', 'float32', 'float32',
	'int32', 'int32', 'int32',
	'uint32', 'uint32', 'uint32',
	'int16', 'int16', 'int16',
	'uint16', 'uint16', 'uint16',
	'int8', 'int8', 'int8',
	'uint8', 'uint8', 'uint8',
	'uint8c', 'uint8c', 'uint8c'
];

var add = dispatch( fcns, types, null, 3, 2, 1 );

var xbuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var ybuf = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var zbuf = new Float64Array( xbuf.length );

var x = ndarray( 'float64', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
var y = ndarray( 'float64', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
var z = ndarray( 'float64', zbuf, [ 5 ], [ 1 ], 0, 'row-major' );

add( x, y, z );
console.log( zbuf );

xbuf = new Int32Array( [ 10, 20, 30, 40, 50 ] );
ybuf = new Int32Array( [ 10, 20, 30, 40, 50 ] );
zbuf = new Int32Array( xbuf.length );

x = ndarray( 'int32', xbuf, [ 5 ], [ 1 ], 0, 'row-major' );
y = ndarray( 'int32', ybuf, [ 5 ], [ 1 ], 0, 'row-major' );
z = ndarray( 'int32', zbuf, [ 5 ], [ 1 ], 0, 'row-major' );

add( x, y, z );
console.log( zbuf );
