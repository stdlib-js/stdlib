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
var reverseArguments = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reverseArguments, 'function', 'main export is a function' );
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
			reverseArguments( value );
		};
	}
});

tape( 'the function returns a function', function test( t ) {
	var bar;

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	bar = reverseArguments( foo );

	t.strictEqual( typeof bar, 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function invokes a function with arguments in reverse order', function test( t ) {
	var bar;

	function foo( a, b, c ) {
		return [ a, b, c ];
	}

	bar = reverseArguments( foo );

	t.deepEqual( foo( 1, 2, 3 ), [ 1, 2, 3 ], 'returns arguments in order' );
	t.deepEqual( bar( 1, 2, 3 ), [ 3, 2, 1 ], 'applies arguments in reverse order' );
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

	bar = reverseArguments( foo, ctx );

	for ( i = 0; i < ctx.length; i++ ) {
		t.deepEqual( bar( 1, 2, 3 ), [ 3, 2, 1 ], 'applies arguments in reverse order' );
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
	bar = reverseArguments( foo.scale, ctx );

	t.deepEqual( bar( 1, 2, 3 ), [ 30, 40, 30 ], 'applies arguments in reverse order' );
	t.end();
});
