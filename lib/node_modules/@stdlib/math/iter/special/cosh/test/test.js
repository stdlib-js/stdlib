/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var randu = require( '@stdlib/random/base/uniform' ).factory;
var uniform = require( '@stdlib/random/iter/uniform' );
var cosh = require( '@stdlib/math/base/special/cosh' );
var iterCosh = require( './../lib' );


// VARIABLES //

var rand = randu( -5.0, 5.0 );


// FUNCTIONS //

function createIterator( arr ) {
	var len;
	var it;
	var i;

	len = arr.length;
	i = -1;

	it = {};
	it.next = next;

	return it;

	function next() {
		var out;
		i += 1;
		if ( i < len ) {
			out = {};
			out.value = arr[ i ];
			out.done = ( i === len-1 );
			return out;
		}
		return {
			'done': true
		};
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof iterCosh, 'function', 'main export is a function' );
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
			iterCosh( value );
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object', function test( t ) {
	var it;
	var r;
	var i;

	it = iterCosh( uniform( -5.0, 5.0 ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < 100; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object (value+done)', function test( t ) {
	var values;
	var it;
	var r;
	var i;

	values = [ rand(), rand(), rand(), rand(), rand() ];
	it = iterCosh( createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < values.length; i++ ) {
		r = it.next();
		t.equal( typeof r.value, 'number', 'returns a number' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which computes the hyperbolic cosine for each iterated value', function test( t ) {
	var expected;
	var rand;
	var it;
	var N;
	var x;
	var r;
	var i;

	N = 101;
	rand = uniform( -5.0, 5.0, {
		'iter': N
	});
	it = iterCosh( rand );
	t.equal( it.next.length, 0, 'has zero arity' );

	x = uniform( -5.0, 5.0, {
		'iter': N,
		'seed': rand.seed
	});
	for ( i = 0; i < N; i++ ) {
		r = it.next();
		expected = cosh( x.next().value );
		t.equal( r.value, expected, 'returns expected value' );
		t.equal( typeof r.done, 'boolean', 'returns a boolean' );
	}
	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which computes the hyperbolic cosine for each iterated value (value+done)', function test( t ) {
	var expected;
	var actual;
	var values;
	var it;
	var i;

	values = [ rand(), rand(), rand(), rand() ];
	expected = [
		{
			'value': cosh( values[ 0 ] ),
			'done': false
		},
		{
			'value': cosh( values[ 1 ] ),
			'done': false
		},
		{
			'value': cosh( values[ 2 ] ),
			'done': false
		},
		{
			'value': cosh( values[ 3 ] ),
			'done': true
		}
	];

	it = iterCosh( createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		t.deepEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which returns `NaN` if provided a non-numeric value (value+done)', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;
	var r;
	var i;

	values = [ 'abc', null, true, false, [], {} ];
	expected = [
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': false
		},
		{
			'value': NaN,
			'done': true
		}
	];

	it = iterCosh( createIterator( values ) );
	t.equal( it.next.length, 0, 'has zero arity' );

	for ( i = 0; i < expected.length; i++ ) {
		actual = it.next();
		r = expected[ i ].value;
		if ( r === r ) {
			t.equal( actual.value, r, 'returns expected value' );
		} else {
			t.notEqual( actual.value, actual.value, 'returns expected value' );
		}
		t.equal( actual.done, expected[ i ].done, 'returns a boolean' );
	}
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterCosh( uniform( -5.0, 5.0 ) );

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

	it = iterCosh( uniform( -5.0, 5.0 ) );

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
