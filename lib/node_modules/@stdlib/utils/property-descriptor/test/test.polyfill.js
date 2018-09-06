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
var getOwnPropertyDescriptor = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof getOwnPropertyDescriptor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a property descriptor (<ES5)', function test( t ) {
	var expected;
	var actual;
	var obj;

	function Foo() {
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'e'
		});
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];

	obj = new Foo();

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'boop'
	};
	actual = getOwnPropertyDescriptor( obj, 'beep' );
	t.deepEqual( actual, expected, 'returns expected value' );

	// Recall: the polyfill targets pre-ES5 environments which lack property descriptors
	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': 'e'
	};
	actual = getOwnPropertyDescriptor( obj, 'd' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided a prototype property', function test( t ) {
	var expected;
	var actual;
	var obj;

	function Foo() {
		this.beep = 'boop';
		this.a = {
			'b': 'c'
		};
		defineProperty( this, 'd', {
			'configurable': false,
			'enumerable': false,
			'writable': false,
			'value': 'e'
		});
		return this;
	}

	Foo.prototype.foo = [ 'bar' ];

	obj = new Foo();

	expected = null;
	actual = getOwnPropertyDescriptor( obj, 'foo' );
	t.deepEqual( actual, expected, 'returns expected value' );
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
		actual = getOwnPropertyDescriptor( values[ i ], 'length' );
		t.strictEqual( actual, expected, 'returns expected value when provided '+values[ i ] );
	}
	t.end();
});

tape( 'the function coerces a property argument to a string', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {
		'null': true,
		'[object Object]': false
	};

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': true
	};
	actual = getOwnPropertyDescriptor( obj, null );
	t.deepEqual( actual, expected, 'returns expected value' );

	expected = {
		'configurable': true,
		'enumerable': true,
		'writable': true,
		'value': false
	};
	actual = getOwnPropertyDescriptor( obj, {} );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns `null` if provided a non-existent property', function test( t ) {
	var expected;
	var actual;
	var obj;

	obj = {};

	expected = null;
	actual = getOwnPropertyDescriptor( obj, 'a' );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
