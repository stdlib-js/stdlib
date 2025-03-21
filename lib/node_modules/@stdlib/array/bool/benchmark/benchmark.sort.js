/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MODULES //

var bench = require( '@stdlib/bench' );
var isBooleanArray = require( '@stdlib/assert/is-booleanarray' );
var pkg = require( './../package.json' ).name;
var BooleanArray = require( './../lib' );


// FUNCTIONS //

/**
* Comparison function.
*
* @private
* @param {boolean} a - first boolean value for comparison
* @param {boolean} b - second boolean value for comparison
* @returns {number} comparison result
*/
function compareFcn( a, b ) {
	if ( a === true ) {
		if ( b === true ) {
			return 0;
		}
		return 1;
	}
	if ( b === false ) {
		return 0;
	}
	return -1;
}


// MAIN //

bench( pkg+':sort', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new BooleanArray( [ true, false, false, true, true, false ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.sort( compareFcn );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isBooleanArray( out ) ) {
		b.fail( 'should return a BooleanArray' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
