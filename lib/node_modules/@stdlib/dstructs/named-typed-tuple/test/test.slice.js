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

tape( 'a tuple has a `slice` method', function test( t ) {
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y' ], {
		'name': 'Point'
	});
	p = new Point( [ 10, 20 ] );

	t.strictEqual( hasOwnProp( p, 'slice' ), true, 'returns expected value' );
	t.strictEqual( isFunction( p.slice ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a tuple instance', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return p.slice.call( value );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a tuple instance (start)', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return p.slice.call( value, 0 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a tuple instance (start, end)', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

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
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			return p.slice.call( value, 0, 1 );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not an integer', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

	values = [
		'5',
		3.14,
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
			return p.slice( value );
		};
	}
});

tape( 'the method throws an error if provided a first argument which is not an integer (end)', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

	values = [
		'5',
		3.14,
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
			return p.slice( value, 1 );
		};
	}
});

tape( 'the method throws an error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

	values = [
		'5',
		3.14,
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
			return p.slice( 0, value );
		};
	}
});

tape( 'if called without arguments, the method returns a tuple containing the same elements as the original tuple', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 10, 20, 30 ] );

	expected = {
		'x': 10,
		'y': 20,
		'z': 30
	};
	actual = p.slice();

	t.notEqual( actual, p, 'returns expected value' );
	t.deepEqual( actual.fields, [ 'x', 'y', 'z' ], 'returns expected value' );

	actual = {
		'x': actual.x,
		'y': actual.y,
		'z': actual.z
	};
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided one argument, the method returns a tuple containing elements starting from a specified index (inclusive)', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z', 'w' ] );
	p = new Point( [ 1, 2, 3, 4 ] );

	expected = [ 2, 3, 4 ];
	actual = p.slice( 1 );

	t.notEqual( actual, p, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.deepEqual( actual.fields, [ 'y', 'z', 'w' ], 'returns expected value' );
	t.end();
});

tape( 'if provided two arguments, the method returns a tuple containing elements starting from a specified start index (inclusive) and ending at a specified end index (exclusive)', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z', 'w' ] );
	p = new Point( [ 1, 2, 3, 4 ] );

	expected = [ 2, 3 ];
	actual = p.slice( 1, 3 );

	t.notEqual( actual, p, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.deepEqual( actual.fields, [ 'y', 'z' ], 'returns expected value' );

	expected = [ 2, 3, 4 ];
	actual = p.slice( 1, 30 );

	t.notEqual( actual, p, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.deepEqual( actual.fields, [ 'y', 'z', 'w' ], 'returns expected value' );
	t.end();
});

tape( 'the method supports negative indices', function test( t ) {
	var expected;
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z', 'w' ] );
	p = new Point( [ 1, 2, 3, 4 ] );

	expected = [ 2, 3 ];
	actual = p.slice( -3, -1 );

	t.notEqual( actual, p, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.deepEqual( actual.fields, [ 'y', 'z' ], 'returns expected value' );

	expected = [ 1, 2 ];
	actual = p.slice( -30, -2 );

	t.notEqual( actual, p, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.deepEqual( actual.fields, [ 'x', 'y' ], 'returns expected value' );
	t.end();
});

tape( 'the method returns null if a resolved beginning index exceeds a resolved ending index', function test( t ) {
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z', 'w' ] );
	p = new Point( [ 1, 2, 3, 4 ] );
	actual = p.slice( 2, 0 );

	t.strictEqual( actual, null, 'returns expected value' );
	t.end();
});

tape( 'the method returns null if a resolved beginning index exceeds the maximum tuple index', function test( t ) {
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 1, 2, 3 ] );
	actual = p.slice( 5 );

	t.strictEqual( actual, null, 'returns expected value' );
	t.end();
});

tape( 'the method returns null if a resolved ending index is less than or equal to zero', function test( t ) {
	var actual;
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y', 'z', 'w' ] );
	p = new Point( [ 1, 2, 3, 4 ] );

	actual = p.slice( 2, -8 );
	t.strictEqual( actual, null, 'returns expected value' );

	actual = p.slice( 1, 0 );
	t.strictEqual( actual, null, 'returns expected value' );
	t.end();
});
