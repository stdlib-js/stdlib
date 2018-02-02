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

var abs = require( '@stdlib/math/base/special/abs' );
var ln = require( '@stdlib/math/base/special/ln' );
var lambdaeta = require( './lambdaeta.js' );
var rateval = require( './rational_ak0bk0.js' );


// MAIN //

/**
* Evaluates the `eps1` function.
*
* @private
* @param {number} eta - eta value
* @returns {number} function value
*/
function eps1( eta ) {
	var la;
	if ( abs( eta ) < 1.0 ) {
		return rateval( eta );
	}
	la = lambdaeta( eta );
	return ln( eta / ( la - 1.0 ) ) / eta;
}


// EXPORTS //

module.exports = eps1;
