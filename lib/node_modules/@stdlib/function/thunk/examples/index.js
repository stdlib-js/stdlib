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

var add = require( '@stdlib/number/float64/base/add' );
var decorateAfter = require( '@stdlib/utils/decorate-after' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var thunk = require( './../lib' );

function log( v ) {
	console.log( v );
}

// Create a PRNG for generating uniformly distributed pseudorandom integers:
var randi = discreteUniform( 100, 1000 );

// Randomly delay evaluation of various thunks...
var i;
for ( i = 0; i < 10; i++ ) {
	setTimeout( decorateAfter( thunk( add, i, i+1 ), 0, log ), randi() );
}
