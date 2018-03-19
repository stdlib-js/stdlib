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
var factorial = require( '@stdlib/math/base/special/factorial' );
var incrspace = require( '@stdlib/math/utils/incrspace' );
var isnan = require( '@stdlib/assert/is-nan' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var zeta = require( '@stdlib/math/base/special/riemann-zeta' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var EPS = require( '@stdlib/constants/math/float64-eps' );
var polygamma = require( './../lib' );


// FIXTURES //

var largePositive = require( './fixtures/cpp/large_positive.json' );
var largeNegative = require( './fixtures/cpp/large_negative.json' );
var smallPositive = require( './fixtures/cpp/small_positive.json' );
var hugePositive = require( './fixtures/cpp/huge_positive.json' );
var positive = require( './fixtures/cpp/positive.json' );
var negative = require( './fixtures/cpp/negative.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof polygamma, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided a `NaN` for either parameter, the function returns `NaN` ', function test( t ) {
	var val = polygamma( NaN, 1.7 );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	val = polygamma( 4, NaN );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	val = polygamma( NaN, NaN );
	t.strictEqual( isnan( val ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided an even negative integer for `x`, the function returns `NaN` ', function test( t ) {
	var val = polygamma( 2, -2.0 );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	val = polygamma( 2, -4.0 );
	t.strictEqual( isnan( val ), true, 'returns NaN' );
	t.end();
});

tape( 'if provided an odd negative integer for `x`, the function returns positive infinity', function test( t ) {
	var val = polygamma( 4, -1.0 );
	t.strictEqual( val, PINF, 'returns +infinity' );

	val = polygamma( 4, -3.0 );
	t.strictEqual( val, PINF, true, 'returns +infinity' );
	t.end();
});

tape( 'the function evaluates the polygamma function for small positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var x;
	var y;
	var i;

	n = smallPositive.n;
	x = smallPositive.x;
	expected = smallPositive.y;
	for ( i = 0; i < x.length; i++ ) {
		y = polygamma(n[i], x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'n: '+n[i]+'. x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the polygamma function for positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var x;
	var y;
	var i;

	n = positive.n;
	x = positive.x;
	expected = positive.y;
	for ( i = 0; i < x.length; i++ ) {
		y = polygamma(n[i], x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'n: '+n[i]+'. x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the polygamma function for negative numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var x;
	var y;
	var i;

	n = negative.n;
	x = negative.x;
	expected = negative.y;
	for ( i = 0; i < x.length; i++ ) {
		y = polygamma( n[i], x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'n: '+n[i]+'. x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 2300.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the polygamma function for large positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var x;
	var y;
	var i;

	n = largePositive.n;
	x = largePositive.x;
	expected = largePositive.y;
	for ( i = 0; i < x.length; i++ ) {
		y = polygamma(n[i], x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'n: '+n[i]+'. x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 20.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the polygamma function for large negative numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var x;
	var y;
	var i;

	n = largeNegative.n;
	x = largeNegative.x;
	expected = largeNegative.y;
	for ( i = 0; i < x.length; i++ ) {
		y = polygamma( n[i], x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'n: '+n[i]+'. x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );

			// The large discrepancies for a few input values seem to be mostly due to a slight difference in the calculation of `cospi`, which is used in `polycotpi.js`. For example, for `x = 128.69279279279279`, our `cospi` function returns `-0.5693183042040957`, whereas Boost returns `-0.56931830420405894`. These differences are then magnified as the result is used as the value at which polynomials are evaluated.
			tol = 2200.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function evaluates the polygamma function for huge positive numbers', function test( t ) {
	var expected;
	var delta;
	var tol;
	var n;
	var x;
	var y;
	var i;

	n = hugePositive.n;
	x = hugePositive.x;
	expected = hugePositive.y;
	for ( i = 0; i < x.length; i++ ) {
		y = polygamma(n[i], x[i] );
		if ( y === expected[ i ] ) {
			t.strictEqual( y, expected[ i ], 'n: '+n[i]+'. x: '+x[i]+'. E: '+expected[i] );
		} else {
			delta = abs( y - expected[i] );
			tol = 1.0 * EPS * abs( expected[i] );
			t.ok( delta <= tol, 'within tolerance. n: '+n[i]+'. x: '+x[i]+'. y: '+y+'. E: '+expected[i]+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'for positive odd `n` and `x` equal to `1.0`, the function computes the factorial of `n` multiplied the Riemann zeta function evaluated at `n+1`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;
	var n;

	values = incrspace( 1, 99, 2 );
	for ( i = 0; i < values.length; i++ ) {
		n = values[ i ];
		expected = factorial( n ) * zeta( n+1 );
		actual = polygamma( n, 1.0 );
		t.strictEqual( actual, expected, 'n: '+n+'. x: 1.0. E: '+expected );
	}
	t.end();
});

tape( 'for positive even `n` and `x` equal to `1.0`, the function computes the negative factorial of `n` multiplied by the Riemann zeta function evaluated at `n+1`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;
	var n;

	values = incrspace( 2, 100, 2 );
	for ( i = 0; i < values.length; i++ ) {
		n = values[ i ];
		expected = (-1.0) * factorial( n ) * zeta( n+1 );
		actual = polygamma( n, 1.0 );
		t.strictEqual( actual, expected, 'n: '+n+'. x: 1.0. E: '+expected );
	}
	t.end();
});

tape( 'for positive odd `n` and `x` equal to `0.5`, the function computes the factorial of `n` multiplied by the Riemann zeta function evaluated at `n+1`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;
	var n;

	values = incrspace( 1, 199, 2 );
	for ( i = 0; i < values.length; i++ ) {
		n = values[ i ];
		expected = factorial( n ) * zeta( n+1 );
		expected *= ldexp( 1.0, n + 1 ) - 1.0;
		actual = polygamma( n, 0.5 );
		t.strictEqual( actual, expected, 'n: '+n+'. x: 1.0. E: '+expected );
	}
	t.end();
});

tape( 'for positive even `n` and `x` equal to `0.5`, the function computes the negative factorial of `n` multiplied by the Riemann zeta function evaluated at `n+1`', function test( t ) {
	var expected;
	var actual;
	var values;
	var i;
	var n;

	values = incrspace( 2, 200, 2 );
	for ( i = 0; i < values.length; i++ ) {
		n = values[ i ];
		expected = (-1.0) * factorial( n ) * zeta( n+1 );
		expected *= ldexp( 1.0, n + 1 ) - 1.0;
		actual = polygamma( n, 0.5 );
		t.strictEqual( actual, expected, 'n: '+n+'. x: 1.0. E: '+expected );
	}
	t.end();
});
