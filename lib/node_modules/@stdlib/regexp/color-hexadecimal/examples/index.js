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

var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var reColorHexadecimal = require( './../lib' );

function isHex( value, mode ) {
	if ( !isString( value ) ) {
		return false;
	}
	if ( mode === 'shorthand' ) {
		return reColorHexadecimal.REGEXP_SHORTHAND.test( value );
	}
	if ( mode === 'either' ) {
		return reColorHexadecimal.REGEXP_EITHER.test( value );
	}
	return reColorHexadecimal.REGEXP.test( value );
}

console.log( isHex( 'ffffff', 'full' ) );
// => true

console.log( isHex( '474747', 'either' ) );
// => true

console.log( isHex( '0A5BBE', 'shorthand' ) );
// => false

console.log( isHex( '000', 'full' ) );
// => false

console.log( isHex( '000', 'either' ) );
// => true

console.log( isHex( 'F7b', 'shorthand' ) );
// => true

console.log( isHex( 'abcd', 'either' ) );
// => false

console.log( isHex( '', 'either' ) );
// => false

console.log( isHex( null, 'either' ) );
// => false
