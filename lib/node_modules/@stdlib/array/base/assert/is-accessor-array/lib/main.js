/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var TYPE = 'function';


// MAIN //

/**
* Tests if an array-like object supports the accessor (get/set) protocol.
*
* @param {Object} value - value to test
* @returns {boolean} boolean indicating whether a value is an accessor array
*
* @example
* var Complex128Array = require( '@stdlib/array/complex128' );
*
* var bool = isAccessorArray( new Complex128Array( 10 ) );
* // returns true
*
* @example
* var bool = isAccessorArray( [] );
* // returns false
*/
function isAccessorArray( value ) {
	return ( typeof value.get === TYPE && typeof value.set === TYPE ); // eslint-disable-line valid-typeof
}


// EXPORTS //

module.exports = isAccessorArray;
