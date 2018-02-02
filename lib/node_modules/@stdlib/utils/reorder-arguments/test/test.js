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
var reorderArguments = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reorderArguments, 'function', 'main export is a function' );
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
		null,
		undefined,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reorderArguments( value, [ 2, 0, 1 ] );
		};
	}
});

tape( 'the function throws an error if provided an indices argument which is not an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		null,
		undefined,
		{},
		[],
		[ 1, 3.14 ],
		[ 1, null ],
		[ 1, -1 ]
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
			reorderArguments( foo, value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var bar;

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	bar = reorderArguments( foo, [ 2, 0, 1 ] );

	t.strictEqual( typeof bar, 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function throws an error if not invoked with an expected number of input arguments', function test( t ) {
	var args;
	var bar;
	var i;

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	args = [
		[ 1, 2 ],
		[ 1, 2, 3, 4 ],
		[ 1 ],
		[],
		[ 1, 2, 3, 4, 5 ]
	];

	bar = reorderArguments( foo, [ 2, 0, 1 ] );

	for ( i = 0; i < args.length; i++ ) {
		t.throws( badArgs( args[i] ), Error, 'throws an error when invoked with '+args[i].length+' arguments' );
	}
	t.end();

	function badArgs( args ) {
		return function badArgs() {
			bar.apply( null, args );
		};
	}
});

tape( 'the returned function invokes a function with reordered arguments', function test( t ) {
	var bar;

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	bar = reorderArguments( foo, [ 2, 0, 1 ] );

	t.deepEqual( foo( 1, 2, 3 ), [ 1, 2, 3 ], 'returns arguments in order' );
	t.deepEqual( bar( 1, 2, 3 ), [ 3, 1, 2 ], 'applies reordered arguments' );
	t.end();
});

tape( 'the function supports providing a `this` context', function test( t ) {
	var ctx;
	var bar;
	var i;

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	ctx = [
		null,
		undefined,
		[],
		{},
		'beep',
		3.14,
		function noop() {}
	];

	bar = reorderArguments( foo, [ 2, 0, 1 ], ctx );

	for ( i = 0; i < ctx.length; i++ ) {
		t.deepEqual( bar( 1, 2, 3 ), [ 3, 1, 2 ], 'applies reordered arguments' );
	}
	t.end();
});

tape( 'the function supports providing a `this` context', function test( t ) {
	var ctx;
	var bar;
	var foo;

	function Foo() {
		this.a = 1;
		this.b = 2;
		this.c = 3;
		return this;
	}

	Foo.prototype.scale = function scale( a, b, c ) {
		return [ this.a*a, this.b*b, this.c*c ];
	};

	ctx = {
		'a': 10,
		'b': 20,
		'c': 30
	};

	foo = new Foo();
	bar = reorderArguments( foo.scale, [ 2, 0, 1 ], ctx );

	t.deepEqual( bar( 1, 2, 3 ), [ 30, 20, 60 ], 'applies reordered arguments' );
	t.end();
});
