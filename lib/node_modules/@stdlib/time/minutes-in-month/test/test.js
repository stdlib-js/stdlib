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
var minutesInMonth = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minutesInMonth, 'function', 'main export is a function' );
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
			minutesInMonth( value );
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
			minutesInMonth( value, 2016 );
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
			minutesInMonth( 2, value );
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
			minutesInMonth( value );
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
			minutesInMonth( value, 2016 );
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
			minutesInMonth( value );
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
			minutesInMonth( value, 2016 );
		};
	}
});

tape( 'the function returns a number', function test( t ) {
	var num = minutesInMonth();
	t.strictEqual( typeof num, 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns `44640` for January', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 1 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 1, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'jan', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'january', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'JAN', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'jAn', i );
		t.strictEqual( num, 44640, 'returns 44640' );
	}
	t.end();
});

tape( 'the function returns `40320` for February in non-leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( bool ) {
			continue;
		}
		num = minutesInMonth( 2, i );
		t.strictEqual( num, 40320, 'returns 40320' );
		num = minutesInMonth( 'feb', i );
		t.strictEqual( num, 40320, 'returns 40320' );
		num = minutesInMonth( 'february', i );
		t.strictEqual( num, 40320, 'returns 40320' );
		num = minutesInMonth( 'FEB', i );
		t.strictEqual( num, 40320, 'returns 40320' );
		num = minutesInMonth( 'feB', i );
		t.strictEqual( num, 40320, 'returns 40320' );
	}
	t.end();
});

tape( 'the function returns `41760` for February in leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( !bool ) {
			continue;
		}
		num = minutesInMonth( 2, i );
		t.strictEqual( num, 41760, 'returns 41760' );
		num = minutesInMonth( 'feb', i );
		t.strictEqual( num, 41760, 'returns 41760' );
		num = minutesInMonth( 'february', i );
		t.strictEqual( num, 41760, 'returns 41760' );
		num = minutesInMonth( 'FEB', i );
		t.strictEqual( num, 41760, 'returns 41760' );
		num = minutesInMonth( 'feB', i );
		t.strictEqual( num, 41760, 'returns 41760' );
	}
	t.end();
});

tape( 'the function returns `44640` for March', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 3 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 3, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'mar', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'march', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'MAR', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'Mar', i );
		t.strictEqual( num, 44640, 'returns 44640' );
	}
	t.end();
});

tape( 'the function returns `43200` for April', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 4 );
	t.strictEqual( num, 43200, 'returns 43200' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 4, i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'apr', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'april', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'APR', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'aPR', i );
		t.strictEqual( num, 43200, 'returns 43200' );
	}
	t.end();
});

tape( 'the function returns `44640` for May', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 5 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 5, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'may', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'MAY', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'MaY', i );
		t.strictEqual( num, 44640, 'returns 44640' );
	}
	t.end();
});

tape( 'the function returns `43200` for June', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 6 );
	t.strictEqual( num, 43200, 'returns 43200' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 6, i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'jun', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'june', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'JUN', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'Jun', i );
		t.strictEqual( num, 43200, 'returns 43200' );
	}
	t.end();
});

tape( 'the function returns `44640` for July', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 7 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 7, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'jul', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'july', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'JUL', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'juL', i );
		t.strictEqual( num, 44640, 'returns 44640' );
	}
	t.end();
});

tape( 'the function returns `44640` for August', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 8 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 8, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'aug', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'august', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'AUG', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'aUg', i );
		t.strictEqual( num, 44640, 'returns 44640' );
	}
	t.end();
});

tape( 'the function returns `43200` for September', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 9 );
	t.strictEqual( num, 43200, 'returns 43200' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 9, i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'sep', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'september', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'SEP', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'SEp', i );
		t.strictEqual( num, 43200, 'returns 43200' );
	}
	t.end();
});

tape( 'the function returns `44640` for October', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 10 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 10, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'oct', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'october', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'OCT', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'ocT', i );
		t.strictEqual( num, 44640, 'returns 44640' );
	}
	t.end();
});

tape( 'the function returns `43200` for November', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 11 );
	t.strictEqual( num, 43200, 'returns 43200' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 11, i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'nov', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'november', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'NOV', i );
		t.strictEqual( num, 43200, 'returns 43200' );
		num = minutesInMonth( 'nOv', i );
		t.strictEqual( num, 43200, 'returns 43200' );
	}
	t.end();
});

tape( 'the function returns `44640` for December', function test( t ) {
	var num;
	var i;

	num = minutesInMonth( 12 );
	t.strictEqual( num, 44640, 'returns 44640' );
	for ( i = 1900; i < 2020; i++ ) {
		num = minutesInMonth( 12, i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'dec', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'december', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'DEC', i );
		t.strictEqual( num, 44640, 'returns 44640' );
		num = minutesInMonth( 'Dec', i );
		t.strictEqual( num, 44640, 'returns 44640' );
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
		num = minutesInMonth( d );
		yr = d.getFullYear();
		bool = isLeapYear( yr );
		if ( bool ) {
			t.strictEqual( num, 41760, 'returns 41760 for '+yr );
		} else {
			t.strictEqual( num, 40320, 'returns 40320 for '+yr );
		}
	}
	t.end();
});
