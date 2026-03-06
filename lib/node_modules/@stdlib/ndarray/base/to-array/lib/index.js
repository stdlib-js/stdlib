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
* Convert an ndarray buffer to a generic array (which may include nested arrays).
*
* @module @stdlib/ndarray/base/to-array
*
* @example
* var ndarray2array = require( '@stdlib/ndarray/base/to-array' );
*
* var buffer = [ 1, 2, 3, 4 ];
* var shape = [ 2, 2 ];
* var order = 'row-major';
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var out = ndarray2array( buffer, shape, strides, offset, order );
* // returns [ [ 1, 2 ], [ 3, 4 ] ]
*/

// MODULES //

var ndarray2array = require( './main.js' );


// EXPORTS //

module.exports = ndarray2array;
