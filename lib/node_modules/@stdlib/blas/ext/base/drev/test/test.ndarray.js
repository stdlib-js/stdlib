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
var Float64Array = require( '@stdlib/array/float64' );
var drev = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof drev, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( drev.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function reverses a strided array', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Float64Array([
		6.0,
		-5.0,
		2.0,
		-1.0,
		5.0,
		-3.0,
		2.0,
		4.0
	]);

	drev( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0 ] );
	expected = new Float64Array( [ 2.0, 1.0 ] );

	drev( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	expected = new Float64Array( [ 3.0, 2.0, 1.0 ] );

	drev( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = drev( x.length, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float64Array( [ 3.0, -4.0, 1.0 ] );

	drev( 0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	drev( -4, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float64Array([
		6.0,  // 0
		-3.0,
		-5.0,  // 1
		7.0,
		2.0   // 2
	]);

	drev( 3, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0,  // 2
		-1.0,
		0.0   // 3
	]);
	expected = new Float64Array([
		0.0,  // 0
		-3.0,
		6.0,  // 1
		7.0,
		-5.0, // 2
		-1.0,
		2.0   // 3
	]);

	drev( 4, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float64Array([
		6.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		2.0   // 0
	]);

	drev( 3, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array([
		2.0,  // 3
		-3.0,
		-5.0, // 2
		7.0,
		6.0,  // 1
		-1.0,
		0.0   // 0
	]);
	expected = new Float64Array([
		0.0,  // 3
		-3.0,
		6.0,  // 2
		7.0,
		-5.0, // 1
		-1.0,
		2.0   // 0
	]);

	drev( 4, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var x;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		6.0, // 0
		3.0,
		4.0, // 1
		5.0,
		2.0  // 2
	]);

	drev( 3, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0, // 2
		7.0,
		8.0  // 3
	]);
	expected = new Float64Array([
		1.0,
		8.0, // 0
		3.0,
		6.0, // 1
		5.0,
		4.0, // 2
		7.0,
		2.0  // 3
	]);

	drev( 4, x, 2, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently reverses a strided array', function test( t ) {
	var expected;
	var x;
	var i;

	x = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x.length-i-1;
	}
	drev( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x.length-i-1;
	}
	drev( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( 101 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x.length-i-1;
	}
	drev( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
