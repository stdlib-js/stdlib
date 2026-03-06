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

/* eslint-disable no-restricted-syntax, no-new-wrappers, no-empty-function */

'use strict';

var Number = require( '@stdlib/number/ctor' );
var isPrimitiveArray = require( './../lib' );

console.log( isPrimitiveArray( [ '3', 2, null ] ) );
// => true

console.log( isPrimitiveArray( [ void 0, true ] ) );
// => true

console.log( isPrimitiveArray( [ new String( 'abc' ), false ] ) );
// => false

console.log( isPrimitiveArray( [ new Number( 2 ), null ] ) );
// => false

console.log( isPrimitiveArray( [ function noop() {}, null ] ) );
// => false
