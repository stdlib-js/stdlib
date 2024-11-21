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
var incrapcorr = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrapcorr, 'function', 'main export is a function' );
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
			incrapcorr( value, 5.0 );
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
			incrapcorr( 3.0, value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrapcorr(), 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns an accumulator function (known means)', function test( t ) {
	t.equal( typeof incrapcorr( 3.0, -5.0 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function incrementally computes a sample absolute correlation coefficient', function test( t ) {
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

	// Test against Julia: abs((sum((x[1:n]-mean(x[1:n])).*(y[1:n]-mean(y[1:n]))[:])/(n-1))/(std(x[1:n])*std(y[1:n])))
	expected = [
		0.0,
		1.0,
		0.8992664495010921,
		0.23547201823172273,
		0.06765492498103522,
		0.4944446711225878
	];

	acc = incrapcorr();

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

tape( 'the accumulator function incrementally computes a sample absolute correlation coefficient (known means)', function test( t ) {
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

	// Test against Julia: (abs(sum((x[1:n]-3.0).*(y[1:n]-2.6733333333333333)[:])/(n-1))/(stdm(x[1:n],3.0)*stdm(y[1:n],2.6733333333333333)))
	expected = [
		1.0,
		0.337429241307504,
		0.14242449698664145,
		0.31297710227544034,
		0.19590456246309015,
		0.4944446711225878
	];

	acc = incrapcorr( 3.0, 2.6733333333333333 );

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

tape( 'if not provided an input value, the accumulator function returns the current sample absolute correlation coefficient', function test( t ) {
	var acc;
	var x;
	var y;
	var i;

	x = [ 2.0, 3.0, 1.0 ];
	y = [ 3.14, -1.0, 2.4 ];

	acc = incrapcorr();
	for ( i = 0; i < x.length; i++ ) {
		acc( x[ i ], y[ i ] );
	}
	t.equal( acc(), 0.7699852380946451, 'returns expected result' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current sample absolute correlation coefficient (known means)', function test( t ) {
	var acc;
	var x;
	var y;
	var i;

	x = [ 2.0, 3.0, 1.0 ];
	y = [ 3.14, -1.0, 2.4 ];

	acc = incrapcorr( 2.0, 1.5133333333333334 );
	for ( i = 0; i < x.length; i++ ) {
		acc( x[ i ], y[ i ] );
	}
	t.equal( acc(), 0.7699852380946453, 'returns expected result' );
	t.end();
});

tape( 'the sample absolute correlation coefficient is `null` until at least 1 datum has been provided (unknown means)', function test( t ) {
	var acc;
	var v;

	acc = incrapcorr();

	v = acc();
	t.equal( v, null, 'returns null' );

	v = acc( 2.0, 10.0 );
	t.notEqual( v, null, 'does not return null' );

	v = acc();
	t.notEqual( v, null, 'does not return null' );

	t.end();
});

tape( 'the sample absolute correlation coefficient is `null` until at least 1 datum has been provided (known means)', function test( t ) {
	var acc;
	var v;

	acc = incrapcorr( 3.0, -5.0 );

	v = acc();
	t.equal( v, null, 'returns null' );

	v = acc( 2.0, 10.0 );
	t.notEqual( v, null, 'does not return null' );

	v = acc();
	t.notEqual( v, null, 'does not return null' );

	t.end();
});

tape( 'the sample absolute correlation coefficient is `0` until at least 2 datums have been provided (unknown means)', function test( t ) {
	var acc;
	var v;

	acc = incrapcorr();

	v = acc( 2.0, 10.0 );
	t.equal( v, 0.0, 'returns 0' );

	v = acc();
	t.equal( v, 0.0, 'returns 0' );

	v = acc( 3.0, -3.14 );
	t.notEqual( v, 0.0, 'does not return 0' );

	v = acc();
	t.notEqual( v, 0.0, 'does not return 0' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns `NaN` for all future invocations (unknown means)', function test( t ) {
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
	acc = incrapcorr();
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
	acc = incrapcorr();
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );

	t.end();
});

tape( 'if provided a `NaN`, the accumulator function returns `NaN` for all future invocations (known means)', function test( t ) {
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
	acc = incrapcorr( 3.14, 1.0 );
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
	acc = incrapcorr( 3.14, 1.0 );
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ][ 0 ], data[ i ][ 1 ] );
		t.equal( isnan( v ), true, 'returns expected value' );
		t.equal( isnan( acc() ), true, 'returns expected value' );
	}
	t.equal( isnan( acc() ), true, 'returns expected value' );

	t.end();
});
