/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Broadcast an ndarray to a specified shape if and only if the specified shape differs from the provided ndarray's shape.
*
* @module @stdlib/ndarray/base/maybe-broadcast-array
*
* @example
* var getShape = require( '@stdlib/ndarray/shape' );
* var array = require( '@stdlib/ndarray/array' );
* var maybeBroadcastArray = require( '@stdlib/ndarray/base/maybe-broadcast-array' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var shx = getShape( x );
* // returns [ 2, 2 ]
*
* var y = maybeBroadcastArray( x, [ 3, 2, 2 ] );
* // returns <ndarray>[ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ], [ [ 1, 2 ], [ 3, 4 ] ] ]
*
* var shy = getShape( y );
* // returns [ 3, 2, 2 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
