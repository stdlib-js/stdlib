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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var constantFunction = require( '@stdlib/utils/constant-function' );
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var nullary = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nullary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( nullary.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function applies a nullary callback to each indexed strided array element', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

	nullary( [ x ], [ x.length ], [ 1 ], [ 0 ], constantFunction( 3.0 ) );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0, 3.0 ] );

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});

tape( 'the function applies a nullary callback to each indexed strided array element (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	x = new Complex64Array( xbuf.buffer );

	nullary( [ x ], [ x.length ], [ 1 ], [ 0 ], constantFunction( new Complex64( 1.0, 1.0 ) ) );

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	t.deepEqual( xbuf, expected, 'deep equal' );
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

	nullary( [ x ], [ N ], [ 2 ], [ 0 ], constantFunction( 3.0 ) );

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

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var N;

	xbuf = new Float32Array([
		-1.0, // 0
		-1.0, // 0
		-2.0,
		-2.0,
		-3.0, // 1
		-3.0, // 1
		-4.0,
		-4.0,
		-5.0, // 2
		-5.0  // 2
	]);
	x = new Complex64Array( xbuf );
	N = 3;

	nullary( [ x ], [ N ], [ 2 ], [ 0 ], constantFunction( new Complex64( 1.0, 1.0 ) ) );

	expected = new Complex64Array([
		new Complex64( 1.0, 1.0 ),
		new Complex64( -2.0, -2.0 ),
		new Complex64( 1.0, 1.0 ),
		new Complex64( -4.0, -4.0 ),
		new Complex64( 1.0, 1.0 )
	]);

	t.deepEqual( new Float32Array( x.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var N;

	x = new Float64Array([
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
		-5.0  // 2
	]);
	N = 3;

	nullary( [ x ], [ N ], [ 1 ], [ 2 ], constantFunction( 3.0 ) );

	expected = new Float64Array([
		-1.0,
		-2.0,
		3.0,  // 0
		3.0,  // 1
		3.0   // 2
	]);

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var N;

	xbuf = new Float32Array([
		-1.0,
		-1.0,
		-2.0,
		-2.0,
		-3.0, // 0
		-3.0, // 0
		-4.0, // 1
		-4.0, // 1
		-5.0, // 2
		-5.0  // 2
	]);
	x = new Complex64Array( xbuf );
	N = 3;

	nullary( [ x ], [ N ], [ 1 ], [ 2 ], constantFunction( new Complex64( 1.0, 1.0 ) ) );

	expected = new Complex64Array([
		new Complex64( -1.0, -1.0 ),
		new Complex64( -2.0, -2.0 ),
		new Complex64( 1.0, 1.0 ),
		new Complex64( 1.0, 1.0 ),
		new Complex64( 1.0, 1.0 )
	]);

	t.deepEqual( new Float32Array( x.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function returns the destination array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

	expected = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );

	nullary( [ x ], [ -1 ], [ 1 ], [ 0 ], constantFunction( 3.0 ) );
	t.deepEqual( x, expected, 'returns `x` unchanged' );

	nullary( [ x ], [ 0 ], [ 1 ], [ 0 ], constantFunction( 3.0 ) );
	t.deepEqual( x, expected, 'returns `x` unchanged' );

	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function returns the destination array unchanged (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;

	xbuf = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );
	x = new Complex64Array( xbuf );

	expected = new Float32Array( [ -1.0, -2.0, -3.0, -4.0, -5.0, -6.0 ] );

	nullary( [ x ], [ -1 ], [ 1 ], [ 0 ], constantFunction( new Complex64( 1.0, 1.0 ) ) );
	t.deepEqual( new Float32Array( x.buffer ), expected, 'returns expected value' );

	nullary( [ x ], [ 0 ], [ 1 ], [ 0 ], constantFunction( new Complex64( 1.0, 1.0 ) ) );
	t.deepEqual( new Float32Array( x.buffer ), expected, 'returns expected value' );

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

	nullary( [ x ], [ N ], [ -2 ], [ x.length-1 ], constantFunction( 3.0 ) );

	expected = new Float64Array([
		3.0,  // 2
		-2.0,
		3.0,  // 1
		-4.0,
		3.0   // 0
	]);

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;
	var N;

	xbuf = new Float32Array([
		-1.0, // 2
		-1.0, // 2
		-2.0,
		-2.0,
		-3.0, // 1
		-3.0, // 1
		-4.0,
		-4.0,
		-5.0, // 0
		-5.0  // 0
	]);
	x = new Complex64Array( xbuf );
	N = 3;

	nullary( [ x ], [ N ], [ -2 ], [ x.length-1 ], constantFunction( new Complex64( 1.0, 1.0 ) ) );

	expected = new Complex64Array([
		new Complex64( 1.0, 1.0 ),
		new Complex64( -2.0, -2.0 ),
		new Complex64( 1.0, 1.0 ),
		new Complex64( -4.0, -4.0 ),
		new Complex64( 1.0, 1.0 )
	]);

	t.deepEqual( new Float32Array( x.buffer ), new Float32Array( expected.buffer ), 'deep equal' );
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

	nullary( [ x ], [ N ], [ 2 ], [ 0 ], constantFunction( 3.0 ) );

	expected = {
		'length': 5,
		'0': 3.0,  // 0
		'1': -2.0,
		'2': 3.0,  // 1
		'3': -4.0,
		'4': 3.0   // 2
	};

	t.deepEqual( x, expected, 'deep equal' );
	t.end();
});
