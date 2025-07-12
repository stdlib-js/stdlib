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
* Sets the value associated with a specified property.
*
* @private
* @param {Object} target - target object
* @param {string} property - property
* @param {*} value - new value
* @param {Object} receiver - the proxy object or an object inheriting from the proxy
* @returns {boolean} boolean indicating whether assignment succeeded
*/
function setValue( target, property, value ) {
	target[ property ] = value;
	return true;
}


// EXPORTS //

module.exports = setValue;
