/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var isRealDataType = require( './../lib' );

var bool = isRealDataType( 'binary' );
console.log( bool );
// => false

bool = isRealDataType( 'float32' );
console.log( bool );
// => true

bool = isRealDataType( 'float64' );
console.log( bool );
// => true

bool = isRealDataType( 'generic' );
console.log( bool );
// => false

bool = isRealDataType( 'int16' );
console.log( bool );
// => true

bool = isRealDataType( 'int32' );
console.log( bool );
// => true

bool = isRealDataType( 'int8' );
console.log( bool );
// => true

bool = isRealDataType( 'uint16' );
console.log( bool );
// => true

bool = isRealDataType( 'uint32' );
console.log( bool );
// => true

bool = isRealDataType( 'uint8' );
console.log( bool );
// => true

bool = isRealDataType( 'uint8c' );
console.log( bool );
// => true

bool = isRealDataType( '' );
console.log( bool );
// => false

bool = isRealDataType( 'foo' );
console.log( bool );
// => false
