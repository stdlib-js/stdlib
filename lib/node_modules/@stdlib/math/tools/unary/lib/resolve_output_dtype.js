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
	case 'float':
		if (
			xdtype === 'float64' ||
			xdtype === 'float32' ||
			xdtype === 'generic'
		) {
			return xdtype;
		}
		return 'float64';
	default:
		throw new Error( 'invalid option. Unsupported policy for determining an output array data type. Option: `' + policy + '`.' );
	}
}


// EXPORTS //

module.exports = resolve;
