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
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var iterConstant = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterConstant, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
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
			iterConstant( 3.14, value );
		};
	}
});

tape( 'the function throws an error if provided an `iter` option which is not a nonnegative integer', function test( t ) {
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
			iterConstant( 3.14, {
				'iter': value
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which always returns the same value (primitive)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

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
			'value': 3.14,
			'done': false
		}
	];

	it = iterConstant( 3.14 );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

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

	opts = {
		'iter': 4
	};
	it = iterConstant( 3.14, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if provided an object reference, the function returns an iterator protocol-compliant object which always returns the same reference', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var v;
	var i;

	v = [ 1, 2, 3, 4 ];
	expected = [
		{
			'value': v,
			'done': false
		},
		{
			'value': v,
			'done': false
		},
		{
			'value': v,
			'done': false
		},
		{
			'value': v,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 4
	};
	it = iterConstant( v, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
		t.equal( actual[ i ].value, v, 'returns expected value' );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterConstant( 3.14 );

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

	it = iterConstant( 3.14 );

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
	var iterConstant;
	var it1;
	var it2;
	var i;

	iterConstant = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterConstant( 3.14 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 10; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterConstant;
	var it;

	iterConstant = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterConstant( 3.14 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
