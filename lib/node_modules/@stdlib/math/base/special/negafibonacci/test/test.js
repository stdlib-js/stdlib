/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
var pow = require( '@stdlib/math/base/special/pow' );
var abs = require( '@stdlib/math/base/special/abs' );
var NINF = require( '@stdlib/constants/math/float64-ninf' );
var fibonacci = require( '@stdlib/math/base/special/fibonacci' );
var negafibonacci = require( './../lib' );


// FIXTURES //

var NEGAFIBONACCI = require( './../lib/negafibonacci.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof negafibonacci, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a positive number, the function returns `NaN`', function test( t ) {
	var v;
	var i;

	t.strictEqual( isnan( negafibonacci( 3.14 ) ), true, 'returns NaN' );

	for ( i = 1; i < 100; i++ ) {
		v = negafibonacci( i );
		t.strictEqual( isnan( v ), true, 'returns NaN when provided ' + i );
	}
	t.end();
});

tape( 'if provided negative infinity, the function returns `NaN`', function test( t ) {
	var v = negafibonacci( NINF );
	t.strictEqual( isnan( v ), true, 'returns NaN when provided -infinity' );
	t.end();
});

tape( 'if provided `NaN`, the function returns `NaN`', function test( t ) {
	var v = negafibonacci( NaN );
	t.strictEqual( isnan( v ), true, 'returns NaN when provided a NaN' );
	t.end();
});

tape( 'if provided a non-integer, the function returns `NaN`', function test( t ) {
	var v = negafibonacci( -3.14 );
	t.strictEqual( isnan( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns the nth negaFibonacci number', function test( t ) {
	var v;
	var i;
	for ( i = 0; i > -79; i-- ) {
		v = negafibonacci( i );
		t.strictEqual( v, NEGAFIBONACCI[ abs(i) ], 'returns the '+i+'th negaFibonacci number' );
	}
	t.end();
});

tape( 'the function returns the nth negaFibonacci number (Fibonacci relationship)', function test( t ) {
	var v;
	var f;
	var i;
	for ( i = 0; i > -79; i-- ) {
		v = negafibonacci( i );
		f = pow( -1.0, abs(i)+1 ) * fibonacci( abs(i) );
		t.strictEqual( v, f, 'returns the '+i+'th negaFibonacci number' );
	}
	t.end();
});

tape( 'if provided nonpositive integers less than `-78`, the function returns `NaN`', function test( t ) {
	var i;
	var v;
	for ( i = -79; i > -500; i-- ) {
		v = negafibonacci( i );
		t.strictEqual( isnan( v ), true, 'returns NaN when provided ' + i );
	}
	t.end();
});
