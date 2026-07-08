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

#ifndef STDLIB_ML_BASE_SGD_CLASSIFICATION_LEARNING_RATES_H
#define STDLIB_ML_BASE_SGD_CLASSIFICATION_LEARNING_RATES_H

/**
* Enumeration of SGD classification learning rate schedulers.
*/
enum STDLIB_ML_SGD_CLASSIFICATION_LEARNING_RATE {
	// Basic learning rate function according to the formula `10/(10+t)` where `t` is the current iteration:
	STDLIB_ML_SGD_CLASSIFICATION_BASIC = 0,

	// Constant learning rate function:
	STDLIB_ML_SGD_CLASSIFICATION_CONSTANT,

	// Inverse scaling learning rate function according to the formula `eta0/pow(t, power_t)` where `eta0` is the initial learning rate and `power_t` is the exponent controlling how quickly the learning rate decreases:
	STDLIB_ML_SGD_CLASSIFICATION_INVSCALING,

	// Pegasos learning rate function according to the formula `1/(lambda*t)` where `t` is the current iteration and `lambda` is the regularization parameter:
	STDLIB_ML_SGD_CLASSIFICATION_PEGASOS
};

#endif // !STDLIB_ML_BASE_SGD_CLASSIFICATION_LEARNING_RATES_H
