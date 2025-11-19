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
*/

'use strict';

// MODULES //

var put = require( '@stdlib/array/base/put' );


// VARIABLES //

var MODE = 'throw';


// MAIN //

/**
* Wraps a provided callback function.
*
* @private
* @param {ndarray} arr - input ndarray
* @param {NonNegativeIntegerArray} idx - workspace for storing iteration indices
* @param {NonNegativeIntegerArray} ldims - loop dimensions
* @param {NonNegativeIntegerArray} lidx - current loop iteration indices
* @param {NonNegativeIntegerArray} cdims - core dimensions
* @param {Function} clbk - callback function
* @param {thisArg} thisArg - callback execution context
* @returns {Function} callback wrapper
*/
function wrap( arr, idx, ldims, lidx, cdims, clbk, thisArg ) {
	put( idx, ldims, lidx, MODE );
	return wrapper;

	/**
	* Invokes a callback function.
	*
	* @private
	* @param {*} v - value
	* @param {NonNegativeIntegerArray} cidx - current core iteration indices
	* @returns {*} result
	*/
	function wrapper( v, cidx ) {
		put( idx, cdims, cidx, MODE );
		return clbk.call( thisArg, v, idx.slice(), arr );
	}
}


// EXPORTS //

module.exports = wrap;
