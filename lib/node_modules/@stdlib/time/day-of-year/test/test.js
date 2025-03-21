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
var leftPad = require( '@stdlib/string/left-pad' );
var isLeapYear = require( '@stdlib/assert/is-leap-year' );
var dayOfYear = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dayOfYear, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if provided a first argument which is not a `Date` object (1 argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			dayOfYear( value );
		};
	}
});

tape( 'the function throws a type error if provided a first argument which is not either a string or integer (> 1 argument)', function test( t ) {
	var values;
	var i;

	values = [
		new Date(),
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
			dayOfYear( value, 9, 2016 );
		};
	}
});

tape( 'the function throws a type error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		new Date(),
		'5',
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
			dayOfYear( 2, value, 2017 );
		};
	}
});

tape( 'the function throws a type error if provided a third argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		new Date(),
		'5',
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
			dayOfYear( 2, 9, value );
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
			dayOfYear( value, 15, 2017 );
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
			dayOfYear( value, 9, 2017 );
		};
	}
});

tape( 'the function throws a range error if provided a day number outside the interval `[1,total_month_days]`', function test( t ) {
	var values;
	var i;

	values = [
		0,
		32,
		33,
		34,
		-1,
		-10
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws a range error if provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			dayOfYear( 12, value, 2017 );
		};
	}
});

tape( 'the function returns a number on the interval `[1,366]`', function test( t ) {
	var num = dayOfYear();
	t.strictEqual( typeof num, 'number', 'returns true' );
	t.strictEqual( num >= 1 && num <= 366, true, 'returns number on interval `[1,366]`' );
	t.end();
});

tape( 'the function returns a day number (leap year)', function test( t ) {
	var num;
	var i;

	for ( i = 1500; i < 2101; i += 4 ) {
		if ( !isLeapYear( i ) ) {
			continue;
		}
		num = dayOfYear( 1, 15, i );
		t.strictEqual( num, 15, 'returns 15 for '+i );

		num = dayOfYear( 'Feb', 15, i );
		t.strictEqual( num, 46, 'returns 46 for '+i );

		num = dayOfYear( 'march', 15, i );
		t.strictEqual( num, 75, 'returns 75 for '+i );

		num = dayOfYear( 'aPr', 15, i );
		t.strictEqual( num, 106, 'returns 106 for '+i );

		num = dayOfYear( 'maY', 15, i );
		t.strictEqual( num, 136, 'returns 136 for '+i );

		num = dayOfYear( 6, 15, i );
		t.strictEqual( num, 167, 'returns 167 for '+i );

		num = dayOfYear( 'JUL', 15, i );
		t.strictEqual( num, 197, 'returns 197 for '+i );

		num = dayOfYear( 'AUg', 15, i );
		t.strictEqual( num, 228, 'returns 228 for '+i );

		num = dayOfYear( 9, 15, i );
		t.strictEqual( num, 259, 'returns 259 for '+i );

		num = dayOfYear( 'oCt', 15, i );
		t.strictEqual( num, 289, 'returns 289 for '+i );

		num = dayOfYear( 'NoV', 15, i );
		t.strictEqual( num, 320, 'returns 320 for '+i );

		num = dayOfYear( 'Dec', 15, i );
		t.strictEqual( num, 350, 'returns 350 for '+i );
	}
	t.end();
});

tape( 'the function returns a day number (non-leap year)', function test( t ) {
	var num;
	var i;

	for ( i = 1500; i < 2101; i++ ) {
		if ( isLeapYear( i ) ) {
			continue;
		}
		num = dayOfYear( 1, 15, i );
		t.strictEqual( num, 15, 'returns 15 for '+i );

		num = dayOfYear( 'Feb', 15, i );
		t.strictEqual( num, 46, 'returns 46 for '+i );

		num = dayOfYear( 'march', 15, i );
		t.strictEqual( num, 74, 'returns 74 for '+i );

		num = dayOfYear( 'aPr', 15, i );
		t.strictEqual( num, 105, 'returns 105 for '+i );

		num = dayOfYear( 'maY', 15, i );
		t.strictEqual( num, 135, 'returns 135 for '+i );

		num = dayOfYear( 6, 15, i );
		t.strictEqual( num, 166, 'returns 166 for '+i );

		num = dayOfYear( 'JUL', 15, i );
		t.strictEqual( num, 196, 'returns 196 for '+i );

		num = dayOfYear( 'AUg', 15, i );
		t.strictEqual( num, 227, 'returns 227 for '+i );

		num = dayOfYear( 9, 15, i );
		t.strictEqual( num, 258, 'returns 258 for '+i );

		num = dayOfYear( 'oCt', 15, i );
		t.strictEqual( num, 288, 'returns 288 for '+i );

		num = dayOfYear( 'NoV', 15, i );
		t.strictEqual( num, 319, 'returns 319 for '+i );

		num = dayOfYear( 'Dec', 15, i );
		t.strictEqual( num, 349, 'returns 349 for '+i );
	}
	t.end();
});

tape( 'the function returns a day number (`Date`; leap year)', function test( t ) {
	var num;
	var yr;
	var d;
	var i;

	for ( i = 1500; i < 2101; i += 4 ) {
		if ( !isLeapYear( i ) ) {
			continue;
		}
		yr = leftPad( i.toString(), 4, '0' );

		d = new Date( yr+'-01-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 15, 'returns 15 for '+d.toString() );

		d = new Date( yr+'-02-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 46, 'returns 46 for '+d.toString() );

		d = new Date( yr+'-03-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 75, 'returns 75 for '+d.toString() );

		d = new Date( yr+'-04-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 106, 'returns 106 for '+d.toString() );

		d = new Date( yr+'-05-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 136, 'returns 136 for '+d.toString() );

		d = new Date( yr+'-06-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 167, 'returns 167 for '+d.toString() );

		d = new Date( yr+'-07-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 197, 'returns 197 for '+d.toString() );

		d = new Date( yr+'-08-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 228, 'returns 228 for '+d.toString() );

		d = new Date( yr+'-09-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 259, 'returns 259 for '+d.toString() );

		d = new Date( yr+'-10-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 289, 'returns 289 for '+d.toString() );

		d = new Date( yr+'-11-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 320, 'returns 320 for '+d.toString() );

		d = new Date( yr+'-12-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 350, 'returns 350 for '+d.toString() );
	}
	t.end();
});

tape( 'the function returns a day number (`Date`; non-leap year)', function test( t ) {
	var num;
	var yr;
	var d;
	var i;

	for ( i = 1500; i < 2101; i++ ) {
		if ( isLeapYear( i ) ) {
			continue;
		}
		yr = leftPad( i.toString(), 4, '0' );

		d = new Date( yr+'-01-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 15, 'returns 15 for '+d.toString() );

		d = new Date( yr+'-02-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 46, 'returns 46 for '+d.toString() );

		d = new Date( yr+'-03-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 74, 'returns 74 for '+d.toString() );

		d = new Date( yr+'-04-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 105, 'returns 105 for '+d.toString() );

		d = new Date( yr+'-05-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 135, 'returns 135 for '+d.toString() );

		d = new Date( yr+'-06-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 166, 'returns 166 for '+d.toString() );

		d = new Date( yr+'-07-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 196, 'returns 196 for '+d.toString() );

		d = new Date( yr+'-08-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 227, 'returns 227 for '+d.toString() );

		d = new Date( yr+'-09-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 258, 'returns 258 for '+d.toString() );

		d = new Date( yr+'-10-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 288, 'returns 288 for '+d.toString() );

		d = new Date( yr+'-11-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 319, 'returns 319 for '+d.toString() );

		d = new Date( yr+'-12-15T08:00:00.000Z' );
		num = dayOfYear( d );
		t.strictEqual( num, 349, 'returns 349 for '+d.toString() );
	}
	t.end();
});
