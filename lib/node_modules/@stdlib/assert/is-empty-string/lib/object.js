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

var isString = require( '@stdlib/assert/is-string' ).isObject;


// MAIN //

/**
* Tests if a value is an empty string object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is an empty string object
*
* @example
* var bool = isEmptyString( '' );
* // returns false
*
* @example
* var bool = isEmptyString( new String( '' ) );
* // returns true
*
* @example
* var bool = isEmptyString( [] );
* // returns false
*/
function isEmptyString( value ) {
	return (
		isString( value ) &&
		value.valueOf() === ''
	);
}


// EXPORTS //

module.exports = isEmptyString;
