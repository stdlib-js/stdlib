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

/**
* Apply a function to each nested element in an array of arrays and assign the result to a nested element in a new array of arrays.
*
* @module @stdlib/utils/map2d
*
* @example
* var naryFunction = require( '@stdlib/utils/nary-function' );
* var abs = require( '@stdlib/math/base/special/abs' );
* var map2d = require( '@stdlib/utils/map2d' );
*
* var arr = [
*     [ -1, -2, -3 ],
*     [ -4, -5, -6 ]
* ];
*
* var out = map2d( arr, naryFunction( abs, 1 ) );
* // returns [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
