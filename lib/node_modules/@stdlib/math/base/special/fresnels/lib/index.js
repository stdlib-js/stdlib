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
* Compute the Fresnel integral S(x).
*
* @module @stdlib/math/base/special/fresnels
*
* @example
* var fresnels = require( '@stdlib/math/base/special/fresnels' );
*
* var v = fresnels( 0.0 );
* // returns 0.0
*
* v = fresnels( 1.0 );
* // returns ~0.438
*
* v = fresnels( Infinity );
* // returns ~0.5
*
* v = fresnels( -Infinity );
* // returns ~-0.5
*
* v = fresnels( NaN );
* // returns NaN
*/

// MODULES //

var fresnels = require( './fresnels.js' );


// EXPORTS //

module.exports = fresnels;
