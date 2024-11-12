/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var array2iterator = require( '@stdlib/array/to-iterator' );
var randu = require( '@stdlib/random/iter/randu' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var iterCuEvery = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterCuEvery, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator protocol-compliant object', function test( t ) {
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
			iterCuEvery( value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var arr;
	var it;
	var r;
	var i;

	arr = array2iterator( [ 0, 0, 1, 0, 1 ] );
	it = iterCuEvery( arr );
	for ( i = 0; i < 5; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'boolean', 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns expected value' );
	}
	t.equal( typeof r.done, 'boolean', 'returns expected value' );
	t.end();
});

tape( 'if no upstream iterator values are falsy, the function returns an iterator protocol-compliant object which returns all truthy values', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var i;

	values = [ 1, 1, 1, 1 ];
	expected = [
		{
			'value': true,
			'done': false
		},
		{
			'value': true,
			'done': false
		},
		{
			'value': true,
			'done': false
		},
		{
			'value': true,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterCuEvery( array2iterator( values ) );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if at least one upstream iterator value is falsy, the function returns an iterator protocol-compliant object which returns falsy values upon encountering the first falsy value', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var i;

	values = [ 1, 1, 0, 1 ];
	expected = [
		{
			'value': true,
			'done': false
		},
		{
			'value': true,
			'done': false
		},
		{
			'value': false,
			'done': false
		},
		{
			'value': false,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterCuEvery( array2iterator( values ) );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'if all upstream iterator values are falsy, the function returns an iterator protocol-compliant object which always returns falsy values upon encountering the first falsy value', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var i;

	values = [ 0, 0, 0, 0 ];
	expected = [
		{
			'value': false,
			'done': false
		},
		{
			'value': false,
			'done': false
		},
		{
			'value': false,
			'done': false
		},
		{
			'value': false,
			'done': false
		},
		{
			'done': true
		}
	];

	it = iterCuEvery( array2iterator( values ) );

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

	it = iterCuEvery( randu() );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
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

	it = iterCuEvery( randu() );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
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
	var iterCuEvery;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterCuEvery = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterCuEvery( rand );
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
	var iterCuEvery;
	var it;

	iterCuEvery = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterCuEvery( randu() );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterCuEvery;
	var rand;
	var it;

	iterCuEvery = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterCuEvery( rand );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
