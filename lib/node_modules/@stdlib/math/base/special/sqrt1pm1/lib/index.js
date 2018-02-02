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
* Compute the value of `sqrt(1+x)-1`.
*
* @module @stdlib/math/base/special/sqrt1pm1
*
* @example
* var sqrt1pm1 = require( '@stdlib/math/base/special/sqrt1pm1' );
*
* var v = sqrt1pm1( 3.0 );
* // returns 1.0
*
* v = sqrt1pm1( 0.5 );
* // returns ~0.225
*
* v = sqrt1pm1( 0.02 );
* // returns ~0.01
*
* v = sqrt1pm1( -0.5 );
* // returns ~-0.292
*/

// MODULES //

var sqrt1pm1 = require( './sqrt1pm1.js' );


// EXPORTS //

module.exports = sqrt1pm1;
