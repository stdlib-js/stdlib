/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var gfill = require( '@stdlib/blas/ext/base/gfill' );
var zeros2d = require( './../lib' );

// Create a zero-filled array:
var arr = zeros2d( [ 5, 10 ] );

// Fill nested arrays with the same value...
gfill( arr[ 0 ].length, 1.0, arr[ 0 ], 1 );
gfill( arr[ 1 ].length, 2.0, arr[ 1 ], 1 );
gfill( arr[ 2 ].length, 3.0, arr[ 2 ], 1 );
gfill( arr[ 3 ].length, 4.0, arr[ 3 ], 1 );
gfill( arr[ 4 ].length, 5.0, arr[ 4 ], 1 );

console.log( arr );
// => [ [ 1.0, 1.0, ... ], [ 2.0, 2.0, ... ], [ 3.0, 3.0, ... ], [ 4.0, 4.0, ... ], [ 5.0, 5.0, ... ] ]
