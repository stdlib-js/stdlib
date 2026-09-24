/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var proxyquire = require( 'proxyquire' );
var tape = require( 'tape' );
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var isArray = require( '@stdlib/assert/is-array' );
var isFunction = require( '@stdlib/assert/is-function' );
var isUint64 = require( '@stdlib/assert/is-uint64' );
var isEqual = require( '@stdlib/number/uint64/base/assert/is-equal' );
var ITERATOR_SYMBOL = require( '@stdlib/symbol/iterator' );
var Uint64 = require( '@stdlib/number/uint64/ctor' );
var Uint64Array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Uint64Array, 'function', 'main export is a function' );
	t.end();
});

tape( 'attached to the prototype of the main export is an `entries` method for returning an iterator for iterating over array key-value pairs', function test( t ) {
	t.strictEqual( hasOwnProp( Uint64Array.prototype, 'entries' ), true, 'has property' );
	t.strictEqual( isFunction( Uint64Array.prototype.entries ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a 64-bit unsigned integer instance', function test( t ) {
	var values;
	var arr;
	var i;

	arr = new Uint64Array( 5 );

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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return arr.entries.call( value );
		};
	}
});

tape( 'the method returns an iterator protocol-compliant object', function test( t ) {
	var buf;
	var arr;
	var it;
	var v;
	var i;

	buf = [
		new Uint64( 1 ),
		new Uint64( 2 ),
		new Uint64( 3 ),
		new Uint64( 4 )
	];
	arr = new Uint64Array( buf );

	it = arr.entries();
	t.strictEqual( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < arr.length; i++ ) {
		v = it.next();
		t.strictEqual( isArray( v.value ), true, 'returns expected value' );
		t.strictEqual( v.value[ 0 ], i, 'returns an index' );
		t.strictEqual( isUint64( v.value[ 1 ] ), true, 'returns a 64-bit unsigned integer' );
		t.strictEqual( isEqual( v.value[ 1 ], buf[ i ] ), true, 'returns expected value' );
		t.strictEqual( typeof v.done, 'boolean', 'returns expected value' );
	}
	t.end();
});

tape( 'the method returns an iterator which has a `return` method for closing an iterator (no argument)', function test( t ) {
	var buf;
	var arr;
	var it;
	var v;

	buf = [
		new Uint64( 1 ),
		new Uint64( 2 ),
		new Uint64( 3 ),
		new Uint64( 4 )
	];
	arr = new Uint64Array( buf );

	it = arr.entries();

	v = it.next();
	t.strictEqual( isEqual( v.value[ 1 ], buf[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( isEqual( v.value[ 1 ], buf[ 1 ] ), true, 'returns expected value' );
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

tape( 'the method returns an iterator which has a `return` method for closing an iterator (argument)', function test( t ) {
	var buf;
	var arr;
	var it;
	var v;

	buf = [
		new Uint64( 1 ),
		new Uint64( 2 ),
		new Uint64( 3 ),
		new Uint64( 4 )
	];
	arr = new Uint64Array( buf );

	it = arr.entries();

	v = it.next();
	t.strictEqual( isEqual( v.value[ 1 ], buf[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.next();
	t.strictEqual( isEqual( v.value[ 1 ], buf[ 1 ] ), true, 'returns expected value' );
	t.strictEqual( v.done, false, 'returns expected value' );

	v = it.return( 'finished' );
	t.strictEqual( v.value, 'finished', 'returns expected value' );
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

tape( 'if an environment supports `Symbol.iterator`, the method returns an iterable', function test( t ) {
	var Uint64Array;
	var arr;
	var buf;
	var it1;
	var it2;
	var v1;
	var v2;
	var i;

	Uint64Array = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	buf = [
		new Uint64( 1 ),
		new Uint64( 2 ),
		new Uint64( 3 ),
		new Uint64( 4 )
	];
	arr = new Uint64Array( buf );

	it1 = arr.entries();
	t.strictEqual( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.strictEqual( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.strictEqual( typeof it2, 'object', 'returns expected value' );
	t.strictEqual( typeof it2.next, 'function', 'has `next` method' );
	t.strictEqual( typeof it2.return, 'function', 'has `return` method' );

	for ( i = 0; i < arr.length; i++ ) {
		v1 = it1.next().value;
		v2 = it2.next().value;
		t.strictEqual( isEqual( v1[ 0 ], v2[ 0 ] ), true, 'returns expected value' );
		t.strictEqual( isEqual( v1[ 1 ], v2[ 1 ] ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the method does not return an "iterable"', function test( t ) {
	var Uint64Array;
	var arr;
	var buf;
	var it;

	Uint64Array = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	buf = [
		new Uint64( 1 ),
		new Uint64( 2 ),
		new Uint64( 3 ),
		new Uint64( 4 )
	];
	arr = new Uint64Array( buf );

	it = arr.entries();
	t.strictEqual( it[ ITERATOR_SYMBOL ], void 0, 'does not have property' );

	t.end();
});
