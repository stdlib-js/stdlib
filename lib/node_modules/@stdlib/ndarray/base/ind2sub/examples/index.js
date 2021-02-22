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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strides2offset = require( '@stdlib/ndarray/base/strides2offset' );
var numel = require( '@stdlib/ndarray/base/numel' );
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var ind2sub = require( './../lib' );

// Specify array characteristics:
var shape = [ 3, 3, 3 ];
var order = 'row-major';

// Compute array meta data:
var ndims = shape.length;
var strides = shape2strides( shape, order );
var len = numel( shape );

// Determine stride indices to be used for formatting how views are displayed...
var s0;
var s1;
if ( order === 'column-major' ) {
	s0 = ndims - 1;
	s1 = s0 - 1;
} else { // row-major
	s0 = 0;
	s1 = s0 + 1;
}

// Initialize a linear array...
var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
	arr.push( 0 );
}

// Generate random views and display the mapping of elements in the linear array to view subscripts...
var offset;
var row;
var j;
var s;
for ( i = 0; i < 20; i++ ) {
	// Randomly flip the sign of one of the strides...
	j = discreteUniform( 0, ndims-1 );
	strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;
	offset = strides2offset( shape, strides );

	// Print view meta data...
	console.log( '' );
	console.log( 'Dimensions: %s.', shape.join( 'x' ) );
	console.log( 'Strides: %s.', strides.join( ',' ) );
	console.log( 'View (subscripts):' );

	// Print the mapping of elements in the linear array to view subscripts...
	row = '  ';
	for ( j = 0; j < len; j++ ) {
		s = ind2sub( shape, strides, offset, order, j, 'throw' );
		row += '(' + s.join( ',' ) + ')';
		if ( ndims === 1 && j === len-1 ) {
			console.log( row );
		} else if ( ndims === 2 && (j+1)%abs( strides[ s0 ] ) === 0 ) {
			console.log( row );
			row = '  ';
		} else if ( ndims > 2 && (j+1)%abs( strides[ s1 ] ) === 0 ) {
			console.log( row );
			if ( (j+1)%abs( strides[ s0 ] ) === 0 ) {
				console.log( '' );
			}
			row = '  ';
		} else {
			row += ', ';
		}
	}
}
