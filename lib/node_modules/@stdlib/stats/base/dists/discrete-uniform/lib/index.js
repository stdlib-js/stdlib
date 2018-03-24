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
* @namespace discreteUniform
*/
var discreteUniform = {};

/**
* @name cdf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/cdf}
*/
setReadOnly( discreteUniform, 'cdf', require( '@stdlib/stats/base/dists/discrete-uniform/cdf' ) );

/**
* @name DiscreteUniform
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/ctor}
*/
setReadOnly( discreteUniform, 'DiscreteUniform', require( '@stdlib/stats/base/dists/discrete-uniform/ctor' ) );

/**
* @name entropy
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/entropy}
*/
setReadOnly( discreteUniform, 'entropy', require( '@stdlib/stats/base/dists/discrete-uniform/entropy' ) );

/**
* @name kurtosis
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/kurtosis}
*/
setReadOnly( discreteUniform, 'kurtosis', require( '@stdlib/stats/base/dists/discrete-uniform/kurtosis' ) );

/**
* @name logcdf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/logcdf}
*/
setReadOnly( discreteUniform, 'logcdf', require( '@stdlib/stats/base/dists/discrete-uniform/logcdf' ) );

/**
* @name logpmf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/logpmf}
*/
setReadOnly( discreteUniform, 'logpmf', require( '@stdlib/stats/base/dists/discrete-uniform/logpmf' ) );

/**
* @name mean
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/mean}
*/
setReadOnly( discreteUniform, 'mean', require( '@stdlib/stats/base/dists/discrete-uniform/mean' ) );

/**
* @name median
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/median}
*/
setReadOnly( discreteUniform, 'median', require( '@stdlib/stats/base/dists/discrete-uniform/median' ) );

/**
* @name mgf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/mgf}
*/
setReadOnly( discreteUniform, 'mgf', require( '@stdlib/stats/base/dists/discrete-uniform/mgf' ) );

/**
* @name pmf
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/pmf}
*/
setReadOnly( discreteUniform, 'pmf', require( '@stdlib/stats/base/dists/discrete-uniform/pmf' ) );

/**
* @name quantile
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/quantile}
*/
setReadOnly( discreteUniform, 'quantile', require( '@stdlib/stats/base/dists/discrete-uniform/quantile' ) );

/**
* @name skewness
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/skewness}
*/
setReadOnly( discreteUniform, 'skewness', require( '@stdlib/stats/base/dists/discrete-uniform/skewness' ) );

/**
* @name stdev
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/stdev}
*/
setReadOnly( discreteUniform, 'stdev', require( '@stdlib/stats/base/dists/discrete-uniform/stdev' ) );

/**
* @name variance
* @memberof discreteUniform
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/discrete-uniform/variance}
*/
setReadOnly( discreteUniform, 'variance', require( '@stdlib/stats/base/dists/discrete-uniform/variance' ) );


// EXPORTS //

module.exports = discreteUniform;
