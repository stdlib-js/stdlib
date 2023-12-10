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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var EPSILON = require( '@stdlib/constants/float64/eps' );
var isEven = require( '@stdlib/math/base/assert/is-even' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var normal = require( '@stdlib/random/base/normal' );
var randu = require( '@stdlib/random/base/randu' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var abs = require( '@stdlib/math/base/special/abs' );
var incrmprod = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrmprod, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a positive integer', function test( t ) {
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
			incrmprod( value );
		};
	}
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.equal( typeof incrmprod( 3 ), 'function', 'returns a function' );
	t.end();
});

tape( 'the accumulator function computes a moving product incrementally', function test( t ) {
	var expected;
	var actual;
	var data;
	var acc;
	var N;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	acc = incrmprod( 3 );

	actual = [];
	for ( i = 0; i < N; i++ ) {
		actual.push( acc( data[ i ] ) );
	}
	expected = [ 2.0, 6.0, 12.0, 24.0, 24.0, 48.0 ];

	t.deepEqual( actual, expected, 'returns expected incremental results' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current product', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 5.0 ];
	acc = incrmprod( 2 );
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.equal( acc(), 15.0, 'returns expected value' );
	t.end();
});

tape( 'if data has yet to be provided, the accumulator function returns `null`', function test( t ) {
	var acc = incrmprod( 3 );
	t.equal( acc(), null, 'returns null' );
	t.end();
});

tape( 'if provided `NaN`, the accumulated value is `NaN` for at least `W` invocations', function test( t ) {
	var expected;
	var data;
	var acc;
	var v;
	var i;

	acc = incrmprod( 3 );

	data = [
		NaN,  // NaN
		3.0, // NaN, 3.0
		3.0, // NaN, 3.0, 3.0
		NaN,  // 3.0, 3.0, NaN
		3.0, // 3.0, NaN, 3.0
		3.0, // NaN, 3.0, 3.0
		3.0, // 3.0, 3.0, 3.0
		NaN,  // 3.0, 3.0, NaN
		3.0, // 3.0, NaN, 3.0
		3.0, // NaN, 3.0, 3.0
		3.0, // 3.0, 3.0, 3.0
		NaN,  // 3.0, 3.0, NaN
		3.0, // 3.0, NaN, 3.0
		3.0, // NaN, 3.0, 3.0
		NaN,  // 3.0, 3.0, NaN
		NaN,  // 3.0, NaN, NaN
		NaN,  // NaN, NaN, NaN
		NaN,  // NaN, NaN, NaN
		3.0  // NaN, NaN, 3.0
	];
	expected = [
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		27.0,
		NaN,
		NaN,
		NaN,
		27.0,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN,
		NaN
	];
	for ( i = 0; i < data.length; i++ ) {
		v = acc( data[ i ] );
		if ( isnan( expected[ i ] ) ) {
			t.equal( isnan( v ), true, 'returns expected value for window '+i );
		} else {
			t.equal( v, expected[ i ], 'returns expected value for window '+i );
		}
	}
	t.end();
});

tape( 'the accumulator function incrementally computes a moving product (special series)', function test( t ) {
	var acc;
	var x;
	var i;

	acc = incrmprod( 150 );
	x = 2;

	// A series of reciprocals having an even number of terms is equal to unity...
	for ( i = 0; i < 150; i++ ) {
		if ( isEven( i ) ) {
			acc( x );
		} else {
			acc( 1.0/x );
		}
	}
	t.equal( acc(), 1.0, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function can return a result which overflows', function test( t ) {
	var acc = incrmprod( 2 );

	acc( 5.0e300 );
	acc( 1.0e300 );

	t.equal( acc(), PINF, 'returns infinity' );
	t.end();
});

tape( 'overflow may be transient', function test( t ) {
	var expected;
	var delta;
	var tol;
	var acc;
	var x;
	var y;
	var z;

	expected = ldexp( 0.01, 1000 );

	acc = incrmprod( 3 );

	x = ldexp( 0.5, 1000 ); // ~5.4e300
	y = ldexp( 0.1, 1000 ); // ~1.1e300
	z = ldexp( 0.2, -1000 ); // ~1.87e-302

	acc( x );
	acc( y );
	acc( z );

	delta = abs( expected - acc() );
	tol = EPSILON * abs( expected );

	t.equal( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+acc()+'. Delta: '+delta+'. Tol: '+tol+'.' );
	t.end();
});

tape( 'the accumulator function can return a result which underflows', function test( t ) {
	var acc = incrmprod( 2 );

	acc( 4.0e-302 );
	acc( 9.0e-303 );

	t.equal( acc(), 0.0, 'returns 0' );
	t.end();
});

tape( 'underflow may be transient', function test( t ) {
	var expected;
	var delta;
	var tol;
	var acc;
	var x;
	var y;
	var z;

	expected = ldexp( 0.01, -1000 );

	acc = incrmprod( 3 );

	x = ldexp( 0.5, -1000 ); // ~4.67e-302
	y = ldexp( 0.1, -1000 ); // ~9.33e-303
	z = ldexp( 0.2, 1000 ); // ~2.14e300

	acc( x );
	acc( y );

	t.equal( acc(), 0.0, 'returns 0 due to underflow' );

	acc( z );

	delta = abs( acc() - expected );
	tol = EPSILON * abs( expected );

	t.equal( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+acc()+'. Delta: '+delta+'. Tol: '+tol+'.' );
	t.end();
});

tape( 'if provided values of normal magnitude (i.e., far away from the extremes), the accumulator function returns results matching naive multiplication', function test( t ) {
	var randn;
	var prod;
	var acc;
	var r;
	var i;

	acc = incrmprod( 1000 );

	randn = normal.factory( 50.0, 10.0, {
		'seed': 1234
	});

	prod = 1.0;
	for ( i = 0; i < 1000; i++ ) {
		r = randn();
		acc( r );
		prod *= r;
	}
	t.equal( acc(), prod, 'equals native multiplication' );
	t.end();
});

tape( 'if provided `+infinity`, the accumulator function returns `+-infinity` (unless provided zero)', function test( t ) {
	var acc;
	var x;
	var i;

	acc = incrmprod( 3 );
	acc( 5.0 );

	t.equal( acc(), 5.0, 'returns expected value' );

	acc( PINF );
	t.equal( acc(), PINF, 'returns +infinity' );

	acc( 3.0 );
	t.equal( acc(), PINF, 'returns +infinity' );

	acc( -4.0 );
	t.equal( acc(), NINF, 'returns -infinity' );

	for ( i = 0; i < 100; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		if ( x === 0.0 ) {
			continue;
		}
		x = acc( x );
		t.notEqual( x === PINF || x === NINF, true, 'does not return +-infinity' );
	}
	t.end();
});

tape( 'if provided `-infinity`, the accumulator function returns `+-infinity` (unless provided zero)', function test( t ) {
	var acc;
	var x;
	var i;

	acc = incrmprod( 3 );
	acc( 5.0 );

	t.equal( acc(), 5.0, 'returns expected value' );

	acc( NINF );
	t.equal( acc(), NINF, 'returns -infinity' );

	acc( 3.0 );
	t.equal( acc(), NINF, 'returns -infinity' );

	acc( -4.0 );
	t.equal( acc(), PINF, 'returns +infinity' );

	for ( i = 0; i < 100; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		if ( x === 0.0 ) {
			continue;
		}
		x = acc( x );
		t.notEqual( x === PINF || x === NINF, true, 'does not return +-infinity' );
	}
	t.end();
});

tape( 'if provided `+infinity`, the accumulator function returns `NaN` if also provided a `0`', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrmprod( 3 );
	acc( 5.0 );

	t.equal( acc(), 5.0, 'returns expected value' );

	acc( PINF );
	t.equal( acc(), PINF, 'returns +infinity' );

	acc( 0.0 );
	t.equal( isnan( acc() ), true, 'returns NaN' );

	acc( 3.0 );
	t.equal( isnan( acc() ), true, 'returns NaN' );

	acc( 4.0 );
	t.equal( isnan( acc() ), false, 'does not return NaN' );

	for ( i = 0; i < 10; i++ ) {
		p = acc( i+1 );
		t.equal( isnan( p ), false, 'does not return NaN' );
	}
	t.end();
});

tape( 'if provided `-infinity`, the accumulator function returns `NaN` if also provided a `0`', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrmprod( 3 );
	acc( 5.0 );

	t.equal( acc(), 5.0, 'returns expected value' );

	acc( NINF );
	t.equal( acc(), NINF, 'returns -infinity' );

	acc( 0.0 );
	t.equal( isnan( acc() ), true, 'returns NaN' );

	acc( 3.0 );
	t.equal( isnan( acc() ), true, 'returns NaN' );

	acc( 4.0 );
	t.equal( isnan( acc() ), false, 'does not return NaN' );

	for ( i = 0; i < 10; i++ ) {
		p = acc( i+1 );
		t.equal( isnan( p ), false, 'does not return NaN' );
	}
	t.end();
});

tape( 'if provided `0`, the accumulator function returns `0` (no +-infinity)', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrmprod( 3 );
	acc( 5.0 );

	t.equal( acc(), 5.0, 'returns expected value' );

	acc( 0.0 );
	t.equal( acc(), 0.0, 'returns 0.0' );

	acc( 3.0 );
	t.equal( acc(), 0.0, 'returns 0.0' );

	acc( 4.0 );
	t.equal( acc(), 0.0, 'returns 0.0' );

	for ( i = 0; i < 10; i++ ) {
		p = acc( i+1 );
		t.equal( p > 0.0, true, 'does not return 0.0' );
	}
	t.end();
});

tape( 'the accumulator function returns a signed zero', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrmprod( 3 );
	p = acc( -0.0 );
	t.equal( isNegativeZero( p ), true, 'returns -0' );

	p = acc( -0.0 );
	t.equal( isPositiveZero( p ), true, 'returns +0' );

	for ( i = 0; i < 100; i++ ) {
		p = acc( -0.0 );
		t.equal( isNegativeZero( p ), true, 'returns -0' );
	}

	acc = incrmprod( 4 );
	p = acc( -0.0 );
	t.equal( isNegativeZero( p ), true, 'returns -0' );

	p = acc( -0.0 );
	t.equal( isPositiveZero( p ), true, 'returns +0' );

	p = acc( -0.0 );
	t.equal( isNegativeZero( p ), true, 'returns -0' );

	for ( i = 0; i < 100; i++ ) {
		p = acc( -0.0 );
		t.equal( isPositiveZero( p ), true, 'returns +0' );
	}

	t.end();
});
