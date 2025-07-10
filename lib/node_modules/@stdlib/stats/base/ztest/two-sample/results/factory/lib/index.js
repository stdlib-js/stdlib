/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Return a constructor for creating a two-sample Z-test results object.
*
* @module @stdlib/stats/base/ztest/two-sample/results/factory
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
* var resultsFactory = require( '@stdlib/stats/base/ztest/two-sample/results/factory' );
*
* var Results = resultsFactory( 'float64' );
*
* var results = new Results();
* // returns <Results>
*
* results.alternative = 'two-sided';
* results.alpha = 0.05;
* results.nullValue = 0.0;
* results.pValue = 0.0132;
* results.statistic = 2.4773;
* results.xmean = 3.7561;
* results.ymean = 3.0129;
* results.ci = new Float64Array( [ 0.1552, 1.3311 ] );
* results.rejected = true;
*
* var str = results.toString();
* // returns <string>
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
