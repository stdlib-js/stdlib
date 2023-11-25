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
var randu = require( '@stdlib/random/base/randu' );
var floor = require( '@stdlib/math/base/special/floor' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var ind = require( './../lib' );


// MAIN //

bench( pkg+':mode=clamp', function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*100.0 ) - 50.0;
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

bench( pkg+':mode=wrap', function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*100.0 ) - 50.0;
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

bench( pkg+':mode=throw', function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*11.0 );
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

bench( pkg+':mode=normalize', function benchmark( b ) {
	var out;
	var idx;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		idx = floor( randu()*20.0 ) - 10.0;
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
