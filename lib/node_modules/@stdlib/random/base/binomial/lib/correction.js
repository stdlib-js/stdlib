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

var pow = require( '@stdlib/math/base/special/pow' );


// VARIABLES //

var ONE_12 = 1.0 / 12.0;
var ONE_360 = 1.0 / 360.0;
var ONE_1260 = 1.0 / 1260.0;


// MAIN //

/**
* Returns a correction for Stirling's approximation.
*
* @private
* @param {NonNegativeInteger} k - input argument
* @returns {number} correction term
*
* @example
* var c = correction( 0 );
* // returns 0.08106146679532726
*/
function correction( k ) {
	var v;
	switch ( k ) {
	case 0:
		return 0.08106146679532726;
	case 1:
		return 0.04134069595540929;
	case 2:
		return 0.02767792568499834;
	case 3:
		return 0.02079067210376509;
	case 4:
		return 0.01664469118982119;
	case 5:
		return 0.01387612882307075;
	case 6:
		return 0.01189670994589177;
	case 7:
		return 0.01041126526197209;
	case 8:
		return 0.009255462182712733;
	case 9:
		return 0.008330563433362871;
	default:
		k += 1;
		v = pow( k, 2 );
		return (ONE_12 - ((ONE_360 - (ONE_1260/v)) / v)) / k;
	}
}


// EXPORTS //

module.exports = correction;
