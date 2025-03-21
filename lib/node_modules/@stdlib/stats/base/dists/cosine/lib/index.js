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
* @namespace cosine
*/
var cosine = {};

/**
* @name cdf
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/cdf}
*/
setReadOnly( cosine, 'cdf', require( '@stdlib/stats/base/dists/cosine/cdf' ) );

/**
* @name Cosine
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/ctor}
*/
setReadOnly( cosine, 'Cosine', require( '@stdlib/stats/base/dists/cosine/ctor' ) );

/**
* @name kurtosis
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/kurtosis}
*/
setReadOnly( cosine, 'kurtosis', require( '@stdlib/stats/base/dists/cosine/kurtosis' ) );

/**
* @name logcdf
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/logcdf}
*/
setReadOnly( cosine, 'logcdf', require( '@stdlib/stats/base/dists/cosine/logcdf' ) );

/**
* @name logpdf
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/logpdf}
*/
setReadOnly( cosine, 'logpdf', require( '@stdlib/stats/base/dists/cosine/logpdf' ) );

/**
* @name mean
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/mean}
*/
setReadOnly( cosine, 'mean', require( '@stdlib/stats/base/dists/cosine/mean' ) );

/**
* @name median
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/median}
*/
setReadOnly( cosine, 'median', require( '@stdlib/stats/base/dists/cosine/median' ) );

/**
* @name mgf
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/mgf}
*/
setReadOnly( cosine, 'mgf', require( '@stdlib/stats/base/dists/cosine/mgf' ) );

/**
* @name mode
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/mode}
*/
setReadOnly( cosine, 'mode', require( '@stdlib/stats/base/dists/cosine/mode' ) );

/**
* @name pdf
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/pdf}
*/
setReadOnly( cosine, 'pdf', require( '@stdlib/stats/base/dists/cosine/pdf' ) );

/**
* @name quantile
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/quantile}
*/
setReadOnly( cosine, 'quantile', require( '@stdlib/stats/base/dists/cosine/quantile' ) );

/**
* @name skewness
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/skewness}
*/
setReadOnly( cosine, 'skewness', require( '@stdlib/stats/base/dists/cosine/skewness' ) );

/**
* @name stdev
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/stdev}
*/
setReadOnly( cosine, 'stdev', require( '@stdlib/stats/base/dists/cosine/stdev' ) );

/**
* @name variance
* @memberof cosine
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cosine/variance}
*/
setReadOnly( cosine, 'variance', require( '@stdlib/stats/base/dists/cosine/variance' ) );


// EXPORTS //

module.exports = cosine;
