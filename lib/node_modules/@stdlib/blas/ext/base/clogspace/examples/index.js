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

var Complex64Array = require( '@stdlib/array/complex64' );
var Complex64 = require( '@stdlib/complex/float32/ctor' );
var logEach = require( '@stdlib/console/log-each' );
var clogspace = require( './../lib' );

var x = new Complex64Array( 6 );

var strt = new Complex64( 0.0, 0.0 );
var stp = new Complex64( 5.0, 0.0 );

clogspace( x.length, 10.0, strt, stp, true, x, 1 );
logEach( '%s', x );
