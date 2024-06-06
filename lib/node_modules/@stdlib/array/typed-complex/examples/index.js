/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var gfillBy = require( '@stdlib/blas/ext/base/gfill-by' );
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var reinterpret128 = require( '@stdlib/strided/base/reinterpret-complex128' );
var complexarray = require( './../lib' );

function rand() {
	var re = discreteUniform( -10, 10 );
	var im = discreteUniform( -10, 10 );
	return new Complex128( re, im );
}

// Create a new complex number typed array:
var arr = complexarray( 100, 'complex128' );

// Fill the array with random complex numbers:
gfillBy( arr.length, arr, 1, rand );

// Reinterpret the complex number array as a `Float64Array`:
var view = reinterpret128( arr, 0 );

// View the results:
console.log( view );
