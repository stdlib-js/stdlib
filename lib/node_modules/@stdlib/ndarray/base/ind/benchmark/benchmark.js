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
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var ind = require( './../lib' );


// MAIN //

bench( format( '%s:mode=clamp', pkg ), function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = (i%100) - 50;
		out = ind( idx, 10, 'clamp' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:mode=wrap', pkg ), function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = (i%100) - 50;
		out = ind( idx, 10, 'wrap' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:mode=throw', pkg ), function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = i % 11;
		out = ind( idx, 10, 'throw' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:mode=normalize', pkg ), function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = (i%21) - 10;
		out = ind( idx, 10, 'normalize' );
		if ( out !== out ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( out ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
