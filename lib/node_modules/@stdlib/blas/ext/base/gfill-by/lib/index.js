/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Fill a strided array according to a provided callback function.
*
* @module @stdlib/blas/ext/base/gfill-by
*
* @example
* var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
*
* function fill() {
*     return 5.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gfillBy( x.length, x, 1, fill );
* // x => [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*
* @example
* var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
*
* function fill() {
*     return 5.0;
* }
*
* var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];
*
* gfillBy.ndarray( x.length, x, 1, 0, fill );
* // x => [ 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0 ]
*/

// MODULES //

var gfillBy = require( './main.js' );


// EXPORTS //

module.exports = gfillBy;
