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
* @namespace hypergeometric
*/
var hypergeometric = {};

/**
* @name cdf
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/cdf}
*/
setReadOnly( hypergeometric, 'cdf', require( '@stdlib/stats/base/dists/hypergeometric/cdf' ) );

/**
* @name Hypergeometric
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/ctor}
*/
setReadOnly( hypergeometric, 'Hypergeometric', require( '@stdlib/stats/base/dists/hypergeometric/ctor' ) );

/**
* @name kurtosis
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/kurtosis}
*/
setReadOnly( hypergeometric, 'kurtosis', require( '@stdlib/stats/base/dists/hypergeometric/kurtosis' ) );

/**
* @name logpmf
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/logpmf}
*/
setReadOnly( hypergeometric, 'logpmf', require( '@stdlib/stats/base/dists/hypergeometric/logpmf' ) );

/**
* @name mean
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/mean}
*/
setReadOnly( hypergeometric, 'mean', require( '@stdlib/stats/base/dists/hypergeometric/mean' ) );

/**
* @name mode
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/mode}
*/
setReadOnly( hypergeometric, 'mode', require( '@stdlib/stats/base/dists/hypergeometric/mode' ) );

/**
* @name pmf
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/pmf}
*/
setReadOnly( hypergeometric, 'pmf', require( '@stdlib/stats/base/dists/hypergeometric/pmf' ) );

/**
* @name quantile
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/quantile}
*/
setReadOnly( hypergeometric, 'quantile', require( '@stdlib/stats/base/dists/hypergeometric/quantile' ) );

/**
* @name skewness
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/skewness}
*/
setReadOnly( hypergeometric, 'skewness', require( '@stdlib/stats/base/dists/hypergeometric/skewness' ) );

/**
* @name stdev
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/stdev}
*/
setReadOnly( hypergeometric, 'stdev', require( '@stdlib/stats/base/dists/hypergeometric/stdev' ) );

/**
* @name variance
* @memberof hypergeometric
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/hypergeometric/variance}
*/
setReadOnly( hypergeometric, 'variance', require( '@stdlib/stats/base/dists/hypergeometric/variance' ) );


// EXPORTS //

module.exports = hypergeometric;
