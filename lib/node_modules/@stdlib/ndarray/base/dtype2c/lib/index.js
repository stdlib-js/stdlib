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
* Return the C data type associated with a provided data type value.
*
* @module @stdlib/ndarray/base/dtype2c
*
* @example
* var dtype2c = require( '@stdlib/ndarray/base/dtype2c' );
*
* var out = dtype2c( 'float64' );
* // returns 'double'
*
* out = dtype2c( 'generic' );
* // returns null
*/

// MODULES //

var dtype2c = require( './main.js' );


// EXPORTS //

module.exports = dtype2c;
