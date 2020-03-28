/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Create an iterator which iteratively computes the angle in the plane (in radians) between the positive x-axis and the ray from `(0,0)` to the point `(x,y)`.
*
* @module @stdlib/math/iter/special/atan2
*
* @example
* var uniform = require( '@stdlib/random/iter/uniform' );
* var iterAtan2 = require( '@stdlib/math/iter/special/atan2' );
*
* var x = uniform( -2.0, 2.0 );
* var y = uniform( -2.0, 2.0 );
*
* var iter = iterAtan2( y, x );
*
* var r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* r = iter.next().value;
* // returns <number>
*
* // ...
*/

// MODULES //

var iterator = require( './main.js' );


// EXPORTS //

module.exports = iterator;
