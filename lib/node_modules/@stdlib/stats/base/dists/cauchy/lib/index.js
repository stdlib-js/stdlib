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
* @namespace cauchy
*/
var cauchy = {};

/**
* @name cdf
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/cdf}
*/
setReadOnly( cauchy, 'cdf', require( '@stdlib/stats/base/dists/cauchy/cdf' ) );

/**
* @name Cauchy
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/ctor}
*/
setReadOnly( cauchy, 'Cauchy', require( '@stdlib/stats/base/dists/cauchy/ctor' ) );

/**
* @name entropy
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/entropy}
*/
setReadOnly( cauchy, 'entropy', require( '@stdlib/stats/base/dists/cauchy/entropy' ) );

/**
* @name logcdf
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/logcdf}
*/
setReadOnly( cauchy, 'logcdf', require( '@stdlib/stats/base/dists/cauchy/logcdf' ) );

/**
* @name logpdf
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/logpdf}
*/
setReadOnly( cauchy, 'logpdf', require( '@stdlib/stats/base/dists/cauchy/logpdf' ) );

/**
* @name median
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/median}
*/
setReadOnly( cauchy, 'median', require( '@stdlib/stats/base/dists/cauchy/median' ) );

/**
* @name mode
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/mode}
*/
setReadOnly( cauchy, 'mode', require( '@stdlib/stats/base/dists/cauchy/mode' ) );

/**
* @name pdf
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/pdf}
*/
setReadOnly( cauchy, 'pdf', require( '@stdlib/stats/base/dists/cauchy/pdf' ) );

/**
* @name quantile
* @memberof cauchy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/cauchy/quantile}
*/
setReadOnly( cauchy, 'quantile', require( '@stdlib/stats/base/dists/cauchy/quantile' ) );


// EXPORTS //

module.exports = cauchy;
