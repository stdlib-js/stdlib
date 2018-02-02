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
* Evaluate the binary logarithm (base two).
*
* @module @stdlib/math/base/special/log2
*
* @example
* var log2 = require( '@stdlib/math/base/special/log2' );
*
* var v = log2( 4.0 );
* // returns 2.0
*
* v = log2( 8.0 );
* // returns 3.0
*
* v = log2( 0.0 );
* // returns -Infinity
*
* v = log2( Infinity );
* // returns Infinity
*
* v = log2( NaN );
* // returns NaN
*
* v = log2( -4.0 );
* // returns NaN
*/

// MODULES //

var log2 = require( './log2.js' );


// EXPORTS //

module.exports = log2;
