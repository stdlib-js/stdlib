/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var filterArguments = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof filterArguments, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function', function test( t ) {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			filterArguments( value, predicate );
		};
	}

	function predicate( v ) {
		return ( v !== 2 );
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
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	function badValue( value ) {
		return function badValue() {
			filterArguments( foo, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var bar = filterArguments( foo, predicate );

	t.strictEqual( typeof bar, 'function', 'returns expected value' );
	t.end();

	function foo( a, b ) {
		return [ a, b ];
	}

	function predicate( v ) {
		return ( v !== 2 );
	}
});

tape( 'the returned function invokes a function according to a predicate function', function test( t ) {
	var bar = filterArguments( foo, predicate );

	t.deepEqual( foo( 1, 2, 3 ), [ 1, 2 ], 'returns arguments in order' );
	t.deepEqual( bar( 1, 2, 3 ), [ 1, 3 ], 'applies predicate function' );
	t.end();

	function foo( a, b ) {
		return [ a, b ];
	}

	function predicate( v ) {
		return ( v !== 2 );
	}
});

tape( 'the returned function invokes a predicate function with the argument value and the argument index', function test( t ) {
	var indices;
	var values;
	var bar;

	bar = filterArguments( foo, predicate );

	values = [];
	indices = [];

	t.deepEqual( bar( 1, 2, 3 ), [ 1, 3 ], 'applies predicate function' );
	t.deepEqual( values, [ 1, 2, 3 ], 'returns expected value' );
	t.deepEqual( indices, [ 0, 1, 2 ], 'returns expected value' );

	t.end();

	function foo( a, b ) {
		return [ a, b ];
	}

	function predicate( v, i ) {
		values.push( v );
		indices.push( i );
		return ( i !== 1 );
	}
});

tape( 'the function supports providing a `this` context', function test( t ) {
	var ctx;
	var bar;
	var i;

	ctx = [
		null,
		void 0,
		[],
		{},
		'beep',
		3.14,
		function noop() {}
	];

	bar = filterArguments( foo, predicate, ctx );

	for ( i = 0; i < ctx.length; i++ ) {
		t.deepEqual( bar( 1, 2, 3 ), [ 1, 3 ], 'returns expected value' );
	}
	t.end();

	function foo( a, b ) {
		return [ a, b ];
	}

	function predicate( v ) {
		return ( v !== 2 );
	}
});

tape( 'the function supports providing a `this` context', function test( t ) {
	var ctx;
	var bar;
	var foo;

	function Foo() {
		this.a = 1;
		this.b = 2;
		return this;
	}

	Foo.prototype.scale = function scale( a, b ) {
		return [ this.a*a, this.b*b ];
	};

	ctx = {
		'a': 10,
		'b': 20
	};

	foo = new Foo();
	bar = filterArguments( foo.scale, predicate, ctx );

	t.deepEqual( bar( 1, 2, 3 ), [ 10, 60 ], 'returns expected value' );
	t.end();

	function predicate( v ) {
		return ( v !== 2 );
	}
});
