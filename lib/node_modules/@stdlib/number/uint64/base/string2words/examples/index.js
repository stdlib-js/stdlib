/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

var string2words = require( './../lib' );

var w = string2words( '1234', 10 );
console.log( w );
// => [ 0, 1234 ]

w = string2words( 'abcd', 16 );
console.log( w );
// => [ 0, 43981 ]

w = string2words( '18446744073709551615', 10 );
console.log( w );
// => [ 4294967295, 4294967295 ]

w = string2words( '3w5e11264sgsf', 36 );
console.log( w );
// => [ 4294967295, 4294967295 ]
