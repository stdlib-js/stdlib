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
* Returns an object mapping supported loss functions to integer values for purposes of C inter-operation.
*
* ## Notes
*
* -   Downstream consumers of this mapping should **not** rely on specific integer values (e.g., `HINGE == 0`). Instead, the object should be used in an opaque manner.
* -   The main purpose of this function is JavaScript and C inter-operation.
*
* @returns {Object} object mapping supported loss functions to integer values
*
* @example
* var table = enumerated();
* // returns <Object>
*/
function enumerated() {
	// NOTE: the following should match the C `loss_functions.h` enumeration!!!!
	return {
		// Penalty is the absolute value of the error whenever the absolute error exceeds epsilon and zero otherwise:
		'epsilon-insensitive': 0,

		// Corresponds to a soft-margin linear Support Vector Machine (SVM), which can handle non-linearly separable data:
		'hinge': 1,

		// Squared-error loss for observations with error smaller than epsilon in magnitude, linear loss otherwise:
		'huber': 2,

		// Corresponds to Logistic Regression:
		'log': 3,

		// Huber loss function variant for classification:
		'modified-huber': 4,

		// Corresponds to the original perceptron by Rosenblatt (1957):
		'perceptron': 5,

		// Squared epsilon insensitive loss function:
		'squared-epsilon-insensitive': 6,

		// Squared difference of the observed and fitted values:
		'squared-error': 7,

		// Squared hinge loss function SVM (L2-SVM):
		'squared-hinge': 8
	};
}


// EXPORTS //

module.exports = enumerated;
