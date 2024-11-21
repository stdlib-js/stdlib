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
var sub2ind = require( './../lib' );

var shape = [ 3, 3 ];
var strides = shape2strides( shape, 'row-major' );
var mode = 'throw';
var len = numel( shape );

var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
	arr.push( i );
}

var offset;
var idx;
var row;
var j;
var n;
var m;
for ( i = 0; i < 20; i++ ) {
	j = discreteUniform( 0, shape.length-1 );
	strides[ j ] *= ( randu() < 0.5 ) ? -1 : 1;
	offset = strides2offset( shape, strides );

	console.log( '' );
	console.log( 'Dimensions: %s.', shape.join( 'x' ) );
	console.log( 'Strides: %s.', strides.join( ',' ) );
	console.log( 'View:' );
	for ( n = 0; n < shape[ 0 ]; n++ ) {
		row = '  ';
		for ( m = 0; m < shape[ 1 ]; m++ ) {
			idx = sub2ind( shape, strides, offset, n, m, mode );
			row += arr[ idx ];
			if ( m < shape[ 1 ]-1 ) {
				row += ', ';
			}
		}
		console.log( row );
	}
}
