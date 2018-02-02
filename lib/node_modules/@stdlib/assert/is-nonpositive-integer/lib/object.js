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

var isInteger = require( '@stdlib/assert/is-integer' ).isObject;


// MAIN //

/**
* Tests if a value is a number object having a nonpositive integer value.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a number object having a nonpositive integer value
*
* @example
* var bool = isNonPositiveInteger( -3.0 );
* // returns false
*
* @example
* var bool = isNonPositiveInteger( new Number( -3.0 ) );
* // returns true
*/
function isNonPositiveInteger( value ) {
	return (
		isInteger( value ) &&
		value.valueOf() <= 0
	);
}


// EXPORTS //

module.exports = isNonPositiveInteger;
