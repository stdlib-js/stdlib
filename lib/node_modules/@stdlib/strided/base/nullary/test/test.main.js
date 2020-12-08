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
var floor = require( '@stdlib/math/base/special/floor' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var Float64Array = require( '@stdlib/array/float64' );
var nullary = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nullary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( nullary.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function applies a nullary callback to each indexed strided array element', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

	nullary( [ x ], [ x.length ], [ 1 ], constantFunction( 3.0 ) );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0, 3.0 ] );

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	]);
	N = 3;

	nullary( [ x ], [ N ], [ 2 ], constantFunction( 3.0 ) );

	expected = new Float64Array([
		3.0,
		-2.0,
		3.0,
		-4.0,
		3.0
	]);

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

	nullary( [ x ], [ -1 ], [ 1 ], constantFunction( 3.0 ) );
	t.deepEqual( x, expected, 'returns `x` unchanged' );

	nullary( [ x ], [ 0 ], [ 1 ], constantFunction( 3.0 ) );
	t.deepEqual( x, expected, 'returns `x` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	]);
	N = 3;

	nullary( [ x ], [ N ], [ -2 ], constantFunction( 3.0 ) );

	expected = new Float64Array([
		3.0,
		-2.0,
		3.0,
		-4.0,
		3.0
	]);

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		-1.0,
		-2.0, // 2
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 0
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	N = floor( x0.length / 2 );

	nullary( [ x1 ], [ N ], [ -2 ], constantFunction( 3.0 ) );
	expected = new Float64Array([
		-1.0,
		3.0,
		-3.0,
		3.0,
		-5.0,
		3.0
	]);

	t.deepEqual( x0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var N;

	x = {
		'length': 5,
		'0': -1.0, // 0
		'1': -2.0,
		'2': -3.0, // 1
		'3': -4.0,
		'4': -5.0  // 2
	};
	N = 3;

	nullary( [ x ], [ N ], [ 2 ], constantFunction( 3.0 ) );

	expected = {
		'length': 5,
		'0': 3.0,
		'1': -2.0,
		'2': 3.0,
		'3': -4.0,
		'4': 3.0
	};

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});
