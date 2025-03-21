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

var typemin = require( './../lib' );

var m = typemin( 'float64' );
console.log( m );
// => -infinity

m = typemin( 'float32' );
console.log( m );
// => -infinity

m = typemin( 'float16' );
console.log( m );
// => -infinity

m = typemin( 'int32' );
console.log( m );
// => -2147483648

m = typemin( 'uint32' );
console.log( m );
// => 0

m = typemin( 'int16' );
console.log( m );
// => -32768

m = typemin( 'uint16' );
console.log( m );
// => 0

m = typemin( 'int8' );
console.log( m );
// => -128

m = typemin( 'uint8' );
console.log( m );
// => 0

m = typemin( 'uint8c' );
console.log( m );
// => 0
