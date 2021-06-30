/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

var nativeClass = require( '@stdlib/utils/native-class' );


// VARIABLES //

var hasBigInt64Array = ( typeof BigInt64Array === 'function' );// eslint-disable-line stdlib/require-globals


// MAIN //

/**
* Tests if a value is a BigInt64Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether the value is a BigInt64Array
*
* @example
* var bool = isBigInt64Array( new BigInt64Array( 2 ) );
* // returns true
*
* @example
* var bool = isBigInt64Array( [] );
* // returns false
*
* @example
* var bool = isBigInt64Array( 123 );
* // returns false
*/
function isBigInt64Array( value ) {
	return (
		( hasBigInt64Array && value instanceof BigInt64Array ) || // eslint-disable-line stdlib/require-globals, no-undef
		nativeClass( value ) === '[object BigInt64Array]'
	);
}


// EXPORTS //

module.exports = isBigInt64Array;
