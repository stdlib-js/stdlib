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
var exp2 = require( '@stdlib/math/base/special/exp2' );
var minSignedIntegerDataType = require( './../lib' );

// Generate random powers:
var exp = discreteUniform( 100, 0, 40, {
	'dtype': 'generic'
});

// Determine the minimum data type for each generated value...
var v;
var i;
for ( i = 0; i < exp.length; i++ ) {
	v = exp2( exp[ i ] );
	console.log( 'min(%d) => %s', v, minSignedIntegerDataType( v ) );
}
