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
var inherit = require( '@stdlib/utils/inherit' );
var Number = require( '@stdlib/number/ctor' );
var isPrototypeOf = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isPrototypeOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if a prototype argument which is neither an object (except null) or a function', function test( t ) {
	var values;
	var i;

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
			isPrototypeOf( {}, value );
		};
	}
});

tape( 'the function returns `false` if provided a test value which is neither an object (except null) or a function', function test( t ) {
	var values;
	var bool;
	var i;

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
		bool = isPrototypeOf( values[i], {} );
		t.strictEqual( bool, false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `true` if a provided prototype is part of a value\'s prototype chain', function test( t ) {
	var bool;
	var bar;

	function Foo() {
		return this;
	}

	function Bar() {
		return this;
	}
	inherit( Bar, Foo );

	bar = new Bar();
	bool = isPrototypeOf( bar, Foo.prototype );

	t.strictEqual( bool, true, 'returns true' );
	t.strictEqual( bar instanceof Bar, true, 'is instance of Bar' );
	t.strictEqual( bar instanceof Foo, true, 'is instance of Foo' );
	t.end();
});

tape( 'the function returns `false` if a provided prototype is not part of a value\'s prototype chain', function test( t ) {
	var bool;
	var bar;

	function Foo() {
		return this;
	}

	function Bar() {
		return this;
	}

	bar = new Bar();
	bool = isPrototypeOf( bar, Foo.prototype );

	t.strictEqual( bool, false, 'returns false' );
	t.strictEqual( bar instanceof Bar, true, 'is instance of Bar' );
	t.strictEqual( bar instanceof Foo, false, 'is not instance of Foo' );
	t.end();
});

tape( 'the function supports situations where constructors are never used', function test( t ) {
	var superProto;
	var subProto;
	var bool;
	var v;

	function createObject( proto ) {
		function Ctor() {}
		Ctor.prototype = proto;
		return new Ctor();
	}
	superProto = {
		'beep': 'beep'
	};

	subProto = createObject( superProto );
	subProto.boop = 'boop';

	v = createObject( subProto );

	t.throws( isInstance, TypeError, 'throws type error if using `instanceof`' );

	bool = isPrototypeOf( v, superProto );
	t.strictEqual( bool, true, 'returns true' );

	t.end();

	function isInstance() {
		var bool = ( v instanceof superProto );
		return bool;
	}
});

tape( 'the function returns `false` if provided primitives and their corresponding object constructors', function test( t ) {
	var bool;

	bool = isPrototypeOf( true, Boolean.prototype );
	t.strictEqual( bool, false, 'returns false' );

	bool = isPrototypeOf( 'beep', String.prototype );
	t.strictEqual( bool, false, 'returns false' );

	bool = isPrototypeOf( 5, Number.prototype );
	t.strictEqual( bool, false, 'returns false' );

	t.end();
});
