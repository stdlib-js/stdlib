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
var zeroTo = require( './../lib' );

// Create a new ndarray:
var x = zeroTo( [ 5, 5 ], {
	'dtype': 'generic'
});
console.log( ndarray2array( x ) );

// Generate values over a specific dimension:
x = zeroTo( [ 5, 5 ], {
	'dtype': 'generic',
	'dims': [ 0 ]
});
console.log( ndarray2array( x ) );

// Generate values over all dimensions:
x = zeroTo( [ 5, 5 ], {
	'dtype': 'generic',
	'dims': [ 0, 1 ]
});
console.log( ndarray2array( x ) );
