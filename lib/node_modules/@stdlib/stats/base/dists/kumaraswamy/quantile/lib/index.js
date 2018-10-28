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
* Evaluate the quantile function for a Kumaraswamy's double bounded distribution.
*
* @module @stdlib/stats/base/dists/kumaraswamy/quantile
*
* @example
* var quantile = require( '@stdlib/stats/base/dists/kumaraswamy/quantile' );
*
* var y = quantile( 0.5, 1.0, 1.0 );
* // returns 0.5
*
* y = quantile( 0.5, 2.0, 4.0 );
* // returns ~0.399
*
* @example
* var factory = require( '@stdlib/stats/base/dists/kumaraswamy/quantile' ).factory;
*
* var quantile = factory( 0.5, 0.5 );
*
* var y = quantile( 0.8 );
* // returns ~0.922
*
* y = quantile( 0.3 );
* // returns ~0.26
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var quantile = require( './quantile.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( quantile, 'factory', factory );


// EXPORTS //

module.exports = quantile;
