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
var EPS = require( '@stdlib/constants/float64/eps' );
var pKolmogorov = require( './../lib/marsaglia.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pKolmogorov, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function correctly evaluates the CDF of D_n', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var d;
	var n;
	var i;

	d = [ 0.3, -0.1, 1.5, 0.5, 0.1, 0.1, 0.05, 0.05, 0.8, 0.274 ]; // eslint-disable-line array-element-newline
	n = [ 10.0, 10.0, 10.0, 20.0, 10.0, 20.0, 300.0, 80.0, 1.0, 10.0 ]; // eslint-disable-line array-element-newline
	expected = [
		0.7294644, 0.0, 1.0, 0.9999621, 0.0003629,
		0.0237449, 0.5725584, 0.0175789, 0.6, 0.6284796
	];
	for ( i = 0; i < expected.length; i++ ) {
		actual = pKolmogorov( d[ i ], n[ i ] ).toFixed( 7 );
		delta = abs( actual - expected[ i ] );
		tol = 1.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. Actual: '+actual+'. E: '+expected[ i ]+' Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});

tape( 'the function correctly evaluates the CDF of D_n when overflow occurs', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;

	expected = 0.9869879;
	actual = pKolmogorov( 0.05, 1000 ).toFixed( 7 );
	delta = abs( actual - expected );
	tol = 1.0 * EPS * abs( expected );
	t.ok( delta <= tol, 'within tolerance. Actual: '+actual+'. E: '+expected+' Δ: '+delta+'. tol: '+tol );

	t.end();
});
