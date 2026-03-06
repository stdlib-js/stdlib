/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var isFloatingPointDataType = require( './../lib' );

var bool = isFloatingPointDataType( 'float32' );
console.log( bool );
// => true

bool = isFloatingPointDataType( 'float64' );
console.log( bool );
// => true

bool = isFloatingPointDataType( 'generic' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'int16' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'int32' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'int8' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'uint16' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'uint32' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'uint8' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'uint8c' );
console.log( bool );
// => false

bool = isFloatingPointDataType( '' );
console.log( bool );
// => false

bool = isFloatingPointDataType( 'foo' );
console.log( bool );
// => false
