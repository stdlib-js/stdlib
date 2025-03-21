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
var normal = require( '@stdlib/random/base/normal' );
var randu = require( '@stdlib/random/base/randu' );
var ldexp = require( '@stdlib/math/base/special/ldexp' );
var abs = require( '@stdlib/math/base/special/abs' );
var isnan = require( '@stdlib/assert/is-nan' );
var isEven = require( '@stdlib/math/base/assert/is-even' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var incrprod = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof incrprod, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an accumulator function', function test( t ) {
	t.strictEqual( typeof incrprod(), 'function', 'returns a function' );
	t.end();
});

tape( 'the initial accumulator value is `null`', function test( t ) {
	var acc = incrprod();
	t.strictEqual( acc(), null, 'returns null' );
	t.end();
});

tape( 'the accumulator function incrementally computes a product', function test( t ) {
	var expected;
	var actual;
	var data;
	var prod;
	var acc;
	var N;
	var d;
	var i;

	data = [ 2.0, 3.0, 2.0, 4.0, 3.0, 4.0 ];
	N = data.length;

	expected = new Array( N );
	actual = new Array( N );

	acc = incrprod();

	prod = 1.0;
	for ( i = 0; i < N; i++ ) {
		d = data[ i ];
		prod *= d;
		expected[ i ] = prod;
		actual[ i ] = acc( d );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'if not provided an input value, the accumulator function returns the current product', function test( t ) {
	var data;
	var acc;
	var i;

	data = [ 2.0, 3.0, 1.0 ];

	acc = incrprod();
	for ( i = 0; i < data.length; i++ ) {
		acc( data[ i ] );
	}
	t.strictEqual( acc(), 6.0, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function incrementally computes a product (special series)', function test( t ) {
	var acc;
	var x;
	var i;

	acc = incrprod();
	x = 2;

	// A series of reciprocals having an even number of terms is equal to unity...
	for ( i = 0; i < 150; i++ ) {
		if ( isEven( i ) ) {
			acc( x );
		} else {
			acc( 1.0/x );
		}
	}
	t.strictEqual( acc(), 1.0, 'returns expected value' );
	t.end();
});

tape( 'the accumulator function can return a result which overflows', function test( t ) {
	var acc = incrprod();

	acc( 5.0e300 );
	acc( 1.0e300 );

	t.strictEqual( acc(), PINF, 'returns infinity' );
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

	acc = incrprod();

	x = ldexp( 0.5, 1000 ); // ~5.4e300
	y = ldexp( 0.1, 1000 ); // ~1.1e300
	z = ldexp( 0.2, -1000 ); // ~1.87e-302

	acc( x );
	acc( y );
	acc( z );

	delta = abs( expected - acc() );
	tol = EPSILON * abs( expected );

	t.strictEqual( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+acc()+'. Delta: '+delta+'. Tol: '+tol+'.' );
	t.end();
});

tape( 'the accumulator function can return a result which underflows', function test( t ) {
	var acc = incrprod();

	acc( 4.0e-302 );
	acc( 9.0e-303 );

	t.strictEqual( acc(), 0.0, 'returns 0' );
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

	acc = incrprod();

	x = ldexp( 0.5, -1000 ); // ~4.67e-302
	y = ldexp( 0.1, -1000 ); // ~9.33e-303
	z = ldexp( 0.2, 1000 ); // ~2.14e300

	acc( x );
	acc( y );

	t.strictEqual( acc(), 0.0, 'returns 0 due to underflow' );

	acc( z );

	delta = abs( acc() - expected );
	tol = EPSILON * abs( expected );

	t.strictEqual( delta <= tol, true, 'within tolerance. Expected: '+expected+'. Actual: '+acc()+'. Delta: '+delta+'. Tol: '+tol+'.' );
	t.end();
});

tape( 'if provided a `NaN`, the accumulator function always returns `NaN`', function test( t ) {
	var acc;
	var i;

	acc = incrprod();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( NaN );
	t.strictEqual( isnan( acc() ), true, 'returns NaN' );

	for ( i = 0; i < 100; i++ ) {
		acc( 3.14 );
		t.strictEqual( isnan( acc() ), true, 'returns NaN' );
	}
	t.end();
});

tape( 'if provided `+infinity`, the accumulator function always returns `+-infinity` (unless provided zero)', function test( t ) {
	var acc;
	var x;
	var i;

	acc = incrprod();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( PINF );
	t.strictEqual( acc(), PINF, 'returns +infinity' );

	for ( i = 0; i < 100; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		if ( x === 0.0 ) {
			continue;
		}
		x = acc( x );
		t.strictEqual( x === PINF || x === NINF, true, 'returns +-infinity' );
	}
	t.end();
});

tape( 'if provided `-infinity`, the accumulator function always returns `+-infinity` (unless provided zero)', function test( t ) {
	var acc;
	var x;
	var i;

	acc = incrprod();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( NINF );
	t.strictEqual( acc(), NINF, 'returns -infinity' );

	for ( i = 0; i < 100; i++ ) {
		x = ( randu()*100.0 ) - 50.0;
		if ( x === 0.0 ) {
			continue;
		}
		x = acc( x );
		t.strictEqual( x === PINF || x === NINF, true, 'returns +-infinity' );
	}
	t.end();
});

tape( 'if provided `+infinity`, the accumulator function always returns `NaN` if also provided a `0`', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrprod();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( PINF );
	t.strictEqual( acc(), PINF, 'returns +infinity' );

	acc( 0.0 );
	t.strictEqual( isnan( acc() ), true, 'returns NaN' );

	for ( i = 0; i < 1000; i++ ) {
		p = acc( i+1 );
		t.strictEqual( isnan( p ), true, 'returns NaN' );
	}
	t.end();
});

tape( 'if provided `-infinity`, the accumulator function always returns `NaN` if also provided a `0`', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrprod();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( NINF );
	t.strictEqual( acc(), NINF, 'returns -infinity' );

	acc( 0.0 );
	t.strictEqual( isnan( acc() ), true, 'returns NaN' );

	for ( i = 0; i < 1000; i++ ) {
		p = acc( i+1 );
		t.strictEqual( isnan( p ), true, 'returns NaN' );
	}
	t.end();
});

tape( 'if provided `0`, the accumulator function always returns `0` (no +-infinity)', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrprod();
	acc( 5.0 );

	t.strictEqual( acc(), 5.0, 'returns expected value' );

	acc( 0.0 );
	t.strictEqual( acc(), 0.0, 'returns 0.0' );

	for ( i = 0; i < 1000; i++ ) {
		p = acc( i+1 );
		t.strictEqual( p, 0.0, 'returns 0.0' );
	}
	t.end();
});

tape( 'the accumulator function returns a signed zero', function test( t ) {
	var acc;
	var p;
	var i;

	acc = incrprod();
	acc( -0.0 );
	for ( i = 0; i < 100; i++ ) {
		p = acc( -0.0 );
		if ( isEven( i ) ) {
			t.strictEqual( isPositiveZero( p ), true, 'returns +0' );
		} else {
			t.strictEqual( isNegativeZero( p ), true, 'returns -0' );
		}
	}
	t.end();
});

tape( 'if provided values of normal magnitude (i.e., far away from the extremes), the accumulator function returns results matching naive multiplication', function test( t ) {
	var randn;
	var prod;
	var acc;
	var r;
	var i;

	acc = incrprod();

	randn = normal.factory( 50.0, 10.0, {
		'seed': 1234
	});

	prod = 1.0;
	for ( i = 0; i < 1000; i++ ) {
		r = randn();
		acc( r );
		prod *= r;
	}
	t.strictEqual( acc(), prod, 'equals native multiplication' );
	t.end();
});
