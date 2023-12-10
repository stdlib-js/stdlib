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
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var EPS = require( '@stdlib/constants/float64/eps' );
var incrcovariance = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrcovariance, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a non-numeric value for the first argument', function test( t ) {
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
			incrcovariance( value, 5.0 );
		};
	}
});

tape( 'the function throws an error if provided a non-numeric value for the second argument', function test( t ) {
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
			incrcovariance( 3.0, value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrcovariance(), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (known means)', function test( t ) {
	t.equal( typeof incrcovariance( 3.0, -5.0 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function incrementally computes an unbiased sample covariance', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var acc;
	var x;
	var y;
	var i;

	x = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	y = [ 1.5, -0.6, 3.14, 4.0, -2.0, 10.0 ];

	// Test against Julia:
	expected = [
		0.0,
		-1.05,
		-0.9733333333333334,
		0.4566666666666666,
		0.142,
		1.8719999999999999
	];

	acc = incrcovariance();

	for ( i = 0; i < x.length; i++ ) {
		actual = acc( x[ i ], y[ i ] );
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[ i ], 'returns expected result. x: '+x[i]+'. y: '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - actual );
			tol = 3.7 * EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'x: '+x[i]+'. y: '+y[i]+'. expected: '+expected[i]+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes an unbiased sample covariance (known means)', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var acc;
	var x;
	var y;
	var i;

	x = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	y = [ 1.5, -0.6, 3.14, 4.0, -2.0, 10.0 ];

	// Test against Julia:
	expected = [
		1.1733333333333333,
		0.5866666666666667,
		0.23555555555555552,
		0.5083333333333333,
		0.4066666666666666,
		1.5599999999999998
	];

	acc = incrcovariance( 3.0, 2.6733333333333333 );

	for ( i = 0; i < x.length; i++ ) {
		actual = acc( x[ i ], y[ i ] );
		if ( actual === expected[ i ] ) {
			t.strictEqual( actual, expected[ i ], 'returns expected result. x: '+x[i]+'. y: '+y[i]+'.' );
		} else {
			delta = abs( expected[ i ] - actual );
			tol = EPS * abs( expected[ i ] );
			t.equal( delta <= tol, true, 'x: '+x[i]+'. y: '+y[i]+'. expected: '+expected[i]+'. actual: '+actual+'. tol: '+tol+'. delta: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current unbiased sample covariance', function test( t ) {
	var acc;
	var x;
	var y;
	var i;

	x = [ 2.0, 3.0, 1.0 ];
	y = [ 3.14, -1.0, 2.4 ];

	acc = incrcovariance();
	for ( i = 0; i < x.length; i++ ) {
		acc( x[ i ], y[ i ] );
	}
	t.equal( acc(), -1.7, 'returns the current accumulated unbiased sample covariance' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current unbiased sample covariance (known means)', function test( t ) {
	var acc;
	var x;
	var y;
	var i;

	x = [ 2.0, 3.0, 1.0 ];
	y = [ 3.14, -1.0, 2.4 ];

	acc = incrcovariance( 2.0, 1.5133333333333334 );
	for ( i = 0; i < x.length; i++ ) {
		acc( x[ i ], y[ i ] );
	}
	t.equal( acc(), -1.1333333333333335, 'returns the current accumulated unbiased sample covariance' );
	t.end();
});

tape( 'the sample covariance is `null` until at least 1 datum has been provided (unknown means)', function test( t ) {
	var acc;
	var v;

	acc = incrcovariance();

	v = acc();
	t.equal( v, null, 'returns null' );

	v = acc( 2.0, 10.0 );
	t.notEqual( v, null, 'does not return null' );

	v = acc();
	t.notEqual( v, null, 'does not return null' );

	t.end();
});

tape( 'the sample covariance is `null` until at least 1 datum has been provided (known means)', function test( t ) {
	var acc;
	var v;

	acc = incrcovariance( 3.0, -5.0 );

	v = acc();
	t.equal( v, null, 'returns null' );

	v = acc( 2.0, 10.0 );
	t.notEqual( v, null, 'does not return null' );

	v = acc();
	t.notEqual( v, null, 'does not return null' );

	t.end();
});

tape( 'the sample covariance is `0` until at least 2 datums have been provided (unknown means)', function test( t ) {
	var acc;
	var v;

	acc = incrcovariance();

	v = acc( 2.0, 10.0 );
	t.equal( v, 0.0, 'returns 0' );

	v = acc();
	t.equal( v, 0.0, 'returns 0' );

	v = acc( 3.0, -3.14 );
	t.notEqual( v, 0.0, 'does not return 0' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns `NaN` for all future invocations (unknown mean)', function test( t ) {
	var data;
	var acc;
	var v;
	var i;

	data = [
		[ NaN, 1.0 ],
		[ 2.0, 1.0 ],
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 0.0 ]
	];
	acc = incrcovariance();
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );

	data = [
		[ 1.0, NaN ],
		[ 2.0, 1.0 ],
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 0.0 ]
	];
	acc = incrcovariance();
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns `NaN` for all future invocations (known mean)', function test( t ) {
	var data;
	var acc;
	var v;
	var i;

	data = [
		[ NaN, 1.0 ],
		[ 2.0, 1.0 ],
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 0.0 ]
	];
	acc = incrcovariance( 3.14, 1.0 );
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );

	data = [
		[ 1.0, NaN ],
		[ 2.0, 1.0 ],
		[ 1.0, 2.0 ],
		[ 3.0, 4.0 ],
		[ 5.0, 6.0 ],
		[ 7.0, 0.0 ]
	];
	acc = incrcovariance( 3.14, 1.0 );
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );

	t.end();
});
