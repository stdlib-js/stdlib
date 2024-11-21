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
var secondsInYear = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof secondsInYear, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws a type error if provided a value which is neither an integer nor a `Date` object', function test( t ) {
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
			secondsInYear( value );
		};
	}
});

tape( 'the function returns either `31536000` or `31622400`', function test( t ) {
	var num = secondsInYear();
	t.strictEqual( num === 31536000 || num === 31622400, true, 'returns true' );
	t.end();
});

tape( 'the function returns `31622400` if provided a leap year (integer)', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = -2000; i < 2101; i += 4 ) {
		bool = isLeapYear( i );
		if ( !bool ) {
			continue;
		}
		num = secondsInYear( i );
		t.strictEqual( num, 31622400, 'returns 31622400 for '+i );
	}
	t.end();
});

tape( 'the function returns `31536000` if not provided leap year (integer)', function test( t ) {
	var bool;
	var num;
	var i;

	for ( i = -2000; i < 2101; i++ ) {
		bool = isLeapYear( i );
		if ( bool ) {
			continue;
		}
		num = secondsInYear( i );
		t.strictEqual( num, 31536000, 'returns 31536000 for '+i );
	}
	t.end();
});

tape( 'the function returns `31622400` if provided a leap year (`Date`)', function test( t ) {
	var bool;
	var num;
	var yr;
	var d;
	var i;

	for ( i = 0; i < 2101; i += 4 ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-01-11T08:00:00.000Z' );
		yr = d.getFullYear();
		bool = isLeapYear( yr );
		if ( !bool ) {
			continue;
		}
		num = secondsInYear( d );
		t.strictEqual( num, 31622400, 'returns 31622400 for '+yr );
	}
	t.end();
});

tape( 'the function returns `31536000` if not provided leap year (`Date`)', function test( t ) {
	var bool;
	var num;
	var yr;
	var d;
	var i;

	for ( i = 0; i < 2101; i++ ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-01-11T08:00:00.000Z' );
		yr = d.getFullYear();
		bool = isLeapYear( yr );
		if ( bool ) {
			continue;
		}
		num = secondsInYear( d );
		t.strictEqual( num, 31536000, 'returns 31536000 for '+yr );
	}
	t.end();
});
