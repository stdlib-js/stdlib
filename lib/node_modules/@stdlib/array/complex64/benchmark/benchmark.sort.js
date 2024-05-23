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
var isComplex64Array = require( '@stdlib/assert/is-complex64array' );
var realf = require( '@stdlib/complex/realf' );
var imagf = require( '@stdlib/complex/imagf' );
var pkg = require( './../package.json' ).name;
var Complex64Array = require( './../lib' );


// FUNCTIONS //

/**
* Comparison function.
*
* @private
* @param {Complex64} a - first value for comparison
* @param {Complex64} b - second value for comparison
* @returns {number} comparison result
*/
function compareFcn( a, b ) {
	var re1;
	var re2;
	var im1;
	var im2;
	re1 = realf( a );
	re2 = realf( b );
	if ( re1 < re2 ) {
		return -1;
	}
	if ( re1 > re2 ) {
		return 1;
	}
	im1 = imagf( a );
	im2 = imagf( b );
	if ( im1 < im2 ) {
		return -1;
	}
	if ( im1 > im2 ) {
		return 1;
	}
	return 0;
}


// MAIN //

bench( pkg+':sort', function benchmark( b ) {
	var out;
	var arr;
	var i;

	arr = new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = arr.sort( compareFcn );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isComplex64Array( out ) ) {
		b.fail( 'should return a Complex64Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
