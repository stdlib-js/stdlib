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

var isTypedArray = require( '@stdlib/assert/is-typed-array' );
var isNumberArray = require( '@stdlib/assert/is-number-array' ).primitives;
var isBuffer = require( '@stdlib/assert/is-buffer' );


// MAIN //

/**
* Tests if a value is a numeric array.
*
* @param {*} v - value to test
* @returns {boolean} boolean indicating if a value is a numeric array
*
* @example
* var bool = isNumericArray( new Int8Array( 10 ) );
* // returns true
*
* bool = isNumericArray( [ 1, 2, 3 ] );
* // returns true
*
* bool = isNumericArray( [ '1', '2', '3' ] );
* // returns false
*/
function isNumericArray( v ) {
	return (
		!isBuffer( v ) &&
		(isTypedArray( v ) || isNumberArray( v ))
	);
}


// EXPORTS //

module.exports = isNumericArray;
