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
* @namespace t
*/
var t = {};

/**
* @name cdf
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/cdf}
*/
setReadOnly( t, 'cdf', require( '@stdlib/stats/base/dists/t/cdf' ) );

/**
* @name T
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/ctor}
*/
setReadOnly( t, 'T', require( '@stdlib/stats/base/dists/t/ctor' ) );

/**
* @name entropy
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/entropy}
*/
setReadOnly( t, 'entropy', require( '@stdlib/stats/base/dists/t/entropy' ) );

/**
* @name kurtosis
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/kurtosis}
*/
setReadOnly( t, 'kurtosis', require( '@stdlib/stats/base/dists/t/kurtosis' ) );

/**
* @name logcdf
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/logcdf}
*/
setReadOnly( t, 'logcdf', require( '@stdlib/stats/base/dists/t/logcdf' ) );

/**
* @name logpdf
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/logpdf}
*/
setReadOnly( t, 'logpdf', require( '@stdlib/stats/base/dists/t/logpdf' ) );

/**
* @name mean
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/mean}
*/
setReadOnly( t, 'mean', require( '@stdlib/stats/base/dists/t/mean' ) );

/**
* @name median
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/median}
*/
setReadOnly( t, 'median', require( '@stdlib/stats/base/dists/t/median' ) );

/**
* @name mode
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/mode}
*/
setReadOnly( t, 'mode', require( '@stdlib/stats/base/dists/t/mode' ) );

/**
* @name pdf
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/pdf}
*/
setReadOnly( t, 'pdf', require( '@stdlib/stats/base/dists/t/pdf' ) );

/**
* @name quantile
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/quantile}
*/
setReadOnly( t, 'quantile', require( '@stdlib/stats/base/dists/t/quantile' ) );

/**
* @name skewness
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/skewness}
*/
setReadOnly( t, 'skewness', require( '@stdlib/stats/base/dists/t/skewness' ) );

/**
* @name stdev
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/stdev}
*/
setReadOnly( t, 'stdev', require( '@stdlib/stats/base/dists/t/stdev' ) );

/**
* @name variance
* @memberof t
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/t/variance}
*/
setReadOnly( t, 'variance', require( '@stdlib/stats/base/dists/t/variance' ) );


// EXPORTS //

module.exports = t;
