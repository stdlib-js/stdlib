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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_62_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright John Maddock 2006.
* Copyright Paul A. Bristow 2007.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/

'use strict';

// MODULES //

var gammaDeltaRatio = require( '@stdlib/math/base/special/gamma-delta-ratio' );
var evalpoly = require( '@stdlib/math/base/tools/evalpoly' );
var sqrt = require( '@stdlib/math/base/special/sqrt' );
var PI = require( '@stdlib/constants/math/float64-pi' );
var polyval1 = require( './polyval_co14.js' );
var polyval2 = require( './polyval_co15.js' );
var polyval3 = require( './polyval_co16.js' );
var polyval4 = require( './polyval_co17.js' );
var polyval5 = require( './polyval_co18.js' );
var polyval6 = require( './polyval_co19.js' );
var polyval7 = require( './polyval_co20.js' );
var polyval8 = require( './polyval_co21.js' );
var polyval9 = require( './polyval_co22.js' );


// VARIABLES //

var c0 = 0.0;

// Workspace for the polynomial coefficients:
var c = [ 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Evaluates Student's t quantiles via a body series expansion. Tail and body series are due to Shaw.
*
* ## References
*
* -   Shaw, William T. 2006. "Sampling Student's T distribution – use of the inverse cumulative distribution function." _Journal of Computational Finance_ 9 (4): 37–73. [www.mth.kcl.ac.uk/~shaww/web\_page/papers/Tdistribution06.pdf](www.mth.kcl.ac.uk/~shaww/web_page/papers/Tdistribution06.pdf).
*
* @private
* @param {PositiveNumber} df - degrees of freedom
* @param {Probability} u - input probability
* @returns {number} function value
*/
function inverseStudentsTBodySeries( df, u ) {
	var idf;
	var v;

	// Body series for small N, start with Eq 56 of Shaw:
	v = gammaDeltaRatio( df/2, 0.5 ) * sqrt( df*PI ) * ( u-0.5 );

	// Figure out what the coefficients are. They depend only on the degrees of freedom (Eq 57 of Shaw):
	idf = 1.0 / df;
	c[ 1 ] = polyval1( idf );
	c[ 2 ] = polyval2( idf );
	c[ 3 ] = polyval3( idf );
	c[ 4 ] = polyval4( idf );
	c[ 5 ] = polyval5( idf );
	c[ 6 ] = polyval6( idf );
	c[ 7 ] = polyval7( idf );
	c[ 8 ] = polyval8( idf );
	c[ 9 ] = polyval9( idf );

	// Result is then an odd polynomial in v (see Eq 56 of Shaw)...
	return c0 + ( v*evalpoly( c, v*v ) );
}


// EXPORTS //

module.exports = inverseStudentsTBodySeries;
