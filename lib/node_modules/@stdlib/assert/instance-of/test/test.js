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
var instanceOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof instanceOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a constructor argument which is not callable', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		[],
		{}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			instanceOf( {}, value );
		};
	}
});

tape( 'the function returns `true` if provided a value which is an instance of a provided constructor', function test( t ) {
	var bool;

	bool = instanceOf( [], Array );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = instanceOf( [], Object );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = instanceOf( new Object(), Object ); // eslint-disable-line no-new-object
	t.strictEqual( bool, true, 'returns expected value' );

	bool = instanceOf( instanceOf, Function );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = instanceOf( new Date(), Date );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = instanceOf( /.*/, RegExp );
	t.strictEqual( bool, true, 'returns expected value' );

	bool = instanceOf( new RegExp( '.*' ), RegExp );
	t.strictEqual( bool, true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `true` when provided an object literal and the `Object` constructor (exception)', function test( t ) {
	var bool = instanceOf( {}, Object );
	t.strictEqual( bool, true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `true` if a provided a value which is an instance of a provided constructor (inheritance)', function test( t ) {
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
	bool = instanceOf( bar, Foo );

	t.strictEqual( bool, true, 'returns true' );
	t.strictEqual( bar instanceof Bar, true, 'is instance of Bar' );
	t.strictEqual( bar instanceof Foo, true, 'is instance of Foo' );
	t.end();
});

tape( 'the function returns `false` if provided a test value which is not an instance of a provided constructor (primitives)', function test( t ) {
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
		undefined
	];
	for ( i = 0; i < values.length; i++ ) {
		bool = instanceOf( values[i], Object );
		t.strictEqual( bool, false, 'returns false when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns `false` if a provided value which is not an instance of a provided constructor (inheritance)', function test( t ) {
	var bool;
	var bar;

	function Foo() {
		return this;
	}

	function Bar() {
		return this;
	}

	bar = new Bar();
	bool = instanceOf( bar, Foo );

	t.strictEqual( bool, false, 'returns false' );
	t.strictEqual( bar instanceof Bar, true, 'is instance of Bar' );
	t.strictEqual( bar instanceof Foo, false, 'is not instance of Foo' );
	t.end();
});

tape( 'the function returns `false` if provided primitives and their corresponding object constructors', function test( t ) {
	var bool;

	bool = instanceOf( true, Boolean );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = instanceOf( 'beep', String );
	t.strictEqual( bool, false, 'returns expected value' );

	bool = instanceOf( 5, Number );
	t.strictEqual( bool, false, 'returns expected value' );

	t.end();
});
