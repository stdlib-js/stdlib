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

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils/define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace chisquare
*/
var chisquare = {};

/**
* @name cdf
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/cdf}
*/
setReadOnly( chisquare, 'cdf', require( '@stdlib/stats/base/dists/chisquare/cdf' ) );

/**
* @name ChiSquare
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/ctor}
*/
setReadOnly( chisquare, 'ChiSquare', require( '@stdlib/stats/base/dists/chisquare/ctor' ) );

/**
* @name entropy
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/entropy}
*/
setReadOnly( chisquare, 'entropy', require( '@stdlib/stats/base/dists/chisquare/entropy' ) );

/**
* @name kurtosis
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/kurtosis}
*/
setReadOnly( chisquare, 'kurtosis', require( '@stdlib/stats/base/dists/chisquare/kurtosis' ) );

/**
* @name logpdf
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/logpdf}
*/
setReadOnly( chisquare, 'logpdf', require( '@stdlib/stats/base/dists/chisquare/logpdf' ) );

/**
* @name mean
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/mean}
*/
setReadOnly( chisquare, 'mean', require( '@stdlib/stats/base/dists/chisquare/mean' ) );

/**
* @name median
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/median}
*/
setReadOnly( chisquare, 'median', require( '@stdlib/stats/base/dists/chisquare/median' ) );

/**
* @name mgf
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/mgf}
*/
setReadOnly( chisquare, 'mgf', require( '@stdlib/stats/base/dists/chisquare/mgf' ) );

/**
* @name mode
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/mode}
*/
setReadOnly( chisquare, 'mode', require( '@stdlib/stats/base/dists/chisquare/mode' ) );

/**
* @name pdf
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/pdf}
*/
setReadOnly( chisquare, 'pdf', require( '@stdlib/stats/base/dists/chisquare/pdf' ) );

/**
* @name quantile
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/quantile}
*/
setReadOnly( chisquare, 'quantile', require( '@stdlib/stats/base/dists/chisquare/quantile' ) );

/**
* @name skewness
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/skewness}
*/
setReadOnly( chisquare, 'skewness', require( '@stdlib/stats/base/dists/chisquare/skewness' ) );

/**
* @name stdev
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/stdev}
*/
setReadOnly( chisquare, 'stdev', require( '@stdlib/stats/base/dists/chisquare/stdev' ) );

/**
* @name variance
* @memberof chisquare
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chisquare/variance}
*/
setReadOnly( chisquare, 'variance', require( '@stdlib/stats/base/dists/chisquare/variance' ) );


// EXPORTS //

module.exports = chisquare;
