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
var isFunction = require( '@stdlib/assert/is-function' );
var namedtypedtuple = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof namedtypedtuple, 'function', 'main export is a function' );
	t.end();
});

tape( 'a tuple has a `toString` method', function test( t ) {
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y' ], {
		'name': 'Point'
	});
	p = new Point( [ 10, 20 ] );

	t.strictEqual( hasOwnProp( p, 'toString' ), true, 'returns expected value' );
	t.strictEqual( isFunction( p.toString ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a tuple instance', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ], {
		'name': 'Point'
	});
	p = new Point( [ 10, 20 ] );

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {},
		{
			'name': 'Bob'
		}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return p.toString.call( value );
		};
	}
});

tape( 'the method returns a string representation for a tuple with one field', function test( t ) {
	var expected;
	var Single;
	var actual;
	var s;

	Single = namedtypedtuple( [ 'id' ], {
		'name': 'Single'
	});
	s = new Single( [ 12345 ] );

	expected = 'Single(id=12345)';
	actual = s.toString();

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the method returns a string representation of a tuple with multiple fields', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'price', 'quantity' ] );
	p = new Point( [ 123456.789, 9876 ] );

	expected = 'tuple(price=123456.789, quantity=9876)';
	actual = p.toString();

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
