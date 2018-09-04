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

// VARIABLES //

var propertyDescriptors = Object.getOwnPropertyDescriptors;


// MAIN //

/**
* Returns an object's own property descriptors.
*
* ## Notes
*
* -   In contrast to the built-in `Object.getOwnPropertyDescriptors()`, this function returns an empty object if provided `undefined` or `null`, rather than throwing an error.
*
* @private
* @param {*} value - input object
* @returns {Object} property descriptors
*
* @example
* var obj = {
*     'beep': 'boop',
*     'foo': 3.14
* };
*
* var desc = getOwnPropertyDescriptors( obj );
* // returns {...}
*/
function getOwnPropertyDescriptors( value ) {
	return propertyDescriptors( Object( value ) );
}


// EXPORTS //

module.exports = getOwnPropertyDescriptors;
