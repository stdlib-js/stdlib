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

var nancovariance = require( './../lib' );

var acc = nancovariance();

var dataX = [ 2.0, 2.0, NaN, 3.0, 5.0 ];
var dataY = [ 1.0, 5.0, 4.0, NaN, 5.0 ];

var i;
var cov;
for ( i = 0; i < dataX.length; i++ ) {
	cov = acc( dataX[ i ], dataY[ i ] );
	console.log( 'x=%s, y=%s, cov=%s', dataX[ i ], dataY[ i ], ( cov === null ) ? 'null' : cov.toString() );
}

console.log( '\nFinal sample covariance:', acc() );
