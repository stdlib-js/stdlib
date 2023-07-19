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
var naryFunction = require( './../lib' );


// FUNCTIONS //

function sum() {
	var s;
	var i;

	s = 0;
	for ( i = 0; i < arguments.length; i++ ) {
		s += arguments[ i ];
	}
	return s;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof naryFunction, 'function', 'main export is a function' );
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
			naryFunction( value, 2 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a nonnegative integer', function test( t ) {
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
			naryFunction( sum, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var bar = naryFunction( sum, 2 );
	t.strictEqual( typeof bar, 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments', function test( t ) {
	var bar = naryFunction( sum, 2 );
	t.strictEqual( bar( -1, -2, 3 ), -3, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (nullary)', function test( t ) {
	var bar = naryFunction( sum, 0 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 0, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (unary)', function test( t ) {
	var bar = naryFunction( sum, 1 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 1, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (binary)', function test( t ) {
	var bar = naryFunction( sum, 2 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 3, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (ternary)', function test( t ) {
	var bar = naryFunction( sum, 3 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 6, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (quaternary)', function test( t ) {
	var bar = naryFunction( sum, 4 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 10, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (quinary)', function test( t ) {
	var bar = naryFunction( sum, 5 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 15, 'returns expected value' );
	t.end();
});

tape( 'the returned function invokes a function with a specified number of arguments (nary)', function test( t ) {
	var bar = naryFunction( sum, 6 );
	t.strictEqual( bar( 1, 2, 3, 4, 5, 6 ), 21, 'returns expected value' );
	t.end();
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

	bar = naryFunction( sum, 2, ctx );

	for ( i = 0; i < ctx.length; i++ ) {
		t.strictEqual( bar( 1, 2, 3 ), 3, 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports providing a `this` context', function test( t ) {
	var ctx;
	var bar;
	var foo;

	function Foo() {
		this.scalar = 1;
	}

	Foo.prototype.sum = function sum() {
		var s;
		var i;

		s = 0;
		for ( i = 0; i < arguments.length; i++ ) {
			s += arguments[ i ] * this.scalar;
		}
		return s;
	};

	ctx = {
		'scalar': 3
	};

	foo = new Foo();
	bar = naryFunction( foo.sum, 2, ctx );

	t.strictEqual( bar( 1, 2, 3 ), 9, 'returns expected value' );
	t.end();
});
