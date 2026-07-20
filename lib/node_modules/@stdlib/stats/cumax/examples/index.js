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

var uniform = require( '@stdlib/random/uniform' );
var getDType = require( '@stdlib/ndarray/dtype' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cumax = require( './../lib' );

// Generate an array of random numbers:
var x = uniform( [ 5, 5 ], 0.0, 20.0 );
console.log( ndarray2array( x ) );

// Perform operation:
var y = cumax( x, {
	'dims': [ 0 ]
});

// Resolve the output array data type:
var dt = getDType( y );
console.log( dt );

// Print the results:
console.log( ndarray2array( y ) );
