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
			'name': 'replicates',
			'description': 'number of times the data was clustered with different initial centroids',
			'type': 'int64',
			'castingMode': 'safe'
		},
		{
			'name': 'replicate',
			'description': 'index of the initial centroids which produced the best result',
			'type': 'int64',
			'castingMode': 'safe'
		},
		{
			'name': 'metric',
			'description': 'distance metric',
			'type': 'int8',
			'castingMode': 'none'
		},
		{
			'name': 'iterations',
			'description': 'number of iterations for best results',
			'type': 'int64',
			'castingMode': 'safe'
		},
		{
			'name': 'algorithm',
			'description': 'clustering algorithm',
			'type': 'int8',
			'castingMode': 'none'
		},
		{
			'name': 'inertia',
			'description': 'sum of squared distances to the closest centroid for all samples',
			'type': dtype,
			'castingMode': 'mostly-safe'
		},
		{
			'name': 'k',
			'description': 'number of clusters',
			'type': 'int64',
			'castingMode': 'safe'
		},
		{
			'name': 'samples',
			'description': 'number of samples',
			'type': 'int64',
			'castingMode': 'safe'
		},
		{
			'name': 'features',
			'description': 'number of features',
			'type': 'int64',
			'castingMode': 'safe'
		}
	];
	return struct( schema );
}


// EXPORTS //

module.exports = factory;
