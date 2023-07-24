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
var ttest = require( './../lib' );


// FIXTURES //

var twosidedCustomAlpha = require( './fixtures/r/twosided_custom_alpha.json' );
var greaterCustomAlpha = require( './fixtures/r/greater_custom_alpha.json' );
var lessCustomAlpha = require( './fixtures/r/less_custom_alpha.json' );
var pairedLess = require( './fixtures/r/paired_less.json' );
var twosided = require( './fixtures/r/twosided.json' );
var greater = require( './fixtures/r/greater.json' );
var paired = require( './fixtures/r/paired.json' );
var less = require( './fixtures/r/less.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ttest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not a numeric array', function test( t ) {
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

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ttest( value );
		};
	}
});

tape( 'the function throws an error if the `x` array has less than two elements', function test( t ) {
	var values;
	var i;

	values = [
		[],
		[ 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ttest( value );
		};
	}
});

tape( 'the function throws an error if the `y` argument is not a numeric array', function test( t ) {
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
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ttest( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if the `x` and `y` arguments are arrays of different length', function test( t ) {
	var values;
	var i;

	values = [
		[ [ 1, 2 ], [ 1, 2, 3 ] ],
		[ [ 1, 2, 3 ], [ 1, 2 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			ttest( value[0], value[1] );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
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
			ttest( [ 0.2, 0.5, 0.75 ], {
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
			ttest( [ 0.2, 0.5, 0.75 ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function correctly computes a one-sample two-sided t-test', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = twosided.x;
	out = ttest( x );

	// Tested against R:
	expected = twosided.pValue;
	delta = abs( out.pValue - expected );
	tol = 16.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.statistic;
	delta = abs( out.statistic - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.lower;
	delta = abs( out.ci[0] - expected );
	tol = 16.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI lower bound: '+out.ci[0]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.upper;
	delta = abs( out.ci[1] - expected );
	tol = 16.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI upper bound: '+out.ci[1]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a one-sample one-sided t-test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	// Alternative: mu > 0.0
	x = greater.x;
	out = ttest( x, {
		'alternative': 'greater'
	});

	// Tested against R:
	expected = greater.pValue;
	delta = abs( out.pValue - expected );
	tol = 40.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: greater. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greater.statistic;
	delta = abs( out.statistic - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: greater. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greater.lower;
	delta = abs( out.ci[0] - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: greater. CI lower bound: '+out.ci[0]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.strictEqual( out.ci[1], PINF, 'CI upper bound is +infinity' );

	// Alternative: mu < 0.0
	x = less.x;
	out = ttest( x, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = less.pValue;
	delta = abs( out.pValue - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: less. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = less.statistic;
	delta = abs( out.statistic - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: less. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.strictEqual( out.ci[0], NINF, 'CI lower bound is -infinity' );

	expected = less.upper;
	delta = abs( out.ci[1] - expected );
	tol = 16.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: less. CI upper bound: '+out.ci[1]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a one-sample two-sided t-test with a custom significance level', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	x = twosidedCustomAlpha.x;
	out = ttest( x, {
		'alpha': 0.1
	});

	// Tested against R:
	expected = twosidedCustomAlpha.pValue;
	delta = abs( out.pValue - expected );
	tol = 50.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosidedCustomAlpha.statistic;
	delta = abs( out.statistic - expected );
	tol = 50.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosidedCustomAlpha.lower;
	delta = abs( out.ci[0] - expected );
	tol = 12.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI lower bound: '+out.ci[0]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosidedCustomAlpha.upper;
	delta = abs( out.ci[1] - expected );
	tol = 8.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI upper bound: '+out.ci[1]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a one-sample one-sided t-test with a custom significance level', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	x = greaterCustomAlpha.x;

	// Alternative: mu > 0.0
	out = ttest( x, {
		'alternative': 'greater',
		'alpha': 0.1
	});

	// Tested against R:
	expected = greaterCustomAlpha.pValue;
	delta = abs( out.pValue - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greaterCustomAlpha.statistic;
	delta = abs( out.statistic - expected );
	tol = 35.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greaterCustomAlpha.lower;
	delta = abs( out.ci[0] - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI lower bound: '+out.ci[0]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.strictEqual( out.ci[1], PINF, 'CI upper bound is +infinity' );

	// Alternative: mu < 0.0
	x = lessCustomAlpha.x;
	out = ttest( x, {
		'alternative': 'less',
		'alpha': 0.01
	});

	// Tested against R:
	expected = lessCustomAlpha.pValue;
	delta = abs( out.pValue - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = lessCustomAlpha.statistic;
	delta = abs( out.statistic - expected );
	tol = 32.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.strictEqual( out.ci[0], NINF, 'CI lower bound is -infinity' );

	expected = lessCustomAlpha.upper;
	delta = abs( out.ci[1] - expected );
	tol = 6.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI upper bound: '+out.ci[1]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a paired t-test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;

	x = paired.x;
	y = paired.y;
	out = ttest( x, y );

	// Tested against R:
	expected = paired.pValue;
	delta = abs( out.pValue - expected );
	tol = 24.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = paired.statistic;
	delta = abs( out.statistic - expected );
	tol = 32.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = paired.lower;
	delta = abs( out.ci[0] - expected );
	tol = 8.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI lower bound: '+out.ci[0]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = paired.upper;
	delta = abs( out.ci[1] - expected );
	tol = 11.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI upper bound: '+out.ci[1]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a paired one-sided t-test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;

	x = pairedLess.x;
	y = pairedLess.y;
	out = ttest( x, y, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = pairedLess.pValue;
	delta = abs( out.pValue - expected );
	tol = 35.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = pairedLess.statistic;
	delta = abs( out.statistic - expected );
	tol = 16.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.strictEqual( out.ci[0], NINF, 'CI lower bound is -infinity' );

	expected = pairedLess.upper;
	delta = abs( out.ci[1] - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. CI upper bound: '+out.ci[1]+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of one-sample t-test', function test( t ) {
	var table;
	var out;
	var x;

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );
	table = out.print();
	/* returns
		One-sample t-test

		Alternative hypothesis: True mean is not equal to 0

			pValue: 0.0474
			statistic: 2.8284
			df: 4
			95% confidence interval: [0.0368,3.9632]

		Test Decision: Reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = ttest( x, {
		'alternative': 'less'
	});
	table = out.print();
	/* returns
		One-sample t-test

		Alternative hypothesis: True mean is less than 0

			pValue: 0.9763
			statistic: 2.8284
			df: 4
			95% confidence interval: [-Infinity,3.5074]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = ttest( x, {
		'alternative': 'greater',
		'mu': 2
	});
	table = out.print();
	/* returns
		One-sample t-test

		Alternative hypothesis: True mean is greater than 2

			pValue: 0.5
			statistic: 0
			df: 4
			95% confidence interval: [0.4926,Infinity]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of paired t-test', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 1, 3, 4, 1, 5 ];
	out = ttest( x, y );
	table = out.print();
	/* returns
		Paired t-test

		Alternative hypothesis: True difference in means is not equal to 0

			pValue: 0.3375
			statistic: -1.0887
			df: 4
			95% confidence interval: [-2.8403,1.2403]

		Test Decision: Fail to reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );
	table = out.print({
		'digits': 6
	});
	/* returns
		One-sample t-test

		Alternative hypothesis: True mean is not equal to 0

			pValue: 0.047421
			statistic: 2.828427
			df: 4
			95% confidence interval: [0.036757,3.963243]

		Test Decision: Reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;
	var x;

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );
	table = out.print({
		'decision': false
	});
	/* returns
		One-sample t-test

		Alternative hypothesis: True mean is not equal to 0

			pValue: 0.0474
			statistic: 2.8284
			df: 4
			95% confidence interval: [0.0368,3.9632]

	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;
	var x;

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;
	var x;

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );

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

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );

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

	x = [ 0, 1, 2, 3, 4 ];
	out = ttest( x );

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
