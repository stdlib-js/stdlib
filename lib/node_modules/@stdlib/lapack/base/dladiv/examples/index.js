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

var Float64Array = require( '@stdlib/array/float64' );
var dladiv = require( './../lib' );

var P = new Float64Array( 1 );
var Q = new Float64Array( 1 );
dladiv( 2.0, 1.0, 3.0, 4.0, P, Q );
console.log( '(2+i)/(3+4i) =', P[ 0 ], '+', Q[ 0 ], 'i' );
