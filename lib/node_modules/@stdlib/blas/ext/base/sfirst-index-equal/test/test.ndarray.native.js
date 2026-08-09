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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array/float32' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var sfirstIndexEqual = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( sfirstIndexEqual instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sfirstIndexEqual, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 7', opts, function test( t ) {
	t.strictEqual( sfirstIndexEqual.length, 7, 'has expected arity' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a corresponding element in another array', opts, function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 1.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	// Nonnegative stride...
	actual = sfirstIndexEqual( x.length, x, 1, 0, y, 1, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 2.0, 0.0, 3.0, 0.0 ] );

	actual = sfirstIndexEqual( x.length-1, x, 1, 1, y, 1, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 3.0, 0.0 ] );

	actual = sfirstIndexEqual( x.length-2, x, 1, 2, y, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = sfirstIndexEqual( x.length-2, x, 1, 2, y, 1, 2 );
	t.strictEqual( actual, -1, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 3.0, 0.0, 0.0, 0.0 ] );

	actual = sfirstIndexEqual( 3, x, 2, 0, y, 2, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	// Negative stride...
	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 1.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = sfirstIndexEqual( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 2.0, 0.0, 0.0 ] );

	actual = sfirstIndexEqual( 3, x, -2, x.length-1, y, -2, y.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = sfirstIndexEqual( 3, x, -2, x.length-2, y, -2, y.length-2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	x = new Float32Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );
	y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	actual = sfirstIndexEqual( x.length, x, -1, x.length-1, y, -1, y.length-1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', opts, function test( t ) {
	var actual;

	actual = sfirstIndexEqual( 0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 ); // eslint-disable-line max-len
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = sfirstIndexEqual( -1, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0, new Float32Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 ); // eslint-disable-line max-len
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN`', opts, function test( t ) {
	var actual;

	actual = sfirstIndexEqual( 1, new Float32Array( [ NaN ] ), 1, 0, new Float32Array( [ NaN ] ), 1, 0 ); // eslint-disable-line max-len
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function treats -0 and +0 as equal', opts, function test( t ) {
	var actual;

	actual = sfirstIndexEqual( 1, new Float32Array( [ -0.0 ] ), 1, 0, new Float32Array( [ 0.0 ] ), 1, 0 ); // eslint-disable-line max-len
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	y = new Float32Array([
		0.0, // 0
		3.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);

	actual = sfirstIndexEqual( 3, x, 2, 0, y, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `y` stride', opts, function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0, // 1
		3.0, // 2
		4.0,
		5.0
	]);
	y = new Float32Array([
		0.0, // 0
		0.0,
		2.0, // 1
		0.0,
		0.0  // 2
	]);

	actual = sfirstIndexEqual( 3, x, 1, 0, y, 2, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports negative strides', opts, function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 2
		2.0,
		3.0, // 1
		4.0,
		5.0  // 0
	]);
	y = new Float32Array([
		0.0, // 2
		3.0, // 1
		0.0, // 0
		0.0,
		0.0
	]);

	actual = sfirstIndexEqual( 3, x, -2, 4, y, -1, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports complex access patterns', opts, function test( t ) {
	var actual;
	var x;
	var y;

	x = new Float32Array([
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0, // 2
		6.0
	]);
	y = new Float32Array([
		5.0,  // 2
		0.0,  // 1
		0.0,  // 0
		0.0,
		0.0,
		0.0
	]);

	actual = sfirstIndexEqual( 3, x, 2, 0, y, -1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});
