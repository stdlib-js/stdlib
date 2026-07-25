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

#ifndef STDLIB_ML_BASE_SGD_CLASSIFICATION_PENALTIES_H
#define STDLIB_ML_BASE_SGD_CLASSIFICATION_PENALTIES_H

/**
* Enumeration of SGD classification penalties.
*/
enum STDLIB_ML_SGD_CLASSIFICATION_PENALTY {
	// Regularization method that linearly combines the L1 and L2 penalties of the lasso and ridge methods:
	STDLIB_ML_SGD_CLASSIFICATION_ELASTICNET = 0,

	// L1 regularization (also called LASSO) leads to sparse models by adding a penalty based on the absolute value of coefficients:
	STDLIB_ML_SGD_CLASSIFICATION_L1,

	// L2 regularization (also called ridge regression) encourages smaller, more evenly distributed weights by adding a penalty based on the square of the coefficients:
	STDLIB_ML_SGD_CLASSIFICATION_L2
};

#endif // !STDLIB_ML_BASE_SGD_CLASSIFICATION_PENALTIES_H
