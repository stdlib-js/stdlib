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
var Stack = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Stack, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var s = new Stack();
	t.strictEqual( instanceOf( s, Stack ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor does not require the `new` keyword', function test( t ) {
	var stack;
	var s;

	stack = Stack;
	s = stack();
	t.strictEqual( instanceOf( s, Stack ), true, 'returns an instance' );
	t.end();
});

tape( 'the constructor returns a stack instance which has a `clear` method for removing all elements in the stack', function test( t ) {
	var s;

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	t.strictEqual( s.length, 4, 'returns expected value' );
	t.strictEqual( s.first(), 'boop', 'returns expected value' );
	t.strictEqual( s.last(), 'foo', 'returns expected value' );
	t.deepEqual( s.toArray(), [ 'boop', 'beep', 'bar', 'foo' ], 'returns expected value' );

	s.clear();

	t.strictEqual( s.length, 0, 'returns expected value' );
	t.strictEqual( s.first(), void 0, 'returns expected value' );
	t.strictEqual( s.last(), void 0, 'returns expected value' );
	t.deepEqual( s.toArray(), [], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `first` method for returning the top stack value', function test( t ) {
	var s;

	s = new Stack();
	t.strictEqual( s.first(), void 0, 'returns expected value' );

	s.push( 'foo' );
	t.strictEqual( s.first(), 'foo', 'returns expected value' );

	s.push( 'bar' );
	t.strictEqual( s.first(), 'bar', 'returns expected value' );

	s.pop();
	t.strictEqual( s.first(), 'foo', 'returns expected value' );

	s.pop();
	t.strictEqual( s.first(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has an `iterator` method which returns an iterator protocol-compliant object', function test( t ) {
	var it;
	var s;
	var v;
	var i;

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	it = s.iterator();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < s.length; i++ ) {
		v = it.next();
		t.strictEqual( typeof v.value, 'string', 'returns a string' );
		t.strictEqual( typeof v.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'a stack instance iterator allows for iterating over stack elements (stack snapshot)', function test( t ) {
	var len;
	var it;
	var s;
	var v;
	var i;

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	len = s.length;
	it = s.iterator();
	for ( i = 0; i < len; i++ ) {
		v = it.next();
		t.strictEqual( v.value, s.pop(), 'returns expected value' );
	}

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'a stack instance iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var s;
	var v;

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	it = s.iterator();

	v = it.next();
	t.strictEqual( v.value, 'boop', 'returns expected value' );
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

tape( 'a stack instance iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var s;
	var v;

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	it = s.iterator();

	v = it.next();
	t.strictEqual( v.value, 'boop', 'returns expected value' );
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

tape( 'if an environment supports `Symbol.iterator`, a stack instance iterator is iterable', function test( t ) {
	var Stack;
	var it1;
	var it2;
	var s;
	var i;

	Stack = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	it1 = s.iterator();
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

tape( 'if an environment does not support `Symbol.iterator`, a stack instance iterator is not "iterable"', function test( t ) {
	var Stack;
	var it;
	var s;

	Stack = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	s = new Stack();
	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	it = s.iterator();
	t.strictEqual( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `last` method for returning the bottom stack value', function test( t ) {
	var s;

	s = new Stack();
	t.strictEqual( s.last(), void 0, 'returns expected value' );

	s.push( 'foo' );
	t.strictEqual( s.last(), 'foo', 'returns expected value' );

	s.push( 'bar' );
	t.strictEqual( s.last(), 'foo', 'returns expected value' );

	s.pop();
	t.strictEqual( s.last(), 'foo', 'returns expected value' );

	s.pop();
	t.strictEqual( s.last(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `length` property which returns the number of elements in the stack', function test( t ) {
	var s;

	s = new Stack();
	t.strictEqual( s.length, 0, 'returns expected value' );

	s.push( 'foo' );
	t.strictEqual( s.length, 1, 'returns expected value' );

	s.push( 'bar' );
	t.strictEqual( s.length, 2, 'returns expected value' );

	s.pop();
	t.strictEqual( s.length, 1, 'returns expected value' );

	s.pop();
	t.strictEqual( s.length, 0, 'returns expected value' );

	s.push( 'foo' );
	t.strictEqual( s.length, 1, 'returns expected value' );

	s.pop();
	t.strictEqual( s.length, 0, 'returns expected value' );

	s.push( 'foo' );
	t.strictEqual( s.length, 1, 'returns expected value' );

	s.push( 'bar' );
	t.strictEqual( s.length, 2, 'returns expected value' );

	s.pop();
	t.strictEqual( s.length, 1, 'returns expected value' );

	s.pop();
	t.strictEqual( s.length, 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `pop` method for removing the top value from the stack', function test( t ) {
	var s;

	s = new Stack();
	t.strictEqual( s.pop(), void 0, 'returns expected value' );
	t.strictEqual( s.pop(), void 0, 'returns expected value' );
	t.strictEqual( s.pop(), void 0, 'returns expected value' );

	s.push( 'foo' );
	t.strictEqual( s.length, 1, 'returns expected value' );
	t.strictEqual( s.pop(), 'foo', 'returns expected value' );
	t.strictEqual( s.length, 0, 'returns expected value' );

	s.push( 'bar' );
	t.strictEqual( s.length, 1, 'returns expected value' );
	t.strictEqual( s.pop(), 'bar', 'returns expected value' );
	t.strictEqual( s.length, 0, 'returns expected value' );

	s.pop();
	t.strictEqual( s.pop(), void 0, 'returns expected value' );
	t.strictEqual( s.pop(), void 0, 'returns expected value' );
	t.strictEqual( s.pop(), void 0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `push` method for adding an element to the stack', function test( t ) {
	var s;

	s = new Stack();

	s.push( 'foo' );
	t.strictEqual( s.length, 1, 'returns expected value' );

	s.push( 'bar' );
	t.strictEqual( s.length, 2, 'returns expected value' );

	s.pop();
	s.pop();

	// Supports chaining:
	s.push( 'foo' ).push( 'bar' ).push( 'beep' ).push( 'boop' );
	t.strictEqual( s.length, 4, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `toArray` method for returning a list of stack elements', function test( t ) {
	var s;

	s = new Stack();

	t.deepEqual( s.toArray(), [], 'returns expected value' );

	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	t.deepEqual( s.toArray(), [ 'boop', 'beep', 'bar', 'foo' ], 'returns expected value' );

	s.clear();

	t.deepEqual( s.toArray(), [], 'returns expected value' );

	s.push( 'foo' );
	t.deepEqual( s.toArray(), [ 'foo' ], 'returns expected value' );

	t.end();
});

tape( 'the constructor returns a stack instance which has a `toJSON` method for serializing a stack as JSON', function test( t ) {
	var expected;
	var s;

	s = new Stack();

	expected = {
		'type': 'stack',
		'data': []
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s.push( 'foo' );
	s.push( 'bar' );
	s.push( 'beep' );
	s.push( 'boop' );

	expected = {
		'type': 'stack',
		'data': [ 'boop', 'beep', 'bar', 'foo' ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s.clear();

	expected = {
		'type': 'stack',
		'data': []
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	s.push( 'foo' );

	expected = {
		'type': 'stack',
		'data': [ 'foo' ]
	};
	t.deepEqual( s.toJSON(), expected, 'returns expected value' );

	t.end();
});
