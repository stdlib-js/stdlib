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
var pickArguments = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pickArguments, 'function', 'main export is a function' );
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
			pickArguments( value, [ 0, 2 ] );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an array-like object containing nonnegative integers', function test( t ) {
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
		[ 1, -2, 3 ],
		[ 3.14, 2, 1 ],
		function noop() {}
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
			pickArguments( foo, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var bar = pickArguments( foo, [ 0, 2 ] );

	t.strictEqual( typeof bar, 'function', 'returns a function' );
	t.end();

	function foo( a, b ) {
		return [ a, b ];
	}
});

tape( 'the returned function invokes a function with specified arguments', function test( t ) {
	var bar = pickArguments( foo, [ 0, 2 ] );

	t.deepEqual( foo( 1, 2, 3 ), [ 1, 2 ], 'returns expected value' );
	t.deepEqual( bar( 1, 2, 3 ), [ 1, 3 ], 'returns expected value' );
	t.end();

	function foo( a, b ) {
		return [ a, b ];
	}
});

tape( 'the returned function invokes a function with specified arguments (nullary)', function test( t ) {
	var bar = pickArguments( foo, [] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 0 ], 'returns expected value' );
	t.end();

	function foo() {
		return [ arguments.length ];
	}
});

tape( 'the returned function invokes a function with specified arguments (unary)', function test( t ) {
	var bar = pickArguments( foo, [ 5 ] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 1, 6 ], 'returns expected value' );
	t.end();

	function foo() {
		var args;
		var i;

		args = [ arguments.length ];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return args;
	}
});

tape( 'the returned function invokes a function with specified arguments (binary)', function test( t ) {
	var bar = pickArguments( foo, [ 4, 5 ] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 2, 5, 6 ], 'returns expected value' );
	t.end();

	function foo() {
		var args;
		var i;

		args = [ arguments.length ];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return args;
	}
});

tape( 'the returned function invokes a function with specified arguments (ternary)', function test( t ) {
	var bar = pickArguments( foo, [ 3, 4, 5 ] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 3, 4, 5, 6 ], 'returns expected value' );
	t.end();

	function foo() {
		var args;
		var i;

		args = [ arguments.length ];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return args;
	}
});

tape( 'the returned function invokes a function with specified arguments (quaternary)', function test( t ) {
	var bar = pickArguments( foo, [ 2, 3, 4, 5 ] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 4, 3, 4, 5, 6 ], 'returns expected value' );
	t.end();

	function foo() {
		var args;
		var i;

		args = [ arguments.length ];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return args;
	}
});

tape( 'the returned function invokes a function with specified arguments (quinary)', function test( t ) {
	var bar = pickArguments( foo, [ 1, 2, 3, 4, 5 ] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 5, 2, 3, 4, 5, 6 ], 'returns expected value' );
	t.end();

	function foo() {
		var args;
		var i;

		args = [ arguments.length ];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return args;
	}
});

tape( 'the returned function invokes a function with specified arguments (nary)', function test( t ) {
	var bar = pickArguments( foo, [ 0, 1, 2, 3, 4, 5 ] );

	t.deepEqual( bar( 1, 2, 3, 4, 5, 6 ), [ 6, 1, 2, 3, 4, 5, 6 ], 'returns expected value' );
	t.end();

	function foo() {
		var args;
		var i;

		args = [ arguments.length ];
		for ( i = 0; i < arguments.length; i++ ) {
			args.push( arguments[ i ] );
		}
		return args;
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

	bar = pickArguments( foo, [ 0, 2 ], ctx );

	for ( i = 0; i < ctx.length; i++ ) {
		t.deepEqual( bar( 1, 2, 3 ), [ 1, 3 ], 'returns expected value' );
	}
	t.end();

	function foo( a, b ) {
		return [ a, b ];
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
	bar = pickArguments( foo.scale, [ 0, 2 ], ctx );

	t.deepEqual( bar( 1, 2, 3 ), [ 10, 60 ], 'returns expected value' );
	t.end();
});
