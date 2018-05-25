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
* @namespace logistic
*/
var logistic = {};

/**
* @name cdf
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/cdf}
*/
setReadOnly( logistic, 'cdf', require( '@stdlib/stats/base/dists/logistic/cdf' ) );

/**
* @name Logistic
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/ctor}
*/
setReadOnly( logistic, 'Logistic', require( '@stdlib/stats/base/dists/logistic/ctor' ) );

/**
* @name entropy
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/entropy}
*/
setReadOnly( logistic, 'entropy', require( '@stdlib/stats/base/dists/logistic/entropy' ) );

/**
* @name kurtosis
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/kurtosis}
*/
setReadOnly( logistic, 'kurtosis', require( '@stdlib/stats/base/dists/logistic/kurtosis' ) );

/**
* @name logcdf
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/logcdf}
*/
setReadOnly( logistic, 'logcdf', require( '@stdlib/stats/base/dists/logistic/logcdf' ) );

/**
* @name logpdf
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/logpdf}
*/
setReadOnly( logistic, 'logpdf', require( '@stdlib/stats/base/dists/logistic/logpdf' ) );

/**
* @name mean
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/mean}
*/
setReadOnly( logistic, 'mean', require( '@stdlib/stats/base/dists/logistic/mean' ) );

/**
* @name median
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/median}
*/
setReadOnly( logistic, 'median', require( '@stdlib/stats/base/dists/logistic/median' ) );

/**
* @name mgf
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/mgf}
*/
setReadOnly( logistic, 'mgf', require( '@stdlib/stats/base/dists/logistic/mgf' ) );

/**
* @name mode
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/mode}
*/
setReadOnly( logistic, 'mode', require( '@stdlib/stats/base/dists/logistic/mode' ) );

/**
* @name pdf
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/pdf}
*/
setReadOnly( logistic, 'pdf', require( '@stdlib/stats/base/dists/logistic/pdf' ) );

/**
* @name quantile
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/quantile}
*/
setReadOnly( logistic, 'quantile', require( '@stdlib/stats/base/dists/logistic/quantile' ) );

/**
* @name skewness
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/skewness}
*/
setReadOnly( logistic, 'skewness', require( '@stdlib/stats/base/dists/logistic/skewness' ) );

/**
* @name stdev
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/stdev}
*/
setReadOnly( logistic, 'stdev', require( '@stdlib/stats/base/dists/logistic/stdev' ) );

/**
* @name variance
* @memberof logistic
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/logistic/variance}
*/
setReadOnly( logistic, 'variance', require( '@stdlib/stats/base/dists/logistic/variance' ) );


// EXPORTS //

module.exports = logistic;
