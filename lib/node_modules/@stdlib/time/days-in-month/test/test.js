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
var daysInMonth = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof daysInMonth, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if provided a first argument which is not either a string, integer, or `Date` object (1 argument)', function test( t ) {
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
			daysInMonth( value );
		};
	}
});

tape( 'the function throws a type error if provided a first argument which is not either a string or integer (2 arguments)', function test( t ) {
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
			daysInMonth( value, 2016 );
		};
	}
});

tape( 'the function throws a type error if provided a second argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
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
			daysInMonth( 2, value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized month (1 argument)', function test( t ) {
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
			daysInMonth( value );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized month (2 arguments)', function test( t ) {
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
			daysInMonth( value, 2016 );
		};
	}
});

tape( 'the function throws a range error if provided an integer month value outside the interval `[1,12]` (1 argument)', function test( t ) {
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
			daysInMonth( value );
		};
	}
});

tape( 'the function throws a range error if provided an integer month value outside the interval `[1,12]` (2 arguments)', function test( t ) {
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
			daysInMonth( value, 2016 );
		};
	}
});

tape( 'the function returns a number on the interval `[28,31]`', function test( t ) {
	var num = daysInMonth();
	t.strictEqual( typeof num, 'number', 'returns a number' );
	t.strictEqual( num >= 28 && num <= 31, true, 'returns a number on interval `[28,31]`' );
	t.end();
});

tape( 'the function returns `31` for January', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 1 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 1, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'jan', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'january', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'JAN', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'jAn', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function returns `28` for February in non-leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( bool ) {
			continue;
		}
		num = daysInMonth( 2, i );
		t.strictEqual( num, 28, 'returns 28' );
		num = daysInMonth( 'feb', i );
		t.strictEqual( num, 28, 'returns 28' );
		num = daysInMonth( 'february', i );
		t.strictEqual( num, 28, 'returns 28' );
		num = daysInMonth( 'FEB', i );
		t.strictEqual( num, 28, 'returns 28' );
		num = daysInMonth( 'feB', i );
		t.strictEqual( num, 28, 'returns 28' );
	}
	t.end();
});

tape( 'the function returns `29` for February in leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( !bool ) {
			continue;
		}
		num = daysInMonth( 2, i );
		t.strictEqual( num, 29, 'returns 29' );
		num = daysInMonth( 'feb', i );
		t.strictEqual( num, 29, 'returns 29' );
		num = daysInMonth( 'february', i );
		t.strictEqual( num, 29, 'returns 29' );
		num = daysInMonth( 'FEB', i );
		t.strictEqual( num, 29, 'returns 29' );
		num = daysInMonth( 'feB', i );
		t.strictEqual( num, 29, 'returns 29' );
	}
	t.end();
});

tape( 'the function returns `31` for March', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 3 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 3, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'mar', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'march', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'MAR', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'Mar', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function returns `30` for April', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 4 );
	t.strictEqual( num, 30, 'returns 30' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 4, i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'apr', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'april', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'APR', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'aPR', i );
		t.strictEqual( num, 30, 'returns 30' );
	}
	t.end();
});

tape( 'the function returns `31` for May', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 5 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 5, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'may', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'MAY', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'MaY', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function returns `30` for June', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 6 );
	t.strictEqual( num, 30, 'returns 30' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 6, i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'jun', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'june', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'JUN', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'Jun', i );
		t.strictEqual( num, 30, 'returns 30' );
	}
	t.end();
});

tape( 'the function returns `31` for July', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 7 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 7, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'jul', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'july', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'JUL', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'juL', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function returns `31` for August', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 8 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 8, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'aug', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'august', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'AUG', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'aUg', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function returns `30` for September', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 9 );
	t.strictEqual( num, 30, 'returns 30' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 9, i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'sep', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'september', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'SEP', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'SEp', i );
		t.strictEqual( num, 30, 'returns 30' );
	}
	t.end();
});

tape( 'the function returns `31` for October', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 10 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 10, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'oct', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'october', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'OCT', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'ocT', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function returns `30` for November', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 11 );
	t.strictEqual( num, 30, 'returns 30' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 11, i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'nov', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'november', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'NOV', i );
		t.strictEqual( num, 30, 'returns 30' );
		num = daysInMonth( 'nOv', i );
		t.strictEqual( num, 30, 'returns 30' );
	}
	t.end();
});

tape( 'the function returns `31` for December', function test( t ) {
	var num;
	var i;

	num = daysInMonth( 12 );
	t.strictEqual( num, 31, 'returns 31' );
	for ( i = 1900; i < 2020; i++ ) {
		num = daysInMonth( 12, i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'dec', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'december', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'DEC', i );
		t.strictEqual( num, 31, 'returns 31' );
		num = daysInMonth( 'Dec', i );
		t.strictEqual( num, 31, 'returns 31' );
	}
	t.end();
});

tape( 'the function supports providing a `Date` object', function test( t ) {
	var bool;
	var num;
	var yr;
	var d;
	var i;

	for ( i = 0; i < 2101; i++ ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-02-11T08:00:00.000Z' );
		num = daysInMonth( d );
		yr = d.getFullYear();
		bool = isLeapYear( yr );
		if ( bool ) {
			t.strictEqual( num, 29, 'returns 29 for '+yr );
		} else {
			t.strictEqual( num, 28, 'returns 28 for '+yr );
		}
	}
	t.end();
});
