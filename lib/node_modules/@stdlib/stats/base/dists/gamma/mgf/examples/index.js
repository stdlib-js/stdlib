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

var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var mgf = require( './../lib' );

var opts = {
	'dtype': 'float64'
};
var t = uniform( 10, 0.0, 3.0, opts );
var alpha = uniform( 10, 0.0, 5.0, opts );
var beta = uniform( 10, 0.0, 5.0, opts );

logEachMap( 't: %0.4f, α: %0.4f, β: %0.4f, M_X(t;α,β): %0.4f', t, alpha, beta, mgf );
