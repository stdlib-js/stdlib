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

import { NumericArray } from '@stdlib/types/array';

/**
* Interface defining function options.
*/
interface Options {
	/**
	* Insensitivity parameter (default: 0.1).
	*/
	epsilon?: number;

	/**
	* Constant learning rate (default: 0.02).
	*/
	eta0?: number;

	/**
	* Regularization parameter (default: 1e-3).
	*/
	lambda?: number;

	/**
	* String denoting the learning rate to use. Can be `constant`, `pegasos`, or `basic` (default: 'basic').
	*/
	learningRate?: 'constant' | 'pegasos' | 'basic';

	/**
	* String denoting the loss function to use. Can be `squaredError`, `epsilonInsensitive`, or `huber` (default: 'squaredError').
	*/
	loss?: 'squaredError' | 'epsilonInsensitive' | 'huber';

	/**
	* Boolean indicating whether to include an intercept (default: true).
	*/
	intercept?: boolean;
}

interface Model {
	/**
	* Model coefficients / feature weights.
	*
	* @example
	* // Retrieve coefficients:
	* var coefs = accumulator.coefs;
	*/
	readonly coefs: Array<number>;

	/**
	* Update weights given new observations `y` and `x`.
	*
	* @param x - feature vector
	* @param y - response value
	* @throws first argument must have length equal to the number of predictors
	*
	* @example
	* // Update model as observations come in:
	* var y = 3.5;
	* var x = [ 2.3, 1.0, 5.0 ];
	* accumulator( x, y );
	*/
	update( x: NumericArray, y: number ): void;

	/**
	* Predict response for a new observation with features `x`.
	*
	* @param x - feature vector
	* @throws first argument must have length equal to the number of predictors
	* @returns response value
	*
	* @example
	* // Predict new observation:
	* var x = [ 2.3, 5.3, 8.6 ];
	* var yHat = accumulator.predict( x );
	*/
	predict( x: NumericArray ): number;
}

/**
* Online learning for regression using stochastic gradient descent (SGD).
*
* ## Method
*
* The sub-gradient of the loss function is estimated for each datum and the regression model is updated incrementally, with a decreasing learning rate and regularization of the feature weights based on L2 regularization.
*
* ## References
*
* -   Shalev-Shwartz, S., Singer, Y., Srebro, N., & Cotter, A. (2011). Pegasos: Primal estimated sub-gradient solver for SVM. Mathematical Programming, 127(1), 3–30. doi:10.1007/s10107-010-0420-4
*
* @param options - options object
* @param options.epsilon - insensitivity parameter (default: 0.1)
* @param options.eta0 - constant learning rate (default: 0.02)
* @param options.lambda - regularization parameter (default: 1e-3)
* @param options.learningRate - string denoting the learning rate to use. Can be `constant`, `pegasos`, or `basic` (default: 'basic')
* @param options.loss - string denoting the loss function to use. Can be `squaredError`, `epsilonInsensitive`, or `huber` (default: 'squaredError')
* @param options.intercept - boolean indicating whether to include an intercept (default: true)
* @throws must provide valid options
* @returns regression model
*
* @example
* var incrSGDRegression = require( `@stdlib/streams/ml/incr/sgd-regression` );
*
* var accumulator = incrSGDRegression({
*     'intercept': true
*     'lambda': 1e-5
* });
*
* // Update model as observations come in:
* var y = 3.5;
* var x = [ 2.3, 1.0, 5.0 ];
* accumulator( x, y );
*
* // Predict new observation:
* var yHat = accumulator.predict( x );
*
* // Retrieve coefficients:
* var coefs = accumulator.coefs;
*/
declare function incrSGDRegression( options?: Options ): Model;


// EXPORTS //

export = incrSGDRegression;
