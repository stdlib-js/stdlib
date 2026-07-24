/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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

// MAIN //

/**
* Returns an object mapping supported penalties to integer values for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `ELASTICNET == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation.
*
* @returns {Object} object mapping supported penalties to integer values
*
* @example
* var table = enumerated();
* // returns <Object>
*/
function enumerated() {
	// NOTE: the following should match the C `penalties.h` enumeration!!!!
	return {
		// Regularization method that linearly combines the L1 and L2 penalties of the lasso and ridge methods:
		'elasticnet': 0,

		// L1 regularization (also called LASSO) leads to sparse models by adding a penalty based on the absolute value of coefficients:
		'l1': 1,

		// L2 regularization (also called ridge regression) encourages smaller, more evenly distributed weights by adding a penalty based on the square of the coefficients:
		'l2': 2
	};
}


// EXPORTS //

module.exports = enumerated;
