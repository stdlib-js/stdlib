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
var hasProp = require( '@stdlib/assert/has-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var namedtypedtuple = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof namedtypedtuple, 'function', 'main export is a function' );
	t.end();
});

tape( 'a tuple has a `toLocaleString` method', function test( t ) {
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	t.strictEqual( hasProp( p, 'toLocaleString' ), true, 'returns expected value' );
	t.strictEqual( isFunction( p.toLocaleString ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a tuple instance', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[]
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return p.toLocaleString.call( value );
		};
	}
});

tape( 'the method serializes a tuple as a locale-specific string (default locale)', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'price', 'quantity' ] );
	p = new Point( [ 123456.789, 9876 ] );

	expected = 'tuple(price=' + (123456.789).toLocaleString() + ', quantity=' + (9876).toLocaleString() + ')';
	actual = p.toLocaleString();

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the method serializes a tuple as a locale-specific string (specified locale)', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'price', 'quantity' ] );
	p = new Point( [ 123456.789, 9876 ] );

	expected = 'tuple(price=123.456,789, quantity=9.876)';
	actual = p.toLocaleString( 'de-DE' );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the method serializes a tuple as a locale-specific string (locale and options)', function test( t ) {
	var expected;
	var actual;
	var Point;
	var opts;
	var p;

	Point = namedtypedtuple( [ 'price', 'quantity' ] );
	p = new Point( [ 1234.56, 50 ] );
	opts = {
		'style': 'currency',
		'currency': 'USD'
	};

	expected = 'tuple(price=' + (1234.56).toLocaleString( 'en-US', opts ) + ', quantity=' + (50).toLocaleString( 'en-US', opts ) + ')';
	actual = p.toLocaleString( 'en-US', opts );

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the method handles NaN values', function test( t ) {
	var expected;
	var Record;
	var actual;
	var r;

	Record = namedtypedtuple( [ 'isValid', 'value' ] );
	r = new Record( [ 1, NaN ] );

	expected = 'tuple(isValid=1, value=NaN)';
	actual = r.toLocaleString();

	t.strictEqual( actual, expected, 'returns expected value' );
	t.end();
});
