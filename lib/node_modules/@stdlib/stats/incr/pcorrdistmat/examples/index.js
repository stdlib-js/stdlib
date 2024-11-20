/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

'use strict';

var randu = require( '@stdlib/random/base/randu' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var Float64Array = require( '@stdlib/array/float64' );
var incrpcorrdistmat = require( './../lib' );

var dist;
var dxy;
var dyx;
var dx;
var dy;
var i;

// Initialize an accumulator for a 2-dimensional correlation distance matrix:
var accumulator = incrpcorrdistmat( 2 );

// Create a 1-dimensional data vector:
var buffer = new Float64Array( 2 );
var shape = [ 2 ];
var strides = [ 1 ];

var vec = ndarray( 'float64', buffer, shape, strides, 0, 'row-major' );

// For each simulated data vector, update the sample correlation distance matrix...
for ( i = 0; i < 100; i++ ) {
	vec.set( 0, randu()*100.0 );
	vec.set( 1, randu()*100.0 );
	dist = accumulator( vec );

	dx = dist.get( 0, 0 ).toFixed( 4 );
	dy = dist.get( 1, 1 ).toFixed( 4 );
	dxy = dist.get( 0, 1 ).toFixed( 4 );
	dyx = dist.get( 1, 0 ).toFixed( 4 );

	console.log( '[ %d, %d\n  %d, %d ]', dx, dxy, dyx, dy );
}
