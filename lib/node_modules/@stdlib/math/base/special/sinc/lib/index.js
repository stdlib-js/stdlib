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
* Compute the normalized cardinal sine of a number.
*
* @module @stdlib/math/base/special/sinc
*
* @example
* var sinc = require( '@stdlib/math/base/special/sinc' );
*
* var v = sinc( 0.5 );
* // returns ~0.637
*
* v = sinc( -1.2 );
* // returns ~-0.156
*
* v = sinc( 0.0 );
* // returns 1.0
*
* v = sinc( NaN );
* // returns NaN
*/

// MODULES //

var sinc = require( './sinc.js' );


// EXPORTS //

module.exports = sinc;
