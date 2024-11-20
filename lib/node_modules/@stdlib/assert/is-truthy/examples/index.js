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

/* eslint-disable no-empty-function, no-restricted-syntax */

'use strict';

var isTruthy = require( './../lib' );

console.log( isTruthy( true ) );
// => true

console.log( isTruthy( 'beep' ) );
// => true

console.log( isTruthy( 5 ) );
// => true

console.log( isTruthy( [] ) );
// => true

console.log( isTruthy( {} ) );
// => true

console.log( isTruthy( function foo() {} ) );
// => true

console.log( isTruthy( false ) );
// => false

console.log( isTruthy( 0 ) );
// => false

console.log( isTruthy( NaN ) );
// => false

console.log( isTruthy( '' ) );
// => false

console.log( isTruthy( void 0 ) );
// => false

console.log( isTruthy( null ) );
// => false
