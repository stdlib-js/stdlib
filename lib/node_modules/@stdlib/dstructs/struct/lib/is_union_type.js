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

var isCollection = require( '@stdlib/assert/is-collection' );


// MAIN //

/**
* Returns a boolean indicating whether a field object represents a union type.
*
* @private
* @param {Object} obj - input field object
* @returns {boolean} result
*/
function isUnionType( obj ) {
	return obj.type === 'union' && isCollection( obj.fields );
}


// EXPORTS //

module.exports = isUnionType;
