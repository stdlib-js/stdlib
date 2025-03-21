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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var itercuprod = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof itercuprod, 'function', 'main export is a function' );
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			itercuprod( value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which iteratively computes a cumulative product', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var v;
	var i;

	values = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	expected = [ 2.0, 6.0, 12.0, 48.0, 144.0, 576.0 ];

	it = itercuprod( array2iterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		t.equal( typeof v.value, 'number', 'returns a number' );
		t.equal( typeof v.done, 'boolean', 'returns a boolean' );
		actual.push( v.value );
	}
	t.deepEqual( actual, expected, 'returns expected results' );

	v = it.next();
	t.equal( v.value, void 0, 'returns expected value' );
	t.equal( v.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an iterated value is a non-numeric value, the computed product is `NaN`', function test( t ) {
	var expected;
	var values;
	var it;
	var v;
	var i;

	values = [ 1.0, 2.0, NaN, 3.0 ];
	expected = [ 1.0, 2.0, NaN, NaN ];

	it = itercuprod( array2iterator( values ) );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v.value ), true, 'returns expected value for iteration '+i );
		} else {
			t.equal( v.value, expected[ i ], 'returns expected value for iteration '+i );
		}
	}

	values = [ 1.0, 2.0, 'beep', 3.0 ];
	expected = [ 1.0, 2.0, NaN, NaN ];

	it = itercuprod( array2iterator( values ) );

	for ( i = 0; i < values.length; i++ ) {
		v = it.next();
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v.value ), true, 'returns expected value for iteration '+i );
		} else {
			t.equal( v.value, expected[ i ], 'returns expected value for iteration '+i );
		}
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = itercuprod( randu() );

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

	it = itercuprod( randu() );

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
	var itercuprod;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	itercuprod = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = itercuprod( rand );
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
	var itercuprod;
	var it;

	itercuprod = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = itercuprod( randu() );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var itercuprod;
	var rand;
	var it;

	itercuprod = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = itercuprod( rand );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
