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
var Complex64Vector = require( '@stdlib/ndarray/vector/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var cscal = require( './../lib' );

var opts = {
	'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 10, 0, 100, opts ) );
console.log( ndarray2array( x ) );

var alpha = scalar2ndarray( new Complex64( 2.0, 0.0 ), {
	'dtype': 'complex64'
});

var out = cscal( [ x, alpha ] );
console.log( ndarray2array( out ) );
