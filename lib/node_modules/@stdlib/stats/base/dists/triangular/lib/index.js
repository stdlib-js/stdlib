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
* @namespace triangular
*/
var triangular = {};

/**
* @name cdf
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/cdf}
*/
setReadOnly( triangular, 'cdf', require( '@stdlib/stats/base/dists/triangular/cdf' ) );

/**
* @name Triangular
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/ctor}
*/
setReadOnly( triangular, 'Triangular', require( '@stdlib/stats/base/dists/triangular/ctor' ) );

/**
* @name entropy
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/entropy}
*/
setReadOnly( triangular, 'entropy', require( '@stdlib/stats/base/dists/triangular/entropy' ) );

/**
* @name kurtosis
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/kurtosis}
*/
setReadOnly( triangular, 'kurtosis', require( '@stdlib/stats/base/dists/triangular/kurtosis' ) );

/**
* @name logcdf
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/logcdf}
*/
setReadOnly( triangular, 'logcdf', require( '@stdlib/stats/base/dists/triangular/logcdf' ) );

/**
* @name logpdf
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/logpdf}
*/
setReadOnly( triangular, 'logpdf', require( '@stdlib/stats/base/dists/triangular/logpdf' ) );

/**
* @name mean
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/mean}
*/
setReadOnly( triangular, 'mean', require( '@stdlib/stats/base/dists/triangular/mean' ) );

/**
* @name median
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/median}
*/
setReadOnly( triangular, 'median', require( '@stdlib/stats/base/dists/triangular/median' ) );

/**
* @name mgf
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/mgf}
*/
setReadOnly( triangular, 'mgf', require( '@stdlib/stats/base/dists/triangular/mgf' ) );

/**
* @name mode
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/mode}
*/
setReadOnly( triangular, 'mode', require( '@stdlib/stats/base/dists/triangular/mode' ) );

/**
* @name pdf
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/pdf}
*/
setReadOnly( triangular, 'pdf', require( '@stdlib/stats/base/dists/triangular/pdf' ) );

/**
* @name quantile
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/quantile}
*/
setReadOnly( triangular, 'quantile', require( '@stdlib/stats/base/dists/triangular/quantile' ) );

/**
* @name skewness
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/skewness}
*/
setReadOnly( triangular, 'skewness', require( '@stdlib/stats/base/dists/triangular/skewness' ) );

/**
* @name stdev
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/stdev}
*/
setReadOnly( triangular, 'stdev', require( '@stdlib/stats/base/dists/triangular/stdev' ) );

/**
* @name variance
* @memberof triangular
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/triangular/variance}
*/
setReadOnly( triangular, 'variance', require( '@stdlib/stats/base/dists/triangular/variance' ) );


// EXPORTS //

module.exports = triangular;
