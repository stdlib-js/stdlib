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
var pkg = require( './../package.json' ).name;
var forEach = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var arr;
	var i;

	function onItem( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not be NaN' );
		}
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		forEach( arr, onItem );
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::built-in', function benchmark( b ) {
	var arr;
	var i;

	function onItem( v ) {
		if ( isnan( v ) ) {
			b.fail( 'should not be NaN' );
		}
	}

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		arr.forEach( onItem );
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::loop', function benchmark( b ) {
	var arr;
	var i;
	var j;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ i, i+1, i+2, i+3, i+4 ];
		for ( j = 0; j < arr.length; j++ ) {
			if ( isnan( arr[ j ] ) ) {
				b.fail( 'should not be NaN' );
			}
		}
		if ( arr.length !== 5 ) {
			b.fail( 'should not change the array length' );
		}
	}
	b.toc();
	if ( arr.length !== 5 ) {
		b.fail( 'should not change the array length' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
