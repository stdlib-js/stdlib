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

/*
* Note: we wrap `toString` to allow loading this file in non-ES2015 environments.
*/

// MAIN //

/**
* Attempts to serialize a value as a symbol.
*
* @private
* @param {*} value - value to serialize
* @returns {string} serialized value
*/
function toStr( value ) {
	// Non-generic:
	return Symbol.prototype.toString.call( value );
}


// EXPORTS //

module.exports = toStr;
