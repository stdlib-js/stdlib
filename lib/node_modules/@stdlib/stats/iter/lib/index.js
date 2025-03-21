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
* @namespace ns
*/
var ns = {};

/**
* @name itercugmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cugmean}
*/
setReadOnly( ns, 'itercugmean', require( '@stdlib/stats/iter/cugmean' ) );

/**
* @name itercuhmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cuhmean}
*/
setReadOnly( ns, 'itercuhmean', require( '@stdlib/stats/iter/cuhmean' ) );

/**
* @name itercumax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumax}
*/
setReadOnly( ns, 'itercumax', require( '@stdlib/stats/iter/cumax' ) );

/**
* @name itercumaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumaxabs}
*/
setReadOnly( ns, 'itercumaxabs', require( '@stdlib/stats/iter/cumaxabs' ) );

/**
* @name itercumean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumean}
*/
setReadOnly( ns, 'itercumean', require( '@stdlib/stats/iter/cumean' ) );

/**
* @name itercumeanabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumeanabs}
*/
setReadOnly( ns, 'itercumeanabs', require( '@stdlib/stats/iter/cumeanabs' ) );

/**
* @name itercumeanabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumeanabs2}
*/
setReadOnly( ns, 'itercumeanabs2', require( '@stdlib/stats/iter/cumeanabs2' ) );

/**
* @name itercumidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumidrange}
*/
setReadOnly( ns, 'itercumidrange', require( '@stdlib/stats/iter/cumidrange' ) );

/**
* @name itercumin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cumin}
*/
setReadOnly( ns, 'itercumin', require( '@stdlib/stats/iter/cumin' ) );

/**
* @name itercuminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cuminabs}
*/
setReadOnly( ns, 'itercuminabs', require( '@stdlib/stats/iter/cuminabs' ) );

/**
* @name itercuprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cuprod}
*/
setReadOnly( ns, 'itercuprod', require( '@stdlib/stats/iter/cuprod' ) );

/**
* @name itercurange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/curange}
*/
setReadOnly( ns, 'itercurange', require( '@stdlib/stats/iter/curange' ) );

/**
* @name itercusum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cusum}
*/
setReadOnly( ns, 'itercusum', require( '@stdlib/stats/iter/cusum' ) );

/**
* @name itercusumabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cusumabs}
*/
setReadOnly( ns, 'itercusumabs', require( '@stdlib/stats/iter/cusumabs' ) );

/**
* @name itercusumabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/cusumabs2}
*/
setReadOnly( ns, 'itercusumabs2', require( '@stdlib/stats/iter/cusumabs2' ) );

/**
* @name itermax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/max}
*/
setReadOnly( ns, 'itermax', require( '@stdlib/stats/iter/max' ) );

/**
* @name itermaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/maxabs}
*/
setReadOnly( ns, 'itermaxabs', require( '@stdlib/stats/iter/maxabs' ) );

/**
* @name itermean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mean}
*/
setReadOnly( ns, 'itermean', require( '@stdlib/stats/iter/mean' ) );

/**
* @name itermeanabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/meanabs}
*/
setReadOnly( ns, 'itermeanabs', require( '@stdlib/stats/iter/meanabs' ) );

/**
* @name itermeanabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/meanabs2}
*/
setReadOnly( ns, 'itermeanabs2', require( '@stdlib/stats/iter/meanabs2' ) );

/**
* @name itermidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/midrange}
*/
setReadOnly( ns, 'itermidrange', require( '@stdlib/stats/iter/midrange' ) );

/**
* @name itermin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/min}
*/
setReadOnly( ns, 'itermin', require( '@stdlib/stats/iter/min' ) );

/**
* @name iterminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/minabs}
*/
setReadOnly( ns, 'iterminabs', require( '@stdlib/stats/iter/minabs' ) );

/**
* @name itermmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmax}
*/
setReadOnly( ns, 'itermmax', require( '@stdlib/stats/iter/mmax' ) );

/**
* @name itermmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmaxabs}
*/
setReadOnly( ns, 'itermmaxabs', require( '@stdlib/stats/iter/mmaxabs' ) );

/**
* @name itermmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmean}
*/
setReadOnly( ns, 'itermmean', require( '@stdlib/stats/iter/mmean' ) );

/**
* @name itermmeanabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmeanabs}
*/
setReadOnly( ns, 'itermmeanabs', require( '@stdlib/stats/iter/mmeanabs' ) );

/**
* @name itermmeanabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmeanabs2}
*/
setReadOnly( ns, 'itermmeanabs2', require( '@stdlib/stats/iter/mmeanabs2' ) );

/**
* @name itermmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmidrange}
*/
setReadOnly( ns, 'itermmidrange', require( '@stdlib/stats/iter/mmidrange' ) );

/**
* @name itermmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mmin}
*/
setReadOnly( ns, 'itermmin', require( '@stdlib/stats/iter/mmin' ) );

/**
* @name itermminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mminabs}
*/
setReadOnly( ns, 'itermminabs', require( '@stdlib/stats/iter/mminabs' ) );

/**
* @name itermprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mprod}
*/
setReadOnly( ns, 'itermprod', require( '@stdlib/stats/iter/mprod' ) );

/**
* @name itermrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/mrange}
*/
setReadOnly( ns, 'itermrange', require( '@stdlib/stats/iter/mrange' ) );

/**
* @name itermsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/msum}
*/
setReadOnly( ns, 'itermsum', require( '@stdlib/stats/iter/msum' ) );

/**
* @name itermsumabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/msumabs}
*/
setReadOnly( ns, 'itermsumabs', require( '@stdlib/stats/iter/msumabs' ) );

/**
* @name itermsumabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/msumabs2}
*/
setReadOnly( ns, 'itermsumabs2', require( '@stdlib/stats/iter/msumabs2' ) );

/**
* @name iterprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/prod}
*/
setReadOnly( ns, 'iterprod', require( '@stdlib/stats/iter/prod' ) );

/**
* @name iterrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/range}
*/
setReadOnly( ns, 'iterrange', require( '@stdlib/stats/iter/range' ) );

/**
* @name iterstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/stdev}
*/
setReadOnly( ns, 'iterstdev', require( '@stdlib/stats/iter/stdev' ) );

/**
* @name itersum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/sum}
*/
setReadOnly( ns, 'itersum', require( '@stdlib/stats/iter/sum' ) );

/**
* @name itersumabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/sumabs}
*/
setReadOnly( ns, 'itersumabs', require( '@stdlib/stats/iter/sumabs' ) );

/**
* @name itersumabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/sumabs2}
*/
setReadOnly( ns, 'itersumabs2', require( '@stdlib/stats/iter/sumabs2' ) );

/**
* @name itervariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/iter/variance}
*/
setReadOnly( ns, 'itervariance', require( '@stdlib/stats/iter/variance' ) );


// EXPORTS //

module.exports = ns;
