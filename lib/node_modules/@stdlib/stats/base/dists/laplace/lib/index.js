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
* @namespace laplace
*/
var laplace = {};

/**
* @name cdf
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/cdf}
*/
setReadOnly( laplace, 'cdf', require( '@stdlib/stats/base/dists/laplace/cdf' ) );

/**
* @name Laplace
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/ctor}
*/
setReadOnly( laplace, 'Laplace', require( '@stdlib/stats/base/dists/laplace/ctor' ) );

/**
* @name entropy
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/entropy}
*/
setReadOnly( laplace, 'entropy', require( '@stdlib/stats/base/dists/laplace/entropy' ) );

/**
* @name kurtosis
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/kurtosis}
*/
setReadOnly( laplace, 'kurtosis', require( '@stdlib/stats/base/dists/laplace/kurtosis' ) );

/**
* @name logcdf
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/logcdf}
*/
setReadOnly( laplace, 'logcdf', require( '@stdlib/stats/base/dists/laplace/logcdf' ) );

/**
* @name logpdf
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/logpdf}
*/
setReadOnly( laplace, 'logpdf', require( '@stdlib/stats/base/dists/laplace/logpdf' ) );

/**
* @name mean
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/mean}
*/
setReadOnly( laplace, 'mean', require( '@stdlib/stats/base/dists/laplace/mean' ) );

/**
* @name median
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/median}
*/
setReadOnly( laplace, 'median', require( '@stdlib/stats/base/dists/laplace/median' ) );

/**
* @name mgf
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/mgf}
*/
setReadOnly( laplace, 'mgf', require( '@stdlib/stats/base/dists/laplace/mgf' ) );

/**
* @name mode
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/mode}
*/
setReadOnly( laplace, 'mode', require( '@stdlib/stats/base/dists/laplace/mode' ) );

/**
* @name pdf
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/pdf}
*/
setReadOnly( laplace, 'pdf', require( '@stdlib/stats/base/dists/laplace/pdf' ) );

/**
* @name quantile
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/quantile}
*/
setReadOnly( laplace, 'quantile', require( '@stdlib/stats/base/dists/laplace/quantile' ) );

/**
* @name skewness
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/skewness}
*/
setReadOnly( laplace, 'skewness', require( '@stdlib/stats/base/dists/laplace/skewness' ) );

/**
* @name stdev
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/stdev}
*/
setReadOnly( laplace, 'stdev', require( '@stdlib/stats/base/dists/laplace/stdev' ) );

/**
* @name variance
* @memberof laplace
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/laplace/variance}
*/
setReadOnly( laplace, 'variance', require( '@stdlib/stats/base/dists/laplace/variance' ) );


// EXPORTS //

module.exports = laplace;
