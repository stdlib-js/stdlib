/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var isArray = require( '@stdlib/assert/is-array' );
var floor = require( '@stdlib/math/base/special/floor' );
var datespace = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof datespace, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a valid start date', function test( t ) {
	var values;
	var stop;
	var i;

	stop = new Date();

	values = [
		'beep',
		5,
		-5,
		true,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			datespace( value, stop );
		};
	}
});

tape( 'the function throws an error if not provided a valid stop date', function test( t ) {
	var values;
	var start;
	var i;

	start = new Date().getTime();

	values = [
		'beep',
		5,
		-5,
		true,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			datespace( start, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid length', function test( t ) {
	var values;
	var start;
	var stop;
	var i;

	start = new Date().getTime();
	stop = new Date();

	values = [
		'beep',
		3.14,
		-5,
		true,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue1( values[i] ), TypeError, 'throws an error when provided '+values[i] );
		t.throws( badValue2( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue1( value ) {
		return function badValue1() {
			datespace( start, stop, value );
		};
	}
	function badValue2( value ) {
		return function badValue2() {
			datespace( start, stop, value, {} );
		};
	}
});

tape( 'the function throws an error if provided a non-object for options', function test( t ) {
	var values;
	var start;
	var stop;
	var i;

	start = new Date().getTime();
	stop = new Date();

	values = [
		'beep',
		5,
		true,
		NaN,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			datespace( start, stop, 10, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid round option', function test( t ) {
	var values;
	var start;
	var stop;
	var i;

	start = new Date().getTime();
	stop = new Date();

	values = [
		'beep',
		5,
		true,
		NaN,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			datespace( start, stop, 10, {
				'round': value
			});
		};
	}
});

tape( 'the function returns an empty array if provided a length of 0', function test( t ) {
	var actual;
	var start;
	var stop;

	start = new Date().getTime();
	stop = new Date();
	actual = datespace( start, stop, 0 );

	t.deepEqual( actual, [] );
	t.end();
});

tape( 'the function returns an array of `Date` objects', function test( t ) {
	var actual;
	var start;
	var stop;
	var i;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5000;

	actual = datespace( start, stop );

	t.strictEqual( isArray( actual ), true, 'returns an array' );
	for ( i = 0; i < actual.length; i++ ) {
		t.ok( actual[i] instanceof Date, 'returns a date' );
	}
	t.end();
});

tape( 'the function supplies a default length', function test( t ) {
	var actual;
	var start;
	var stop;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5000;

	actual = datespace( start, stop, {
		'round': 'floor'
	});

	t.ok( actual.length );
	t.ok( actual[0] < actual[1] );
	t.end();
});

tape( 'the function outputs both incremental and decremental arrays', function test( t ) {
	var actual;
	var start;
	var stop;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5000;

	// Incremental:
	actual = datespace( start, stop, {
		'round': 'floor'
	});

	t.ok( actual[0] < actual[1] );

	// Decremental:
	actual = datespace( stop, start, {
		'round': 'round'
	});

	t.ok( actual[0] > actual[1] );
	t.end();
});

tape( 'the function creates a linearly spaced array of dates', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var i;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5000;

	actual = datespace( start, stop, 6 );

	for ( i = 0; i < actual.length; i++ ) {
		actual[ i ] = actual[ i ].getTime();
	}

	expected = [
		1417503650973,
		1417503651973,
		1417503652973,
		1417503653973,
		1417503654973,
		1417503655973
	];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function accepts Unix timestamps', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var i;

	stop = '2014-12-02T07:00:55.973Z';
	stop = new Date( stop ).getTime();
	stop = floor( stop / 1000 );
	start = stop - 5;

	actual = datespace( start, stop, 6 );

	for ( i = 0; i < actual.length; i++ ) {
		actual[ i ] = actual[ i ].getTime();
	}

	expected = [
		1417503650000,
		1417503651000,
		1417503652000,
		1417503653000,
		1417503654000,
		1417503655000
	];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function ceils date values', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var i;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5;

	actual = datespace( start, stop, 11, {
		'round': 'ceil'
	});

	for ( i = 0; i < actual.length; i++ ) {
		actual[ i ] = actual[ i ].getTime();
	}

	expected = [
		1417503655968,
		1417503655969,
		1417503655969,
		1417503655970,
		1417503655970,
		1417503655971,
		1417503655971,
		1417503655972,
		1417503655972,
		1417503655973,
		1417503655973
	];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function floors date values', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var i;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5;

	actual = datespace( start, stop, 11, {
		'round': 'floor'
	});

	for ( i = 0; i < actual.length; i++ ) {
		actual[ i ] = actual[ i ].getTime();
	}

	expected = [
		1417503655968,
		1417503655968,
		1417503655969,
		1417503655969,
		1417503655970,
		1417503655970,
		1417503655971,
		1417503655971,
		1417503655972,
		1417503655972,
		1417503655973
	];

	t.deepEqual( actual, expected );
	t.end();
});

tape( 'the function rounds date values', function test( t ) {
	var expected;
	var actual;
	var start;
	var stop;
	var i;

	stop = '2014-12-02T07:00:55.973Z';
	start = new Date( stop ) - 5;

	actual = datespace( start, stop, 11, {
		'round': 'round'
	});

	for ( i = 0; i < actual.length; i++ ) {
		actual[ i ] = actual[ i ].getTime();
	}

	expected = [
		1417503655968,
		1417503655969,
		1417503655969,
		1417503655970,
		1417503655970,
		1417503655971,
		1417503655971,
		1417503655972,
		1417503655972,
		1417503655973,
		1417503655973
	];

	t.deepEqual( actual, expected );
	t.end();
});
