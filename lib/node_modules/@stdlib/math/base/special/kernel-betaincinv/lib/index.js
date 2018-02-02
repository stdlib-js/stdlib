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
* Evaluate the inverse of the incomplete beta function.
*
* @module @stdlib/math/base/special/kernel-betaincinv
*
* @example
* var kernelBetaincinv = require( '@stdlib/math/base/special/kernel-betaincinv' );
*
* var y = kernelBetaincinv( 3.0, 3.0, 0.2, 0.8 );
* // returns [ ~0.327, ~0.673 ]
*
* y = kernelBetaincinv( 3.0, 3.0, 0.4, 0.6 );
* // returns [ ~0.446, ~0.554 ]
*
* y = kernelBetaincinv( 1.0, 6.0, 0.4, 0.6 );
* // returns [ ~0.082, ~0.918 ]
*
* y = kernelBetaincinv( 1.0, 6.0, 0.8, 0.2 );
* // returns [ ~0.235, ~0.765 ]
*/

// MODULES //

var kernelBetaincinv = require( './kernel_betaincinv.js' );


// EXPORTS //

module.exports = kernelBetaincinv;
