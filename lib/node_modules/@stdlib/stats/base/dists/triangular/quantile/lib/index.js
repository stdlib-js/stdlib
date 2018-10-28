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
* Triangular distribution quantile function.
*
* @module @stdlib/stats/base/dists/triangular/quantile
*
* @example
* var quantile = require( '@stdlib/stats/base/dists/triangular/quantile' );
*
* var y = quantile( 0.9, -1.0, 1.0, 0.0 );
* // returns ~0.553
*
* y = quantile( 0.1, -1.0, 1.0, 0.5 );
* // returns ~-0.452
*
* y = quantile( 0.1, -20.0, 0.0, -2.0 );
* // returns -14.0
*
* y = quantile( 0.8, 0.0, 20.0, 0.0 );
* // returns ~11.056
*
* var myquantile = quantile.factory( 2.0, 4.0, 2.5 );
* y = myquantile( 0.4 );
* // returns ~2.658
*
* y = myquantile( 0.8 );
* // returns ~3.225
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var quantile = require( './quantile.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( quantile, 'factory', factory );


// EXPORTS //

module.exports = quantile;
