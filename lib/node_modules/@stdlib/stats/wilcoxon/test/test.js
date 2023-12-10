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
var contains = require( '@stdlib/assert/contains' );
var abs = require( '@stdlib/math/base/special/abs' );
var EPS = require( '@stdlib/constants/float64/eps' );
var wilcoxon = require( './../lib' );


// FIXTURES //

var twosidedApprox = require( './fixtures/r/twosided_approx.json' );
var greaterApprox = require( './fixtures/r/greater_approx.json' );
var lessApprox = require( './fixtures/r/less_approx.json' );
var pairedLess = require( './fixtures/r/paired_less.json' );
var twosided = require( './fixtures/r/twosided.json' );
var greater = require( './fixtures/r/greater.json' );
var paired = require( './fixtures/r/paired.json' );
var ties = require( './fixtures/r/ties.json' );
var less = require( './fixtures/r/less.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof wilcoxon, 'function', 'main export is a function' );
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
			wilcoxon( value );
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
			wilcoxon( value );
		};
	}
});

tape( 'the function throws an error if the `x` array has only zero elements', function test( t ) {
	var values;
	var i;

	values = [
		[ 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			wilcoxon( value );
		};
	}
});

tape( 'the function throws an error if all `x - y` pairs are zero', function test( t ) {
	var values;
	var i;

	values = [
		[ [ -2, 4, 1 ], [ -2, 4, 1 ] ],
		[ [ 2, 5, 3 ], [ 2, 5, 3 ] ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			wilcoxon( value[ 0 ], value[ 1 ] );
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
			wilcoxon( [1, 2, 3], value );
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
			wilcoxon( value[0], value[1] );
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
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}

	t.throws( badValue( 'not one of `less`, `greater` or `two-sided`' ), Error, 'throws an error when not provided `less`, `greater` or `two-sided`' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			wilcoxon( [ 0.2, 0.5, 0.75 ], {
				'alternative': value
			});
		};
	}
});

tape( 'the function throws an error if provided an invalid `zeroMethod` option', function test( t ) {
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

	t.throws( badValue( 'not one of `pratt`, `wilcox` or `zsplit`' ), Error, 'throws an error when not provided `pratt`, `wilcox` or `zsplit`' );
	t.end();

	function badValue( value ) {
		return function badValue() {
			wilcoxon( [ 0.2, 0.5, 0.75 ], {
				'zeroMethod': value
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
			wilcoxon( [ 0.2, 0.5, 0.75 ], {
				'alpha': value
			});
		};
	}
});

tape( 'the function correctly computes a one-sample two-sided Wilcoxon signed rank test', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = twosided.x;
	out = wilcoxon( x, {
		'exact': true
	});

	// Tested against R:
	expected = twosided.pValue;
	delta = abs( out.pValue - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosided.statistic;
	delta = abs( out.statistic - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a one-sample two-sided Wilcoxon signed rank test (in presence of ties)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = ties.x;
	out = wilcoxon( x, {
		'exact': true
	});

	// Tested against R:
	expected = ties.pValue;
	delta = abs( out.pValue - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = ties.statistic;
	delta = abs( out.statistic - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function computes a one-sample two-sided Wilcoxon signed rank test (in presence of zero differences)', function test( t ) {
	var out;
	var x;

	x = [ 0, 2, 3, -1, -4, 0, 0, 8, 9 ];
	out = wilcoxon( x, {
		'zeroMethod': 'pratt'
	});

	t.strictEqual( out.statistic, 28, 'returns expected value' );
	t.strictEqual( out.pValue, 0.331084984475984, 'returns expected value' );

	out = wilcoxon( x, {
		'zeroMethod': 'zsplit'
	});

	t.strictEqual( out.statistic, 31, 'returns expected value' );
	t.strictEqual( out.pValue, 0.34155296643214683, 'returns expected value' );

	out = wilcoxon( x, {
		'zeroMethod': 'wilcox'
	});

	t.strictEqual( out.statistic, 16, 'returns expected value' );
	t.strictEqual( out.pValue, 0.29450739368011014, 'returns expected value' );

	t.end();
});

tape( 'the function correctly computes a one-sample two-sided Wilcoxon signed rank test (using normal approximation)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var out;
	var x;

	x = twosidedApprox.x;
	out = wilcoxon( x, {
		'exact': false
	});

	// Tested against R:
	expected = twosidedApprox.pValue;
	delta = abs( out.pValue - expected );
	tol = 50.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = twosidedApprox.statistic;
	delta = abs( out.statistic - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a one-sample one-sided Wilcoxon signed rank test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	// Alternative: mu > 0.0
	x = greater.x;
	out = wilcoxon( x, {
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

	// Alternative: mu < 0.0
	x = less.x;
	out = wilcoxon( x, {
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

	t.end();
});

tape( 'the function correctly computes a one-sample one-sided Wilcoxon signed rank test (using normal approximation)', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;

	// Alternative: mu > 0.0
	x = greaterApprox.x;
	out = wilcoxon( x, {
		'alternative': 'greater'
	});

	// Tested against R:
	expected = greaterApprox.pValue;
	delta = abs( out.pValue - expected );
	tol = 40.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: greaterApprox. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = greaterApprox.statistic;
	delta = abs( out.statistic - expected );
	tol = 20.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: greater. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	// Alternative: mu < 0.0
	x = lessApprox.x;
	out = wilcoxon( x, {
		'alternative': 'less'
	});

	// Tested against R:
	expected = lessApprox.pValue;
	delta = abs( out.pValue - expected );
	tol = 10.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: less. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = lessApprox.statistic;
	delta = abs( out.statistic - expected );
	tol = 30.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. alternative: less. statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a paired Wilcoxon signed rank test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;

	x = paired.x;
	y = paired.y;
	out = wilcoxon( x, y );

	// Tested against R:
	expected = paired.pValue;
	delta = abs( out.pValue - expected );
	tol = 24.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. p-value: '+out.pValue+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	expected = paired.statistic;
	delta = abs( out.statistic - expected );
	tol = 32.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. test statistic: '+out.statistic+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});

tape( 'the function correctly computes a paired one-sided Wilcoxon signed rank test', function test( t ) {
	var expected;
	var delta;
	var out;
	var tol;
	var x;
	var y;

	x = pairedLess.x;
	y = pairedLess.y;
	out = wilcoxon( x, y, {
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

	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of one-sample Wilcoxon signed rank test', function test( t ) {
	var table;
	var out;
	var x;

	x = [ 0, 1, 2, 3, 4 ];
	out = wilcoxon( x );
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = wilcoxon( x, {
		'alternative': 'less'
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );

	out = wilcoxon( x, {
		'alternative': 'greater',
		'mu': 10
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method for generating a formatted output of results of paired Wilcoxon signed rank test', function test( t ) {
	var table;
	var out;
	var x;
	var y;

	x = [ 0, 1, 2, 3, 4 ];
	y = [ 1, 3, 4, 1, 5 ];
	out = wilcoxon( x, y, {
		'alpha': 0.01
	});
	table = out.print();
	t.equal( typeof table, 'string', 'returns a pretty-printed table' );
	t.end();
});

tape( 'the function returns an object with a `.print()` method that accepts a `digits` option to control the number of decimal digits displayed', function test( t ) {
	var table;
	var out;
	var x;

	x = [ 0, 1, 2, 3, 4, 8 ];
	out = wilcoxon( x );
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

	x = [ 0, 1, 2, 3, 4 ];
	out = wilcoxon( x );
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

	x = [ 0, 1, 2, 3, 4, 8, 8 ];
	out = wilcoxon( x );
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
	out = wilcoxon( x );

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
	out = wilcoxon( x );

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
	out = wilcoxon( x );

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
