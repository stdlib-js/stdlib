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

var tape = require( 'tape' );
var cache = require( './../lib/cache.js' );
var coefficients = require( './../lib/coefficients.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof coefficients, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an array of polynomial coefficients (in ascending order)', function test( t ) {
	var expected;
	var actual;

	actual = coefficients( 0 );
	expected = [ 2.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 1 );
	expected = [ 0.0, 1.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 2 );
	expected = [ 2.0, 0.0, 1.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 3 );
	expected = [ 0.0, 3.0, 0.0, 1.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 4 );
	expected = [ 2.0, 0.0, 4.0, 0.0, 1.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 5 );
	expected = [ 0.0, 5.0, 0.0, 5.0, 0.0, 1.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 6 );
	expected = [ 2.0, 0.0, 9.0, 0.0, 6.0, 0.0, 1.0 ];
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function memoizes polynomial coefficients', function test( t ) {
	var expected;
	var actual;

	// Remove any existing set of coefficients for L_5(x):
	delete cache[ 5 ];

	actual = coefficients( 5 );
	expected = cache[ 5 ];

	t.strictEqual( actual, expected, 'returns expected value' );

	actual = coefficients( 5 );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});
