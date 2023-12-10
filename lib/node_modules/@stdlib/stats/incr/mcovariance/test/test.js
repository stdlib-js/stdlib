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
var randu = require( '@stdlib/random/base/randu' );
var abs = require( '@stdlib/math/base/special/abs' );
var pow = require( '@stdlib/math/base/special/pow' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var incrmcovariance = require( './../lib' );


// FUNCTIONS //

/**
* Computes sample means using Welford's algorithm.
*
* @private
* @param {Array} out - output array
* @param {ArrayArray} arr - input array
* @returns {Array} output array
*/
function mean( out, arr ) {
	var delta;
	var mx;
	var my;
	var N;
	var i;

	mx = 0.0;
	my = 0.0;

	N = 0;
	for ( i = 0; i < arr.length; i++ ) {
		N += 1;
		delta = arr[i][0] - mx;
		mx += delta / N;
		delta = arr[i][1] - my;
		my += delta / N;
	}
	out[ 0 ] = mx;
	out[ 1 ] = my;
	return out;
}

/**
* Computes the covariance using textbook formula.
*
* @private
* @param {ArrayArray} arr - input array
* @param {number} mx - `x` mean
* @param {number} my - `y` mean
* @param {boolean} bool - boolean indicating whether to compute a biased covariance
* @returns {number} covariance
*/
function covariance( arr, mx, my, bool ) {
	var N;
	var C;
	var i;

	N = arr.length;
	C = 0.0;
	for ( i = 0; i < N; i++ ) {
		C += ( arr[i][0]-mx ) * ( arr[i][1]-my );
	}
	if ( bool ) {
		return C / N;
	}
	if ( N === 1 ) {
		return 0.0;
	}
	return C / (N-1);
}

/**
* Generates a set of sample datasets.
*
* @private
* @param {PositiveInteger} N - number of datasets
* @param {PositiveInteger} M - dataset length
* @param {PositiveInteger} [seed] - PRNG seed
* @returns {ArrayArray} sample datasets
*/
function datasets( N, M, seed ) {
	var data;
	var rand;
	var tmp;
	var i;
	var j;

	rand = randu.factory({
		'seed': seed || ( randu()*pow( 2.0, 31 ) )|0
	});

	// Generate datasets consisting of (x,y) pairs of varying value ranges...
	data = new Array( N );
	for ( i = 0; i < N; i++ ) {
		tmp = new Array( M );
		for ( j = 0; j < M; j++ ) {
			tmp[ j ] = [
				rand() * pow( 10.0, i ),
				rand() * pow( 10.0, i )
			];
		}
		data[ i ] = tmp;
	}
	return data;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmcovariance, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer for the window size', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
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
			incrmcovariance( value );
		};
	}
});

tape( 'the function throws an error if not provided a positive integer for the window size (known means)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5.0,
		0.0,
		3.14,
		true,
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
			incrmcovariance( value, 3.0, 3.14 );
		};
	}
});

tape( 'the function throws an error if not provided a number as the mean value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
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
			incrmcovariance( 3, value, 3.14 );
		};
	}
});

tape( 'the function throws an error if not provided a number as the mean value', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		true,
		false,
		null,
		void 0,
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
			incrmcovariance( 3, 3.14, value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmcovariance( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (known means)', function test( t ) {
	t.equal( typeof incrmcovariance( 3, 3.0, 3.14 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving unbiased sample covariance incrementally', function test( t ) {
	var expected;
	var actual;
	var delta;
	var means;
	var data;
	var acc;
	var arr;
	var tol;
	var d;
	var N;
	var M;
	var W;
	var i;
	var j;

	N = 10;
	M = 100;
	data = datasets( N, M, randu.seed );

	// Define the window size:
	W = 10;

	// For each dataset, compute the actual and expected covariance...
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];

		acc = incrmcovariance( W );
		for ( j = 0; j < M; j++ ) {
			actual = acc( d[j][0], d[j][1] );
			if ( j < W ) {
				arr = d.slice( 0, j+1 );
			} else {
				arr = d.slice( j-W+1, j+1 );
			}
			means = mean( [ 0.0, 0.0 ], arr );
			expected = covariance( arr, means[ 0 ], means[ 1 ], false );
			if ( actual === expected ) {
				t.equal( actual, expected, 'returns expected value. dataset: '+i+'. window: '+j+'.' );
			} else {
				delta = abs( actual - expected );
				tol = 5.0e5 * EPS * abs( expected );
				t.equal( delta < tol, true, 'dataset: '+i+'. window: '+j+'. expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
			}
		}
	}
	t.end();
});

tape( 'the accumulator function computes a moving unbiased sample covariance incrementally (known means)', function test( t ) {
	var expected;
	var actual;
	var means;
	var delta;
	var data;
	var acc;
	var arr;
	var tol;
	var d;
	var N;
	var M;
	var W;
	var i;
	var j;

	N = 10;
	M = 100;
	data = datasets( N, M, randu.seed );

	// Define the window size:
	W = 10;

	// For each dataset, compute the actual and expected covariance...
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		means = mean( [ 0.0, 0.0 ], d );
		acc = incrmcovariance( W, means[ 0 ], means[ 1 ] );
		for ( j = 0; j < M; j++ ) {
			actual = acc( d[j][0], d[j][1] );
			if ( j < W ) {
				arr = d.slice( 0, j+1 );
			} else {
				arr = d.slice( j-W+1, j+1 );
			}
			expected = covariance( arr, means[ 0 ], means[ 1 ], true );
			if ( actual === expected ) {
				t.equal( actual, expected, 'returns expected value. dataset: '+i+'. window: '+j+'.' );
			} else {
				delta = abs( actual - expected );
				tol = 5.0e5 * EPS * abs( expected );
				t.equal( delta < tol, true, 'dataset: '+i+'. window: '+j+'. expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
			}
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current unbiased sample covariance (unknown means)', function test( t ) {
	var expected;
	var actual;
	var means;
	var delta;
	var data;
	var tol;
	var acc;
	var W;
	var N;
	var d;
	var i;

	data = [
		[ 2.0, 1.0 ],
		[ -5.0, 3.14 ],
		[ 3.0, -1.0 ],
		[ 5.0, -9.5 ]
	];
	N = data.length;

	// Window size:
	W = 3;

	acc = incrmcovariance( W );
	for ( i = 0; i < N; i++ ) {
		acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		actual = acc();
		if ( i < W-1 ) {
			d = data.slice( 0, i+1 );
		} else {
			d = data.slice( i-W+1, i+1 );
		}
		means = mean( [ 0.0, 0.0 ], d );
		expected = covariance( d, means[ 0 ], means[ 1 ], false );
		if ( actual === expected ) {
			t.equal( actual, expected, 'returns expected value. window: '+i+'.' );
		} else {
			delta = abs( actual - expected );
			tol = 1.5 * EPS * abs( expected );
			t.equal( delta < tol, true, 'window: '+i+'. expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current unbiased sample covariance (known means)', function test( t ) {
	var expected;
	var actual;
	var means;
	var delta;
	var data;
	var tol;
	var acc;
	var W;
	var N;
	var d;
	var i;

	data = [
		[ 2.0, 1.0 ],
		[ -5.0, 3.14 ],
		[ 3.0, -1.0 ],
		[ 5.0, -9.5 ]
	];
	N = data.length;
	means = mean( [ 0.0, 0.0 ], data );

	// Window size:
	W = 3;

	acc = incrmcovariance( W, means[ 0 ], means[ 1 ] );
	for ( i = 0; i < N; i++ ) {
		acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		actual = acc();
		if ( i < W-1 ) {
			d = data.slice( 0, i+1 );
		} else {
			d = data.slice( i-W+1, i+1 );
		}
		expected = covariance( d, means[ 0 ], means[ 1 ], true );
		if ( actual === expected ) {
			t.equal( actual, expected, 'returns expected value. window: '+i+'.' );
		} else {
			delta = abs( actual - expected );
			tol = EPS * abs( expected );
			t.equal( delta < tol, true, 'window: '+i+'. expected: '+expected+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmcovariance( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null` (known means)', function test( t ) {
	var acc = incrmcovariance( 3, 3.0, 3.14 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if only one datum has been provided and the means are unknown, the accumulator function returns `0`', function test( t ) {
	var acc = incrmcovariance( 3 );
	acc( 2.0, 3.14 );
	t.equal( acc(), 0.0, 'returns 0' );
	t.end();
});

tape( 'if only one datum has been provided and the means are known, the accumulator function may not return `0`', function test( t ) {
	var acc = incrmcovariance( 3, 30.0, -100.0 );
	acc( 2.0, 1.0 );
	t.notEqual( acc(), 0.0, 'does not return 0' );
	t.end();
});

tape( 'if the window size is `1` and the means are unknown, the accumulator function always returns `0`', function test( t ) {
	var acc;
	var cov;
	var i;

	acc = incrmcovariance( 1 );
	for ( i = 0; i < 100; i++ ) {
		cov = acc( randu()*100.0, randu()*100.0 );
		t.equal( cov, 0.0, 'returns 0' );
	}
	t.end();
});

tape( 'if the window size is `1` and the means are known, the accumulator function may not always return `0`', function test( t ) {
	var acc;
	var cov;
	var i;

	acc = incrmcovariance( 1, 500.0, -500.0 ); // means are outside the range of simulated values so the covariance should never be zero
	for ( i = 0; i < 100; i++ ) {
		cov = acc( randu()*100.0, randu()*100.0 );
		t.notEqual( cov, 0.0, 'does not return 0' );
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated value is `NaN` for at least `W` invocations (unknown means)', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	expected = [
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		0.0,
		NaN,
		NaN,
		NaN,
		0.0,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN
	];

	data = [
		[ NaN, 3.14 ],  // NaN
		[ 3.14, 3.14 ], // NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ NaN, 3.14 ],  // 3.14, NaN, NaN
		[ NaN, 3.14 ],  // NaN, NaN, NaN
		[ NaN, 3.14 ],  // NaN, NaN, NaN
		[ 3.14, 3.14 ]  // NaN, NaN, 3.14
	];

	acc = incrmcovariance( 3 );

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[i][0], data[i][1] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
			t.equal( isnan( acc() ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}

	data = [
		[ 3.14, NaN ],  // NaN
		[ 3.14, 3.14 ], // NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, NaN ],  // 3.14, NaN, NaN
		[ 3.14, NaN ],  // NaN, NaN, NaN
		[ 3.14, NaN ],  // NaN, NaN, NaN
		[ 3.14, 3.14 ]  // NaN, NaN, 3.14
	];

	acc = incrmcovariance( 3 );

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[i][0], data[i][1] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
			t.equal( isnan( acc() ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'if provided `NaN`, the accumulated value is `NaN` for at least `W` invocations (known means)', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	expected = [
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		0.0,
		NaN,
		NaN,
		NaN,
		0.0,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN
	];

	data = [
		[ NaN, 3.14 ],  // NaN
		[ 3.14, 3.14 ], // NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ NaN, 3.14 ],  // 3.14, 3.14, NaN
		[ NaN, 3.14 ],  // 3.14, NaN, NaN
		[ NaN, 3.14 ],  // NaN, NaN, NaN
		[ NaN, 3.14 ],  // NaN, NaN, NaN
		[ 3.14, 3.14 ]  // NaN, NaN, 3.14
	];

	acc = incrmcovariance( 3, 3.14, 3.14 );

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[i][0], data[i][1] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
			t.equal( isnan( acc() ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}

	data = [
		[ 3.14, NaN ],  // NaN
		[ 3.14, 3.14 ], // NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, 3.14 ], // 3.14, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, 3.14 ], // 3.14, NaN, 3.14
		[ 3.14, 3.14 ], // NaN, 3.14, 3.14
		[ 3.14, NaN ],  // 3.14, 3.14, NaN
		[ 3.14, NaN ],  // 3.14, NaN, NaN
		[ 3.14, NaN ],  // NaN, NaN, NaN
		[ 3.14, NaN ],  // NaN, NaN, NaN
		[ 3.14, 3.14 ]  // NaN, NaN, 3.14
	];

	acc = incrmcovariance( 3, 3.14, 3.14 );

	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[i][0], data[i][1] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
			t.equal( isnan( acc() ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
			t.equal( acc(), expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});
