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
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dwxsy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dwxsy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dwxsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 10', opts, function test( t ) {
	t.strictEqual( dwxsy.length, 10, 'has expected arity' );
	t.end();
});

tape( 'the function subtracts elements of `y` from the corresponding elements of `x` and assigns the results to elements in `w`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

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
	y = new Float64Array([
		2.0,
		3.0,
		-1.0,
		4.0,
		5.0,
		-2.0,
		3.0,
		-1.0
	]);
	w = new Float64Array( x.length );
	expected = new Float64Array([
		2.0,  //  4.0 - 2.0
		-1.0, //  2.0 - 3.0
		-2.0, // -3.0 - -1.0
		1.0,  //  5.0 - 4.0
		-6.0, // -1.0 - 5.0
		4.0,  //  2.0 - -2.0
		-8.0, // -5.0 - 3.0
		7.0   //  6.0 - -1.0
	]);

	dwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( [ 1.0, 2.0 ] );
	y = new Float64Array( [ 5.0, -6.0 ] );
	w = new Float64Array( x.length );
	expected = new Float64Array( [ -4.0, 8.0 ] ); // 1.0 - 5.0, 2.0 - -6.0

	dwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', opts, function test( t ) {
	var out;
	var x;
	var y;
	var w;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 5.0, 6.0, 7.0, 8.0, 9.0 ] );
	w = new Float64Array( x.length );
	out = dwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );

	t.strictEqual( out, w, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `w` unchanged', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	w = new Float64Array( [ 4.0, 5.0, 6.0 ] );
	expected = new Float64Array( [ 4.0, 5.0, 6.0 ] );

	dwxsy( 0, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	dwxsy( -4, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array( [ 3.0, 4.0, 5.0 ] );
	w = new Float64Array( 3 );
	expected = new Float64Array([
		-1.0, // 2.0 - 3.0
		-9.0, // -5.0 - 4.0
		1.0   // 6.0 - 5.0
	]);

	dwxsy( 3, x, 2, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array( [ 2.0, -4.0, 6.0 ] );
	y = new Float64Array([
		5.0,  // 0
		30.0,
		3.0,  // 1
		10.0,
		-2.0  // 2
	]);
	w = new Float64Array( 3 );
	expected = new Float64Array([
		-3.0, // 2.0 - 5.0
		-7.0, // -4.0 - 3.0
		8.0   // 6.0 - -2.0
	]);

	dwxsy( 3, x, 1, 0, y, 2, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` stride', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array( [ 2.0, -4.0, 6.0 ] );
	y = new Float64Array( [ 5.0, 3.0, -2.0 ] );
	w = new Float64Array([
		0.0, // 0
		30.0,
		0.0, // 1
		10.0,
		0.0  // 2
	]);
	expected = new Float64Array([
		-3.0, // 2.0 - 5.0
		30.0,
		-7.0, // -4.0 - 3.0
		10.0,
		8.0   // 6.0 - -2.0
	]);

	dwxsy( 3, x, 1, 0, y, 1, 0, w, 2, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array([
		2.0,  // 2
		-4.0,
		6.0,  // 1
		5.0,
		-7.0  // 0
	]);
	y = new Float64Array([
		4.0, // 2
		3.0, // 1
		2.0  // 0
	]);
	w = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	expected = new Float64Array([
		-2.0, // 2.0 - 4.0
		3.0,  // 6.0 - 3.0
		-9.0  // -7.0 - 2.0
	]);

	dwxsy( 3, x, -2, x.length-1, y, -1, y.length-1, w, -1, w.length-1 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0
	]);
	y = new Float64Array( [ 10.0, 20.0, 30.0 ] );
	w = new Float64Array( 5 );
	expected = new Float64Array([
		-8.0,  // 2.0 - 10.0
		-17.0, // 3.0 - 20.0
		-26.0, // 4.0 - 30.0
		0.0,
		0.0
	]);

	dwxsy( 3, x, 1, 1, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	y = new Float64Array([
		10.0,
		20.0,
		30.0, // 0
		40.0, // 1
		50.0  // 2
	]);
	w = new Float64Array( 3 );
	expected = new Float64Array([
		-29.0, // 1.0 - 30.0
		-38.0, // 2.0 - 40.0
		-47.0  // 3.0 - 50.0
	]);

	dwxsy( 3, x, 1, 0, y, 1, 2, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `w` offset', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;

	x = new Float64Array( [ 2.0, -4.0, 6.0 ] );
	y = new Float64Array( [ 5.0, 3.0, -2.0 ] );
	w = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	expected = new Float64Array([
		0.0,
		0.0,
		-3.0, // 2.0 - 5.0
		-7.0, // -4.0 - 3.0
		8.0   // 6.0 - -2.0
	]);

	dwxsy( 3, x, 1, 0, y, 1, 0, w, 1, 2 );
	t.deepEqual( w, expected, 'returns expected value' );
	t.end();
});

tape( 'if all strides are equal to `1`, the function efficiently subtracts elements of `y` from the corresponding elements of `x` and assigns the results to elements in `w`', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = new Float64Array( 100 );
	y = new Float64Array( 100 );
	w = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] - y[ i ];
	}
	dwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	y = new Float64Array( 240 );
	w = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		y[ i ] = x.length - i;
		expected[ i ] = x[ i ] - y[ i ];
	}
	dwxsy( x.length, x, 1, 0, y, 1, 0, w, 1, 0 );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});
