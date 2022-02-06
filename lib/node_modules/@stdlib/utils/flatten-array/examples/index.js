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

var flattenArray = require( './../lib' );

function tensor( N, M, L ) {
	var tmp1;
	var tmp2;
	var out;
	var i;
	var j;
	var k;

	out = [];
	for ( i = 0; i < N; i++ ) {
		tmp1 = [];
		for ( j = 0; j < M; j++ ) {
			tmp2 = [];
			for ( k = 0; k < L; k++ ) {
				tmp2.push( (M*L*i) + (j*L) + k + 1 );
			}
			tmp1.push( tmp2 );
		}
		out.push( tmp1 );
	}
	return out;
}

// Define array dimensions:
var N = 1000;
var M = 100;
var L = 10;

// Create a 3-dimensional nested array:
var data = tensor( N, M, L );

// Create a flattened (strided) array:
var arr = flattenArray( data );

// To access the data[4][20][2] element...
var xStride = M * L;
var yStride = L;
var zStride = 1;
var v = arr[ (4*xStride) + (20*yStride) + (2*zStride) ];

console.log( v );
// => 4203

console.log( data[4][20][2] === v );
// => true
