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
* @namespace invgamma
*/
var invgamma = {};

/**
* @name cdf
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/cdf}
*/
setReadOnly( invgamma, 'cdf', require( '@stdlib/stats/base/dists/invgamma/cdf' ) );

/**
* @name InvGamma
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/ctor}
*/
setReadOnly( invgamma, 'InvGamma', require( '@stdlib/stats/base/dists/invgamma/ctor' ) );

/**
* @name entropy
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/entropy}
*/
setReadOnly( invgamma, 'entropy', require( '@stdlib/stats/base/dists/invgamma/entropy' ) );

/**
* @name kurtosis
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/kurtosis}
*/
setReadOnly( invgamma, 'kurtosis', require( '@stdlib/stats/base/dists/invgamma/kurtosis' ) );

/**
* @name logpdf
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/logpdf}
*/
setReadOnly( invgamma, 'logpdf', require( '@stdlib/stats/base/dists/invgamma/logpdf' ) );

/**
* @name mean
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/mean}
*/
setReadOnly( invgamma, 'mean', require( '@stdlib/stats/base/dists/invgamma/mean' ) );

/**
* @name mode
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/mode}
*/
setReadOnly( invgamma, 'mode', require( '@stdlib/stats/base/dists/invgamma/mode' ) );

/**
* @name pdf
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/pdf}
*/
setReadOnly( invgamma, 'pdf', require( '@stdlib/stats/base/dists/invgamma/pdf' ) );

/**
* @name quantile
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/quantile}
*/
setReadOnly( invgamma, 'quantile', require( '@stdlib/stats/base/dists/invgamma/quantile' ) );

/**
* @name skewness
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/skewness}
*/
setReadOnly( invgamma, 'skewness', require( '@stdlib/stats/base/dists/invgamma/skewness' ) );

/**
* @name stdev
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/stdev}
*/
setReadOnly( invgamma, 'stdev', require( '@stdlib/stats/base/dists/invgamma/stdev' ) );

/**
* @name variance
* @memberof invgamma
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/invgamma/variance}
*/
setReadOnly( invgamma, 'variance', require( '@stdlib/stats/base/dists/invgamma/variance' ) );


// EXPORTS //

module.exports = invgamma;
