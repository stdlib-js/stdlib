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
* Return the minimum and maximum values.
*
* @module @stdlib/math/base/special/minmax
*
* @example
* var minmax = require( '@stdlib/math/base/special/minmax' );
*
* var v = minmax( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* v = minmax( 5.9, 3.14, 4.2 );
* // returns [ 3.14, 5.9 ]
*
* v = minmax( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* v = minmax( +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*
* v = minmax( 3.14 );
* // returns [ 3.14, 3.14 ]
*/

// MODULES //

var minmax = require( './main.js' );


// EXPORTS //

module.exports = minmax;
