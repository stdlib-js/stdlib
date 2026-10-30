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
* Return an initialized one-dimensional workspace ndarray for computing a real-valued discrete Fourier transform.
*
* @module @stdlib/fft/fftpack/rffti
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var rffti = require( '@stdlib/fft/fftpack/rffti' );
*
* var ws = rffti( 4 );
* // returns <ndarray>
*
* var dt = String( getDType( ws ) );
* // returns 'float64'
*
* @example
* var getDType = require( '@stdlib/ndarray/dtype' );
* var rffti = require( '@stdlib/fft/fftpack/rffti' );
*
* var ws = rffti( 4, { 'dtype': 'float32' } );
* // returns <ndarray>
*
* var dt = String( getDType( ws ) );
* // returns 'float32'
*
* @example
* var zeros = require( '@stdlib/ndarray/zeros' );
* var rffti = require( '@stdlib/fft/fftpack/rffti' );
*
* var ws = zeros( [ 42 ], { 'dtype': 'float64' } );
*
* var out = rffti.assign( ws, 4 );
* // returns <ndarray>
*
* var bool = ( out === ws );
* // returns true
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var assign = require( './assign.js' );


// MAIN //

setReadOnly( main, 'assign', assign );


// EXPORTS //

module.exports = main;

// exports: { "assign": "main.assign" }
