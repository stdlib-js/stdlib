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

var tape = require( 'tape' );
var uniform = require( '@stdlib/random/array/uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var dlacpy = require( './../lib/dlacpy.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlacpy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( dlacpy.length, 8, 'returns expected value' );
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

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float64Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlacpy( value, 'all', 2, 2, A, 2, B, 2 );
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

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float64Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlacpy( 'row-major', 'all', 2, 2, A, value, B, 2 );
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

	A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	B = new Float64Array( 4 );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dlacpy( 'row-major', 'all', 2, 2, A, 2, B, value );
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

	A = uniform( M*N, -10.0, 10.0, opts );
	B = new Float64Array( M*N );

	out = dlacpy( 'row-major', 'all', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

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

	A = uniform( M*N, -10.0, 10.0, opts );
	B = new Float64Array( M*N );

	out = dlacpy( 'row-major', 'lower', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );

	out = dlacpy( 'row-major', 'upper', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

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

	A = uniform( M*N, -10.0, 10.0, opts );
	B = new Float64Array( M*N );

	out = dlacpy( 'row-major', 'upper', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );

	out = dlacpy( 'row-major', 'lower', M, N, A, N, B, N );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

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

	A = uniform( M*N, -10.0, 10.0, opts );
	B = new Float64Array( M*N );

	out = dlacpy( 'column-major', 'all', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

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

	A = uniform( M*N, -10.0, 10.0, opts );
	B = new Float64Array( M*N );

	out = dlacpy( 'column-major', 'lower', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );

	out = dlacpy( 'column-major', 'upper', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

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

	A = uniform( M*N, -10.0, 10.0, opts );
	B = new Float64Array( M*N );

	out = dlacpy( 'column-major', 'upper', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );

	out = dlacpy( 'column-major', 'lower', M, N, A, M, B, M );
	t.strictEqual( out, B, 'returns expected value' );
	t.deepEqual( out, A, 'returns expected value' );

	t.end();
});
