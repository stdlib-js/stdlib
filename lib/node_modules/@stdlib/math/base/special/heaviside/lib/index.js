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
* Evaluate the Heaviside function.
*
* @module @stdlib/math/base/special/heaviside
*
* @example
* var heaviside = require( '@stdlib/math/base/special/heaviside' );
*
* var v = heaviside( 3.14 );
* // returns 1.0
*
* v = heaviside( -3.14 );
* // returns 0.0
*
* v = heaviside( 0.0 );
* // returns NaN
*
* v = heaviside( 0.0, 'half-maximum' );
* // returns 0.5
*
* v = heaviside( 0.0, 'left-continuous' );
* // returns 0.0
*
* v = heaviside( 0.0, 'right-continuous' );
* // returns 1.0
*
* v = heaviside( NaN );
* // returns NaN
*/

// MODULES //

var heaviside = require( './heaviside.js' );


// EXPORTS //

module.exports = heaviside;
