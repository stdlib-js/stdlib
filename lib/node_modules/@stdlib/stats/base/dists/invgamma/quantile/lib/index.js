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
* Inverse gamma distribution quantile function.
*
* @module @stdlib/stats/base/dists/invgamma/quantile
*
* @example
* var quantile = require( '@stdlib/stats/base/dists/invgamma/quantile' );
*
* var y = quantile( 0.8, 1.0, 1.0 );
* // returns ~4.481
*
* var myquantile = quantile.factory( 2.0, 2.0 );
* y = myquantile( 0.8 );
* // returns ~2.426
*
* y = myquantile( 0.4 );
* // returns ~0.989
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var quantile = require( './quantile.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( quantile, 'factory', factory );


// EXPORTS //

module.exports = quantile;
