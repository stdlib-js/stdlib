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
* Reorder ndarray dimensions and associated strides for loop interchange.
*
* @module @stdlib/ndarray/base/ternary-loop-interchange-order
*
* @example
* var ternaryLoopOrder = require( '@stdlib/ndarray/base/ternary-loop-interchange-order' );
*
* var sh = [ 2, 3, 4 ];
*
* var sx = [ 12, 4, 1 ]; // row-major
* var sy = [ 24, 8, 1 ]; // row-major
* var sz = [ 1, 4, 12 ]; // column-major
* var sw = [ 1, -2, 6 ]; // column-major
*
* var o = ternaryLoopOrder( sh, sx, sy, sz, sw );
* // returns {...}
*
* var ssh = o.sh;
* // returns [ 2, 3, 4 ]
*
* var ssx = o.sx;
* // returns [ 12, 4, 1 ]
*
* var ssy = o.sy;
* // returns [ 24, 8, 1 ]
*
* var ssz = o.sz;
* // returns [ 1, 4, 12 ]
*
* var ssw = o.sw;
* // returns [ 1, -2, 6 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
