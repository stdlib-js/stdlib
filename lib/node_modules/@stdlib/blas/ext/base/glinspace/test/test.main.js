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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Float64Array = require( '@stdlib/array/float64' );
var glinspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof glinspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( glinspace.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function fills a strided array', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0
	];

	glinspace( x.length, 1.0, 8.0, true, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, 0.0 ];
	expected = [ 1.0, 2.0 ];

	glinspace( x.length, 1.0, 3.0, false, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0
	];

	glinspace( x.length, 1.0, 8.0, true, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, 0.0 ];
	expected = [ 1.0, 2.0 ];

	glinspace( x.length, 1.0, 3.0, false, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = glinspace( x.length, 0.0, 5.0, false, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = glinspace( x.length, 0.0, 5.0, false, x, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	glinspace( 0, 0.0, 10.0, true, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	glinspace( -4, 0.0, 10.0, true, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	glinspace( 0, 0.0, 10.0, true, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	glinspace( -4, 0.0, 10.0, true, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		1.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		3.0   // 2
	];

	glinspace( 3, 1.0, 4.0, false, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		1.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		3.0   // 2
	];

	glinspace( 3, 1.0, 4.0, false, toAccessorArray( x ), 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		3.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		1.0   // 0
	];

	glinspace( 3, 1.0, 3.0, true, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		3.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		1.0   // 0
	];

	glinspace( 3, 1.0, 3.0, true, toAccessorArray( x ), -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		1.0, // 0
		3.0,
		2.0, // 1
		5.0,
		3.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	glinspace( 3, 1.0, 3.0, true, x1, 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (accessors)', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float64Array([
		1.0,
		1.0, // 0
		3.0,
		2.0, // 1
		5.0,
		3.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	glinspace( 3, 1.0, 3.0, true, toAccessorArray( x1 ), 2 );
	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
