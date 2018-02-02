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
* Return the maximum absolute value.
*
* @module @stdlib/math/base/special/maxabs
*
* @example
* var maxabs = require( '@stdlib/math/base/special/maxabs' );
*
* var v = maxabs( 3.14, -4.2 );
* // returns 4.2
*
* v = maxabs( 5.9, 3.14, 4.2 );
* // returns 5.9
*
* v = maxabs( 3.14, NaN );
* // returns NaN
*
* v = maxabs( +0.0, -0.0 );
* // returns +0.0
*/

// MODULES //

var maxabs = require( './maxabs.js' );


// EXPORTS //

module.exports = maxabs;
