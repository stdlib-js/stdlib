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

/* eslint-disable no-restricted-syntax, no-empty-function */

'use strict';

var Int8Array = require( '@stdlib/array/int8' );
var reNativeFunction = require( './../lib' );

var RE_NATIVE_FUNCTION = reNativeFunction();
function isNativeFunction( fcn ) {
	return RE_NATIVE_FUNCTION.test( fcn.toString() );
}

var bool = isNativeFunction( Math.sqrt ); // eslint-disable-line stdlib/no-builtin-math
console.log( bool );
// => true

bool = isNativeFunction( String );
console.log( bool );
// => true

bool = isNativeFunction( Int8Array );
console.log( bool );
// => true

bool = isNativeFunction( Date );
console.log( bool );
// => true

bool = isNativeFunction( function noop() {} );
console.log( bool );
// => false
