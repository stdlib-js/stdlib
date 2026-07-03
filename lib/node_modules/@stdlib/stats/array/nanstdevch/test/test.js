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
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var BooleanArray = require( '@stdlib/array/bool' );
var Complex128Array = require( '@stdlib/array/complex128' );
var nanstdevch = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof nanstdevch, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 1', function test( t ) {
	t.strictEqual( nanstdevch.length, 1, 'returns expected value' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an array-like object', function test( t ) {
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
			nanstdevch( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not an array-like object (correction)', function test( t ) {
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
			nanstdevch( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a first argument which has an unsupported data type', function test( t ) {
	var values;
	var i;

	values = [
		new BooleanArray( 4 ),
		new Complex128Array( 4 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanstdevch( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which has an unsupported data type (correction)', function test( t ) {
	var values;
	var i;

	values = [
		new BooleanArray( 4 ),
		new Complex128Array( 4 )
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			nanstdevch( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
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
			nanstdevch( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function calculates the population standard deviation of an array (ignoring `NaN` values)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ];
	v = nanstdevch( x, 0.0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-1) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = nanstdevch( x, 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = nanstdevch( x, 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the population standard deviation of an array (ignoring `NaN` values) (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ];
	v = nanstdevch( toAccessorArray( x ), 0.0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-1) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = nanstdevch( toAccessorArray( x ), 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = nanstdevch( toAccessorArray( x ), 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the population standard deviation of an array (ignoring `NaN` values) (array-like object)', function test( t ) {
	var x;
	var v;

	x = {
		'length': 7,
		'0': 1.0,
		'1': -2.0,
		'2': -4.0,
		'3': 5.0,
		'4': NaN,
		'5': 0.0,
		'6': 3.0
	};
	v = nanstdevch( x, 0.0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-1) ), 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of an array (ignoring `NaN` values) (default)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ];
	v = nanstdevch( x );
	t.strictEqual( v, sqrt( 53.5/(x.length-2) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = nanstdevch( x );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = nanstdevch( x );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of an array (ignoring `NaN` values) (default, accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ];
	v = nanstdevch( toAccessorArray( x ) );
	t.strictEqual( v, sqrt( 53.5/(x.length-2) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = nanstdevch( toAccessorArray( x ) );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, NaN ];
	v = nanstdevch( toAccessorArray( x ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of an array (ignoring `NaN` values)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ];
	v = nanstdevch( x, 1.0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-2) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = nanstdevch( x, 1.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = nanstdevch( x, 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function calculates the sample standard deviation of an array (ignoring `NaN` values) (accessors)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, NaN, 0.0, 3.0 ];
	v = nanstdevch( toAccessorArray( x ), 1.0 );
	t.strictEqual( v, sqrt( 53.5/(x.length-2) ), 'returns expected value' );

	x = [ -4.0, -4.0 ];
	v = nanstdevch( toAccessorArray( x ), 1.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN, NaN ];
	v = nanstdevch( toAccessorArray( x ), 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided an empty array, the function returns `NaN`', function test( t ) {
	var v = nanstdevch( [] );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an empty array, the function returns `NaN` (accessors)', function test( t ) {
	var v = nanstdevch( toAccessorArray( [] ) );
	t.strictEqual( isnan( v ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided an array containing a single element, the function returns `0` when computing the population standard deviation', function test( t ) {
	var v = nanstdevch( [ 1.0 ], 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided an array containing a single element, the function returns `0` when computing the population standard deviation (accessors)', function test( t ) {
	var v = nanstdevch( toAccessorArray( [ 1.0 ] ), 0.0 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `correction` parameter yielding a correction term less than or equal to `0`, the function returns `NaN`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = nanstdevch( x, x.length );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanstdevch( x, x.length+1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `correction` parameter yielding a correction term less than or equal to `0`, the function returns `NaN` (accessors)', function test( t ) {
	var x;
	var v;

	x = toAccessorArray( [ 1.0, -2.0, -4.0, 5.0, 3.0 ] );

	v = nanstdevch( x, x.length );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = nanstdevch( x, x.length+1 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});
