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
var poisson = require( '@stdlib/random/base/poisson' ).factory;
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var chi2gof = require( './../lib' );


// FIXTURES //

var counts = require( './fixtures/r/counts.json' );
var probs = require( './fixtures/r/probs.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof chi2gof, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is not an array of nonnegative integers', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[ 1, 2, 3, 'not a numeric array' ],
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
			chi2gof( value, [ 0.25, 0.25, 0.25, 0.25 ] );
		};
	}
});

tape( 'the function throws an error if the `p` argument is not an array of nonnegative numbers or array of probabilities summing to one', function test( t ) {
	var values;
	var i;

	values = [
		5,
		[ 0.25, 0.25, 0.25, 'not a numeric array' ],
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
			chi2gof( [ 20, 48, 10, 20 ], value, {
				'rescale': true
			});
		};
	}
});

tape( 'the function throws an error if `x` and `y` are arrays of different lengths', function test( t ) {
	var values;
	var i;

	values = [
		[ [ 20, 10 ], [ 7.5, 7.5, 7.5, 7.5 ] ],
		[ [ 20, 10, 30, 90, 80 ], [ 0.25, 0.25, 0.25, 0.25 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided ['+values[i][0]+'] and ['+values[i][1]+']' );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			chi2gof( value[ 0 ], value[ 1 ] );
		};
	}
});

tape( 'the function throws an error if `x` does not contain at least one positive element', function test( t ) {
	var value = [ 0, 0, 0, 0 ];

	t.throws( badValue(), Error, 'throws an error when provided ['+value+']' );
	t.end();

	function badValue() {
		return function badValue() {
			chi2gof( value, [ 0.25, 0.25, 0.25, 0.25 ] );
		};
	}
});

tape( 'the function throws an error if the supplied distribution parameter(s) are not numeric values', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		null,
		true,
		false,
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
			chi2gof( [ 100, 60, 40, 30, 20, 10, 5, 2 ], 'poisson', value );
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
			chi2gof( [ 30, 40, 50, 80 ], [ 0.2, 0.2, 0.3, 0.3 ], {
				'simulate': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid distribution name', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'bop',
		'foo',
		'bar'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			chi2gof( [ 30, 40, 50, 80 ], value );
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
			chi2gof( [ 30, 40, 50, 80 ], [ 0.2, 0.2, 0.3, 0.3 ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function correctly computes the chi-square goodness of fit test (when `y` is array of probabilities)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;
	var p;

	x = probs.x;
	p = probs.p;
	out = chi2gof( x, p );

	// Tested against R:
	expected = probs.pValue;
	delta = abs( out.pValue - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. p: '+p+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = probs.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. p: '+p+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes the chi-square goodness of fit test (when `y` is array of expected counts)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;

	x = counts.x;
	y = counts.y;
	out = chi2gof( x, y );

	// Tested against R:
	expected = counts.pValue;
	delta = abs( out.pValue - expected );
	tol = 4.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. y: '+y+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = counts.statistic;
	delta = abs( out.statistic - expected );
	tol = 2.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. y: '+y+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function computes the chi-square goodness-of-fit test (when `y` is a distribution name)', function test( t ) {
	var lambda;
	var pValue;
	var freq;
	var pmf;
	var j;
	var x;

	lambda = 30;
	pmf = poisson( lambda, {
		'seed': 23
	});

	freq = new Array( 300 );
	for ( j = 0; j < freq.length; j++ ) {
		freq[ j ] = 0;
	}
	for ( j = 0; j < 1000; j++ ) {
		x = pmf();
		freq[ x ] += 1;
	}
	// Test using chi-square goodness-of-fit test:
	pValue = chi2gof( freq, 'poisson', lambda, {
		'simulate': true,
		'iterations': 500
	}).pValue;
	t.equal( typeof pValue, 'number', 'returns a p-value: '+pValue );
	t.end();
});

tape( 'the function allows to correct the used degrees of freedom via the `ddof` option', function test( t ) {
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p, {
		'ddof': 2
	});

	t.equal( out.df, 2, 'df is equal to two' );

	t.end();
});

tape( 'the function computes the p-value via Monte Carlo simulation when `simulate` option is set to `true`', function test( t ) {
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p, {
		'simulate': true,
		'iterations': 500
	});

	t.equal( typeof out.pValue, 'number', 'returns a number' );
	t.end();
});

tape( 'the function returns the correct decision giving different values of `alpha`', function test( t ) {
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p, {
		'alpha': 0.05
	});

	t.equal( out.rejected, true, 'rejects null hypothesis at alpha = 0.05' );

	out = chi2gof( x, p, {
		'alpha': 0.01
	});

	t.equal( out.rejected, false, 'does not reject null hypothesis at alpha = 0.01' );

	t.end();
});

tape( 'the function returns an object with a `.toString()` method for printing a formatted output table', function test( t ) {
	var table;
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );
	table = out.toString();
	/* e.g., returns

		Chi-square goodness-of-fit test

		Null hypothesis: population probabilities are equal to those in p

			pValue: 0.0406
			statistic: 9.9901
			degrees of freedom: 4

		Test Decision: Reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a string' );

	out = chi2gof( x, p, {
		'alpha': 0.01
	});
	table = out.toString();
	/* e.g., returns

		Chi-square goodness-of-fit test

		Null hypothesis: population probabilities are equal to those in p

			pValue: 0.0406
			statistic: 9.9901
			degrees of freedom: 4

		Test Decision: Fail to reject null in favor of alternative at 1% significance level
	*/
	t.equal( typeof table, 'string', 'returns a string' );

	// FIXME: actually test for expected output; e.g., split into lines and do line-by-line comparison

	t.end();
});

tape( 'the function returns an object with a `.toString()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );
	table = out.toString({
		'digits': 6
	});
	/* e.g., returns

		Chi-square goodness-of-fit test

		Null hypothesis: population probabilities are equal to those in p

			pValue: 0.040594
			statistic: 9.990143
			degrees of freedom: 4

		Test Decision: Reject null in favor of alternative at 5% significance level
	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	// FIXME: this test does not actually assert the desired behavior!!!!

	t.end();
});

tape( 'the function returns an object with a `.toString()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );
	table = out.toString({
		'decision': false
	});
	/* e.g., returns

		Chi-square goodness-of-fit test

		Null hypothesis: population probabilities are equal to those in p

			pValue: 0.040594
			statistic: 9.990143
			degrees of freedom: 4

	*/
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );
	t.end();
});

tape( 'the function returns an object with a `.toString()` method that accepts an `options` object', function test( t ) {
	var table;
	var out;
	var x;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );
	table = out.toString( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.toString()` method that throws an error if `options` is not an object', function test( t ) {
	var values;
	var out;
	var x;
	var i;
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );

	values = [
		'abc',
		4,
		null,
		true,
		false,
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
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		null,
		true,
		false,
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
	var p;

	x = [ 89, 37, 30, 28, 2 ];
	p = [ 0.40, 0.20, 0.20, 0.15, 0.05 ];

	out = chi2gof( x, p );

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
