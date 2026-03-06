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
* @namespace erlang
*/
var erlang = {};

/**
* @name cdf
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/cdf}
*/
setReadOnly( erlang, 'cdf', require( '@stdlib/stats/base/dists/erlang/cdf' ) );

/**
* @name Erlang
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/ctor}
*/
setReadOnly( erlang, 'Erlang', require( '@stdlib/stats/base/dists/erlang/ctor' ) );

/**
* @name entropy
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/entropy}
*/
setReadOnly( erlang, 'entropy', require( '@stdlib/stats/base/dists/erlang/entropy' ) );

/**
* @name kurtosis
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/kurtosis}
*/
setReadOnly( erlang, 'kurtosis', require( '@stdlib/stats/base/dists/erlang/kurtosis' ) );

/**
* @name logpdf
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/logpdf}
*/
setReadOnly( erlang, 'logpdf', require( '@stdlib/stats/base/dists/erlang/logpdf' ) );

/**
* @name mean
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/mean}
*/
setReadOnly( erlang, 'mean', require( '@stdlib/stats/base/dists/erlang/mean' ) );

/**
* @name mgf
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/mgf}
*/
setReadOnly( erlang, 'mgf', require( '@stdlib/stats/base/dists/erlang/mgf' ) );

/**
* @name mode
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/mode}
*/
setReadOnly( erlang, 'mode', require( '@stdlib/stats/base/dists/erlang/mode' ) );

/**
* @name pdf
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/pdf}
*/
setReadOnly( erlang, 'pdf', require( '@stdlib/stats/base/dists/erlang/pdf' ) );

/**
* @name quantile
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/quantile}
*/
setReadOnly( erlang, 'quantile', require( '@stdlib/stats/base/dists/erlang/quantile' ) );

/**
* @name skewness
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/skewness}
*/
setReadOnly( erlang, 'skewness', require( '@stdlib/stats/base/dists/erlang/skewness' ) );

/**
* @name stdev
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/stdev}
*/
setReadOnly( erlang, 'stdev', require( '@stdlib/stats/base/dists/erlang/stdev' ) );

/**
* @name variance
* @memberof erlang
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/base/dists/erlang/variance}
*/
setReadOnly( erlang, 'variance', require( '@stdlib/stats/base/dists/erlang/variance' ) );


// EXPORTS //

module.exports = erlang;
