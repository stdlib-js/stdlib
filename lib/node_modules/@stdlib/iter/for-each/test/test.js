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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var randu = require( '@stdlib/random/iter/randu' );
var iteratorSymbol = require( '@stdlib/symbol/iterator' );
var noop = require( '@stdlib/utils/noop' );
var iterForEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterForEach, 'function', 'main export is a function' );
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
			iterForEach( value, noop );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a function', function test( t ) {
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
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterForEach( randu(), value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var count;
	var it;
	var r;
	var i;

	it = iterForEach( randu(), assert );
	t.equal( it.next.length, 0, 'has zero arity' );

	count = 0;
	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.equal( count, 100, 'returns expected value' );
	t.end();

	function assert( v, i ) {
		count += 1;
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});

tape( 'the function returns an iterator protocol-compliant object which invokes a provided function for each iterated value before returning the iterated value', function test( t ) {
	var expected;
	var opts;
	var rand;
	var it;
	var r;
	var i;

	opts = {
		'iter': 10
	};
	rand = randu( opts );
	it = iterForEach( rand, assert );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [];
	for ( i = 0; i < opts.iter; i++ ) {
		r = it.next();
		t.equal( i, expected[ i ][ 1 ], 'provides expected value' );
		t.equal( r.value, expected[ i ][ 0 ], 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.equal( expected.length, opts.iter, 'has expected length' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();

	function assert( v, i ) {
		expected.push( [ v, i ] );
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterForEach( randu(), assert );

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

	function assert( v, i ) {
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterForEach( randu(), assert );

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

	function assert( v, i ) {
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});

tape( 'if an environment supports `Symbol.iterator` and the provided iterator is iterable, the returned iterator is iterable', function test( t ) {
	var iterForEach;
	var opts;
	var rand;
	var it1;
	var it2;
	var i;

	iterForEach = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	opts = {
		'seed': 12345
	};
	rand = randu( opts );
	rand[ '__ITERATOR_SYMBOL__' ] = factory;

	it1 = iterForEach( rand, assert );
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

	function assert( v, i ) {
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterForEach;
	var it;

	iterForEach = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': false
	});

	it = iterForEach( randu(), assert );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function assert( v, i ) {
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});

tape( 'if a provided iterator is not iterable, the returned iterator is not iterable', function test( t ) {
	var iterForEach;
	var rand;
	var it;

	iterForEach = proxyquire( './../lib/main.js', {
		'@stdlib/symbol/iterator': '__ITERATOR_SYMBOL__'
	});

	rand = randu();
	rand[ '__ITERATOR_SYMBOL__' ] = null;

	it = iterForEach( rand, assert );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();

	function assert( v, i ) {
		t.equal( isnan( v ), false, 'is not NaN' );
		t.equal( isnan( i ), false, 'is not NaN' );
	}
});
