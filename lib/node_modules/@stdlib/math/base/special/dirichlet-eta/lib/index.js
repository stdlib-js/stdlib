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
* Evaluate the Dirichlet eta function for a double-precision floating-point number `s`.
*
* @module @stdlib/math/base/special/dirichlet-eta
*
* @example
* var eta = require( '@stdlib/math/base/special/dirichlet-eta' );
*
* var v = eta( 0.0 );
* // returns 0.5
*
* v = eta( -1.0 );
* // returns 0.25
*
* v = eta( 1.0 ); // => ln(2)
* // returns ~0.6931
*
* v = eta( 3.14 );
* // returns ~0.9096
*
* v = eta( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
