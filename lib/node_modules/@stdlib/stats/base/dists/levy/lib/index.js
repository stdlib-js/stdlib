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
* @namespace levy
*/
var levy = {};

/**
* @name cdf
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/cdf}
*/
setReadOnly( levy, 'cdf', require( '@stdlib/stats/base/dists/levy/cdf' ) );

/**
* @name Levy
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/ctor}
*/
setReadOnly( levy, 'Levy', require( '@stdlib/stats/base/dists/levy/ctor' ) );

/**
* @name entropy
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/entropy}
*/
setReadOnly( levy, 'entropy', require( '@stdlib/stats/base/dists/levy/entropy' ) );

/**
* @name logcdf
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/logcdf}
*/
setReadOnly( levy, 'logcdf', require( '@stdlib/stats/base/dists/levy/logcdf' ) );

/**
* @name logpdf
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/logpdf}
*/
setReadOnly( levy, 'logpdf', require( '@stdlib/stats/base/dists/levy/logpdf' ) );

/**
* @name mean
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/mean}
*/
setReadOnly( levy, 'mean', require( '@stdlib/stats/base/dists/levy/mean' ) );

/**
* @name median
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/median}
*/
setReadOnly( levy, 'median', require( '@stdlib/stats/base/dists/levy/median' ) );

/**
* @name mode
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/mode}
*/
setReadOnly( levy, 'mode', require( '@stdlib/stats/base/dists/levy/mode' ) );

/**
* @name pdf
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/pdf}
*/
setReadOnly( levy, 'pdf', require( '@stdlib/stats/base/dists/levy/pdf' ) );

/**
* @name quantile
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/quantile}
*/
setReadOnly( levy, 'quantile', require( '@stdlib/stats/base/dists/levy/quantile' ) );

/**
* @name stdev
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/stdev}
*/
setReadOnly( levy, 'stdev', require( '@stdlib/stats/base/dists/levy/stdev' ) );

/**
* @name variance
* @memberof levy
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/levy/variance}
*/
setReadOnly( levy, 'variance', require( '@stdlib/stats/base/dists/levy/variance' ) );


// EXPORTS //

module.exports = levy;
