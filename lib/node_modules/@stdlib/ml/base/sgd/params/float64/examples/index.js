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

var Float64Array = require( '@stdlib/array/float64' );
var Params = require( './../lib' );

var params = new Params({
	'penaltyParams': new Float64Array( [ 2.5, 0.0 ] ),
	'learningRateParams': new Float64Array( [ 0.01, 0.0 ] ),
	'lossFunctionParams': new Float64Array( [ 0.0 ] ),
	'intercept': 0.0,
	'maxIter': 500,
	'penalty': 'l2',
	'learningRate': 'constant',
	'lossFunction': 'hinge',
	'fitIntercept': true
});

var str = params.toString();
console.log( str );
