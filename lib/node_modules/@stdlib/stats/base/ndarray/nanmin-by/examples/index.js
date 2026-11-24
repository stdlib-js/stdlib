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

var bernoulli = require( '@stdlib/random/base/bernoulli' );
var uniform = require( '@stdlib/random/base/uniform' );
var fillBy = require( '@stdlib/ndarray/fill-by' );
var zeros = require( '@stdlib/ndarray/zeros' );
var ndarray2array = require( '@stdlib/ndarray/to-array' );
var nanminBy = require( './../lib' );

function rand() {
	if ( bernoulli( 0.2 ) > 0 ) {
		return NaN;
	}
	return uniform( -50.0, 50.0 );
}

function clbk( value ) {
	return value * 2.0;
}

var opts = {
	'dtype': 'generic'
};

var x = fillBy( zeros( [ 10 ], opts ), rand );
console.log( ndarray2array( x ) );

var v = nanminBy( [ x ], clbk );
console.log( v );
