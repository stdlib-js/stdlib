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

var Float32Array = require( '@stdlib/array/float32' );
var Results = require( './../lib' );

var results = new Results({
	'rejected': true,
	'alpha': 0.05,
	'pValue': 0.3364,
	'statistic': 11.7586,
	'nullValue': 0.0,
	'sd': 0.4563,
	'ci': new Float32Array( [ 9.9983, 11.4123 ] ),
	'alternative': 'two-sided'
});

var str = results.toString();
console.log( str );
