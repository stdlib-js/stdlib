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
var proxyquire = require( 'proxyquire' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var real = require( '@stdlib/complex/float64/real' );
var imag = require( '@stdlib/complex/float64/imag' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var CircularBuffer = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof CircularBuffer, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided either a positive integer or an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
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
			return new CircularBuffer( value );
		};
	}
});

tape( 'the function is a constructor (size)', function test( t ) {
	var buf = new CircularBuffer( 3 );
	t.strictEqual( instanceOf( buf, CircularBuffer ), true, 'returns an instance' );
	t.end();
});

tape( 'the function is a constructor (buffer)', function test( t ) {
	var buf = new CircularBuffer( [ 0, 0, 0 ] );
	t.strictEqual( instanceOf( buf, CircularBuffer ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (size)', function test( t ) {
	var circularBuffer;
	var buf;

	circularBuffer = CircularBuffer;
	buf = circularBuffer( 3 );
	t.strictEqual( instanceOf( buf, CircularBuffer ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword (buffer)', function test( t ) {
	var circularBuffer;
	var buf;

	circularBuffer = CircularBuffer;
	buf = circularBuffer( [ 0, 0, 0 ] );
	t.strictEqual( instanceOf( buf, CircularBuffer ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `clear` method for removing all elements in the buffer', function test( t ) {
	var buf;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	t.strictEqual( buf.length, 3, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );
	t.deepEqual( buf.toArray(), [ 'bar', 'beep', 'boop' ], 'returns expected value' );

	buf.clear();

	t.strictEqual( buf.length, 3, 'returns expected value' );
	t.strictEqual( buf.count, 0, 'returns expected value' );
	t.deepEqual( buf.toArray(), [], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `full` property for determining whether a buffer is full', function test( t ) {
	var buf;

	buf = new CircularBuffer( 3 );
	t.strictEqual( buf.full, false, 'returns expected value' );

	buf.push( 'foo' );
	t.strictEqual( buf.full, false, 'returns expected value' );

	buf.push( 'bar' );
	t.strictEqual( buf.full, false, 'returns expected value' );

	buf.push( 'beep' );
	t.strictEqual( buf.full, true, 'returns expected value' );

	buf.push( 'boop' );
	t.strictEqual( buf.full, true, 'returns expected value' );

	buf.clear();
	t.strictEqual( buf.full, false, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a circular buffer instance which has an `iterator` method which throws if not provided a nonnegative integer', function test( t ) {
	var values;
	var buf;
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

	buf = new CircularBuffer( 3 );
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			buf.iterator( value );
		};
	}
});

tape( 'the constructor returns a circular buffer instance which has an `iterator` method which returns an iterator protocol-compliant object', function test( t ) {
	var buf;
	var it;
	var v;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it = buf.iterator();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		v = it.next();
		t.strictEqual( typeof v.value, 'string', 'returns a string' );
		t.strictEqual( v.done, false, 'returns expected value' );
	}
	t.end();
});

tape( 'the constructor returns a circular buffer instance which has an `iterator` method which supports limiting the number of iterations', function test( t ) {
	var buf;
	var it;
	var v;
	var i;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it = buf.iterator( buf.length );
	for ( i = 0; i < buf.length; i++ ) {
		v = it.next();
		t.strictEqual( typeof v.value, 'string', 'returns a string' );
		t.strictEqual( v.done, false, 'returns expected value' );
	}
	v = it.next();
	t.strictEqual( typeof v.value, 'undefined', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a returned iterator does not support iterating over a partially full buffer', function test( t ) {
	var buf;
	var it;
	var v;

	buf = new CircularBuffer( 10 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it = buf.iterator();

	v = it.next();
	t.strictEqual( typeof v.value, 'undefined', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a returned iterator does not support iterating over an empty or partially full buffer (after clear)', function test( t ) {
	var buf;
	var it;
	var v;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	buf.clear();

	it = buf.iterator();

	v = it.next();
	t.strictEqual( typeof v.value, 'undefined', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	// No recovery after invoking `next` even once a buffer is full:
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	v = it.next();
	t.strictEqual( typeof v.value, 'undefined', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	buf.clear();

	it = buf.iterator();

	// No iterating over a partially full buffer:
	buf.push( 'foo' );
	buf.push( 'bar' );

	v = it.next();
	t.strictEqual( typeof v.value, 'undefined', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a returned iterator does support iterating over a buffer which, while not full at creation, is full before `next` is invoked', function test( t ) {
	var buf;
	var it;
	var v;
	var i;

	buf = new CircularBuffer( 3 );

	it = buf.iterator();

	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	for ( i = 0; i < 100; i++ ) {
		v = it.next();
		t.strictEqual( typeof v.value, 'string', 'returns a string' );
		t.strictEqual( v.done, false, 'returns expected value' );
	}
	t.end();
});

tape( 'a circular buffer instance iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var buf;
	var it;
	var v;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it = buf.iterator();

	v = it.next();
	t.strictEqual( v.value, 'bar', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, 'beep', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.return();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a circular buffer instance iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var buf;
	var it;
	var v;

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it = buf.iterator();

	v = it.next();
	t.strictEqual( v.value, 'bar', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, 'beep', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.return( 'finished' );
	t.strictEqual( v.value, 'finished', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, a circular buffer instance iterator is iterable', function test( t ) {
	var CircularBuffer;
	var it1;
	var it2;
	var buf;
	var i;

	CircularBuffer = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it1 = buf.iterator();
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns an object' );
	t.strictEqual( typeof it2.next, 'function', 'has `next` method' );
	t.strictEqual( typeof it2.return, 'function', 'has `return` method' );

	for ( i = 0; i < 100; i++ ) {
		t.strictEqual( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, a circular buffer instance iterator is not "iterable"', function test( t ) {
	var CircularBuffer;
	var buf;
	var it;

	CircularBuffer = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	buf = new CircularBuffer( 3 );
	buf.push( 'foo' );
	buf.push( 'bar' );
	buf.push( 'beep' );
	buf.push( 'boop' );

	it = buf.iterator();
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `length` property which returns the buffer capacity (size)', function test( t ) {
	var buf = new CircularBuffer( 3 );
	t.strictEqual( buf.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `length` property which returns the buffer capacity (buffer)', function test( t ) {
	var buf = new CircularBuffer( [ 0, 0, 0 ] );
	t.strictEqual( buf.length, 3, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `push` method for adding an element to the buffer', function test( t ) {
	var buf;
	var v;

	buf = new CircularBuffer( 3 );

	v = buf.push( 'foo' );
	t.strictEqual( v, void 0, 'returns expected value' );
	t.strictEqual( buf.count, 1, 'returns expected value' );

	v = buf.push( 'bar' );
	t.strictEqual( v, void 0, 'returns expected value' );
	t.strictEqual( buf.count, 2, 'returns expected value' );

	v = buf.push( 'beep' );
	t.strictEqual( v, void 0, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( 'boop' );
	t.strictEqual( v, 'foo', 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( 'baz' );
	t.strictEqual( v, 'bar', 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( 'bap' );
	t.strictEqual( v, 'beep', 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( 'woo' );
	t.strictEqual( v, 'boop', 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `push` method for adding an element to the buffer (accessors)', function test( t ) {
	var buf;
	var v;

	buf = new CircularBuffer( new Complex128Array( 3 ) );

	v = buf.push( new Complex128( 1.0, 1.0 ) );
	t.strictEqual( v, void 0, 'returns expected value' );
	t.strictEqual( buf.count, 1, 'returns expected value' );

	v = buf.push( new Complex128( 2.0, 2.0 ) );
	t.strictEqual( v, void 0, 'returns expected value' );
	t.strictEqual( buf.count, 2, 'returns expected value' );

	v = buf.push( new Complex128( 3.0, 3.0 ) );
	t.strictEqual( v, void 0, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( new Complex128( 4.0, 4.0 ) );
	t.strictEqual( real( v ), 1.0, 'returns expected value' );
	t.strictEqual( imag( v ), 1.0, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( new Complex128( 5.0, 5.0 ) );
	t.strictEqual( real( v ), 2.0, 'returns expected value' );
	t.strictEqual( imag( v ), 2.0, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( new Complex128( 6.0, 6.0 ) );
	t.strictEqual( real( v ), 3.0, 'returns expected value' );
	t.strictEqual( imag( v ), 3.0, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	v = buf.push( new Complex128( 7.0, 7.0 ) );
	t.strictEqual( real( v ), 4.0, 'returns expected value' );
	t.strictEqual( imag( v ), 4.0, 'returns expected value' );
	t.strictEqual( buf.count, 3, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `toArray` method for returning a list of buffer elements', function test( t ) {
	var buf;

	buf = new CircularBuffer( 3 );

	t.deepEqual( buf.toArray(), [], 'returns expected value' );

	buf.push( 'foo' );
	t.deepEqual( buf.toArray(), [ 'foo' ], 'returns expected value' );

	buf.push( 'bar' );
	t.deepEqual( buf.toArray(), [ 'foo', 'bar' ], 'returns expected value' );

	buf.push( 'beep' );
	t.deepEqual( buf.toArray(), [ 'foo', 'bar', 'beep' ], 'returns expected value' );

	buf.push( 'boop' );
	t.deepEqual( buf.toArray(), [ 'bar', 'beep', 'boop' ], 'returns expected value' );

	buf.clear();

	t.deepEqual( buf.toArray(), [], 'returns expected value' );

	buf.push( 'foo' );
	t.deepEqual( buf.toArray(), [ 'foo' ], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a circular buffer instance which has a `toJSON` method for serializing a circular buffer as JSON', function test( t ) {
	var expected;
	var buf;

	buf = new CircularBuffer( 3 );

	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': []
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	buf.push( 'foo' );
	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': [ 'foo' ]
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	buf.push( 'bar' );
	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': [ 'foo', 'bar' ]
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	buf.push( 'beep' );
	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': [ 'foo', 'bar', 'beep' ]
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	buf.push( 'boop' );
	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': [ 'bar', 'beep', 'boop' ]
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	buf.clear();

	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': []
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	buf.push( 'foo' );
	expected = {
		'type': 'circular-buffer',
		'length': 3,
		'data': [ 'foo' ]
	};
	t.deepEqual( buf.toJSON(), expected, 'returns expected value' );

	t.end();
});
