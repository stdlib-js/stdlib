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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var padjust = require( './../lib' );


// FIXTURES //

var CUSTOM_HOMMEL = require( './fixtures/r/custom_hommel.json' );
var BONFERRONI = require( './fixtures/r/bonferroni.json' );
var CUSTOM_BY = require( './fixtures/r/custom_by.json' );
var CUSTOM = require( './fixtures/r/custom.json' );
var HOMMEL = require( './fixtures/r/hommel.json' );
var HOLM = require( './fixtures/r/holm.json' );
var BH = require( './fixtures/r/bh.json' );
var BY = require( './fixtures/r/by.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof padjust, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if the first argument is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
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
			padjust( value, 'bh' );
		};
	}
});

tape( 'the function throws an error if the first argument is not a probability array', function test( t ) {
	var values;
	var i;

	values = [
		[ 1, 2, 3, 4 ],
		[ 0.5, 1.1, 0.4 ],
		[ -0.1, 0.5, 0.5 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			padjust( value, 'bh' );
		};
	}
});

tape( 'the function throws an error if the second argument is not a string primitive', function test( t ) {
	var values;
	var i;

	values = [
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			padjust( [ 0.5, 0.2, 0.1, 0.1 ], value );
		};
	}
});

tape( 'the function throws an error if the second argument is not one of the available method identifiers', function test( t ) {
	var values;
	var i;

	values = [
		'abc',
		'bonf',
		'BY',
		'BH'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), Error, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			padjust( [ 0.5, 0.2, 0.1 ], value );
		};
	}
});

tape( 'the function throws an error if the third argument is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		1.2,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			padjust( [ 0.5, 0.2, 0.1 ], 'bh', value );
		};
	}
});

tape( 'the function throws an error if the third argument is smaller than the number of provided p-values', function test( t ) {
	var values;
	var i;

	values = [
		-1,
		0,
		1,
		2
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			padjust( [ 0.5, 0.2, 0.1 ], 'bh', value );
		};
	}
});

tape( 'the function returns adjusted p-values (using Bonferroni correction)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = BONFERRONI.pvals;
	expected = BONFERRONI.expected;
	out = padjust( pvals, 'bonferroni' );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 15.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values (using Benjamini & Yekutieli correction)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = BY.pvals;
	expected = BY.expected;
	out = padjust( pvals, 'by' );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values (using False Discovery Rate control)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = BH.pvals;
	expected = BH.expected;
	out = padjust( pvals, 'bh' );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values (using Holm\'s correction)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = HOLM.pvals;
	expected = HOLM.expected;
	out = padjust( pvals, 'holm' );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values (using Hommel\'s method)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = HOMMEL.pvals;
	expected = HOMMEL.expected;
	out = padjust( pvals, 'hommel' );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 10.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values (custom number of comparisons)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = CUSTOM.pvals;
	expected = CUSTOM.expected;
	out = padjust( pvals, 'bh', CUSTOM.n );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 10.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values using Hommel\'s method (custom number of comparisons)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = CUSTOM_HOMMEL.pvals;
	expected = CUSTOM_HOMMEL.expected;
	out = padjust( pvals, 'hommel', CUSTOM_HOMMEL.n );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 10.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns adjusted p-values using the Benjamini & Yekutieli correction (custom number of comparisons)', function test( t ) {
	var expected;
	var delta;
	var pvals;
	var tol;
	var out;
	var i;

	pvals = CUSTOM_BY.pvals;
	expected = CUSTOM_BY.expected;
	out = padjust( pvals, 'by', CUSTOM_BY.n );
	for ( i = 0; i < pvals.length; i++ ) {
		if ( out[ i ] === expected[ i ] ) {
			t.equal( out[ i ], expected[ i ], 'p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'.' );
		} else {
			delta = abs( out[ i ] - expected[i] );
			tol = 10.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. p: '+pvals[i]+'. adj: '+out[ i ]+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});
