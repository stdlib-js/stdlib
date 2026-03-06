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

/* eslint-disable no-undefined, no-restricted-syntax, no-empty-function */

'use strict';

var isUndefinedOrNull = require( './../lib' );

var x;

console.log( isUndefinedOrNull( x ) );
// => true

console.log( isUndefinedOrNull( undefined ) );
// => true

console.log( isUndefinedOrNull( void 0 ) );
// => true

console.log( isUndefinedOrNull( null ) );
// => true

console.log( isUndefinedOrNull( 'beep' ) );
// => false

console.log( isUndefinedOrNull( 5 ) );
// => false

console.log( isUndefinedOrNull( true ) );
// => false

console.log( isUndefinedOrNull( {} ) );
// => false

console.log( isUndefinedOrNull( [] ) );
// => false

console.log( isUndefinedOrNull( function foo() {} ) );
// => false
