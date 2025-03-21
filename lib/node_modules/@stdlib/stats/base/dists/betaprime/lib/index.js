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
* @namespace betaprime
*/
var betaprime = {};

/**
* @name cdf
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/cdf}
*/
setReadOnly( betaprime, 'cdf', require( '@stdlib/stats/base/dists/betaprime/cdf' ) );

/**
* @name BetaPrime
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/ctor}
*/
setReadOnly( betaprime, 'BetaPrime', require( '@stdlib/stats/base/dists/betaprime/ctor' ) );

/**
* @name kurtosis
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/kurtosis}
*/
setReadOnly( betaprime, 'kurtosis', require( '@stdlib/stats/base/dists/betaprime/kurtosis' ) );

/**
* @name logcdf
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/logcdf}
*/
setReadOnly( betaprime, 'logcdf', require( '@stdlib/stats/base/dists/betaprime/logcdf' ) );

/**
* @name logpdf
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/logpdf}
*/
setReadOnly( betaprime, 'logpdf', require( '@stdlib/stats/base/dists/betaprime/logpdf' ) );

/**
* @name mean
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/mean}
*/
setReadOnly( betaprime, 'mean', require( '@stdlib/stats/base/dists/betaprime/mean' ) );

/**
* @name mode
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/mode}
*/
setReadOnly( betaprime, 'mode', require( '@stdlib/stats/base/dists/betaprime/mode' ) );

/**
* @name pdf
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/pdf}
*/
setReadOnly( betaprime, 'pdf', require( '@stdlib/stats/base/dists/betaprime/pdf' ) );

/**
* @name quantile
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/quantile}
*/
setReadOnly( betaprime, 'quantile', require( '@stdlib/stats/base/dists/betaprime/quantile' ) );

/**
* @name skewness
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/skewness}
*/
setReadOnly( betaprime, 'skewness', require( '@stdlib/stats/base/dists/betaprime/skewness' ) );

/**
* @name stdev
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/stdev}
*/
setReadOnly( betaprime, 'stdev', require( '@stdlib/stats/base/dists/betaprime/stdev' ) );

/**
* @name variance
* @memberof betaprime
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/betaprime/variance}
*/
setReadOnly( betaprime, 'variance', require( '@stdlib/stats/base/dists/betaprime/variance' ) );


// EXPORTS //

module.exports = betaprime;
