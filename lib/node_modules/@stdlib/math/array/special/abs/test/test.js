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
var empty = require( '@stdlib/array/empty' );
var Float64Array = require( '@stdlib/array/float64' );
var isArray = require( '@stdlib/assert/is-array' );
var isFloat64Array = require( '@stdlib/assert/is-float64array' );
var abs = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof abs, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a collection (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a collection having an allowed data type', function test( t ) {
	var values;
	var i;

	values = [
		empty( 5, 'bool' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a collection having an allowed data type (options)', function test( t ) {
	var values;
	var i;

	values = [
		empty( 5, 'bool' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( empty( 5, 'generic' ), value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `dtype` option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'foo',
		'bar',
		5,
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
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs( empty( 5, 'generic' ), {
				'dtype': value
			});
		};
	}
});

tape( 'the function performs element-wise computation', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = abs( x );
	t.strictEqual( isArray( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying an output array data type', function test( t ) {
	var expected;
	var actual;
	var x;

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

	actual = abs( x, {
		'dtype': 'float64'
	});
	t.strictEqual( isFloat64Array( actual ), true, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function has an `assign` method which throws an error if provided a first argument which is not a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( value, empty( 5, 'generic' ) );
		};
	}
});

tape( 'the function has an `assign` method which throws an error if provided a first argument which is not a collection having an allowed data type', function test( t ) {
	var values;
	var i;

	values = [
		empty( 5, 'bool' )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( value, empty( 5, 'generic' ) );
		};
	}
});

tape( 'the function has an `assign` method which throws an error if provided a second argument which is not a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			abs.assign( empty( 5, 'generic' ), value );
		};
	}
});

tape( 'the function has an `assign` method which performs element-wise computation and assigns results to a provided output array', function test( t ) {
	var expected;
	var actual;
	var out;
	var x;

	x = [ -1.0, 2.0, -3.0, 4.0 ];
	out = empty( x.length, 'generic' );
	expected = [ 1.0, 2.0, 3.0, 4.0 ];

	actual = abs.assign( x, out );
	t.strictEqual( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});
