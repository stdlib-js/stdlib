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
* @namespace binomial
*/
var binomial = {};

/**
* @name cdf
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/cdf}
*/
setReadOnly( binomial, 'cdf', require( '@stdlib/stats/base/dists/binomial/cdf' ) );

/**
* @name Binomial
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/ctor}
*/
setReadOnly( binomial, 'Binomial', require( '@stdlib/stats/base/dists/binomial/ctor' ) );

/**
* @name entropy
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/entropy}
*/
setReadOnly( binomial, 'entropy', require( '@stdlib/stats/base/dists/binomial/entropy' ) );

/**
* @name kurtosis
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/kurtosis}
*/
setReadOnly( binomial, 'kurtosis', require( '@stdlib/stats/base/dists/binomial/kurtosis' ) );

/**
* @name logpmf
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/logpmf}
*/
setReadOnly( binomial, 'logpmf', require( '@stdlib/stats/base/dists/binomial/logpmf' ) );

/**
* @name mean
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/mean}
*/
setReadOnly( binomial, 'mean', require( '@stdlib/stats/base/dists/binomial/mean' ) );

/**
* @name median
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/median}
*/
setReadOnly( binomial, 'median', require( '@stdlib/stats/base/dists/binomial/median' ) );

/**
* @name mgf
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/mgf}
*/
setReadOnly( binomial, 'mgf', require( '@stdlib/stats/base/dists/binomial/mgf' ) );

/**
* @name mode
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/mode}
*/
setReadOnly( binomial, 'mode', require( '@stdlib/stats/base/dists/binomial/mode' ) );

/**
* @name pmf
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/pmf}
*/
setReadOnly( binomial, 'pmf', require( '@stdlib/stats/base/dists/binomial/pmf' ) );

/**
* @name quantile
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/quantile}
*/
setReadOnly( binomial, 'quantile', require( '@stdlib/stats/base/dists/binomial/quantile' ) );

/**
* @name skewness
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/skewness}
*/
setReadOnly( binomial, 'skewness', require( '@stdlib/stats/base/dists/binomial/skewness' ) );

/**
* @name stdev
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/stdev}
*/
setReadOnly( binomial, 'stdev', require( '@stdlib/stats/base/dists/binomial/stdev' ) );

/**
* @name variance
* @memberof binomial
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/binomial/variance}
*/
setReadOnly( binomial, 'variance', require( '@stdlib/stats/base/dists/binomial/variance' ) );


// EXPORTS //

module.exports = binomial;
