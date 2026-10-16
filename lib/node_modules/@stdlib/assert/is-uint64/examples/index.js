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

var Uint64 = require( '@stdlib/number/uint64/ctor' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var isUint64 = require( './../lib' );

console.log( isUint64( new Uint64( 1234 ) ) );
// => true

console.log( isUint64( new Complex128( 3.0, 1.0 ) ) );
// => false

console.log( isUint64( {} ) );
// => false

console.log( isUint64( null ) );
// => false
