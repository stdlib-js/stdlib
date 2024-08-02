/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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
var PINF = require( '@stdlib/constants/float64/pinf' );
var NINF = require( '@stdlib/constants/float64/ninf' );
var tryRequire = require( '@stdlib/utils/try-require' );


// VARIABLES //

var binomcoef = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( binomcoef instanceof Error )
};


// FIXTURES //

var integers = require( './fixtures/julia/integers.json' );
var negativeN = require( './fixtures/julia/negative_n.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof binomcoef, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `n` and `k`', opts, function test( t ) {
	var expected;
	var n;
	var k;
	var v;
	var i;

	n = integers.n;
	k = integers.k;
	expected = integers.expected;
	for ( i = 0; i < n.length; i++ ) {
		v = binomcoef( n[ i ], k[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value. actual: '+v+'. expected: '+expected[i]+'. n: '+n[i]+'. k: '+k[i]+'.' );
	}
	t.end();
});

tape( 'the function evaluates the binomial coefficient for integers `n` and `k` (negative `n`)', opts, function test( t ) {
	var expected;
	var n;
	var k;
	var v;
	var i;

	n = negativeN.n;
	k = negativeN.k;
	expected = negativeN.expected;
	for ( i = 0; i < n.length; i++ ) {
		v = binomcoef( n[ i ], k[ i ] );
		t.strictEqual( v, expected[ i ], 'returns expected value. actual: '+v+'. expected: '+expected[i]+'. n: '+n[i]+'. k: '+k[i]+'.' );
	}
	t.end();
});

tape( 'the function returns `0` for a negative integer `k`', opts, function test( t ) {
	var v = binomcoef( 2, -1 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = binomcoef( 2, -2 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function returns `0` when `k` is greater than `n`', opts, function test( t ) {
	var v = binomcoef( 2, 4 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = binomcoef( 2, 10 );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'the function accurately computes the binomial coefficient for large `n` and `k`', opts, function test( t ) {
	var expected;
	var actual;
	var values;
	var i;

	values = [
		// Ref: https://github.com/stdlib-js/stdlib/issues/1155
		[ 54, 23 ],
		[ 55, 24 ],
		[ 56, 22 ],
		[ 58, 20 ],
		[ 69, 17 ],

		// Ref: https://github.com/stdlib-js/stdlib/issues/2150
		[ 300, 251 ],
		[ 2000, 1996 ],
		[ 2000, 1995 ],

		[ 2000, 300 ],
		[ -2000, 1001 ]
	];
	expected = [
		1085929983159840,
		2488589544741300,
		2142582442263900,
		1847253511032930,
		5964720367660956,

		6.200662003268765e+56, // WolframAlpha: 6.200662003268765320314457726802431127732140827377427408e+56 => this rounds to 6.2006620032687655e+56 in double-precision, so our result is not exact
		6.646684995e11,        // WolframAlpha
		2.653356650004e14,     // WolframAlpha

		PINF,                  // WolframAlpha: 3.6138049959364381241541773135834895526117637552492102675890e365 => infinity
		NINF                   // WolframAlpha: -6212726302547248943133393518689898810619042382187174496119933651807218473290085190443308693249726931905654524951735633993615148963537079040480876804607587628658687248681228371656448363185155840441275134714249565928844545934754541325368702966654802850582801504985896180577841412681050734479273999502981682266635670408756877361829065182058330847973326377058381557272516399127743698150193905932210497559 => -infinity
	];
	for ( i = 0; i < values.length; i++ ) {
		actual = binomcoef( values[i][0], values[i][1] );
		t.strictEqual( actual, expected[ i ], 'returns expected value' );
	}
	t.end();
});
