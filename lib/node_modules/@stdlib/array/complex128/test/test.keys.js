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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var Complex128Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex128Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is a `keys` method', function test( t ) {
	t.strictEqual( hasOwnProp( Complex128Array.prototype, 'keys' ), true, 'has property' );
	t.strictEqual( isFunction( Complex128Array.prototype.keys ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a complex number array instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Complex128Array( 5 );

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
			return arr.keys.call( value );
		};
	}
});

tape( 'the method returns an iterator protocol-compliant object', function test( t ) {
	var expected;
	var arr;
	var it;
	var i;
	var r;
	var e;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0 ] );
	expected = [
		{
			'value': 0,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'done': true
		}
	];
	it = arr.keys();

	t.strictEqual( typeof it, 'object', 'returns an object' );
	t.strictEqual( typeof it.next, 'function', 'has next method' );

	for ( i = 0; i < expected.length; i++ ) {
		r = it.next();
		e = expected[ i ];
		if ( e.value === void 0 ) {
			t.deepEqual( r, e, 'returns expected value' );
		} else {
			t.strictEqual( r.value, e.value, 'returns expected value' );
			t.strictEqual( r.done, e.done, 'returns expected value' );
		}
	}

	t.end();
});

tape( 'the method returns an iterator which does not iterate over empty arrays', function test( t ) {
	var expected;
	var arr;
	var it;
	var i;
	var v;

	arr = new Complex128Array( [] );
	expected = [
		{
			'done': true
		},
		{
			'done': true
		},
		{
			'done': true
		}
	];
	it = arr.keys();

	t.strictEqual( typeof it, 'object', 'returns an object' );
	t.strictEqual( typeof it.next, 'function', 'has next method' );

	for ( i = 0; i < expected.length; i++ ) {
		v = it.next();
		t.deepEqual( v, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var arr;
	var it;
	var v;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	it = arr.keys();

	v = it.next();
	t.strictEqual( v.value, 0, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, 1, 'returns expected value' );
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

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var arr;
	var it;
	var v;

	arr = new Complex128Array( [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0 ] );
	it = arr.keys();

	v = it.next();
	t.strictEqual( v.value, 0, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, 1, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.return( 'beep' );
	t.strictEqual( v.value, 'beep', 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	v = it.next();
	t.strictEqual( v.value, void 0, 'returns expected value' );
	t.strictEqual( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the method returns an iterable', function test( t ) {
	var Complex128Array;
	var arr;
	var buf;
	var it1;
	var it2;
	var v1;
	var v2;
	var i;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	buf = [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ];
	arr = new Complex128Array( buf );

	it1 = arr.keys();
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns an object' );
	t.strictEqual( typeof it2.next, 'function', 'has `next` method' );
	t.strictEqual( typeof it2.return, 'function', 'has `return` method' );

	for ( i = 0; i < arr.length; i++ ) {
		v1 = it1.next().value;
		v2 = it2.next().value;
		t.strictEqual( v1, v2, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the method does not return an "iterable"', function test( t ) {
	var Complex128Array;
	var arr;
	var buf;
	var it;

	Complex128Array = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	buf = [ 1.0, -1.0, 2.0, -2.0, 3.0, -3.0, 4.0, -4.0 ];
	arr = new Complex128Array( buf );

	it = arr.keys();
	t.strictEqual( it[ ITERATOR_SYMBOL ], void 0, 'does not have property' );

	t.end();
});
