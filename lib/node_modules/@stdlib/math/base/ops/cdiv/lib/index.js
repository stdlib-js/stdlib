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
* Divide two complex numbers.
*
* @module @stdlib/math/base/ops/cdiv
*
* @example
* var cdiv = require( '@stdlib/math/base/ops/cdiv' );
*
* var v = cdiv( -13.0, -1.0, -2.0, 1.0 );
* // returns [ 5.0, 3.0 ]
*
* @example
* var cdiv = require( '@stdlib/math/base/ops/cdiv' );
*
* var out = new Array( 2 );
*
* var v = cdiv( out, -13.0, -1.0, -2.0, 1.0 );
* // returns [ 5.0, 3.0 ]
*
* var bool = ( v === out );
* // returns true
*/

// MODULES //

var cdiv = require( './main.js' );


// EXPORTS //

module.exports = cdiv;
