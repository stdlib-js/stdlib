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

var typemax = require( './../lib' );

var m = typemax( 'float64' );
console.log( m );
// => Infinity

m = typemax( 'float32' );
console.log( m );
// => Infinity

m = typemax( 'float16' );
console.log( m );
// => Infinity

m = typemax( 'int32' );
console.log( m );
// => 2147483647

m = typemax( 'uint32' );
console.log( m );
// => 4294967295

m = typemax( 'int16' );
console.log( m );
// => 32767

m = typemax( 'uint16' );
console.log( m );
// => 65535

m = typemax( 'int8' );
console.log( m );
// => 127

m = typemax( 'uint8' );
console.log( m );
// => 255

m = typemax( 'uint8c' );
console.log( m );
// => 255
