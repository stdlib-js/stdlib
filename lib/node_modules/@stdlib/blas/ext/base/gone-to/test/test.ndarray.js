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
var goneTo = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof goneTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( goneTo.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = goneTo( x.length, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = goneTo( x.length, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	goneTo( 0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	goneTo( -4, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

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

	goneTo( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;

	xbuf = [ 4.0, 2.0, -3.0, 5.0 ];
	x = toAccessorArray( xbuf );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	goneTo( x.length, x, 1, 0 );
	t.deepEqual( xbuf, expected, 'returns expected value' );

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

	goneTo( 3, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;

	xbuf = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	x = toAccessorArray( xbuf );
	expected = [
		1.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		3.0   // 2
	];

	goneTo( 3, x, 2, 0 );
	t.deepEqual( xbuf, expected, 'returns expected value' );
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

	goneTo( 3, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;

	xbuf = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	x = toAccessorArray( xbuf );
	expected = [
		3.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		1.0   // 0
	];

	goneTo( 3, x, -2, x.length-1 );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', function test( t ) {
	var expected;
	var x;

	x = [
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		6.0,
		7.0
	];
	expected = [
		1.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		6.0,
		7.0
	];

	goneTo( 3, x, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter (accessors)', function test( t ) {
	var expected;
	var xbuf;
	var x;

	xbuf = [
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		6.0,
		7.0
	];
	x = toAccessorArray( xbuf );
	expected = [
		1.0,
		1.0, // 0
		2.0, // 1
		3.0, // 2
		6.0,
		7.0
	];

	goneTo( 3, x, 1, 1 );
	t.deepEqual( xbuf, expected, 'returns expected value' );
	t.end();
});
