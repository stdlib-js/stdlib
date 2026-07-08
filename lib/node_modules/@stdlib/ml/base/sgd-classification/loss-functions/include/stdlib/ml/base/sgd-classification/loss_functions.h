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

#ifndef STDLIB_ML_BASE_SGD_CLASSIFICATION_LOSS_FUNCTIONS_H
#define STDLIB_ML_BASE_SGD_CLASSIFICATION_LOSS_FUNCTIONS_H

/**
* Enumeration of SGD classification loss functions.
*/
enum STDLIB_ML_SGD_CLASSIFICATION_LOSS_FUNCTION {
	// Penalty is the absolute value of the error whenever the absolute error exceeds epsilon and zero otherwise:
	STDLIB_ML_SGD_CLASSIFICATION_EPSILON_INSENSITIVE = 0,

	// Corresponds to a soft-margin linear Support Vector Machine (SVM), which can handle non-linearly separable data:
	STDLIB_ML_SGD_CLASSIFICATION_HINGE,

	// Squared-error loss for observations with error smaller than epsilon in magnitude, linear loss otherwise:
	STDLIB_ML_SGD_CLASSIFICATION_HUBER,

	// Corresponds to Logistic Regression:
	STDLIB_ML_SGD_CLASSIFICATION_LOG,

	// Huber loss function variant for classification:
	STDLIB_ML_SGD_CLASSIFICATION_MODIFIED_HUBER,

	// Corresponds to the original perceptron by Rosenblatt (1957):
	STDLIB_ML_SGD_CLASSIFICATION_PERCEPTRON,

	// Squared epsilon insensitive loss function:
	STDLIB_ML_SGD_CLASSIFICATION_SQUARED_EPSILON_INSENSITIVE,

	// Squared difference of the observed and fitted values:
	STDLIB_ML_SGD_CLASSIFICATION_SQUARED_ERROR,

	// Squared hinge loss function SVM (L2-SVM):
	STDLIB_ML_SGD_CLASSIFICATION_SQUARED_HINGE
};

#endif // !STDLIB_ML_BASE_SGD_CLASSIFICATION_LOSS_FUNCTIONS_H
