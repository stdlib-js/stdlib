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
* @namespace gumbel
*/
var gumbel = {};

/**
* @name cdf
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/cdf}
*/
setReadOnly( gumbel, 'cdf', require( '@stdlib/stats/base/dists/gumbel/cdf' ) );

/**
* @name Gumbel
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/ctor}
*/
setReadOnly( gumbel, 'Gumbel', require( '@stdlib/stats/base/dists/gumbel/ctor' ) );

/**
* @name entropy
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/entropy}
*/
setReadOnly( gumbel, 'entropy', require( '@stdlib/stats/base/dists/gumbel/entropy' ) );

/**
* @name kurtosis
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/kurtosis}
*/
setReadOnly( gumbel, 'kurtosis', require( '@stdlib/stats/base/dists/gumbel/kurtosis' ) );

/**
* @name logcdf
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/logcdf}
*/
setReadOnly( gumbel, 'logcdf', require( '@stdlib/stats/base/dists/gumbel/logcdf' ) );

/**
* @name logpdf
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/logpdf}
*/
setReadOnly( gumbel, 'logpdf', require( '@stdlib/stats/base/dists/gumbel/logpdf' ) );

/**
* @name mean
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/mean}
*/
setReadOnly( gumbel, 'mean', require( '@stdlib/stats/base/dists/gumbel/mean' ) );

/**
* @name median
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/median}
*/
setReadOnly( gumbel, 'median', require( '@stdlib/stats/base/dists/gumbel/median' ) );

/**
* @name mgf
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/mgf}
*/
setReadOnly( gumbel, 'mgf', require( '@stdlib/stats/base/dists/gumbel/mgf' ) );

/**
* @name mode
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/mode}
*/
setReadOnly( gumbel, 'mode', require( '@stdlib/stats/base/dists/gumbel/mode' ) );

/**
* @name pdf
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/pdf}
*/
setReadOnly( gumbel, 'pdf', require( '@stdlib/stats/base/dists/gumbel/pdf' ) );

/**
* @name quantile
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/quantile}
*/
setReadOnly( gumbel, 'quantile', require( '@stdlib/stats/base/dists/gumbel/quantile' ) );

/**
* @name skewness
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/skewness}
*/
setReadOnly( gumbel, 'skewness', require( '@stdlib/stats/base/dists/gumbel/skewness' ) );

/**
* @name stdev
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/stdev}
*/
setReadOnly( gumbel, 'stdev', require( '@stdlib/stats/base/dists/gumbel/stdev' ) );

/**
* @name variance
* @memberof gumbel
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gumbel/variance}
*/
setReadOnly( gumbel, 'variance', require( '@stdlib/stats/base/dists/gumbel/variance' ) );


// EXPORTS //

module.exports = gumbel;
