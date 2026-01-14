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

var normal = require( '@stdlib/random/base/normal' );
var ndarray = require( '@stdlib/ndarray/ctor' );
var kde2d = require( './../lib' );

var strides;
var buffer;
var offset;
var shape;
var order;
var randX;
var randY;
var out;
var arr;
var i;
var x;
var y;
var n;

n = 100;

x = new Array( n );
y = new Array( n );

randX = normal.factory( 3, 1.2 );
randY = normal.factory( 10, 4.5 );

for ( i = 0; i < n; i++ ) {
	x[ i ] = randX();
	y[ i ] = randY();
}

out = kde2d( x, y );
console.log( out );

// Choose a different number of grid point:
out = kde2d( x, y, {
	'n': 15
});
console.log( out );

// Set the x-axis limits:
out = kde2d( x, y, {
	'xLim': [ -5, 12 ]
});
console.log( out );

// Set the y-axis limits:
out = kde2d( x, y, {
	'yLim': [ -3, 13 ]
} );
console.log( out );

// Choose custom bandwidths:
out = kde2d( x, y, {
	'h': [ 0.05, 0.1 ]
});
console.log( out );

// Use it with an `ndarray`:
buffer = x.concat( y );
shape = [ n, 2 ];
order = 'column-major';
strides = [ 1, n ];
offset = 0;
arr = ndarray( 'generic', buffer, shape, strides, offset, order );
out = kde2d( arr );
console.log( out );
