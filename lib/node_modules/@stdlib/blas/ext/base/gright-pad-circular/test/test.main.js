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
var Float64Array = require( '@stdlib/array/float64' );
var grightPadCircular = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof grightPadCircular, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( grightPadCircular.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function appends elements to a strided array by circularly repeating existing elements', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	grightPadCircular( x.length, 6, x, 1, y, 1 );
	expected = [ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	grightPadCircular( x.length, 2, x, 1, y, 1 );
	expected = [ 1.0, 2.0, 3.0, 1.0, 2.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	grightPadCircular( x.length, 4, x, 1, y, 1 );
	expected = [ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function appends elements to a strided array by circularly repeating existing elements (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	grightPadCircular( x.length, 6, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	expected = [ 1.0, 2.0, 3.0, 4.0, 1.0, 2.0, 3.0, 4.0, 1.0, 2.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	grightPadCircular( x.length, 2, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	expected = [ 1.0, 2.0, 3.0, 1.0, 2.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	grightPadCircular( x.length, 4, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	expected = [ 1.0, 2.0, 1.0, 2.0, 1.0, 2.0 ];
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var x;
	var y;
	var v;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	v = grightPadCircular( x.length, 2, x, 1, y, 1 );

	t.strictEqual( v, y, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the output array (accessors)', function test( t ) {
	var x;
	var y;
	var v;

	x = toAccessorArray( [ 1.0, 2.0, 3.0 ] );
	y = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	v = grightPadCircular( x.length, 2, x, 1, y, 1 );

	t.strictEqual( v, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0 ];

	grightPadCircular( -1, 2, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	grightPadCircular( 0, 2, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than `0`, the function copies indexed elements in `x` to `y` without padding', function test( t ) {
	var expected;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0 ];
	y = [ 6.0, 7.0, 8.0 ];

	expected = [ 1.0, 2.0, 3.0 ];

	grightPadCircular( x.length, -1, x, 1, y, 1 );
	t.deepEqual( y, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0  // 1
	];

	grightPadCircular( 3, 2, x, 2, y, 1 );

	expected = [ 1.0, 3.0, 5.0, 1.0, 3.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0  // 1
	];

	grightPadCircular( 3, 2, toAccessorArray( x ), 2, toAccessorArray( y ), 1 );

	expected = [ 1.0, 3.0, 5.0, 1.0, 3.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0
	];

	grightPadCircular( 3, 2, x, 1, y, 2 );

	expected = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 1.0, 0.0, 2.0, 0.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `y` stride (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	y = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0
	];

	grightPadCircular( 3, 2, toAccessorArray( x ), 1, toAccessorArray( y ), 2 );

	expected = [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0, 1.0, 0.0, 2.0, 0.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];

	grightPadCircular( 3, 2, x, -2, y, -1 );

	expected = [ 3.0, 5.0, 1.0, 3.0, 5.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	y = [
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];

	grightPadCircular( 3, 2, toAccessorArray( x ), -2, toAccessorArray( y ), -1 );

	expected = [ 3.0, 5.0, 1.0, 3.0, 5.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	y = [
		0.0, // 1
		0.0, // 0
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];

	grightPadCircular( 3, 2, x, 2, y, -1 );

	expected = [ 3.0, 1.0, 5.0, 3.0, 1.0 ];

	t.deepEqual( y, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;
	var y0;
	var y1;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y0 = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0, // 0
		0.0  // 1
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*2 ); // begin at 3rd element

	grightPadCircular( 3, 2, x1, 2, y1, 1 );
	expected = new Float64Array( [ 0.0, 0.0, 2.0, 4.0, 6.0, 2.0, 4.0 ] );

	t.deepEqual( y0, expected, 'returns expected value' );
	t.end();
});
