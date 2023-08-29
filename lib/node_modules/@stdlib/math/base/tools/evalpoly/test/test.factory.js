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
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var evalpoly = factory( [ 1.0, 2.0, 3.0 ] );
	t.equal( typeof evalpoly, 'function', 'returns a function' );
	t.end();
});

tape( 'if provided an empty coefficient array, the generated `evalpoly` function always returns `0`', function test( t ) {
	var evalpoly = factory( [] );
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalpoly( i );
		t.equal( v, 0.0, 'returns 0' );
	}
	t.end();
});

tape( 'if provided only 1 coefficient, the generated `evalpoly` function always returns that coefficient', function test( t ) {
	var evalpoly = factory( [2.0] );
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalpoly( i );
		t.equal( v, 2.0, 'returns first coefficient' );
	}
	t.end();
});

tape( 'if the value at which to evaluate a polynomial is `0`, the generated `evalpoly` function returns the first coefficient', function test( t ) {
	var evalpoly = factory( [ 3.0, 2.0, 1.0 ] );
	var v;

	v = evalpoly( 0.0 );
	t.equal( v, 3.0, 'returns first coefficient' );

	t.end();
});

tape( 'the generated `evalpoly` function evaluates a polynomial', function test( t ) {
	var evalpoly;
	var v;

	evalpoly = factory( [ 4.0, 5.0 ] );
	v = evalpoly( 6.0 );
	t.equal( v, 34.0, 'returns 34' );

	evalpoly = factory( [ -4.0, -5.0 ] );
	v = evalpoly( 6.0 );
	t.equal( v, -34.0, 'returns -34' );

	evalpoly = factory( [ -19.0, 7.0, -4.0, 6.0 ] );
	v = evalpoly( 3.0 );
	t.equal( v, 128.0, 'returns 128' );

	t.end();
});

tape( 'the generated `evalpoly` function evaluates a polynomial (large number of coefficients)', function test( t ) {
	var evalpoly;
	var sum;
	var c;
	var v;
	var i;

	c = [];
	sum = 0;
	for ( i = 0; i < 1000; i++ ) {
		c.push( i );
		sum += i;
	}
	evalpoly = factory( c );

	v = evalpoly( 1.0 );
	t.equal( v, sum, 'returns expected value' );

	t.end();
});
