/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
* Reinterpret a boolean ndarray as an unsigned 8-bit integer ndarray.
*
* @module @stdlib/ndarray/base/reinterpret-boolean
*
* @example
* var falses = require( '@stdlib/ndarray/base/falses' );
* var reinterpretBoolean = require( '@stdlib/ndarray/base/reinterpret-boolean' );
*
* var x = falses( 'bool', [ 2, 2 ], 'row-major' );
* // returns <ndarray>[ [ false, false ], [ false, false ] ]
*
* var out = reinterpretBoolean( x );
* // returns <ndarray>[ [ 0, 0 ], [ 0, 0 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
