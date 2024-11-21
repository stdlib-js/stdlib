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
* @namespace chi
*/
var chi = {};

/**
* @name cdf
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/cdf}
*/
setReadOnly( chi, 'cdf', require( '@stdlib/stats/base/dists/chi/cdf' ) );

/**
* @name Chi
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/ctor}
*/
setReadOnly( chi, 'Chi', require( '@stdlib/stats/base/dists/chi/ctor' ) );

/**
* @name entropy
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/entropy}
*/
setReadOnly( chi, 'entropy', require( '@stdlib/stats/base/dists/chi/entropy' ) );

/**
* @name kurtosis
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/kurtosis}
*/
setReadOnly( chi, 'kurtosis', require( '@stdlib/stats/base/dists/chi/kurtosis' ) );

/**
* @name logpdf
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/logpdf}
*/
setReadOnly( chi, 'logpdf', require( '@stdlib/stats/base/dists/chi/logpdf' ) );

/**
* @name mean
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/mean}
*/
setReadOnly( chi, 'mean', require( '@stdlib/stats/base/dists/chi/mean' ) );

/**
* @name mode
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/mode}
*/
setReadOnly( chi, 'mode', require( '@stdlib/stats/base/dists/chi/mode' ) );

/**
* @name pdf
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/pdf}
*/
setReadOnly( chi, 'pdf', require( '@stdlib/stats/base/dists/chi/pdf' ) );

/**
* @name quantile
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/quantile}
*/
setReadOnly( chi, 'quantile', require( '@stdlib/stats/base/dists/chi/quantile' ) );

/**
* @name skewness
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/skewness}
*/
setReadOnly( chi, 'skewness', require( '@stdlib/stats/base/dists/chi/skewness' ) );

/**
* @name stdev
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/stdev}
*/
setReadOnly( chi, 'stdev', require( '@stdlib/stats/base/dists/chi/stdev' ) );

/**
* @name variance
* @memberof chi
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/chi/variance}
*/
setReadOnly( chi, 'variance', require( '@stdlib/stats/base/dists/chi/variance' ) );


// EXPORTS //

module.exports = chi;
