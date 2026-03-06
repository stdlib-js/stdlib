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
var defineProperty = require( '@stdlib/utils/define-property' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );
var Symbol = require( '@stdlib/symbol/ctor' );
var inherit = require( '@stdlib/utils/inherit' );
var inheritedPropertyDescriptor = require( './../lib' ); // eslint-disable-line id-length


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof inheritedPropertyDescriptor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the inheritance level', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		0,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			inheritedPropertyDescriptor( {}, 'toString', value );
		};
	}
});

tape( 'the function returns an inherited property descriptor', function test( t ) {
	var expected;
	var actual;
	var obj;

	function Foo() {
		this.a = 'b';
		return this;
	}

	Foo.prototype.foo = 'bar';
	defineProperty( Foo.prototype, 'beep', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	});

	obj = new Foo();

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'bar'
	};
	actual = inheritedPropertyDescriptor( obj, 'foo' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	};
	actual = inheritedPropertyDescriptor( obj, 'beep' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = null;
	actual = inheritedPropertyDescriptor( obj, 'a' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an inherited property descriptor (multiple inheritance)', function test( t ) {
	var expected;
	var actual;
	var obj;

	function Bar() {
		this.a = 'b';
		return this;
	}

	Bar.prototype.baz = 'bap';
	Bar.prototype.foo = 'bebop';

	function Foo() {
		Bar.call( this );
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.foo = 'bar';
	defineProperty( Foo.prototype, 'beep', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	});

	obj = new Foo();

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'bar'
	};
	actual = inheritedPropertyDescriptor( obj, 'foo' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	};
	actual = inheritedPropertyDescriptor( obj, 'beep' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'bap'
	};
	actual = inheritedPropertyDescriptor( obj, 'baz' );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = null;
	actual = inheritedPropertyDescriptor( obj, 'a' );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns an inherited property descriptor (symbol)', function test( t ) {
	var expected;
	var actual;
	var obj;
	var s1;
	var s2;

	if ( hasSymbolSupport() === false ) {
		t.pass( 'environment lacks Symbol support' );
		return t.end();
	}
	s1 = Symbol( 'foo' );
	s2 = Symbol( 'beep' );

	function Foo() {
		this.a = 'b';
		return this;
	}

	Foo.prototype[ s1 ] = 'bar';
	defineProperty( Foo.prototype, s2, {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	});

	obj = new Foo();

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'bar'
	};
	actual = inheritedPropertyDescriptor( obj, s1 );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	};
	actual = inheritedPropertyDescriptor( obj, s2 );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports limiting the inheritance level', function test( t ) {
	var expected;
	var actual;
	var obj;

	function Bar() {
		this.a = 'b';
		return this;
	}

	Bar.prototype.baz = 'bap';
	Bar.prototype.foo = 'bebop';

	function Foo() {
		Bar.call( this );
		return this;
	}

	inherit( Foo, Bar );

	Foo.prototype.foo = 'bar';
	defineProperty( Foo.prototype, 'beep', {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	});

	obj = new Foo();

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'bar'
	};
	actual = inheritedPropertyDescriptor( obj, 'foo', 2 );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': false,
		'enumerable': false,
		'writable': false,
		'value': true
	};
	actual = inheritedPropertyDescriptor( obj, 'beep', 1 );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = null;
	actual = inheritedPropertyDescriptor( obj, 'baz', 1 );
	t.strictEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns `null` if provided a non-string primitive or `null`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		void 0,
		null
	];
	expected = null;

	for ( i = 0; i < values.length; i++ ) {
		actual = inheritedPropertyDescriptor( values[ i ], 'length' );
		t.strictEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function coerces a non-symbol property argument to a string', function test( t ) {
	var expected;
	var actual;
	var obj;

	function Foo() {
		return this;
	}

	Foo.prototype[ 'null' ] = true;
	Foo.prototype[ '[object Object]' ] = false;

	obj = new Foo();

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': true
	};
	actual = inheritedPropertyDescriptor( obj, null );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': false
	};
	actual = inheritedPropertyDescriptor( obj, {} );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided a non-existent inherited property', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {};

	expected = null;
	actual = inheritedPropertyDescriptor( obj, 'a' );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
