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
var hoursInMonth = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof hoursInMonth, 'function', 'main export is a function' );
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
			hoursInMonth( value );
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
			hoursInMonth( value, 2016 );
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
			hoursInMonth( 2, value );
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
			hoursInMonth( value );
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
			hoursInMonth( value, 2016 );
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
			hoursInMonth( value );
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
			hoursInMonth( value, 2016 );
		};
	}
});

tape( 'the function returns a number', function test( t ) {
	var num = hoursInMonth();
	t.strictEqual( typeof num, 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns `744` for January', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 1 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 1, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'jan', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'january', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'JAN', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'jAn', i );
		t.strictEqual( num, 744, 'returns 744' );
	}
	t.end();
});

tape( 'the function returns `672` for February in non-leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( bool ) {
			continue;
		}
		num = hoursInMonth( 2, i );
		t.strictEqual( num, 672, 'returns 672' );
		num = hoursInMonth( 'feb', i );
		t.strictEqual( num, 672, 'returns 672' );
		num = hoursInMonth( 'february', i );
		t.strictEqual( num, 672, 'returns 672' );
		num = hoursInMonth( 'FEB', i );
		t.strictEqual( num, 672, 'returns 672' );
		num = hoursInMonth( 'feB', i );
		t.strictEqual( num, 672, 'returns 672' );
	}
	t.end();
});

tape( 'the function returns `696` for February in leap years', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = 1900; i < 2020; i++ ) {
		bool = isLeapYear( i );
		if ( !bool ) {
			continue;
		}
		num = hoursInMonth( 2, i );
		t.strictEqual( num, 696, 'returns 696' );
		num = hoursInMonth( 'feb', i );
		t.strictEqual( num, 696, 'returns 696' );
		num = hoursInMonth( 'february', i );
		t.strictEqual( num, 696, 'returns 696' );
		num = hoursInMonth( 'FEB', i );
		t.strictEqual( num, 696, 'returns 696' );
		num = hoursInMonth( 'feB', i );
		t.strictEqual( num, 696, 'returns 696' );
	}
	t.end();
});

tape( 'the function returns `744` for March', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 3 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 3, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'mar', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'march', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'MAR', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'Mar', i );
		t.strictEqual( num, 744, 'returns 744' );
	}
	t.end();
});

tape( 'the function returns `720` for April', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 4 );
	t.strictEqual( num, 720, 'returns 720' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 4, i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'apr', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'april', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'APR', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'aPR', i );
		t.strictEqual( num, 720, 'returns 720' );
	}
	t.end();
});

tape( 'the function returns `744` for May', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 5 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 5, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'may', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'MAY', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'MaY', i );
		t.strictEqual( num, 744, 'returns 744' );
	}
	t.end();
});

tape( 'the function returns `720` for June', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 6 );
	t.strictEqual( num, 720, 'returns 720' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 6, i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'jun', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'june', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'JUN', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'Jun', i );
		t.strictEqual( num, 720, 'returns 720' );
	}
	t.end();
});

tape( 'the function returns `744` for July', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 7 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 7, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'jul', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'july', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'JUL', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'juL', i );
		t.strictEqual( num, 744, 'returns 744' );
	}
	t.end();
});

tape( 'the function returns `744` for August', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 8 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 8, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'aug', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'august', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'AUG', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'aUg', i );
		t.strictEqual( num, 744, 'returns 744' );
	}
	t.end();
});

tape( 'the function returns `720` for September', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 9 );
	t.strictEqual( num, 720, 'returns 720' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 9, i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'sep', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'september', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'SEP', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'SEp', i );
		t.strictEqual( num, 720, 'returns 720' );
	}
	t.end();
});

tape( 'the function returns `744` for October', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 10 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 10, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'oct', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'october', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'OCT', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'ocT', i );
		t.strictEqual( num, 744, 'returns 744' );
	}
	t.end();
});

tape( 'the function returns `720` for November', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 11 );
	t.strictEqual( num, 720, 'returns 720' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 11, i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'nov', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'november', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'NOV', i );
		t.strictEqual( num, 720, 'returns 720' );
		num = hoursInMonth( 'nOv', i );
		t.strictEqual( num, 720, 'returns 720' );
	}
	t.end();
});

tape( 'the function returns `744` for December', function test( t ) {
	var num;
	var i;

	num = hoursInMonth( 12 );
	t.strictEqual( num, 744, 'returns 744' );
	for ( i = 1900; i < 2020; i++ ) {
		num = hoursInMonth( 12, i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'dec', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'december', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'DEC', i );
		t.strictEqual( num, 744, 'returns 744' );
		num = hoursInMonth( 'Dec', i );
		t.strictEqual( num, 744, 'returns 744' );
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
		num = hoursInMonth( d );
		yr = d.getFullYear();
		bool = isLeapYear( yr );
		if ( bool ) {
			t.strictEqual( num, 696, 'returns 696 for '+yr );
		} else {
			t.strictEqual( num, 672, 'returns 672 for '+yr );
		}
	}
	t.end();
});
