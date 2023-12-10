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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var pow = require( '@stdlib/math/base/special/pow' );
var iterLogspace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterLogspace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( value, 4 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a number (iterations)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( value, 3, 4 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a number (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( value, 3, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a number (iterations+options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( value, 3, 1000, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( 0, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number (iterations)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( 0, value, 1000 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number (iterations+options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			iterLogspace( 0, value, 1000, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is neither a nonnegative integer nor an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterLogspace( 0, 4, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a nonnegative integer (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterLogspace( 0, 4, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an object', function test( t ) {
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
			iterLogspace( 0, 3, 4, value );
		};
	}
});

tape( 'the function throws an error if provided a `base` option which is not a positive number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
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
			iterLogspace( 0, 3, {
				'base': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `base` option which is not a positive number (iterations)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
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
			iterLogspace( 0, 3, 4, {
				'base': value
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which returns, by default, 100 evenly spaced numbers on a base-10 log scale', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': pow( 10, i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	it = iterLogspace( 0, 99 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns, by default, 100 evenly spaced numbers on a base-10 log scale (options)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': pow( 10, i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	it = iterLogspace( 0, 99, {} );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the number of returned numbers', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 10,
			'done': false
		},
		{
			'value': 100,
			'done': false
		},
		{
			'value': 1000,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterLogspace( 0, 3, 4 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports returning an iterator protocol-compliant object which returns evenly spaced numbers on a specified log scale', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': pow( 2, i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	opts = {
		'base': 2
	};
	it = iterLogspace( 0, 99, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports returning an iterator protocol-compliant object which returns evenly spaced numbers on a specified log scale (iterations)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 1000; i++ ) {
		expected.push({
			'value': pow( 2, i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	opts = {
		'base': 2
	};
	it = iterLogspace( 0, 999, 1000, opts );
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

	it = iterLogspace( 0, 3, 4 );

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

	it = iterLogspace( 0, 3, 4 );

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

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var iterLogspace;
	var it1;
	var it2;
	var i;

	iterLogspace = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterLogspace( 0, 3, 4 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 4; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterLogspace;
	var it;

	iterLogspace = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterLogspace( 0, 3, 4 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
