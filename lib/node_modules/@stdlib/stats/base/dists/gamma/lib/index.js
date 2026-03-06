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
* @namespace gamma
*/
var gamma = {};

/**
* @name cdf
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/cdf}
*/
setReadOnly( gamma, 'cdf', require( '@stdlib/stats/base/dists/gamma/cdf' ) );

/**
* @name Gamma
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/ctor}
*/
setReadOnly( gamma, 'Gamma', require( '@stdlib/stats/base/dists/gamma/ctor' ) );

/**
* @name entropy
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/entropy}
*/
setReadOnly( gamma, 'entropy', require( '@stdlib/stats/base/dists/gamma/entropy' ) );

/**
* @name kurtosis
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/kurtosis}
*/
setReadOnly( gamma, 'kurtosis', require( '@stdlib/stats/base/dists/gamma/kurtosis' ) );

/**
* @name logcdf
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/logcdf}
*/
setReadOnly( gamma, 'logcdf', require( '@stdlib/stats/base/dists/gamma/logcdf' ) );

/**
* @name logpdf
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/logpdf}
*/
setReadOnly( gamma, 'logpdf', require( '@stdlib/stats/base/dists/gamma/logpdf' ) );

/**
* @name mean
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/mean}
*/
setReadOnly( gamma, 'mean', require( '@stdlib/stats/base/dists/gamma/mean' ) );

/**
* @name mgf
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/mgf}
*/
setReadOnly( gamma, 'mgf', require( '@stdlib/stats/base/dists/gamma/mgf' ) );

/**
* @name mode
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/mode}
*/
setReadOnly( gamma, 'mode', require( '@stdlib/stats/base/dists/gamma/mode' ) );

/**
* @name pdf
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/pdf}
*/
setReadOnly( gamma, 'pdf', require( '@stdlib/stats/base/dists/gamma/pdf' ) );

/**
* @name quantile
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/quantile}
*/
setReadOnly( gamma, 'quantile', require( '@stdlib/stats/base/dists/gamma/quantile' ) );

/**
* @name skewness
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/skewness}
*/
setReadOnly( gamma, 'skewness', require( '@stdlib/stats/base/dists/gamma/skewness' ) );

/**
* @name stdev
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/stdev}
*/
setReadOnly( gamma, 'stdev', require( '@stdlib/stats/base/dists/gamma/stdev' ) );

/**
* @name variance
* @memberof gamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/gamma/variance}
*/
setReadOnly( gamma, 'variance', require( '@stdlib/stats/base/dists/gamma/variance' ) );


// EXPORTS //

module.exports = gamma;
