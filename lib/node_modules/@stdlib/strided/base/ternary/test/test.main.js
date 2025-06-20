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
var floor = require( '@stdlib/math/base/special/floor' );
var Float64Array = require( '@stdlib/array/float64' );
var add = require( '@stdlib/number/float64/base/add3' );
var ternary = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ternary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( ternary.length, 4, 'arity of 4' );
	t.end();
});

tape( 'the function applies a ternary callback to indexed strided array elements', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float64Array( x.length );

	ternary( [ x, y, z, w ], [ x.length ], [ 1, 1, 1, 1 ], add );

	expected = new Float64Array( [ 3.0, 6.0, 9.0, 12.0, 15.0 ] );

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	z = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	w = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ 2, 1, 1, 1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ],
		x[ 2 ] + y[ 1 ] + z[ 1 ],
		x[ 4 ] + y[ 2 ] + z[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	z = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	w = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ 1, 2, 1, 1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ],
		x[ 1 ] + y[ 2 ] + z[ 1 ],
		x[ 2 ] + y[ 4 ] + z[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	z = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	w = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ 1, 1, 2, 1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 2 ],
		x[ 2 ] + y[ 2 ] + z[ 4 ],
		0.0,
		0.0
	]);

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	z = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	w = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ 1, 1, 1, 2 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ],
		0.0,
		x[ 1 ] + y[ 1 ] + z[ 1 ],
		0.0,
		x[ 2 ] + y[ 2 ] + z[ 2 ]
	]);

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function leaves the output array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	ternary( [ x, y, z, w ], [ -1 ], [ 1, 1, 1, 1 ], add );
	t.deepEqual( w, expected, 'returns expected value' );

	ternary( [ x, y, z, w ], [ 0 ], [ 1, 1, 1, 1 ], add );
	t.deepEqual( w, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	z = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	w = new Float64Array([
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ -2, -2, -2, -1 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ],
		x[ 4 ] + y[ 4 ] + z[ 4 ],
		0.0,
		0.0
	]);

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	z = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	w = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ 2, 2, 2, -1 ], add );

	expected = new Float64Array([
		x[ 4 ] + y[ 4 ] + z[ 4 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ],
		x[ 0 ] + y[ 0 ] + z[ 0 ],
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var y0;
	var z0;
	var w0;
	var x1;
	var y1;
	var z1;
	var w1;
	var N;

	// Initial arrays...
	x0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	y0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	z0 = new Float64Array([
		1.0,
		2.0, // 2
		3.0,
		4.0, // 1
		5.0,
		6.0  // 0
	]);
	w0 = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);

	// Create offset views...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element
	w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*3 ); // begin at the 4th element

	N = floor( x0.length / 2 );

	ternary( [ x1, y1, z1, w1 ], [ N ], [ -2, -2, -2, 1 ], add );
	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		x0[ 5 ] + y0[ 5 ] + z0[ 5 ],
		x0[ 3 ] + y0[ 3 ] + z0[ 3 ],
		x0[ 1 ] + y0[ 1 ] + z0[ 1 ]
	]);

	t.deepEqual( w0, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var N;

	x = {
		'length': 5,
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	y = {
		'length': 5,
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	z = {
		'length': 5,
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	w = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	ternary( [ x, y, z, w ], [ N ], [ 2, 2, 2, 1 ], add );

	expected = {
		'length': 5,
		'0': x[ 0 ] + y[ 0 ] + z[ 0 ],
		'1': x[ 2 ] + y[ 2 ] + z[ 2 ],
		'2': x[ 4 ] + y[ 4 ] + z[ 4 ],
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( w, expected, 'deep equal' );
	t.end();
});
