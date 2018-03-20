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
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_61_0/boost/math/special_functions/detail/t_distribution_inv.hpp}. The implementation has been modified for JavaScript.
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
var pow = require( '@stdlib/math/base/special/pow' );
var PI = require( '@stdlib/constants/math/float64-pi' );


// VARIABLES //

// Array for the coefficients d(k), these depend only on the number of degrees of freedom df, so at least in theory we could tabulate these for fixed df, see p15 of Shaw:
var d = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]; // WARNING: not thread safe


// MAIN //

/**
* Evaluates Student's t quantiles via a tail series expansion. Tail and body series are due to Shaw.
*
* ## References
*
* -   Shaw, William T. 2006. "Sampling Student's T distribution – use of the inverse cumulative distribution function." _Journal of Computational Finance_ 9 (4): 37–73. [www.mth.kcl.ac.uk/~shaww/web\_page/papers/Tdistribution06.pdf](www.mth.kcl.ac.uk/~shaww/web_page/papers/Tdistribution06.pdf).
*
* @private
* @param {number} df - degrees of freedom
* @param {number} v - function value
* @returns {number} tail value
*/
function inverseStudentsTTailSeries( df, v ) { // eslint-disable-line id-length
	var result;
	var power;
	var div;
	var np2;
	var np4;
	var np6;
	var rn;
	var w;

	// Tail series expansion, see section 6 of Shaw's paper. `w` is calculated using Eq 60:
	w = gammaDeltaRatio( df/2.0, 0.5 ) * sqrt( df*PI ) * v;

	// Define some variables:
	np2 = df + 2.0;
	np4 = df + 4.0;
	np6 = df + 6.0;

	d[ 0 ] = 1.0;
	d[ 1 ] = -(df+1.0) / (2.0*np2);
	np2 *= (df + 2.0);
	d[ 2 ] = -df * (df+1.0) * (df+3.0) / (8.0*np2*np4);
	np2 *= df + 2.0;
	d[ 3 ] = -df * (df+1.0) * (df+5.0) * (((3.0*df) + 7.0) * df - 2.0) / (48.0*np2*np4*np6); // eslint-disable-line max-len, no-mixed-operators
	np2 *= (df + 2.0);
	np4 *= (df + 4.0);
	d[ 4 ] = -df * (df+1.0) * (df+7.0) * ( (((((15.0*df) + 154.0) * df + 465.0) * df + 286.0) * df - 336.0) * df + 64.0) / (384.0*np2*np4*np6*(df+8.0)); // eslint-disable-line max-len, no-mixed-operators
	np2 *= (df + 2.0);
	d[ 5 ] = -df * (df+1.0) * (df+3.0) * (df+9.0) * (((((((35.0 * df + 452.0) * df+1573.0) * df + 600.0) * df - 2020.0) * df) + 928.0) * df - 128.0) / (1280.0*np2*np4*np6*(df+8.0) * (df+10.0)); // eslint-disable-line max-len, no-mixed-operators
	np2 *= (df + 2.0);
	np4 *= (df + 4.0);
	np6 *= (df + 6.0);
	d[ 6 ] = -df * (df+1.0) * (df+11.0) * ((((((((((((945.0*df) + 31506.0) * df + 425858.0) * df + 2980236.0) * df + 11266745.0) * df + 20675018.0) * df + 7747124.0) * df - 22574632.0) * df - 8565600.0) * df + 18108416.0) * df - 7099392.0) * df + 884736.0) / (46080.0*np2*np4*np6*(df+8.0) * (df+10.0) * (df+12.0)); // eslint-disable-line max-len, no-mixed-operators

	// Now bring everything together to provide the result this is Eq 62 of Shaw:
	rn = sqrt( df );
	div = pow( rn*w, 1.0/df );
	power = div * div;
	result = evalpoly( d, power );
	result *= rn;
	result /= div;
	return -result;
}


// EXPORTS //

module.exports = inverseStudentsTTailSeries;
