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
* Add two complex numbers.
*
* @module @stdlib/math/base/ops/cadd
*
* @example
* var cadd = require( '@stdlib/math/base/ops/cadd' );
*
* var v = cadd( 5.0, 3.0, -2.0, 1.0 );
* // returns [ 3.0, 4.0 ]
*
* @example
* var cadd = require( '@stdlib/math/base/ops/cadd' );
*
* var out = new Float32Array( 2 );
*
* var v = cadd( out, 5.0, 3.0, -2.0, 1.0 );
* // returns <Float32Array>[ 3.0, 4.0 ]
*
* var bool = ( out === v );
* // returns true
*/

// MODULES //

var cadd = require( './main.js' );


// EXPORTS //

module.exports = cadd;
