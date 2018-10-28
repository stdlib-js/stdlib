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
* Evaluate the probability density function (PDF) for a Pareto (Type I) distribution.
*
* @module @stdlib/stats/base/dists/pareto-type1/pdf
*
* @example
* var pdf = require( '@stdlib/stats/base/dists/pareto-type1/pdf' );
*
* var y = pdf( 4.0, 1.0, 1.0 );
* // returns ~0.044
*
* y = pdf( 20.0, 1.0, 10.0 );
* // returns 0.025
*
* y = pdf( 7.0, 2.0, 6.0 );
* // returns ~0.21
*
* var mypdf = pdf.factory( 0.5, 0.5 );
*
* y = mypdf( 0.8 );
* // returns ~0.494
*
* y = mypdf( 2.0 );
* // returns ~0.125
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pdf = require( './pdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( pdf, 'factory', factory );


// EXPORTS //

module.exports = pdf;
