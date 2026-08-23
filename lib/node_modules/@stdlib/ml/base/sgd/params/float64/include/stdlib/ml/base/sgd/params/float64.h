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

#ifndef STDLIB_ML_BASE_SGD_PARAMS_FLOAT64_H
#define STDLIB_ML_BASE_SGD_PARAMS_FLOAT64_H

#include <stdbool.h>
#include <stdint.h>

/**
* Struct for storing SGD parameters.
*/
struct stdlib_ml_sgd_float64_params {
	// Parameters specific to the regularization function being used:
	double penaltyParams[ 2 ];

	// Parameters specific to the learning rate scheduler being used:
	double learningRateParams[ 2 ];

	// Parameters specific to the loss function being used:
	double lossFunctionParams[ 1 ];

	// Initial intercept value:
	double intercept;

	// Maximum number of iterations to run:
	int32_t maxIter;

	// Regularization function:
	int8_t penalty;

	// Learning rate scheduler:
	int8_t learningRate;

	// Loss function:
	int8_t lossFunction;

	// Boolean indicating whether to include intercept:
	bool fitIntercept;
};

#endif // !STDLIB_ML_BASE_SGD_PARAMS_FLOAT64_H
