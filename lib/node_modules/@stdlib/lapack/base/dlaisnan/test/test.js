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

var tape = require( 'tape' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var dlaisnan = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dlaisnan, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 2', function test( t ) {
	t.strictEqual( dlaisnan.length, 2, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` when either argument is NaN', function test( t ) {
	var bool;

	bool = dlaisnan( NaN, NaN );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( NaN, 5.0 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( 5.0, NaN );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( NaN, 0.0 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( 0.0, NaN );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( NaN, PINF );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( NINF, NaN );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `false` when both arguments are equal non-NaN values', function test( t ) {
	var bool;

	bool = dlaisnan( 5.0, 5.0 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = dlaisnan( 0.0, 0.0 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = dlaisnan( -0.0, -0.0 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = dlaisnan( -0.0, 0.0 );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = dlaisnan( PINF, PINF );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = dlaisnan( NINF, NINF );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = dlaisnan( -3.14, -3.14 );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` when both arguments are unequal non-NaN values', function test( t ) {
	var bool;

	bool = dlaisnan( 1.0, 2.0 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( -1.0, 1.0 );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( PINF, NINF );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = dlaisnan( 0.0, 1.0 );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns expected values when passed the same variable as both arguments', function test( t ) {
	var bool;
	var x;

	x = NaN;
	bool = dlaisnan( x, x );
	t.strictEqual( bool, true, 'returns expected value' );

	x = 5.0;
	bool = dlaisnan( x, x );
	t.strictEqual( bool, false, 'returns expected value' );

	x = 0.0;
	bool = dlaisnan( x, x );
	t.strictEqual( bool, false, 'returns expected value' );

	x = -0.0;
	bool = dlaisnan( x, x );
	t.strictEqual( bool, false, 'returns expected value' );

	x = PINF;
	bool = dlaisnan( x, x );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});
