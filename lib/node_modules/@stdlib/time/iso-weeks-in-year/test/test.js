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
var isoWeeksInYear = require( './../lib' );


// FIXTURES //

var longYears = require( './fixtures/long.json' );


// FUNCTIONS //

/**
* Converts an array to a hash.
*
* @private
* @param {Array} arr - input array
* @returns {Object} hash
*/
function toHash( arr ) {
	var obj;
	var i;

	obj = {};
	for ( i = 0; i < arr.length; i++ ) {
		obj[ arr[i] ] = true;
	}
	return obj;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isoWeeksInYear, 'function', 'main export is a function' );
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
			isoWeeksInYear( value );
		};
	}
});

tape( 'the function returns either `52` or `53`', function test( t ) {
	var num = isoWeeksInYear();
	t.strictEqual( num === 52 || num === 53, true, 'returns true' );
	t.end();
});

tape( 'the function returns `53` if provided a long year (integer)', function test( t ) {
	var hash;
	var num;
	var i;

	hash = toHash( longYears );
	for ( i = -2000; i < 2101; i++ ) {
		if ( !hash[ i%400 ] ) {
			continue;
		}
		num = isoWeeksInYear( i );
		t.strictEqual( num, 53, 'returns 53 for '+i );
	}
	t.end();
});

tape( 'the function returns `52` if not provided long year (integer)', function test( t ) {
	var hash;
	var num;
	var i;

	hash = toHash( longYears );
	for ( i = -2000; i < 2101; i++ ) {
		if ( hash[ i%400 ] ) {
			continue;
		}
		num = isoWeeksInYear( i );
		t.strictEqual( num, 52, 'returns 52 for '+i );
	}
	t.end();
});

tape( 'the function returns `53` if provided a long year (`Date`)', function test( t ) {
	var hash;
	var num;
	var yr;
	var d;
	var i;

	hash = toHash( longYears );
	for ( i = 0; i < 2101; i++ ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-01-11T08:00:00.000Z' );
		if ( !hash[ i%400 ] ) {
			continue;
		}
		num = isoWeeksInYear( d );
		yr = d.getFullYear();
		t.strictEqual( num, 53, 'returns 53 for '+yr );
	}
	t.end();
});

tape( 'the function returns `52` if not provided long year (`Date`)', function test( t ) {
	var hash;
	var num;
	var yr;
	var d;
	var i;

	hash = toHash( longYears );
	for ( i = 0; i < 2101; i++ ) {
		yr = leftPad( i.toString(), 4, '0' );
		d = new Date( yr+'-01-11T08:00:00.000Z' );
		if ( hash[ i%400 ] ) {
			continue;
		}
		num = isoWeeksInYear( d );
		yr = d.getFullYear();
		t.strictEqual( num, 52, 'returns 52 for '+yr );
	}
	t.end();
});
