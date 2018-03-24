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
* F distribution constructor.
*
* @module @stdlib/stats/base/dists/f/ctor
*
* @example
* var F = require( '@stdlib/stats/base/dists/f/ctor' );
*
* var f = new F( 1.0, 1.0 );
*
* var y = f.cdf( 0.8 );
* // returns ~0.465
*
* var mode = f.mode;
* // returns NaN
*/

// MODULES //

var ctor = require( './ctor.js' );


// EXPORTS //

module.exports = ctor;
