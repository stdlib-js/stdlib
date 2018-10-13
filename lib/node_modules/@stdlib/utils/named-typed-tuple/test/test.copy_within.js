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
var hasProp = require( '@stdlib/assert/has-property' );
var isFunction = require( '@stdlib/assert/is-function' );
var namedtypetuple = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof namedtypetuple, 'function', 'main export is a function' );
	t.end();
});

tape( 'a tuple has a `copyWithin` method for copying a sequence of tuple elements within a tuple', function test( t ) {
	var Point;
	var p;

	Point = namedtypetuple( [ 'x', 'y' ] );
	p = new Point();

	t.strictEqual( hasProp( p, 'copyWithin' ), true, 'has property' );
	t.strictEqual( isFunction( p.copyWithin ), true, 'has method' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a typed array instance', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypetuple( [ 'x', 'y' ] );
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
			return p.copyWithin.call( value, 3, 0 );
		};
	}
});

tape( 'the method throws an error if invoked with a `this` context which is not a typed array instance (end)', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypetuple( [ 'x', 'y' ] );
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
			return p.copyWithin.call( value, 3, 0, 5 );
		};
	}
});

tape( 'the method copies a sequence of elements within a tuple', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( 0, 3 );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (negative target)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( -p.length, 3 );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (negative start)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( 0, -2 );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (end=length)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( 0, 3, p.length );

	// Overwritten:
	t.strictEqual( p[ 0 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 4.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (non-inclusive end)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( 2, 0, 2 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );

	// Overwritten:
	t.strictEqual( p[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 1.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (negative end)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( 2, 0, -3 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );

	// Overwritten:
	t.strictEqual( p[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 1.0, 'returns expected value' );

	// Remain the same:
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (target >= length)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( p.length, 3 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );
	t.strictEqual( p[ 2 ], 2.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 3.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 4.0, 'returns expected value' );

	t.end();
});

tape( 'the method copies a sequence of elements within a tuple (target > start)', function test( t ) {
	var Point;
	var arr;
	var p;

	arr = [
		0.0,
		1.0,
		2.0,
		3.0,
		4.0
	];

	Point = namedtypetuple( [ 'x', 'y', 'z', 'w', 'v' ] );
	p = new Point( arr );

	p.copyWithin( 2, 0 );

	// Remain the same:
	t.strictEqual( p[ 0 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 1 ], 1.0, 'returns expected value' );

	// Overwritten:
	t.strictEqual( p[ 2 ], 0.0, 'returns expected value' );
	t.strictEqual( p[ 3 ], 1.0, 'returns expected value' );
	t.strictEqual( p[ 4 ], 2.0, 'returns expected value' );

	t.end();
});
