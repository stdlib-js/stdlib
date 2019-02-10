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

var objectKeys = require( '@stdlib/utils/keys' );
var isPlainObject = require( '@stdlib/assert/is-plain-object' );
var hasSymbolSupport = require( '@stdlib/assert/has-symbol-support' );


// VARIABLES //

var FLG = hasSymbolSupport();


// MAIN //

/**
* Tests if a value is an empty object.
*
* @param {*} value - value to test
* @returns {boolean} boolean indicating whether value is an empty object
*
* @example
* var bool = isEmptyObject( {} );
* // returns true
*
* @example
* var bool = isEmptyObject( { 'beep': 'boop' } );
* // returns false
*
* @example
* var bool = isEmptyObject( [] );
* // returns false
*/
function isEmptyObject( value ) {
	if ( !isPlainObject( value ) ) {
		return false;
	}
	if ( objectKeys( value ).length > 0 ) {
		return false;
	}
	if ( FLG && Object.getOwnPropertySymbols( value ).length > 0 ) {
		return false;
	}
	return true;
}


// EXPORTS //

module.exports = isEmptyObject;
