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
var ENV = require( '@stdlib/process/env' );
var now = require( '@stdlib/time/now' );
var kstest = require( '@stdlib/stats/kstest' );
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var Uint32Array = require( '@stdlib/array/uint32' );
var typedarray2json = require( '@stdlib/array/to-json' );
var factory = require( './../lib/factory.js' );


// VARIABLES //

var opts = {
	'skip': ( ENV.TEST_MODE === 'coverage' )
};


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
	var randu;
	var v;
	var i;

	randu = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = randu();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( v >= 0.0 && v < 1.0, true, 'returns a number between 0 (inclusive) and 1 (exclusive)' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var randu1;
	var randu2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = now();

	randu1 = factory({
		'seed': seed
	});
	randu2 = factory({
		'seed': seed
	});

	t.notEqual( randu1, randu2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		v1 = randu1();
		v2 = randu2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed)', function test( t ) {
	var randu1;
	var randu2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = [ now()+1, now()+2, now()+3 ];

	randu1 = factory({
		'seed': seed
	});
	randu2 = factory({
		'seed': seed
	});

	t.notEqual( randu1, randu2, 'separate generators' );

	for ( i = 0; i < 1e2; i++ ) {
		v1 = randu1();
		v2 = randu2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var randu = factory();
	t.equal( randu.NAME, 'randu', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the minimum possible generated number', function test( t ) {
	var randu = factory();
	t.equal( typeof randu.MIN, 'number', 'has property' );
	t.equal( randu.MIN, 0.0, 'equals 0.0' );
	t.end();
});

tape( 'attached to the returned function is the maximum possible generated number', function test( t ) {
	var randu = factory();
	t.equal( typeof randu.MAX, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the underlying PRNG', function test( t ) {
	var randu = factory();
	t.equal( typeof randu.PRNG, 'function', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var randu = factory({
		'seed': 12345
	});
	t.equal( isArrayLikeObject( randu.seed ), true, 'has property' );
	t.equal( randu.seed[ 0 ], 12345, 'equal to provided seed' );
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
	var randu = factory();
	t.equal( typeof randu.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var randu = factory();
	t.equal( isArrayLikeObject( randu.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var randu = factory();
	t.equal( typeof randu.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var randu = factory();
	t.equal( typeof randu.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var randu;
	var o;

	randu = factory();
	t.equal( typeof randu.toJSON, 'function', 'has method' );

	o = randu.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, randu.NAME+'-'+randu.PRNG.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( randu.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	t.end();
});

tape( 'the function supports specifying the underlying PRNG', function test( t ) {
	var randu;
	var v;
	var i;

	randu = factory({
		'name': 'minstd'
	});

	t.equal( randu.PRNG.NAME, 'minstd', 'expected `PRNG` value' );

	for ( i = 0; i < 1e3; i++ ) {
		v = randu();
		t.equal( v >= 0.0 && v < 1, true, 'returns a number between 0 (inclusive) and 1 (exclusive)' );
	}
	t.end();
});

tape( 'the function returns a PRNG for generating pseudorandom numbers from a uniform distribution', opts, function test( t ) {
	var threshold;
	var count;
	var npass;
	var N;
	var x;

	threshold = 0.10;

	x = new Array( 1e3 );
	N = 500;

	count = -1;
	npass = 0;

	gof();

	function gof() {
		var rejected;
		var pValue;
		var randu;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < N; i++ ) {
			randu = factory();
			t.ok( true, 'seed: '+randu.seed );
			for ( j = 0; j < x.length; j++ ) {
				x[ j ] = randu();
				if ( x[ j ] < 0.0 || x[ j ] > 1.0 ) {
					t.ok( false, 'returned a number outside support: '+x[ j ] );
				}
			}
			// Test using Kolmogorov-Smirnov goodness-of-fit test:
			pValue = kstest( x, 'uniform', 0.0, 1.0 ).pValue;
			t.equal( typeof pValue, 'number', 'returns a p-value: '+pValue );
			if ( pValue < 0.05 ) {
				rejected += 1;
			}
		}
		// Account for small sample size and few repeats...
		bool = ( rejected / N < threshold );

		// If we succeed the first time, we are done...
		if ( count === 0 && bool ) {
			return done( bool, rejected );
		}
		// Retry mode...
		if ( bool ) {
			npass += 1;
		}
		// Retry twice...
		if ( count < 2 ) {
			return gof();
		}
		// Both retries must succeed for test to pass:
		bool = ( npass >= 2 );
		return done( bool, rejected );
	}

	function done( bool, rejected ) {
		t.ok( bool, 'null hypothesis (i.e., that numbers are drawn from Uniform(0,1)) is rejected in less than '+(threshold*100)+'% of cases ('+rejected+' of '+N+'). Repeats: '+npass+' of '+count+'.' );
		t.end();
	}
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var randu;
	var state;
	var arr;
	var i;

	randu = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randu();
	}
	// Capture the current state:
	state = randu.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randu() );
	}

	// Create another PRNG using the captured state:
	randu = factory({
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( randu(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var shared;
	var state;
	var randu;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	randu = factory({
		'name': 'mt19937'
	});

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randu();
	}
	// Capture the current state:
	state = randu.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randu() );
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
	var randu;
	var state;
	var arr;
	var i;

	randu = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		randu();
	}
	// Capture the current state:
	state = randu.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( randu() );
	}
	// Set the state:
	randu.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( randu(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});
