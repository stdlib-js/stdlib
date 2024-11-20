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
* @namespace pareto1
*/
var pareto1 = {};

/**
* @name cdf
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/cdf}
*/
setReadOnly( pareto1, 'cdf', require( '@stdlib/stats/base/dists/pareto-type1/cdf' ) );

/**
* @name Pareto1
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/ctor}
*/
setReadOnly( pareto1, 'Pareto1', require( '@stdlib/stats/base/dists/pareto-type1/ctor' ) );

/**
* @name entropy
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/entropy}
*/
setReadOnly( pareto1, 'entropy', require( '@stdlib/stats/base/dists/pareto-type1/entropy' ) );

/**
* @name kurtosis
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/kurtosis}
*/
setReadOnly( pareto1, 'kurtosis', require( '@stdlib/stats/base/dists/pareto-type1/kurtosis' ) );

/**
* @name logcdf
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/logcdf}
*/
setReadOnly( pareto1, 'logcdf', require( '@stdlib/stats/base/dists/pareto-type1/logcdf' ) );

/**
* @name logpdf
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/logpdf}
*/
setReadOnly( pareto1, 'logpdf', require( '@stdlib/stats/base/dists/pareto-type1/logpdf' ) );

/**
* @name mean
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/mean}
*/
setReadOnly( pareto1, 'mean', require( '@stdlib/stats/base/dists/pareto-type1/mean' ) );

/**
* @name median
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/median}
*/
setReadOnly( pareto1, 'median', require( '@stdlib/stats/base/dists/pareto-type1/median' ) );

/**
* @name mode
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/mode}
*/
setReadOnly( pareto1, 'mode', require( '@stdlib/stats/base/dists/pareto-type1/mode' ) );

/**
* @name pdf
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/pdf}
*/
setReadOnly( pareto1, 'pdf', require( '@stdlib/stats/base/dists/pareto-type1/pdf' ) );

/**
* @name quantile
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/quantile}
*/
setReadOnly( pareto1, 'quantile', require( '@stdlib/stats/base/dists/pareto-type1/quantile' ) );

/**
* @name skewness
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/skewness}
*/
setReadOnly( pareto1, 'skewness', require( '@stdlib/stats/base/dists/pareto-type1/skewness' ) );

/**
* @name stdev
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/stdev}
*/
setReadOnly( pareto1, 'stdev', require( '@stdlib/stats/base/dists/pareto-type1/stdev' ) );

/**
* @name variance
* @memberof pareto1
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/pareto-type1/variance}
*/
setReadOnly( pareto1, 'variance', require( '@stdlib/stats/base/dists/pareto-type1/variance' ) );


// EXPORTS //

module.exports = pareto1;
