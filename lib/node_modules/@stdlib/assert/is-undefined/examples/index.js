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

var isUndefined = require( './../lib' );

var x;

console.log( isUndefined( x ) );
// => true

console.log( isUndefined( undefined ) );
// => true

console.log( isUndefined( void 0 ) );
// => true

console.log( isUndefined( 'beep' ) );
// => false

console.log( isUndefined( 5 ) );
// => false

console.log( isUndefined( null ) );
// => false

console.log( isUndefined( true ) );
// => false

console.log( isUndefined( {} ) );
// => false

console.log( isUndefined( [] ) );
// => false

console.log( isUndefined( function foo() {} ) );
// => false
