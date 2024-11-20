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

'use strict';

var reDecimalNumber = require( './../lib' );

var RE_DECIMAL_NUMBER = reDecimalNumber();

console.log( RE_DECIMAL_NUMBER.test( '1.234' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( 'beep 1.234' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '1.234 boop' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( 'foo 1.234.' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( 'foo 1.234.567.890' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '1.234!' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '0.234' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '.234' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( 'beep .234' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '.234 boop' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '1.0' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '-1.0' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '+1.0' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '0.0' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '.0' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '1.234:' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '1.234%' ) );
// => true

console.log( RE_DECIMAL_NUMBER.test( '0' ) );
// => false

console.log( RE_DECIMAL_NUMBER.test( 'beep 0' ) );
// => false

console.log( RE_DECIMAL_NUMBER.test( '2:3' ) );
// => false

console.log( RE_DECIMAL_NUMBER.test( 'beep' ) );
// => false

console.log( RE_DECIMAL_NUMBER.test( '' ) );
// => false
