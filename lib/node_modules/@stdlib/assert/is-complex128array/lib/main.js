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

var Complex128Array = require( '@stdlib/array/complex128' );
var constructorName = require( '@stdlib/utils/constructor-name' );


// MAIN //

/**
* Tests if a value is a Complex128Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a Complex128Array
*
* @example
* var bool = isComplex128Array( new Complex128Array( 10 ) );
* // returns true
*
* @example
* var bool = isComplex128Array( [] );
* // returns false
*/
function isComplex128Array( value ) {
	return (
		value instanceof Complex128Array ||
		constructorName( value ) === 'Complex128Array'
	);
}


// EXPORTS //

module.exports = isComplex128Array;
