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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var dedupe = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dedupe, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function removes consecutive duplicated values', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 1, 2, 3, 3 ];
	expected = [ 1, 2, 3 ];
	actual = dedupe( x, 1, false );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports considering NaN values as distinct', function test( t ) {
	var expected;
	var actual;
	var x;
	var i;

	x = [ NaN, NaN, 2, NaN, NaN, 3, 3 ];
	expected = [ NaN, NaN, 2, NaN, NaN, 3 ];
	actual = dedupe( x, 1, false );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );

	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
		} else {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function supports considering NaN values as equal', function test( t ) {
	var expected;
	var actual;
	var x;
	var i;

	x = [ NaN, NaN, 2, NaN, NaN, 3, 3 ];
	expected = [ NaN, 2, NaN, 3 ];
	actual = dedupe( x, 1, true );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );

	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
		} else {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function supports specifying a maximum number of consecutive duplicates', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ 1, 1, 1, 1, 2, 2, 3, 3, 3 ];
	expected = [ 1, 1, 2, 2, 3, 3 ];
	actual = dedupe( x, 2, false );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a maximum number of consecutive duplicates (distinct NaNs)', function test( t ) {
	var expected;
	var actual;
	var x;
	var i;

	x = [ NaN, NaN, NaN, NaN, 2, 2, NaN, NaN, NaN, 3, 3, 3 ];
	expected = [ NaN, NaN, NaN, NaN, 2, 2, NaN, NaN, NaN, 3, 3 ];
	actual = dedupe( x, 2, false );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );

	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
		} else {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function supports specifying a maximum number of consecutive duplicates (equal NaNs)', function test( t ) {
	var expected;
	var actual;
	var x;
	var i;

	x = [ NaN, NaN, NaN, NaN, NaN, NaN, NaN, 2, 2, NaN, NaN, NaN, 3, 3, 3 ];
	expected = [ NaN, NaN, NaN, 2, 2, NaN, NaN, NaN, 3, 3, 3 ];
	actual = dedupe( x, 3, true );

	t.strictEqual( actual, x, 'returns expected value' );
	t.strictEqual( actual.length, expected.length, 'returns expected value' );

	for ( i = 0; i < expected.length; i++ ) {
		if ( isnan( expected[ i ] ) ) {
			t.strictEqual( isnan( actual[ i ] ), true, 'returns expected value' );
		} else {
			t.strictEqual( actual[ i ], expected[ i ], 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an empty array if provided an array of length `0`', function test( t ) {
	var expected;
	var actual;

	expected = [];

	actual = dedupe( [], 1, false );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = dedupe( [], 1, true );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = dedupe( [], 2, false );
	t.deepEqual( actual, expected, 'returns expected value' );

	actual = dedupe( [], 2, true );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
