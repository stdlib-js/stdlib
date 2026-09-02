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
var isSameComplex64Array = require( '@stdlib/assert/is-same-complex64array' );
var Complex64Array = require( '@stdlib/array/complex64' );
var ctriu2tril = require( './../lib/ctriu2tril.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctriu2tril, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( ctriu2tril.length, 8, 'returns expected value' );
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
			var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex64Array( 4 );
			ctriu2tril( value, 2, 2, 0, A, 2, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a valid LDA value (row-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 0, 1, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex64Array( 4 );
			ctriu2tril( 'row-major', 2, 2, 0, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a valid LDB value (row-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 0, 1, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex64Array( 4 );
			ctriu2tril( 'row-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a valid LDA value (column-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 0, 1, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex64Array( 4 );
			ctriu2tril( 'column-major', 2, 2, 0, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a valid LDB value (column-major)', function test( t ) {
	var values;
	var i;

	values = [ 0, 0, 1, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex64Array( 4 );
			ctriu2tril( 'column-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function reflects the upper triangular part of `A` to `B` (row-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctriu2tril( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 5.0, 5.0, 0.0, 0.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` to `B` (row-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctriu2tril( 'row-major', 3, 3, 1, A, 3, B, 3 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 3.0, 3.0, 6.0, 6.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` to `B` (row-major, k=2)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctriu2tril( 'row-major', 3, 3, 2, A, 3, B, 3 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` to `B` (column-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctriu2tril( 'column-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 5.0, 5.0, 6.0, 6.0, 0.0, 0.0, 0.0, 0.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` to `B` (column-major, k=2)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctriu2tril( 'column-major', 3, 3, 2, A, 3, B, 3 );

	expected = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 3.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` to `B` (column-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex64Array( 9 );

	out = ctriu2tril( 'column-major', 3, 3, 1, A, 3, B, 3 );

	expected = new Complex64Array( [ 0.0, 0.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 0.0, 0.0, 6.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	B = new Complex64Array( 6 );
	out = ctriu2tril( 'row-major', 2, 3, 0, A, 3, B, 2 );
	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 2.0, 2.0, 5.0, 5.0, 3.0, 3.0, 6.0, 6.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	B = new Complex64Array( 6 );
	out = ctriu2tril( 'row-major', 3, 2, 0, A, 2, B, 3 );
	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 4.0, 4.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports non-square matrices (column-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 4.0, 4.0, 2.0, 2.0, 5.0, 5.0, 3.0, 3.0, 6.0, 6.0 ] );
	B = new Complex64Array( 6 );
	out = ctriu2tril( 'column-major', 2, 3, 0, A, 2, B, 3 );
	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 0.0, 0.0, 5.0, 5.0, 6.0, 6.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	A = new Complex64Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 2.0, 2.0, 4.0, 4.0, 6.0, 6.0 ] );
	B = new Complex64Array( 6 );
	out = ctriu2tril( 'column-major', 3, 2, 0, A, 3, B, 2 );
	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 0.0, 0.0, 4.0, 4.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a leading dimension greater than the number of rows/columns (padded matrix)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 9.0, 9.0, 3.0, 3.0, 4.0, 4.0, 9.0, 9.0 ] );
	B = new Complex64Array( 6 );
	out = ctriu2tril( 'row-major', 2, 2, 0, A, 3, B, 3 );
	expected = new Complex64Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 2.0, 2.0, 4.0, 4.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	A = new Complex64Array( [ 1.0, 1.0, 3.0, 3.0, 9.0, 9.0, 2.0, 2.0, 4.0, 4.0, 9.0, 9.0 ] );
	B = new Complex64Array( 6 );
	out = ctriu2tril( 'column-major', 2, 2, 0, A, 3, B, 3 );
	expected = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex64Array( [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ] );

	out = ctriu2tril( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Complex64Array( [ 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 2.0, 2.0, 5.0, 5.0, -1.0, -1.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'when `k` is greater than or equal to `N`, the function reflects nothing', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	out = ctriu2tril( 'row-major', 2, 2, 2, A, 2, B, 2 );

	expected = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function reflects the entire matrix', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex64Array( 4 );

	out = ctriu2tril( 'row-major', 2, 2, -2, A, 2, B, 2 );

	expected = new Complex64Array( [ 1.0, 1.0, 3.0, 3.0, 2.0, 2.0, 4.0, 4.0 ] );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	expected = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	B = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	out = ctriu2tril( 'row-major', 0, 2, 0, A, 2, B, 2 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	B = new Complex64Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	out = ctriu2tril( 'row-major', 2, 0, 0, A, 2, B, 2 );
	t.strictEqual( isSameComplex64Array( out, expected ), true, 'returns expected value' );

	t.end();
});
