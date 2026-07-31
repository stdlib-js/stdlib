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
var Float64Array = require( '@stdlib/array/float64' );
var dtriu = require( './../lib/dtriu.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dtriu, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dtriu.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop',
		-5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
			var B = new Float64Array( 4 );
			dtriu( value, 2, 2, 0, A, 2, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a valid LDA value (row-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
			var B = new Float64Array( 4 );
			dtriu( 'row-major', 2, 2, 0, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a valid LDB value (row-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
			var B = new Float64Array( 4 );
			dtriu( 'row-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a valid LDA value (column-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
			var B = new Float64Array( 4 );
			dtriu( 'column-major', 2, 2, 0, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a valid LDB value (column-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
			var B = new Float64Array( 4 );
			dtriu( 'column-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function copies the upper triangular part of `A` to `B` (row-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float64Array( 9 );

	out = dtriu( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0, 0.0, 0.0, 9.0 ] );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (row-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float64Array( 9 );

	out = dtriu( 'row-major', 3, 3, 1, A, 3, B, 3 );

	expected = new Float64Array( [ 0.0, 2.0, 3.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (row-major, k<0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float64Array( 9 );

	out = dtriu( 'row-major', 3, 3, -1, A, 3, B, 3 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 0.0, 8.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (column-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	B = new Float64Array( 9 );

	out = dtriu( 'column-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Float64Array( [ 1.0, 0.0, 0.0, 2.0, 5.0, 0.0, 3.0, 6.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (column-major, k<0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	B = new Float64Array( 9 );

	out = dtriu( 'column-major', 3, 3, -1, A, 3, B, 3 );

	expected = new Float64Array( [ 1.0, 4.0, 0.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function copies the upper triangular part of `A` to `B` (column-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ] );
	B = new Float64Array( 9 );

	out = dtriu( 'column-major', 3, 3, 1, A, 3, B, 3 );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 6.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	B = new Float64Array( 6 );
	out = dtriu( 'row-major', 2, 3, 0, A, 3, B, 3 );
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0 ] );
	t.deepEqual( out, expected, 'returns expected value (2x3)' );

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	B = new Float64Array( 6 );
	out = dtriu( 'row-major', 3, 2, 0, A, 2, B, 2 );
	expected = new Float64Array( [ 1.0, 2.0, 0.0, 4.0, 0.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value (3x2)' );

	t.end();
});

tape( 'the function supports non-square matrices (column-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ] );
	B = new Float64Array( 6 );
	out = dtriu( 'column-major', 2, 3, 0, A, 2, B, 2 );
	expected = new Float64Array( [ 1.0, 0.0, 2.0, 5.0, 3.0, 6.0 ] );
	t.deepEqual( out, expected, 'returns expected value (2x3)' );

	A = new Float64Array( [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ] );
	B = new Float64Array( 6 );
	out = dtriu( 'column-major', 3, 2, 0, A, 3, B, 3 );
	expected = new Float64Array( [ 1.0, 0.0, 0.0, 2.0, 4.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value (3x2)' );

	t.end();
});

tape( 'the function supports a leading dimension greater than the number of rows/columns (padded matrix)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 9.0, 3.0, 4.0, 9.0 ] );
	B = new Float64Array( 6 );
	out = dtriu( 'row-major', 2, 2, 0, A, 3, B, 3 );
	expected = new Float64Array( [ 1.0, 2.0, 0.0, 0.0, 4.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value (row-major)' );

	A = new Float64Array( [ 1.0, 3.0, 9.0, 2.0, 4.0, 9.0 ] );
	B = new Float64Array( 6 );
	out = dtriu( 'column-major', 2, 2, 0, A, 3, B, 3 );
	expected = new Float64Array( [ 1.0, 0.0, 0.0, 2.0, 4.0, 0.0 ] );
	t.deepEqual( out, expected, 'returns expected value (column-major)' );

	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	B = new Float64Array( [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ] );

	out = dtriu( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, -1.0, 5.0, 6.0, -1.0, -1.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is greater than or equal to `N`, the function copies nothing', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float64Array( [ 9.0, 9.0, 9.0, 9.0 ] );

	out = dtriu( 'row-major', 2, 2, 2, A, 2, B, 2 );

	expected = new Float64Array( [ 9.0, 9.0, 9.0, 9.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function copies the entire matrix', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float64Array( 4 );

	out = dtriu( 'row-major', 2, 2, -2, A, 2, B, 2 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	expected = new Float64Array( [ 9.0, 9.0, 9.0, 9.0 ] );

	B = new Float64Array( [ 9.0, 9.0, 9.0, 9.0 ] );
	out = dtriu( 'row-major', 0, 2, 0, A, 2, B, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	B = new Float64Array( [ 9.0, 9.0, 9.0, 9.0 ] );
	out = dtriu( 'row-major', 2, 0, 0, A, 2, B, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
