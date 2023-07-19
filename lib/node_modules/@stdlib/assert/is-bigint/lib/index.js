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

/**
* Test if a value is a BigInt.
*
* @module @stdlib/assert/is-bigint
*
* @example
* var BigInt = require( '@stdlib/bigint/ctor' );
* var isBigInt = require( '@stdlib/assert/is-bigint' );
*
* var bool = isBigInt( BigInt( '1' ) );
* // returns true
*
* bool = isBigInt( Object( BigInt( '1' ) ) );
* // returns true
*
* bool = isBigInt( {} );
* // returns false
*
* @example
* var isBigInt = require( '@stdlib/assert/is-bigint' ).isPrimitive;
*
* var bool = isBigInt( BigInt( '1' ) );
* // returns true
*
* bool = isBigInt( Object( BigInt( '1' ) ) );
* // returns false
*
* bool = isBigInt( {} );
* // returns false
*
* @example
* var isBigIntObject = require( '@stdlib/assert/is-bigint' ).isObject;
*
* var bool = isBigIntObject( BigInt( '1' ) );
* // returns false
*
* bool = isBigIntObject( Object( BigInt( '1' ) ) );
* // returns true
*
* bool = isBigIntObject( {} );
* // returns false
*/

// MODULES //

var hasBigInts = require( '@stdlib/assert/has-bigint-support' );
var main = require( './main.js' );
var polyfill = require( './polyfill.js' );


// MAIN //

var isBigInt;
if ( hasBigInts() ) {
	isBigInt = main;
} else {
	isBigInt = polyfill;
}


// EXPORTS //

module.exports = isBigInt;
