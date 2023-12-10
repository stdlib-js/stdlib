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
var isDateObject = require( '@stdlib/assert/is-date-object' );
var round = require( '@stdlib/math/base/special/round' );
var iterDatespace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterDatespace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer, date string, or Date object', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( value, 99 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer, date string, or Date object (iterations)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( value, 99, 100 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer, date string, or Date object (options)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( value, 99, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a nonnegative integer, date string, or Date object (iterations+options)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( value, 99, 100, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer, date string, or Date object', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( 0, value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer, date string, or Date object (iterations)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( 0, value, 1000 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer, date string, or Date object (options)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( 0, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer, date string, or Date object (iterations+options)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		-1,
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
			iterDatespace( 0, value, 1000, {} );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is neither a nonnegative integer nor options object', function test( t ) {
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
			iterDatespace( 0, 99, value );
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
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterDatespace( 0, 99, value, {} );
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
			iterDatespace( 0, 99, 3, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `round` option', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		5,
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
			iterDatespace( 0, 99, {
				'round': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `round` option (iterations)', function test( t ) {
	var values;
	var i;

	values = [
		'foo',
		5,
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
			iterDatespace( 0, 99, 10, {
				'round': value
			});
		};
	}
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': new Date( i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	it = iterDatespace( new Date( 0 ), new Date( 99 ), {
		'beep': 'boop'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns, by default, 100 evenly spaced dates (JavaScript timestamps)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': new Date( i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	it = iterDatespace( 0, 99 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns, by default, 100 evenly spaced dates (Date objects)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': new Date( i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	it = iterDatespace( new Date( 0 ), new Date( 99 ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns, by default, 100 evenly spaced dates (date string)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	for ( i = 0; i < 100; i++ ) {
		expected.push({
			'value': new Date( i ),
			'done': false
		});
	}
	expected.push({
		'done': true
	});

	it = iterDatespace( ( new Date( 0 ) ).toISOString(), ( new Date( 99 ) ).toISOString() ); // eslint-disable-line max-len
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function ignores unrecognized options', function test( t ) {
	var actual;
	var it;
	var i;

	it = iterDatespace( new Date( 0 ), new Date( 99 ), 10, {
		'beep': 'boop'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 10; i++ ) {
		actual = it.next();
		t.equal( isDateObject( actual.value ), true, 'returns date object' );
		t.equal( actual.done, false, 'returns expected value' );
	}
	actual = it.next();
	t.equal( actual.value, void 0, 'returns expected value' );
	t.equal( actual.done, true, 'returns expected value' );
	t.end();
});

tape( 'the function ignores unrecognized options (iterations)', function test( t ) {
	var actual;
	var it;
	var i;

	it = iterDatespace( new Date( 0 ), new Date( 99 ), {
		'beep': 'boop'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		t.equal( isDateObject( actual.value ), true, 'returns date object' );
		t.equal( actual.done, false, 'returns expected value' );
	}
	actual = it.next();
	t.equal( actual.value, void 0, 'returns expected value' );
	t.equal( actual.done, true, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying the number of returned Date objects', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'value': new Date( 0 ),
			'done': false
		},
		{
			'value': new Date( 1 ),
			'done': false
		},
		{
			'value': new Date( 2 ),
			'done': false
		},
		{
			'value': new Date( 3 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDatespace( 0, 3, 4 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the rounding mode (floor)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	expected.push({
		'value': new Date( 0 ),
		'done': false
	});
	for ( i = 1; i < 99; i++ ) {
		expected.push({
			'value': new Date( 0 ),
			'done': false
		});
	}
	expected.push({
		'value': new Date( 1 ),
		'done': false
	});
	expected.push({
		'done': true
	});

	it = iterDatespace( 0, 1, {
		'round': 'floor'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the rounding mode (floor; iterations)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'value': new Date( 0 ),
			'done': false
		},
		{
			'value': new Date( 1 ),
			'done': false
		},
		{
			'value': new Date( 3 ),
			'done': false
		},
		{
			'value': new Date( 5 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDatespace( 0, 5, 4, {
		'round': 'floor'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the rounding mode (ceil)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	expected.push({
		'value': new Date( 0 ),
		'done': false
	});
	for ( i = 1; i < 99; i++ ) {
		expected.push({
			'value': new Date( 1 ),
			'done': false
		});
	}
	expected.push({
		'value': new Date( 1 ),
		'done': false
	});
	expected.push({
		'done': true
	});

	it = iterDatespace( 0, 1, {
		'round': 'ceil'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the rounding mode (ceil; iterations)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'value': new Date( 0 ),
			'done': false
		},
		{
			'value': new Date( 2 ),
			'done': false
		},
		{
			'value': new Date( 4 ),
			'done': false
		},
		{
			'value': new Date( 5 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDatespace( 0, 5, 4, {
		'round': 'ceil'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the rounding mode (round)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [];
	expected.push({
		'value': new Date( 0 ),
		'done': false
	});
	for ( i = 1; i < 99; i++ ) {
		expected.push({
			'value': new Date( round( i/100 ) ),
			'done': false
		});
	}
	expected.push({
		'value': new Date( 1 ),
		'done': false
	});
	expected.push({
		'done': true
	});

	it = iterDatespace( 0, 1, {
		'round': 'round'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying the rounding mode (round; iterations)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	expected = [
		{
			'value': new Date( 0 ),
			'done': false
		},
		{
			'value': new Date( 2 ),
			'done': false
		},
		{
			'value': new Date( 3 ),
			'done': false
		},
		{
			'value': new Date( 5 ),
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterDatespace( 0, 5, 4, {
		'round': 'round'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length-1; i++ ) {
		actual = it.next();
		t.equal( actual.value.getTime(), expected[ i ].value.getTime(), 'returns expected value' );
		t.equal( actual.done, expected[ i ].done, 'returns expected value' );
	}
	actual = it.next();
	t.deepEqual( actual, expected[ expected.length-1 ], 'returns expected values' );
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterDatespace( 0, 99, 100 );

	r = it.next();
	t.equal( isDateObject( r.value ), true, 'returns a Date object' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( isDateObject( r.value ), true, 'returns a Date object' );
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

	it = iterDatespace( 0, 99, 100 );

	r = it.next();
	t.equal( isDateObject( r.value), true, 'returns a Date object' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( isDateObject( r.value), true, 'returns a Date object' );
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
	var iterDatespace;
	var it1;
	var it2;
	var i;

	iterDatespace = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterDatespace( 0, 99, 100 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 100; i++ ) {
		t.equal( it2.next().value.getTime(), it1.next().value.getTime(), 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterDatespace;
	var it;

	iterDatespace = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterDatespace( 0, 99, 100 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
