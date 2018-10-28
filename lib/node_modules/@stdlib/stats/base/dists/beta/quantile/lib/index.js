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
* Evaluate the quantile function for a beta distribution.
*
* @module @stdlib/stats/base/dists/beta/quantile
*
* @example
* var quantile = require( '@stdlib/stats/base/dists/beta/quantile' );
*
* var y = quantile( 0.8, 2.0, 1.0 );
* // returns ~0.894
*
* y = quantile( 0.5, 4.0, 2.0 );
* // returns ~0.686
*
* @example
* var factory = require( '@stdlib/stats/base/dists/beta/quantile' ).factory;
*
* var quantile = factory( 2.0, 2.0 );
*
* var y = quantile( 0.8 );
* // returns ~0.713
*
* y = quantile( 0.4 );
* // returns ~0.5
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var quantile = require( './quantile.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( quantile, 'factory', factory );


// EXPORTS //

module.exports = quantile;
