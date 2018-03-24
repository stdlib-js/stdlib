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
* Gamma distribution constructor.
*
* @module @stdlib/stats/base/dists/gamma/ctor
*
* @example
* var Gamma = require( '@stdlib/stats/base/dists/gamma/ctor' );
*
* var gamma = new Gamma( 1.0, 1.0 );
*
* var y = gamma.cdf( 0.8 );
* // returns ~0.551
*
* var mode = gamma.mode;
* // returns 0.0
*/

// MODULES //

var ctor = require( './ctor.js' );


// EXPORTS //

module.exports = ctor;
