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

var numel = require( '@stdlib/ndarray/base/numel' );
var sub2ind = require( './../lib' );

var shape = [ 3, 3, 3 ];
var len = numel( shape );

var arr = [];
var i;
for ( i = 0; i < len; i++ ) {
	arr.push( i );
}

var opts = {
	'order': 'column-major'
};

console.log( '' );
console.log( 'Dimensions: %s.', shape.join( 'x' ) );
console.log( 'View:' );
console.log( '' );

var slice;
var idx;
var row;
var j;
var k;
for ( k = 0; k < shape[ 2 ]; k++ ) {
	slice = 'A[:,:,'+k+'] = ';
	console.log( slice );
	for ( i = 0; i < shape[ 0 ]; i++ ) {
		row = '  ';
		for ( j = 0; j < shape[ 1 ]; j++ ) {
			idx = sub2ind( shape, i, j, k, opts );
			row += arr[ idx ];
			if ( j < shape[ 1 ]-1 ) {
				row += ', ';
			}
		}
		console.log( row );
	}
	console.log( '' );
}
