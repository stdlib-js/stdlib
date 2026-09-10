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

var Int64Array = require( '@stdlib/array/int64' );
var constructorName = require( '@stdlib/utils/constructor-name' );


// MAIN //

/**
* Tests if a value is an Int64Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is an Int64Array
*
* @example
* var Int64Array = require( '@stdlib/array/int64' );
*
* var bool = isInt64Array( new Int64Array( 10 ) );
* // returns true
*
* @example
* var bool = isInt64Array( [] );
* // returns false
*/
function isInt64Array( value ) {
	return (
		value instanceof Int64Array ||
		constructorName( value ) === 'Int64Array'
	);
}


// EXPORTS //

module.exports = isInt64Array;
