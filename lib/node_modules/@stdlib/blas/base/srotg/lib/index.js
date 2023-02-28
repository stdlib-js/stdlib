/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
* Construct a Givens plane rotation.
*
* @module @stdlib/blas/base/srotg
*
* @example
* var srotg = require( '@stdlib/blas/base/srotg' );
*
* var out = srotg( 0.0, 2.0 );
* // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
*
* out = srotg( 6.0, -8.0 );
* // returns <Float32Array>[ 10.0, ~-1.666, -0.6, 0.8 ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var srotg = require( '@stdlib/blas/base/srotg' );
*
* var out = new Float32Array( 4 );
*
* var y = srotg.assign( 0.0, 2.0, out, 1, 0 );
* // returns <Float32Array>[ 2.0, 1.0, 0.0, 1.0 ]
*
* var bool = ( y === out );
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
