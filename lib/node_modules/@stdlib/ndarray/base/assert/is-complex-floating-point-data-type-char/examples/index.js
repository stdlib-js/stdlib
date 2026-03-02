/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

var isComplexFloatingPointDataTypeChar = require( './../lib' ); // eslint-disable-line id-length

var bool = isComplexFloatingPointDataTypeChar( 'r' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'z' );
console.log( bool );
// => true

bool = isComplexFloatingPointDataTypeChar( 'c' );
console.log( bool );
// => true

bool = isComplexFloatingPointDataTypeChar( 'd' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'f' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'o' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'k' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'i' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 's' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 't' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'u' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'b' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'a' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( '' );
console.log( bool );
// => false

bool = isComplexFloatingPointDataTypeChar( 'foo' );
console.log( bool );
// => false
