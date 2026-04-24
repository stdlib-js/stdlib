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

var uniform = require( '@stdlib/random/array/uniform' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var cdf = require( './../lib' );

var opts = {
	'dtype': 'float64'
};
var q = uniform( 10, 0.0, 12.0, opts );
var r = uniform( 10, 2.0, 20.0, opts );
var v = uniform( 10, 2.0, 10.0, opts );

logEachMap( 'q: %0.4f, r: %0.4f, v: %0.4f, F(x;v): %0.4f', q, r, v, cdf );
