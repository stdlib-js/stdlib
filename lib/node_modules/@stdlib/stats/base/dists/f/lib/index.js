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
* @namespace f
*/
var f = {};

/**
* @name cdf
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/cdf}
*/
setReadOnly( f, 'cdf', require( '@stdlib/stats/base/dists/f/cdf' ) );

/**
* @name F
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/ctor}
*/
setReadOnly( f, 'F', require( '@stdlib/stats/base/dists/f/ctor' ) );

/**
* @name entropy
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/entropy}
*/
setReadOnly( f, 'entropy', require( '@stdlib/stats/base/dists/f/entropy' ) );

/**
* @name kurtosis
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/kurtosis}
*/
setReadOnly( f, 'kurtosis', require( '@stdlib/stats/base/dists/f/kurtosis' ) );

/**
* @name mean
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/mean}
*/
setReadOnly( f, 'mean', require( '@stdlib/stats/base/dists/f/mean' ) );

/**
* @name mode
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/mode}
*/
setReadOnly( f, 'mode', require( '@stdlib/stats/base/dists/f/mode' ) );

/**
* @name pdf
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/pdf}
*/
setReadOnly( f, 'pdf', require( '@stdlib/stats/base/dists/f/pdf' ) );

/**
* @name quantile
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/quantile}
*/
setReadOnly( f, 'quantile', require( '@stdlib/stats/base/dists/f/quantile' ) );

/**
* @name skewness
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/skewness}
*/
setReadOnly( f, 'skewness', require( '@stdlib/stats/base/dists/f/skewness' ) );

/**
* @name stdev
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/stdev}
*/
setReadOnly( f, 'stdev', require( '@stdlib/stats/base/dists/f/stdev' ) );

/**
* @name variance
* @memberof f
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/f/variance}
*/
setReadOnly( f, 'variance', require( '@stdlib/stats/base/dists/f/variance' ) );


// EXPORTS //

module.exports = f;
