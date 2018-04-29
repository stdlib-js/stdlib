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
* Two-dimensional kernel density estimation.
*
* @module @stdlib/stats/kde2d
*
* @example
* var kde2d = require( '@stdlib/stats/kde2d' );
* var x = [ 1, 3, 5, 6, 21, 23, 16, 17, 20, 10 ];
* var y = [ 0.40, 0.20, 0.20, 0.15, 0.05, 0.55, 0.6, 0.33, 0.8, 0.41 ];
*
* var out = kde2d( x, y );
* // returns { 'x': [1, 1.91, ... ], 'y': [0.05, 0.08125, ...], 'z': ndarray {Float64Array[ 0.031, ...] }
*/

// MODULES //

var kde2d = require( './kde2d.js' );


// EXPORTS //

module.exports = kde2d;
