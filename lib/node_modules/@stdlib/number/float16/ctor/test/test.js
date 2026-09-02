/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var hasToPrimitiveSymbolSupport = require( '@stdlib/assert/has-to-primitive-symbol-support' ); // eslint-disable-line id-length
var ToPrimitiveSymbol = require( '@stdlib/symbol/to-primitive' );
var Float16 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Float16, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var x = new Float16( 5.0 );
	t.strictEqual( x instanceof Float16, true, 'is an instance' );
	t.end();
});

tape( 'the constructor throws an error if not provided a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		void 0,
		true,
		false,
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
			var x = new Float16( value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor requires the `new` keyword', function test( t ) {
	var ctor = Float16;
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		ctor( 5.0 );
	}
});

tape( 'the constructor has a read-only `name` property', function test( t ) {
	t.strictEqual( hasOwnProp( Float16, 'name' ), true, 'has property' );
	t.strictEqual( Float16.name, 'Float16', 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Float16.name = 'Foo';
	}
});

tape( 'the constructor has a read-only `BYTES_PER_ELEMENT` property', function test( t ) {
	t.strictEqual( hasOwnProp( Float16, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( Float16.BYTES_PER_ELEMENT, 2, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Float16.BYTES_PER_ELEMENT = 4;
	}
});

tape( 'the constructor prototype has a read-only `BYTES_PER_ELEMENT` property', function test( t ) {
	t.strictEqual( hasOwnProp( Float16.prototype, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( Float16.prototype.BYTES_PER_ELEMENT, 2, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Float16.prototype.BYTES_PER_ELEMENT = 4;
	}
});

tape( 'the constructor returns an instance having a property for accessing the underlying value', function test( t ) {
	var x = new Float16( 5.0 );
	t.strictEqual( x.value, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance which throws an error when attempting to mutate the value', function test( t ) {
	var x = new Float16( 5.0 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		x.value = -5.0;
	}
});

tape( 'the constructor returns an instance which stores a provided value as a half-precision floating-point number', function test( t ) {
	var x = new Float16( 3.14 );
	t.strictEqual( x.value, 3.140625, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance which supports serializing an instance as a string', function test( t ) {
	var x;

	x = new Float16( 5.0 );
	t.strictEqual( x.toString(), '5', 'returns expected value' );

	x = new Float16( -5.0 );
	t.strictEqual( x.toString(), '-5', 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which supports serializing an instance as a JSON object', function test( t ) {
	var expected;
	var x;

	x = new Float16( 5.0 );
	expected = {
		'type': 'Float16',
		'value': 5.0
	};
	t.deepEqual( x.toJSON(), expected, 'returns expected value' );
	t.strictEqual( JSON.stringify( x ), JSON.stringify( expected ), 'returns expected value' );

	x = new Float16( -5.0 );
	expected = {
		'type': 'Float16',
		'value': -5.0
	};
	t.deepEqual( x.toJSON(), expected, 'returns expected value' );
	t.strictEqual( JSON.stringify( x ), JSON.stringify( expected ), 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which supports converting an instance to a primitive value', function test( t ) {
	var x;

	x = new Float16( 5.0 );
	t.strictEqual( x.valueOf(), 5.0, 'returns expected value' );

	x = new Float16( -5.0 );
	t.strictEqual( x.valueOf(), -5.0, 'returns expected value' );

	x = new Float16( 3.14 );
	t.strictEqual( x.valueOf(), 3.140625, 'returns expected value' );

	x = new Float16( 0.0 );
	t.strictEqual( x.valueOf(), 0.0, 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which supports implicit type coercion', function test( t ) {
	var x;
	var y;

	x = new Float16( 10.0 );
	t.strictEqual( x + 5, 15.0, 'returns expected value' );
	t.strictEqual( x * 2, 20.0, 'returns expected value' );

	x = new Float16( 3.0 );
	y = new Float16( 2.0 );
	t.strictEqual( x + y, 5.0, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.toPrimitive`, the constructor returns an instance which supports type coercion', function test( t ) {
	var x;

	if ( !hasToPrimitiveSymbolSupport() ) {
		t.ok( true, 'environment does not support Symbol.toPrimitive' );
		t.end();
		return;
	}
	x = new Float16( 5.0 );

	t.strictEqual( x[ ToPrimitiveSymbol ]( 'number' ), 5.0, 'returns expected value' );
	t.strictEqual( x[ ToPrimitiveSymbol ]( 'default' ), 5.0, 'returns expected value' );
	t.strictEqual( x[ ToPrimitiveSymbol ]( 'string' ), 5.0, 'returns expected value' );

	x = new Float16( -3.14 );
	t.strictEqual( x[ ToPrimitiveSymbol ](), -3.140625, 'returns expected value' );

	t.end();
});
