/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var broadcastArray = require( './../lib' );

// Create a 2x1 array:
var x = [
	[ 1 ],
	[ 2 ]
];

// Broadcast the array to 3x2x4:
var o = broadcastArray( x, [ 2, 1 ], [ 3, 2, 4 ] );
// returns {...}

// Retrieve the shape:
var sh = o.shape;
// returns [ 3, 2, 4 ]

// Retrieve the array "strides":
var st = o.strides;
// returns [...]

// Initialize loop indices:
var i0 = 0;
var i1 = 0;
var i2 = 0;

// Iterate over elements in the broadcasted array...
var i;
var j;
var k;
for ( i = 0; i < sh[ 0 ]; i++ ) {
	i1 = 0;
	for ( j = 0; j < sh[ 1 ]; j++ ) {
		i2 = 0;
		for ( k = 0; k < sh[ 2 ]; k++ ) {
			console.log( 'y[%s] = %d', [ i, j, k ].join( ',' ), o.data[ i0 ][ i1 ][ i2 ] );
			i2 += st[ 2 ];
		}
		i1 += st[ 1 ];
	}
	i0 += st[ 0 ];
}
