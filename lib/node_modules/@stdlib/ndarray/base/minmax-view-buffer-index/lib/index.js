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
* Compute the minimum and maximum linear indices in an underlying data buffer which are accessible to an array view.
*
* @module @stdlib/ndarray/base/minmax-view-buffer-index
*
* @example
* var minmaxViewBufferIndex = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );
*
* var shape = [ 10, 10 ];
* var strides = [ 10, 1 ];
* var offset = 10;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 10, 109 ]
*
* @example
* var minmaxViewBufferIndex = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );
*
* var shape = [ 10, 10 ];
* var strides = [ -10, -1 ];
* var offset = 99;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 0, 99 ]
*
* @example
* var minmaxViewBufferIndex = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );
*
* var shape = [ 10, 10 ];
* var strides = [ 1, 10 ];
* var offset = 10;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 10, 109 ]
*
* @example
* var minmaxViewBufferIndex = require( '@stdlib/ndarray/base/minmax-view-buffer-index' );
*
* var shape = [ 10, 10 ];
* var strides = [ -1, -10 ];
* var offset = 99;
*
* var idx = minmaxViewBufferIndex( shape, strides, offset );
* // returns [ 0, 99 ]
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;
