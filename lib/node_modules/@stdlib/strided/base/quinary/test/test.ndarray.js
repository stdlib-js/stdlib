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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array/float64' );
var add = require( '@stdlib/number/float64/base/add5' );
var quinary = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quinary, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 5', function test( t ) {
	t.strictEqual( quinary.length, 5, 'arity of 5' );
	t.end();
});

tape( 'the function applies a quinary callback to indexed strided array elements', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	v = new Float64Array( x.length );

	quinary( [ x, y, z, w, u, v ], [ x.length ], [ 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array( [ 5.0, 10.0, 15.0, 20.0, 25.0 ] );

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 2, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 2 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		x[ 4 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
	var N;

	x = new Float64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 1 ], [ 2, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 2 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 3 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		x[ 4 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 2, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 2 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		x[ 2 ] + y[ 4 ] + z[ 2 ] + w[ 2 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
	var N;

	x = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 1 ], [ 0, 2, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 2 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 3 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		x[ 2 ] + y[ 4 ] + z[ 2 ] + w[ 2 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 2, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 2 ] + w[ 1 ] + u[ 1 ],
		x[ 2 ] + y[ 2 ] + z[ 4 ] + w[ 2 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `z` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	w = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 1 ], [ 0, 0, 2, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 2 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 3 ] + w[ 1 ] + u[ 1 ],
		x[ 2 ] + y[ 2 ] + z[ 4 ] + w[ 2 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `w` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 2, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 2 ] + u[ 1 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 4 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `w` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 2, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 2 ] + u[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 3 ] + u[ 1 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 4 ] + u[ 2 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `u` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 2, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 2 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 4 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `u` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 1
		5.0  // 2
	]);
	v = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 2, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 2 ],
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 3 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 4 ],
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `v` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 2 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = new Float64Array([
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		0.0,
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		0.0,
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 2 ]
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `v` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	u = new Float64Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	v = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 2 ], add );

	expected = new Float64Array([
		0.0,
		0.0,
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 2 ]
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'if provided a shape whose only element is less than or equal to `0`, the function leaves the output array unchanged', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	v = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	quinary( [ x, y, z, w, u, v ], [ -1 ], [ 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );
	t.deepEqual( v, expected, 'returns expected value' );

	quinary( [ x, y, z, w, u, v ], [ 0 ], [ 1, 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );
	t.deepEqual( v, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	u = new Float64Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	v = new Float64Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ -2, -2, -2, -2, -2, -1 ], [ x.length-1, y.length-1, z.length-1, w.length-1, u.length-1, v.length-2 ], add );

	expected = new Float64Array([
		0.0,
		x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 2 ],
		x[ 4 ] + y[ 4 ] + z[ 4 ] + w[ 4 ] + u[ 4 ],
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
	var N;

	x = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	y = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	z = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	w = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	u = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	v = new Float64Array([
		0.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 2, 2, 2, 2, 2, -1 ], [ 1, 1, 1, 1, 1, 2 ], add );

	expected = new Float64Array([
		x[ 5 ] + y[ 5 ] + z[ 5 ] + w[ 5 ] + u[ 5 ],
		x[ 3 ] + y[ 3 ] + z[ 3 ] + w[ 3 ] + u[ 3 ],
		x[ 1 ] + y[ 1 ] + z[ 1 ] + w[ 1 ] + u[ 1 ],
		0.0,
		0.0,
		0.0
	]);

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var z;
	var w;
	var u;
	var v;
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
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	u = {
		'length': 5,
		'0': 1.0, // 0
		'1': 2.0,
		'2': 3.0, // 1
		'3': 4.0,
		'4': 5.0  // 2
	};
	v = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	quinary( [ x, y, z, w, u, v ], [ N ], [ 2, 2, 2, 2, 2, 1 ], [ 0, 0, 0, 0, 0, 0 ], add );

	expected = {
		'length': 5,
		'0': x[ 0 ] + y[ 0 ] + z[ 0 ] + w[ 0 ] + u[ 0 ],
		'1': x[ 2 ] + y[ 2 ] + z[ 2 ] + w[ 2 ] + u[ 2 ],
		'2': x[ 4 ] + y[ 4 ] + z[ 4 ] + w[ 4 ] + u[ 4 ],
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( v, expected, 'deep equal' );
	t.end();
});
