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
* Return a boolean indicating if a buffer length is compatible with provided ndarray meta data.
*
* @module @stdlib/ndarray/base/assert/is-stride-offset-buffer-compatible
*
* @example
* var isBufferLengthCompatible = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var bool = isBufferLengthCompatible( 4, shape, strides, offset );
* // returns true
*
* @example
* var isBufferLengthCompatible = require( '@stdlib/ndarray/base/assert/is-buffer-length-compatible' );
*
* var shape = [ 2, 2 ];
* var strides = [ 2, 1 ];
* var offset = 2;
*
* var bool = isBufferLengthCompatible( 4, shape, strides, offset );
* // returns false
*/

// MODULES //

var isBufferLengthCompatible = require( './main.js' );


// EXPORTS //

module.exports = isBufferLengthCompatible;
