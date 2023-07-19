/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var format = require( '@stdlib/string/format' );


// MAIN //

/**
* Resolves an output array data type.
*
* @private
* @param {string} xdtype - input array data type
* @param {string} policy - policy determining an output array data type
* @throws {Error} unsupported policy
* @returns {string} output array data type
*/
function resolve( xdtype, policy ) {
	switch ( policy ) {
	case 'same':
		return xdtype;
	case 'floating-point':
		// TODO: we may want to delegate checking for a floating-point dtype to a utility function/package (e.g., isFloatDtype), in order to centralize logic for testing whether a dtype is "floating-point". Otherwise, this will be yet another place to update logic should we ever add, e.g., a `float128` or `float16` dtype.
		if (
			xdtype === 'float64' ||
			xdtype === 'float32' ||
			xdtype === 'generic' ||
			xdtype === 'complex128' ||
			xdtype === 'complex64'
		) {
			return xdtype;
		}
		return 'float64'; // TODO: constants/math/default-real-floating-point-dtype?
	case 'real floating-point':
		if (
			xdtype === 'float64' ||
			xdtype === 'float32' ||
			xdtype === 'generic'
		) {
			return xdtype;
		}
		return 'float64';
	case 'complex floating-point':
		if (
			xdtype === 'complex128' ||
			xdtype === 'complex64'
		) {
			return xdtype;
		}
		return 'complex128'; // TODO: constants/math/default-complex-floating-point-dtype?
	default:
		throw new Error( format( 'invalid option. Unsupported policy for determining an output array data type. Option: `%s`.', policy ) );
	}
}


// EXPORTS //

module.exports = resolve;
