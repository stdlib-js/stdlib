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

// MODULES //

var bench = require( '@stdlib/bench' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var pkg = require( './../package.json' ).name;
var doWhileEach = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var sum;
	var i;

	function predicate( v ) {
		return ( v < PINF );
	}

	function fcn( v ) {
		sum += v;
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		sum = 0;
		doWhileEach( arr, fcn, predicate );
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 || isnan( sum ) ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var sum;
	var arr;
	var i;
	var j;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		sum = 0;
		j = 0;
		do {
			sum += arr[ j ];
			j += 1;
		} while (
			j < arr.length &&
			arr[ j ] < PINF
		);
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 || isnan( sum ) ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
