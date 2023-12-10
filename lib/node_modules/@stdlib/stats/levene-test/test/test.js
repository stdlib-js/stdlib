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
var contains = require( '@stdlib/assert/contains' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var leveneTest = require( './../lib' );


// FIXTURES //

var fixtures = require( './fixtures/r/fixtures.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof leveneTest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided numeric arrays', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, '5' ],
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length - 1; i++ ) {
		t.throws( badValue( values[i], values[i+1] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( x, y ) {
		return function badValue() {
			leveneTest( x, y );
		};
	}
});

tape( 'the function throws an error if provided empty arrays', function test( t ) {
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		leveneTest( [ 3, 3, 2, 1 ], [], [ 1, 2, 3, 4 ] );
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		true,
		void 0,
		null,
		NaN,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}

	t.throws( badValue( 'not one of less, greater or two-sided' ), Error, 'throws an error when provided not less, greater or two-sided' );
	t.end();

	function badValue( value ) {
		var x = [ 0.2, 0.5, 0.75 ];
		return function badValue() {
			leveneTest( x, x, {
				'alpha': value
			});
		};
	}
});

tape( 'the function throws an error if the `alpha` option is a numeric value outside `[0,1]`', function test( t ) {
	var values;
	var i;

	values = [
		1.1,
		-0.1
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		var x = [ 0.2, 0.5, 0.75 ];
		return function badValue() {
			leveneTest( x, x, {
				'alpha': value
			});
		};
	}
});

tape( 'the function throws an error if the `groups` option array is not of the same length as the provided number array', function test( t ) {
	var x;

	x = [ 0.2, 0.5, 0.75 ];
	t.throws( badValue, RangeError, 'throws an error' );
	t.end();

	function badValue() {
		leveneTest( x, {
			'groups': [ 0, 0, 1, 1 ]
		});
	}
});

tape( 'the function throws an error if the `groups` option array does not contain at least two unique elements', function test( t ) {
	var x;

	x = [ 0.3, 0.7, 1.1, 0.9 ];
	t.throws( badValue, Error, 'throws an error' );
	t.end();

	function badValue() {
		leveneTest( x, {
			'groups': [ 0, 0, 0, 0 ]
		});
	}
});

tape( 'the function correctly computes Levene\'s test for homogeneity of variance', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;

	out = leveneTest( fixtures.x, {
		'groups': fixtures.groups
	});

	// Tested against R:
	expected = fixtures.pValue;
	delta = abs( out.pValue - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = fixtures.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function returns an object with a `.print()` method for printing a formatted output table', function test( t ) {
	var table;
	var out;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

	out = leveneTest( x, y, z );
	table = out.print();
	t.equal( typeof table, 'string', 'returns a string' );

	out = leveneTest( x, y, z, {
		'alpha': 0.01
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a string' );

	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 6.8, 3.4, 3.7, 5.2, 4.0 ];

	out = leveneTest( x, y, z );
	table = out.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

	out = leveneTest( x, y, z );
	table = out.print({
		'decision': false
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

	out = leveneTest( x, y, z );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

	out = leveneTest( x, y, z );

	values = [
		'abc',
		4,
		null,
		true,
		void 0,
		NaN,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			out.print( value );
		};
	}
});

tape( 'the function returns an object with a `.print()` method that throws an error if the `digits` option is not a positive integer', function test( t ) {
	var values;
	var out;
	var i;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

	out = leveneTest( x, y, z );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		true,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			out.print({
				'digits': value
			});
		};
	}
});

tape( 'the function returns an object with a `.print()` method that throws an error if the `decision` option is not a boolean primitive', function test( t ) {
	var values;
	var out;
	var i;

	var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
	var y = [ 3.8, 2.7, 4.0, 2.4 ];
	var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

	out = leveneTest( x, y, z );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		8.0,
		void 0,
		NaN,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			out.print({
				'decision': value
			});
		};
	}
});
