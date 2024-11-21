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
* Convert subscripts to a linear index.
*
* @module @stdlib/ndarray/base/sub2ind
*
* @example
* var sub2ind = require( '@stdlib/ndarray/base/sub2ind' );
*
* var shape = [ 3, 3, 3 ];
* var strides = [ 9, 3, 1 ];
* var offset = 0;
* var mode = [ 'throw' ];
*
* var idx = sub2ind( shape, strides, offset, 1, 2, 2, mode );
* // returns 17
*/

// MODULES //

var sub2ind = require( './main.js' );


// EXPORTS //

module.exports = sub2ind;
