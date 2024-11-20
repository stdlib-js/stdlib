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

/* eslint-disable no-new-wrappers, object-curly-newline */

'use strict';

var Number = require( '@stdlib/number/ctor' );
var isObjectArray = require( './../lib' );

console.log( isObjectArray( [ { 'beep': 'boop' }, {}, {} ] ) );
// => true

console.log( isObjectArray( [ new Date(), new Number( 3 ) ] ) );
// => true

console.log( isObjectArray( [ {}, new String( 'abc' ), {} ] ) );
// => true

console.log( isObjectArray( [ [], {} ] ) );
// => false

console.log( isObjectArray( [ 'a', 'b' ] ) );
// => false

console.log( isObjectArray( [] ) );
// => false
