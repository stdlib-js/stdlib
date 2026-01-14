/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var Float32Array = require( '@stdlib/array/float32' );
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

tape( 'if provided an empty coefficient array, the function returns a function which always returns `0`', function test( t ) {
	var f;
	var v;
	var i;

	f = factory( new Float32Array( [] ) );
	for ( i = 0; i < 100; i++ ) {
		v = f( i );
		t.strictEqual( v, 0.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided only 1 coefficient, the function returns a function which always returns that coefficient', function test( t ) {
	var f;
	var v;
	var i;

	f = factory( new Float32Array( [ 2.0 ] ) );
	for ( i = 0; i < 100; i++ ) {
		v = f( i );
		t.strictEqual( v, 2.0, 'returns expected value' );
	}
	t.end();
});

tape( 'if the value at which to evaluate a polynomial is `0`, the function returns a function which returns the first coefficient', function test( t ) {
	var f;
	var v;

	f = factory( new Float32Array( [ 3.0, 2.0, 1.0 ] ) );
	v = f( 0.0 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which evaluates a polynomial', function test( t ) {
	var f;
	var v;

	f = factory( new Float32Array( [ 4.0, 5.0 ] ) );
	v = f( 6.0 );
	t.strictEqual( v, 34.0, 'returns expected value' );

	f = factory( new Float32Array( [ -4.0, -5.0 ] ) );
	v = f( 6.0 );
	t.strictEqual( v, -34.0, 'returns expected value' );

	f = factory( new Float32Array( [ -19.0, 7.0, -4.0, 6.0 ] ) );
	v = f( 3.0 );
	t.strictEqual( v, 128.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which evaluates a polynomial (large number of coefficients)', function test( t ) {
	var sum;
	var f;
	var c;
	var v;
	var i;

	c = [];
	sum = 0;
	for ( i = 0; i < 1000; i++ ) {
		c.push( i );
		sum += i;
	}
	f = factory( new Float32Array( c ) );

	v = f( 1.0 );
	t.strictEqual( v, sum, 'returns expected value' );

	t.end();
});
