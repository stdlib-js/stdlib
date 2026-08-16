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
* Return a view of an input ndarray in which the order of elements along the last dimension is reversed.
*
* @module @stdlib/ndarray/base/fliplr
*
* @example
* var ndarray = require( '@stdlib/ndarray/ctor' );
* var getShape = require( '@stdlib/ndarray/shape' );
* var fliplr = require( '@stdlib/ndarray/base/fliplr' );
*
* var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
* var shape = [ 3, 2 ];
* var strides = [ 2, 1 ];
* var offset = 0;
*
* var x = ndarray( 'generic', buffer, shape, strides, offset, 'row-major' );
* // returns <ndarray>[ [ 1.0, 2.0 ], [ 3.0, 4.0 ], [ 5.0, 6.0 ] ]
*
* var sh = getShape( x );
* // returns [ 3, 2 ]
*
* var y = fliplr( x, false );
* // returns <ndarray>[ [ 2.0, 1.0 ], [ 4.0, 3.0 ], [ 6.0, 5.0 ] ]
*
* sh = getShape( y );
* // returns [ 3, 2 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
