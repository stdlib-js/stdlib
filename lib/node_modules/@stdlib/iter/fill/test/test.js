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
var iterFill = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterFill, 'function', 'main export is a function' );
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
			iterFill( value, 3.14 );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (begin)', function test( t ) {
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
			iterFill( value, 3.14, 10 );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (begin+end)', function test( t ) {
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
			iterFill( value, 3.14, 10, 20 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterFill( randu(), 3.14, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a nonnegative integer (end)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterFill( randu(), 3.14, value, 20 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterFill( randu(), 3.14, 10, value );
		};
	}
});

tape( 'the function throws an error if provided insufficient input arguments', function test( t ) {
	t.throws( iterFill, Error, 'throws an error' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		iterFill( randu() );
	}
});

tape( 'the function returns an iterator protocol-compliant object (infinite iterator; begin+end)', function test( t ) {
	var it;
	var r;
	var i;

	it = iterFill( randu(), 3.14, 10, 20 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( r.done, false, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (finite iterator)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterFill( array2iterator( values ), 3.14 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (begin+<last>)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
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
			'value': 5,
			'done': false
		},
		{
			'value': 6,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterFill( array2iterator( values ), 3.14, 6 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (begin+end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
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
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 8,
			'done': false
		},
		{
			'value': 9,
			'done': false
		},
		{
			'value': 10,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterFill( array2iterator( values ), 3.14, 3, 7 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which "fills" values from a provided iterator up to the last iterated value', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3 ];
	expected = [
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'value': 3.14,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterFill( array2iterator( values ), 3.14, 0, 10 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns un-"filled" iterated values if the third argument is less than or equal to the second argument (begin=end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
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
			'value': 5,
			'done': false
		},
		{
			'value': 6,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 8,
			'done': false
		},
		{
			'value': 9,
			'done': false
		},
		{
			'value': 10,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterFill( array2iterator( values ), 3.14, 3, 3 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns un-"filled" iterated values if the third argument is less than or equal to the second argument (begin>end)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
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
			'value': 5,
			'done': false
		},
		{
			'value': 6,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 8,
			'done': false
		},
		{
			'value': 9,
			'done': false
		},
		{
			'value': 10,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterFill( array2iterator( values ), 3.14, 3, 0 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterFill( randu(), 3.14 );

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

	it = iterFill( randu(), 3.14 );

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
	var iterFill;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterFill = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterFill( rand, 3.14 );
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

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable (begin)', function test( t ) {
	var iterFill;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterFill = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterFill( rand, 3.14, 10 );
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

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable (begin+end)', function test( t ) {
	var iterFill;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterFill = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterFill( rand, 3.14, 10, 20 );
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
	var iterFill;
	var it;

	iterFill = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterFill( randu(), 3.14 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterFill;
	var rand;
	var it;

	iterFill = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterFill( rand, 3.14 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
