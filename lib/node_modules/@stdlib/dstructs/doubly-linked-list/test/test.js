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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var DoublyLinkedList = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof DoublyLinkedList, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var list = new DoublyLinkedList();
	t.strictEqual( instanceOf( list, DoublyLinkedList ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var linkedList;
	var list;

	linkedList = DoublyLinkedList;
	list = linkedList();
	t.strictEqual( instanceOf( list, DoublyLinkedList ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a linked list instance which has a `clear` method for removing all elements in the list', function test( t ) {
	var list;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	t.strictEqual( list.length, 4, 'returns expected value' );
	t.strictEqual( list.first().value, 'foo', 'returns expected value' );
	t.strictEqual( list.last().value, 'boop', 'returns expected value' );
	t.deepEqual( list.toArray(), [ 'foo', 'bar', 'beep', 'boop' ], 'returns expected value' );

	list.clear();

	t.strictEqual( list.length, 0, 'returns expected value' );
	t.strictEqual( list.first(), void 0, 'returns expected value' );
	t.strictEqual( list.last(), void 0, 'returns expected value' );
	t.deepEqual( list.toArray(), [], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a linked list instance which has a `first` method for returning the first list node', function test( t ) {
	var list;

	list = new DoublyLinkedList();
	t.strictEqual( list.first(), void 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.first().value, 'foo', 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.first().value, 'foo', 'returns expected value' );

	list.pop();
	t.strictEqual( list.first().value, 'foo', 'returns expected value' );

	list.pop();
	t.strictEqual( list.first(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has an `insert` method which throws an error if provided an unrecognized/unsupported location argument', function test( t ) {
	var values;
	var list;
	var i;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	values = [
		'5',
		'beep',
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
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			list.insert( list.first(), 'baz', value );
		};
	}
});

tape( 'the constructor returns a list instance which has an `insert` method which throws an error if provided a node which is not in the list', function test( t ) {
	var list;
	var n;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	n = list.first().next;
	list.remove( n );

	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		list.insert( n, 'bop' );
	}
});

tape( 'the constructor returns a list instance which has an `insert` method for inserting a value into the list', function test( t ) {
	var expected;
	var list;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.insert( list.first(), 'bar' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	// Supports chaining:
	list.insert( list.first(), 'beep' )
		.insert( list.first().next, 'boop' )
		.insert( list.last(), 'bop' );

	t.strictEqual( list.length, 5, 'returns expected value' );

	expected = [
		'foo',
		'beep',
		'boop',
		'bar',
		'bop'
	];
	t.deepEqual( list.toArray(), expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has an `insert` method for inserting a value into the list after a provided node (location="after")', function test( t ) {
	var expected;
	var list;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	// Equivalent to `push`:
	list.insert( list.first(), 'bar', 'after' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	// Supports chaining:
	list.insert( list.first(), 'beep', 'after' )
		.insert( list.first().next, 'boop', 'after' )
		.insert( list.last(), 'bop', 'after' );

	t.strictEqual( list.length, 5, 'returns expected value' );

	expected = [
		'foo',
		'beep',
		'boop',
		'bar',
		'bop'
	];
	t.deepEqual( list.toArray(), expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has an `insert` method for inserting a value into the list before a provided node (location="before")', function test( t ) {
	var expected;
	var list;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	// Equivalent to `unshift`:
	list.insert( list.first(), 'bar', 'before' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	// Supports chaining:
	list.insert( list.first(), 'beep', 'before' )
		.insert( list.first().next, 'boop', 'before' )
		.insert( list.last(), 'bop', 'before' );

	t.strictEqual( list.length, 5, 'returns expected value' );

	expected = [
		'beep',
		'boop',
		'bar',
		'bop',
		'foo'
	];
	t.deepEqual( list.toArray(), expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has an `iterator` method which throws an error if provided an unrecognized/unsupported direction argument', function test( t ) {
	var values;
	var list;
	var i;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	values = [
		'5',
		'beep',
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
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			list.iterator( value );
		};
	}
});

tape( 'the constructor returns a linked list instance which has an `iterator` method which returns an iterator protocol-compliant object', function test( t ) {
	var list;
	var it;
	var v;
	var i;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	it = list.iterator();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < list.length; i++ ) {
		v = it.next();
		t.strictEqual( typeof v.value, 'string', 'returns a string' );
		t.strictEqual( typeof v.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'a linked list instance iterator allows for iterating over list elements (list snapshot)', function test( t ) {
	var list;
	var len;
	var it;
	var v;
	var i;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	len = list.length;
	it = list.iterator();
	for ( i = 0; i < len; i++ ) {
		v = it.next();
		t.strictEqual( v.value, list.shift(), 'returns expected value' );
	}

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a linked list instance iterator allows for iterating over list elements (snapshot, direction="forward")', function test( t ) {
	var list;
	var len;
	var it;
	var v;
	var i;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	len = list.length;
	it = list.iterator( 'forward' );
	for ( i = 0; i < len; i++ ) {
		v = it.next();
		t.strictEqual( v.value, list.shift(), 'returns expected value' );
	}

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a linked list instance iterator allows for iterating over list elements (snapshot, direction="reverse")', function test( t ) {
	var list;
	var len;
	var it;
	var v;
	var i;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	len = list.length;
	it = list.iterator( 'reverse' );
	for ( i = 0; i < len; i++ ) {
		v = it.next();
		t.strictEqual( v.value, list.pop(), 'returns expected value' );
	}

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a linked list instance iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var list;
	var it;
	var v;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	it = list.iterator();

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

tape( 'a linked list instance iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var list;
	var it;
	var v;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	it = list.iterator();

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

tape( 'if an environment supports `Symbol.iterator`, a list instance iterator is iterable', function test( t ) {
	var DoublyLinkedList;
	var list;
	var it1;
	var it2;
	var i;

	DoublyLinkedList = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	it1 = list.iterator();
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

tape( 'if an environment does not support `Symbol.iterator`, a linked list instance iterator is not "iterable"', function test( t ) {
	var DoublyLinkedList;
	var list;
	var it;

	DoublyLinkedList = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	it = list.iterator();
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'the constructor returns a linked list instance which has a `last` method for returning the last list node', function test( t ) {
	var list;

	list = new DoublyLinkedList();
	t.strictEqual( list.last(), void 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.last().value, 'foo', 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.last().value, 'bar', 'returns expected value' );

	list.pop();
	t.strictEqual( list.last().value, 'foo', 'returns expected value' );

	list.pop();
	t.strictEqual( list.last(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a linked list instance which has a `length` property which returns the number of elements in the list', function test( t ) {
	var list;

	list = new DoublyLinkedList();
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	list.pop();
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.pop();
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.pop();
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	list.pop();
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.pop();
	t.strictEqual( list.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a linked list instance which has a `pop` method for removing the last value from the list', function test( t ) {
	var list;

	list = new DoublyLinkedList();
	t.strictEqual( list.pop(), void 0, 'returns expected value' );
	t.strictEqual( list.pop(), void 0, 'returns expected value' );
	t.strictEqual( list.pop(), void 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );
	t.strictEqual( list.pop(), 'foo', 'returns expected value' );
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.length, 1, 'returns expected value' );
	t.strictEqual( list.pop(), 'bar', 'returns expected value' );
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.pop();
	t.strictEqual( list.pop(), void 0, 'returns expected value' );
	t.strictEqual( list.pop(), void 0, 'returns expected value' );
	t.strictEqual( list.pop(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has a `push` method for adding an element to the end of the list', function test( t ) {
	var list;
	var v;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	v = list.pop();
	t.strictEqual( v, 'bar', 'returns expected value' );

	v = list.pop();
	t.strictEqual( v, 'foo', 'returns expected value' );

	// Supports chaining:
	list.push( 'foo' ).push( 'bar' ).push( 'beep' ).push( 'boop' );
	t.strictEqual( list.length, 4, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has a `remove` method for removing a node from the list', function test( t ) {
	var list;
	var n;
	var v;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	n = list.first();
	v = list.remove( n );
	t.strictEqual( list.length, 0, 'returns expected value' );
	t.strictEqual( v, 'foo', 'returns expected value' );

	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );
	t.strictEqual( list.length, 4, 'returns expected value' );

	n = list.first().next;
	v = list.remove( n );
	t.strictEqual( list.length, 3, 'returns expected value' );
	t.strictEqual( v, 'bar', 'returns expected value' );

	n = list.last();
	v = list.remove( n );
	t.strictEqual( list.length, 2, 'returns expected value' );
	t.strictEqual( v, 'boop', 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has a `remove` method which throws an error if provided a node which is not in the list', function test( t ) {
	var list;
	var n;

	list = new DoublyLinkedList();

	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	n = list.last();
	list.pop();

	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		list.remove( n );
	}
});

tape( 'the constructor returns a linked list instance which has a `shift` method for removing the first value from the list', function test( t ) {
	var list;

	list = new DoublyLinkedList();
	t.strictEqual( list.shift(), void 0, 'returns expected value' );
	t.strictEqual( list.shift(), void 0, 'returns expected value' );
	t.strictEqual( list.shift(), void 0, 'returns expected value' );

	list.push( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );
	t.strictEqual( list.shift(), 'foo', 'returns expected value' );
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.push( 'bar' );
	t.strictEqual( list.length, 1, 'returns expected value' );
	t.strictEqual( list.shift(), 'bar', 'returns expected value' );
	t.strictEqual( list.length, 0, 'returns expected value' );

	list.shift();
	t.strictEqual( list.shift(), void 0, 'returns expected value' );
	t.strictEqual( list.shift(), void 0, 'returns expected value' );
	t.strictEqual( list.shift(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a linked list instance which has a `toArray` method for returning a list of list elements', function test( t ) {
	var list;

	list = new DoublyLinkedList();

	t.deepEqual( list.toArray(), [], 'returns expected value' );

	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	t.deepEqual( list.toArray(), [ 'foo', 'bar', 'beep', 'boop' ], 'returns expected value' );

	list.clear();

	t.deepEqual( list.toArray(), [], 'returns expected value' );

	list.push( 'foo' );
	t.deepEqual( list.toArray(), [ 'foo' ], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a linked list instance which has a `toJSON` method for serializing a list as JSON', function test( t ) {
	var expected;
	var list;

	list = new DoublyLinkedList();

	expected = {
		'type': 'doubly-linked-list',
		'data': []
	};
	t.deepEqual( list.toJSON(), expected, 'returns expected value' );

	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	expected = {
		'type': 'doubly-linked-list',
		'data': [ 'foo', 'bar', 'beep', 'boop' ]
	};
	t.deepEqual( list.toJSON(), expected, 'returns expected value' );

	list.clear();

	expected = {
		'type': 'doubly-linked-list',
		'data': []
	};
	t.deepEqual( list.toJSON(), expected, 'returns expected value' );

	list.push( 'foo' );

	expected = {
		'type': 'doubly-linked-list',
		'data': [ 'foo' ]
	};
	t.deepEqual( list.toJSON(), expected, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a list instance which has an `unshift` method for adding an element to the beginning of the list', function test( t ) {
	var list;
	var v;

	list = new DoublyLinkedList();

	list.unshift( 'foo' );
	t.strictEqual( list.length, 1, 'returns expected value' );

	list.unshift( 'bar' );
	t.strictEqual( list.length, 2, 'returns expected value' );

	v = list.pop();
	t.strictEqual( v, 'foo', 'returns expected value' );

	v = list.pop();
	t.strictEqual( v, 'bar', 'returns expected value' );

	// Supports chaining:
	list.unshift( 'foo' ).unshift( 'bar' ).unshift( 'beep' ).unshift( 'boop' );
	t.strictEqual( list.length, 4, 'returns expected value' );

	t.end();
});

tape( 'list nodes have `next` and `prev` properties for traversing a linked list', function test( t ) {
	var list;
	var n;

	list = new DoublyLinkedList();
	list.push( 'foo' );
	list.push( 'bar' );
	list.push( 'beep' );
	list.push( 'boop' );

	n = list.first();
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( n.prev, null, 'returns expected value' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'foo', 'has property' );

	n = n.next;
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'bar', 'has property' );

	n = n.next;
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'beep', 'has property' );

	n = n.next;
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( n.next, null, 'returns expected value' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'boop', 'has property' );

	n = list.last();
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( n.next, null, 'returns expected value' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'boop', 'has property' );

	n = n.prev;
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'beep', 'has property' );

	n = n.prev;
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'bar', 'has property' );

	n = n.prev;
	t.strictEqual( hasOwnProp( n, 'next' ), true, 'has property' );
	t.strictEqual( hasOwnProp( n, 'prev' ), true, 'has property' );
	t.strictEqual( n.prev, null, 'returns expected value' );
	t.strictEqual( hasOwnProp( n, 'value' ), true, 'has property' );
	t.strictEqual( n.value, 'foo', 'has property' );

	t.end();
});
