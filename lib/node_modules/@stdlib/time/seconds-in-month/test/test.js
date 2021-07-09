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
var secondsInMonth = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof secondsInMonth, 'function', 'main export is a function' );
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
			secondsInMonth( value );
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
			secondsInMonth( value, 2016 );
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
			secondsInMonth( 2, value );
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
			secondsInMonth( value );
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
			secondsInMonth( value, 2016 );
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
			secondsInMonth( value );
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
			secondsInMonth( value, 2016 );
		};
	}
});

tape( 'the function returns a number', function test( t ) {
	var num = secondsInMonth();
	t.strictEqual( typeof num, 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns `2678400` for January', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 1 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 1, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'jan', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'january', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'JAN', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'jAn', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
	}
	t.end();
});

tape( 'the function returns `2419200` for February in non-leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( bool ) {
			continue;
		}
		num = secondsInMonth( 2, i );
		t.strictEqual( num, 2419200, 'returns 2419200' );
		num = secondsInMonth( 'feb', i );
		t.strictEqual( num, 2419200, 'returns 2419200' );
		num = secondsInMonth( 'february', i );
		t.strictEqual( num, 2419200, 'returns 2419200' );
		num = secondsInMonth( 'FEB', i );
		t.strictEqual( num, 2419200, 'returns 2419200' );
		num = secondsInMonth( 'feB', i );
		t.strictEqual( num, 2419200, 'returns 2419200' );
	}
	t.end();
});

tape( 'the function returns `2505600` for February in leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( !bool ) {
			continue;
		}
		num = secondsInMonth( 2, i );
		t.strictEqual( num, 2505600, 'returns 2505600' );
		num = secondsInMonth( 'feb', i );
		t.strictEqual( num, 2505600, 'returns 2505600' );
		num = secondsInMonth( 'february', i );
		t.strictEqual( num, 2505600, 'returns 2505600' );
		num = secondsInMonth( 'FEB', i );
		t.strictEqual( num, 2505600, 'returns 2505600' );
		num = secondsInMonth( 'feB', i );
		t.strictEqual( num, 2505600, 'returns 2505600' );
	}
	t.end();
});

tape( 'the function returns `2678400` for March', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 3 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 3, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'mar', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'march', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'MAR', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'Mar', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
	}
	t.end();
});

tape( 'the function returns `2592000` for April', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 4 );
	t.strictEqual( num, 2592000, 'returns 2592000' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 4, i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'apr', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'april', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'APR', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'aPR', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
	}
	t.end();
});

tape( 'the function returns `2678400` for May', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 5 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 5, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'may', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'MAY', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'MaY', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
	}
	t.end();
});

tape( 'the function returns `2592000` for June', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 6 );
	t.strictEqual( num, 2592000, 'returns 2592000' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 6, i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'jun', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'june', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'JUN', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'Jun', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
	}
	t.end();
});

tape( 'the function returns `2678400` for July', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 7 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 7, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'jul', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'july', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'JUL', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'juL', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
	}
	t.end();
});

tape( 'the function returns `2678400` for August', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 8 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 8, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'aug', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'august', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'AUG', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'aUg', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
	}
	t.end();
});

tape( 'the function returns `2592000` for September', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 9 );
	t.strictEqual( num, 2592000, 'returns 2592000' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 9, i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'sep', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'september', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'SEP', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'SEp', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
	}
	t.end();
});

tape( 'the function returns `2678400` for October', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 10 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 10, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'oct', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'october', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'OCT', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'ocT', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
	}
	t.end();
});

tape( 'the function returns `2592000` for November', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 11 );
	t.strictEqual( num, 2592000, 'returns 2592000' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 11, i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'nov', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'november', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'NOV', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
		num = secondsInMonth( 'nOv', i );
		t.strictEqual( num, 2592000, 'returns 2592000' );
	}
	t.end();
});

tape( 'the function returns `2678400` for December', function test( t ) {
	var num;
	var i;

	num = secondsInMonth( 12 );
	t.strictEqual( num, 2678400, 'returns 2678400' );
	for ( i = 1900; i < 2020; i++ ) {
		num = secondsInMonth( 12, i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'dec', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'december', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'DEC', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
		num = secondsInMonth( 'Dec', i );
		t.strictEqual( num, 2678400, 'returns 2678400' );
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
		num = secondsInMonth( d );
		yr = d.getFullYear();
		bool = isLeapYear( yr );
		if ( bool ) {
			t.strictEqual( num, 2505600, 'returns 2505600 for '+yr );
		} else {
			t.strictEqual( num, 2419200, 'returns 2419200 for '+yr );
		}
	}
	t.end();
});
