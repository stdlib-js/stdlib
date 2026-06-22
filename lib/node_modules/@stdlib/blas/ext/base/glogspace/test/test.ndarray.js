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
var glogspace = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof glogspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( glogspace.length, 8, 'has expected arity' );
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
		4.0,
		8.0,
		16.0,
		32.0,
		64.0,
		128.0
	];

	glogspace( x.length, 2.0, 0.0, 7.0, true, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, 0.0 ];
	expected = [ 2.0, 4.0 ];

	glogspace( x.length, 2.0, 1.0, 3.0, false, x, 1, 0 );
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
		4.0,
		8.0,
		16.0,
		32.0,
		64.0,
		128.0
	];

	glogspace( x.length, 2.0, 0.0, 7.0, true, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 0.0, 0.0 ];
	expected = [ 2.0, 4.0 ];

	glogspace( x.length, 2.0, 1.0, 3.0, false, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` equals `1`, the function writes a single value to the input array', function test( t ) {
	var expected;
	var x;

	// When `endpoint` is `true`, write `base^stop`:
	x = [ 0.0 ];
	expected = [ 8.0 ];

	glogspace( 1, 2.0, 0.0, 3.0, true, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	// When `endpoint` is `false`, write `base^start`:
	x = [ 0.0 ];
	expected = [ 1.0 ];

	glogspace( 1, 2.0, 0.0, 3.0, false, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `N` equals `1`, the function writes a single value to the input array (accessors)', function test( t ) {
	var expected;
	var x;

	// When `endpoint` is `true`, write `base^stop`:
	x = [ 0.0 ];
	expected = [ 8.0 ];

	glogspace( 1, 2.0, 0.0, 3.0, true, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	// When `endpoint` is `false`, write `base^start`:
	x = [ 0.0 ];
	expected = [ 1.0 ];

	glogspace( 1, 2.0, 0.0, 3.0, false, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = glogspace( x.length, 2.0, 0.0, 5.0, false, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = glogspace( x.length, 2.0, 0.0, 5.0, false, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	glogspace( 0, 2.0, 0.0, 10.0, true, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	glogspace( -4, 2.0, 0.0, 10.0, true, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	glogspace( 0, 2.0, 0.0, 10.0, true, toAccessorArray( x ), 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	glogspace( -4, 2.0, 0.0, 10.0, true, toAccessorArray( x ), 1, 0 );
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
		2.0,  // 0
		-3.0,
		4.0,  // 1
		7.0,
		8.0   // 2
	];

	glogspace( 3, 2.0, 1.0, 4.0, false, x, 2, 0 );
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
		2.0,  // 0
		-3.0,
		4.0,  // 1
		7.0,
		8.0   // 2
	];

	glogspace( 3, 2.0, 1.0, 4.0, false, toAccessorArray( x ), 2, 0 );
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
		8.0,  // 2
		-3.0,
		4.0,  // 1
		7.0,
		2.0   // 0
	];

	glogspace( 3, 2.0, 1.0, 3.0, true, x, -2, x.length-1 );
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
		8.0,  // 2
		-3.0,
		4.0,  // 1
		7.0,
		2.0   // 0
	];

	glogspace( 3, 2.0, 1.0, 3.0, true, toAccessorArray( x ), -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
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
		0.5,   // 0
		0.25,  // 1
		0.125, // 2
		6.0,
		7.0
	];

	glogspace( 3, 2.0, -1.0, -4.0, false, x, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter (accessors)', function test( t ) {
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
		0.5,   // 0
		0.25,  // 1
		0.125, // 2
		6.0,
		7.0
	];

	glogspace( 3, 2.0, -1.0, -4.0, false, toAccessorArray( x ), 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
