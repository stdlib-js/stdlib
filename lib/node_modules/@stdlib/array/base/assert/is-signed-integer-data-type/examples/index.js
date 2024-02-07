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

var isSignedIntegerDataType = require( './../lib' );

var bool = isSignedIntegerDataType( 'float32' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'float64' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'generic' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'int16' );
console.log( bool );
// => true

bool = isSignedIntegerDataType( 'int32' );
console.log( bool );
// => true

bool = isSignedIntegerDataType( 'int8' );
console.log( bool );
// => true

bool = isSignedIntegerDataType( 'uint16' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'uint32' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'uint8' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'uint8c' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( '' );
console.log( bool );
// => false

bool = isSignedIntegerDataType( 'foo' );
console.log( bool );
// => false
