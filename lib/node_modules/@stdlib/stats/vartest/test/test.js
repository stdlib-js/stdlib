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
var contains = require( '@stdlib/assert/contains' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var vartest = require( './../lib' );


// FIXTURES //

var greater = require( './fixtures/r/greater.json' );
var twosided = require( './fixtures/r/twosided.json' );
var diff = require( './fixtures/r/diff.json' );
var less = require( './fixtures/r/less.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof vartest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 'not a numeric array, hehe' ],
		true,
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
			vartest( value, [1, 2, 3] );
		};
	}
});

tape( 'the function throws an error if the `y` argument is not a numeric array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 'not a numeric array, hehe' ],
		true,
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
			vartest( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if provided an invalid `alternative` option', function test( t ) {
	var values;
	var i;

	values = [
		5,
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
		return function badValue() {
			vartest( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.4, 0.3 ], {
				'alternative': value
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
		return function badValue() {
			vartest( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.5, 0.9 ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function by default performs a two-sample F-test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = twosided.a;
	b = twosided.b;
	out = vartest( a, b );

	// Tested against R:
	expected = twosided.pValue;
	delta = abs( out.pValue - expected );
	tol = 250.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = twosided.statistic;
	delta = abs( out.statistic - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = twosided.lower;
	delta = abs( out.ci[0] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = twosided.upper;
	delta = abs( out.ci[1] - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function performs a two-sample F-test assuming the true ratio of the population variances being equal to the value of the `ratio` option', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = diff.a;
	b = diff.b;
	out = vartest( a, b, {
		'ratio': 10.0
	});

	// Tested against R:
	t.equal( out.pValue, diff.pValue, 'returns correct p-value' );

	expected = diff.statistic;
	delta = abs( out.statistic - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = diff.lower;
	delta = abs( out.ci[0] - expected );
	tol = 6.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = diff.upper;
	delta = abs( out.ci[1] - expected );
	tol = 12.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function performs a one-sided two-sample F-test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = less.a;
	b = less.b;
	out = vartest( a, b, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = less.pValue;
	delta = abs( out.pValue - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: less. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = less.statistic;
	delta = abs( out.statistic - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: less. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.equal( out.ci[0], 0.0, 'returns 0 as lower bound of CI' );

	expected = less.upper;
	delta = abs( out.ci[1] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: less. a: ['+a+']. b: ['+b+']. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	out = vartest( a, b, {
		'alternative': 'greater'
	});

	// Tested against R:
	expected = greater.pValue;
	delta = abs( out.pValue - expected );
	tol = 250.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: greater. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = greater.statistic;
	delta = abs( out.statistic - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: greater. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = greater.lower;
	delta = abs( out.ci[0] - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: greater. a: ['+a+']. b: ['+b+']. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.equal( out.ci[1], PINF, 'returns Infinity as upper bound of CI' );

	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of the two-sample F-test', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );
	table = out.print();
	/* returns
		F test for comparing two variances

		Alternative hypothesis: True ratio in variances is not equal to 1

			pValue: 0.0081
			statistic: 9.1458
			variance of x: 2858.0556 (df of x: 9)
			variance of y: 312.5 (df of y: 7)
			95% confidence interval: [2.4875,30.1147]

		Test Decision: Reject null in favor of alternative at 5% significance level

		Exited with status 0
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = vartest( x, y, {
		'alternative': 'less'
	});
	table = out.print();
	/* returns
		Alternative hypothesis: True ratio in variances is less than 1

			pValue: 0.996
			statistic: 9.1458
			variance of x: 2858.0556 (df of x: 9)
			variance of y: 312.5 (df of y: 7)
			95% confidence interval: [0,30.1147]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level

		Exited with status 0
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = vartest( x, y, {
		'alternative': 'greater'
	});
	table = out.print();
	/* returns
		Alternative hypothesis: True ratio in variances is greater than 1

			pValue: 0.004
			statistic: 9.1458
			variance of x: 2858.0556 (df of x: 9)
			variance of y: 312.5 (df of y: 7)
			95% confidence interval: [2.4875,Infinity]

		Test Decision: Reject null in favor of alternative at 5% significance level

		Exited with status 0
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );
	table = out.print({
		'digits': 6
	});
	/* returns
		F test for comparing two variances

		Alternative hypothesis: True ratio in variances is not equal to 1

			pValue: 0.008066
			statistic: 9.145778
			variance of x: 2858.055556 (df of x: 9)
			variance of y: 312.5 (df of y: 7)
			95% confidence interval: [1.896199,38.385256]

		Test Decision: Reject null in favor of alternative at 5% significance level
	*/

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );
	table = out.print({
		'decision': false
	});
	/* returns
		F test for comparing two variances

		Alternative hypothesis: True ratio in variances is not equal to 1

			pValue: 0.0081
			statistic: 9.1458
			variance of x: 2858.0556 (df of x: 9)
			variance of y: 312.5 (df of y: 7)
			95% confidence interval: [1.8962,38.3853]
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );

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
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );

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
	var x;
	var y;

	x = [ 610, 610, 550, 590, 565, 570, 500, 650, 500, 650 ];
	y = [ 560, 550, 580, 550, 560, 590, 550, 590 ];
	out = vartest( x, y );

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
