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
var isArrayBuffer = require( '@stdlib/assert/is-arraybuffer' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var pkg = require( './../package.json' ).name;
var factory = require( './../lib' );


// VARIABLES //

var Float64ArrayLE = factory( 'float64' );


// MAIN //

bench( pkg+'::get:buffer', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float64ArrayLE();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.buffer;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArrayBuffer( v ) ) {
		b.fail( 'should return an ArrayBuffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:byteLength', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float64ArrayLE();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.byteLength;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:byteOffset', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float64ArrayLE();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.byteOffset;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:length', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float64ArrayLE();

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.length;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
