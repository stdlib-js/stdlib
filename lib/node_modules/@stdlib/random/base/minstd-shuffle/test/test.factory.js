/* eslint-disable max-lines */

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
var INT32_MAX = require( '@stdlib/constants/int32/max' );
var Int32Array = require( '@stdlib/array/int32' );
var now = require( '@stdlib/time/now' );
var isInt32Array = require( '@stdlib/assert/is-int32array' );
var isPositiveInteger = require( '@stdlib/math/base/assert/is-positive-integer' );
var kstest = require( '@stdlib/stats/kstest' );
var gcopy = require( '@stdlib/blas/base/gcopy' );
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

tape( 'if provided an options argument which is not an object, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3,
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

tape( 'if provided a `copy` option which is not a boolean, the factory function throws an error', function test( t ) {
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

tape( 'if provided a `seed` which is not a positive integer or a non-empty array-like object, the factory function throws an error', function test( t ) {
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
		[],
		{},
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

tape( 'the function throws a range error if provided a `seed` greater than or equal to the maximum signed 32-bit integer', function test( t ) {
	var values;
	var i;

	values = [
		INT32_MAX,
		INT32_MAX + 1,
		INT32_MAX + 2
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error when provided '+values[i] );
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

tape( 'if provided a `state` option which is not an Int32Array, the factory function throws an error', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option having an insufficient length, the factory function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		new Int32Array( 0 ),
		new Int32Array( 1 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported version, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Int32Array( 40 ); // 32+8
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 41 ); // >32+8
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported number of sections, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Int32Array( 40 ); // 32+8
	v[ 0 ] = 1;   // version
	v[ 1 ] = 4;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 41 ); // >32+8
	v[ 0 ] = 1;   // version
	v[ 1 ] = 4;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported table length, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 33;  // table length
	v[ 36 ] = 2;  // state length
	v[ 37 ] = 8;  // shuffle state
	v[ 38 ] = 9;  // PRNG state
	v[ 39 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 42 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 34;  // table length
	v[ 37 ] = 2;  // state length
	v[ 38 ] = 8;  // shuffle state
	v[ 39 ] = 9;  // PRNG state
	v[ 40 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an unsupported state length, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Int32Array( 40 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 1;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 2;  // seed length
	values.push( v );

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 3;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 39 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'if provided a `state` option containing an incompatible seed length, the factory function throws an error', function test( t ) {
	var values;
	var v;
	var i;

	values = [];

	v = new Int32Array( 40 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 9;  // seed length
	values.push( v );

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 9;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			factory({
				'state': value
			});
		};
	}
});

tape( 'the function returns a pseudorandom number generator (no options)', function test( t ) {
	var minstd;
	var v;
	var i;

	minstd = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = minstd();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isPositiveInteger( v ), true, 'returns a positive integer' );
		t.equal( v >= 1 && v <= INT32_MAX-1, true, 'returns an integer between 1 and 2^31-1 (inclusive)' );
	}
	t.end();
});

tape( 'the function returns a pseudorandom number generator (options; no seed)', function test( t ) {
	var minstd;
	var v;
	var i;

	minstd = factory( {} );
	for ( i = 0; i < 1e3; i++ ) {
		v = minstd();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( isPositiveInteger( v ), true, 'returns a positive integer' );
		t.equal( v >= 1 && v <= INT32_MAX-1, true, 'returns an integer between 1 and 2^31-1 (inclusive)' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (integer seed)', function test( t ) {
	var minstd1;
	var minstd2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = now();

	minstd1 = factory({
		'seed': seed
	});
	minstd2 = factory({
		'seed': seed
	});

	t.notEqual( minstd1, minstd2, 'separate generators' );

	for ( i = 0; i < 1e3; i++ ) {
		v1 = minstd1();
		v2 = minstd2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the function returns a seeded pseudorandom number generator (array seed)', function test( t ) {
	var minstd1;
	var minstd2;
	var seed;
	var v1;
	var v2;
	var i;

	seed = [ now() ];

	minstd1 = factory({
		'seed': seed
	});
	minstd2 = factory({
		'seed': seed
	});

	t.notEqual( minstd1, minstd2, 'separate generators' );

	for ( i = 0; i < 1e3; i++ ) {
		v1 = minstd1();
		v2 = minstd2();
		t.equal( v1, v2, 'both return same number' );
	}
	t.end();
});

tape( 'the returned function returns a known sequence of pseudorandom integers', function test( t ) {
	var expected;
	var actual;
	var minstd;
	var seed;
	var i;

	// Seed: 1
	seed = 1;

	// From a C implementation based on Numerical Recipes in C, 2nd Ed.
	expected = [
		893351816,
		197493099,
		1624379149,
		1137522503,
		1998097157,
		823564440,
		1404280278,
		143542612
	];

	minstd = factory({
		'seed': seed
	});

	actual = new Array( expected.length );
	for ( i = 0; i < expected.length; i++ ) {
		actual[ i ] = minstd();
	}
	t.deepEqual( actual, expected, 'returns expected values' );

	// Seed: 123456789
	seed = 123456789;

	expected = [
		1958455755,
		132558215,
		852526260,
		755116797,
		1767137056,
		1620648971,
		3947872,
		397959036
	];

	minstd = factory({
		'seed': seed
	});

	actual = new Array( expected.length );
	for ( i = 0; i < expected.length; i++ ) {
		actual[ i ] = minstd();
	}
	t.deepEqual( actual, expected, 'returns expected values' );

	t.end();
});

tape( 'attached to the returned function is the generator name', function test( t ) {
	var minstd = factory();
	t.equal( minstd.NAME, 'minstd-shuffle', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the minimum possible generated number', function test( t ) {
	var minstd = factory();
	t.equal( minstd.MIN, 1, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the maximum possible generated number', function test( t ) {
	var minstd = factory();
	t.equal( minstd.MAX, INT32_MAX-1, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (integer seed)', function test( t ) {
	var minstd;
	var actual;

	minstd = factory({
		'seed': 12345
	});
	actual = minstd.seed;

	t.equal( isInt32Array( actual ), true, 'has property' );
	t.equal( actual.length, 1, 'has expected length' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the returned function is the generator seed (array seed)', function test( t ) {
	var minstd;
	var actual;
	var seed;
	var i;

	seed = [ 12345 ];

	minstd = factory({
		'seed': seed
	});
	actual = minstd.seed;

	t.equal( isInt32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the returned function is the generator seed length', function test( t ) {
	var minstd = factory();
	t.equal( typeof minstd.seedLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state', function test( t ) {
	var minstd = factory();
	t.equal( isInt32Array( minstd.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state length', function test( t ) {
	var minstd = factory();
	t.equal( typeof minstd.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is the generator state size', function test( t ) {
	var minstd = factory();
	t.equal( typeof minstd.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the returned function is a method to serialize the generator as a JSON object', function test( t ) {
	var minstd;
	var o;

	minstd = factory();
	t.equal( typeof minstd.toJSON, 'function', 'has method' );

	o = minstd.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, minstd.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( minstd.state ), 'has property' );
	t.deepEqual( o.params, [], 'has property' );

	t.end();
});

tape( 'if the `state` property is set to a value other than an Int32Array, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var i;

	minstd = factory();

	values = [
		'3',
		3,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array having an unexpected length, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var i;

	minstd = factory();

	values = [
		new Int32Array( 0 ),
		new Int32Array( 10 ),
		new Int32Array( 20 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported version, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 ); // 32+8
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 41 ); // >32+8
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported number of sections, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 ); // 32+8
	v[ 0 ] = 1;   // version
	v[ 1 ] = 4;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 41 ); // >32+8
	v[ 0 ] = 1;   // version
	v[ 1 ] = 4;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported table length, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 33;  // table length
	v[ 36 ] = 2;  // state length
	v[ 37 ] = 8;  // shuffle state
	v[ 38 ] = 9;  // PRNG state
	v[ 39 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 42 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 34;  // table length
	v[ 37 ] = 2;  // state length
	v[ 38 ] = 8;  // shuffle state
	v[ 39 ] = 9;  // PRNG state
	v[ 40 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported state length, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 1;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 2;  // seed length
	values.push( v );

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 3;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 39 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an incompatible seed length, an error is thrown', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 9;  // seed length
	values.push( v );

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 9;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.state = value;
		};
	}
});

tape( 'attached to the returned function is a `normalized` method for generating pseudorandom numbers strictly between 0 (inclusive) and 1 (exclusive)', function test( t ) {
	var minstd;
	var v;
	var i;

	minstd = factory();
	for ( i = 0; i < 1e3; i++ ) {
		v = minstd.normalized();
		t.equal( typeof v, 'number', 'returns a number' );
		t.equal( v >= 0.0 && v < 1.0, true, 'returns a number between 0 (inclusive) and 1 (exclusive)' );
	}
	t.end();
});

tape( 'attached to the `normalized` method is the generator name', function test( t ) {
	var minstd = factory();
	t.equal( minstd.normalized.NAME, 'minstd-shuffle', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the minimum possible generated number', function test( t ) {
	var minstd = factory();
	t.equal( minstd.normalized.MIN, 0.0, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the maximum possible generated number', function test( t ) {
	var minstd = factory();
	t.equal( minstd.normalized.MAX, (INT32_MAX-2.0)/(INT32_MAX-1.0), 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed (integer seed)', function test( t ) {
	var minstd;
	var actual;

	minstd = factory({
		'seed': 12345
	});
	actual = minstd.normalized.seed;

	t.equal( isInt32Array( actual ), true, 'has property' );
	t.equal( actual.length, 1, 'has expected length' );
	t.equal( actual[ 0 ], 12345, 'equal to provided seed' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator seed (array seed)', function test( t ) {
	var minstd;
	var actual;
	var seed;
	var i;

	seed = [ 12345 ];
	minstd = factory({
		'seed': seed
	});
	actual = minstd.normalized.seed;

	t.equal( isInt32Array( actual ), true, 'has property' );
	for ( i = 0; i < seed.length; i++ ) {
		t.equal( actual[ i ], seed[ i ], 'returns expected value for word '+i );
	}
	t.end();
});

tape( 'attached to the `normalized` method is the generator state', function test( t ) {
	var minstd = factory();
	t.equal( isInt32Array( minstd.normalized.state ), true, 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state length', function test( t ) {
	var minstd = factory();
	t.equal( typeof minstd.normalized.stateLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the `normalized` method is the generator state size', function test( t ) {
	var minstd = factory();
	t.equal( typeof minstd.normalized.byteLength, 'number', 'has property' );
	t.end();
});

tape( 'attached to the r`normalized` method is a method to serialize the generator as a JSON object', function test( t ) {
	var minstd;
	var o;

	minstd = factory();
	t.equal( typeof minstd.normalized.toJSON, 'function', 'has method' );

	o = minstd.normalized.toJSON();
	t.equal( o.type, 'PRNG', 'has property' );
	t.equal( o.name, minstd.normalized.NAME, 'has property' );
	t.deepEqual( o.state, typedarray2json( minstd.normalized.state ), 'has property' );

	t.end();
});

tape( 'if the `state` property is set to a value other than an Int32Array, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var i;

	minstd = factory();

	values = [
		'3',
		3,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array having an unexpected length, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var i;

	minstd = factory();

	values = [
		new Int32Array( 0 ),
		new Int32Array( 10 ),
		new Int32Array( 20 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when set to '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported version, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 ); // 32+8
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 41 ); // >32+8
	v[ 0 ] = 0;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported number of sections, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 ); // 32+8
	v[ 0 ] = 1;   // version
	v[ 1 ] = 4;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 41 ); // >32+8
	v[ 0 ] = 1;   // version
	v[ 1 ] = 4;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported table length, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 33;  // table length
	v[ 36 ] = 2;  // state length
	v[ 37 ] = 8;  // shuffle state
	v[ 38 ] = 9;  // PRNG state
	v[ 39 ] = 1;  // seed length
	values.push( v );

	v = new Int32Array( 42 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 34;  // table length
	v[ 37 ] = 2;  // state length
	v[ 38 ] = 8;  // shuffle state
	v[ 39 ] = 9;  // PRNG state
	v[ 40 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an unsupported state length, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 1;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 2;  // seed length
	values.push( v );

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 3;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 39 ] = 2;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'if the `state` property is set to an Int32Array containing an incompatible seed length, an error is thrown (normalized)', function test( t ) {
	var minstd;
	var values;
	var v;
	var i;

	minstd = factory();

	values = [];

	v = new Int32Array( 40 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 9;  // seed length
	values.push( v );

	v = new Int32Array( 41 );
	v[ 0 ] = 1;   // version
	v[ 1 ] = 3;   // number of sections
	v[ 2 ] = 32;  // table length
	v[ 35 ] = 2;  // state length
	v[ 36 ] = 8;  // shuffle state
	v[ 37 ] = 9;  // PRNG state
	v[ 38 ] = 9;  // seed length
	values.push( v );

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			minstd.normalized.state = value;
		};
	}
});

tape( 'the `normalized` method returns pseudorandom numbers drawn from a uniform distribution', opts, function test( t ) {
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
		var minstd;
		var bool;
		var i;
		var j;

		count += 1;
		rejected = 0;
		for ( i = 0; i < N; i++ ) {
			minstd = factory();
			t.ok( true, 'seed: '+minstd.seed );
			for ( j = 0; j < x.length; j++ ) {
				x[ j ] = minstd.normalized();
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
	var minstd;
	var state;
	var arr;
	var i;

	minstd = factory();

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

	// Create another PRNG using the captured state:
	minstd = factory({
		'state': state
	});

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		t.equal( minstd(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the function supports specifying a shared generator state', function test( t ) {
	var minstd;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	minstd = factory();

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

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Int32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting the generator state', function test( t ) {
	var minstd;
	var state;
	var arr;
	var i;

	minstd = factory();

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
		t.equal( minstd(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state to a state array having a different length', function test( t ) {
	var minstd;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;

	// Seed length: 2
	minstd = factory({
		'seed': [ 1234, 5678 ]
	});

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

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Int32Array( state );

	// Create PRNGs having seed lengths equal to 1:
	rand1 = factory({
		'seed': [ 6789 ]
	});
	rand2 = factory({
		'seed': [ 4321 ]
	});

	// Move to future states...
	for ( i = 0; i < 100; i++ ) {
		v1 = rand1();
		v2 = rand2();
	}

	// Reset the PRNG states:
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	for ( i = 0; i < 100; i++ ) {
		v1 = rand1();
		t.equal( v1, arr[ i ], 'returns expected value. i: '+i+'.' );
		v2 = rand2();
		t.equal( v2, arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state (normalized)', function test( t ) {
	var minstd;
	var state;
	var arr;
	var i;

	minstd = factory();

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
		t.equal( minstd.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting the generator state (normalized)', function test( t ) {
	var minstd;
	var state;
	var arr;
	var i;

	minstd = factory();

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
		t.equal( minstd.normalized(), arr[ i ], 'returns expected value. i: '+i+'.' );
	}
	t.end();
});

tape( 'the returned function supports setting a shared generator state (same length)', function test( t ) {
	var minstd;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	minstd = factory();

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

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Int32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
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
	rand1.state = new Int32Array( state );

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting a shared generator state (different length)', function test( t ) {
	var minstd;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var s;
	var i;
	var j;

	minstd = factory();

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

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Int32Array( state );

	// Create PRNGs using the captured state:
	rand1 = factory({
		'state': shared,
		'copy': false
	});
	rand2 = factory({
		'state': shared,
		'copy': false
	});

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
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

	// Reset the (*previously* shared) state:
	s = new Int32Array( state.length+1 );
	gcopy( state.length, state, 1, s, 1 );
	s[ s.length-3 ] = 2;
	s[ s.length-1 ] = 1234;
	rand1.state = s;

	// Attempt to replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();

		// `rand1()` state is not affected by `rand2()`:
		t.equal( v1, arr[ i ], 'returns expected value. i: '+i+'.' );

		// `rand2()` state was never reset:
		t.notEqual( v2, arr[ j+1 ], 'does not return expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Reset the (*previously* shared) state:
	rand2.state = s;

	// Reset to a shared state:
	shared = new Int32Array( state );
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});

tape( 'the returned function supports setting a shared generator state (no initial shared state)', function test( t ) {
	var minstd;
	var shared;
	var state;
	var rand1;
	var rand2;
	var arr;
	var v1;
	var v2;
	var i;
	var j;

	minstd = factory();

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		minstd();
	}
	// Capture the current state:
	state = minstd.state;

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Int32Array( state );

	// Move to a future state...
	arr = [];
	for ( i = 0; i < 100; i++ ) {
		arr.push( minstd() );
	}

	// Create PRNGs using the captured state:
	rand1 = factory({
		'copy': false
	});
	rand2 = factory({
		'copy': false
	});

	// Move to a future state...
	for ( i = 0; i < 100; i++ ) {
		v1 = rand1();
		v2 = rand2();
	}

	// Reset to a shared state:
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}

	// Create a copy of the state (to prevent mutation) which will be shared by more than one PRNG:
	shared = new Int32Array( state );

	// Reset the (shared) state:
	rand1.state = shared;
	rand2.state = shared;

	// Replay previously generated values...
	j = 0;
	for ( i = 0; i < 50; i++ ) {
		v1 = rand1();
		v2 = rand2();
		t.equal( v1, arr[ j ], 'returns expected value. i: '+j+'.' );
		t.equal( v2, arr[ j+1 ], 'returns expected value. i: '+(j+1)+'.' );
		j += 2; // stride
	}
	t.end();
});
