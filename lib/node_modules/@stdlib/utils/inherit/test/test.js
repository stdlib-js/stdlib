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
var hasPrototype = require( '@stdlib/assert/is-prototype-of' );
var inherit = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inherit, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided an object or function which can inherit (child constructor)', function test( t ) {
	var values;
	var i;

	function Foo() {
		return this;
	}

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			inherit( value, Foo );
		};
	}
});

tape( 'the function throws an error if not provided an object or function from which a constructor can inherit (parent constructor)', function test( t ) {
	var values;
	var i;

	function Foo() {
		return this;
	}

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			inherit( Foo, value );
		};
	}
});

tape( 'the function throws an error if provided a parent constructor lacking a prototype', function test( t ) {
	t.throws( badValue, TypeError, 'throws a type error' );
	t.end();

	function Foo() {
		return this;
	}

	function badValue() {
		inherit( Foo, Object.create( null ) );
	}
});

tape( 'the function overrides the prototype of a child constructor with the prototype of a parent constructor', function test( t ) {
	var proto;
	var ctor;
	var foo;

	proto = {};

	function beep() {
		return 'beep';
	}

	function Foo() {
		return this;
	}
	Foo.prototype = proto;
	Foo.prototype.constructor = Foo;

	function Bar() {
		return this;
	}
	Bar.prototype = {};
	Bar.prototype.beep = beep;
	Bar.prototype.constructor = Bar;

	ctor = inherit( Foo, Bar );

	t.strictEqual( ctor, Foo, 'returns child constructor' );
	t.notEqual( Foo.prototype, proto, 'overrides child prototype' );
	t.strictEqual( Foo.prototype.constructor, Foo, 'child prototype constructor property equals the child constructor' );

	foo = new Foo();
	t.strictEqual( foo instanceof Bar, true, 'is instance of parent' );
	t.strictEqual( hasPrototype( foo, Bar.prototype ), true, 'parent prototype is in prototype chain' );
	t.strictEqual( foo.beep(), 'beep', 'has parent proto method' );

	t.end();
});
