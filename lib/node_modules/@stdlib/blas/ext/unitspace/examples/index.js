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

var ndarray2array = require( '@stdlib/ndarray/to-array' );
var unitspace = require( './../lib' );

// Create a vector of starting values:
var start = unitspace( [ 5 ], 1 );

// Create a grid:
var out = unitspace( [ 5, 5 ], start );
console.log( ndarray2array( out ) );

// Generate values over multiple dimensions:
out = unitspace( [ 5, 5 ], 1, {
	'dims': [ 0, 1 ]
});
console.log( ndarray2array( out ) );

// Generate values over multiple dimensions in column-major order:
out = unitspace( [ 5, 5 ], 1, {
	'dims': [ 0, 1 ],
	'order': 'column-major'
});
console.log( ndarray2array( out ) );
