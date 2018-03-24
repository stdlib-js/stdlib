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
* Cosine distribution constructor.
*
* @module @stdlib/stats/base/dists/cosine/ctor
*
* @example
* var Cosine = require( '@stdlib/stats/base/dists/cosine/ctor' );
*
* var cosine = new Cosine( 1.0, 1.0 );
*
* var y = cosine.cdf( 1.5 );
* // returns ~0.909
*
* var mean = cosine.mean;
* // returns 1.0
*/

// MODULES //

var ctor = require( './ctor.js' );


// EXPORTS //

module.exports = ctor;
