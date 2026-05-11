/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
var isFunction = require( '@stdlib/assert/is-function' );
var format = require( '@stdlib/string/format' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' ).factory;


// MAIN //

bench( format( '%s:factory', pkg ), function benchmark( b ) {
	var modes;
	var out;
	var i;

	modes = [
		'throw',
		'clamp',
		'wrap',
		'normalize'
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		out = factory( modes[ i%modes.length ] );
		if ( typeof out !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( out ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( format( '%s:factory:mode=clamp', pkg ), function benchmark( b ) {
	var ind;
	var out;
	var idx;
	var i;

	ind = factory( 'clamp' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = (i%100) - 50;
		out = ind( idx, 10 );
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

bench( format( '%s:factory:mode=wrap', pkg ), function benchmark( b ) {
	var ind;
	var out;
	var idx;
	var i;

	ind = factory( 'wrap' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = (i%100) - 50;
		out = ind( idx, 10 );
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

bench( format( '%s:factory:mode=throw', pkg ), function benchmark( b ) {
	var ind;
	var out;
	var idx;
	var i;

	ind = factory( 'throw' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = i % 11;
		out = ind( idx, 10 );
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

bench( format( '%s:factory:mode=normalize', pkg ), function benchmark( b ) {
	var ind;
	var out;
	var idx;
	var i;

	ind = factory( 'normalize' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = (i%21) - 10;
		out = ind( idx, 10 );
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
