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
var gwhere = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gwhere, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', function test( t ) {
	t.strictEqual( gwhere.length, 13, 'has expected arity' );
	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gwhere( 5, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 7.0, 3.0, 9.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all true)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 1, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 2.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (all false)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 0, 0, 0 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = [ 4.0, 5.0, 6.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (truthy/falsy)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ true, false, 'a', '', 5, 0, null ];
	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];
	y = [ 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gwhere( 7, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 9.0, 3.0, 11.0, 5.0, 13.0, 14.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function selects elements from `x` or `y` based on a condition (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gwhere( 5, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 1.0, 7.0, 3.0, 9.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var condition;
	var actual;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [ 0.0, 0.0, 0.0 ];

	actual = gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );

	t.strictEqual( actual, out, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	expected = [ 0.0, 0.0, 0.0 ];

	out = [ 0.0, 0.0, 0.0 ];
	gwhere( -1, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	out = [ 0.0, 0.0, 0.0 ];
	gwhere( 0, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `condition` stride', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0,
		0, // 1
		1,
		1  // 2
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 2, 0, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 7.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `condition` stride (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0,
		0, // 1
		1,
		1  // 2
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 2, 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 1.0, 7.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0, // 1
		1, // 2
		0,
		0
	];
	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 2, 0, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 7.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0, // 1
		1, // 2
		0,
		0
	];
	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		6.0, // 0
		7.0, // 1
		8.0, // 2
		9.0,
		10.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 2, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 1.0, 7.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		0, // 0
		1, // 1
		0, // 2
		1,
		0
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 1, 0, y, 2, 0, out, 1, 0 );
	expected = [ 6.0, 2.0, 10.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		0, // 0
		1, // 1
		0, // 2
		1,
		0
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	];
	y = [
		6.0, // 0
		7.0,
		8.0, // 1
		9.0,
		10.0 // 2
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 2, 0, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 6.0, 2.0, 10.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 2, 0 );
	expected = [ 1.0, 0.0, 5.0, 0.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` stride (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 2, 0 ); // eslint-disable-line max-len
	expected = [ 1.0, 0.0, 5.0, 0.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 2
		0,
		0, // 1
		1,
		1  // 0
	];
	x = [
		1.0, // 2
		2.0, // 1
		3.0, // 0
		4.0,
		5.0
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, -2, 4, x, -1, 2, y, -1, 2, out, -1, 2 );
	expected = [ 1.0, 7.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 2
		0,
		0, // 1
		1,
		1  // 0
	];
	x = [
		1.0, // 2
		2.0, // 1
		3.0, // 0
		4.0,
		5.0
	];
	y = [
		6.0, // 2
		7.0, // 1
		8.0, // 0
		9.0,
		10.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), -2, 4, toAccessorArray( x ), -1, 2, toAccessorArray( y ), -1, 2, toAccessorArray( out ), -1, 2 ); // eslint-disable-line max-len
	expected = [ 1.0, 7.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `condition` offset', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		0,
		1,  // 0
		0,
		0,  // 1
		0,
		1   // 2
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0,
		6.0
	];
	y = [
		7.0, // 0
		8.0, // 1
		9.0, // 2
		10.0,
		11.0,
		12.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 2, 1, x, 1, 0, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 8.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `condition` offset (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		0,
		1,  // 0
		0,
		0,  // 1
		0,
		1   // 2
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0,
		6.0
	];
	y = [
		7.0, // 0
		8.0, // 1
		9.0, // 2
		10.0,
		11.0,
		12.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 2, 1, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 1.0, 8.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0, // 1
		1, // 2
		0
	];
	x = [
		0.0,
		1.0,  // 0
		0.0,
		2.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		4.0
	];
	y = [
		5.0, // 0
		6.0, // 1
		7.0, // 2
		8.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 2, 1, y, 1, 0, out, 1, 0 );
	expected = [ 1.0, 6.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` offset (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0, // 1
		1, // 2
		0
	];
	x = [
		0.0,
		1.0,  // 0
		0.0,
		2.0,  // 1
		0.0,
		3.0,  // 2
		0.0,
		4.0
	];
	y = [
		5.0, // 0
		6.0, // 1
		7.0, // 2
		8.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 2, 1, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 1.0, 6.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		0, // 0
		1, // 1
		0, // 2
		1
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0
	];
	y = [
		0.0,
		5.0, // 0
		0.0,
		6.0, // 1
		0.0,
		7.0, // 2
		0.0,
		8.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 1, 0, x, 1, 0, y, 2, 1, out, 1, 0 );
	expected = [ 5.0, 2.0, 7.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` offset (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		0, // 0
		1, // 1
		0, // 2
		1
	];
	x = [
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0
	];
	y = [
		0.0,
		5.0, // 0
		0.0,
		6.0, // 1
		0.0,
		7.0, // 2
		0.0,
		8.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 2, 1, toAccessorArray( out ), 1, 0 ); // eslint-disable-line max-len
	expected = [ 5.0, 2.0, 7.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` offset', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];

	gwhere( 3, condition, 1, 0, x, 1, 0, y, 1, 0, out, 1, 2 );
	expected = [ 0.0, 0.0, 1.0, 5.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `out` offset (accessors)', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [ 1, 0, 1 ];
	x = [ 1.0, 2.0, 3.0 ];
	y = [ 4.0, 5.0, 6.0 ];
	out = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];

	gwhere( 3, toAccessorArray( condition ), 1, 0, toAccessorArray( x ), 1, 0, toAccessorArray( y ), 1, 0, toAccessorArray( out ), 1, 2 ); // eslint-disable-line max-len
	expected = [ 0.0, 0.0, 1.0, 5.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var condition;
	var expected;
	var out;
	var x;
	var y;

	condition = [
		1, // 0
		0,
		0, // 1
		1,
		1, // 2
		0
	];
	x = [
		1.0,  // 2
		2.0,  // 1
		3.0,  // 0
		4.0,
		5.0,
		6.0
	];
	y = [
		7.0, // 0
		8.0,
		9.0, // 1
		10.0,
		11.0, // 2
		12.0
	];
	out = [ 0.0, 0.0, 0.0 ];

	gwhere( 3, condition, 2, 0, x, -1, 2, y, 2, 0, out, 1, 0 );
	expected = [ 3.0, 9.0, 1.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});
