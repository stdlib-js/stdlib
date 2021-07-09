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
var quarterOfYear = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof quarterOfYear, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if provided a value which is not either an integer, string, or a `Date` object', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
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
		t.throws( badValue( values[i] ), TypeError, 'throws a type error if provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			quarterOfYear( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized month', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'apri',
		'ju',
		'sept',
		'foo',
		'bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error if provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			quarterOfYear( value );
		};
	}
});

tape( 'the function throws a range error if provided an integer month value outside the interval `[1,12]`', function test( t ) {
	var values;
	var i;

	values = [
		0,
		13,
		14,
		15,
		-1,
		-10
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error if provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			quarterOfYear( value );
		};
	}
});

tape( 'the function returns a number on the interval `[1,4]`', function test( t ) {
	var q = quarterOfYear();
	t.strictEqual( q >= 1 && q <= 4, true, 'returns true' );
	t.end();
});

tape( 'the function returns the quarter of the year (non-Date)', function test( t ) {
	var q;

	q = quarterOfYear( 1 );
	t.strictEqual( q, 1, 'returns expected quarter' );

	q = quarterOfYear( 'Feb' );
	t.strictEqual( q, 1, 'returns expected quarter' );

	q = quarterOfYear( 'MARCH' );
	t.strictEqual( q, 1, 'returns expected quarter' );

	q = quarterOfYear( 'ApR' );
	t.strictEqual( q, 2, 'returns expected quarter' );

	q = quarterOfYear( 'maY' );
	t.strictEqual( q, 2, 'returns expected quarter' );

	q = quarterOfYear( 'June' );
	t.strictEqual( q, 2, 'returns expected quarter' );

	q = quarterOfYear( 'july' );
	t.strictEqual( q, 3, 'returns expected quarter' );

	q = quarterOfYear( 8 );
	t.strictEqual( q, 3, 'returns expected quarter' );

	q = quarterOfYear( 'SEPTEmber' );
	t.strictEqual( q, 3, 'returns expected quarter' );

	q = quarterOfYear( 'OctobeR' );
	t.strictEqual( q, 4, 'returns expected quarter' );

	q = quarterOfYear( 11 );
	t.strictEqual( q, 4, 'returns expected quarter' );

	q = quarterOfYear( 'December' );
	t.strictEqual( q, 4, 'returns expected quarter' );

	t.end();
});

tape( 'the function returns the quarter of the year (`Date`)', function test( t ) {
	var d;
	var q;

	d = new Date( '2017-01-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 1, 'returns expected quarter' );

	d = new Date( '2017-02-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 1, 'returns expected quarter' );

	d = new Date( '2017-03-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 1, 'returns expected quarter' );

	d = new Date( '2017-04-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 2, 'returns expected quarter' );

	d = new Date( '2017-05-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 2, 'returns expected quarter' );

	d = new Date( '2017-06-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 2, 'returns expected quarter' );

	d = new Date( '2017-07-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 3, 'returns expected quarter' );

	d = new Date( '2017-08-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 3, 'returns expected quarter' );

	d = new Date( '2017-09-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 3, 'returns expected quarter' );

	d = new Date( '2017-10-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 4, 'returns expected quarter' );

	d = new Date( '2017-11-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 4, 'returns expected quarter' );

	d = new Date( '2017-12-11T08:00:00.000Z' );
	q = quarterOfYear( d );
	t.strictEqual( q, 4, 'returns expected quarter' );

	t.end();
});
