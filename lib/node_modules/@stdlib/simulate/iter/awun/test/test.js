/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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
var proxyquire = require( 'proxyquire' );
var randu = require( '@stdlib/random/iter/randu' );
var minstd = require( '@stdlib/random/base/minstd-shuffle' );
var uniform = require( '@stdlib/random/base/uniform' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float64Array = require( '@stdlib/array/float64' );
var array2iterator = require( '@stdlib/array/to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isUint32Array = require( '@stdlib/assert/is-uint32array' );
var UINT32_MAX = require( '@stdlib/constants/uint32/max' );
var SQRT_THREE = require( '@stdlib/constants/float64/sqrt-three' );
var iterawun = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterawun, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an object', function test( t ) {
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, value );
		};
	}
});

tape( 'the function throws an error if provided a `prng` option which is not a function', function test( t ) {
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
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, {
				'prng': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `copy` option which is not a boolean', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, {
				'copy': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `seed` option which is neither a positive integer or non-empty array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, {
				'seed': value
			});
		};
	}
});

tape( 'the function throws a range error if provided a `seed` which is an integer greater than the maximum unsigned 32-bit integer', function test( t ) {
	var values;
	var i;

	values = [
		UINT32_MAX + 1,
		UINT32_MAX + 2,
		UINT32_MAX + 3
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, {
				'seed': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `state` option which is not a Uint32Array', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, {
				'state': value
			});
		};
	}
});

tape( 'if provided an invalid `state` option, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new Uint32Array( 0 ),
		new Uint32Array( 10 ),
		new Uint32Array( 100 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterawun( randu(), 1.0, {
				'state': value
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which iteratively introduces additive white uniform noise', function test( t ) {
	var values;
	var it;
	var v;
	var i;

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	it = iterawun( array2iterator( values ), 1.0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.notEqual( v.value, values[ i ], 'does not return original value' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
	}
	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which iteratively introduces additive white uniform noise (options)', function test( t ) {
	var values;
	var it;
	var v;
	var i;

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	it = iterawun( array2iterator( values ), 1.0, {} );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.notEqual( v.value, values[ i ], 'does not return original value' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
	}
	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning a seeded iterator protocol-compliant object which iteratively introduces additive white uniform noise (integer seed)', function test( t ) {
	var expected;
	var actual;
	var values;
	var runif;
	var it;
	var v;
	var i;

	// Note: we assume that this is the underlying PRNG...
	runif = uniform.factory( -SQRT_THREE, SQRT_THREE, {
		'seed': 12345
	});

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	expected = [];
	for ( i = 0; i < values.length; i++ ) {
		expected.push( values[i] + runif() );
	}

	it = iterawun( array2iterator( values ), 1.0, {
		'seed': 12345
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
		actual.push( v.value );
	}
	t.deepEqual( actual, expected, 'returns expected results' );

	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports returning a seeded iterator protocol-compliant object which iteratively introduces additive white uniform noise (array seed)', function test( t ) {
	var expected;
	var actual;
	var values;
	var runif;
	var it;
	var v;
	var i;

	// Note: we assume that this is the underlying PRNG...
	runif = uniform.factory( -SQRT_THREE, SQRT_THREE, {
		'seed': [ 12345, 56789 ]
	});

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	expected = [];
	for ( i = 0; i < values.length; i++ ) {
		expected.push( values[i] + runif() );
	}

	it = iterawun( array2iterator( values ), 1.0, {
		'seed': [ 12345, 56789 ]
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
		actual.push( v.value );
	}
	t.deepEqual( actual, expected, 'returns expected results' );

	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a pseudorandom number generator for generating pseudorandom numbers drawn from a uniform distribution', function test( t ) {
	var values;
	var it;
	var v;
	var i;

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	it = iterawun( array2iterator( values ), 1.0, {
		'prng': minstd.normalized
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.notEqual( v.value, values[ i ], 'does not return original value' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
	}
	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a seeded pseudorandom number generator for generating pseudorandom numbers drawn from a uniform distribution', function test( t ) {
	var expected;
	var actual;
	var values;
	var runif;
	var rand;
	var it;
	var v;
	var i;

	runif = minstd.factory({
		'seed': 12345
	});

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	expected = [];
	for ( i = 0; i < values.length; i++ ) {
		v = 2.0 * (runif.normalized()-0.5) * SQRT_THREE * 1.0;
		expected.push( values[i] + v );
	}

	rand = minstd.factory({
		'seed': 12345
	});
	it = iterawun( array2iterator( values ), 1.0, {
		'prng': rand.normalized
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
		actual.push( v.value );
	}
	t.deepEqual( actual, expected, 'returns expected results' );

	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an iterated value is a non-numeric value, the returned value is `NaN`', function test( t ) {
	var values;
	var it;
	var v;
	var i;

	values = [
		NaN,
		'3.14',
		'1',
		'beep',
		true,
		false,
		[],
		{},
		function noop() {}
	];

	it = iterawun( array2iterator( values ), 0.2 );
	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( isnan( v.value ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports specifying the generator state', function test( t ) {
	var expected;
	var values;
	var runif;
	var state;
	var arr;
	var it;
	var i;

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];

	// Create a PRNG:
	runif = uniform.factory( -2.0*SQRT_THREE, 2.0*SQRT_THREE ); // Note: we assume this is the underlying PRNG

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		runif();
	}
	// Capture the current state:
	state = runif.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( runif() );
	}

	// Create an iterator using the captured state:
	it = iterawun( array2iterator( values ), 2.0, {
		'state': state
	});

	// Use previously generated values...
	for ( i = 0; i < values.length; i++ ) {
		expected = values[ i ] + arr[ i ];
		t.equal( it.next().value, expected, 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var shared;
	var state;
	var runif;
	var it0a;
	var it0b;
	var it1;
	var it2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	// Note: we assume that this is the underlying PRNG...
	runif = uniform.factory( -SQRT_THREE, SQRT_THREE );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		runif();
	}
	// Capture the current state:
	state = runif.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( runif() );
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one iterator:
	shared = new Uint32Array( state );

	// Create source iterators:
	it0a = array2iterator( new Float64Array( 1000 ) );
	it0b = array2iterator( new Float64Array( 1000 ) );

	// Create iterators using the captured state:
	it1 = iterawun( it0a, 1.0, {
		'state': shared,
		'copy': false
	});
	it2 = iterawun( it0b, 1.0, {
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = it1.next().value;
		v2 = it2.next().value;
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v2 = it2.next();
	}

	// Reset the (shared) state:
	it1.state = state;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 25; i++ ) {
		v1 = it1.next().value;
		v2 = it2.next().value;
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned iterator supports setting the generator state', function test( t ) {
	var state;
	var arr;
	var it;
	var i;

	it = iterawun( array2iterator( new Float64Array( 1000 ) ), 3.0 );

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		it.next();
	}
	// Capture the current state:
	state = it.state;

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( it.next().value );
	}
	// Set the state:
	it.state = state;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( it.next().value, arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'attached to the returned iterator is a `PRNG` property', function test( t ) {
	var it = iterawun( randu(), 0.2 );
	t.equal( typeof it.PRNG, 'function', 'has property' );

	it = iterawun( randu(), 0.2, {
		'prng': minstd.normalized
	});
	t.equal( it.PRNG, minstd.normalized, 'returns expected value' );
	t.end();
});

tape( 'attached to the returned iterator is the generator seed (integer seed)', function test( t ) {
	var actual;
	var it;

	it = iterawun( randu(), 0.2, {
		'seed': 12345
	});
	actual = it.seed;

	t.equal( isUint32Array( actual ), true, 'has property' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );

	it = iterawun( randu(), 0.2, {
		'prng': minstd.normalized
	});
	t.equal( it.seed, null, 'equal to `null`' );

	t.end();
});

tape( 'attached to the returned iterator is the generator seed (array seed)', function test( t ) {
	var actual;
	var seed;
	var it;
	var i;

	seed = [ 1, 2, 3, 4, 5, 6 ];
	it = iterawun( randu(), 0.2, {
		'seed': seed
	});

	actual = it.seed;
	t.equal( isUint32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned iterator is the generator seed length', function test( t ) {
	var it = iterawun( randu(), 0.2 );
	t.equal( typeof it.seedLength, 'number', 'has property' );

	it = iterawun( randu(), 0.2, {
		'prng': minstd.normalized
	});
	t.equal( it.seedLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned iterator is the generator state', function test( t ) {
	var it = iterawun( randu(), 0.2 );
	t.equal( isUint32Array( it.state ), true, 'has property' );

	it = iterawun( randu(), 0.2, {
		'prng': minstd.normalized
	});
	t.equal( it.state, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned iterator is the generator state length', function test( t ) {
	var it = iterawun( randu(), 0.2 );
	t.equal( typeof it.stateLength, 'number', 'has property' );

	it = iterawun( randu(), 0.2, {
		'prng': minstd.normalized
	});
	t.equal( it.stateLength, null, 'equal to `null`' );
	t.end();
});

tape( 'attached to the returned iterator is the generator state size', function test( t ) {
	var it = iterawun( randu(), 0.2 );
	t.equal( typeof it.byteLength, 'number', 'has property' );

	it = iterawun( randu(), 0.2, {
		'prng': minstd.normalized
	});
	t.equal( it.byteLength, null, 'equal to `null`' );
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterawun( randu(), 0.2 );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterawun( randu(), 0.2 );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var iterawun;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterawun = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterawun( rand, 0.2, {
		'seed': 56789
	});
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return randu( opts );
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterawun;
	var it;

	iterawun = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterawun( randu(), 0.2 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterawun;
	var rand;
	var it;

	iterawun = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterawun( rand, 0.2 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
