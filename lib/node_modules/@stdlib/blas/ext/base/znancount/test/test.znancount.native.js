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
var Complex128Array = require( '@stdlib/array/complex128' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var znancount = tryRequire( resolve( __dirname, './../lib/znancount.native.js' ) );
var opts = {
	'skip': ( znancount instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof znancount, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 3', opts, function test( t ) {
	t.strictEqual( znancount.length, 3, 'has expected arity' );
	t.end();
});

tape( 'the function counts the number of non-NaN elements in a strided array', opts, function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, 2.0, NaN, NaN, 3.0, 4.0 ] );
	v = znancount( 3, x, 1 );
	t.strictEqual( v, 2, 'returns expected value' );

	x = new Complex128Array( [ NaN, NaN, 1.0, 2.0 ] );
	v = znancount( 2, x, 1 );
	t.strictEqual( v, 1, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0`', opts, function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 1.0 ] );

	v = znancount( 0, x, 1 );
	t.strictEqual( v, 0, 'returns expected value' );

	v = znancount( -1, x, 1 );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function counts the first element', opts, function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ NaN, NaN, -4.0, 5.0, 3.0, 1.0 ] );

	v = znancount( 1, x, 1 );
	t.strictEqual( v, 0, 'returns expected value' );

	x.set( [ 1.0, 2.0 ], 0 );
	v = znancount( 1, x, 1 );
	t.strictEqual( v, 1, 'returns expected value' );
	t.end();
});

tape( 'the function supports a `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Complex128Array([
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		2.0,  // 1
		-7.0, // 1
		0.0,
		0.0,
		-2.0, // 2
		3.0,  // 2
		0.0,
		0.0,
		4.0,  // 3
		2.0,  // 3
		0.0,
		0.0,
		NaN,  // 4
		NaN   // 4
	]);

	v = znancount( 5, x, 2 );
	t.strictEqual( v, 4, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', opts, function test( t ) {
	var x;
	var v;

	x = new Complex128Array([
		NaN,  // 4
		NaN,  // 4
		0.0,
		0.0,
		1.0,  // 3
		2.0,  // 3
		0.0,
		0.0,
		2.0,  // 2
		-7.0, // 2
		0.0,
		0.0,
		-2.0, // 1
		3.0,  // 1
		0.0,
		0.0,
		4.0,  // 0
		2.0   // 0
	]);

	v = znancount( 5, x, -2 );
	t.strictEqual( v, 4, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function counts repeated indexed elements', opts, function test( t ) {
	var x;
	var v;

	x = new Complex128Array( [ 1.0, -2.0, -4.0, 5.0, 3.0, 1.0 ] );

	v = znancount( 3, x, 0 );
	t.strictEqual( v, 3, 'returns expected value' );

	x.set( [ NaN, -2.0 ], 0 );
	v = znancount( 3, x, 0 );
	t.strictEqual( v, 0, 'returns expected value' );

	x.set( [ 1.0, NaN ], 0 );
	v = znancount( 3, x, 0 );
	t.strictEqual( v, 0, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var x0;
	var x1;
	var v;

	x0 = new Complex128Array([
		0.0,
		0.0,
		1.0,  // 0
		2.0,  // 0
		0.0,
		0.0,
		2.0,  // 1
		-7.0, // 1
		0.0,
		0.0,
		-2.0, // 2
		3.0,  // 2
		0.0,
		0.0,
		4.0,  // 3
		2.0,  // 3
		0.0,
		0.0,
		NaN,  // 4
		NaN   // 4
	]);

	x1 = new Complex128Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

	v = znancount( 5, x1, 2 );
	t.strictEqual( v, 4, 'returns expected value' );

	t.end();
});
