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

// TypeScript Version: 2.0

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
	*/
	learningRate?: ArrayLike<any>;

	/**
	* Loss function (default: `'log'`).
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
	* Predicts the response value for an observation vector `x`.
	*
	* @param x - feature vector
	* @param type - `probability` or `link` (default: `'link'`)
	* @throws first argument must be a one-dimensional ndarray
	* @throws first argument must be a one-dimensional ndarray whose length matches number of features
	* @returns response value
	*/
	predict( x: ndarray, type?: 'probability' | 'link' ): number;
}

/**
* Returns an accumulator function which incrementally performs binary classification using stochastic gradient descent (SGD).
*
* ## Method
*
* -   The sub-gradient of the loss function is estimated for each datum and the classification model is updated incrementally, with a decreasing learning rate and regularization of model feature weights using L2 regularization.
* -   Stochastic gradient descent is sensitive to the scaling of the features. One is advised to either scale each feature to `[0,1]` or `[-1,1]` or to transform each feature into z-scores with zero mean and unit variance. One should keep in mind that the same scaling has to be applied to test vectors in order to obtain accurate predictions.
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
*/
declare function incrBinaryClassification( N: number, options?: Options ): Accumulator; // tslint-disable-line max-line-length


// EXPORTS //

export = incrBinaryClassification;
