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
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var cindexOfFalsy = tryRequire( resolve( __dirname, './../lib/cindex_of_falsy.native.js' ) );
var opts = {
	'skip': ( cindexOfFalsy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cindexOfFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first falsy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		1.0,
		0.0,
		0.0,
		1.0,
		1.0,
		2.0,
		2.0,
		0.0,
		0.0,
		1.0,
		1.0
	]);

	// Nonnegative stride...
	actual = cindexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = cindexOfFalsy( 3, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = cindexOfFalsy( x.length, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = cindexOfFalsy( 3, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function ignores truthy elements (e.g., `1+1i`, `0+1i`, `1+0i`)', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		1.0,
		0.0,
		1.0,
		1.0,
		0.0,
		NaN,
		0.0
	]);

	actual = cindexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		1.0,
		2.0,
		3.0,
		4.0,
		5.0,
		6.0,
		7.0,
		8.0
	]);

	actual = cindexOfFalsy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		0.0,
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	]);

	actual = cindexOfFalsy( 0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = cindexOfFalsy( -1, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
