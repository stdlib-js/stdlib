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
var hasOwnProp = require( '@stdlib/assert/has-own-property' );
var Complex64 = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof Complex64, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function is a constructor', function test( t ) {
	var z = new Complex64( 5.0, 3.0 );
	t.strictEqual( z instanceof Complex64, true, 'is an instance' );
	t.end();
});

tape( 'the constructor throws an error if provided a real component which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		undefined,
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
			var z = new Complex64( value, 3.0 ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor throws an error if provided an imaginary component which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		undefined,
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
			var z = new Complex64( 5.0, value ); // eslint-disable-line no-unused-vars
		};
	}
});

tape( 'the constructor requires the `new` keyword', function test( t ) {
	var ctor = Complex64;
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		ctor( 5.0, 3.0 );
	}
});

tape( 'the constructor has a read-only `BYTES_PER_ELEMENT` property', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( Complex64.BYTES_PER_ELEMENT, 4, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Complex64.BYTES_PER_ELEMENT = 16;
	}
});

tape( 'the constructor prototype has a read-only `BYTES_PER_ELEMENT` property', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64.prototype, 'BYTES_PER_ELEMENT' ), true, 'has property' );
	t.strictEqual( Complex64.prototype.BYTES_PER_ELEMENT, 4, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Complex64.prototype.BYTES_PER_ELEMENT = 16;
	}
});

tape( 'the constructor prototype has a read-only `byteLength` property', function test( t ) {
	t.strictEqual( hasOwnProp( Complex64.prototype, 'byteLength' ), true, 'has property' );
	t.strictEqual( Complex64.prototype.byteLength, 8, 'returns expected value' );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		Complex64.prototype.byteLength = 64;
	}
});

tape( 'the constructor returns an instance having a property for getting the real component', function test( t ) {
	var z = new Complex64( 5.0, 3.0 );
	t.strictEqual( z.re, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance which throws an error when attempting to mutate the real component', function test( t ) {
	var z = new Complex64( 5.0, 3.0 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		z.re = -5.0;
	}
});

tape( 'the constructor returns an instance having a property for getting the imaginary component', function test( t ) {
	var z = new Complex64( 5.0, 3.0 );
	t.strictEqual( z.im, 3.0, 'returns expected value' );
	t.end();
});

tape( 'the constructor returns an instance which throws an error when attempting to mutate the imaginary component', function test( t ) {
	var z = new Complex64( 5.0, 3.0 );
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		z.im = -3.0;
	}
});

tape( 'the constructor returns an instance which stores real and imaginary components as single-precision floating-point numbers', function test( t ) {
	var z = new Complex64( 3.14, -3.14 );

	t.strictEqual( z.re, 3.140000104904175, 'stores as single-precision' );
	t.strictEqual( z.im, -3.140000104904175, 'stores as single-precision' );

	t.end();
});

tape( 'the constructor returns an instance which supports serializing an instance as a string', function test( t ) {
	var z;

	z = new Complex64( 5.0, -3.0 );
	t.strictEqual( z.toString(), '5 - 3i', 'returns expected value' );

	z = new Complex64( 5.0, 3.0 );
	t.strictEqual( z.toString(), '5 + 3i', 'returns expected value' );

	t.end();
});

tape( 'the constructor returns an instance which supports serializing an instance as a JSON object', function test( t ) {
	var expected;
	var z;

	z = new Complex64( 5.0, -3.0 );
	expected = {
		'type': 'Complex64',
		're': 5.0,
		'im': -3.0
	};
	t.deepEqual( z.toJSON(), expected, 'returns expected value' );
	t.strictEqual( JSON.stringify( z ), JSON.stringify( expected ), 'serializes as JSON when called by JSON.stringify()' );

	z = new Complex64( 5.0, 3.0 );
	expected = {
		'type': 'Complex64',
		're': 5.0,
		'im': 3.0
	};
	t.deepEqual( z.toJSON(), expected, 'returns expected value' );
	t.strictEqual( JSON.stringify( z ), JSON.stringify( expected ), 'serializes as JSON when called by JSON.stringify()' );

	t.end();
});
