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
* Pareto (Type I) distribution quantile function.
*
* @module @stdlib/stats/base/dists/pareto-type1/quantile
*
* @example
* var quantile = require( '@stdlib/stats/base/dists/pareto-type1/quantile' );
*
* var y = quantile( 0.8, 2.0, 1.0 );
* // returns ~2.236
*
* y = quantile( 0.8, 1.0, 10.0 );
* // returns ~50.0
*
* y = quantile( 0.1, 1.0, 10.0 );
* // returns ~10.541
*
* var myquantile = quantile.factory( 2.5, 0.5 );
* y = myquantile( 0.5 );
* // returns ~0.66
*
* y = myquantile( 0.8 );
* // returns ~0.952
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var quantile = require( './quantile.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( quantile, 'factory', factory );


// EXPORTS //

module.exports = quantile;
