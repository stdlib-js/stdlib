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
* @namespace weibull
*/
var weibull = {};

/**
* @name cdf
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/cdf}
*/
setReadOnly( weibull, 'cdf', require( '@stdlib/stats/base/dists/weibull/cdf' ) );

/**
* @name Weibull
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/ctor}
*/
setReadOnly( weibull, 'Weibull', require( '@stdlib/stats/base/dists/weibull/ctor' ) );

/**
* @name entropy
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/entropy}
*/
setReadOnly( weibull, 'entropy', require( '@stdlib/stats/base/dists/weibull/entropy' ) );

/**
* @name kurtosis
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/kurtosis}
*/
setReadOnly( weibull, 'kurtosis', require( '@stdlib/stats/base/dists/weibull/kurtosis' ) );

/**
* @name logcdf
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/logcdf}
*/
setReadOnly( weibull, 'logcdf', require( '@stdlib/stats/base/dists/weibull/logcdf' ) );

/**
* @name logpdf
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/logpdf}
*/
setReadOnly( weibull, 'logpdf', require( '@stdlib/stats/base/dists/weibull/logpdf' ) );

/**
* @name mean
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/mean}
*/
setReadOnly( weibull, 'mean', require( '@stdlib/stats/base/dists/weibull/mean' ) );

/**
* @name median
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/median}
*/
setReadOnly( weibull, 'median', require( '@stdlib/stats/base/dists/weibull/median' ) );

/**
* @name mgf
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/mgf}
*/
setReadOnly( weibull, 'mgf', require( '@stdlib/stats/base/dists/weibull/mgf' ) );

/**
* @name mode
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/mode}
*/
setReadOnly( weibull, 'mode', require( '@stdlib/stats/base/dists/weibull/mode' ) );

/**
* @name pdf
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/pdf}
*/
setReadOnly( weibull, 'pdf', require( '@stdlib/stats/base/dists/weibull/pdf' ) );

/**
* @name quantile
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/quantile}
*/
setReadOnly( weibull, 'quantile', require( '@stdlib/stats/base/dists/weibull/quantile' ) );

/**
* @name skewness
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/skewness}
*/
setReadOnly( weibull, 'skewness', require( '@stdlib/stats/base/dists/weibull/skewness' ) );

/**
* @name stdev
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/stdev}
*/
setReadOnly( weibull, 'stdev', require( '@stdlib/stats/base/dists/weibull/stdev' ) );

/**
* @name variance
* @memberof weibull
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/weibull/variance}
*/
setReadOnly( weibull, 'variance', require( '@stdlib/stats/base/dists/weibull/variance' ) );


// EXPORTS //

module.exports = weibull;
