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
var binomialTest = require( './../lib' );


// FIXTURES //

var highP = require( './fixtures/r/high_p.json' );
var mediumP = require( './fixtures/r/medium_p.json' );
var lowP = require( './fixtures/r/low_p.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binomialTest, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the `x` argument is neither a numeric array nor a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		2.2,
		[ 'a', 'b', 'c' ],
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
			binomialTest( value, 1000 );
		};
	}
});

tape( 'the function throws an error if the `n` argument is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		2.2,
		[ 1, 2, 3 ],
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
			binomialTest( 632, value );
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
			binomialTest( 500, 1000, {
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
			binomialTest( 500, 1000, {
				'alpha': value
			});
		};
	}
});

tape( 'the function performs an exact test for the success probability in a Bernoulli experiment (high `p`)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var n;

	x = highP.x;
	n = highP.n;
	out = binomialTest( x, n, {
		'p': highP.p
	});

	// Tested against R:
	expected = highP.pValue;
	delta = abs( out.pValue - expected );
	tol = 50.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = highP.statistic;
	delta = abs( out.statistic - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = highP.lower;
	delta = abs( out.ci[0] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = highP.upper;
	delta = abs( out.ci[1] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function performs an exact test for the success probability in a Bernoulli experiment (medium `p`)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var n;

	x = mediumP.x;
	n = mediumP.n;
	out = binomialTest( x, n, {
		'p': mediumP.p
	});

	// Tested against R:
	expected = mediumP.pValue;
	delta = abs( out.pValue - expected );
	tol = 120.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = mediumP.statistic;
	delta = abs( out.statistic - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = mediumP.lower;
	delta = abs( out.ci[0] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = mediumP.upper;
	delta = abs( out.ci[1] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function performs an exact test for the success probability in a Bernoulli experiment (low `p`)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var n;

	x = lowP.x;
	n = lowP.n;
	out = binomialTest( x, n, {
		'p': lowP.p
	});

	// Tested against R:
	expected = lowP.pValue;
	delta = abs( out.pValue - expected );
	tol = 50.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. pValue: '+out.pValue+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = lowP.statistic;
	delta = abs( out.statistic - expected );
	tol = 15.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. statistic: '+out.statistic+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = lowP.lower;
	delta = abs( out.ci[0] - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. lower CI: '+out.ci[0]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	expected = lowP.upper;
	delta = abs( out.ci[1] - expected );
	tol = 5.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. x: '+x+'. n: '+n+'. upper CI: '+out.ci[1]+'. E: '+expected+'. Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of the two-sample F-test', function test( t ) {
	var table;
	var out;

	out = binomialTest( 682, 925 );
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = binomialTest( 682, 925, {
		'alternative': 'less'
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = binomialTest( 682, 925, {
		'alternative': 'greater'
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;

	out = binomialTest( 682, 925 );
	table = out.print({
		'digits': 6
	});
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `decision` option to control whether the test result should be displayed', function test( t ) {
	var table;
	var out;

	out = binomialTest( 682, 925 );
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

	out = binomialTest( 682, 925 );
	table = out.print( {} );

	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that throws an error if `options` is not a simple object', function test( t ) {
	var values;
	var out;
	var i;

	out = binomialTest( 682, 925 );

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

	out = binomialTest( 682, 925 );

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

	out = binomialTest( 682, 925 );

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
