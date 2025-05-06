/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

// MAIN //

/**
* Tests if an indexing expression is an empty string.
*
* @private
* @param {string} prop - property name
* @returns {boolean} result
*
* @example
* var out = isEmptyString( '' );
* // returns true
*
* @example
* var out = isEmptyString( '...' );
* // returns false
*
* @example
* var out = isEmptyString( '-2' );
* // returns false
*/
function isEmptyString( prop ) {
	return ( prop === '' );
}


// EXPORTS //

module.exports = isEmptyString;
