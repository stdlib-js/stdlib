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
* Kumaraswamy's double bounded distribution mode.
*
* @module @stdlib/stats/base/dists/kumaraswamy/mode
*
* @example
* var mode = require( '@stdlib/stats/base/dists/kumaraswamy/mode' );
*
* var v = mode( 2.0, 1.5 );
* // returns ~0.707
*
* v = mode( 4.0, 12.0 );
* // returns ~0.503
*
* v = mode( 16.0, 8.0 );
* // returns ~0.875
*/

// MODULES //

var mode = require( './mode.js' );


// EXPORTS //

module.exports = mode;
