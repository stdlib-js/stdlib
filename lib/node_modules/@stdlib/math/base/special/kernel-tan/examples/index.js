/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var linspace = require( '@stdlib/math/utils/linspace' );
var binomial = require( '@stdlib/random/base/binomial' ).factory;
var PI = require( '@stdlib/constants/math/float64-pi' );
var kernelTan = require( './../lib' );

var x = linspace( -PI/4.0, PI/4.0, 100 );
var rbinom = binomial( 1, 0.5 );

var descr;
var i;
var k;

for ( i = 0; i < x.length; i++ ) {
	k = rbinom();
	descr = ( k === 1 ) ? 'tan(%d) = %d' : '-1/tan(%d) = %d';
	console.log( descr, x[ i ], kernelTan( x[ i ], 0.0, k ) );
}
