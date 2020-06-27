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
* Adjust supplied p-values for multiple comparisons via a specified method.
*
* @module @stdlib/stats/padjust
*
* @example
* var padjust = require( '@stdlib/stats/padjust' );
*
* var pvalues = [ 0.008, 0.03, 0.123, 0.6, 0.2 ];
* var out = padjust( pvalues, 'bh' );
* // returns [ 0.04, 0.075, ~0.205, 0.6, 0.25 ]
*/

// MODULES //

var padjust = require( './main.js' );


// EXPORTS //

module.exports = padjust;
