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
* Return the description for a specified data type.
*
* @module @stdlib/ndarray/base/dtype-desc
*
* @example
* var dtypeDesc = require( '@stdlib/ndarray/base/dtype-desc' );
*
* var out = dtypeDesc( 'float64' );
* // returns '...'
*
* out = dtypeDesc( 'generic' );
* // returns '...'
*
* @example
* var dtypeDesc = require( '@stdlib/ndarray/base/dtype-desc' );
*
* var obj = dtypeDesc();
* // returns {...}
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
