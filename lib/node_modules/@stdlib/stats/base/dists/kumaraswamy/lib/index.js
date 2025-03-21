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
* @namespace kumaraswamy
*/
var kumaraswamy = {};

/**
* @name cdf
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/cdf}
*/
setReadOnly( kumaraswamy, 'cdf', require( '@stdlib/stats/base/dists/kumaraswamy/cdf' ) );

/**
* @name Kumaraswamy
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/ctor}
*/
setReadOnly( kumaraswamy, 'Kumaraswamy', require( '@stdlib/stats/base/dists/kumaraswamy/ctor' ) );

/**
* @name kurtosis
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/kurtosis}
*/
setReadOnly( kumaraswamy, 'kurtosis', require( '@stdlib/stats/base/dists/kumaraswamy/kurtosis' ) );

/**
* @name logcdf
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/logcdf}
*/
setReadOnly( kumaraswamy, 'logcdf', require( '@stdlib/stats/base/dists/kumaraswamy/logcdf' ) );

/**
* @name logpdf
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/logpdf}
*/
setReadOnly( kumaraswamy, 'logpdf', require( '@stdlib/stats/base/dists/kumaraswamy/logpdf' ) );

/**
* @name mean
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/mean}
*/
setReadOnly( kumaraswamy, 'mean', require( '@stdlib/stats/base/dists/kumaraswamy/mean' ) );

/**
* @name median
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/median}
*/
setReadOnly( kumaraswamy, 'median', require( '@stdlib/stats/base/dists/kumaraswamy/median' ) );

/**
* @name mode
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/mode}
*/
setReadOnly( kumaraswamy, 'mode', require( '@stdlib/stats/base/dists/kumaraswamy/mode' ) );

/**
* @name pdf
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/pdf}
*/
setReadOnly( kumaraswamy, 'pdf', require( '@stdlib/stats/base/dists/kumaraswamy/pdf' ) );

/**
* @name quantile
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/quantile}
*/
setReadOnly( kumaraswamy, 'quantile', require( '@stdlib/stats/base/dists/kumaraswamy/quantile' ) );

/**
* @name skewness
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/skewness}
*/
setReadOnly( kumaraswamy, 'skewness', require( '@stdlib/stats/base/dists/kumaraswamy/skewness' ) );

/**
* @name stdev
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/stdev}
*/
setReadOnly( kumaraswamy, 'stdev', require( '@stdlib/stats/base/dists/kumaraswamy/stdev' ) );

/**
* @name variance
* @memberof kumaraswamy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/kumaraswamy/variance}
*/
setReadOnly( kumaraswamy, 'variance', require( '@stdlib/stats/base/dists/kumaraswamy/variance' ) );


// EXPORTS //

module.exports = kumaraswamy;
