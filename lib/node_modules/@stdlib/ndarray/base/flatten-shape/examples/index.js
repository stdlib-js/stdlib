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
var zip = require( '@stdlib/array/base/zip' );
var logEachMap = require( '@stdlib/console/log-each-map' );
var flattenShape = require( './../lib' );

var opts = {
	'dtype': 'int32'
};
var d1 = discreteUniform( 100, 1, 10, opts );
var d2 = discreteUniform( d1.length, 1, 10, opts );
var d3 = discreteUniform( d1.length, 1, 10, opts );
var d4 = discreteUniform( d1.length, 1, 10, opts );

var depths = discreteUniform( d1.length, 0, 3, opts );
var shapes = zip( [ d1, d2, d3, d4 ] );

logEachMap( 'shape: (%s). depth: %d. flattened: (%s).', shapes, depths, flattenShape );
