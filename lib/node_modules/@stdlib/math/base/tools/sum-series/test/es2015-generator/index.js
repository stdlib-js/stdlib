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
var log1p = require( '@stdlib/math/base/special/log1p' );
var EPS = require( '@stdlib/constants/float64/eps' );
var sumSeries = require( './../../lib' );


// TESTS //

tape( 'the function calculates the sum of an infinite series provided by a generator', function test( t ) {
	var expected = log1p( 0.5 );
	var actual = sumSeries( generator( 0.5 ) );

	t.ok( abs( actual - expected ) < EPS, 'returned result is within tolerance. actual: ' + actual + '; expected: ' + expected + '.' );
	t.end();

	/* eslint-disable no-restricted-syntax, no-plusplus, require-jsdoc */
	function* generator( x ) {
		var mMult = -x;
		var mProd = -1;
		var k = 0;
		while ( true ) {
			mProd *= mMult;
			yield ( mProd / ++k );
		}
	}
});
