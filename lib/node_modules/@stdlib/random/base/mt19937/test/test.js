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
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var FLOAT64_MAX_SAFE_INTEGER = require('@stdlib/constants/float64/max-safe-integer');
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var isNonNegativeInteger = require( '@stdlib/math/base/assert/is-nonnegative-integer' );
var mt19937 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof mt19937, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the main export is a method to generate normalized pseudorandom numbers', function test( t ) {
	t.equal( typeof mt19937.normalized, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to create a Mersenne Twister pseudorandom number generator', function test( t ) {
	t.equal( typeof mt19937.factory, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof mt19937.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'attached to the main export is the generator name', function test( t ) {
	t.equal( mt19937.NAME, 'mt19937', 'has property' );
	t.end();
});

tape( 'attached to the main export is the minimum possible generated number', function test( t ) {
	t.equal( mt19937.MIN, 0, 'has property' );
	t.end();
});

tape( 'attached to the main export is the maximum possible generated number', function test( t ) {
	t.equal( mt19937.MAX, UINT32_MAX, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed', function test( t ) {
	t.equal( isUint32Array( mt19937.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator seed length', function test( t ) {
	t.equal( typeof mt19937.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state', function test( t ) {
	t.equal( isUint32Array( mt19937.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state length', function test( t ) {
	t.equal( typeof mt19937.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the main export is the generator state size', function test( t ) {
	t.equal( typeof mt19937.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'the function returns pseudorandom integers strictly between 0 and 2^32-1 (inclusive)', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 1e3; i++ ) {
		v = mt19937();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isNonNegativeInteger( v ), true, 'returns a nonnegative integer' );
		t.equal( v >= 0 && v <= UINT32_MAX, true, 'returns an integer between 0 and 2^32-1 (inclusive)' );
	}
	t.end();
});

tape( 'the `normalized` method returns pseudorandom numbers strictly between 0 (inclusive) and 1 (exclusive)', function test( t ) {
	var v;
	var i;
	for ( i = 0; i < 1e3; i++ ) {
		v = mt19937.normalized();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( v >= 0.0 && v < 1.0, true, 'returns a number between 0 (inclusive) and 1 (exclusive)' );
	}
	t.end();
});

tape( 'attached to the `normalized` method is the generator name', function test( t ) {
	t.equal( mt19937.normalized.NAME, 'mt19937', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the minimum possible generated number', function test( t ) {
	t.equal( mt19937.normalized.MIN, 0.0, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the maximum possible generated number', function test( t ) {
	t.equal( mt19937.normalized.MAX, FLOAT64_MAX_SAFE_INTEGER/(FLOAT64_MAX_SAFE_INTEGER+1), 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed', function test( t ) {
	t.equal( isUint32Array( mt19937.normalized.seed ), true, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed length', function test( t ) {
	t.equal( typeof mt19937.normalized.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state', function test( t ) {
	t.equal( isUint32Array( mt19937.normalized.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state length', function test( t ) {
	t.equal( typeof mt19937.normalized.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state size', function test( t ) {
	t.equal( typeof mt19937.normalized.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is a method to serialize a pseudorandom number generator as JSON', function test( t ) {
	t.equal( typeof mt19937.normalized.toJSON, 'function', 'has method' );
	t.end();
});

tape( 'the generator supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937() );
	}
	// Set the state:
	mt19937.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the generator supports setting the generator state (normalized)', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937.normalized();
	}
	// Capture the current state:
	state = mt19937.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937.normalized() );
	}
	// Set the state:
	mt19937.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the generator supports setting the generator state (normalized)', function test( t ) {
	var state;
	var arr;
	var i;

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		mt19937.normalized();
	}
	// Capture the current state:
	state = mt19937.normalized.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( mt19937.normalized() );
	}
	// Set the state:
	mt19937.normalized.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( mt19937.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
