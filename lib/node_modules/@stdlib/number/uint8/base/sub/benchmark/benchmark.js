/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var sub = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, 10, 50, {
		'dtype': 'uint8'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = sub( x[ i%x.length ], 5 );
		if ( y > 100 ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( y > 100 ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s::inline', pkg ), function benchmark( b ) {
	var x;
	var y;
	var i;

	x = discreteUniform( 100, 10, 50, {
		'dtype': 'uint8'
	});

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = x[ i%x.length ] - 5;
		if ( y > 100 ) {
			b.fail( 'unexpected result' );
		}
	}
	b.toc();
	if ( y > 100 ) {
		b.fail( 'unexpected result' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
