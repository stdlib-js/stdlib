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
var iterStrided = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterStrided, 'function', 'main export is a function' );
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
			iterStrided( value, 10 );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (three arguments)', function test( t ) {
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
			iterStrided( value, 10, 2 );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator protocol-compliant object (four arguments)', function test( t ) {
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
			iterStrided( value, 10, 2, true );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a positive integer', function test( t ) {
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
			iterStrided( randu(), value );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a positive integer (three arguments)', function test( t ) {
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
			iterStrided( randu(), value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a positive integer (four arguments)', function test( t ) {
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
			iterStrided( randu(), value, 2, true );
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
		true,
		false,
		NaN,
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
			iterStrided( randu(), 10, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not a nonnegative integer (eager argument)', function test( t ) {
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
			iterStrided( randu(), 10, value, true );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not a boolean', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
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
			iterStrided( randu(), 10, 2, value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var it;
	var r;
	var i;

	it = iterStrided( randu(), 10 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which steps by a specified amount', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	expected = [
		{
			'value': 1,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'value': 5,
			'done': false
		},
		{
			'value': 7,
			'done': true
		}
	];

	it = iterStrided( array2iterator( values ), 2 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ].value, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	expected = [
		{
			'value': 2,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 6,
			'done': false
		},
		{
			'value': 8,
			'done': true
		}
	];

	it = iterStrided( array2iterator( values ), 2, 1 );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ].value, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an offset (offset > iterator length', function test( t ) {
	var values;
	var it;
	var r;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

	it = iterStrided( array2iterator( values ), 2, values.length+10 );
	t.equal( it.next.length, 0, 'has zero arity' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to eagerly advance the input iterator when provided a non-zero offset', function test( t ) {
	var expected;
	var values;
	var it;
	var r;
	var i;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	expected = [
		{
			'value': 2,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 6,
			'done': false
		},
		{
			'value': 8,
			'done': true
		}
	];

	it = iterStrided( array2iterator( values ), 2, 1, true );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		t.equal( r.value, expected[ i ].value, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying whether to eagerly advance the input iterator when provided a non-zero offset (offset > iterator length)', function test( t ) {
	var values;
	var it;
	var r;

	values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

	it = iterStrided( array2iterator( values ), 2, values.length+10, true );
	t.equal( it.next.length, 0, 'has zero arity' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterStrided( randu(), 10 );

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

	it = iterStrided( randu(), 10 );

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
	var iterStrided;
	var it1;
	var it2;
	var arr;
	var src;
	var i;

	iterStrided = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	src = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	arr = array2iterator( src );
	arr[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterStrided( arr, 1 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < src.length; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return array2iterator( src );
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable (stride)', function test( t ) {
	var iterStrided;
	var it1;
	var it2;
	var arr;
	var src;
	var i;

	iterStrided = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	src = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	arr = array2iterator( src );
	arr[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterStrided( arr, 2 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < src.length/2; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return array2iterator( src );
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable (stride+offset)', function test( t ) {
	var iterStrided;
	var it1;
	var it2;
	var arr;
	var src;
	var i;

	iterStrided = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	src = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	arr = array2iterator( src );
	arr[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterStrided( arr, 2, 1 );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < src.length/2; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return array2iterator( src );
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable (stride+offset+eager)', function test( t ) {
	var iterStrided;
	var it1;
	var it2;
	var arr;
	var src;
	var i;

	iterStrided = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	src = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	arr = array2iterator( src );
	arr[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterStrided( arr, 2, 1, true );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < src.length/2; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function factory() {
		return array2iterator( src );
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterStrided;
	var it;

	iterStrided = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterStrided( randu(), 10 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterStrided;
	var rand;
	var it;

	iterStrided = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterStrided( rand, 10 );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
