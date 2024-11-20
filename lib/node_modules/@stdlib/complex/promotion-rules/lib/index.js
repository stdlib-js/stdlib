/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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
* Return the complex number data type with the smallest size and closest "kind" to which data types can be safely cast.
*
* @module @stdlib/complex/promotion-rules
*
* @example
* var promotionRules = require( '@stdlib/complex/promotion-rules' );
*
* var table = promotionRules();
* // returns {...}
*
* var dt = promotionRules( 'complex128', 'complex64' );
* // returns 'complex128'
*
* dt = promotionRules( 'complex128', 'foo' );
* // returns null
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
