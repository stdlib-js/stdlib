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
var Complex64Array = require( '@stdlib/array/complex64' );
var logEach = require( '@stdlib/console/log-each' );
var zeros = require( '@stdlib/array/zeros' );
var ccopyWithin = require( './../lib' );

var xbuf = discreteUniform( 20, 0, 500, {
	'dtype': 'float32'
});
var x = new Complex64Array( xbuf );
logEach( '%s', x );

var w = zeros( 10, 'complex64' );

ccopyWithin( 10, 5, 0, 3, x, 1, w, 1 );
logEach( '%s', x );
