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

var tape = require( 'tape' );
var NINF = require( '@stdlib/constants/float16/ninf' );
var PINF = require( '@stdlib/constants/float16/pinf' );
var isNegativeZero = require( '@stdlib/math/base/assert/is-negative-zero' );
var isPositiveZero = require( '@stdlib/math/base/assert/is-positive-zero' );
var isnan = require( '@stdlib/math/base/assert/is-nan' );
var repeat = require( '@stdlib/string/repeat' );
var rpad = require( '@stdlib/string/right-pad' );
var fromWord = require( './../lib' );


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

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof fromWord, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided `0`, the function returns `0`', function test( t ) {
	t.strictEqual( isPositiveZero( fromWord( 0 ) ), true, 'equals 0' );
	t.end();
});

tape( 'if provided a word corresponding to `-0`, the function returns `-0`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '1';
	exp = repeat( '0', 5 ); // all 0s
	frac = repeat( '0', 10 ); // all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );

	t.strictEqual( isNegativeZero( x ), true, 'returns expected value' );
	t.end();
});

tape( 'if provided a word corresponding to `+infinity`, the function returns `+infinity`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '0';
	exp = repeat( '1', 5 ); // all 1s
	frac = repeat( '0', 10 ); // all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );

	t.strictEqual( x, PINF, 'equals +infinity' );
	t.end();
});

tape( 'if provided a word corresponding to `-infinity`, the function returns `-infinity`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '1';
	exp = repeat( '1', 5 ); // all 1s
	frac = repeat( '0', 10 ); // all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );

	t.strictEqual( x, NINF, 'equals -infinity' );
	t.end();
});

tape( 'if provided a word corresponding to `NaN`, the function returns `NaN`', function test( t ) {
	var word;
	var sign;
	var frac;
	var exp;
	var x;
	var w;

	sign = '0';
	exp = repeat( '1', 5 ); // all 1s
	frac = rpad( '1', 10, '0' ); // not all 0s
	w = sign + exp + frac;

	word = parseInt( w, 2 );

	x = fromWord( word );

	t.strictEqual( isnan( x ), true, 'equals NaN' );
	t.end();
});

tape( 'if provided words corresponding to large positive values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveLarge.x;
	expected = positiveLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to normal positive values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveNormal.x;
	expected = positiveNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to small positive values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveSmall.x;
	expected = positiveSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to tiny positive values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveTiny.x;
	expected = positiveTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to subnormal positive values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = positiveSubnormal.x;
	expected = positiveSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to large negative values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeLarge.x;
	expected = negativeLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to normal negative values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeNormal.x;
	expected = negativeNormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to small negative values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeSmall.x;
	expected = negativeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to tiny negative values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeTiny.x;
	expected = negativeTiny.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});

tape( 'if provided words corresponding to subnormal negative values, the function returns corresponding half-precision floating-point numbers', function test( t ) {
	var expected;
	var x;
	var y;
	var i;

	x = negativeSubnormal.x;
	expected = negativeSubnormal.expected;
	for ( i = 0; i < x.length; i++ ) {
		y = fromWord( x[ i ] );
		t.strictEqual( y, expected[i], 'x: '+x[i]+', expected: '+expected[i] );
	}
	t.end();
});
