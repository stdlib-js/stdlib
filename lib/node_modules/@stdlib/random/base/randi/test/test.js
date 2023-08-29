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
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var randi = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof randi, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate pseudorandom number generators', function test( t ) {
	t.equal( typeof randi.factory, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof randi.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.equal( randi.NAME, 'randi', 'has property' );
	t.end();
});

tape( 'attached to the main export is the underlying PRNG', function test( t ) {
	t.equal( typeof randi.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the main export is the minimum possible generated number', function test( t ) {
	t.equal( typeof randi.MIN, 'number', 'has property' );
	t.equal( isInteger( randi.MIN ), true, 'is an integer' );
	t.end();
});

tape( 'attached to the main export is the maximum possible generated number', function test( t ) {
	t.equal( typeof randi.MAX, 'number', 'has property' );
	t.equal( isInteger( randi.MAX ), true, 'is an integer' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.equal( isArrayLikeObject( randi.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.equal( typeof randi.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.equal( isArrayLikeObject( randi.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.equal( typeof randi.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.equal( typeof randi.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom numbers between a minimum (inclusive) and a maximum (inclusive) value', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 1e3; i++ ) {
		v = randi();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isInteger( v ), true, 'returns an integer' );
		t.equal( v >= randi.MIN && v <= randi.MAX, true, 'returns a number between MIN (inclusive) and MAX (inclusive)' );
	}
	t.end();
});

tape( 'the function supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randi();
	}
	// Capture the current state:
	state = randi.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randi() );
	}
	// Set the state:
	randi.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( randi(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
