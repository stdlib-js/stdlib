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
* Simultaneously compute the sine and cosine of a single-precision floating-point number times π.
*
* @module @stdlib/math/base/special/sincospif
*
* @example
* var sincospif = require( '@stdlib/math/base/special/sincospif' );
*
* var v = sincospif( 0.0 );
* // returns <Float32Array>[ 0.0, 1.0 ]
*
* v = sincospif( 0.5 );
* // returns <Float32Array>[ 1.0, 0.0 ]
*
* v = sincospif( 0.1 );
* // returns <Float32Array>[ ~0.309, ~0.951 ]
*
* v = sincospif( NaN );
* // returns <Float32Array>[ NaN, NaN ]
*
* @example
* var Float32Array = require( '@stdlib/array/float32' );
* var sincospif = require( '@stdlib/math/base/special/sincospif' );
*
* var out = new Float32Array( 2 );
*
* var v = sincospif.assign( 0.0, out, 1, 0 );
* // returns <Float32Array>[ 0.0, 1.0 ]
*
* var bool = ( v === out );
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
