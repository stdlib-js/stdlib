/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var isSameComplex128Array = require( '@stdlib/assert/is-same-complex128array' );
var Complex128Array = require( '@stdlib/array/complex128' );
var uniform = require( '@stdlib/random/array/uniform' );
var zlacpy = require( './../lib/zlacpy.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof zlacpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( zlacpy.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided an invalid first argument', function test( t ) {
	var values;
	var A;
	var B;
	var i;

	values = [
		'foo',
		'bar',
		'beep',
		'boop'
	];

	A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	B = new Complex128Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zlacpy( value, 'all', 2, 2, A, 2, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an invalid sixth argument (row-major)', function test( t ) {
	var values;
	var A;
	var B;
	var i;

	values = [
		0,
		1
	];

	A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	B = new Complex128Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zlacpy( 'row-major', 'all', 2, 2, A, value, B, 2 );
		};
	}
});

tape( 'the function throws an error if provided an invalid eighth argument (row-major)', function test( t ) {
	var values;
	var A;
	var B;
	var i;

	values = [
		0,
		1
	];

	A = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	B = new Complex128Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			zlacpy( 'row-major', 'all', 2, 2, A, 2, B, value );
		};
	}
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (row-major)', function test( t ) {
	var opts;
	var out;
	var A;
	var B;
	var M;
	var N;

	M = 5;
	N = 8;

	opts = {
		'dtype': 'float64'
	};

	A = new Complex128Array( uniform( M*N*2, -10.0, 10.0, opts ) );
	B = new Complex128Array( M*N );

	out = zlacpy( 'row-major', 'all', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});

tape( 'the function copies a part of a matrix `A` to another matrix `B` (row-major, upper)', function test( t ) {
	var opts;
	var out;
	var A;
	var B;
	var M;
	var N;

	M = 5;
	N = 8;

	opts = {
		'dtype': 'float64'
	};

	A = new Complex128Array( uniform( M*N*2, -10.0, 10.0, opts ) );
	B = new Complex128Array( M*N );

	out = zlacpy( 'row-major', 'lower', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );

	out = zlacpy( 'row-major', 'upper', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});

tape( 'the function copies a part of a matrix `A` to another matrix `B` (row-major, lower)', function test( t ) {
	var opts;
	var out;
	var A;
	var B;
	var M;
	var N;

	M = 5;
	N = 8;

	opts = {
		'dtype': 'float64'
	};

	A = new Complex128Array( uniform( M*N*2, -10.0, 10.0, opts ) );
	B = new Complex128Array( M*N );

	out = zlacpy( 'row-major', 'upper', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );

	out = zlacpy( 'row-major', 'lower', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});

tape( 'the function copies all of a matrix `A` to another matrix `B` (column-major)', function test( t ) {
	var opts;
	var out;
	var A;
	var B;
	var M;
	var N;

	M = 5;
	N = 8;

	opts = {
		'dtype': 'float64'
	};

	A = new Complex128Array( uniform( M*N*2, -10.0, 10.0, opts ) );
	B = new Complex128Array( M*N );

	out = zlacpy( 'column-major', 'all', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});

tape( 'the function copies a part of a matrix `A` to another matrix `B` (column-major, upper)', function test( t ) {
	var opts;
	var out;
	var A;
	var B;
	var M;
	var N;

	M = 5;
	N = 8;

	opts = {
		'dtype': 'float64'
	};

	A = new Complex128Array( uniform( M*N*2, -10.0, 10.0, opts ) );
	B = new Complex128Array( M*N );

	out = zlacpy( 'column-major', 'lower', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );

	out = zlacpy( 'column-major', 'upper', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});

tape( 'the function copies a part of a matrix `A` to another matrix `B` (column-major, lower)', function test( t ) {
	var opts;
	var out;
	var A;
	var B;
	var M;
	var N;

	M = 5;
	N = 8;

	opts = {
		'dtype': 'float64'
	};

	A = new Complex128Array( uniform( M*N*2, -10.0, 10.0, opts ) );
	B = new Complex128Array( M*N );

	out = zlacpy( 'column-major', 'upper', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );

	out = zlacpy( 'column-major', 'lower', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );
	t.ok( isSameComplex128Array( out, A ), 'returns expected value' );

	t.end();
});
