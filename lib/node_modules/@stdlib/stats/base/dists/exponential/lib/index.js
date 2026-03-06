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
* @namespace exponential
*/
var exponential = {};

/**
* @name cdf
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/cdf}
*/
setReadOnly( exponential, 'cdf', require( '@stdlib/stats/base/dists/exponential/cdf' ) );

/**
* @name Exponential
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/ctor}
*/
setReadOnly( exponential, 'Exponential', require( '@stdlib/stats/base/dists/exponential/ctor' ) );

/**
* @name entropy
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/entropy}
*/
setReadOnly( exponential, 'entropy', require( '@stdlib/stats/base/dists/exponential/entropy' ) );

/**
* @name kurtosis
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/kurtosis}
*/
setReadOnly( exponential, 'kurtosis', require( '@stdlib/stats/base/dists/exponential/kurtosis' ) );

/**
* @name logcdf
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/logcdf}
*/
setReadOnly( exponential, 'logcdf', require( '@stdlib/stats/base/dists/exponential/logcdf' ) );

/**
* @name logpdf
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/logpdf}
*/
setReadOnly( exponential, 'logpdf', require( '@stdlib/stats/base/dists/exponential/logpdf' ) );

/**
* @name mean
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/mean}
*/
setReadOnly( exponential, 'mean', require( '@stdlib/stats/base/dists/exponential/mean' ) );

/**
* @name median
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/median}
*/
setReadOnly( exponential, 'median', require( '@stdlib/stats/base/dists/exponential/median' ) );

/**
* @name mgf
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/mgf}
*/
setReadOnly( exponential, 'mgf', require( '@stdlib/stats/base/dists/exponential/mgf' ) );

/**
* @name mode
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/mode}
*/
setReadOnly( exponential, 'mode', require( '@stdlib/stats/base/dists/exponential/mode' ) );

/**
* @name pdf
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/pdf}
*/
setReadOnly( exponential, 'pdf', require( '@stdlib/stats/base/dists/exponential/pdf' ) );

/**
* @name quantile
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/quantile}
*/
setReadOnly( exponential, 'quantile', require( '@stdlib/stats/base/dists/exponential/quantile' ) );

/**
* @name skewness
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/skewness}
*/
setReadOnly( exponential, 'skewness', require( '@stdlib/stats/base/dists/exponential/skewness' ) );

/**
* @name stdev
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/stdev}
*/
setReadOnly( exponential, 'stdev', require( '@stdlib/stats/base/dists/exponential/stdev' ) );

/**
* @name variance
* @memberof exponential
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/exponential/variance}
*/
setReadOnly( exponential, 'variance', require( '@stdlib/stats/base/dists/exponential/variance' ) );


// EXPORTS //

module.exports = exponential;
