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
* @namespace beta
*/
var beta = {};

/**
* @name cdf
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/cdf}
*/
setReadOnly( beta, 'cdf', require( '@stdlib/stats/base/dists/beta/cdf' ) );

/**
* @name Beta
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/ctor}
*/
setReadOnly( beta, 'Beta', require( '@stdlib/stats/base/dists/beta/ctor' ) );

/**
* @name entropy
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/entropy}
*/
setReadOnly( beta, 'entropy', require( '@stdlib/stats/base/dists/beta/entropy' ) );

/**
* @name kurtosis
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/kurtosis}
*/
setReadOnly( beta, 'kurtosis', require( '@stdlib/stats/base/dists/beta/kurtosis' ) );

/**
* @name logcdf
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/logcdf}
*/
setReadOnly( beta, 'logcdf', require( '@stdlib/stats/base/dists/beta/logcdf' ) );

/**
* @name logpdf
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/logpdf}
*/
setReadOnly( beta, 'logpdf', require( '@stdlib/stats/base/dists/beta/logpdf' ) );

/**
* @name mean
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/mean}
*/
setReadOnly( beta, 'mean', require( '@stdlib/stats/base/dists/beta/mean' ) );

/**
* @name median
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/median}
*/
setReadOnly( beta, 'median', require( '@stdlib/stats/base/dists/beta/median' ) );

/**
* @name mgf
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/mgf}
*/
setReadOnly( beta, 'mgf', require( '@stdlib/stats/base/dists/beta/mgf' ) );

/**
* @name mode
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/mode}
*/
setReadOnly( beta, 'mode', require( '@stdlib/stats/base/dists/beta/mode' ) );

/**
* @name pdf
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/pdf}
*/
setReadOnly( beta, 'pdf', require( '@stdlib/stats/base/dists/beta/pdf' ) );

/**
* @name quantile
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/quantile}
*/
setReadOnly( beta, 'quantile', require( '@stdlib/stats/base/dists/beta/quantile' ) );

/**
* @name skewness
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/skewness}
*/
setReadOnly( beta, 'skewness', require( '@stdlib/stats/base/dists/beta/skewness' ) );

/**
* @name stdev
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/stdev}
*/
setReadOnly( beta, 'stdev', require( '@stdlib/stats/base/dists/beta/stdev' ) );

/**
* @name variance
* @memberof beta
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/beta/variance}
*/
setReadOnly( beta, 'variance', require( '@stdlib/stats/base/dists/beta/variance' ) );


// EXPORTS //

module.exports = beta;
