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

var dlastIndexOfFalsy = tryRequire( resolve( __dirname, './../lib/ndarray.native.js' ) );
var opts = {
	'skip': ( dlastIndexOfFalsy instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlastIndexOfFalsy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the index of the last falsy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 0.0, 2.0, 0.0, 0.0, 4.0 ] );

	actual = dlastIndexOfFalsy( 6, x, 1, 0 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = dlastIndexOfFalsy( x.length-1, x, 1, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = dlastIndexOfFalsy( x.length-2, x, 1, 2 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = dlastIndexOfFalsy( 1, x, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = dlastIndexOfFalsy( x.length, x, -1, x.length-1 );
	t.strictEqual( actual, 4, 'returns expected value' );

	actual = dlastIndexOfFalsy( 3, x, -2, x.length-1 );
	t.strictEqual( actual, 2, 'returns expected value' );

	actual = dlastIndexOfFalsy( 3, x, -2, x.length-2 );
	t.strictEqual( actual, 0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an offset parameter', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 0.0, 4.0, 0.0 ] );

	actual = dlastIndexOfFalsy( 3, x, 1, 3 );
	t.strictEqual( actual, 2, 'returns expected value' );

	t.end();
});

tape( 'the function explicitly treats `NaN` values as falsy', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, NaN, 0.0 ] );

	actual = dlastIndexOfFalsy( 4, x, 1, 0 );
	t.strictEqual( actual, 3, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if unable to find a falsy element', opts, function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = dlastIndexOfFalsy( x.length, x, 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided an `N` parameter which is less than or equal to zero', opts, function test( t ) {
	var actual;

	actual = dlastIndexOfFalsy( 0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dlastIndexOfFalsy( -1, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1, 0 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
