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
* @namespace bernoulli
*/
var bernoulli = {};

/**
* @name cdf
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/cdf}
*/
setReadOnly( bernoulli, 'cdf', require( '@stdlib/stats/base/dists/bernoulli/cdf' ) );

/**
* @name Bernoulli
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/ctor}
*/
setReadOnly( bernoulli, 'Bernoulli', require( '@stdlib/stats/base/dists/bernoulli/ctor' ) );

/**
* @name entropy
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/entropy}
*/
setReadOnly( bernoulli, 'entropy', require( '@stdlib/stats/base/dists/bernoulli/entropy' ) );

/**
* @name kurtosis
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/kurtosis}
*/
setReadOnly( bernoulli, 'kurtosis', require( '@stdlib/stats/base/dists/bernoulli/kurtosis' ) );

/**
* @name mean
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/mean}
*/
setReadOnly( bernoulli, 'mean', require( '@stdlib/stats/base/dists/bernoulli/mean' ) );

/**
* @name median
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/median}
*/
setReadOnly( bernoulli, 'median', require( '@stdlib/stats/base/dists/bernoulli/median' ) );

/**
* @name mgf
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/mgf}
*/
setReadOnly( bernoulli, 'mgf', require( '@stdlib/stats/base/dists/bernoulli/mgf' ) );

/**
* @name mode
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/mode}
*/
setReadOnly( bernoulli, 'mode', require( '@stdlib/stats/base/dists/bernoulli/mode' ) );

/**
* @name pmf
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/pmf}
*/
setReadOnly( bernoulli, 'pmf', require( '@stdlib/stats/base/dists/bernoulli/pmf' ) );

/**
* @name quantile
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/quantile}
*/
setReadOnly( bernoulli, 'quantile', require( '@stdlib/stats/base/dists/bernoulli/quantile' ) );

/**
* @name skewness
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/skewness}
*/
setReadOnly( bernoulli, 'skewness', require( '@stdlib/stats/base/dists/bernoulli/skewness' ) );

/**
* @name stdev
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/stdev}
*/
setReadOnly( bernoulli, 'stdev', require( '@stdlib/stats/base/dists/bernoulli/stdev' ) );

/**
* @name variance
* @memberof bernoulli
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/bernoulli/variance}
*/
setReadOnly( bernoulli, 'variance', require( '@stdlib/stats/base/dists/bernoulli/variance' ) );


// EXPORTS //

module.exports = bernoulli;
