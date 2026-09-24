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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Complex128Matrix = require( '@stdlib/ndarray/matrix/complex128' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ztriu = require( './../lib' );

var opts = {
	'dtype': 'float64'
};

var A = new Complex128Matrix( discreteUniform( 5*5*2, -50, 50, opts ).buffer, 0, 5, 5 );
console.log( ndarray2array( A ) );

var B = new Complex128Matrix( discreteUniform( 5*5*2, -50, 50, opts ).buffer, 0, 5, 5 );
console.log( ndarray2array( B ) );

var k = scalar2ndarray( 0, {
	'dtype': 'generic'
});

var out = ztriu( [ A, B, k ] );
console.log( ndarray2array( out ) );
