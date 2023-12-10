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
var pKolmogorov1 = require( './../lib/smirnov.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pKolmogorov1, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function correctly evaluates the CDF of D_n^+ and D_n^-', function test( t ) {
	var expected;
	var actual;
	var delta;
	var tol;
	var d;
	var n;
	var i;

	d = [ 0.3, -0.1, 1.5, 0.5, 0.1, 0.1 ];
	n = [ 10.0, 10.0, 10.0, 40.0, 4.0, 20.0 ];
	expected = [
		0.8645364,
		0.0,
		1.0,
		1.0,
		0.1331000,
		0.370929
	];
	for ( i = 0; i < expected.length; i++ ) {
		actual = pKolmogorov1( d[ i ], n[ i ] ).toFixed( 7 );
		delta = abs( actual - expected[ i ] );
		tol = 1.0 * EPS * abs( expected[ i ] );
		t.ok( delta <= tol, 'within tolerance. Actual: '+actual+'. E: '+expected[ i ]+' Δ: '+delta+'. tol: '+tol );
	}
	t.end();
});
