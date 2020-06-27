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
* Compute the inverse cotangent of a number.
*
* @module @stdlib/math/base/special/acot
*
* @example
* var acot = require( '@stdlib/math/base/special/acot' );
*
* var v = acot( 2.0 );
* // returns ~0.4636
*
* v = acot( 0.0 );
* // returns ~1.5708
*
* v = acot( 0.5 );
* // returns ~1.1071
*
* v = acot( 1.0 );
* // returns ~0.7854
*
* v = acot( NaN );
* // returns NaN
*
* v = acot( Infinity );
* // returns 0.0
*/

// MODULES //

var acot = require( './main.js' );


// EXPORTS //

module.exports = acot;
