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

var isNumericDataType = require( './../lib' );

var bool = isNumericDataType( 'float32' );
console.log( bool );
// => true

bool = isNumericDataType( 'float64' );
console.log( bool );
// => true

bool = isNumericDataType( 'generic' );
console.log( bool );
// => false

bool = isNumericDataType( 'int16' );
console.log( bool );
// => true

bool = isNumericDataType( 'int32' );
console.log( bool );
// => true

bool = isNumericDataType( 'int8' );
console.log( bool );
// => true

bool = isNumericDataType( 'uint16' );
console.log( bool );
// => true

bool = isNumericDataType( 'uint32' );
console.log( bool );
// => true

bool = isNumericDataType( 'uint8' );
console.log( bool );
// => true

bool = isNumericDataType( 'uint8c' );
console.log( bool );
// => true

bool = isNumericDataType( '' );
console.log( bool );
// => false

bool = isNumericDataType( 'foo' );
console.log( bool );
// => false
