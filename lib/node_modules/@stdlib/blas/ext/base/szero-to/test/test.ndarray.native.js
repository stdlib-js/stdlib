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

var szeroTo = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( szeroTo instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof szeroTo, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', opts, function test( t ) {
	t.strictEqual( szeroTo.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns a reference to the input array', opts, function test( t ) {
	var out;
	var x;

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = szeroTo( x.length, x, 1, 0 );

	t.strictEqual( out, x, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns the input array unchanged', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array( [ 3.0, -4.0, 1.0 ] );
	expected = new Float32Array( [ 3.0, -4.0, 1.0 ] );

	szeroTo( 0, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	szeroTo( -4, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function fills a strided array', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	]);
	expected = new Float32Array([
		0.0,
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0
	]);

	szeroTo( x.length, x, 1, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	expected = new Float32Array([
		0.0,  // 0
		-3.0,
		1.0,  // 1
		7.0,
		2.0   // 2
	]);

	szeroTo( 3, x, 2, 0 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a negative stride', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	expected = new Float32Array([
		2.0,  // 2
		-3.0,
		1.0,  // 1
		7.0,
		0.0   // 0
	]);

	szeroTo( 3, x, -2, x.length-1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var expected;
	var x;

	x = new Float32Array([
		1.0,
		2.0, // 0
		3.0, // 1
		4.0, // 2
		6.0,
		7.0
	]);
	expected = new Float32Array([
		1.0,
		0.0, // 0
		1.0, // 1
		2.0, // 2
		6.0,
		7.0
	]);

	szeroTo( 3, x, 1, 1 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});
