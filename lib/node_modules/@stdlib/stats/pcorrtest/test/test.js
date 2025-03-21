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
var EPS = require( '@stdlib/constants/float64/eps' );
var pcorrtest = require( './../lib' );


// FIXTURES //

var twosided = require( './fixtures/r/twosided.json' );
var greater = require( './fixtures/r/greater.json' );
var less = require( './fixtures/r/less.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pcorrtest, 'function', 'main export is a function' );
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
			pcorrtest( value, [1, 2, 3] );
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
			pcorrtest( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if the `alternative` option is not `two-sided`, `less` or `greater`', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		null,
		void 0,
		[],
		{},
		function noop() {},
		'unknown'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			pcorrtest( [ 0.2, 0.5, 0.75 ], [ 0.5, 0.5, 0.9 ], {
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
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			pcorrtest( [ 0.2, 0.5, 0.75, 1.0 ], [ 0.5, 0.5, 0.9, 0.1 ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function throws an error if provided arrays of differing lengths', function test( t ) {
	var x = [ 0.2, 0.5, 0.75, 0.1, 0.5 ];
	var y = [ 0.5, 0.4, 0.3, 0.9 ];

	t.throws( badValue, Error, 'throws an error when provided `x` and `y` with unequal lengths' );
	t.end();

	function badValue() {
		return pcorrtest( x, y );
	}
});

tape( 'the function throws an error if provided arrays with less than four observations', function test( t ) {
	var x = [ 0.2, 0.5, 0.5 ];
	var y = [ 0.5, 0.4, 0.3 ];

	t.throws( badValue, Error, 'throws an error when provided `x` and `y` with `length` less than four' );
	t.end();

	function badValue() {
		return pcorrtest( x, y );
	}
});

tape( 'the function by default performs a two-sided t-test for the Pearson correlation between paired samples', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var i;
	var x;
	var y;

	x = twosided.x;
	y = twosided.y;
	out = pcorrtest( x, y );

	// Tested against R:
	expected = twosided.pValue;
	delta = abs( out.pValue - expected );
	tol = 1e-6 * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.statistic;
	delta = abs( out.statistic - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.ci;
	for ( i = 0; i < 2; i++ ) {
		delta = abs( out.ci[ i ] - expected[ i ]);
		tol = 20.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. CI['+i+']: '+out.ci[ i ]+'. E: '+expected[ i ]+' Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function performs a one-sided t-test for the Pearson correlation between paired samples (when alternative is `less`)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var i;
	var x;
	var y;

	x = less.x;
	y = less.y;
	out = pcorrtest( x, y, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = less.pValue;
	delta = abs( out.pValue - expected );
	tol = 100 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = less.statistic;
	delta = abs( out.statistic - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = less.ci;
	for ( i = 0; i < 2; i++ ) {
		delta = abs( out.ci[ i ] - expected[ i ]);
		tol = 10.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. CI['+i+']: '+out.ci[ i ]+'. E: '+expected[ i ]+' Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function performs a one-sided t-test for the Pearson correlation between paired samples (when alternative is `greater`)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var i;
	var x;
	var y;

	x = greater.x;
	y = greater.y;
	out = pcorrtest( x, y, {
		'alternative': 'greater'
	});

	// Tested against R:
	expected = greater.pValue;
	delta = abs( out.pValue - expected );
	tol = 100 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greater.statistic;
	delta = abs( out.statistic - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greater.ci;
	for ( i = 0; i < 2; i++ ) {
		delta = abs( out.ci[ i ] - expected[ i ]);
		tol = 10.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. CI['+i+']: '+out.ci[ i ]+'. E: '+expected[ i ]+' Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function performs a test using Fisher\'s Z transform  for the Pearson correlation between paired samples when rho != 0', function test( t ) {
	var out;
	var x;
	var y;

	// True correlation coefficient of fixture data is rho = 0.5:
	x = twosided.x;
	y = twosided.y;

	// Can't test against R as `cor.test` does not allow specifying the null value...
	out = pcorrtest( x, y, {
		'rho': 0.5
	});
	t.strictEqual( out.rejected, false, 'hypothesis that rho = 0.5 is not rejected at 5% significance level' );
	t.ok( out.pValue > 0.05, 'hypothesis that rho = 0.5 is not rejected at 5% significance level' );

	out = pcorrtest( x, y, {
		'rho': 0.5,
		'alpha': 0.5
	});
	t.strictEqual( out.rejected, true, 'hypothesis that rho = 0.5 is rejected at 50% significance level' );
	t.ok( out.pValue <= 0.5, 'hypothesis that rho = 0.5 is rejected at 50% significance level' );

	out = pcorrtest( x, y, {
		'rho': 0.3,
		'alternative': 'greater'
	});
	t.strictEqual( out.rejected, true, 'hypothesis that rho <= 0.3 is rejected at 5% significance level' );
	t.ok( out.pValue <= 0.05, 'hypothesis that rho <= 0.3 is rejected at 5% significance level' );

	out = pcorrtest( x, y, {
		'rho': 0.3,
		'alternative': 'less'
	});
	t.strictEqual( out.rejected, false, 'hypothesis that rho >= 0.3 is not rejected at 5% significance level' );
	t.ok( out.pValue > 0.05, 'hypothesis that rho >= 0.3 is not rejected at 5% significance level' );

	t.end();
});

tape( 'the function returns an object with a `.print()` method', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = pcorrtest( x, y );
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4, 6, 9, 6, 4, 3 ];
	y = [ 2, 3, 2, 1, 2, 2, 1, 1, 2, 3 ];
	out = pcorrtest( x, y, {
		'alternative': 'two-sided'
	});
	table = out.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = pcorrtest( x, y, {
		'alternative': 'less'
	});
	table = out.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = pcorrtest( x, y, {
		'alternative': 'greater'
	});
	table = out.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4, 6, 9, 6, 4, 3 ];
	y = [ 2, 3, 2, 1, 2, 2, 1, 1, 2, 3 ];
	out = pcorrtest( x, y, {
		'alternative': 'two-sided'
	});
	table = out.print({
		'decision': false
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );

	out = pcorrtest( x, y, {
		'alternative': 'less'
	});
	table = out.print({
		'decision': false
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.equal( contains( table, 'Test Decision' ), false, 'table does not contain test decision' );

	out = pcorrtest( x, y, {
		'alternative': 'greater'
	});
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
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 2, 3, 2, 1, 2 ];
	out = pcorrtest( x, y );
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
	out = pcorrtest( x, y );

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
	out = pcorrtest( x, y );

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
	out = pcorrtest( x, y );

	values = [
		'abc',
		2.4,
		0.0,
		-1.0,
		8.0,
		null,
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
