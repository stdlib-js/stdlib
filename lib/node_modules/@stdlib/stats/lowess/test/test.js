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
var lowess = require( './../lib' );


// FIXTURES //

var OPTS1 = require( './fixtures/opts1.json' );
var OPTS2 = require( './fixtures/opts2.json' );
var OPTS3 = require( './fixtures/opts3.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof lowess, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 'not a numeric array, hehe' ],
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			lowess( value, [1, 2, 3] );
		};
	}
});

tape( 'the function throws an error if the `y` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 'not a numeric array, hehe' ],
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			lowess( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if provided arrays of differing lengths', function test( t ) {
	var x = [ 0.2, 0.5, 0.75, 0.1, 0.5 ];
	var y = [ 0.5, 0.4, 0.3, 0.9 ];

	t.throws( badValue, Error, 'throws an error when provided `x` and `y` with unequal lengths' );
	t.end();

	function badValue() {
		return lowess( x, y );
	}
});

tape( 'the function returns smoothed values using the LOWESS algorithm (f=0.25,nsteps=0,delta=0.0)', function test( t ) {
	var expected;
	var out;
	var i;
	var x;
	var y;

	// Test against fixtures taken from http://netlib.org/go/lowess.f
	x = OPTS1.x;
	y = OPTS1.y;
	expected = OPTS1.expected;
	out = lowess( x, y, {
		'f': 0.25,
		'nsteps': 0,
		'delta': 0.0
	});
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( out.x[ i ].toFixed( 3 ), x[ i ].toFixed( 3 ), 'returns expected x-value' );
		t.strictEqual( out.y[ i ].toFixed( 3 ), expected[ i ].toFixed( 3 ), 'returns expected y-value' );
	}
	t.end();
});

tape( 'the function returns smoothed values using the LOWESS algorithm (f=0.25,nsteps=0,delta=3.0)', function test( t ) {
	var expected;
	var out;
	var i;
	var x;
	var y;

	// Test against fixtures taken from http://netlib.org/go/lowess.f
	x = OPTS2.x;
	y = OPTS2.y;
	expected = OPTS2.expected;
	out = lowess( x, y, {
		'f': 0.25,
		'nsteps': 0,
		'delta': 3.0
	});
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( out.x[ i ].toFixed( 3 ), x[ i ].toFixed( 3 ), 'returns expected x-value' );
		t.strictEqual( out.y[ i ].toFixed( 3 ), expected[ i ].toFixed( 3 ), 'returns expected y-value' );
	}
	t.end();
});

tape( 'the function returns smoothed values using the LOWESS algorithm (f=0.25,nsteps=2,delta=0.0)', function test( t ) {
	var expected;
	var out;
	var i;
	var x;
	var y;

	// Test against fixtures taken from http://netlib.org/go/lowess.f
	x = OPTS3.x;
	y = OPTS3.y;
	expected = OPTS3.expected;
	out = lowess( x, y, {
		'f': 0.25,
		'nsteps': 2,
		'delta': 0.0
	});
	for ( i = 0; i < x.length; i++ ) {
		t.strictEqual( out.x[ i ].toFixed( 3 ), x[ i ].toFixed( 3 ), 'returns expected x-value' );
		t.strictEqual( out.y[ i ].toFixed( 3 ), expected[ i ].toFixed( 3 ), 'returns expected y-value' );
	}
	t.end();
});
