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
var array2iterator = require( '@stdlib/array/to-iterator' );
var noop = require( '@stdlib/utils/noop' );
var iterCuSomeBy = require( './../lib' );


// FUNCTIONS //

/**
* Predicate function.
*
* @private
* @param {*} value - value
* @returns {boolean} result
*/
function predicate( value ) {
	return ( value > 0 );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterCuSomeBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an iterator', function test( t ) {
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
			iterCuSomeBy( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer as a second argument', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterCuSomeBy( array2iterator( [ 1, 2, 3 ] ), value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function as a third argument', function test( t ) {
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
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterCuSomeBy( array2iterator( [ 1, 2, 3 ] ), 3, value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var arr;
	var it;
	var r;
	var i;

	arr = array2iterator( [ 0, 0, 1, 0, 1 ] );
	it = iterCuSomeBy( arr, 3, predicate );
	for ( i = 0; i < 5; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'boolean', 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns expected value' );
	}
	t.equal( typeof r.done, 'boolean', 'returns expected value' );
	t.end();
});

tape( 'if provided an "empty" iterator, the function returns an iterator which is also empty', function test( t ) {
	var arr;
	var it;
	var v;

	arr = array2iterator( [] );
	it = iterCuSomeBy( arr, 3, predicate );

	v = it.next();
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator which cumulatively tests whether at least `n` iterated values pass a test', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var i;

	values = [ 0, 0, 1, 1, 0, 0 ];
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

	it = iterCuSomeBy( array2iterator( values ), 2, predicate );

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function returns an iterator which cumulatively tests whether at least `n` iterated values pass a test', function test( t ) {
	var expected;
	var values;
	var it;
	var v;
	var i;

	values = [ 0, 0, 1, 1, 0, 1 ];
	expected = [ false, false, false, true, true, true ];

	it = iterCuSomeBy( array2iterator( values ), 2, predicate );
	t.equal( typeof it.next, 'function', 'has next method' );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( v.value, expected[i], 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	v = it.next();
	t.equal( v.value, undefined, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	values = [ 0, 0, 1, 1, 0, 1 ];
	expected = [ false, false, false, false, false, true ];

	it = iterCuSomeBy( array2iterator( values ), 3, predicate );
	t.equal( typeof it.next, 'function', 'has next method' );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( v.value, expected[i], 'returns expected value' );
		t.equal( v.done, false, 'returns expected value' );
	}
	v = it.next();
	t.equal( v.value, undefined, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();

	function predicate( v ) {
		return ( v > 0 );
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterCuSomeBy( array2iterator( [ 1, 1, 1, 0, 0 ] ), 3, predicate );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns a boolean' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns a boolean' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns expected value' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function predicate( v ) {
		return ( v > 0 );
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterCuSomeBy( array2iterator( [ 1, 1, 1, 0, 0 ] ), 3, predicate );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns a boolean' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'boolean', 'returns a boolean' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function predicate( v ) {
		return ( v > 0 );
	}
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var iterCuSomeBy;
	var it1;
	var it2;
	var i;

	iterCuSomeBy = require( './../lib' );

	it1 = iterCuSomeBy( array2iterator( [ 1, 1, 0, 0, 1 ] ), 3, predicate );
	t.equal( typeof it1[ Symbol.iterator ], 'function', 'has method' );

	it2 = it1[ Symbol.iterator ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 6; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();

	function predicate( v ) {
		return ( v > 0 );
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var it;
	var i;

	ctx = {
		'count': 0
	};

	it = iterCuSomeBy( array2iterator( [ 1, 1, 0, 1, 1 ] ), 3, predicate, ctx );
	for ( i = 0; i < 5; i++ ) {
		it.next();
	}

	t.strictEqual( ctx.count, 4, 'returns expected value' );
	t.end();

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v > 0 );
	}
});
