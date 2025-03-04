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
var EPS = require( '@stdlib/constants/float64/eps' );
var abs = require( '@stdlib/math/base/special/abs' );
var ndarray = require( '@stdlib/ndarray/base/ctor' );
var kde2d = require( './../lib' );
var dataX = require( './fixtures/r/datax.json' );
var dataY = require( './fixtures/r/datay.json' );
var expected = require( './fixtures/r/expected.json' );
var dataX2 = require( './fixtures/r/datax2.json' );
var dataY2 = require( './fixtures/r/datay2.json' );
var expected2 = require( './fixtures/r/expected2.json' );
var dataXSmall = require( './fixtures/r/dataxsmall.json' );
var dataYSmall = require( './fixtures/r/dataysmall.json' );
var expectedSmall = require( './fixtures/r/expectedsmall.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof kde2d, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error when the first argument is not a matrix nor a numeric array', function test( t ) {
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
			// Make the factor the same
			kde2d( value, [1, 2, 3] );
		};
	}
});

tape( 'the function throws an error when the first argument is a numeric array but the second argument is not', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		[],
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
			// Make the factor the same
			kde2d( [1, 2, 3], value );
		};
	}
});

tape( 'the function throws an error if the numeric array arguments have unequal lengths', function test( t ) {
	// Two unique arguments for x and factor
	var valuesX;
	var valuesY;
	var i;

	valuesX = [
		[1, 2, 3, 4, 5, 6, 7, 8],
		[5, 6, 7, 4],
		[1, 2]
	];

	valuesY = [
		[113, 310, 209, 203, 101],
		[4, 5, 6, 7, 8, 9, 10],
		[9000, 3, 1]
	];

	for ( i = 0; i < valuesX.length; i++ ) {
		t.throws( badValue( valuesX[i], valuesY[i] ), Error, 'throws an error when provided '+valuesX[i]+valuesY[i] );
	}
	t.end();

	function badValue( valueX, valueY ) {
		return function badValue() {
			kde2d( valueX, valueY );
		};
	}
});

tape( 'the function throws an error `xMin` exceeds or equals `xMax`', function test( t ) {
	// Two unique arguments for x and factor
	var valXMin;
	var valXMax;
	var opts;
	var i;

	valXMin = [0, 5, 7, 9, 11, 21, 4];

	valXMax = [-1, 4, 0, 8, -1, 20, 4];

	for ( i = 0; i < valXMin.length; i++ ) {
		opts = {
			'xMin': valXMin[i],
			'xMax': valXMax[i]
		};
		t.throws( badValue( opts ), RangeError, 'throws an error when provided '+valXMin[i]+valXMax[i] );
	}
	t.end();

	function badValue( opt ) {
		return function badValue() {
			kde2d( [1, 2, 3], [1, 2, 3], opt );
		};
	}
});

tape( 'the function throws an error `yMin` exceeds or equals `yMax`', function test( t ) {
	// Two unique arguments for x and factor
	var valYMin;
	var valYMax;
	var opts;
	var i;

	valYMin = [0, 5, 7, 9, 11, 21, 4];

	valYMax = [-1, 4, 0, 8, -1, 20, 4];

	for ( i = 0; i < valYMax.length; i++ ) {
		opts = {
			'yMin': valYMin[i],
			'yMax': valYMax[i]
		};
		t.throws( badValue( opts ), RangeError, 'throws an error when provided '+valYMin[i]+valYMax[i] );
	}
	t.end();

	function badValue( opt ) {
		return function badValue() {
			kde2d( [1, 2, 3], [1, 2, 3], opt );
		};
	}
});

tape( 'the function computes the same values with `ndarray` and numeric array inputs', function test( t ) {
	var actualNumeric;
	var actualND;
	var strides;
	var buffer;
	var offset;
	var shape;
	var order;
	var nd;
	var n;
	var i;
	var j;

	// Make the ND array
	n = dataXSmall.length;
	buffer = dataXSmall.concat( dataYSmall );
	shape = [n, 2];
	strides = [1, n];
	order = 'col-major';
	offset = 0;

	nd = ndarray( 'generic', buffer, shape, strides, offset, order );

	actualND = kde2d( nd );
	actualNumeric = kde2d( dataXSmall, dataYSmall );

	// Check x
	for ( i = 0; i < n; i++ ) {
		t.equal(actualND.x[i], actualNumeric.x[i], 'xND: '+actualND.x[i]+', xNumeric: '+actualNumeric.x[i]);
	}

	// Check y
	for ( i = 0; i < n; i++ ) {
		t.equal(actualND.y[i], actualNumeric.y[i], 'yND: '+actualND.y[i]+', yNumeric: '+actualNumeric.y[i]);
	}

	// Check z
	for ( i = 0; i < n; i++ ) {
		for ( j = 0; j < n; j++ ) {
			t.equal(actualND.z.get(i, j), actualNumeric.z.get(i, j), 'zND: '+actualND.z.get(i, j)+', zNumeric: '+actualNumeric.z.get(i, j));
		}
	}

	t.end();
});

tape( 'the function correctly computes 2 dimensional normal KDE for a small dataset', function test( t ) {
	var actual;
	var delta;
	var tol;
	var i;
	var j;

	actual = kde2d(dataXSmall, dataYSmall);

	// Check x
	for ( i = 0; i < actual.x.length; i++ ) {
		if ( actual.x[i] === expectedSmall.x[i] ) {
			t.equal( actual.x[i], expectedSmall.x[i], 'x: '+actual.x[i]+', expected: '+expectedSmall.x[i] );
		} else {
			delta = abs( actual.x[i] - expectedSmall.x[ i ] );
			tol = 200.0 * EPS * abs( expectedSmall.x[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+actual.x[ i ]+'. E: '+expectedSmall.x[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}

	// Check y
	for ( i = 0; i < actual.y.length; i++ ) {
		if ( actual.y[i] === expectedSmall.y[i] ) {
			t.equal( actual.y[i], expectedSmall.y[i], 'x: '+actual.y[i]+', expected: '+expectedSmall.y[i] );
		} else {
			delta = abs( actual.y[i] - expectedSmall.y[ i ] );
			tol = 200.0 * EPS * abs( expectedSmall.y[ i ] );
			t.ok( delta <= tol, 'within tolerance. y: '+actual.y[ i ]+'. E: '+expectedSmall.y[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}

	// Check z
	for ( i = 0; i < actual.x.length; i++ ) {
		for ( j = 0; j < actual.y.length; j++ ) {
			if ( actual.z.get(i, j) === expectedSmall.z[i][j] ) {
				t.equal( actual.z.get(i, j), expectedSmall.z[i][j], 'z: '+actual.z.get(i, j)+', expected: '+expectedSmall.z[i][j] );
			} else {
				delta = abs( actual.z.get(i, j) - expectedSmall.z[i][j] );
				tol = 1500.0 * EPS * abs( expectedSmall.z[i][j] );
				t.ok( delta <= tol, 'within tolerance. z: '+actual.z.get(i, j)+'. E: '+expectedSmall.z[i][j]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}

	t.end();
});

tape( 'the function correctly computes 2 dimensional normal KDE for a medium dataset', function test( t ) {
	var actual;
	var delta;
	var tol;
	var i;
	var j;

	actual = kde2d(dataX, dataY);

	// Check x
	for ( i = 0; i < actual.x.length; i++ ) {
		if ( actual.x[i] === expected.x[i] ) {
			t.equal( actual.x[i], expected.x[i], 'x: '+actual.x[i]+', expected: '+expected.x[i] );
		} else {
			delta = abs( actual.x[i] - expected.x[ i ] );
			tol = 500.0 * EPS * abs( expected.x[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+actual.x[ i ]+'. E: '+expected.x[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}

	// Check y
	for ( i = 0; i < actual.y.length; i++ ) {
		if ( actual.y[i] === expected.y[i] ) {
			t.equal( actual.y[i], expected.y[i], 'x: '+actual.y[i]+', expected: '+expected.y[i] );
		} else {
			delta = abs( actual.y[i] - expected.y[ i ] );
			tol = 200.0 * EPS * abs( expected.y[ i ] );
			t.ok( delta <= tol, 'within tolerance. y: '+actual.y[ i ]+'. E: '+expected.y[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}

	// Check z
	for ( i = 0; i < actual.x.length; i++ ) {
		for ( j = 0; j < actual.y.length; j++ ) {
			if ( actual.z.get(i, j) === expected.z[i][j] ) {
				t.equal( actual.z.get(i, j), expected.z[i][j], 'z: '+actual.z.get(i, j)+', expected: '+expected.z[i][j] );
			} else {
				delta = abs( actual.z.get(i, j) - expected.z[i][j] );
				tol = 2000.0 * EPS * abs( expected.z[i][j] );
				t.ok( delta <= tol, 'within tolerance. z: '+actual.z.get(i, j)+'. E: '+expected.z[i][j]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}

	t.end();
});

tape( 'the function correctly computes 2 dimensional normal KDE for a large dataset', function test( t ) {
	var actual;
	var delta;
	var tol;
	var i;
	var j;

	actual = kde2d(dataX2, dataY2);

	// Check x
	for ( i = 0; i < actual.x.length; i++ ) {
		if ( actual.x[i] === expected2.x[i] ) {
			t.equal( actual.x[i], expected2.x[i], 'x: '+actual.x[i]+', expected2: '+expected2.x[i] );
		} else {
			delta = abs( actual.x[i] - expected2.x[ i ] );
			tol = 250.0 * EPS * abs( expected2.x[ i ] );
			t.ok( delta <= tol, 'within tolerance. x: '+actual.x[ i ]+'. E: '+expected2.x[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}

	// Check y
	for ( i = 0; i < actual.y.length; i++ ) {
		if ( actual.y[i] === expected2.y[i] ) {
			t.equal( actual.y[i], expected2.y[i], 'x: '+actual.y[i]+', expected2: '+expected2.y[i] );
		} else {
			delta = abs( actual.y[i] - expected2.y[ i ] );
			tol = 500.0 * EPS * abs( expected2.y[ i ] );
			t.ok( delta <= tol, 'within tolerance. y: '+actual.y[ i ]+'. E: '+expected2.y[ i ]+'. Δ: '+delta+'. tol: '+tol+'.' );
		}
	}

	// Check z
	for ( i = 0; i < actual.x.length; i++ ) {
		for ( j = 0; j < actual.y.length; j++ ) {
			if ( actual.z.get(i, j) === expected2.z[i][j] ) {
				t.equal( actual.z.get(i, j), expected2.z[i][j], 'z: '+actual.z.get(i, j)+', expected2: '+expected2.z[i][j] );
			} else {
				delta = abs( actual.z.get(i, j) - expected2.z[i][j] );
				tol = 2000.0 * EPS * abs( expected2.z[i][j] );
				t.ok( delta <= tol, 'within tolerance. z: '+actual.z.get(i, j)+'. E: '+expected2.z[i][j]+'. Δ: '+delta+'. tol: '+tol+'.' );
			}
		}
	}

	t.end();
});
