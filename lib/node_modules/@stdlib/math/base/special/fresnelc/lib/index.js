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
* Compute the Fresnel integral C(x).
*
* @module @stdlib/math/base/special/fresnelc
*
* @example
* var fresnelc = require( '@stdlib/math/base/special/fresnelc' );
*
* var v = fresnelc( 0.0 );
* // returns 0.0
*
* v = fresnelc( 1.0 );
* // returns ~0.780
*
* v = fresnelc( Infinity );
* // returns ~0.5
*
* v = fresnelc( -Infinity );
* // returns ~-0.5
*
* v = fresnelc( NaN );
* // returns NaN
*/

// MODULES //

var fresnelc = require( './fresnelc.js' );


// EXPORTS //

module.exports = fresnelc;
