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
* Increment index offsets according to a list of increments.
*
* @module @stdlib/ndarray/base/kernels/utils/increment-offsets
*
* @example
* var incrementOffsets = require( '@stdlib/ndarray/base/kernels/utils/increment-offsets' );
*
* var offsets = [ 1, 2, 3, 4 ];
* var inc = [ 2, 4, 6, 8 ];
*
* var out = incrementOffsets( offsets, inc );
* // returns [ 3, 6, 9, 12 ]
*
* var bool = ( out === offsets );
* // returns true
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
