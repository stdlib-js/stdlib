/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var tribonacci = require( './../lib' );


// FIXTURES //

var TRIBONACCI = require( './../lib/tribonacci.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof tribonacci, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a negative number, the function returns `NaN`', function test( t ) {
	var v;
	var i;

	t.strictEqual( isnan( tribonacci( -3.14 ) ), true, 'returns NaN' );

	for ( i = -1; i > -100; i-- ) {
		v = tribonacci( i );
		t.strictEqual( isnan( v ), true, 'returns NaN when provided ' + i );
	}
	t.end();
});

tape( 'if provided positive infinity, the function returns `NaN`', function test( t ) {
	var v = tribonacci( PINF );
	t.strictEqual( isnan( v ), true, 'returns NaN when provided +infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = tribonacci( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if provided a non-integer, the function returns `NaN`', function test( t ) {
	var v = tribonacci( 3.14 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns the nth Tribonacci number', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 64; i++ ) {
		v = tribonacci( i );
		t.strictEqual( v, TRIBONACCI[ i ], 'returns the '+i+'th Tribonacci number' );
	}
	t.end();
});

tape( 'if provided nonnegative integers greater than `63`, the function returns `NaN`', function test( t ) {
	var i;
	var v;
	for ( i = 64; i < 500; i++ ) {
		v = tribonacci( i );
		t.strictEqual( isnan( v ), true, 'returns NaN when provided ' + i );
	}
	t.end();
});
