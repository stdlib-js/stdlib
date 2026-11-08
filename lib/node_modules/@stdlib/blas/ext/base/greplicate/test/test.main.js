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
var greplicate = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof greplicate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( greplicate.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function replicates each strided array element', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	greplicate( x.length, 2, x, 1, out, 1 );
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	greplicate( x.length, 3, x, 1, out, 1 );
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (k=1)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0 ];

	greplicate( x.length, 1, x, 1, out, 1 );
	expected = [ 1.0, 2.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (N=1)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 5.0 ];
	out = [ 0.0, 0.0, 0.0 ];

	greplicate( 1, 3, x, 1, out, 1 );
	expected = [ 5.0, 5.0, 5.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function replicates each strided array element (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	greplicate( x.length, 2, toAccessorArray( x ), 1, toAccessorArray( out ), 1 );
	expected = [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	greplicate( x.length, 3, toAccessorArray( x ), 1, toAccessorArray( out ), 1 );
	expected = [ 1.0, 1.0, 1.0, 2.0, 2.0, 2.0, 3.0, 3.0, 3.0, 4.0, 4.0, 4.0 ];
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the output array', function test( t ) {
	var out;
	var x;
	var v;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

	v = greplicate( x.length, 2, x, 1, out, 1 );

	t.strictEqual( v, out, 'same reference' );
	t.end();
});

tape( 'the function returns a reference to the output array (accessors)', function test( t ) {
	var out;
	var x;
	var v;

	x = toAccessorArray( [ 1.0, 2.0, 3.0 ] );
	out = toAccessorArray( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	v = greplicate( x.length, 2, x, 1, out, 1 );

	t.strictEqual( v, out, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ];

	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ];

	greplicate( -1, 2, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	greplicate( 0, 2, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `k` parameter less than or equal to `0`, the function returns the output array unchanged', function test( t ) {
	var expected;
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0 ];
	out = [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ];

	expected = [ 6.0, 7.0, 8.0, 9.0, 10.0, 11.0 ];

	greplicate( x.length, -1, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	greplicate( x.length, 0, x, 1, out, 1 );
	t.deepEqual( out, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	out = [
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	];

	greplicate( 3, 2, x, 2, out, 1 );

	expected = [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an `x` stride (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	out = [
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	];

	greplicate( 3, 2, toAccessorArray( x ), 2, toAccessorArray( out ), 1 );

	expected = [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output stride', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	out = [
		0.0, // 0
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 2
		0.0
	];

	greplicate( 3, 2, x, 1, out, 2 );

	expected = [ 1.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 3.0, 0.0, 3.0, 0.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an output stride (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		2.0, // 1
		3.0  // 2
	];
	out = [
		0.0, // 0
		0.0,
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0, // 1
		0.0,
		0.0, // 2
		0.0,
		0.0, // 2
		0.0
	];

	greplicate( 3, 2, toAccessorArray( x ), 1, toAccessorArray( out ), 2 );

	expected = [ 1.0, 0.0, 1.0, 0.0, 2.0, 0.0, 2.0, 0.0, 3.0, 0.0, 3.0, 0.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	out = [
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	];

	greplicate( 3, 2, x, -2, out, -1 );

	expected = [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports negative strides (accessors)', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	];
	out = [
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	];

	greplicate( 3, 2, toAccessorArray( x ), -2, toAccessorArray( out ), -1 );

	expected = [ 1.0, 1.0, 3.0, 3.0, 5.0, 5.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var out;
	var x;

	x = [
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	];
	out = [
		0.0, // 2
		0.0, // 2
		0.0, // 1
		0.0, // 1
		0.0, // 0
		0.0  // 0
	];

	greplicate( 3, 2, x, 2, out, -1 );

	expected = [ 5.0, 5.0, 3.0, 3.0, 1.0, 1.0 ];

	t.deepEqual( out, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var out0;
	var out1;
	var x0;
	var x1;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	out0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 0
		0.0, // 1
		0.0, // 1
		0.0, // 2
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	out1 = new Float64Array( out0.buffer, out0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	greplicate( 3, 2, x1, 2, out1, 1 );
	expected = new Float64Array( [ 0.0, 0.0, 0.0, 2.0, 2.0, 4.0, 4.0, 6.0, 6.0 ] );

	t.deepEqual( out0, expected, 'returns expected value' );
	t.end();
});
