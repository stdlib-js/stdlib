/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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
* Wilcoxon signed rank test statistic probability density function (PDF).
*
* @module @stdlib/stats/base/dists/signrank/pdf
*
* @example
* var pdf = require( '@stdlib/stats/base/dists/signrank/pdf' );
*
* var y = pdf( 7.0, 9 );
* // returns ~0.01
*
* var mypdf = pdf.factory( 8 );
* y = mypdf( 4.0 );
* // returns ~0.008
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pdf = require( './pdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( pdf, 'factory', factory );


// EXPORTS //

module.exports = pdf;
