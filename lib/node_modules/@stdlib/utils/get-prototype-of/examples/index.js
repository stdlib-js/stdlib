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

var getPrototypeOf = require( './../lib' );

var proto = getPrototypeOf( 'beep' );
console.log( proto );
// => String.prototype

proto = getPrototypeOf( 5 );
console.log( proto );
// => Number.prototype

proto = getPrototypeOf( true );
console.log( proto );
// => Boolean.prototype

proto = getPrototypeOf( null );
console.log( proto );
// => null

proto = getPrototypeOf( void 0 );
console.log( proto );
// => null

proto = getPrototypeOf( [] );
console.log( proto );
// => Array.prototype

proto = getPrototypeOf( {} );
console.log( proto );
// => {}

proto = getPrototypeOf( function foo() {} );
console.log( proto );
// => Function.prototype
