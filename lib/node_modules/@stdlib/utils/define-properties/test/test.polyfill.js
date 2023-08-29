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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var defineProperties = require( './../lib/polyfill.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof defineProperties, 'function', 'main export is a function' );
	t.end();
});

tape( 'if the first argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + (typeof values[i]) );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			defineProperties( value, {
				'a': {
					'value': 'b'
				}
			});
		};
	}
});

tape( 'if the second argument is not an object, the function will throw an error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		void 0,
		true,
		false
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided ' + (typeof values[i]) );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			defineProperties( {}, value );
		};
	}
});

tape( 'the function sets properties on a provided object', function test( t ) {
	var obj = {};
	defineProperties( obj, {
		'foo': {
			'value': 'bar'
		},
		'baz': {
			'value': 13
		}
	});
	t.strictEqual( obj.foo, 'bar', 'prop foo equals bar' );
	t.strictEqual( obj.baz, 13, 'prop foo equals 13' );
	t.end();
});

tape( 'can use getter/setter functions to define properties', function test( t ) {
	var obj;

	obj = {};

	defineProperties( obj, {
		'a': {
			'value': 3.0,
			'writable': true
		},
		'a2': {
			'get': function getter() {
				return this.a*this.a;
			},
			'set': function setter( x ) {
				this.a = sqrt( x );
			}
		}
	});
	obj.a2 = 81.0;
	t.strictEqual( obj.a, 9.0, 'returns expected value' );
	t.end();
});
