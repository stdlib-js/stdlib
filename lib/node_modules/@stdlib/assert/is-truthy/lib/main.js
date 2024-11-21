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

// MAIN //

/**
* Tests if a value is truthy.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether a value is truthy
*
* @example
* var bool = isTruthy( true );
* // returns true
*
* @example
* var bool = isTruthy( [] );
* // returns true
*
* @example
* var bool = isTruthy( false );
* // returns false
*
* @example
* var bool = isTruthy( null );
* // returns false
*
* @example
* var bool = isTruthy( '' );
* // returns false
*
* @example
* var bool = isTruthy( 0 );
* // returns false
*
* @example
* var bool = isTruthy( void 0 );
* // returns false
*
* @example
* var bool = isTruthy( NaN );
* // returns false
*/
function isTruthy( value ) {
	return ( value ) ? true : false; // eslint-disable-line no-unneeded-ternary
}


// EXPORTS //

module.exports = isTruthy;
