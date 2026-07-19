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
* Fill an input ndarray according to a callback function.
*
* @module @stdlib/ndarray/fill-by
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var getData = require( '@stdlib/ndarray/data-buffer' );
* var fillBy = require( '@stdlib/ndarray/fill-by' );
*
* function fcn() {
*     return 10.0;
* }
*
* var x = zeros( [ 3, 1, 2 ], {
*     'dtype': 'float64'
* });
*
* fillBy( x, fcn );
*
* console.log( getData( x ) );
* // => <Float64Array>[ 10.0, 10.0, 10.0, 10.0, 10.0, 10.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
