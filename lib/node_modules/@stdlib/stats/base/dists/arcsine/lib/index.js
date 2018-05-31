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
* @namespace arcsine
*/
var arcsine = {};

/**
* @name cdf
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/cdf}
*/
setReadOnly( arcsine, 'cdf', require( '@stdlib/stats/base/dists/arcsine/cdf' ) );

/**
* @name Arcsine
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/ctor}
*/
setReadOnly( arcsine, 'Arcsine', require( '@stdlib/stats/base/dists/arcsine/ctor' ) );

/**
* @name entropy
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/entropy}
*/
setReadOnly( arcsine, 'entropy', require( '@stdlib/stats/base/dists/arcsine/entropy' ) );

/**
* @name kurtosis
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/kurtosis}
*/
setReadOnly( arcsine, 'kurtosis', require( '@stdlib/stats/base/dists/arcsine/kurtosis' ) );

/**
* @name logcdf
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/logcdf}
*/
setReadOnly( arcsine, 'logcdf', require( '@stdlib/stats/base/dists/arcsine/logcdf' ) );

/**
* @name logpdf
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/logpdf}
*/
setReadOnly( arcsine, 'logpdf', require( '@stdlib/stats/base/dists/arcsine/logpdf' ) );

/**
* @name mean
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/mean}
*/
setReadOnly( arcsine, 'mean', require( '@stdlib/stats/base/dists/arcsine/mean' ) );

/**
* @name median
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/median}
*/
setReadOnly( arcsine, 'median', require( '@stdlib/stats/base/dists/arcsine/median' ) );

/**
* @name mode
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/mode}
*/
setReadOnly( arcsine, 'mode', require( '@stdlib/stats/base/dists/arcsine/mode' ) );

/**
* @name pdf
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/pdf}
*/
setReadOnly( arcsine, 'pdf', require( '@stdlib/stats/base/dists/arcsine/pdf' ) );

/**
* @name quantile
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/quantile}
*/
setReadOnly( arcsine, 'quantile', require( '@stdlib/stats/base/dists/arcsine/quantile' ) );

/**
* @name skewness
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/skewness}
*/
setReadOnly( arcsine, 'skewness', require( '@stdlib/stats/base/dists/arcsine/skewness' ) );

/**
* @name stdev
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/stdev}
*/
setReadOnly( arcsine, 'stdev', require( '@stdlib/stats/base/dists/arcsine/stdev' ) );

/**
* @name variance
* @memberof arcsine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/arcsine/variance}
*/
setReadOnly( arcsine, 'variance', require( '@stdlib/stats/base/dists/arcsine/variance' ) );


// EXPORTS //

module.exports = arcsine;
