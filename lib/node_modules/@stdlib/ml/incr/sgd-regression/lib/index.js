/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

/**
* Online learning for regression using stochastic gradient descent (SGD).
*
* @module @stdlib/ml/incr/sgd-regression
*
* @example
* var incrSGDRegression = require( '@stdlib/ml/incr/sgd-regression' );
*
* var accumulator = incrSGDRegression({
*     'intercept': true
*     'lambda': 1e-5
* });
*
* var y = 3.5;
* var x = [ 2.3, 1.0, 5.0 ];
* accumulator( x, y );
*/

// MODULES //

var incrSGDRegression = require( './main.js' );


// EXPORTS //

module.exports = incrSGDRegression;
