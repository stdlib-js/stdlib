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
* Return a new ndarray where an ndarray is rotated 90 degrees in a specified plane.
*
* @module @stdlib/ndarray/base/to-rot90
*
* @example
* var array = require( '@stdlib/ndarray/array' );
* var toRot90 = require( '@stdlib/ndarray/base/to-rot90' );
*
* var x = array( [ [ 1, 2 ], [ 3, 4 ] ] );
* // returns <ndarray>[ [ 1, 2 ], [ 3, 4 ] ]
*
* var y = toRot90( x, [ 0, 1 ], 1 );
* // returns <ndarray>[ [ 2, 4 ], [ 1, 3 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
