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

/**
* Create a filled two-dimensional nested array according to a provided callback function.
*
* @module @stdlib/array/base/filled2d-by
*
* @example
* var constantFunction = require( '@stdlib/utils/constant-function' );
* var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
*
* var out = filled2dBy( [ 1, 3 ], constantFunction( 'beep' ) );
* // returns [ [ 'beep', 'beep', 'beep' ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
