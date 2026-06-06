/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var Uint64 = require( '@stdlib/number/uint64/ctor' );
var constructorName = require( '@stdlib/utils/constructor-name' );


// MAIN //

/**
* Tests if a value is an unsigned 64-bit integer.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is an unsigned 64-bit integer
*
* @example
* var Uint64 = require( '@stdlib/number/uint64/ctor' );
*
* var x = new Uint64( 1234 );
*
* var bool = isUint64( x );
* // returns true
*/
function isUint64( value ) {
	return (
		value instanceof Uint64 ||
		constructorName( value ) === 'Uint64'
	);
}


// EXPORTS //

module.exports = isUint64;
