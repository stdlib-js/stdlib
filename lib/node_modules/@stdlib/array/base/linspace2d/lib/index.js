/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Generate a linearly spaced two-dimensional nested numeric array.
*
* @module @stdlib/array/base/linspace2d
*
* @example
* var linspace2d = require( '@stdlib/array/base/linspace2d' );
*
* var x = linspace2d( 0, 100, [ 2, 3 ], false );
* // returns [ [ 0, 20, 40 ], [ 60, 80, 100 ] ]
*
* x = linspace2d( 0, 100, [ 2, 3 ], true );
* // returns [ [ 0, 40, 80 ], [ 20, 60, 100 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
