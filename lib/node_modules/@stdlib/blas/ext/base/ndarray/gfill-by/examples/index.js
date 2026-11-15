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

var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var zeros = require( '@stdlib/ndarray/zeros' );
var gfillBy = require( './../lib' );

var opts = {
	'dtype': 'generic'
};

var x = zeros( [ 10 ], opts );
console.log( ndarray2array( x ) );

var start = scalar2ndarray( 0, opts );
var end = scalar2ndarray( 10, opts );

gfillBy( [ x, start, end ], discreteUniform( -100, 100 ) );
console.log( ndarray2array( x ) );
