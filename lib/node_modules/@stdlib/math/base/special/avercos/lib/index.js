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
* Compute the inverse versed cosine.
*
* @module @stdlib/math/base/special/avercos
*
* @example
* var avercos = require( '@stdlib/math/base/special/avercos' );
*
* var v = avercos( 0.0 );
* // returns 0.0
*
* v = avercos( -3.141592653589793/2.0 );
* // returns ~2.1783
*
* v = avercos( -3.141592653589793/6.0 );
* // returns ~1.0742
*
* v = avercos( NaN );
* // returns NaN
*/

// MODULES //

var avercos = require( './avercos.js' );


// EXPORTS //

module.exports = avercos;
