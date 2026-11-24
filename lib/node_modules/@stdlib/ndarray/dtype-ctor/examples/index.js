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

var DataType = require( './../lib' );

var dt = new DataType( 'complex128' );

console.log( 'type: %s', typeof dt );
// => 'type: object'

console.log( 'alignment: %d', dt.alignment );
// => 'alignment: 8'

console.log( 'byteLength: %d', dt.byteLength );
// => 'byteLength: 16'

console.log( 'byteOrder: %s', dt.byteOrder );
// => 'byteOrder: host'

console.log( 'char: %s', dt.char );
// => 'char: z'

console.log( 'JSON: %s', JSON.stringify( dt ) );
// e.g., => 'JSON: {"type": "DataType","value":"complex128","byteOrder":"host",...}'
