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
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var toAccessorArray = require( '@stdlib/array/base/to-accessor-array' );
var Float64Array = require( '@stdlib/array/float64' );
var num2str = require( './fixtures/num2str.js' );
var gsort2ins = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gsort2ins, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 6', function test( t ) {
	t.strictEqual( gsort2ins.length, 6, 'has expected arity' );
	t.end();
});

tape( 'the function sorts a strided array (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];

	expectedX = [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0 ];
	expectedY = [ 5.0, 7.0, 3.0, 1.0, 0.0, 2.0, 4.0, 6.0 ];

	gsort2ins( x.length, 1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array (increasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];

	expectedX = [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0 ];
	expectedY = [ 5.0, 7.0, 3.0, 1.0, 0.0, 2.0, 4.0, 6.0 ];

	gsort2ins( x.length, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];

	expectedX = [ 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ];
	expectedY = [ 6.0, 2.0, 4.0, 0.0, 1.0, 3.0, 5.0, 7.0 ];

	gsort2ins( x.length, -1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array (decreasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, -2.0, 2.0, -3.0, 3.0, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0 ];

	expectedX = [ 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ];
	expectedY = [ 6.0, 2.0, 4.0, 0.0, 1.0, 3.0, 5.0, 7.0 ];

	gsort2ins( x.length, -1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array which includes NaNs (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];

	expectedX = [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0, NaN, NaN ];
	expectedY = [ 6.0, 9.0, 4.0, 1.0, 0.0, 2.0, 5.0, 7.0, 3.0, 8.0 ];

	gsort2ins( x.length, 1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array which includes NaNs (increasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];

	expectedX = [ -3.0, -3.0, -2.0, -1.0, 1.0, 2.0, 2.0, 3.0, NaN, NaN ];
	expectedY = [ 6.0, 9.0, 4.0, 1.0, 0.0, 2.0, 5.0, 7.0, 3.0, 8.0 ];

	gsort2ins( x.length, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array which includes NaNs (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];

	expectedX = [ NaN, NaN, 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ];
	expectedY = [ 3.0, 8.0, 7.0, 2.0, 5.0, 0.0, 1.0, 4.0, 6.0, 9.0 ];

	gsort2ins( x.length, -1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array which includes NaNs (decreasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 1.0, -1.0, 2.0, NaN, -2.0, 2.0, -3.0, 3.0, NaN, -3.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0 ];

	expectedX = [ NaN, NaN, 3.0, 2.0, 2.0, 1.0, -1.0, -2.0, -3.0, -3.0 ];
	expectedY = [ 3.0, 8.0, 7.0, 2.0, 5.0, 0.0, 1.0, 4.0, 6.0, 9.0 ];

	gsort2ins( x.length, -1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 0.0, -0.0, 0.0, -0.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0 ];

	expectedX = [ -0.0, -0.0, 0.0, 0.0 ];
	expectedY = [ 1.0, 3.0, 0.0, 2.0 ];

	gsort2ins( x.length, 1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array which includes positive and negative zeros (increasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 0.0, -0.0, 0.0, -0.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0 ];

	expectedX = [ -0.0, -0.0, 0.0, 0.0 ];
	expectedY = [ 1.0, 3.0, 0.0, 2.0 ];

	gsort2ins( x.length, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 0.0, -0.0, 0.0, -0.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0 ];

	expectedX = [ 0.0, 0.0, -0.0, -0.0 ];
	expectedY = [ 0.0, 2.0, 1.0, 3.0 ];

	gsort2ins( x.length, -1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array which includes positive and negative zeros (decreasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ 0.0, -0.0, 0.0, -0.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0 ];

	expectedX = [ 0.0, 0.0, -0.0, -0.0 ];
	expectedY = [ 0.0, 2.0, 1.0, 3.0 ];

	gsort2ins( x.length, -1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array (increasing order, special cases)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ -1.0, 1.0, 2.0, 2.0, NaN ];
	expectedY = [ 2.0, 1.0, 3.0, 4.0, 0.0 ];

	gsort2ins( x.length, 1.0, x, 1, y, 1 );
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

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ -1.0, 1.0, 2.0, 2.0, NaN ];
	expectedY = [ 1.0, 0.0, 2.0, 3.0, 4.0 ];

	gsort2ins( x.length, 1.0, x, 1, y, 1 );
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

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];

	expectedX = [ -1.0, 1.0, 2.0, 2.0, NaN, NaN ];
	expectedY = [ 2.0, 1.0, 3.0, 4.0, 0.0, 5.0 ];

	gsort2ins( x.length, 1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array (increasing order, special cases, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ -1.0, 1.0, 2.0, 2.0, NaN ];
	expectedY = [ 2.0, 1.0, 3.0, 4.0, 0.0 ];

	gsort2ins( x.length, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ -1.0, 1.0, 2.0, 2.0, NaN ];
	expectedY = [ 1.0, 0.0, 2.0, 3.0, 4.0 ];

	gsort2ins( x.length, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];

	expectedX = [ -1.0, 1.0, 2.0, 2.0, NaN, NaN ];
	expectedY = [ 2.0, 1.0, 3.0, 4.0, 0.0, 5.0 ];

	gsort2ins( x.length, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function sorts a strided array (decreasing order, special cases)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ NaN, 2.0, 2.0, 1.0, -1.0 ];
	expectedY = [ 0.0, 3.0, 4.0, 1.0, 2.0 ];

	gsort2ins( x.length, -1.0, x, 1, y, 1 );
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

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ NaN, 2.0, 2.0, 1.0, -1.0 ];
	expectedY = [ 4.0, 2.0, 3.0, 0.0, 1.0 ];

	gsort2ins( x.length, -1.0, x, 1, y, 1 );
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

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];

	expectedX = [ NaN, NaN, 2.0, 2.0, 1.0, -1.0 ];
	expectedY = [ 0.0, 5.0, 3.0, 4.0, 1.0, 2.0 ];

	gsort2ins( x.length, -1.0, x, 1, y, 1 );
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

tape( 'the function sorts a strided array (decreasing order, special cases, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;
	var i;

	x = [ NaN, 1.0, -1.0, 2.0, 2.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ NaN, 2.0, 2.0, 1.0, -1.0 ];
	expectedY = [ 0.0, 3.0, 4.0, 1.0, 2.0 ];

	gsort2ins( x.length, -1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

	x = [ 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];

	expectedX = [ NaN, 2.0, 2.0, 1.0, -1.0 ];
	expectedY = [ 4.0, 2.0, 3.0, 0.0, 1.0 ];

	gsort2ins( x.length, -1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

	x = [ NaN, 1.0, -1.0, 2.0, 2.0, NaN ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0, 5.0 ];

	expectedX = [ NaN, NaN, 2.0, 2.0, 1.0, -1.0 ];
	expectedY = [ 0.0, 5.0, 3.0, 4.0, 1.0, 2.0 ];

	gsort2ins( x.length, -1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
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

tape( 'the function returns a reference to the first input array', function test( t ) {
	var out;
	var x;
	var y;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	y = [ 0.0, 1.0, 2.0, 3.0, 4.0 ];
	out = gsort2ins( x.length, 1.0, x, 1, y, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.notEqual( out, y, 'different reference' );
	t.end();
});

tape( 'the function returns a reference to the first input array (accessors)', function test( t ) {
	var out;
	var x;
	var y;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	y = toAccessorArray( [ 0.0, 1.0, 2.0, 3.0, 4.0 ] );
	out = gsort2ins( x.length, 1.0, x, 1, y, 1 );

	t.strictEqual( out, x, 'same reference' );
	t.notEqual( out, y, 'different reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves `x` and `y` unchanged', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0 ];
	y = [ 0.0, 1.0, 2.0 ];

	expectedX = [ 3.0, -4.0, 1.0 ];
	expectedY = [ 0.0, 1.0, 2.0 ];

	gsort2ins( 0, 1.0, x, 1, y, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	gsort2ins( -4, 1.0, x, 1, y, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function leaves `x` and `y` unchanged (accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0 ];
	y = [ 0.0, 1.0, 2.0 ];

	expectedX = [ 3.0, -4.0, 1.0 ];
	expectedY = [ 0.0, 1.0, 2.0 ];

	gsort2ins( 0, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	gsort2ins( -4, 1.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'if `order` equals `0`, the function leaves `x` and `y` unchanged', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0 ];
	y = [ 0.0, 1.0, 2.0 ];

	expectedX = [ 3.0, -4.0, 1.0 ];
	expectedY = [ 0.0, 1.0, 2.0 ];

	gsort2ins( x.length, 0.0, x, 1, y, 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'if `order` equals `0`, the function leaves `x` and `y` unchanged (accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [ 3.0, -4.0, 1.0 ];
	y = [ 0.0, 1.0, 2.0 ];

	expectedX = [ 3.0, -4.0, 1.0 ];
	expectedY = [ 0.0, 1.0, 2.0 ];

	gsort2ins( x.length, 0.0, toAccessorArray( x ), 1, toAccessorArray( y ), 1 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying strides (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = [
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	];
	expectedX = [
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	];
	expectedY = [
		2.0, // 0
		1.0,
		0.0, // 1
		3.0,
		4.0  // 2
	];

	gsort2ins( 3, 1.0, x, 2, y, 2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying strides (increasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = [
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	];
	expectedX = [
		-5.0, // 0
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 2
	];
	expectedY = [
		2.0, // 0
		1.0,
		0.0, // 1
		3.0,
		4.0  // 2
	];

	gsort2ins( 3, 1.0, toAccessorArray( x ), 2, toAccessorArray( y ), 2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying strides (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = [
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	];
	expectedX = [
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	];
	expectedY = [
		4.0, // 0
		1.0,
		0.0, // 1
		3.0,
		2.0  // 2
	];

	gsort2ins( 3, -1.0, x, 2, y, 2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying strides (decreasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	y = [
		0.0, // 0
		1.0,
		2.0, // 1
		3.0,
		4.0  // 2
	];
	expectedX = [
		6.0,  // 0
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 2
	];
	expectedY = [
		4.0, // 0
		1.0,
		0.0, // 1
		3.0,
		2.0  // 2
	];

	gsort2ins( 3, -1.0, toAccessorArray( x ), 2, toAccessorArray( y ), 2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (increasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	y = [
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	];
	expectedX = [
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	];
	expectedY = [
		0.0, // 2
		3.0,
		4.0, // 1
		1.0,
		2.0  // 0
	];

	gsort2ins( 3, 1.0, x, -2, y, -2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (increasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	y = [
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	];
	expectedX = [
		6.0,  // 2
		-3.0,
		2.0,  // 1
		7.0,
		-5.0  // 0
	];
	expectedY = [
		0.0, // 2
		3.0,
		4.0, // 1
		1.0,
		2.0  // 0
	];

	gsort2ins( 3, 1.0, toAccessorArray( x ), -2, toAccessorArray( y ), -2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (decreasing order)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	y = [
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	];
	expectedX = [
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	];
	expectedY = [
		2.0, // 2
		3.0,
		4.0, // 1
		1.0,
		0.0  // 0
	];

	gsort2ins( 3, -1.0, x, -2, y, -2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying negative strides (decreasing order, accessors)', function test( t ) {
	var expectedX;
	var expectedY;
	var x;
	var y;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	y = [
		4.0, // 2
		3.0,
		2.0, // 1
		1.0,
		0.0  // 0
	];
	expectedX = [
		-5.0, // 2
		-3.0,
		2.0,  // 1
		7.0,
		6.0   // 0
	];
	expectedY = [
		2.0, // 2
		3.0,
		4.0, // 1
		1.0,
		0.0  // 0
	];

	gsort2ins( 3, -1.0, toAccessorArray( x ), -2, toAccessorArray( y ), -2 );
	t.deepEqual( x, expectedX, 'returns expected value' );
	t.deepEqual( y, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (increasing order)', function test( t ) {
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

	gsort2ins( 3, 1.0, x1, 2, y1, 2 );
	t.deepEqual( x0, expectedX, 'returns expected value' );
	t.deepEqual( y0, expectedY, 'returns expected value' );
	t.end();
});

tape( 'the function supports view offsets (decreasing order)', function test( t ) {
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

	gsort2ins( 3, -1.0, x1, 2, y1, 2 );
	t.deepEqual( x0, expectedX, 'returns expected value' );
	t.deepEqual( y0, expectedY, 'returns expected value' );
	t.end();
});
