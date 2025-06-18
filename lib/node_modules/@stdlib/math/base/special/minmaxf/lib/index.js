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

/**
* Return the minimum and maximum of two single-precision floating-point numbers.
*
* @module @stdlib/math/base/special/minmaxf
*
* @example
* var minmaxf = require( '@stdlib/math/base/special/minmaxf' );
*
* var v = minmaxf( 3.14, 4.2 );
* // returns [ 3.14, 4.2 ]
*
* v = minmaxf( 3.14, NaN );
* // returns [ NaN, NaN ]
*
* v = minmaxf( +0.0, -0.0 );
* // returns [ -0.0, 0.0 ]
*
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var assign = require( './assign.js' );
var minmaxf = require( './main.js' );


// MAIN //

setReadOnly( minmaxf, 'assign', assign );


// EXPORTS //

module.exports = minmaxf;
