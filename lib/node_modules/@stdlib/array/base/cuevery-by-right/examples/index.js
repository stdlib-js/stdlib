/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var cueveryByRight = require( './../lib' );

function isPositive( value ) {
	return ( value > 0 );
}

// Create an array of random values:
var x = discreteUniform( 10, -10, 10 );
console.log( x );

// Cumulatively test whether every array element passes a test, while iterating from right-to-left:
var out = cueveryByRight( x, isPositive );
console.log( out );
