/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
* Return a boolean indicating if a buffer length is compatible with a provided shape array.
*
* @module @stdlib/ndarray/base/assert/is-buffer-length-compatible-shape
*
* @example
* var isBufferLengthCompatibleShape = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape' );
*
* var shape = [ 2, 2 ];
*
* var bool = isBufferLengthCompatibleShape( 10, shape );
* // returns true
*
* @example
* var isBufferLengthCompatibleShape = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible-shape' );
*
* var shape = [ 2, 2 ];
*
* var bool = isBufferLengthCompatibleShape( 3, shape );
* // returns false
*/

// MODULES //

var isBufferLengthCompatibleShape = require( './main.js' ); // eslint-disable-line id-length


// EXPORTS //

module.exports = isBufferLengthCompatibleShape;
