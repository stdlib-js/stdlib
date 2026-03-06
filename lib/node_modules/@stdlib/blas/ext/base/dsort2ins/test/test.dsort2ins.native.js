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

/* eslint-disable max-len */

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var Float64Array = require( '@stdlib/array/float64' );
var tryRequire = require( '@stdlib/utils/try-require' );
var num2str = require( './fixtures/num2str.js' );


// VARIABLES //

var dsort2ins = tryRequire( resolve( __dirname, './../lib/dsort2ins.native.js' ) );
var opts = {
	'skip': ( dsort2ins instanceof Error )
};


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof dsort2ins, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', opts, function test( t ) {
	t.strictEqual( dsort2ins.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function sorts a strided array (increasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );

	expectedX = new Float64Array( [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0 ] );
	expectedY = new Float64Array( [ 5.0, 7.0, 3.0, 1.0, 0.0, 2.0, 4.0, 6.0 ] );

	dsort2ins( x.length, 1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ] );

	expectedX = new Float64Array( [ 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ] );
	expectedY = new Float64Array( [ 6.0, 2.0, 4.0, 0.0, 1.0, 3.0, 5.0, 7.0 ] );

	dsort2ins( x.length, -1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (increasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );

	expectedX = new Float64Array( [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0, NaN, NaN ] );
	expectedY = new Float64Array( [ 6.0, 9.0, 4.0, 1.0, 0.0, 2.0, 5.0, 7.0, 3.0, 8.0 ] );

	dsort2ins( x.length, 1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array which includes NaNs (decreasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ] );

	expectedX = new Float64Array( [ NaN, NaN, 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ] );
	expectedY = new Float64Array( [ 3.0, 8.0, 7.0, 2.0, 5.0, 0.0, 1.0, 4.0, 6.0, 9.0 ] );

	dsort2ins( x.length, -1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

	expectedX = new Float64Array( [ -0.0, -0.0, 0.0, 0.0 ] );
	expectedY = new Float64Array( [ 1.0, 3.0, 0.0, 2.0 ] );

	dsort2ins( x.length, 1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ 0.0, -0.0, 0.0, -0.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0 ] );

	expectedX = new Float64Array( [ 0.0, 0.0, -0.0, -0.0 ] );
	expectedY = new Float64Array( [ 0.0, 2.0, 1.0, 3.0 ] );

	dsort2ins( x.length, -1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array (increasing order; special cases)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	expectedX = new Float64Array( [ -1.0, 1.0, 2.0, 2.0, NaN ] );
	expectedY = new Float64Array( [ 2.0, 1.0, 3.0, 4.0, 0.0 ] );

	dsort2ins( x.length, 1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}

	x = new Float64Array( [ 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	expectedX = new Float64Array( [ -1.0, 1.0, 2.0, 2.0, NaN ] );
	expectedY = new Float64Array( [ 1.0, 0.0, 2.0, 3.0, 4.0 ] );

	dsort2ins( x.length, 1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	expectedX = new Float64Array( [ -1.0, 1.0, 2.0, 2.0, NaN, NaN ] );
	expectedY = new Float64Array( [ 2.0, 1.0, 3.0, 4.0, 0.0, 5.0 ] );

	dsort2ins( x.length, 1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function sorts a strided array (decreasing order; special cases)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	expectedX = new Float64Array( [ NaN, 2.0, 2.0, 1.0, -1.0 ] );
	expectedY = new Float64Array( [ 0.0, 3.0, 4.0, 1.0, 2.0 ] );

	dsort2ins( x.length, -1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}

	x = new Float64Array( [ 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );

	expectedX = new Float64Array( [ NaN, 2.0, 2.0, 1.0, -1.0 ] );
	expectedY = new Float64Array( [ 4.0, 2.0, 3.0, 0.0, 1.0 ] );

	dsort2ins( x.length, -1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}

	x = new Float64Array( [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ] );

	expectedX = new Float64Array( [ NaN, NaN, 2.0, 2.0, 1.0, -1.0 ] );
	expectedY = new Float64Array( [ 0.0, 5.0, 3.0, 4.0, 1.0, 2.0 ] );

	dsort2ins( x.length, -1.0, x, 1, y, 1 );
	for ( i = 0; i < expectedX.length; i++ ) {
		if ( isnan( expectedX[ i ] ) ) {
			t.strictEqual( isnan( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		} else if ( isNegativeZero( expectedX[ i ] ) ) {
			t.strictEqual( isNegativeZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+num2str( expectedX[i] )+'.' );
		} else if ( isPositiveZero( expectedX[ i ] ) ) {
			t.strictEqual( isPositiveZero( x[ i ] ), true, 'returns expected value. index: '+i+'. actual: '+num2str( x[i] )+'. expected: '+expectedX[i]+'.' );
		} else {
			t.strictEqual( x[ i ], expectedX[ i ], 'returns expected value. index: '+i+'. actual: '+x[i]+'. expected: '+expectedX[i]+'.' );
		}
		t.strictEqual( y[ i ], expectedY[ i ], 'returns expected value. index: '+i+'. actual: '+y[i]+'. expected: '+expectedY[i]+'.' );
	}
	t.end();
});

tape( 'the function returns a reference to the first input array', opts, function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	out = dsort2ins( x.length, 1.0, x, 1, y, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.notEqual( out, y, 'different reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves `x` and `y` unchanged', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	expectedX = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expectedY = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	dsort2ins( 0, 1.0, x, 1, y, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	dsort2ins( -4, 1.0, x, 1, y, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'if `order` equals `0`, the function leaves `x` and `y` unchanged', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	y = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	expectedX = new Float64Array( [ 3.0, -4.0, 1.0 ] );
	expectedY = new Float64Array( [ 0.0, 1.0, 2.0 ] );

	dsort2ins( x.length, 0.0, x, 1, y, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying strides (increasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array([
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	]);
	expectedX = new Float64Array([
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	]);
	expectedY = new Float64Array([
		2.0, // 0
		1.0,
		0.0, // 1
		3.0,
		4.0  // 2
	]);

	dsort2ins( 3, 1.0, x, 2, y, 2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying strides (decreasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	]);
	y = new Float64Array([
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	]);
	expectedX = new Float64Array([
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	]);
	expectedY = new Float64Array([
		4.0, // 0
		1.0,
		0.0, // 1
		3.0,
		2.0  // 2
	]);

	dsort2ins( 3, -1.0, x, 2, y, 2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (increasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	y = new Float64Array([
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	]);
	expectedX = new Float64Array([
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	]);
	expectedY = new Float64Array([
		0.0, // 2
		3.0,
		4.0, // 1
		1.0,
		2.0  // 0
	]);

	dsort2ins( 3, 1.0, x, -2, y, -2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (decreasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = new Float64Array([
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	]);
	y = new Float64Array([
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	]);
	expectedX = new Float64Array([
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	]);
	expectedY = new Float64Array([
		2.0, // 2
		3.0,
		4.0, // 1
		1.0,
		0.0  // 0
	]);

	dsort2ins( 3, -1.0, x, -2, y, -2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (increasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float64Array([
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	]);
	y0 = new Float64Array([
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	expectedX = new Float64Array([
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	]);
	expectedY = new Float64Array([
		0.0,
		5.0, // 0
		2.0,
		3.0, // 1
		4.0,
		1.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 );

	dsort2ins( 3, 1.0, x1, 2, y1, 2 );
	t.deepEqual( x0, expectedX, 'returns expected value' );
	t.deepEqual( y0, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (decreasing order)', opts, function test( t ) {
	var expectedX;
	var expectedY;
	var x0;
	var y0;
	var x1;
	var y1;

	x0 = new Float64Array([
		1.0,
		-6.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-2.0  // 2
	]);
	y0 = new Float64Array([
		0.0,
		1.0, // 0
		2.0,
		3.0, // 1
		4.0,
		5.0  // 2
	]);
	expectedX = new Float64Array([
		1.0,
		-2.0, // 0
		3.0,
		-4.0, // 1
		5.0,
		-6.0  // 2
	]);
	expectedY = new Float64Array([
		0.0,
		5.0, // 0
		2.0,
		3.0, // 1
		4.0,
		1.0  // 2
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );
	y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 );

	dsort2ins( 3, -1.0, x1, 2, y1, 2 );
	t.deepEqual( x0, expectedX, 'returns expected value' );
	t.deepEqual( y0, expectedY, 'returns expected value' );
	t.end();
});
