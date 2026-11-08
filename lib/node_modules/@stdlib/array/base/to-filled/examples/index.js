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
var logEachMap = require( '@stdlib/console/log-each-map' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var papply = require( '@stdlib/utils/papply' );
var toFilled = require( './../lib' );

// Define an array:
var opts = {
	'dtype': 'generic'
};
var x = discreteUniform( 10, -100, 100, opts );

// Define an array containing random fill values:
var values = discreteUniform( 100, -10000, 10000, opts );

// Define arrays containing random fill ranges:
var starts = discreteUniform( values.length, 0, x.length-1, opts );
var ends = discreteUniform( values.length, 1, x.length, opts );

// Randomly fill ranges of the input array:
logEachMap( 'fill with %d in [%d, %d) => x = [%s]', values, starts, ends, naryFunction( papply( toFilled, x ), 3 ) );
