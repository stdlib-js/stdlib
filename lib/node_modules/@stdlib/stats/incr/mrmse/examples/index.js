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

var randu = require( '@stdlib/random/base/randu' );
var incrmrmse = require( './../lib' );

var accumulator;
var rmse;
var v1;
var v2;
var i;

// Initialize an accumulator:
accumulator = incrmrmse( 5 );

// For each simulated datum, update the moving root mean squared error...
console.log( '\nValue\tValue\tRMSE\n' );
for ( i = 0; i < 100; i++ ) {
	v1 = ( randu()*100.0 ) - 50.0;
	v2 = ( randu()*100.0 ) - 50.0;
	rmse = accumulator( v1, v2 );
	console.log( '%d\t%d\t%d', v1.toFixed( 3 ), v2.toFixed( 3 ), rmse.toFixed( 3 ) );
}
