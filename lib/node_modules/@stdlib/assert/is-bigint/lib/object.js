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
var test = require( './try2valueof.js' );


// MAIN //

/**
* Tests if a value is a BigInt object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating if a value is a BigInt object
*
* @example
* var Object = require( '@stdlib/object/ctor' );
* var BigInt = require( '@stdlib/bigint/ctor' );
*
* var bool = isBigInt( Object( BigInt( '1' ) ) );
* // returns true
*
* @example
* var BigInt = require( '@stdlib/bigint/ctor' );
*
* var bool = isBigInt( BigInt( '1' ) );
* // returns false
*/
function isBigInt( value ) {
	return (
		typeof value === 'object' &&
		nativeClass( value ) === '[object BigInt]' &&
		test( value )
	);
}


// EXPORTS //

module.exports = isBigInt;
