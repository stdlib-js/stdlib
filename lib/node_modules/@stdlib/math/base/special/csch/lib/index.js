/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Compute the hyperbolic cosecant of a number.
*
* @module @stdlib/math/base/special/csch
*
* @example
* var csch = require( '@stdlib/math/base/special/csch' );
*
* var v = csch( 0.0 );
* // returns Infinity
*
* v = csch( 2.0 );
* // returns ~0.2757
*
* v = csch( -2.0 );
* // returns ~-0.2757
*
* v = csch( NaN );
* // returns NaN
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
