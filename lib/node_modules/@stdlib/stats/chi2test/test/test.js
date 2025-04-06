/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
var array = require( '@stdlib/ndarray/array' );
var contains = require( '@stdlib/assert/contains' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var chi2test = require( './../lib' );


// FIXTURES //

var counts = require( './fixtures/r/counts.json' );
var corrected = require( './fixtures/r/corrected.json' );
var uncorrected = require( './fixtures/r/uncorrected.json' );
var moreCols = require( './fixtures/r/more_cols.json' );
var moreRows = require( './fixtures/r/more_rows.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof chi2test, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a 2d array of arrays or matrix-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1.2, 0.8, 3, 4 ],
		true,
		false,
		void 0,
		null,
		NaN,
		function noop() {},
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			chi2test( value, [ 0.25, 0.25, 0.25, 0.25 ] );
		};
	}
});

tape( 'the function throws an error if `x` does not only contain nonnegative numbers', function test( t ) {
	var value = [
		[ -2, 4 ],
		[ 1, 3 ]
	];

	t.throws( badValue(), Error, 'throws an error when provided ['+value+']' );
	t.end();

	function badValue() {
		return function badValue() {
			chi2test( value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		5,
		'abc',
		void 0,
		null,
		NaN,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			chi2test( [ [ 20, 30 ], [ 30, 20 ] ], {
				'correct': value
			});
		};
	}
});

tape( 'the function throws an error if provided a significance level `alpha` outside `[0,1]`', function test( t ) {
	var values;
	var i;

	values = [
		1.2,
		-0.2
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			chi2test( [ [ 20, 30 ], [ 30, 20 ] ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function correctly computes the chi-square independence test for a two-way contingency table', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = counts.x;
	out = chi2test( x );

	// Tested against R:
	expected = counts.pValue;
	delta = abs( out.pValue - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = counts.statistic;
	delta = abs( out.statistic - expected );
	tol = 12.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the chi-square independence test for a two-way contingency table (supplied as an `ndarray`)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = array( counts.x );
	out = chi2test( x );

	// Tested against R:
	expected = counts.pValue;
	delta = abs( out.pValue - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = counts.statistic;
	delta = abs( out.statistic - expected );
	tol = 12.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the chi-square independence test for a two-way contingency table with two categories each (with continuity correction)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = corrected.x;
	out = chi2test( x );

	// Tested against R:
	expected = corrected.pValue;
	delta = abs( out.pValue - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = corrected.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the chi-square independence test for a two-way contingency table with two categories each (without continuity correction)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = uncorrected.x;
	out = chi2test( x, {
		'correct': false
	});

	// Tested against R:
	expected = uncorrected.pValue;
	delta = abs( out.pValue - expected );
	tol = 12.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = uncorrected.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the chi-square independence test for a two-way contingency table with more columns than rows', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = array( moreCols.x );
	out = chi2test( x );

	// Tested against R:
	expected = moreCols.pValue;
	delta = abs( out.pValue - expected );
	tol = 8.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = moreCols.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the chi-square independence test for a two-way contingency table with more rows than columns', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = array( moreRows.x );
	out = chi2test( x );

	// Tested against R:
	expected = moreRows.pValue;
	delta = abs( out.pValue - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = moreRows.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function returns the correct decision giving different values of `alpha`', function test( t ) {
	var out;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];
	out = chi2test( x, {
		'alpha': 0.05
	});

	t.equal( out.rejected, false, 'does not reject null hypothesis at alpha = 0.05' );

	out = chi2test( x, {
		'alpha': 0.1
	});

	t.equal( out.rejected, true, 'rejects null hypothesis at alpha = 0.1' );

	t.end();
});

tape( 'the function returns an object with a `.toString()` method for printing a formatted output table', function test( t ) {
	var table;
	var out;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];

	out = chi2test( x );
	table = out.toString();
	t.equal( typeof table, 'string', 'returns a string' );

	out = chi2test( x, {
		'alpha': 0.01
	});
	table = out.toString();
	t.equal( typeof table, 'string', 'returns a string' );

	t.end();
});

tape( 'the function returns an object with a `.toString()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];
	out = chi2test( x );
	table = out.toString({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.toString()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];

	out = chi2test( x );
	table = out.toString({
		'decision': false
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.toString()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];
	out = chi2test( x );
	table = out.toString( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.toString()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var x;
	var i;

	x = [ [ 20, 30 ], [ 30, 20 ] ];

	out = chi2test( x );

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
			out.toString( value );
		};
	}
});

tape( 'the function returns an object with a `.toString()` method that throws an error if the `digits` option is not a positive integer', function test( t ) {
	var values;
	var out;
	var i;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];

	out = chi2test( x );

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
			out.toString({
				'digits': value
			});
		};
	}
});

tape( 'the function returns an object with a `.toString()` method that throws an error if the `decision` option is not a boolean primitive', function test( t ) {
	var values;
	var out;
	var i;
	var x;

	x = [ [ 20, 30 ], [ 30, 20 ] ];

	out = chi2test( x );

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
			out.toString({
				'decision': value
			});
		};
	}
});
