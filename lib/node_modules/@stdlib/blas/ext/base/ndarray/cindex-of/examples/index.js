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
var scalar2ndarray = require( '@stdlib/ndarray/from-scalar' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var ndarraylike2scalar = require( '@stdlib/ndarray/ndarraylike2scalar' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var cindexOf = require( './../lib' );

var opts = {
	'dtype': 'float32'
};

var x = new Complex64Vector( discreteUniform( 20, -50, 50, opts ) );
console.log( ndarray2array( x ) );

var searchElement = scalar2ndarray( new Complex64( 2.0, 3.0 ), {
	'dtype': 'complex64'
});
console.log( 'Search Element:', ndarraylike2scalar( searchElement ) );

var fromIndex = scalar2ndarray( 0, {
	'dtype': 'generic'
});
console.log( 'From Index:', ndarraylike2scalar( fromIndex ) );

var idx = cindexOf( [ x, searchElement, fromIndex ] );
console.log( idx );
