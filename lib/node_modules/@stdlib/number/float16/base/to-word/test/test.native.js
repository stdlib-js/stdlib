/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var NINF = require( '@stdlib/constants/float16/ninf' );
var PINF = require( '@stdlib/constants/float16/pinf' );
var repeat = require( '@stdlib/string/repeat' );
var rpad = require( '@stdlib/string/right-pad' );
var FLOAT16_NUM_EXPONENT_BITS = require( '@stdlib/constants/float16/num-exponent-bits' );
var FLOAT16_NUM_SIGNIFICAND_BITS = require( '@stdlib/constants/float16/num-significand-bits' ); // eslint-disable-line id-length
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var toWord = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( toWord instanceof Error )
};


// FIXTURES //

var negativeLarge = require( './fixtures/julia/negative_large.json' );
var negativeNormal = require( './fixtures/julia/negative_normal.json' );
var negativeSmall = require( './fixtures/julia/negative_small.json' );
var negativeSubnormal = require( './fixtures/julia/negative_subnormal.json' );
var negativeTiny = require( './fixtures/julia/negative_tiny.json' );
var positiveLarge = require( './fixtures/julia/positive_large.json' );
var positiveNormal = require( './fixtures/julia/positive_normal.json' );
var positiveSmall = require( './fixtures/julia/positive_small.json' );
var positiveSubnormal = require( './fixtures/julia/positive_subnormal.json' );
var positiveTiny = require( './fixtures/julia/positive_tiny.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof toWord, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `0`, the function returns an unsigned 16-bit integer representing the underlying IEEE 754 bit sequence', opts, function test( t ) {
	var uint16;
	var word;
	var sign;
	var frac;
	var exp;
	var w;

	sign = '0';
	exp = repeat( '0', FLOAT16_NUM_EXPONENT_BITS ); // all 0s
	frac = repeat( '0', FLOAT16_NUM_SIGNIFICAND_BITS ); // all 0s
	w = sign + exp + frac;

	uint16 = parseInt( w, 2 );

	word = toWord( 0.0 );

	t.strictEqual( word, uint16, 'equals '+w );
	t.end();
});

tape( 'if provided `-0`, the function returns an unsigned 16-bit integer representing the underlying IEEE 754 bit sequence', opts, function test( t ) {
	var uint16;
	var word;
	var sign;
	var frac;
	var exp;
	var w;

	sign = '1';
	exp = repeat( '0', FLOAT16_NUM_EXPONENT_BITS ); // all 0s
	frac = repeat( '0', FLOAT16_NUM_SIGNIFICAND_BITS ); // all 0s
	w = sign + exp + frac;

	uint16 = parseInt( w, 2 );

	word = toWord( -0.0 );

	t.strictEqual( word, uint16, 'equals '+w );
	t.end();
});

tape( 'if provided `+infinity`, the function returns an unsigned 16-bit integer representing the underlying IEEE 754 bit sequence', opts, function test( t ) {
	var uint16;
	var word;
	var sign;
	var frac;
	var exp;
	var w;

	sign = '0';
	exp = repeat( '1', FLOAT16_NUM_EXPONENT_BITS ); // all 1s
	frac = repeat( '0', FLOAT16_NUM_SIGNIFICAND_BITS ); // all 0s
	w = sign + exp + frac;

	uint16 = parseInt( w, 2 );

	word = toWord( PINF );

	t.strictEqual( word, uint16, 'equals '+w );
	t.end();
});

tape( 'if provided `-infinity`, the function returns an unsigned 16-bit integer representing the underlying IEEE 754 bit sequence', opts, function test( t ) {
	var uint16;
	var word;
	var sign;
	var frac;
	var exp;
	var w;

	sign = '1';
	exp = repeat( '1', FLOAT16_NUM_EXPONENT_BITS ); // all 1s
	frac = repeat( '0', FLOAT16_NUM_SIGNIFICAND_BITS ); // all 0s
	w = sign + exp + frac;

	uint16 = parseInt( w, 2 );

	word = toWord( NINF );

	t.strictEqual( word, uint16, 'equals '+w );
	t.end();
});

tape( 'if provided `NaN`, the function returns an unsigned 16-bit integer representing the underlying IEEE 754 bit sequence', opts, function test( t ) {
	var uint16;
	var word;
	var sign;
	var frac;
	var exp;
	var w;

	sign = '0';
	exp = repeat( '1', FLOAT16_NUM_EXPONENT_BITS ); // all 1s
	frac = rpad( '1', FLOAT16_NUM_SIGNIFICAND_BITS, '0' ); // not all 0s
	w = sign + exp + frac;

	uint16 = parseInt( w, 2 );

	word = toWord( NaN );

	t.strictEqual( word, uint16, 'equals '+w );
	t.end();
});

tape( 'if provided large positive values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = positiveLarge.x;
	expected = positiveLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided normal positive values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = positiveNormal.x;
	expected = positiveNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided small positive values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = positiveSmall.x;
	expected = positiveSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided tiny positive values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = positiveTiny.x;
	expected = positiveTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided subnormal positive values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = positiveSubnormal.x;
	expected = positiveSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided large negative values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = negativeLarge.x;
	expected = negativeLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided normal negative values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = negativeNormal.x;
	expected = negativeNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided small negative values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = negativeSmall.x;
	expected = negativeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided tiny negative values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = negativeTiny.x;
	expected = negativeTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});

tape( 'if provided subnormal negative values, the function returns unsigned 16-bit integers representing the underlying IEEE 754 bit sequences', opts, function test( t ) {
	var expected;
	var x;
	var y;
	var w;
	var i;

	x = negativeSubnormal.x;
	expected = negativeSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = toWord( x[ i ] );
		w = parseInt( expected[ i ], 2 );
		t.strictEqual( y, w, 'x: '+x[i]+', y: '+y+', expected: '+w );
	}
	t.end();
});
