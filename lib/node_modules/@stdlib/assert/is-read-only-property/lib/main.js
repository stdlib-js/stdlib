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

var propertyDescriptor = require( '@stdlib/utils/property-descriptor' );


// MAIN //

/**
* Tests if an object's own property is read-only.
*
* @param {*} value - value to test
* @param {*} property - property to test
* @returns {boolean} boolean indicating if an object property is read-only
*
* @example
* var defineProperty = require( '@stdlib/utils/define-property' );
*
* var obj = {
*     'boop': true
* };
*
* defineProperty( obj, 'beep', {
*     'configurable': false,
*     'enumerable': true,
*     'writable': false,
*     'value': true
* });
*
* var bool = isReadOnlyProperty( obj, 'boop' );
* // returns false
*
* bool = isReadOnlyProperty( obj, 'beep' );
* // returns true
*/
function isReadOnlyProperty( value, property ) {
	var desc = propertyDescriptor( value, property );
	return (
		desc !== null &&
		desc.configurable === false &&
		(
			// Data descriptor:
			desc.writable === false ||

			// Accessor descriptor:
			(
				typeof desc.get === 'function' &&
				desc.set === void 0
			)
		)
	);
}


// EXPORTS //

module.exports = isReadOnlyProperty;
