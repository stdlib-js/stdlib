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
* Compute ranks for the values of an array-like object.
*
* @module @stdlib/stats/ranks
*
* @example
* var ranks = require( '@stdlib/stats/ranks' );
*
* var arr = [ 1.1, 2.0, 3.5, 0.0, 2.4 ];
* var out = ranks( arr );
* // returns [ 2, 3, 5, 1, 4 ]
*
* // Ties are averaged:
* arr = [ 2, 2, 1, 4, 3 ];
* out = ranks ( arr );
* // returns [ 2.5, 2.5, 1, 5, 4 ];
*
* // Missing values are placed last:
* arr = [ null, 2, 2, 1, 4, 3, NaN, NaN ];
* out = ranks( arr );
* // returns [ 6, 2.5, 2.5, 1, 5, 4, 7 ,8 ]
*/

// MODULES //

var ranks = require( './main.js' );


// EXPORTS //

module.exports = ranks;
