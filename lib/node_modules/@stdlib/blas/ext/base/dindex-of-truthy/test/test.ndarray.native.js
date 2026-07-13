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
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var dindexOfTruthy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dindexOfTruthy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dindexOfTruthy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the first truthy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 0.0, 1.0, 0.0, 2.0, 3.0, 0.0 ] );

	// Nonnegative stride...
	actual = dindexOfTruthy( x.length, x, 1, 0 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = dindexOfTruthy( x.length-1, x, 1, 1 );
	t.strictEqual( actual, 0, 'returns expected value' );

	actual = dindexOfTruthy( x.length-2, x, 1, 2 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = dindexOfTruthy( 1, x, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = dindexOfTruthy( x.length, x, -1, x.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = dindexOfTruthy( 3, x, -2, x.length-1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = dindexOfTruthy( 3, x, -2, x.length-2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function ignores falsy elements (e.g., `0`, `NaN`)', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 0.0, NaN, 5.0, 0.0 ] );

	actual = dindexOfTruthy( x.length, x, 1, 0 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a truthy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	actual = dindexOfTruthy( x.length, x, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', opts, function test( t ) {
	var actual;

	actual = dindexOfTruthy( 0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dindexOfTruthy( -1, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
