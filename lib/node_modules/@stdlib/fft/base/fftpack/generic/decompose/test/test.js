/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
var decompose = require( './../lib' );


// VARIABLES //

var INITIAL = [ 3, 4, 2, 5 ]; // as found in FFTPACK


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof decompose, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( decompose.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function correctly factorizes a sequence length into a product of integers', function test( t ) {
	var factors;
	var nf;

	factors = [ 0, 0, 0, 0, 0, 0, 0 ];
	nf = decompose( 630, 4, INITIAL, 1, 0, factors, 1, 0 );

	t.strictEqual( nf, 5, 'returns expected value' );
	t.strictEqual( factors[ 0 ], 630, 'returns expected value' );
	t.strictEqual( factors[ 1 ], 5, 'returns expected value' );
	t.strictEqual( factors[ 2 ], 2, 'returns expected value' );
	t.strictEqual( factors[ 3 ], 3, 'returns expected value' );
	t.strictEqual( factors[ 4 ], 3, 'returns expected value' );
	t.strictEqual( factors[ 5 ], 5, 'returns expected value' );
	t.strictEqual( factors[ 6 ], 7, 'returns expected value' );

	factors = [ 0, 0, 0, 0 ];
	nf = decompose( 8, 4, INITIAL, 1, 0, factors, 1, 0 );

	t.strictEqual( nf, 2, 'returns expected value' );
	t.strictEqual( factors[ 0 ], 8, 'returns expected value' );
	t.strictEqual( factors[ 1 ], 2, 'returns expected value' );
	t.strictEqual( factors[ 2 ], 2, 'returns expected value' );
	t.strictEqual( factors[ 3 ], 4, 'returns expected value' );

	t.end();
});

tape( 'the function correctly factorizes prime numbers', function test( t ) {
	var primesList;
	var factors;
	var nf;
	var i;

	// First 10 prime numbers:
	primesList = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ];

	for ( i = 0; i < primesList.length; i++ ) {
		factors = [ 0, 0, 0 ];
		nf = decompose( primesList[ i ], 4, INITIAL, 1, 0, factors, 1, 0 );

		t.strictEqual( nf, 1, 'returns expected value for ' + primesList[ i ] );
		t.strictEqual( factors[ 0 ], primesList[ i ], 'returns expected value' );
		t.strictEqual( factors[ 1 ], 1, 'returns expected value' );
		t.strictEqual( factors[ 2 ], primesList[ i ], 'returns expected value' );
	}

	t.end();
});

tape( 'the function returns expected results when provided a sequence length of 0', function test( t ) {
	var factors;
	var nf;

	factors = [ 0, 0 ];
	nf = decompose( 0, 4, INITIAL, 1, 0, factors, 1, 0 );

	t.strictEqual( nf, 0, 'returns expected value' );
	t.strictEqual( factors[ 0 ], 0, 'returns expected value' );
	t.strictEqual( factors[ 1 ], 0, 'returns expected value' );

	t.end();
});

tape( 'the function correctly handles stride and offset parameters', function test( t ) {
	var expected;
	var factors;
	var so;
	var oo;
	var nf;

	factors = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];

	so = 2;
	oo = 1;
	nf = decompose( 12, 4, INITIAL, 1, 0, factors, so, oo );

	expected = [ 0, 12, 0, 2, 0, 3, 0, 4, 0, 0, 0 ];

	t.strictEqual( nf, 2, 'returns expected value' );
	t.deepEqual( factors, expected, 'returns expected value' );

	t.end();
});
