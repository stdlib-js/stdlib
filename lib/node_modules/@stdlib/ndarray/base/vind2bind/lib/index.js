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
* Convert a linear index in an array view to a linear index in an underlying data buffer.
*
* @module @stdlib/ndarray/base/vind2bind
*
* @example
* var vind2bind = require( '@stdlib/ndarray/base/vind2bind' );
*
* var shape = [ 3, 3 ];
* var strides = [ -3, 1 ];
* var offset = 6;
* var order = 'row-major';
* var mode = 'throw';
*
* var ind = vind2bind( shape, strides, offset, order, 1, mode );
* // returns 7
*/

// MODULES //

var vind2bind = require( './main.js' );


// EXPORTS //

module.exports = vind2bind;
