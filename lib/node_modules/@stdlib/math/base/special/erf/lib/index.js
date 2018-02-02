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
* Evaluate the error function.
*
* @module @stdlib/math/base/special/erf
*
* @example
* var erf = require( '@stdlib/math/base/special/erf' );
*
* var y = erf( 2.0 );
* // returns ~0.9953
*
* y = erf( -1.0 );
* // returns ~-0.8427
*
* y = erf( -0.0 );
* // returns -0.0
*
* y = erf( NaN );
* // returns NaN
*/

// MODULES //

var erf = require( './erf.js' );


// EXPORTS //

module.exports = erf;
