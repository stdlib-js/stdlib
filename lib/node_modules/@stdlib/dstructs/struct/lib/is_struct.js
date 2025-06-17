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

var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isDataView = require( '@stdlib/assert/is-dataview' );
var isObject = require( '@stdlib/assert/is-object' );
var CTOR_NAME = require( './ctor_name.js' );
var PRIVATE_BUFFER = require( './private_buffer.js' );


// MAIN //

/**
* Returns a boolean indicating if a value is a `struct` instance.
*
* @private
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a `struct` instance
*/
function isStruct( value ) {
	// NOTE: the following is a relatively weak test, but we cannot use `instanceof` checks, etc, due to the factory nature of the implementation. Regardless, here, we are just trying to sniff out a `struct` type. If calling as a constructor later fails, we punt the responsibility off to the user to handle what should be an edge case. If, in the future, this check proves insufficient, we can add further "brand" checks...
	return (
		isObject( value ) &&
		value.constructor.name === CTOR_NAME &&
		isPositiveInteger( value.constructor.byteLength ) &&
		isDataView( value[ PRIVATE_BUFFER ] )
	);
}


// EXPORTS //

module.exports = isStruct;
