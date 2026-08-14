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
var INT32_MAX = require( '@stdlib/constants/int32/max' );
var isPositiveInteger = require( '@stdlib/math/base/assert/is-positive-integer' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var minstd = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minstd, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate normalized pseudorandom numbers', function test( t ) {
	t.strictEqual( typeof minstd.normalized, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to generate linear congruential pseudorandom number generator', function test( t ) {
	t.strictEqual( typeof minstd.factory, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.strictEqual( typeof minstd.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.strictEqual( minstd.NAME, 'minstd', 'has property' );
	t.end();
});

tape( 'attached to the main export is the minimum possible generated number', function test( t ) {
	t.strictEqual( minstd.MIN, 1, 'has property' );
	t.end();
});

tape( 'attached to the main export is the maximum possible generated number', function test( t ) {
	t.strictEqual( minstd.MAX, INT32_MAX-1, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.strictEqual( isInt32Array( minstd.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.strictEqual( typeof minstd.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.strictEqual( isInt32Array( minstd.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.strictEqual( typeof minstd.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.strictEqual( typeof minstd.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom integers strictly between 0 and 2^31-1 (inclusive)', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 1e3; i++ ) {
		v = minstd();
		t.strictEqual( typeof v, 'number', 'returns expected value' );
		t.strictEqual( isPositiveInteger( v ), true, 'returns a positive integer' );
		t.strictEqual( v >= 1 && v <= INT32_MAX-1, true, 'returns an integer between 1 and 2^31-1 (inclusive)' );
	}
	t.end();
});

tape( 'the `normalized` method returns pseudorandom numbers strictly between 0 (inclusive) and 1 (exclusive)', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 1e3; i++ ) {
		v = minstd.normalized();
		t.strictEqual( typeof v, 'number', 'returns expected value' );
		t.strictEqual( v >= 0.0 && v < 1.0, true, 'returns a number between 0 (inclusive) and 1 (exclusive)' );
	}
	t.end();
});

tape( 'attached to the `normalized` method is the generator name', function test( t ) {
	t.strictEqual( minstd.normalized.NAME, 'minstd', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the minimum possible generated number', function test( t ) {
	t.strictEqual( minstd.normalized.MIN, 0.0, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the maximum possible generated number', function test( t ) {
	t.strictEqual( minstd.normalized.MAX, (INT32_MAX-2.0)/(INT32_MAX-1.0), 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed', function test( t ) {
	t.strictEqual( isInt32Array( minstd.normalized.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed length', function test( t ) {
	t.strictEqual( typeof minstd.normalized.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state', function test( t ) {
	t.strictEqual( isInt32Array( minstd.normalized.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state length', function test( t ) {
	t.strictEqual( typeof minstd.normalized.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state size', function test( t ) {
	t.strictEqual( typeof minstd.normalized.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.strictEqual( typeof minstd.normalized.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'the generator supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		minstd();
	}
	// Capture the current state:
	state = minstd.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( minstd() );
	}
	// Set the state:
	minstd.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.strictEqual( minstd(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the generator supports setting the generator state (normalized)', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		minstd.normalized();
	}
	// Capture the current state:
	state = minstd.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( minstd.normalized() );
	}
	// Set the state:
	minstd.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.strictEqual( minstd.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the generator supports setting the generator state (normalized)', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		minstd.normalized();
	}
	// Capture the current state:
	state = minstd.normalized.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( minstd.normalized() );
	}
	// Set the state:
	minstd.normalized.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.strictEqual( minstd.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
