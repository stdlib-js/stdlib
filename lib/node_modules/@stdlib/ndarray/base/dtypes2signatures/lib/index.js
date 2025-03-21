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
* Transform a list of array argument data types into a list of signatures.
*
* @module @stdlib/ndarray/base/dtypes2signatures
*
* @example
* var dtypes2signatures = require( '@stdlib/ndarray/base/dtypes2signatures' );
*
* var dtypes = [
*     'float64', 'float64',
*     'float32', 'float32'
* ];
*
* var sigs = dtypes2signatures( dtypes, 2, 0 );
* // returns [ '(float64) => (float64)', '(float32) => (float32)' ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
