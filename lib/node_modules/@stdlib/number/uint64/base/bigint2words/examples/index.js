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

var BigInt = require( '@stdlib/bigint/ctor' );
var bigint2words = require( './../lib' );

var w = bigint2words( BigInt( 1234 ) );
console.log( w );
// => [ 0, 1234 ]

w = bigint2words( BigInt( 0x100000000 ) );
console.log( w );
// => [ 1, 0 ]

w = bigint2words( BigInt( '18446744073709551615' ) );
console.log( w );
// => [ 4294967295, 4294967295 ]
