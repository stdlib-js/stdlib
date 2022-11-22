/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var add = require( '@stdlib/math/base/ops/add' );
var mapBy2 = require( './../lib/ndarray.js' );


// FUNCTIONS //

function accessor( values ) {
	if ( values[ 0 ] === void 0 || values[ 1 ] === void 0 ) {
		return;
	}
	values[ 0 ] *= 2.0;
	values[ 1 ] *= 2.0;
	return values;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mapBy2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 13', function test( t ) {
	t.strictEqual( mapBy2.length, 13, 'arity of 13' );
	t.end();
});

tape( 'the function applies a function to indexed strided array elements according to a callback function', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, -2.0, -2.0, -4.0, -4.0 ];

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	x = new Array( 5 ); // sparse array
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	x[ 2 ] = -3.0; // sparse array
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = z.slice();
	expected[ 2 ] = -2.0;

	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'deep equal' );

	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 2
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 2, 0, y, 1, 0, z, 1, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[0]*2.0 ),
		add( x[2]*2.0, y[1]*2.0 ),
		add( x[4]*2.0, y[2]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0,
		-2.0,
		-3.0, // 0
		-4.0, // 1
		-5.0  // 2
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 1, 2, y, 1, 0, z, 1, 0, add, accessor );

	expected = [
		add( x[2]*2.0, y[0]*2.0 ),
		add( x[3]*2.0, y[1]*2.0 ),
		add( x[4]*2.0, y[2]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0, // 0
		1.0,
		2.0, // 1
		2.0,
		3.0  // 2
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 2, 0, z, 1, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[0]*2.0 ),
		add( x[1]*2.0, y[2]*2.0 ),
		add( x[2]*2.0, y[4]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0,
		1.0,
		2.0, // 0
		2.0, // 1
		3.0  // 2
	];
	z = [
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 2, z, 1, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[2]*2.0 ),
		add( x[1]*2.0, y[3]*2.0 ),
		add( x[2]*2.0, y[4]*2.0 ),
		0.0,
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 0, z, 2, 0, add, accessor );

	expected = [
		add( x[0]*2.0, y[0]*2.0 ),
		0.0,
		add( x[1]*2.0, y[1]*2.0 ),
		0.0,
		add( x[2]*2.0, y[2]*2.0 )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 0
		-2.0, // 1
		-3.0, // 2
		-4.0,
		-5.0
	];
	y = [
		1.0, // 0
		1.0, // 1
		2.0, // 2
		2.0,
		3.0
	];
	z = [
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	];
	N = 3;

	mapBy2( N, x, 1, 0, y, 1, 0, z, 1, 2, add, accessor );

	expected = [
		0.0,
		0.0,
		add( x[0]*2.0, y[0]*2.0 ),
		add( x[1]*2.0, y[1]*2.0 ),
		add( x[2]*2.0, y[2]*2.0 )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;
	var z;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	out = mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );

	t.strictEqual( out, z, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns destination array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;

	x = [ -1.0, -2.0, -3.0, -4.0, -5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	expected = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

	mapBy2( -1, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'returns expected value' );

	mapBy2( 0, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor );
	t.deepEqual( z, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0, // 2
		-2.0,
		-3.0, // 1
		-4.0,
		-5.0  // 0
	];
	y = [
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	];
	z = [
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	];
	N = 3;

	mapBy2( N, x, -2, x.length-1, y, -1, y.length-2, z, -1, z.length-1, add, accessor ); // eslint-disable-line max-len

	expected = [
		0.0,
		0.0,
		add( x[0]*2.0, y[3]*2.0 ),
		add( x[2]*2.0, y[2]*2.0 ),
		add( x[4]*2.0, y[1]*2.0 )
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var N;

	x = [
		-1.0,
		-2.0, // 0
		-3.0,
		-4.0, // 1
		-5.0,
		-6.0  // 2
	];
	y = [
		1.0, // 2
		1.0, // 1
		2.0, // 0
		2.0,
		3.0,
		3.0
	];
	z = [
		0.0, // 2
		0.0,
		0.0, // 1
		0.0,
		0.0, // 0
		0.0
	];
	N = 3;

	mapBy2( N, x, 2, 1, y, -1, 2, z, -2, z.length-2, add, accessor );

	expected = [
		add( x[5]*2.0, y[0]*2.0 ),
		0.0,
		add( x[3]*2.0, y[1]*2.0 ),
		0.0,
		add( x[1]*2.0, y[2]*2.0 ),
		0.0
	];

	t.deepEqual( z, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports providing a callback execution context', function test( t ) {
	var ctx;
	var x;
	var y;
	var z;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 1.0, 1.0, 2.0, 2.0, 3.0 ];
	z = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	ctx = {
		'count': 0
	};
	mapBy2( x.length, x, 1, 0, y, 1, 0, z, 1, 0, add, accessor, ctx );

	t.strictEqual( ctx.count, x.length, 'returns expected value' );
	t.end();

	function accessor( values ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		values[ 0 ] *= 2.0;
		values[ 1 ] *= 2.0;
		return values;
	}
});
