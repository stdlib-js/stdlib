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
* @namespace geometric
*/
var geometric = {};

/**
* @name cdf
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/cdf}
*/
setReadOnly( geometric, 'cdf', require( '@stdlib/stats/base/dists/geometric/cdf' ) );

/**
* @name Geometric
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/ctor}
*/
setReadOnly( geometric, 'Geometric', require( '@stdlib/stats/base/dists/geometric/ctor' ) );

/**
* @name entropy
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/entropy}
*/
setReadOnly( geometric, 'entropy', require( '@stdlib/stats/base/dists/geometric/entropy' ) );

/**
* @name kurtosis
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/kurtosis}
*/
setReadOnly( geometric, 'kurtosis', require( '@stdlib/stats/base/dists/geometric/kurtosis' ) );

/**
* @name logcdf
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/logcdf}
*/
setReadOnly( geometric, 'logcdf', require( '@stdlib/stats/base/dists/geometric/logcdf' ) );

/**
* @name logpmf
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/logpmf}
*/
setReadOnly( geometric, 'logpmf', require( '@stdlib/stats/base/dists/geometric/logpmf' ) );

/**
* @name mean
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/mean}
*/
setReadOnly( geometric, 'mean', require( '@stdlib/stats/base/dists/geometric/mean' ) );

/**
* @name median
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/median}
*/
setReadOnly( geometric, 'median', require( '@stdlib/stats/base/dists/geometric/median' ) );

/**
* @name mgf
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/mgf}
*/
setReadOnly( geometric, 'mgf', require( '@stdlib/stats/base/dists/geometric/mgf' ) );

/**
* @name mode
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/mode}
*/
setReadOnly( geometric, 'mode', require( '@stdlib/stats/base/dists/geometric/mode' ) );

/**
* @name pmf
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/pmf}
*/
setReadOnly( geometric, 'pmf', require( '@stdlib/stats/base/dists/geometric/pmf' ) );

/**
* @name quantile
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/quantile}
*/
setReadOnly( geometric, 'quantile', require( '@stdlib/stats/base/dists/geometric/quantile' ) );

/**
* @name skewness
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/skewness}
*/
setReadOnly( geometric, 'skewness', require( '@stdlib/stats/base/dists/geometric/skewness' ) );

/**
* @name stdev
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/stdev}
*/
setReadOnly( geometric, 'stdev', require( '@stdlib/stats/base/dists/geometric/stdev' ) );

/**
* @name variance
* @memberof geometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/geometric/variance}
*/
setReadOnly( geometric, 'variance', require( '@stdlib/stats/base/dists/geometric/variance' ) );


// EXPORTS //

module.exports = geometric;
