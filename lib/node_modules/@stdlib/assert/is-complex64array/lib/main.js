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

var Complex64Array = require( '@stdlib/array/complex64' );
var constructorName = require( '@stdlib/utils/constructor-name' );


// MAIN //

/**
* Tests if a value is a Complex64Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Complex64Array
*
* @example
* var bool = isComplex64Array( new Complex64Array( 10 ) );
* // returns true
*
* @example
* var bool = isComplex64Array( [] );
* // returns false
*/
function isComplex64Array( value ) {
	return (
		value instanceof Complex64Array ||
		constructorName( value ) === 'Complex64Array'
	);
}


// EXPORTS //

module.exports = isComplex64Array;
