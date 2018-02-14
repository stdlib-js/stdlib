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

var Complex64 = require( '@stdlib/complex/float32' );
var constructorName = require( '@stdlib/utils/constructor-name' );


// MAIN //

/**
* Tests if a value is a 64-bit complex number.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a 64-bit complex number
*
* @example
* var Complex64 = require( '@stdlib/complex/float32' );
*
* var x = new Complex64( 4.0, 2.0 );
*
* var bool = isComplex64( x );
* // returns true
*/
function isComplex64( value ) {
	return (
		value instanceof Complex64 ||
		constructorName( value ) === 'Complex64'
	);
}


// EXPORTS //

module.exports = isComplex64;
