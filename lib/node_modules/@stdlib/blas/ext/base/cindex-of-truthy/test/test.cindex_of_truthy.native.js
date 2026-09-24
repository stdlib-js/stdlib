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

var cindexOfTruthy = tryRequire( resolve( __dirname, './../lib/cindex_of_truthy.native.js' ) );
var opts = {
	'skip': ( cindexOfTruthy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof cindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		0.0,
		0.0,
		1.0,
		1.0,
		0.0,
		0.0,
		2.0,
		2.0,
		3.0,
		3.0,
		0.0,
		0.0
	]);

	// Nonnegative stride...
	actual = cindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = cindexOfTruthy( 3, x, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	// Negative stride...
	actual = cindexOfTruthy( x.length, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = cindexOfTruthy( 3, x, -2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0+0i`, `NaN+NaNi`, `NaN+0i`)', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		0.0,
		0.0,
		NaN,
		NaN,
		NaN,
		0.0,
		1.0,
		1.0
	]);

	actual = cindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Complex64Array([
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0,
		0.0
	]);

	actual = cindexOfTruthy( x.length, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', opts, function test( t ) {
	var actual;

	actual = cindexOfTruthy( 0, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 1 ); // eslint-disable-line max-len
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = cindexOfTruthy( -1, new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] ), 1 ); // eslint-disable-line max-len
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
