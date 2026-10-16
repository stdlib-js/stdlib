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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var ztril = tryRequire( resolve( __dirname, './../lib/ztril.native.js' ) );
var opts = {
	'skip': ( ztril instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ztril, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', opts, function test( t ) {
	t.strictEqual( ztril.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', opts, function test( t ) {
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
			var A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex128Array( 4 );
			ztril( value, 2, 2, 0, A, 2, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a valid LDA value (row-major)', opts, function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex128Array( 4 );
			ztril( 'row-major', 2, 2, 0, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a valid LDB value (row-major)', opts, function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex128Array( 4 );
			ztril( 'row-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a valid LDA value (column-major)', opts, function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex128Array( 4 );
			ztril( 'column-major', 2, 2, 0, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not a valid LDB value (column-major)', opts, function test( t ) {
	var values;
	var i;

	values = [ 0, 1 ];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
			var B = new Complex128Array( 4 );
			ztril( 'column-major', 2, 2, 0, A, 2, B, value );
		};
	}
});

tape( 'the function copies the lower triangular part of `A` to `B` (row-major, k=0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex128Array( 9 );

	out = ztril( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Complex128Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	t.strictEqual( out, B, 'returns expected value' );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the lower triangular part of `A` to `B` (row-major, k>0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex128Array( 9 );

	out = ztril( 'row-major', 3, 3, 1, A, 3, B, 3 );

	expected = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 0.0, 0.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the lower triangular part of `A` to `B` (row-major, k<0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex128Array( 9 );

	out = ztril( 'row-major', 3, 3, -1, A, 3, B, 3 );

	expected = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 0.0, 0.0, 0.0, 0.0, 7.0, 7.0, 8.0, 8.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the lower triangular part of `A` to `B` (column-major, k=0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex128Array( 9 );

	out = ztril( 'column-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 0.0, 0.0, 5.0, 5.0, 8.0, 8.0, 0.0, 0.0, 0.0, 0.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the lower triangular part of `A` to `B` (column-major, k<0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex128Array( 9 );

	out = ztril( 'column-major', 3, 3, -1, A, 3, B, 3 );

	expected = new Complex128Array( [ 0.0, 0.0, 4.0, 4.0, 7.0, 7.0, 0.0, 0.0, 0.0, 0.0, 8.0, 8.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function copies the lower triangular part of `A` to `B` (column-major, k>0)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 3.0, 3.0, 6.0, 6.0, 9.0, 9.0 ] );
	B = new Complex128Array( 9 );

	out = ztril( 'column-major', 3, 3, 1, A, 3, B, 3 );

	expected = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 7.0, 7.0, 2.0, 2.0, 5.0, 5.0, 8.0, 8.0, 0.0, 0.0, 6.0, 6.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function supports non-square matrices (row-major)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	B = new Complex128Array( 6 );
	out = ztril( 'row-major', 2, 3, 0, A, 3, B, 3 );
	expected = new Complex128Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 5.0, 5.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	B = new Complex128Array( 6 );
	out = ztril( 'row-major', 3, 2, 0, A, 2, B, 2 );
	expected = new Complex128Array( [ 1.0, 1.0, 0.0, 0.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports non-square matrices (column-major)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 2.0, 2.0, 5.0, 5.0, 3.0, 3.0, 6.0, 6.0 ] );
	B = new Complex128Array( 6 );
	out = ztril( 'column-major', 2, 3, 0, A, 2, B, 2 );
	expected = new Complex128Array( [ 1.0, 1.0, 4.0, 4.0, 0.0, 0.0, 5.0, 5.0, 0.0, 0.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 2.0, 2.0, 4.0, 4.0, 6.0, 6.0 ] );
	B = new Complex128Array( 6 );
	out = ztril( 'column-major', 3, 2, 0, A, 3, B, 3 );
	expected = new Complex128Array( [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0, 0.0, 0.0, 4.0, 4.0, 6.0, 6.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function supports a leading dimension greater than the number of rows/columns (padded matrix)', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 9.0, 9.0, 3.0, 3.0, 4.0, 4.0, 9.0, 9.0 ] );
	B = new Complex128Array( 6 );
	out = ztril( 'row-major', 2, 2, 0, A, 3, B, 3 );
	expected = new Complex128Array( [ 1.0, 1.0, 0.0, 0.0, 0.0, 0.0, 3.0, 3.0, 4.0, 4.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	A = new Complex128Array( [ 1.0, 1.0, 3.0, 3.0, 9.0, 9.0, 2.0, 2.0, 4.0, 4.0, 9.0, 9.0 ] );
	B = new Complex128Array( 6 );
	out = ztril( 'column-major', 2, 2, 0, A, 3, B, 3 );
	expected = new Complex128Array( [ 1.0, 1.0, 3.0, 3.0, 0.0, 0.0, 0.0, 0.0, 4.0, 4.0, 0.0, 0.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});

tape( 'the function leaves elements outside of the copied region unchanged', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0, 6.0, 6.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	B = new Complex128Array( [ -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0 ] );

	out = ztril( 'row-major', 3, 3, 0, A, 3, B, 3 );

	expected = new Complex128Array( [ 1.0, 1.0, -1.0, -1.0, -1.0, -1.0, 4.0, 4.0, 5.0, 5.0, -1.0, -1.0, 7.0, 7.0, 8.0, 8.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently negative, the function copies nothing', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex128Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	out = ztril( 'row-major', 2, 2, -2, A, 2, B, 2 );

	expected = new Complex128Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'when `k` is sufficiently positive, the function copies the entire matrix', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	B = new Complex128Array( 4 );

	out = ztril( 'row-major', 2, 2, 2, A, 2, B, 2 );

	expected = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );
	t.end();
});

tape( 'the function leaves `B` unchanged when `M` or `N` is equal to zero', opts, function test( t ) {
	var expected;
	var out;
	var A;
	var B;

	A = new Complex128Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0 ] );
	expected = new Complex128Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );

	B = new Complex128Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	out = ztril( 'row-major', 0, 2, 0, A, 2, B, 2 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	B = new Complex128Array( [ 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0 ] );
	out = ztril( 'row-major', 2, 0, 0, A, 2, B, 2 );
	t.strictEqual( isSameComplex128Array( out, expected ), true, 'returns expected value' );

	t.end();
});
