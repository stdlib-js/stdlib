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
var incrspace = require( '@stdlib/math/utils/incrspace' );
var isfinite = require( '@stdlib/math/base/assert/is-finite' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var abs = require( '@stdlib/math/base/special/abs' );
var PINF = require( '@stdlib/constants/math/float64-pinf' );
var gammaincinv = require( './../lib' );


// FIXTURES //

var arg1 = require( './fixtures/r/arg1.json' );
var arg2 = require( './fixtures/r/arg2.json' );
var expected = require( './fixtures/r/expected.json' );
var smallArg1 = require( './fixtures/r/small_arg1.json' );
var smallArg2 = require( './fixtures/r/small_arg2.json' );
var smallExpected = require( './fixtures/r/small_expected.json' );
var largeArg1 = require( './fixtures/r/large_arg1.json' );
var largeArg2 = require( './fixtures/r/large_arg2.json' );
var largeExpected = require( './fixtures/r/large_expected.json' );
var upperArg1 = require( './fixtures/r/upper_arg1.json' );
var upperArg2 = require( './fixtures/r/upper_arg2.json' );
var upperExpected = require( './fixtures/r/upper_expected.json' );

var i;
var v;
for ( i = 0; i < expected.length; i++ ) {
	v = expected[ i ];
	if ( v === 'Inf' ) {
		expected[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		expected[ i ] = NaN;
	}
}
for ( i = 0; i < smallExpected.length; i++ ) {
	v = smallExpected[ i ];
	if ( v === 'Inf' ) {
		smallExpected[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		smallExpected[ i ] = NaN;
	}
}
for ( i = 0; i < largeExpected.length; i++ ) {
	v = largeExpected[ i ];
	if ( v === 'Inf' ) {
		largeExpected[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		largeExpected[ i ] = NaN;
	}
}
for ( i = 0; i < upperExpected.length; i++ ) {
	v = upperExpected[ i ];
	if ( v === 'Inf' ) {
		upperExpected[ i ] = PINF;
	}
	else if ( v === 'NaN' ) {
		upperExpected[ i ] = NaN;
	}
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gammaincinv, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` if provided a `NaN`', function test( t ) {
	var val;

	val = gammaincinv( NaN, 2 );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	val = gammaincinv( 0.5, NaN );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `NaN` if provided `p` outside the interval `[0,1]`', function test( t ) {
	var val;

	val = gammaincinv( 1.2, 2 );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	val = gammaincinv( -0.1, 2 );
	t.strictEqual( isnan( val ), true, 'returns NaN' );

	t.end();
});

tape( 'the function returns `0` if provided `p = 1`', function test( t ) {
	var val;
	var a;
	var i;

	a = incrspace( 0, 100, 10 );
	for ( i = 0; i < a.length; i++ ) {
		val = gammaincinv( 1, a[ i ] );
		t.notOk( val === 0, 'returns 0' );
	}
	t.end();
});

tape( 'the function returns `+Infinity` if provided `p = 0`', function test( t ) {
	var val;
	var a;
	var i;

	a = incrspace( 0, 100, 10 );
	for ( i = 0; i < a.length; i++ ) {
		val = gammaincinv( 0, a[ i ] );
		t.notOk( val === PINF, 'returns +Infinity' );
	}
	t.end();
});

tape( 'the function returns `0` if provided `p = 0` when `upper = true`', function test( t ) {
	var val;
	var a;
	var i;

	a = incrspace( 0, 100, 10 );
	for ( i = 0; i < a.length; i++ ) {
		val = gammaincinv( 0, a[ i ], true );
		t.notOk( val === 0, 'returns 0' );
	}
	t.end();
});

tape( 'the function returns `+Infinity` if provided `p = 1` when `upper = true`', function test( t ) {
	var val;
	var a;
	var i;

	a = incrspace( 0, 100, 10 );
	for ( i = 0; i < a.length; i++ ) {
		val = gammaincinv( 1, a[ i ], true );
		t.notOk( val === PINF, 'returns +Infinity' );
	}
	t.end();
});

tape( 'the function inverts the lower incomplete gamma function', function test( t ) {
	var actual;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < arg1.length; i++ ) {
		actual = gammaincinv( arg1[ i ], arg2[ i ] );

		b1 = isfinite( actual );
		b2 = isfinite( expected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			t.ok( abs( actual - expected[ i ] ) < 4e-14, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function inverts the upper incomplete gamma function when `upper=true`', function test( t ) {
	var actual;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < arg1.length; i++ ) {
		actual = gammaincinv( upperArg1[ i ], upperArg2[ i ], true );

		b1 = isfinite( actual );
		b2 = isfinite( upperExpected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( expected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			t.ok( abs( actual - upperExpected[ i ] ) < 5e-14, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + upperExpected[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function inverts the lower incomplete gamma function for `p` smaller than `1e-4`', function test( t ) {
	var actual;
	var b1;
	var b2;
	var i;
	for ( i = 0; i < smallArg1.length; i++ ) {
		actual = gammaincinv( smallArg1[ i ], smallArg2[ i ] );

		b1 = isfinite( actual );
		b2 = isfinite( smallExpected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( smallExpected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			t.ok( abs( actual - smallExpected[ i ] ) < 6e-15, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + smallExpected[ i ] + '.' );
		}
	}
	t.end();
});

tape( 'the function inverts the lower incomplete gamma function for `p` larger than `0.9`', function test( t ) {
	var actual;
	var b1;
	var b2;
	var i;

	for ( i = 0; i < largeArg1.length; i++ ) {
		actual = gammaincinv( largeArg1[ i ], largeArg2[ i ] );

		b1 = isfinite( actual );
		b2 = isfinite( largeExpected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b2) ? 'finite' : 'not finite' ) );

		b1 = isnan( actual );
		b2 = isnan( largeExpected[ i ] );
		t.equal( b1, b2, 'returned result is ' + ( (b1) ? '' : 'not' ) + ' NaN' );
		if ( !b1 || !b2 ) {
			t.ok( abs( actual - largeExpected[ i ] ) < 2e-13, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + largeExpected[ i ] + '.' );
		}
	}
	t.end();
});
