/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var dlastIndexOf = require( './../lib/dlast_index_of.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlastIndexOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the last index of an element which equals a provided search element', function test( t ) {
	var actual;
	var x;

	x = new Float64Array( [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ] );

	// Nonnegative stride...
	actual = dlastIndexOf( x.length, 1.0, x, 1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = dlastIndexOf( x.length, 2.0, x, 1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = dlastIndexOf( x.length, 3.0, x, 1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = dlastIndexOf( x.length, 4.0, x, 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	// Negative stride...
	actual = dlastIndexOf( x.length, 1.0, x, -1 );
	t.strictEqual( actual, 5, 'returns expected value' );

	actual = dlastIndexOf( x.length, 2.0, x, -1 );
	t.strictEqual( actual, 3, 'returns expected value' );

	actual = dlastIndexOf( x.length, 3.0, x, -1 );
	t.strictEqual( actual, 1, 'returns expected value' );

	actual = dlastIndexOf( x.length, 4.0, x, -1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided `N` parameter is less than or equal to zero', function test( t ) {
	var actual;

	actual = dlastIndexOf( 0, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	actual = dlastIndexOf( -1, 2.0, new Float64Array( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-1` if provided a search element equal to `NaN`', function test( t ) {
	var actual;

	actual = dlastIndexOf( 1, NaN, new Float64Array( [ NaN ] ), 1 );
	t.strictEqual( actual, -1, 'returns expected value' );

	t.end();
});
