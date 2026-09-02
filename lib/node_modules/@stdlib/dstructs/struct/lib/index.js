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

/**
* Create a constructor for creating a fixed-width composite data type (a.k.a., a `struct`).
*
* @module @stdlib/dstructs/struct
*
* @example
* var factory = require( '@stdlib/dstructs/struct' );
*
* var fields = [
*     {
*         'type': 'union',
*         'fields': [
*             {
*                 'name': 'double',
*                 'description': 'double-precision floating-point number',
*                 'type': 'float64',
*                 'enumerable': true,
*                 'writable': true,
*                 'castingMode': 'none'
*             },
*             {
*                 'name': 'words',
*                 'description': 'high and low words',
*                 'type': 'uint32',
*                 'length': 2,
*                 'enumerable': true,
*                 'writable': true,
*                 'castingMode': 'none'
*             }
*         ]
*     }
* ];
* var Struct = factory( fields );
*
* var data = {
*     'double': 3.14
* };
* var s = new Struct( data );
* // returns <Struct>
*
* var v = s.double;
* // returns 3.14
*
* var w = s.words;
* // e.g., <Uint32Array>[ 1374389535, 1074339512 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
