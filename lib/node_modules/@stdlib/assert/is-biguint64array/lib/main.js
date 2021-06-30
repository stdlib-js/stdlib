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

var hasBigUint64Array = ( typeof BigUint64Array === 'function' );// eslint-disable-line stdlib/require-globals


// MAIN //

/**
* Tests if a value is a BigUint64Array.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether the value is a BigUint64Array
*
* @example
* var value = new BigUint64Array( 2 );
* var bool = isBigUint64Array( value );
* // returns true
*
* @example
* var bool = isBigUint64Array( [] );
* // returns false
*
* @example
* var bool = isBigUint64Array( 123 );
* // returns false
*/
function isBigUint64Array( value ) {
	return (
		( hasBigUint64Array && value instanceof BigUint64Array ) || // eslint-disable-line stdlib/require-globals, no-undef
		nativeClass( value ) === '[object BigUint64Array]'
	);
}


// EXPORTS //

module.exports = isBigUint64Array;
