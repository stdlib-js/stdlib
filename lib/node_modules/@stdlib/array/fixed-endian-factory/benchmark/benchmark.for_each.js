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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayFE = factory( 'float64' );


// MAIN //

bench( pkg+':forEach', function benchmark( b ) {
	var arr;
	var i;

	arr = new Float64ArrayFE( 'little-endian', [ 1.0, 2.0, 2.0, 1.0 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr.forEach( check );
		if ( arr.length !== 4 ) {
			b.fail( 'should not change an array length' );
		}
	}
	b.toc();
	if ( arr.length !== 4 ) {
		b.fail( 'should not change an array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function check( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
});
