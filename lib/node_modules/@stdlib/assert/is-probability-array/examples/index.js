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

var Uint8Array = require( '@stdlib/array/uint8' );
var isProbabilityArray = require( './../lib' );

var arr = [ 0.0, 1.0, 0.5 ];
console.log( isProbabilityArray( arr ) );
// => true

arr = [ 0.5, 0.25, 0.25 ];
console.log( isProbabilityArray( arr ) );
// => true

arr = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
console.log( isProbabilityArray( arr ) );
// => true

arr = [ 3.14, -1.0 ];
console.log( isProbabilityArray( arr ) );
// => false

console.log( isProbabilityArray( [] ) );
// => false

console.log( isProbabilityArray( null ) );
// => false
