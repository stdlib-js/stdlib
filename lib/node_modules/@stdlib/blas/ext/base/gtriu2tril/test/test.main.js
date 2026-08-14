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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gtriu2tril = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gtriu2tril, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( gtriu2tril.length, 8, 'returns expected value' );
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
			var A = [ 1.0, 2.0, 3.0, 4.0 ];
			var B = [ 0.0, 0.0, 0.0, 0.0 ];
			gtriu2tril( value, 2, 2, 0, A, 2, B, 2 );
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
			var A = [ 1.0, 2.0, 3.0, 4.0 ];
			var B = [ 0.0, 0.0, 0.0, 0.0 ];
			gtriu2tril( 'row-major', 2, 2, 0, A, value, B, 2 );
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
			var A = [ 1.0, 2.0, 3.0, 4.0 ];
			var B = [ 0.0, 0.0, 0.0, 0.0 ];
			gtriu2tril( 'row-major', 2, 2, 0, A, 2, B, value );
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
			var A = [ 1.0, 2.0, 3.0, 4.0 ];
			var B = [ 0.0, 0.0, 0.0, 0.0 ];
			gtriu2tril( 'column-major', 2, 2, 0, A, value, B, 2 );
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
			var A = [ 1.0, 2.0, 3.0, 4.0 ];
			var B = [ 0.0, 0.0, 0.0, 0.0 ];
			gtriu2tril( 'column-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (row-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = [ 1.0, 0.0, 0.0, 2.0, 5.0, 0.0, 3.0, 6.0, 9.0 ];
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (row-major, k=0, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'row-major', 3, 3, 0, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 1.0, 0.0, 0.0, 2.0, 5.0, 0.0, 3.0, 6.0, 9.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (row-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'row-major', 3, 3, 1, A, 3, B, 3 );

	expected = [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 6.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (row-major, k>0, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'row-major', 3, 3, 1, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0, 3.0, 6.0, 0.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (row-major, k=2)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'row-major', 3, 3, 2, A, 3, B, 3 );

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (row-major, k=2, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'row-major', 3, 3, 2, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 3.0, 0.0, 0.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (column-major, k=0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'column-major', 3, 3, 0, A, 3, B, 3 );

	expected = [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0, 0.0, 0.0, 9.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (column-major, k=0, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'column-major', 3, 3, 0, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0, 0.0, 0.0, 9.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (column-major, k>0)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'column-major', 3, 3, 1, A, 3, B, 3 );

	expected = [ 0.0, 2.0, 3.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (column-major, k>0, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'column-major', 3, 3, 1, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 0.0, 2.0, 3.0, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (column-major, k=2)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'column-major', 3, 3, 2, A, 3, B, 3 );

	expected = [ 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function reflects the upper triangular part of `A` into the lower triangular part of `B` (column-major, k=2, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 4.0, 7.0, 2.0, 5.0, 8.0, 3.0, 6.0, 9.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'column-major', 3, 3, 2, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	out = gtriu2tril( 'row-major', 2, 3, 0, A, 3, B, 2 );
	expected = [ 1.0, 0.0, 2.0, 5.0, 3.0, 6.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	out = gtriu2tril( 'row-major', 3, 2, 0, A, 2, B, 3 );
	expected = [ 1.0, 0.0, 0.0, 2.0, 4.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports non-square matrices (row-major, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	gtriu2tril( 'row-major', 2, 3, 0, toAccessorArray( A ), 3, toAccessorArray( B ), 2 );
	expected = [ 1.0, 0.0, 2.0, 5.0, 3.0, 6.0 ];
	t.deepEqual( B, expected, 'returns expected value' );

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	gtriu2tril( 'row-major', 3, 2, 0, toAccessorArray( A ), 2, toAccessorArray( B ), 3 );
	expected = [ 1.0, 0.0, 0.0, 2.0, 4.0, 0.0 ];
	t.deepEqual( B, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports non-square matrices (column-major)', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	out = gtriu2tril( 'column-major', 2, 3, 0, A, 2, B, 3 );
	expected = [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	A = [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	out = gtriu2tril( 'column-major', 3, 2, 0, A, 3, B, 2 );
	expected = [ 1.0, 2.0, 0.0, 4.0, 0.0, 0.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports non-square matrices (column-major, accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 4.0, 2.0, 5.0, 3.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	gtriu2tril( 'column-major', 2, 3, 0, toAccessorArray( A ), 2, toAccessorArray( B ), 3 );
	expected = [ 1.0, 2.0, 3.0, 0.0, 5.0, 6.0 ];
	t.deepEqual( B, expected, 'returns expected value' );

	A = [ 1.0, 3.0, 5.0, 2.0, 4.0, 6.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	gtriu2tril( 'column-major', 3, 2, 0, toAccessorArray( A ), 3, toAccessorArray( B ), 2 );
	expected = [ 1.0, 2.0, 0.0, 4.0, 0.0, 0.0 ];
	t.deepEqual( B, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ];

	out = gtriu2tril( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = [ 1.0, -1.0, -1.0, 2.0, 5.0, -1.0, 3.0, 6.0, 9.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged (accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];
	B = [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ];

	gtriu2tril( 'row-major', 3, 3, 0, toAccessorArray( A ), 3, toAccessorArray( B ), 3 );

	expected = [ 1.0, -1.0, -1.0, 2.0, 5.0, -1.0, 3.0, 6.0, 9.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is greater than or equal to `N`, the function reflects nothing', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0 ];
	B = [ 9.0, 9.0, 9.0, 9.0 ];

	out = gtriu2tril( 'row-major', 2, 2, 2, A, 2, B, 2 );

	expected = [ 9.0, 9.0, 9.0, 9.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is greater than or equal to `N`, the function reflects nothing (accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0 ];
	B = [ 9.0, 9.0, 9.0, 9.0 ];

	gtriu2tril( 'row-major', 2, 2, 2, toAccessorArray( A ), 2, toAccessorArray( B ), 2 );

	expected = [ 9.0, 9.0, 9.0, 9.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function reflects the entire matrix', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0 ];

	out = gtriu2tril( 'row-major', 2, 2, -2, A, 2, B, 2 );

	expected = [ 1.0, 3.0, 2.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function reflects the entire matrix (accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0 ];
	B = [ 0.0, 0.0, 0.0, 0.0 ];

	gtriu2tril( 'row-major', 2, 2, -2, toAccessorArray( A ), 2, toAccessorArray( B ), 2 );

	expected = [ 1.0, 3.0, 2.0, 4.0 ];
	t.deepEqual( B, expected, 'returns expected value' );
	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero', function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0 ];
	expected = [ 9.0, 9.0, 9.0, 9.0 ];

	B = [ 9.0, 9.0, 9.0, 9.0 ];
	out = gtriu2tril( 'row-major', 0, 2, 0, A, 2, B, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	B = [ 9.0, 9.0, 9.0, 9.0 ];
	out = gtriu2tril( 'row-major', 2, 0, 0, A, 2, B, 2 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero (accessors)', function test( t ) {
	var expected;
	var A;
	var B;

	A = [ 1.0, 2.0, 3.0, 4.0 ];
	expected = [ 9.0, 9.0, 9.0, 9.0 ];

	B = [ 9.0, 9.0, 9.0, 9.0 ];
	gtriu2tril( 'row-major', 0, 2, 0, toAccessorArray( A ), 2, toAccessorArray( B ), 2 );
	t.deepEqual( B, expected, 'returns expected value' );

	B = [ 9.0, 9.0, 9.0, 9.0 ];
	gtriu2tril( 'row-major', 2, 0, 0, toAccessorArray( A ), 2, toAccessorArray( B ), 2 );
	t.deepEqual( B, expected, 'returns expected value' );

	t.end();
});
