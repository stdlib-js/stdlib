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
* Compute the inverse half-value versed cosine.
*
* @module @stdlib/math/base/special/ahavercos
*
* @example
* var ahavercos = require( '@stdlib/math/base/special/ahavercos' );
*
* var v = ahavercos( 0.0 );
* // returns ~3.1416
*
* v = ahavercos( 1.0 );
* // returns 0.0
*
* v = ahavercos( 0.5 );
* // returns ~1.5707
*
* v = ahavercos( NaN );
* // returns NaN
*/

// MODULES //

var ahavercos = require( './ahavercos.js' );


// EXPORTS //

module.exports = ahavercos;
