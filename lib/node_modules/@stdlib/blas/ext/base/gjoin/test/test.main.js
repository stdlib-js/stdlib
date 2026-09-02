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
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var gjoin = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gjoin, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gjoin.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function returns a string created by joining strided array elements', function test( t ) {
	var actual;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];

	// Nonnegative stride...
	actual = gjoin( x.length, ',', x, 1 );
	t.strictEqual( actual, '1,2,3,4,5,6', 'returns expected value' );

	actual = gjoin( 3, '-', x, 2 );
	t.strictEqual( actual, '1-3-5', 'returns expected value' );

	actual = gjoin( 1, '|', x, 1 );
	t.strictEqual( actual, '1', 'returns expected value' );

	// Negative stride...
	actual = gjoin( x.length, ',', x, -1 );
	t.strictEqual( actual, '6,5,4,3,2,1', 'returns expected value' );

	actual = gjoin( 3, '-', x, -2 );
	t.strictEqual( actual, '5-3-1', 'returns expected value' );

	// Null and undefined values...
	x = [ 1, null, 3, undefined, 5 ];
	actual = gjoin( x.length, ',', x, 1 );
	t.strictEqual( actual, '1,,3,,5', 'returns expected value' );

	t.end();
});

tape( 'the function returns a string created by joining strided array elements (accessors)', function test( t ) {
	var actual;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	// Nonnegative stride...
	actual = gjoin( x.length, ',', x, 1 );
	t.strictEqual( actual, '1,2,3,4,5,6', 'returns expected value' );

	actual = gjoin( 3, '-', x, 2 );
	t.strictEqual( actual, '1-3-5', 'returns expected value' );

	actual = gjoin( 1, '|', x, 1 );
	t.strictEqual( actual, '1', 'returns expected value' );

	// Negative stride...
	actual = gjoin( x.length, ',', x, -1 );
	t.strictEqual( actual, '6,5,4,3,2,1', 'returns expected value' );

	actual = gjoin( 3, '-', x, -2 );
	t.strictEqual( actual, '5-3-1', 'returns expected value' );

	// Null and undefined values...
	x = toAccessorArray( [ 1, null, 3, undefined, 5 ] );
	actual = gjoin( x.length, ',', x, 1 );
	t.strictEqual( actual, '1,,3,,5', 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty string if provided an `N` parameter less than or equal to zero', function test( t ) {
	var actual;

	actual = gjoin( 0, ',', [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	actual = gjoin( -1, ',', [ 1.0, 2.0, 3.0 ], 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	t.end();
});

tape( 'the function returns an empty string if provided an `N` parameter less than or equal to zero (accessors)', function test( t ) {
	var actual;

	actual = gjoin( 0, ',', toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	actual = gjoin( -1, ',', toAccessorArray( [ 1.0, 2.0, 3.0 ] ), 1 );
	t.strictEqual( actual, '', 'returns expected value' );

	t.end();
});
