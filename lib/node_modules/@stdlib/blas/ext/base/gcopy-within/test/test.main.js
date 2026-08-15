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
var Float64Array = require( '@stdlib/array/float64' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gcopyWithin = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gcopyWithin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 8', function test( t ) {
	t.strictEqual( gcopyWithin.length, 8, 'returns expected value' );
	t.end();
});

tape( 'the function copies values within the provided strided array', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ];

	actual = gcopyWithin( 6, 3, 1, 4, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 1.0, 2.0, 3.0 ];

	actual = gcopyWithin( 6, 3, 0, 3, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 1.0, 2.0, 3.0 ];

	actual = gcopyWithin( 5, 2, 0, 5, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function copies values within the provided strided array (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ];

	gcopyWithin( 6, 3, 1, 4, toAccessorArray( x ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 1.0, 2.0, 3.0 ];

	gcopyWithin( 5, 2, 0, 5, toAccessorArray( x ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `target` parameter is greater than or equal to the `N` parameter, the function returns the strided array unchanged', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	actual = gcopyWithin( 6, 6, 0, 3, x, 1, w, 1 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	actual = gcopyWithin( 6, 10, 0, 3, x, 1, w, 1 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	actual = gcopyWithin( 4, 5, 0, 3, x, 1, w, 1 );
	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `target` parameter is greater than or equal to the `N` parameter, the function returns the strided array unchanged (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	gcopyWithin( 6, 6, 0, 3, toAccessorArray( x ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcopyWithin( 6, 10, 0, 3, toAccessorArray( x ), 1, toAccessorArray( w ), 1 ); // eslint-disable-line max-len
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `N` parameter is less than or equal to `0`, the function returns the strided array unchanged', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	actual = gcopyWithin( 0, 3, 1, 4, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	actual = gcopyWithin( -1, 3, 1, 4, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `N` parameter is less than or equal to `0`, the function returns the strided array unchanged (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	gcopyWithin( 0, 3, 1, 4, toAccessorArray( x ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcopyWithin( -1, 3, 1, 4, toAccessorArray( x ), 1, toAccessorArray( w ), 1 ); // eslint-disable-line max-len
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided `start` parameter is greater than or equal to the `end` parameter, the function returns the strided array unchanged', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	actual = gcopyWithin( 6, 0, 3, 1, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	actual = gcopyWithin( 6, 0, 2, 2, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided `start` parameter is greater than or equal to the `end` parameter, the function returns the strided array unchanged (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	gcopyWithin( 6, 0, 3, 1, toAccessorArray( x ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gcopyWithin( 6, 0, 2, 2, toAccessorArray( x ), 1, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided `end` parameter is greater than the number of indexed elements, the function copies elements up to the last indexed element', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 3.0, 4.0, 5.0, 4.0, 5.0 ];

	actual = gcopyWithin( 5, 0, 2, 10, x, 1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided `end` parameter is greater than the number of indexed elements, the function copies elements up to the last indexed element (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 3.0, 4.0, 5.0, 4.0, 5.0 ];

	gcopyWithin( 5, 0, 2, 10, toAccessorArray( x ), 1, toAccessorArray( w ), 1 ); // eslint-disable-line max-len
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 5.0, 2.0, 7.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];

	actual = gcopyWithin( 4, 0, 2, 4, x, 2, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` stride parameter (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 5.0, 2.0, 7.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];

	gcopyWithin( 4, 0, 2, 4, toAccessorArray( x ), 2, toAccessorArray( w ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing an `x` negative stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ];

	actual = gcopyWithin( 3, 0, 1, 3, x, -1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 7.0, 8.0 ];

	actual = gcopyWithin( 4, 0, 2, 4, x, -1, w, 1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing an `x` negative stride parameter (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ];

	gcopyWithin( 3, 0, 1, 3, toAccessorArray( x ), -1, toAccessorArray( w ), 1 ); // eslint-disable-line max-len
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 1.0, 2.0, 5.0, 6.0, 7.0, 8.0 ];

	gcopyWithin( 4, 0, 2, 4, toAccessorArray( x ), -1, toAccessorArray( w ), 1 ); // eslint-disable-line max-len
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a `workspace` stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ];

	actual = gcopyWithin( 3, 1, 0, 2, x, 1, w, 2 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` stride parameter (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 1.0, 2.0, 4.0, 5.0, 6.0 ];

	gcopyWithin( 3, 1, 0, 2, toAccessorArray( x ), 1, toAccessorArray( w ), 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` negative stride parameter', function test( t ) {
	var expected;
	var actual;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ];

	actual = gcopyWithin( 6, 3, 1, 4, x, 1, w, -1 );

	t.strictEqual( actual, x, 'returns expected value' );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a `workspace` negative stride parameter (accessors)', function test( t ) {
	var expected;
	var x;
	var w;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
	w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];
	expected = [ 1.0, 2.0, 3.0, 2.0, 3.0, 4.0 ];

	gcopyWithin( 6, 3, 1, 4, toAccessorArray( x ), 1, toAccessorArray( w ), -1 ); // eslint-disable-line max-len
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;
	var w;

	// Initial array...
	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		5.0, // 3
		6.0, // 4
		7.0, // 5
		8.0
	]);

	// Create offset view...
	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // begin at 2nd element

	// Create a workspace array...
	w = new Float64Array( 6 );

	gcopyWithin( 6, 0, 3, 6, x1, 1, w, 1 );

	expected = new Float64Array( [ 1.0, 5.0, 6.0, 7.0, 5.0, 6.0, 7.0, 8.0 ] );

	t.deepEqual( x0, expected, 'returns expected value' );
	t.end();
});
