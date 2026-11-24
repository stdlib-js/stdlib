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
* var vector = require( '@stdlib/ndarray/vector/ctor' );
* var mskmin = require( '@stdlib/stats/base/ndarray/mskmin' );
*
* var x = vector( [ 1.0, -2.0, 4.0, 2.0 ], 'generic' );
* var mask = vector( [ 0, 0, 1, 0 ], 'uint8' );
*
* var v = mskmin( [ x, mask ] );
* // returns -2.0
*/

// MODULES //

var mskmin = require( './main.js' );


// EXPORTS //

module.exports = mskmin;
