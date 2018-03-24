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
* Negative binomial distribution constructor.
*
* @module @stdlib/stats/base/dists/negative-binomial/ctor
*
* @example
* var NegativeBinomial = require( '@stdlib/stats/base/dists/negative-binomial/ctor' );
*
* var nbinomial = new NegativeBinomial( 7.5, 0.2 );
*
* var y = nbinomial.cdf( 12.0 );
* // returns ~0.047
*
* var mode = nbinomial.mode;
* // returns 26.0
*/

// MODULES //

var ctor = require( './ctor.js' );


// EXPORTS //

module.exports = ctor;
