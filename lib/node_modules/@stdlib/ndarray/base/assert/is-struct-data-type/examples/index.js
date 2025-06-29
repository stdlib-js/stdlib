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

var structFactory = require( '@stdlib/dstructs/struct' );
var isStructDataType = require( './../lib' );

var Struct = structFactory([
	{
		'name': 'foo',
		'type': 'float64'
	}
]);

var bool = isStructDataType( Struct );
console.log( bool );
// => true

bool = isStructDataType( 'binary' );
console.log( bool );
// => false

bool = isStructDataType( 'float32' );
console.log( bool );
// => false

bool = isStructDataType( 'float64' );
console.log( bool );
// => false

bool = isStructDataType( 'generic' );
console.log( bool );
// => false

bool = isStructDataType( 'int16' );
console.log( bool );
// => false

bool = isStructDataType( 'int32' );
console.log( bool );
// => false

bool = isStructDataType( 'int8' );
console.log( bool );
// => false

bool = isStructDataType( 'uint16' );
console.log( bool );
// => false

bool = isStructDataType( 'uint32' );
console.log( bool );
// => false

bool = isStructDataType( 'uint8' );
console.log( bool );
// => false

bool = isStructDataType( 'uint8c' );
console.log( bool );
// => false

bool = isStructDataType( '' );
console.log( bool );
// => false

bool = isStructDataType( 'foo' );
console.log( bool );
// => false
