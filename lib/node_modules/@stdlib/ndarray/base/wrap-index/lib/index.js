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
* Wrap an index on the interval `[0,max]`.
*
* @module @stdlib/ndarray/base/wrap-index
*
* @example
* var wrapIndex = require( '@stdlib/ndarray/base/wrap-index' );
*
* var idx = wrapIndex( -1, 10 );
* // returns 10
*
* idx = wrapIndex( 14, 10 );
* // returns 3
*
* idx = wrapIndex( 6, 10 );
* // returns 6
*/

// MODULES //

var wrapIndex = require( './main.js' );


// EXPORTS //

module.exports = wrapIndex;
