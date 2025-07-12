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

var isBooleanIndexDataType = require( './../lib' );

var bool = isBooleanIndexDataType( 'bool' );
console.log( bool );
// => true

bool = isBooleanIndexDataType( 'float32' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'float64' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'generic' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'int16' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'int32' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'int8' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'uint16' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'uint32' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'uint8' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'uint8c' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( '' );
console.log( bool );
// => false

bool = isBooleanIndexDataType( 'foo' );
console.log( bool );
// => false
