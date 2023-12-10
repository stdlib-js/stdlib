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
var now = require( '@stdlib/time/now' );
var isInteger = require( '@stdlib/assert/is-integer' ).isPrimitive;
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var Uint32Array = require( '@stdlib/array/uint32' );
var typedarray2json = require( '@stdlib/array/to-json' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a value which is not an object, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized/unsupported PRNG name', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'foo',
		'bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'name': value
			});
		};
	}
});

tape( 'if provided a `copy` option which is not a boolean, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'copy': value
			});
		};
	}
});

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		0.0,
		-5.0,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'seed': value
			});
		};
	}
});

tape( 'if provided an invalid `state` option, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'name': 'mt19937',
				'state': value
			});
		};
	}
});

tape( 'the function returns a pseudorandom number generator (no seed)', function test( t ) {
	var randi;
	var v;
	var i;

	randi = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = randi();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isInteger( v ), true, 'returns an integer' );
		t.equal( v >= randi.MIN && v <= randi.MAX, true, 'returns a number between MIN (inclusive) and MAX (inclusive)' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var randi1;
	var randi2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = now();

	randi1 = factory({
		'seed': seed
	});
	randi2 = factory({
		'seed': seed
	});

	t.notEqual( randi1, randi2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		v1 = randi1();
		v2 = randi2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed)', function test( t ) {
	var randi1;
	var randi2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = [ now()+1, now()+2, now()+3 ];

	randi1 = factory({
		'seed': seed
	});
	randi2 = factory({
		'seed': seed
	});

	t.notEqual( randi1, randi2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		v1 = randi1();
		v2 = randi2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var randi = factory();
	t.equal( randi.NAME, 'randi', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the minimum possible generated number', function test( t ) {
	var randi = factory();
	t.equal( typeof randi.MIN, 'number', 'has property' );
	t.equal( isInteger( randi.MIN ), true, 'is an integer' );
	t.end();
});

tape( 'attached to the returned function is the maximum possible generated number', function test( t ) {
	var randi = factory();
	t.equal( typeof randi.MAX, 'number', 'has property' );
	t.equal( isInteger( randi.MAX ), true, 'is an integer' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var randi = factory();
	t.equal( typeof randi.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var randi = factory({
		'seed': 12345
	});
	t.equal( isArrayLikeObject( randi.seed ), true, 'has property' );
	t.equal( randi.seed[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed)', function test( t ) {
	var actual;
	var rand;
	var seed;
	var i;

	seed = [ 1234, 5678 ];
	rand = factory({
		'seed': seed
	});

	actual = rand.seed;
	t.equal( isArrayLikeObject( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var randi = factory();
	t.equal( typeof randi.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var randi = factory();
	t.equal( isArrayLikeObject( randi.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var randi = factory();
	t.equal( typeof randi.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var randi = factory();
	t.equal( typeof randi.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var randi;
	var o;

	randi = factory();
	t.equal( typeof randi.toJSON, 'function', 'has method' );

	o = randi.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, randi.NAME + '-' + randi.PRNG.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( randi.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var randi;
	var v;
	var i;

	randi = factory({
		'name': 'minstd'
	});

	t.equal( randi.PRNG.NAME, 'minstd', 'expected `PRNG` value' );

	for ( i = 0; i < 1e3; i++ ) {
		v = randi();
		t.equal( v >= randi.MIN && v <= randi.MAX, true, 'returns a number between MIN (inclusive) and MAX (inclusive)' );
	}
	t.end();
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var randi;
	var state;
	var arr;
	var i;

	randi = factory();

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

	// Create another PRNG using the captured state:
	randi = factory({
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( randi(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var shared;
	var state;
	var randi;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	randi = factory({
		'name': 'mt19937'
	});

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

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Uint32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'name': 'mt19937',
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'name': 'mt19937',
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v2 = rand2();
	}

	// Reset the (shared) state:
	rand1.state = state;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting the generator state', function test( t ) {
	var randi;
	var state;
	var arr;
	var i;

	randi = factory();

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
