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
* Evaluate Spence’s function, which is also known as the dilogarithm.
*
* @module @stdlib/math/base/special/spence
*
* @example
* var spence = require( '@stdlib/math/base/special/spence' );
*
* var v = spence( 3.0 );
* // returns ~-1.437
*
* v = spence( 0.0 );
* // returns ~1.645
*
* v = spence( -9.0 );
* // returns NaN
*
* v = spence( NaN );
* // returns NaN
*/

// MODULES //

var spence = require( './spence.js' );


// EXPORTS //

module.exports = spence;
