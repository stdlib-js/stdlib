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

tape( 'a tuple has a `forEach` method', function test( t ) {
	var Point;
	var p;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point();

	t.strictEqual( hasProp( p, 'forEach' ), true, 'returns expected value' );
	t.strictEqual( isFunction( p.forEach ), true, 'returns expected value' );
	t.end();
});

tape( 'the method throws an error if invoked with a `this` context which is not a tuple instance', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point( [ 1, 2 ] );

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
			return p.forEach.call( value, fcn );
		};
	}

	function fcn( v ) {
		return v;
	}
});

tape( 'the method throws an error if provided a first argument which is not a function', function test( t ) {
	var values;
	var Point;
	var p;
	var i;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point( [ 1, 2 ] );

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
			return p.forEach( value );
		};
	}
});

tape( 'the method returns `undefined`', function test( t ) {
	var Point;
	var out;
	var p;

	Point = namedtypedtuple( [ 'x', 'y' ] );
	p = new Point( [ 10, 20 ] );
	out = p.forEach( fcn );

	t.strictEqual( out, void 0, 'returns expected value' );
	t.end();

	function fcn( v ) {
		return v;
	}
});

tape( 'the method invokes a provided function for each element in a tuple', function test( t ) {
	var fieldNames;
	var indices;
	var values;
	var tuples;
	var Point;
	var p;

	indices = [];
	values = [];
	fieldNames = [];
	tuples = [];

	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 1, 2, 3 ] );
	p.forEach( fcn );

	t.deepEqual( values, [ 1, 2, 3 ], 'returns expected values' );
	t.deepEqual( indices, [ 0, 1, 2 ], 'returns expected indices' );
	t.deepEqual( fieldNames, [ 'x', 'y', 'z' ], 'returns expected field names' );
	t.strictEqual( tuples[ 0 ], p, 'returns expected tuple reference' );
	t.strictEqual( tuples[ 1 ], p, 'returns expected tuple reference' );
	t.strictEqual( tuples[ 2 ], p, 'returns expected tuple reference' );

	t.end();

	function fcn( v, i, fieldName, tuple ) {
		values.push( v );
		indices.push( i );
		fieldNames.push( fieldName );
		tuples.push( tuple );
	}
});

tape( 'the method supports providing an execution context', function test( t ) {
	var Point;
	var ctx;
	var p;

	ctx = {
		'count': 0
	};
	Point = namedtypedtuple( [ 'x', 'y', 'z' ] );
	p = new Point( [ 1, 2, 3 ] );
	p.forEach( fcn, ctx );

	t.strictEqual( ctx.count, 3, 'returns expected value' );

	t.end();

	function fcn() {
		this.count += 1; // eslint-disable-line no-invalid-this
	}
});
