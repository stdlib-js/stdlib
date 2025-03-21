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

var gfill = require( '@stdlib/blas/ext/base/gfill' ).ndarray;
var zeros = require( './../lib' );

// Create a zero-filled array:
var arr = zeros( 10 );

// Fill element pairs with the same value...
gfill( 2, 1.0, arr, 1, 0 );
gfill( 2, 2.0, arr, 1, 2 );
gfill( 2, 3.0, arr, 1, 4 );
gfill( 2, 4.0, arr, 1, 6 );
gfill( 2, 5.0, arr, 1, 8 );

console.log( arr );
// => [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0, 4.0, 4.0, 5.0, 5.0 ]
