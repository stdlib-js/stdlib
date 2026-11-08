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

var Float64Array = require( '@stdlib/array/float64' );
var dminheapSiftDown = require( './../lib' );

// Define a min-heap whose root violates the min-heap invariant:
var x = new Float64Array( [ 7.0, 2.0, 3.0, 4.0, 5.0 ] );
console.log( x );

// Sift the root value down toward the leaves in order to restore the min-heap property:
dminheapSiftDown( x.length, 0, x[ 0 ], x, 1 );
console.log( x );
