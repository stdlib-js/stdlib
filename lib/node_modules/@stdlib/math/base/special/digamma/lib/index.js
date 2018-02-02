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
* Evaluate the digamma function.
*
* @module @stdlib/math/base/special/digamma
*
* @example
* var digamma = require( '@stdlib/math/base/special/digamma' );
*
* var v = digamma( -2.5 );
* // returns ~1.103
*
* v = digamma( 1.0 );
* // returns ~-0.577
*
* v = digamma( 10.0 );
* // returns ~2.252
*
* v = digamma( NaN );
* // returns NaN
*
* v = digamma( -1.0 );
* // returns NaN
*/

// MODULES //

var digamma = require( './digamma.js' );


// EXPORTS //

module.exports = digamma;
