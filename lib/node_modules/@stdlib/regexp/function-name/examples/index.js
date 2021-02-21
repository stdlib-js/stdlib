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

/* eslint-disable no-restricted-syntax, func-names, no-empty-function */

'use strict';

var Int8Array = require( '@stdlib/array/int8' );
var reFunctionName = require( './../lib' );
var RE_FUNCTION_NAME = reFunctionName();

function fname( fcn ) {
	return RE_FUNCTION_NAME.exec( fcn.toString() )[ 1 ];
}

console.log( fname( Math.sqrt ) ); // eslint-disable-line stdlib/no-builtin-math
// => 'sqrt'

console.log( fname( Int8Array ) );
// => 'Int8Array'

console.log( fname( Object.prototype.toString ) );
// => 'toString'

console.log( fname( function () {} ) );
// => ''
