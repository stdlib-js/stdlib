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

/**
* Locally-weighted polynomial regression via the LOWESS algorithm.
*
* @module @stdlib/stats/lowess
*
* @example
* var lowess = require( '@stdlib/stats/lowess' );
*
* var x = [
*     4, 4, 7, 7, 8, 9, 10, 10, 10, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13, 14,
*     14, 14, 14, 15, 15, 15, 16, 16, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 20,
*     20, 20, 20, 20, 22, 23, 24, 24, 24, 24, 25
* ];
* var y = [
*     2, 10, 4, 22, 16, 10, 18, 26, 34, 17, 28, 14, 20, 24, 28, 26, 34, 34, 46,
*     26, 36, 60, 80, 20, 26, 54, 32, 40, 32, 40, 50, 42, 56, 76, 84, 36, 46, 68,
*     32, 48, 52, 56, 64, 66, 54, 70, 92, 93, 120, 85
* ];
*
* var out = lowess( x, y );
* /* returns
*     {
*         'x': [
*             4,
*             4,
*             7,
*             7,
*             ...,
*             24,
*             24,
*             24,
*             25
*         ],
*         'y': [
*             ~4.857,
*             ~4.857,
*             ~13.1037,
*             ~13.1037,
*             ...,
*             ~79.102,
*             ~79.102,
*             ~79.102,
*             ~84.825
*         ]
*     }
* *\/
*/

// MODULES //

var lowess = require( './main.js' );


// EXPORTS //

module.exports = lowess;
