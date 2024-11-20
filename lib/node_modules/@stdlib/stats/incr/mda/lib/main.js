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

var incrmean = require( '@stdlib/stats/incr/mean' );
var signum = require( '@stdlib/math/base/special/signum' );
var kroneckerDelta = require( '@stdlib/math/base/special/kronecker-delta' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes the mean directional accuracy.
*
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmda();
*
* var m = accumulator();
* // returns null
*
* m = accumulator( 2.0, 3.0 );
* // returns 1.0
*
* m = accumulator( -5.0, 4.0 );
* // returns 0.5
*
* m = accumulator();
* // returns 0.5
*/
function incrmda() {
	var mean;
	var FLG;
	var f0;
	var a0;

	mean = incrmean();
	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated mean directional accuracy. If not provided a value, the accumulator function returns the current mean directional accuracy.
	*
	* @private
	* @param {number} [f] - forecast value
	* @param {number} [a] - actual value
	* @returns {(number|null)} mean directional accuracy or null
	*/
	function accumulator( f, a ) {
		var sf;
		var sa;
		if ( arguments.length === 0 ) {
			return mean();
		}
		if ( FLG === void 0 ) {
			FLG = true;
			f0 = f;
			a0 = a;
		}
		sf = signum( f-f0 );
		sa = signum( a-a0 );
		f0 = f;
		a0 = a;
		return mean( kroneckerDelta( sf, sa ) );
	}
}


// EXPORTS //

module.exports = incrmda;
