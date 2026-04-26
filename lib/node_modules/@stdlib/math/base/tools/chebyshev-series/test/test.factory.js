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
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var f = factory( [ 1.0, 2.0, 3.0 ] );
	t.strictEqual( typeof f, 'function', 'returns expected value' );
	t.end();
});

tape( 'if provided an empty coefficient array, the function returns a function which always returns `0.0`', function test( t ) {
	var f;
	var v;
	var i;

	f = factory( [] );
	for ( i = 0; i < 100; i++ ) {
		v = f( i );
		t.strictEqual( v, 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided only one coefficient, the function returns a function which always returns the coefficient divided by two', function test( t ) {
	var f;
	var v;
	var i;

	f = factory( [ 2.0 ] );
	for ( i = 0; i < 100; i++ ) {
		v = f( i );
		t.strictEqual( v, 1.0, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns a function which evaluates a Chebyshev series', function test( t ) {
	var f;
	var v;

	f = factory( [ 0.5, 1.0 ] );
	v = f( 1.0 );
	t.strictEqual( v, 0.75, 'returns expected value' );

	v = f( 2.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	f = factory( [ 1.0, 0.0, 0.0 ] );
	v = f( 2.0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	v = f( 0.0 );
	t.strictEqual( v, -1.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which evaluates a Chebyshev series (large number of coefficients)', function test( t ) {
	var f;
	var c;
	var v;
	var i;

	c = [];
	for ( i = 0; i < 1000; i++ ) {
		c.push( 0.0 );
	}
	c[ 0 ] = 1.0; // Coefficient of highest degree (T_999)
	f = factory( c );

	// Chebyshev polynomials of the first kind always satisfy T_n(1) = 1
	v = f( 2.0 ); // T_999(2/2) = T_999(1) = 1
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});
