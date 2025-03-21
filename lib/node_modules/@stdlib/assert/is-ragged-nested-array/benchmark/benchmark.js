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
var pkg = require( './../package.json' ).name;
var isRaggedNestedArray = require( './../lib' );


// MAIN //

bench( pkg+'::ragged_array', function benchmark( b ) {
	var bool;
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ [ i, i+1, i+2 ], [ i-1, i-2 ] ];
		bool = isRaggedNestedArray( arr );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( !bool ) {
		b.fail( 'should return true' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::non_ragged_array', function benchmark( b ) {
	var bool;
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = [ [ i, i+1], [i-1, i ] ];
		bool = isRaggedNestedArray( arr );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( bool ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::non_array', function benchmark( b ) {
	var bool;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		bool = isRaggedNestedArray( i );
		if ( typeof bool !== 'boolean' ) {
			b.fail( 'should return a boolean' );
		}
	}
	b.toc();
	if ( bool ) {
		b.fail( 'should return false' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
