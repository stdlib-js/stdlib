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
var array2iterator = require( '@stdlib/array/to-iterator' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var noop = require( '@stdlib/utils/noop' );
var iterReplicateBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterReplicateBy, 'function', 'main export is a function' );
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
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterReplicateBy( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterReplicateBy( randu(), value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object having a `next` method which throws an error if a provided callback function does not return an integer value', function test( t ) {
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
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when a callback returns '+values[i] );
	}
	t.end();

	function badValue( value ) {
		function clbk() {
			return value;
		}
		return function badValue() {
			var it = iterReplicateBy( randu(), clbk );
			it.next();
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object (infinite iterator)', function test( t ) {
	var actual;
	var it;
	var v1;
	var v2;
	var i;

	it = iterReplicateBy( randu(), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < 100; i++ ) {
		actual.push( it.next() );
	}
	for ( i = 0; i < actual.length; i += 2 ) {
		v1 = actual[ i ];
		v2 = actual[ i+1 ];
		t.equal( v1.value, v2.value, 'returns expected value' );
		t.equal( v1.done, v2.done, 'returns expected value' );
	}
	t.end();

	function fcn() {
		return 2;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; >1)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn() {
		return 3;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; non-constant)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; non-constant)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v, i ) {
		return i + 1;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; non-constant)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn( v, i, n ) {
		return n + 1;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; once)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn() {
		return 1;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; none)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn() {
		return 0;
	}
});

tape( 'the function returns an iterator protocol-compliant object which replicates each iterated value according to a provided function (finite iterator; none)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();

	function fcn() {
		return -5;
	}
});

tape( 'the function supports specifying the callback execution context', function test( t ) {
	var expected;
	var values;
	var actual;
	var ctx;
	var it;
	var i;

	ctx = {
		'count': 0
	};
	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterReplicateBy( array2iterator( values ), fcn, ctx );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.equal( ctx.count, 4, 'returns expected value' );
	t.end();

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
		return 1;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterReplicateBy( randu(), fcn );

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

	function fcn() {
		return 2;
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterReplicateBy( randu(), fcn );

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

	function fcn() {
		return 2;
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var iterReplicateBy;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterReplicateBy = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterReplicateBy( rand, fcn );
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

	function fcn() {
		return 2;
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterReplicateBy;
	var it;

	iterReplicateBy = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterReplicateBy( randu(), fcn );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function fcn() {
		return 2;
	}
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterReplicateBy;
	var rand;
	var it;

	iterReplicateBy = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterReplicateBy( rand, fcn );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function fcn() {
		return 2;
	}
});
