/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
var ns = require( './../lib' );

// Create a zero-filled array:
var zeros = ns.zeros( 5 );
console.log( zeros );
// => [ 0, 0, 0, 0, 0 ]

// Create an array filled with a specific value:
var filled = ns.filled( 7, 4 );
console.log( filled );
// => [ 7, 7, 7, 7 ]

// Create a linearly spaced array:
var linear = ns.linspace( 0, 1, 5 );
console.log( linear );
// => [ 0, 0.25, 0.5, 0.75, 1 ]

// Create a two-dimensional array:
var arr2d = ns.ones2d( [ 2, 3 ] );
console.log( arr2d );
// => [ [ 1, 1, 1 ], [ 1, 1, 1 ] ]

// Map a function over a 2D array:
var squared = ns.map2d( arr2d, [ 2, 3 ], randu );
console.log( squared );
// e.g., => [ [ ~0.123, ~0.789, ~0.456 ], [ ~0.321, ~0.654, ~0.987 ] ]
