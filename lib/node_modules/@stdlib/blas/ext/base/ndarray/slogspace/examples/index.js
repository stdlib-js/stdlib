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

var discreteUniform = require( '@stdlib/random/discrete-uniform' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var slogspace = require( './../lib' );

var opts = {
	'dtype': 'float32'
};

var x = discreteUniform( [ 10 ], -100, 100, opts );
console.log( ndarray2array( x ) );

var base = scalar2ndarray( 10.0, opts );
console.log( 'Base: %d', ndarraylike2scalar( base ) );

var strt = scalar2ndarray( 0.0, opts );
console.log( 'Start: %d', ndarraylike2scalar( strt ) );

var stp = scalar2ndarray( 9.0, opts );
console.log( 'Stop: %d', ndarraylike2scalar( stp ) );

var endpoint = scalar2ndarray( true, {
	'dtype': 'bool'
});
console.log( 'Endpoint: %s', ndarraylike2scalar( endpoint ) );

slogspace( [ x, base, strt, stp, endpoint ] );
console.log( ndarray2array( x ) );
