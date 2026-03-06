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
* @namespace uniform
*/
var uniform = {};

/**
* @name cdf
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/cdf}
*/
setReadOnly( uniform, 'cdf', require( '@stdlib/stats/base/dists/uniform/cdf' ) );

/**
* @name Uniform
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/ctor}
*/
setReadOnly( uniform, 'Uniform', require( '@stdlib/stats/base/dists/uniform/ctor' ) );

/**
* @name entropy
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/entropy}
*/
setReadOnly( uniform, 'entropy', require( '@stdlib/stats/base/dists/uniform/entropy' ) );

/**
* @name kurtosis
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/kurtosis}
*/
setReadOnly( uniform, 'kurtosis', require( '@stdlib/stats/base/dists/uniform/kurtosis' ) );

/**
* @name logcdf
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/logcdf}
*/
setReadOnly( uniform, 'logcdf', require( '@stdlib/stats/base/dists/uniform/logcdf' ) );

/**
* @name logpdf
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/logpdf}
*/
setReadOnly( uniform, 'logpdf', require( '@stdlib/stats/base/dists/uniform/logpdf' ) );

/**
* @name mean
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/mean}
*/
setReadOnly( uniform, 'mean', require( '@stdlib/stats/base/dists/uniform/mean' ) );

/**
* @name median
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/median}
*/
setReadOnly( uniform, 'median', require( '@stdlib/stats/base/dists/uniform/median' ) );

/**
* @name mgf
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/mgf}
*/
setReadOnly( uniform, 'mgf', require( '@stdlib/stats/base/dists/uniform/mgf' ) );

/**
* @name pdf
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/pdf}
*/
setReadOnly( uniform, 'pdf', require( '@stdlib/stats/base/dists/uniform/pdf' ) );

/**
* @name quantile
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/quantile}
*/
setReadOnly( uniform, 'quantile', require( '@stdlib/stats/base/dists/uniform/quantile' ) );

/**
* @name skewness
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/skewness}
*/
setReadOnly( uniform, 'skewness', require( '@stdlib/stats/base/dists/uniform/skewness' ) );

/**
* @name stdev
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/stdev}
*/
setReadOnly( uniform, 'stdev', require( '@stdlib/stats/base/dists/uniform/stdev' ) );

/**
* @name variance
* @memberof uniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/uniform/variance}
*/
setReadOnly( uniform, 'variance', require( '@stdlib/stats/base/dists/uniform/variance' ) );


// EXPORTS //

module.exports = uniform;
