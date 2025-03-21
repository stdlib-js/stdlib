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
var isLeapYear = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isLeapYear, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `false` if provided a value which is neither an integer nor a `Date` object', function test( t ) {
	var values;
	var bool;
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
		bool = isLeapYear( values[ i ] );
		t.strictEqual( bool, false, 'returns false if provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns a `boolean`', function test( t ) {
	var bool = isLeapYear();
	t.strictEqual( typeof bool, 'boolean', 'returns a boolean' );
	t.end();
});

tape( 'the function returns `true` if provided a leap year (integer)', function test( t ) {
	var bool;
	var i;

	for ( i = -2000; i < 2101; i += 4 ) {
		bool = isLeapYear( i );
		if ( (i % 100) === 0 && (i % 400) !== 0 ) {
			continue;
		}
		t.strictEqual( bool, true, 'returns true for '+i );
	}
	t.end();
});

tape( 'the function returns `false` if not provided leap year (integer)', function test( t ) {
	var bool;
	var i;

	for ( i = -2000; i < 2101; i++ ) {
		bool = isLeapYear( i );
		if ( (i % 100) === 0 && (i % 400) === 0 ) {
			continue;
		}
		if ( (i % 4) === 0 ) {
			continue;
		}
		t.strictEqual( bool, false, 'returns false for '+i );
	}
	t.end();
});

tape( 'the function returns `true` if provided a leap year (`Date`)', function test( t ) {
	var bool;
	var yr;
	var d;
	var i;

	for ( i = 0; i < 2101; i += 4 ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-01-11' );
		bool = isLeapYear( d );
		yr = d.getFullYear();
		if ( (yr % 100) === 0 && (yr % 400) !== 0 ) {
			continue;
		}
		t.strictEqual( bool, true, 'returns true for '+yr );
	}
	t.end();
});

tape( 'the function returns `false` if not provided leap year (`Date`)', function test( t ) {
	var bool;
	var yr;
	var d;
	var i;

	for ( i = 0; i < 2101; i++ ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-01-11' );
		bool = isLeapYear( d );
		yr = d.getFullYear();
		if ( (yr % 100) === 0 && (yr % 400) === 0 ) {
			continue;
		}
		if ( (yr % 4) === 0 ) {
			continue;
		}
		t.strictEqual( bool, false, 'returns false for '+yr );
	}
	t.end();
});
