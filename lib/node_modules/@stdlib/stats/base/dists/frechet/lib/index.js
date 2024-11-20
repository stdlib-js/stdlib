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
* @namespace frechet
*/
var frechet = {};

/**
* @name cdf
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/cdf}
*/
setReadOnly( frechet, 'cdf', require( '@stdlib/stats/base/dists/frechet/cdf' ) );

/**
* @name Frechet
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/ctor}
*/
setReadOnly( frechet, 'Frechet', require( '@stdlib/stats/base/dists/frechet/ctor' ) );

/**
* @name entropy
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/entropy}
*/
setReadOnly( frechet, 'entropy', require( '@stdlib/stats/base/dists/frechet/entropy' ) );

/**
* @name kurtosis
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/kurtosis}
*/
setReadOnly( frechet, 'kurtosis', require( '@stdlib/stats/base/dists/frechet/kurtosis' ) );

/**
* @name logcdf
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/logcdf}
*/
setReadOnly( frechet, 'logcdf', require( '@stdlib/stats/base/dists/frechet/logcdf' ) );

/**
* @name logpdf
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/logpdf}
*/
setReadOnly( frechet, 'logpdf', require( '@stdlib/stats/base/dists/frechet/logpdf' ) );

/**
* @name mean
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/mean}
*/
setReadOnly( frechet, 'mean', require( '@stdlib/stats/base/dists/frechet/mean' ) );

/**
* @name median
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/median}
*/
setReadOnly( frechet, 'median', require( '@stdlib/stats/base/dists/frechet/median' ) );

/**
* @name mode
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/mode}
*/
setReadOnly( frechet, 'mode', require( '@stdlib/stats/base/dists/frechet/mode' ) );

/**
* @name pdf
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/pdf}
*/
setReadOnly( frechet, 'pdf', require( '@stdlib/stats/base/dists/frechet/pdf' ) );

/**
* @name quantile
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/quantile}
*/
setReadOnly( frechet, 'quantile', require( '@stdlib/stats/base/dists/frechet/quantile' ) );

/**
* @name skewness
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/skewness}
*/
setReadOnly( frechet, 'skewness', require( '@stdlib/stats/base/dists/frechet/skewness' ) );

/**
* @name stdev
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/stdev}
*/
setReadOnly( frechet, 'stdev', require( '@stdlib/stats/base/dists/frechet/stdev' ) );

/**
* @name variance
* @memberof frechet
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/frechet/variance}
*/
setReadOnly( frechet, 'variance', require( '@stdlib/stats/base/dists/frechet/variance' ) );


// EXPORTS //

module.exports = frechet;
