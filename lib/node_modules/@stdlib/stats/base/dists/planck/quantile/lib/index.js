/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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
* Planck distribution quantile function.
*
* @module @stdlib/stats/base/dists/planck/quantile
*
* @example
* var quantile = require( '@stdlib/stats/base/dists/planck/quantile' );
*
* var y = quantile( 0.8, 0.4 );
* // returns 4
*
* y = quantile( 0.5, 1.4 );
* // returns 0
*
* var myquantile = quantile.factory( 0.4 );
* y = myquantile( 0.4 );
* // returns 1
*
* y = myquantile( 0.8 );
* // returns 4
*
* y = myquantile( 1.0 );
* // returns Infinity
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
