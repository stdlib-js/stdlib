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
* Beta distribution constructor.
*
* @module @stdlib/stats/base/dists/beta/ctor
*
* @example
* var Beta = require( '@stdlib/stats/base/dists/beta/ctor' );
*
* var beta = new Beta( 1.0, 1.0 );
*
* var y = beta.cdf( 0.8 );
* // returns 0.8
*
* var mu = beta.mean;
* // returns 0.5
*/

// MODULES //

var ctor = require( './ctor.js' );


// EXPORTS //

module.exports = ctor;
