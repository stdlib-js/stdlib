/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var NINF = require( '@stdlib/constants/float64/ninf' );
var isNonPositiveFinite = require( './../lib' );

console.log( isNonPositiveFinite( -2 ) );
// => true

console.log( isNonPositiveFinite( -2.99 ) );
// => true

console.log( isNonPositiveFinite( NINF ) );
// => false

console.log( isNonPositiveFinite( 'beep' ) );
// => false

console.log( isNonPositiveFinite( null ) );
// => false

console.log( isNonPositiveFinite( 5 ) );
// => false

console.log( isNonPositiveFinite( true ) );
// => false

console.log( isNonPositiveFinite( {} ) );
// => false

console.log( isNonPositiveFinite( function beep() {} ) );
// => false
