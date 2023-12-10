/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { ArrayLike } from '@stdlib/types/array';
import { ndarray } from '@stdlib/types/ndarray';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Regularization parameter (default: `1.0e-4`).
	*/
	lambda?: number;

	/**
	* Learning rate function and associated parameters (default: `['basic']`).
	*
	* ## Notes
	*
	* -   Must be one of the following:
	*
	*     -   `['constant', ...]`: constant learning rate function. To set the learning rate, provide a second array element. By default, when the learn rate function is 'constant', the learning rate is set to `0.02`.
	*     -   `['basic']`: basic learning rate function according to the formula `10/(10+t)` where `t` is the current iteration.
	*     -   `['invscaling', ...]`: inverse scaling learning rate function according to the formula `eta0/pow(t, power_t)` where `eta0` is the initial learning rate and `power_t` is the exponent controlling how quickly the learning rate decreases. To set the initial learning rate, provide a second array element. By default, the initial learning rate is `0.02`. To set the exponent, provide a third array element. By default, the exponent is `0.5`.
	*     -   `['pegasos']`: Pegasos learning rate function according to the formula `1/(lambda*t)` where `t` is the current iteration and `lambda` is the regularization parameter.
	*/
	learningRate?: ArrayLike<any>;

	/**
	* Loss function (default: `'log'`).
	*
	* ## Notes
	*
	* -   Must be one of the following:
	*
	*     -   `hinge`: hinge loss function. Corresponds to a soft-margin linear Support Vector Machine (SVM), which can handle non-linearly separable data.
	*     -   `log`: logistic loss function. Corresponds to Logistic Regression.
	*     -   `modifiedHuber`: Huber loss function variant for classification.
	*     -   `perceptron`: hinge loss function without a margin. Corresponds to the original Perceptron by Rosenblatt.
	*     -   `squaredHinge`: squared hinge loss function SVM (L2-SVM).
	*/
	loss?: 'hinge' | 'log' | 'modifiedHuber' | 'perceptron' | 'squaredHinge';

	/**
	* Boolean indicating whether to include an intercept (default: `true`).
	*/
	intercept?: boolean;
}

/**
* Accumulator interface.
*/
interface Accumulator {
	/**
	* If provided a feature vector and response value, the accumulator function updates a binary classification model; otherwise, the accumulator function returns the current binary classification model coefficients.
	*
	* @param x - feature vector
	* @param y - response value
	* @throws first argument must be a one-dimensional ndarray
	* @throws first argument must be a one-dimensional ndarray whose length matches number of features
	* @throws second argument must be either `+1` or `-1`
	* @returns model coefficients
	*/
	( x?: ndarray, y?: number ): ndarray;

	/**
	* Predicts the response value for one or more observation vectors `X`.
	*
	* @param X - feature vectors
	* @param type - `label`, `probability`, or `linear` (default: `'label'`)
	* @throws first argument must be an ndarray whose last dimension matches number of features
	* @throws second argument must be compatible with the model loss function
	* @returns ndarray containing response values
	*/
	predict( x: ndarray, type?: 'label' | 'probability' | 'linear' ): ndarray;
}

/**
* Returns an accumulator function which incrementally performs binary classification using stochastic gradient descent (SGD).
*
* ## Method
*
* -   The sub-gradient of the loss function is estimated for each datum and the classification model is updated incrementally, with a decreasing learning rate and regularization of model feature weights using L2 regularization.
* -   Stochastic gradient descent is sensitive to the scaling of the features. One is advised to either scale each feature to `[0,1]` or `[-1,1]` or to transform each feature into z-scores with zero mean and unit variance. One should keep in mind that the same scaling has to be applied to training data in order to obtain accurate predictions.
* -   In general, the more data provided to an accumulator, the more reliable the model predictions.
*
* ## References
*
* -   Shalev-Shwartz, S., Singer, Y., Srebro, N., & Cotter, A. (2011). Pegasos: Primal estimated sub-gradient solver for SVM. Mathematical Programming, 127(1), 3–30. doi:10.1007/s10107-010-0420-4
*
* @param N - number of features
* @param options - options object
* @param options.lambda - regularization parameter (default: `1.0e-4`)
* @param options.learningRate - learning rate function and associated parameters (default: `['basic']`)
* @param options.loss - loss function  (default: `'log'`)
* @param options.intercept - boolean indicating whether to include an intercept (default: `true`)
* @throws first argument must be a positive integer
* @throws must provide valid options
* @returns accumulator function
*
* @example
* var Float64Array = require( `@stdlib/array/float64` );
* var array = require( `@stdlib/ndarray/array` );
*
* // Create an accumulator:
* var accumulator = incrBinaryClassification( 3, {
*     'intercept': true,
*     'lambda': 1.0e-5
* });
*
* // ...
*
* // Update the model:
* var x = array( new Float64Array( [ 2.3, 1.0, 5.0 ] ) );
* var coefs = accumulator( x, 1 );
* // returns <ndarray>
*
* // ...
*
* // Create a new observation vector:
* x = array( new Float64Array( [ 2.3, 5.3, 8.6 ] ) );
*
* // Predict the response value:
* var yhat = accumulator.predict( x );
* // returns <ndarray>
*/
declare function incrBinaryClassification( N: number, options?: Options ): Accumulator;


// EXPORTS //

export = incrBinaryClassification;
