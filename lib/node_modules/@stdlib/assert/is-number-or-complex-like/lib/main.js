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

var isPrimitive = require( './primitive.js' );
var isObject = require( './object.js' );


// MAIN //

/**
* Tests if a value is a number or complex number-like object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is a number or complex number-like object
*
* @example
* var bool = isNumberOrComplexLike( 3.14 );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike( new Number( 3.14 ) );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike( NaN );
* // returns true
*
* @example
* var bool = isNumberOrComplexLike( null );
* // returns false
*
* @example
* var bool = isNumberOrComplexLike({
*     're': 3.0,
*     'im': 5.0
* });
* // returns true
*/
function isNumberOrComplexLike( value ) {
	return ( isPrimitive( value ) || isObject( value ) );
}


// EXPORTS //

module.exports = isNumberOrComplexLike;
