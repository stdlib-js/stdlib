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
* Sort a strided array using Shellsort.
*
* @module @stdlib/blas/ext/base/gsortsh
*
* @example
* var gsortsh = require( '@stdlib/blas/ext/base/gsortsh' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsortsh( x.length, 1.0, x, 1 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*
* @example
* var gsortsh = require( '@stdlib/blas/ext/base/gsortsh' );
*
* var x = [ 1.0, -2.0, 3.0, -4.0 ];
*
* gsortsh.ndarray( x.length, 1.0, x, 1, 0 );
* // x => [ -4.0, -2.0, 1.0, 3.0 ]
*/

// MODULES //

var gsortsh = require( './main.js' );


// EXPORTS //

module.exports = gsortsh;
