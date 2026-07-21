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
*
*
* ## Notice
*
* The original C code and copyright notice are from the [Cephes Mathematical Library]{@link https://www.netlib.org/cephes/}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright Stephen L. Moshier 1984, 1987, 1992, 2000.
*
* Use, modification and distribution are subject to the
* Cephes Mathematical Library License. (See accompanying file
* LICENSE or copy at https://smath.com/en-US/view/CephesMathLibrary/license)
* ```
*/

'use strict';

// MODULES //

var round = require( '@stdlib/math/base/special/round' );
var abs = require( '@stdlib/math/base/special/abs' );
var config = require( './config.json' );


// VARIABLES //

var EPS = config.EPS;


// MAIN //

/**
* Tests if a finite double-precision floating-point number is a "close enough" nonpositive integer.
*
* @private
* @param {number} x - input value
* @returns {boolean} boolean indicating whether the value is a "close enough" nonpositive integer
*/
function isNonPositiveInteger( x ) {
	var diff;
	var ix;

	ix = round( x );
	diff = abs( x - ix );
	return ( ( ix <= 0.0 ) && ( diff < EPS ) );
}


// EXPORTS //

module.exports = isNonPositiveInteger;
