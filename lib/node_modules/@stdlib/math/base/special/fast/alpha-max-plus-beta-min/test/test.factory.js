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
var randu = require( '@stdlib/random/base/randu' ).factory;
var abs = require( '@stdlib/math/base/special/abs' );
var roundn = require( '@stdlib/math/base/special/roundn' );
var hypot = require( '@stdlib/math/base/special/hypot' );
var factory = require( './../lib' ).factory;


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a function', function test( t ) {
	var approx = factory( 1.0, 0.5 );
	t.strictEqual( typeof approx, 'function', 'returns a function' );
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/2)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.5 );
	tol = 0.1180;

	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/2, always nonnegative)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.5, true );
	tol = 0.1180;

	for ( i = 0; i < 500; i++ ) {
		x = rand()*100.0;
		y = rand()*100.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/2, always integers)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.5, false, true );
	tol = 0.30; // mainly due to |x| = |y| = 1

	for ( i = 0; i < 500; i++ ) {
		x = roundn( rand()*100.0, 0 ) - 50.0;
		y = roundn( rand()*100.0, 0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/2, always nonnegative integers)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.5, true, true );
	tol = 0.30; // mainly due to |x| = |y| = 1

	for ( i = 0; i < 500; i++ ) {
		x = roundn( rand()*100.0, 0 );
		y = roundn( rand()*100.0, 0 );
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/4)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.25 );
	tol = 0.1161;

	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/4, always nonnegative)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.25, true );
	tol = 0.1161;

	for ( i = 0; i < 500; i++ ) {
		x = rand()*100.0;
		y = rand()*100.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/4, always integers)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.25, false, true );
	tol = 0.30; // mainly due to |x| = |y| = 1

	for ( i = 0; i < 500; i++ ) {
		x = roundn( rand()*100.0, 0 ) - 50.0;
		y = roundn( rand()*100.0, 0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 1/4, always nonnegative integers)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 0.25, true, true );
	tol = 0.30; // mainly due to |x| = |y| = 1

	for ( i = 0; i < 500; i++ ) {
		x = roundn( rand()*100.0, 0 );
		y = roundn( rand()*100.0, 0 );
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 3/8)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 3.0/8.0 );
	tol = 0.0680;

	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 3/8, always positive)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 3.0/8.0, true );
	tol = 0.0680;

	for ( i = 0; i < 500; i++ ) {
		x = rand()*100.0;
		y = rand()*100.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 1, beta = 3/8, always nonnegative)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 1.0, 3.0/8.0, true );
	tol = 0.0680;

	for ( i = 0; i < 500; i++ ) {
		x = rand()*100.0;
		y = rand()*100.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 7/8, beta = 7/16)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 7.0/8.0, 7.0/16.0 );
	tol = 0.1250;

	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha = 15/16, beta = 15/32)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 15.0/16.0, 15.0/32.0 );
	tol = 0.0625;

	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha ~ 0.96, beta ~ 0.398)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 0.96043387010342, 0.397824734759316 );
	tol = 0.0396;

	for ( i = 0; i < 500; i++ ) {
		x = ( rand()*100.0 ) - 50.0;
		y = ( rand()*100.0 ) - 50.0;
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});

tape( 'the returned function computes the hypotenuse using the alpha max plus beta min algorithm (alpha ~ 0.96, beta ~ 0.398)', function test( t ) {
	var expected;
	var approx;
	var rand;
	var err;
	var tol;
	var h;
	var x;
	var y;
	var i;

	rand = randu();
	t.ok( true, 'seed: '+rand.seed );

	approx = factory( 0.96043387010342, 0.397824734759316, true, true );
	tol = 0.0396;

	for ( i = 0; i < 500; i++ ) {
		x = roundn( rand()*100.0, 0 );
		y = roundn( rand()*100.0, 0 );
		expected = hypot( x, y );
		h = approx( x, y );
		if ( h === expected ) {
			t.ok( true, 'x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'.' );
		} else {
			err = abs( h - expected ) / abs( expected );
			err = roundn( err, -4 );
			t.strictEqual( err <= tol, true, 'within tolerance. x: '+x+'. y: '+y+'. h: '+h+'. Expected: '+expected+'. Error: '+err+'. Tol: '+tol+'.' );
		}
	}
	t.end();
});
