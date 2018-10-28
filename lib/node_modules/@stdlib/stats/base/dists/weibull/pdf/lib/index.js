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
* Weibull distribution probability density function (PDF).
*
* @module @stdlib/stats/base/dists/weibull/pdf
*
* @example
* var pdf = require( '@stdlib/stats/base/dists/weibull/pdf' );
*
* var y = pdf( 2.0, 1.0, 0.5 );
* // returns ~0.037
*
* var myPDF = pdf.factory( 7.0, 6.0 );
* y = myPDF( 7.0 );
* // returns ~0.155
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-nonenumerable-read-only-property' );
var pdf = require( './pdf.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( pdf, 'factory', factory );


// EXPORTS //

module.exports = pdf;
