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
* Returns an object mapping supported learning rate schedulers to integer values for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `BASIC == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation.
*
* @returns {Object} object mapping supported learning rate schedulers to integer values
*
* @example
* var table = enumerated();
* // returns <Object>
*/
function enumerated() {
	// NOTE: the following should match the C `learning rates.h` enumeration!!!!
	return {
		// Basic learning rate function according to the formula `10/(10+t)` where `t` is the current iteration:
		'basic': 0,

		// Constant learning rate function:
		'constant': 1,

		// Inverse scaling learning rate function according to the formula `eta0/pow(t, power_t)` where `eta0` is the initial learning rate and `power_t` is the exponent controlling how quickly the learning rate decreases:
		'invscaling': 2,

		// Pegasos learning rate function according to the formula `1/(lambda*t)` where `t` is the current iteration and `lambda` is the regularization parameter:
		'pegasos': 3
	};
}


// EXPORTS //

module.exports = enumerated;
