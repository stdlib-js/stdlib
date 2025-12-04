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

var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var pickArguments = require( '@stdlib/utils/pick-arguments' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var MAX_UINT16 = require( '@stdlib/constants/uint16/max' );
var fromWord = require( './../lib' );

// Generate an array of random numbers:
var word = discreteUniform( 1000, 0.0, MAX_UINT16 );

// Create half-precision floating-point numbers from unsigned integers...
logEachMap( 'word: %d => float16: %f', word, pickArguments( fromWord, [ 0 ] ) );
