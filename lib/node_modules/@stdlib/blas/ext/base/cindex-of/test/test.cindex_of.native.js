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
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cindexOf = tryRequire( resolve( __dirname, './../lib/cindex_of.native.js' ) );
var opts = {
	'skip': ( cindexOf instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cindexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the first index of an element which equals a provided search element', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		1.0,
		2.0,
		3.0,
		4.0,
		3.0,
		4.0,
		5.0,
		6.0,
		5.0,
		6.0
	]);

	actual = cindexOf( x.length, new Complex64( 1.0, 2.0 ), x, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if a provided `N` parameter is less than or equal to zero', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0
	]);

	actual = cindexOf( 0, new Complex64( 3.0, 4.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = cindexOf( -1, new Complex64( 3.0, 4.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a stride length equal to zero', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		3.0,
		4.0,
		1.0,
		2.0,
		5.0,
		6.0
	]);

	actual = cindexOf( x.length, new Complex64( 3.0, 4.0 ), x, 0 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = cindexOf( x.length, new Complex64( 1.0, 2.0 ), x, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element having a `NaN` component', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array( [ NaN, NaN ] );

	actual = cindexOf( 1, new Complex64( NaN, NaN ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = cindexOf( 1, new Complex64( NaN, 0.0 ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = cindexOf( 1, new Complex64( 0.0, NaN ), x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `x` stride', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0, // 0
		2.0, // 0
		3.0,
		4.0,
		5.0, // 1
		6.0, // 1
		7.0,
		8.0,
		9.0, // 2
		10.0 // 2
	]);

	actual = cindexOf( 3, new Complex64( 5.0, 6.0 ), x, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});

tape( 'the function supports a negative `x` stride', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0, // 2
		2.0, // 2
		3.0,
		4.0,
		5.0, // 1
		6.0, // 1
		7.0,
		8.0,
		9.0, // 0
		10.0 // 0
	]);

	actual = cindexOf( 3, new Complex64( 9.0, 10.0 ), x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', opts, function test( t ) {
	var actual;
	var x0;
	var x1;

	x0 = new Complex64Array([
		1.0,
		2.0,
		3.0, // 0
		4.0, // 0
		5.0,
		6.0,
		7.0, // 1
		8.0  // 1
	]);

	x1 = new Complex64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	actual = cindexOf( 2, new Complex64( 7.0, 8.0 ), x1, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	t.end();
});
