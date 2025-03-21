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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var FIFO = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof FIFO, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var q = new FIFO();
	t.strictEqual( instanceOf( q, FIFO ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var fifo;
	var q;

	fifo = FIFO;
	q = fifo();
	t.strictEqual( instanceOf( q, FIFO ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a queue instance which has a `clear` method for removing all elements in the queue', function test( t ) {
	var q;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	t.strictEqual( q.length, 4, 'returns expected value' );
	t.strictEqual( q.first(), 'foo', 'returns expected value' );
	t.strictEqual( q.last(), 'boop', 'returns expected value' );
	t.deepEqual( q.toArray(), [ 'foo', 'bar', 'beep', 'boop' ], 'returns expected value' );

	q.clear();

	t.strictEqual( q.length, 0, 'returns expected value' );
	t.strictEqual( q.first(), void 0, 'returns expected value' );
	t.strictEqual( q.last(), void 0, 'returns expected value' );
	t.deepEqual( q.toArray(), [], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `first` method for returning the "oldest" queue value', function test( t ) {
	var q;

	q = new FIFO();
	t.strictEqual( q.first(), void 0, 'returns expected value' );

	q.push( 'foo' );
	t.strictEqual( q.first(), 'foo', 'returns expected value' );

	q.push( 'bar' );
	t.strictEqual( q.first(), 'foo', 'returns expected value' );

	q.pop();
	t.strictEqual( q.first(), 'bar', 'returns expected value' );

	q.pop();
	t.strictEqual( q.first(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has an `iterator` method which returns an iterator protocol-compliant object', function test( t ) {
	var it;
	var q;
	var v;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	it = q.iterator();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < q.length; i++ ) {
		v = it.next();
		t.strictEqual( typeof v.value, 'string', 'returns a string' );
		t.strictEqual( typeof v.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'a queue instance iterator allows for iterating over queue elements (queue snapshot)', function test( t ) {
	var len;
	var it;
	var q;
	var v;
	var i;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	len = q.length;
	it = q.iterator();
	for ( i = 0; i < len; i++ ) {
		v = it.next();
		t.strictEqual( v.value, q.pop(), 'returns expected value' );
	}

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a queue instance iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var q;
	var v;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	it = q.iterator();

	v = it.next();
	t.strictEqual( v.value, 'foo', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, 'bar', 'returns expected value' );
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

tape( 'a queue instance iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var q;
	var v;

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	it = q.iterator();

	v = it.next();
	t.strictEqual( v.value, 'foo', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, 'bar', 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.return( 'finished' );
	t.strictEqual( v.value, 'finished', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, a queue instance iterator is iterable', function test( t ) {
	var FIFO;
	var it1;
	var it2;
	var q;
	var i;

	FIFO = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	it1 = q.iterator();
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

tape( 'if an environment does not support `Symbol.iterator`, a queue instance iterator is not "iterable"', function test( t ) {
	var FIFO;
	var it;
	var q;

	FIFO = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	q = new FIFO();
	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	it = q.iterator();
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `last` method for returning the "newest" queue value', function test( t ) {
	var q;

	q = new FIFO();
	t.strictEqual( q.last(), void 0, 'returns expected value' );

	q.push( 'foo' );
	t.strictEqual( q.last(), 'foo', 'returns expected value' );

	q.push( 'bar' );
	t.strictEqual( q.last(), 'bar', 'returns expected value' );

	q.pop();
	t.strictEqual( q.last(), 'bar', 'returns expected value' );

	q.pop();
	t.strictEqual( q.last(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `length` property which returns the number of elements in the queue', function test( t ) {
	var q;

	q = new FIFO();
	t.strictEqual( q.length, 0, 'returns expected value' );

	q.push( 'foo' );
	t.strictEqual( q.length, 1, 'returns expected value' );

	q.push( 'bar' );
	t.strictEqual( q.length, 2, 'returns expected value' );

	q.pop();
	t.strictEqual( q.length, 1, 'returns expected value' );

	q.pop();
	t.strictEqual( q.length, 0, 'returns expected value' );

	q.push( 'foo' );
	t.strictEqual( q.length, 1, 'returns expected value' );

	q.pop();
	t.strictEqual( q.length, 0, 'returns expected value' );

	q.push( 'foo' );
	t.strictEqual( q.length, 1, 'returns expected value' );

	q.push( 'bar' );
	t.strictEqual( q.length, 2, 'returns expected value' );

	q.pop();
	t.strictEqual( q.length, 1, 'returns expected value' );

	q.pop();
	t.strictEqual( q.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `pop` method for removing the "oldest" item from the queue', function test( t ) {
	var q;

	q = new FIFO();
	t.strictEqual( q.pop(), void 0, 'returns expected value' );
	t.strictEqual( q.pop(), void 0, 'returns expected value' );
	t.strictEqual( q.pop(), void 0, 'returns expected value' );

	q.push( 'foo' );
	t.strictEqual( q.length, 1, 'returns expected value' );
	t.strictEqual( q.pop(), 'foo', 'returns expected value' );
	t.strictEqual( q.length, 0, 'returns expected value' );

	q.push( 'bar' );
	t.strictEqual( q.length, 1, 'returns expected value' );
	t.strictEqual( q.pop(), 'bar', 'returns expected value' );
	t.strictEqual( q.length, 0, 'returns expected value' );

	q.pop();
	t.strictEqual( q.pop(), void 0, 'returns expected value' );
	t.strictEqual( q.pop(), void 0, 'returns expected value' );
	t.strictEqual( q.pop(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `push` method for adding an element to the queue', function test( t ) {
	var q;

	q = new FIFO();

	q.push( 'foo' );
	t.strictEqual( q.length, 1, 'returns expected value' );

	q.push( 'bar' );
	t.strictEqual( q.length, 2, 'returns expected value' );

	q.pop();
	q.pop();

	// Supports chaining:
	q.push( 'foo' ).push( 'bar' ).push( 'beep' ).push( 'boop' );
	t.strictEqual( q.length, 4, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `toArray` method for returning a list of queue elements', function test( t ) {
	var q;

	q = new FIFO();

	t.deepEqual( q.toArray(), [], 'returns expected value' );

	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	t.deepEqual( q.toArray(), [ 'foo', 'bar', 'beep', 'boop' ], 'returns expected value' );

	q.clear();

	t.deepEqual( q.toArray(), [], 'returns expected value' );

	q.push( 'foo' );
	t.deepEqual( q.toArray(), [ 'foo' ], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a queue instance which has a `toJSON` method for serializing a queue as JSON', function test( t ) {
	var expected;
	var q;

	q = new FIFO();

	expected = {
		'type': 'fifo',
		'data': []
	};
	t.deepEqual( q.toJSON(), expected, 'returns expected value' );

	q.push( 'foo' );
	q.push( 'bar' );
	q.push( 'beep' );
	q.push( 'boop' );

	expected = {
		'type': 'fifo',
		'data': [ 'foo', 'bar', 'beep', 'boop' ]
	};
	t.deepEqual( q.toJSON(), expected, 'returns expected value' );

	q.clear();

	expected = {
		'type': 'fifo',
		'data': []
	};
	t.deepEqual( q.toJSON(), expected, 'returns expected value' );

	q.push( 'foo' );

	expected = {
		'type': 'fifo',
		'data': [ 'foo' ]
	};
	t.deepEqual( q.toJSON(), expected, 'returns expected value' );

	t.end();
});
