/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
var PI = require( '@stdlib/constants/float64/pi' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var format = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof format, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a primitive string', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		null,
		void 0,
		true,
		[],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			format( value );
		};
	}
});

tape( 'the function throws an error if provided a format string with an invalid format specifier', function test( t ) {
	var values;
	var i;

	values = [
		'%C',
		'%S',
		'%U',
		'%Z'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			format( value, 'beep' );
		};
	}
});

tape( 'the function returns a formatted string (`s` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%s';
	actual = format( str, 'beep' );
	expected = 'beep';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %s';
	actual = format( str, 'boop' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%s %s baz';
	actual = format( str, 'beep', 'boop' );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, minimum width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%6s';
	actual = format( str, 'beep' );
	expected = '  beep';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %6s';
	actual = format( str, 'boop' );
	expected = 'beep   boop';

	str = '%2s %2s baz';
	actual = format( str, 'beep', 'boop' );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, variable width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%*s';
	actual = format( str, 6, 'beep' );
	expected = '  beep';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %*s';
	actual = format( str, 6, 'boop' );
	expected = 'beep   boop';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%*s %*s baz';
	actual = format( str, 6, 'beep', 4, 'boop' );
	expected = '  beep boop baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, minimum width, left-justified)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%-6s';
	actual = format( str, 'beep' );
	expected = 'beep  ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %-6s';
	actual = format( str, 'boop' );
	expected = 'beep boop  ';

	str = '%-2s %-2s baz';
	actual = format( str, 'beep', 'boop' );
	expected = 'beep boop baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%.2s';
	actual = format( str, 'beep' );
	expected = 'be';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %.2s';
	actual = format( str, 'boop' );
	expected = 'beep bo';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, precision, minimum width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%6.2s';
	actual = format( str, 'beep' );
	expected = '    be';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %6.2s';
	actual = format( str, 'boop' );
	expected = 'beep     bo';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%6.8s %4.2s baz';
	actual = format( str, 'beep', 'boop' );
	expected = 'beep bo   b';

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, precision, minimum width, zero-padded)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%06.2s';
	actual = format( str, 'beep' );
	expected = '0000be';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %06.2s';
	actual = format( str, 'boop' );
	expected = 'beep 0000bo';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%06.8s %04.2s baz';
	actual = format( str, 'beep', 'boop' );
	expected = 'beep bo00 b';

	t.end();
});

tape( 'the function returns a formatted string (`c` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%c';
	actual = format( str, 70 );
	expected = 'F';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %c';
	actual = format( str, 75 );
	expected = 'beep K';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%c %c baz';
	actual = format( str, 70, 75 );
	expected = 'F K baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`c` specifier, string arguments)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%c';
	actual = format( str, 'b' );
	expected = 'b';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %c';
	actual = format( str, 'boop' );
	expected = 'beep boop';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`c` specifier, minimum width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%2c';
	actual = format( str, 80 );
	expected = ' P';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %4c';
	actual = format( str, 90 );
	expected = 'beep    Z';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%2c %c baz';
	actual = format( str, 80, 90 );
	expected = ' P Z baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`c` specifier, minimum width, left-justified)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%-2c';
	actual = format( str, 80 );
	expected = 'P ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %-4c';
	actual = format( str, 90 );
	expected = 'beep Z   ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%-2c %-c baz';
	actual = format( str, 80, 90 );
	expected = 'P  Z baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`d` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%d';
	actual = format( str, 3 );
	expected = '3';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %d';
	actual = format( str, 5.8 );
	expected = 'beep 5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%d %d baz';
	actual = format( str, 3, 5 );
	expected = '3 5 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`d` specifier, sign)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%+d';
	actual = format( str, 3 );
	expected = '+3';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %+d';
	actual = format( str, 5.8 );
	expected = 'beep +5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%+d %+d baz';
	actual = format( str, 3, 5 );
	expected = '+3 +5 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%+d %+d baz';
	actual = format( str, -3, -5 );
	expected = '-3 -5 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`d` specifier, minimum width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%2d';
	actual = format( str, 3 );
	expected = ' 3';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %4d';
	actual = format( str, 5 );
	expected = 'beep    5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%2d %d baz';
	actual = format( str, 3.1, 5 );
	expected = ' 3 5 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`d` specifier, minimum width, left-justified)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%-2d';
	actual = format( str, 3 );
	expected = '3 ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %-4d';
	actual = format( str, 5.2 );
	expected = 'beep 5   ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%-3d baz';
	actual = format( str, 3, 5 );
	expected = '3   baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`d` specifier, minimum width, zero-padded)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%02d';
	actual = format( str, 3 );
	expected = '03';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %04d';
	actual = format( str, 5.1 );
	expected = 'beep 0005';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%02d %d baz';
	actual = format( str, 3, 5 );
	expected = '03 5 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%f';
	actual = format( str, 3.14 );
	expected = '3.140000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %f';
	actual = format( str, 5.0 );
	expected = 'beep 5.000000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%f %f baz';
	actual = format( str, 3.14, 5.0 );
	expected = '3.140000 5.000000 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%f %f baz';
	actual = format( str, PINF, NINF );
	expected = 'infinity -infinity baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%f';
	actual = format( str, NaN );
	expected = 'nan';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`F` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%F';
	actual = format( str, 3.14 );
	expected = '3.140000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %F';
	actual = format( str, 5.0 );
	expected = 'beep 5.000000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%F %F baz';
	actual = format( str, 3.14, 5.0 );
	expected = '3.140000 5.000000 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%F %F baz';
	actual = format( str, PINF, NINF );
	expected = 'INFINITY -INFINITY baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%F';
	actual = format( str, NaN );
	expected = 'NAN';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier, specified precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%.3f';
	actual = format( str, PI );
	expected = '3.142';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %.3f';
	actual = format( str, 5.0 );
	expected = 'beep 5.000';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier, variable precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%.*f';
	actual = format( str, 3, PI );
	expected = '3.142';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %.*f';
	actual = format( str, 3, 5.0 );
	expected = 'beep 5.000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%.*f %.*f baz';
	actual = format( str, 3, PI, 3, PI );
	expected = '3.142 3.142 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`g` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%g';
	actual = format( str, PI );
	expected = '3.14159';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %g';
	actual = format( str, 1.0003212e-10 );
	expected = 'beep 1.00032e-10';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%g %g baz';
	actual = format( str, PI, 1.0003212e-10 );
	expected = '3.14159 1.00032e-10 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`G` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%G';
	actual = format( str, PI );
	expected = '3.14159';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%3.G';
	actual = format( str, 100 );
	expected = '1E+02';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %G';
	actual = format( str, 1.0003212e-10 );
	expected = 'beep 1.00032E-10';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%G %G baz';
	actual = format( str, PI, 1.0003212e-10 );
	expected = '3.14159 1.00032E-10 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`G` specifier, alternate form)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%#G';
	actual = format( str, PI );
	expected = '3.14159';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%#3.G';
	actual = format( str, 100 );
	expected = '1.E+02'; // always contains a decimal point!
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %#G';
	actual = format( str, 1.0003212e-10 );
	expected = 'beep 1.00032E-10';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%#G %#G baz';
	actual = format( str, PI, 1.0003212e-10 );
	expected = '3.14159 1.00032E-10 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier, minimum width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%12f';
	actual = format( str, 3.14 );
	expected = '    3.140000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %12f';
	actual = format( str, 5.0 );
	expected = 'beep     5.000000';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier, decimal precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%.3f';
	actual = format( str, 3.14 );
	expected = '3.140';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%.3f';
	actual = format( str, PI );
	expected = '3.142';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %.3f';
	actual = format( str, 5.0 );
	expected = 'beep 5.000';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier, minimum width, decimal precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%8.3f';
	actual = format( str, 3.14 );
	expected = '   3.140';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %8.3f';
	actual = format( str, 5.0 );
	expected = 'beep    5.000';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%8.3f %.3f baz';
	actual = format( str, 3.14, 5.0 );
	expected = '   3.140 5.000 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`f` specifier, minimum width, left-justified, decimal precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%-8.3f';
	actual = format( str, 3.14 );
	expected = '3.140   ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %-8.3f';
	actual = format( str, 5.0 );
	expected = 'beep 5.000   ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%-8.3f %.3f baz';
	actual = format( str, 3.14, 5.0 );
	expected = '3.140    5.000 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`b` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%b';
	actual = format( str, 3 );
	expected = '11';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %b';
	actual = format( str, 5 );
	expected = 'beep 101';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%b %b baz';
	actual = format( str, 3, 5 );
	expected = '11 101 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`b` specifier, alternate form)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%#b';
	actual = format( str, 3 );
	expected = '11';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %#b';
	actual = format( str, 5 );
	expected = 'beep 101';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%#b %#b baz';
	actual = format( str, 3, 5 );
	expected = '11 101 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`b` specifier, minimum width)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%12b';
	actual = format( str, 3 );
	expected = '          11';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %12b';
	actual = format( str, 5 );
	expected = 'beep          101';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`b` specifier, minimum width, left-justified)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%-12b';
	actual = format( str, 3 );
	expected = '11          ';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %-12b';
	actual = format( str, 5 );
	expected = 'beep 101         ';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`b` specifier, minimum width,  zero-padded)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%012b';
	actual = format( str, 3 );
	expected = '000000000011';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %012b';
	actual = format( str, 5 );
	expected = 'beep 000000000101';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`o` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%o';
	actual = format( str, 12 );
	expected = '14';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %o';
	actual = format( str, 5 );
	expected = 'beep 5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%o %o baz';
	actual = format( str, 8, 9 );
	expected = '10 11 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`o` specifier, alternate form)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%#o';
	actual = format( str, 12 );
	expected = '014';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %#o';
	actual = format( str, 5 );
	expected = 'beep 05';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%#o %#o baz';
	actual = format( str, 8, 9 );
	expected = '010 011 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`x` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%x';
	actual = format( str, 12 );
	expected = 'c';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %x';
	actual = format( str, 5 );
	expected = 'beep 5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%x %x baz';
	actual = format( str, 14, 15 );
	expected = 'e f baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`x` specifier, alternate form)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%#x';
	actual = format( str, 12 );
	expected = '0xc';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %#x';
	actual = format( str, 5 );
	expected = 'beep 0x5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%#x %#x baz';
	actual = format( str, 14, 15 );
	expected = '0xe 0xf baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`X` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%X';
	actual = format( str, 12 );
	expected = 'C';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %X';
	actual = format( str, 5 );
	expected = 'beep 5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%X %X baz';
	actual = format( str, 14, 15 );
	expected = 'E F baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`X` specifier, alternate form)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%#X';
	actual = format( str, 12 );
	expected = '0XC';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %#X';
	actual = format( str, 5 );
	expected = 'beep 0X5';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%#X %#X baz';
	actual = format( str, 14, 15 );
	expected = '0XE 0XF baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`u` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%u';
	actual = format( str, 12 );
	expected = '12';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %u';
	actual = format( str, -5 );
	expected = 'beep 4294967291';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%u %u baz';
	actual = format( str, 14, 15 );
	expected = '14 15 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`e` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%e';
	actual = format( str, 12 );
	expected = '1.200000e+01';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %e';
	actual = format( str, -5 );
	expected = 'beep -5.000000e+00';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%e %e baz';
	actual = format( str, 14, 15 );
	expected = '1.400000e+01 1.500000e+01 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`e` specifier, minimum width, precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%12.2e';
	actual = format( str, 12 );
	expected = '    1.20e+01';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %12.2e';
	actual = format( str, -5 );
	expected = 'beep    -5.00e+00';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%12.2e %12.2e baz';
	actual = format( str, 14, 15 );
	expected = '    1.40e+01     1.50e+01 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`E` specifier)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%E';
	actual = format( str, 12 );
	expected = '1.200000E+01';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %E';
	actual = format( str, -5 );
	expected = 'beep -5.000000E+00';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%E %E baz';
	actual = format( str, 14, 15 );
	expected = '1.400000E+01 1.500000E+01 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`E` specifier, minimum width, precision)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%12.2E';
	actual = format( str, 12 );
	expected = '    1.20E+01';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = 'beep %12.2E';
	actual = format( str, -5 );
	expected = 'beep    -5.00E+00';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%12.2E %12.2E baz';
	actual = format( str, 14, 15 );
	expected = '    1.40E+01     1.50E+01 baz';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});

tape( 'the function returns a formatted string (`s` specifier, positional arguments)', function test( t ) {
	var expected;
	var actual;
	var str;

	str = '%2$s %1$s!';
	actual = format( str, 'World', 'Hello' );
	expected = 'Hello World!';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%2$s %1$s %1$s!';
	actual = format( str, 'World', 'Hello' );
	expected = 'Hello World World!';
	t.strictEqual( actual, expected, 'returns expected output' );

	str = '%3$s %2$s %1$s!';
	actual = format( str, 'C', 'B', 'A' );
	expected = 'A B C!';
	t.strictEqual( actual, expected, 'returns expected output' );

	t.end();
});
