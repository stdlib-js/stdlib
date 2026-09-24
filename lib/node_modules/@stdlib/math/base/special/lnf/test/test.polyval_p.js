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
var isAlmostSameValue = require( '@stdlib/number/float32/base/assert/is-almost-same-value' );
var float64ToFloat32 = require( '@stdlib/number/float64/base/to-float32' );
var polyval = require( './../lib/polyval_p.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof polyval, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates a polynomial for x = 0', function test( t ) {
	var v = polyval( 0.0 );
	t.strictEqual( v, 0.40000972152, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a polynomial for x = -0', function test( t ) {
	var v = polyval( -0.0 );
	t.strictEqual( v, 0.40000972152, 'returns expected value' );
	t.end();
});

tape( 'the function evaluates a polynomial for positive values', function test( t ) {
	var expected;
	var v;
	var x;

	x = 1.0;
	expected = float64ToFloat32( 0.40000972152 + (x * 0.24279078841) );
	v = polyval( x );
	t.strictEqual( isAlmostSameValue( v, expected, 1 ), true, 'returns expected value' );

	x = 0.5;
	expected = float64ToFloat32( 0.40000972152 + (x * 0.24279078841) );
	v = polyval( x );
	t.strictEqual( isAlmostSameValue( v, expected, 1 ), true, 'returns expected value' );

	x = 0.1;
	expected = float64ToFloat32( 0.40000972152 + (x * 0.24279078841) );
	v = polyval( x );
	t.strictEqual( isAlmostSameValue( v, expected, 1 ), true, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates a polynomial for negative values', function test( t ) {
	var expected;
	var v;
	var x;

	x = -1.0;
	expected = float64ToFloat32( 0.40000972152 + (x * 0.24279078841) );
	v = polyval( x );
	t.strictEqual( isAlmostSameValue( v, expected, 1 ), true, 'returns expected value' );

	x = -0.5;
	expected = float64ToFloat32( 0.40000972152 + (x * 0.24279078841) );
	v = polyval( x );
	t.strictEqual( isAlmostSameValue( v, expected, 1 ), true, 'returns expected value' );

	x = -0.1;
	expected = float64ToFloat32( 0.40000972152 + (x * 0.24279078841) );
	v = polyval( x );
	t.strictEqual( isAlmostSameValue( v, expected, 1 ), true, 'returns expected value' );

	t.end();
});
