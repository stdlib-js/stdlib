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

var propertyDescriptorIn = require( '@stdlib/utils/property-descriptor-in' );


// MAIN //

/**
* Tests if an object's own or inherited property is non-enumerable.
*
* @param {*} value - value to test
* @param {*} property - property to test
* @returns {boolean} boolean indicating if an object property is non-enumerable
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
*
* var obj = {
*     'boop': true
* };
*
* defineProperty( obj, 'beep', {
*     'configurable': true,
*     'enumerable': false,
*     'writable': true,
*     'value': true
* });
*
* var bool = isNonEnumerablePropertyIn( obj, 'boop' );
* // returns false
*
* bool = isNonEnumerablePropertyIn( obj, 'beep' );
* // returns true
*/
function isNonEnumerablePropertyIn( value, property ) {
	var desc = propertyDescriptorIn( value, property );
	return ( desc !== null && desc.enumerable === false );
}


// EXPORTS //

module.exports = isNonEnumerablePropertyIn;
