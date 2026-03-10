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
* Calculate the minimum value of a one-dimensional ndarray according to a mask.
*
* @module @stdlib/stats/base/ndarray/mskmin
*
* @example
* var ndarray = require( '@stdlib/ndarray/base/ctor' );
* var mskmin = require( '@stdlib/stats/base/ndarray/mskmin' );
*
* var xbuf = [ 1.0, -2.0, 4.0, 2.0 ];
* var x = new ndarray( 'generic', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var maskbuf = [ 0, 0, 1, 0 ];
* var mask = new ndarray( 'generic', maskbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = mskmin( [ x, mask ] );
* // returns -2.0
*/

// MODULES //

var mskmin = require( './main.js' );


// EXPORTS //

module.exports = mskmin;
