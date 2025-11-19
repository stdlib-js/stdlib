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

// MODULES //

var struct = require( '@stdlib/dstructs/struct' );


// MAIN //

/**
* Returns a new struct constructor tailored to a specified floating-point data type.
*
* @param {string} dtype - floating-point data type
* @returns {Function} struct constructor
*
* @example
* var Struct = factory( 'float64' );
* // returns <Function>
*
* var s = new Struct();
* // returns <Struct>
*/
function factory( dtype ) {
	var schema = [
		{
			'name': 'rejected',
			'description': 'boolean indicating whether the null hypothesis was rejected',
			'type': 'bool',
			'castingMode': 'none'
		},
		{
			'name': 'alternative',
			'description': 'alternative hypothesis',
			'type': 'int8',
			'castingMode': 'none'
		},
		{
			'name': 'alpha',
			'description': 'significance level',
			'type': dtype,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'pValue',
			'description': 'p-value',
			'type': dtype,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'statistic',
			'description': 'test statistic',
			'type': dtype,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'ci',
			'description': 'confidence interval',
			'type': dtype,
			'length': 2,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'nullValue',
			'description': 'null value',
			'type': dtype,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'sd',
			'description': 'standard error of the mean',
			'type': dtype,
			'castingMode': 'mostly-safe'
		}
	];
	return struct( schema );
}


// EXPORTS //

module.exports = factory;
