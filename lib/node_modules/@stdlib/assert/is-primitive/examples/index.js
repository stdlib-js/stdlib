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

/* eslint-disable no-restricted-syntax, no-new-wrappers, no-empty-function, no-array-constructor */

'use strict';

var Boolean = require( '@stdlib/boolean/ctor' );
var Object = require( '@stdlib/object/ctor' );
var isPrimitive = require( './../lib' );

console.log( isPrimitive( false ) );
// => true

console.log( isPrimitive( 0 ) );
// => true

console.log( isPrimitive( '' ) );
// => true

console.log( isPrimitive( null ) );
// => true

console.log( isPrimitive( void 0 ) );
// => true

console.log( isPrimitive( [] ) );
// => false

console.log( isPrimitive( {} ) );
// => false

console.log( isPrimitive( function noop() {} ) );
// => false

console.log( isPrimitive( new Boolean() ) );
// => false

console.log( isPrimitive( new String() ) );
// => false

console.log( isPrimitive( new Array() ) );
// => false

console.log( isPrimitive( new Object() ) );
// => false
