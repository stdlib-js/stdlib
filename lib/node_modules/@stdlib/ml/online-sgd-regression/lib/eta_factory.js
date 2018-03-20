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

/**
* Returns a function to retrieve the current learning rate.
*
* @private
* @param {string} type - string denoting the learning rate to use. Can be `constant`, `pegasos` or `basic`.
* @param {PositiveNumber} eta0 - constant learning rate
* @param {NonNegativeNumber} lambda - regularization parameter
* @throws {Error} first argument must be `basic`, `constant` or `pegasos`
* @returns {Function} getEta function
*/
function closure( type, eta0, lambda ) {
	var iter;
	var ret;

	iter = 1;

	switch ( type ) {
	case 'basic':
		// Default case: 'basic'
		ret = getEtaBasic;
		break;
	case 'constant':
		ret = getEtaConstant;
		break;
	case 'pegasos':
		ret = getEtaPegasos;
		break;
	default:
		throw new Error( 'invalid input value. `learningRate` must be either `basic`, `constant` or `pegasos`. Value: `' + type + '`' );
	}
	return ret;

	/**
	* Returns the basic learning rate.
	*
	* @private
	* @returns {number} learning rate
	*/
	function getEtaBasic() {
		var eta = 1000.0 / ( iter + 1000.0 );
		iter += 1;
		return eta;
	}

	/**
	* Returns the constant learning rate.
	*
	* @private
	* @returns {number} learning rate
	*/
	function getEtaConstant() {
		iter += 1;
		return eta0;
	}

	/**
	* Returns the Pegasos learning rate.
	*
	* @private
	* @returns {number} learning rate
	*/
	function getEtaPegasos() {
		var eta = 1.0 / ( lambda * iter );
		iter += 1;
		return eta;
	}
}


// EXPORTS //

module.exports = closure;
