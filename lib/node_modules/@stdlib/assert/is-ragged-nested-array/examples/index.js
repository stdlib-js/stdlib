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

var isRaggedNestedArray = require( './../lib' );

console.log( isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5 ] ] ) );
// => true

console.log( isRaggedNestedArray( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ] ) );
// => false

console.log( isRaggedNestedArray( 'beep' ) );
// => false

console.log( isRaggedNestedArray( null ) );
// => false

console.log( isRaggedNestedArray( void 0 ) );
// => false

console.log( isRaggedNestedArray( 5 ) );
// => false

console.log( isRaggedNestedArray( true ) );
// => false

console.log( isRaggedNestedArray( {} ) );
// => false

console.log( isRaggedNestedArray( function noop() {} ) );
// => false
