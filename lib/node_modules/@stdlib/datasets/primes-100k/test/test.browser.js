/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var tape = require( 'tape' );
var isPositiveIntegerArray = require( '@stdlib/assert/is-positive-integer-array' ).primitives;
var primes = require( './../lib/browser.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof primes, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of positive integer primitives', function test( t ) {
	var list = primes();
	t.equal( isPositiveIntegerArray( list ), true, 'returns expected value' );
	t.equal( list.length, 100000, 'has expected length' );
	t.end();
});

tape( 'the function returns a copy', function test( t ) {
	var l1;
	var l2;

	l1 = primes();
	l2 = primes();

	t.notEqual( l1, l2, 'different references' );

	l1[ 5 ] = 'beep';

	t.equal( l1[ 5 ], 'beep', 'expected element' );
	t.notEqual( l1[ 5 ], l2[ 5 ], 'no shared state' );
	t.equal( l2[ 5 ], 13, 'expected element' );

	t.end();
});
