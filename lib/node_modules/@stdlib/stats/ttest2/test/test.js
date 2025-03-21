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
var NINF = require( '@stdlib/constants/float64/ninf' );
var PINF = require( '@stdlib/constants/float64/pinf' );
var EPS = require( '@stdlib/constants/float64/eps' );
var ttest2 = require( './../lib' );


// FIXTURES //

var greater = require( './fixtures/r/greater.json' );
var unequal = require( './fixtures/r/unequal.json' );
var equal = require( './fixtures/r/equal.json' );
var diff = require( './fixtures/r/diff.json' );
var less = require( './fixtures/r/less.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ttest2, 'function', 'main export is a function' );
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
			ttest2( value, [1, 2, 3] );
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
			ttest2( [1, 2, 3], value );
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
			ttest2( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.4, 0.3 ], {
				'alternative': value
			});
		};
	}
});

tape( 'the function throws an error if provided a `variance` option besides `equal` or `unequal`', function test( t ) {
	var values;
	var i;

	values = [
		'same',
		'different'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ttest2( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.4, 0.3 ], {
				'variance': value
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
			ttest2( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.5, 0.9 ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function by default performs a Welch two-sample t-test assuming unequal population variances', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = unequal.a;
	b = unequal.b;
	out = ttest2( a, b );

	// Tested against R:
	expected = unequal.pValue;
	delta = abs( out.pValue - expected );
	tol = 18.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = unequal.statistic;
	delta = abs( out.statistic - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = unequal.lower;
	delta = abs( out.ci[0] - expected );
	tol = 16.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = unequal.upper;
	delta = abs( out.ci[1] - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function performs a two-sample t-test assuming equal population variances if `variance` option is set to `equal`', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = [ 2, 1, 0, 4, 3 ];
	b = [ 1, 2, 3, 5, 0, 0, 2, 1, 2 ];
	out = ttest2( a, b, {
		'variance': 'equal'
	});

	// Tested against R:
	expected = equal.pValue;
	delta = abs( out.pValue - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = equal.statistic;
	delta = abs( out.statistic - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = equal.lower;
	delta = abs( out.ci[0] - expected );
	tol = 8.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = equal.upper;
	delta = abs( out.ci[1] - expected );
	tol = 8.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. a: ['+a+']. b: ['+b+']. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function performs a two-sample t-test assuming the true difference in means being equal to the value of `difference` option', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = diff.a;
	b = diff.b;
	out = ttest2( a, b, {
		'difference': -2.0
	});

	// Tested against R:
	t.equal( out.pValue, diff.pValue, 'returns correct p-value' );
	t.equal( out.statistic, diff.statistic, 'returns correct test statistic' );

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

tape( 'the function performs a one-sided Welch two-sample t-test assuming unequal population variances', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var a;
	var b;

	a = less.a;
	b = less.b;
	out = ttest2( a, b, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = less.pValue;
	delta = abs( out.pValue - expected );
	tol = 18.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: less. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = less.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: less. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.equal( out.ci[0], NINF, 'returns -Infinity as lower bound of CI' );

	expected = less.upper;
	delta = abs( out.ci[1] - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: less. a: ['+a+']. b: ['+b+']. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	out = ttest2( a, b, {
		'alternative': 'greater'
	});

	// Tested against R:
	expected = greater.pValue;
	delta = abs( out.pValue - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: greater. a: ['+a+']. b: ['+b+']. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = greater.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: greater. a: ['+a+']. b: ['+b+']. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = greater.lower;
	delta = abs( out.ci[0] - expected );
	tol = 7.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. direction: greater. a: ['+a+']. b: ['+b+']. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.equal( out.ci[1], PINF, 'returns Infinity as upper bound of CI' );

	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of two-sample t-test', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 3, 2, 1, 5, 6, 2, 3 ];
	out = ttest2( x, y );
	table = out.print();
	/* returns
		Welch two-sample t-test

		Alternative hypothesis: True difference in means is 0

			pValue: 0.2697
			statistic: -1.1732
			95% confidence interval: [-3.3333,1.0476]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = ttest2( x, y, {
		'alternative': 'less'
	});
	table = out.print();
	/* returns
		Welch two-sample t-test

		Alternative hypothesis: True difference in means is less than 0

			pValue: 0.1348
			statistic: -1.1732
			95% confidence interval: [-Infinity,0.6349]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = ttest2( x, y, {
		'alternative': 'greater'
	});
	table = out.print();
	/* returns
		Welch two-sample t-test

		Alternative hypothesis: True difference in means is greater than 0

			pValue: 0.8652
			statistic: -1.1732
			95% confidence interval: [-2.9206,Infinity]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4, 6, 9, 6, 4, 3 ];
	y = [ 2, 3, 2, 1, 2, 2, 1, 1 ];
	out = ttest2( x, y );
	table = out.print({
		'digits': 6
	});
	/* returns
		Welch two-sample t-test

		Alternative hypothesis: True difference in means is not equal to 0

			pValue: 0.040258
			statistic: 2.337457
			95% confidence interval: [0.109742,3.990258]

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

	x = [ 0, 1, 2, 3, 4, 6, 9, 6, 4, 3 ];
	y = [ 2, 3, 2, 1, 2, 2, 1, 1 ];
	out = ttest2( x, y );
	table = out.print({
		'decision': false
	});
	/* returns
		Welch two-sample t-test

		Alternative hypothesis: True difference in means is not equal to 0

			pValue: 0.0403
			statistic: 2.3375
			95% confidence interval: [0.1097,3.9903]

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

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ttest2( x, y );
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

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ttest2( x, y );

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

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ttest2( x, y );

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

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = ttest2( x, y );

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
