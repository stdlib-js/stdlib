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
* @name incrapcorr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/apcorr}
*/
setReadOnly( ns, 'incrapcorr', require( '@stdlib/stats/incr/apcorr' ) );

/**
* @name incrcount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/count}
*/
setReadOnly( ns, 'incrcount', require( '@stdlib/stats/incr/count' ) );

/**
* @name incrcovariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/covariance}
*/
setReadOnly( ns, 'incrcovariance', require( '@stdlib/stats/incr/covariance' ) );

/**
* @name incrcovmat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/covmat}
*/
setReadOnly( ns, 'incrcovmat', require( '@stdlib/stats/incr/covmat' ) );

/**
* @name incrcv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/cv}
*/
setReadOnly( ns, 'incrcv', require( '@stdlib/stats/incr/cv' ) );

/**
* @name increwmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/ewmean}
*/
setReadOnly( ns, 'increwmean', require( '@stdlib/stats/incr/ewmean' ) );

/**
* @name increwstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/ewstdev}
*/
setReadOnly( ns, 'increwstdev', require( '@stdlib/stats/incr/ewstdev' ) );

/**
* @name increwvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/ewvariance}
*/
setReadOnly( ns, 'increwvariance', require( '@stdlib/stats/incr/ewvariance' ) );

/**
* @name incrgmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/gmean}
*/
setReadOnly( ns, 'incrgmean', require( '@stdlib/stats/incr/gmean' ) );

/**
* @name incrgrubbs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/grubbs}
*/
setReadOnly( ns, 'incrgrubbs', require( '@stdlib/stats/incr/grubbs' ) );

/**
* @name incrhmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/hmean}
*/
setReadOnly( ns, 'incrhmean', require( '@stdlib/stats/incr/hmean' ) );

/**
* @name incrkurtosis
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/kurtosis}
*/
setReadOnly( ns, 'incrkurtosis', require( '@stdlib/stats/incr/kurtosis' ) );

/**
* @name incrmaape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/maape}
*/
setReadOnly( ns, 'incrmaape', require( '@stdlib/stats/incr/maape' ) );

/**
* @name incrmae
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mae}
*/
setReadOnly( ns, 'incrmae', require( '@stdlib/stats/incr/mae' ) );

/**
* @name incrmapcorr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mapcorr}
*/
setReadOnly( ns, 'incrmapcorr', require( '@stdlib/stats/incr/mapcorr' ) );

/**
* @name incrmape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mape}
*/
setReadOnly( ns, 'incrmape', require( '@stdlib/stats/incr/mape' ) );

/**
* @name incrmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/max}
*/
setReadOnly( ns, 'incrmax', require( '@stdlib/stats/incr/max' ) );

/**
* @name incrmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/maxabs}
*/
setReadOnly( ns, 'incrmaxabs', require( '@stdlib/stats/incr/maxabs' ) );

/**
* @name incrmcovariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mcovariance}
*/
setReadOnly( ns, 'incrmcovariance', require( '@stdlib/stats/incr/mcovariance' ) );

/**
* @name incrmcv
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mcv}
*/
setReadOnly( ns, 'incrmcv', require( '@stdlib/stats/incr/mcv' ) );

/**
* @name incrmda
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mda}
*/
setReadOnly( ns, 'incrmda', require( '@stdlib/stats/incr/mda' ) );

/**
* @name incrme
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/me}
*/
setReadOnly( ns, 'incrme', require( '@stdlib/stats/incr/me' ) );

/**
* @name incrmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mean}
*/
setReadOnly( ns, 'incrmean', require( '@stdlib/stats/incr/mean' ) );

/**
* @name incrmeanabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/meanabs}
*/
setReadOnly( ns, 'incrmeanabs', require( '@stdlib/stats/incr/meanabs' ) );

/**
* @name incrmeanabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/meanabs2}
*/
setReadOnly( ns, 'incrmeanabs2', require( '@stdlib/stats/incr/meanabs2' ) );

/**
* @name incrmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/meanstdev}
*/
setReadOnly( ns, 'incrmeanstdev', require( '@stdlib/stats/incr/meanstdev' ) );

/**
* @name incrmeanvar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/meanvar}
*/
setReadOnly( ns, 'incrmeanvar', require( '@stdlib/stats/incr/meanvar' ) );

/**
* @name incrmgmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mgmean}
*/
setReadOnly( ns, 'incrmgmean', require( '@stdlib/stats/incr/mgmean' ) );

/**
* @name incrmgrubbs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mgrubbs}
*/
setReadOnly( ns, 'incrmgrubbs', require( '@stdlib/stats/incr/mgrubbs' ) );

/**
* @name incrmhmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mhmean}
*/
setReadOnly( ns, 'incrmhmean', require( '@stdlib/stats/incr/mhmean' ) );

/**
* @name incrmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/midrange}
*/
setReadOnly( ns, 'incrmidrange', require( '@stdlib/stats/incr/midrange' ) );

/**
* @name incrmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/min}
*/
setReadOnly( ns, 'incrmin', require( '@stdlib/stats/incr/min' ) );

/**
* @name incrminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/minabs}
*/
setReadOnly( ns, 'incrminabs', require( '@stdlib/stats/incr/minabs' ) );

/**
* @name incrminmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/minmax}
*/
setReadOnly( ns, 'incrminmax', require( '@stdlib/stats/incr/minmax' ) );

/**
* @name incrminmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/minmaxabs}
*/
setReadOnly( ns, 'incrminmaxabs', require( '@stdlib/stats/incr/minmaxabs' ) );

/**
* @name incrmmaape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmaape}
*/
setReadOnly( ns, 'incrmmaape', require( '@stdlib/stats/incr/mmaape' ) );

/**
* @name incrmmae
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmae}
*/
setReadOnly( ns, 'incrmmae', require( '@stdlib/stats/incr/mmae' ) );

/**
* @name incrmmape
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmape}
*/
setReadOnly( ns, 'incrmmape', require( '@stdlib/stats/incr/mmape' ) );

/**
* @name incrmmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmax}
*/
setReadOnly( ns, 'incrmmax', require( '@stdlib/stats/incr/mmax' ) );

/**
* @name incrmmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmaxabs}
*/
setReadOnly( ns, 'incrmmaxabs', require( '@stdlib/stats/incr/mmaxabs' ) );

/**
* @name incrmmda
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmda}
*/
setReadOnly( ns, 'incrmmda', require( '@stdlib/stats/incr/mmda' ) );

/**
* @name incrmme
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mme}
*/
setReadOnly( ns, 'incrmme', require( '@stdlib/stats/incr/mme' ) );

/**
* @name incrmmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmean}
*/
setReadOnly( ns, 'incrmmean', require( '@stdlib/stats/incr/mmean' ) );

/**
* @name incrmmeanabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmeanabs}
*/
setReadOnly( ns, 'incrmmeanabs', require( '@stdlib/stats/incr/mmeanabs' ) );

/**
* @name incrmmeanabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmeanabs2}
*/
setReadOnly( ns, 'incrmmeanabs2', require( '@stdlib/stats/incr/mmeanabs2' ) );

/**
* @name incrmmeanstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmeanstdev}
*/
setReadOnly( ns, 'incrmmeanstdev', require( '@stdlib/stats/incr/mmeanstdev' ) );

/**
* @name incrmmeanvar
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmeanvar}
*/
setReadOnly( ns, 'incrmmeanvar', require( '@stdlib/stats/incr/mmeanvar' ) );

/**
* @name incrmmidrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmidrange}
*/
setReadOnly( ns, 'incrmmidrange', require( '@stdlib/stats/incr/mmidrange' ) );

/**
* @name incrmmin
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmin}
*/
setReadOnly( ns, 'incrmmin', require( '@stdlib/stats/incr/mmin' ) );

/**
* @name incrmminabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mminabs}
*/
setReadOnly( ns, 'incrmminabs', require( '@stdlib/stats/incr/mminabs' ) );

/**
* @name incrmminmax
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mminmax}
*/
setReadOnly( ns, 'incrmminmax', require( '@stdlib/stats/incr/mminmax' ) );

/**
* @name incrmminmaxabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mminmaxabs}
*/
setReadOnly( ns, 'incrmminmaxabs', require( '@stdlib/stats/incr/mminmaxabs' ) );

/**
* @name incrmmpe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmpe}
*/
setReadOnly( ns, 'incrmmpe', require( '@stdlib/stats/incr/mmpe' ) );

/**
* @name incrmmse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mmse}
*/
setReadOnly( ns, 'incrmmse', require( '@stdlib/stats/incr/mmse' ) );

/**
* @name incrmpcorr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mpcorr}
*/
setReadOnly( ns, 'incrmpcorr', require( '@stdlib/stats/incr/mpcorr' ) );

/**
* @name incrmpcorr2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mpcorr2}
*/
setReadOnly( ns, 'incrmpcorr2', require( '@stdlib/stats/incr/mpcorr2' ) );

/**
* @name incrmpcorrdist
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mpcorrdist}
*/
setReadOnly( ns, 'incrmpcorrdist', require( '@stdlib/stats/incr/mpcorrdist' ) );

/**
* @name incrmpe
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mpe}
*/
setReadOnly( ns, 'incrmpe', require( '@stdlib/stats/incr/mpe' ) );

/**
* @name incrmprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mprod}
*/
setReadOnly( ns, 'incrmprod', require( '@stdlib/stats/incr/mprod' ) );

/**
* @name incrmrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mrange}
*/
setReadOnly( ns, 'incrmrange', require( '@stdlib/stats/incr/mrange' ) );

/**
* @name incrmrmse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mrmse}
*/
setReadOnly( ns, 'incrmrmse', require( '@stdlib/stats/incr/mrmse' ) );

/**
* @name incrmrss
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mrss}
*/
setReadOnly( ns, 'incrmrss', require( '@stdlib/stats/incr/mrss' ) );

/**
* @name incrmse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mse}
*/
setReadOnly( ns, 'incrmse', require( '@stdlib/stats/incr/mse' ) );

/**
* @name incrmstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mstdev}
*/
setReadOnly( ns, 'incrmstdev', require( '@stdlib/stats/incr/mstdev' ) );

/**
* @name incrmsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/msum}
*/
setReadOnly( ns, 'incrmsum', require( '@stdlib/stats/incr/msum' ) );

/**
* @name incrmsumabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/msumabs}
*/
setReadOnly( ns, 'incrmsumabs', require( '@stdlib/stats/incr/msumabs' ) );

/**
* @name incrmsumabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/msumabs2}
*/
setReadOnly( ns, 'incrmsumabs2', require( '@stdlib/stats/incr/msumabs2' ) );

/**
* @name incrmsummary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/msummary}
*/
setReadOnly( ns, 'incrmsummary', require( '@stdlib/stats/incr/msummary' ) );

/**
* @name incrmsumprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/msumprod}
*/
setReadOnly( ns, 'incrmsumprod', require( '@stdlib/stats/incr/msumprod' ) );

/**
* @name incrmvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mvariance}
*/
setReadOnly( ns, 'incrmvariance', require( '@stdlib/stats/incr/mvariance' ) );

/**
* @name incrmvmr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/mvmr}
*/
setReadOnly( ns, 'incrmvmr', require( '@stdlib/stats/incr/mvmr' ) );

/**
* @name incrnancount
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/nancount}
*/
setReadOnly( ns, 'incrnancount', require( '@stdlib/stats/incr/nancount' ) );

/**
* @name incrnansum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/nansum}
*/
setReadOnly( ns, 'incrnansum', require( '@stdlib/stats/incr/nansum' ) );

/**
* @name incrnansumabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/nansumabs}
*/
setReadOnly( ns, 'incrnansumabs', require( '@stdlib/stats/incr/nansumabs' ) );

/**
* @name incrnansumabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/nansumabs2}
*/
setReadOnly( ns, 'incrnansumabs2', require( '@stdlib/stats/incr/nansumabs2' ) );

/**
* @name incrpcorr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/pcorr}
*/
setReadOnly( ns, 'incrpcorr', require( '@stdlib/stats/incr/pcorr' ) );

/**
* @name incrpcorr2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/pcorr2}
*/
setReadOnly( ns, 'incrpcorr2', require( '@stdlib/stats/incr/pcorr2' ) );

/**
* @name incrpcorrdist
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/pcorrdist}
*/
setReadOnly( ns, 'incrpcorrdist', require( '@stdlib/stats/incr/pcorrdist' ) );

/**
* @name incrpcorrdistmat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/pcorrdistmat}
*/
setReadOnly( ns, 'incrpcorrdistmat', require( '@stdlib/stats/incr/pcorrdistmat' ) );

/**
* @name incrpcorrmat
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/pcorrmat}
*/
setReadOnly( ns, 'incrpcorrmat', require( '@stdlib/stats/incr/pcorrmat' ) );

/**
* @name incrprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/prod}
*/
setReadOnly( ns, 'incrprod', require( '@stdlib/stats/incr/prod' ) );

/**
* @name incrrange
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/range}
*/
setReadOnly( ns, 'incrrange', require( '@stdlib/stats/incr/range' ) );

/**
* @name incrrmse
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/rmse}
*/
setReadOnly( ns, 'incrrmse', require( '@stdlib/stats/incr/rmse' ) );

/**
* @name incrrss
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/rss}
*/
setReadOnly( ns, 'incrrss', require( '@stdlib/stats/incr/rss' ) );

/**
* @name incrskewness
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/skewness}
*/
setReadOnly( ns, 'incrskewness', require( '@stdlib/stats/incr/skewness' ) );

/**
* @name incrstdev
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/stdev}
*/
setReadOnly( ns, 'incrstdev', require( '@stdlib/stats/incr/stdev' ) );

/**
* @name incrsum
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/sum}
*/
setReadOnly( ns, 'incrsum', require( '@stdlib/stats/incr/sum' ) );

/**
* @name incrsumabs
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/sumabs}
*/
setReadOnly( ns, 'incrsumabs', require( '@stdlib/stats/incr/sumabs' ) );

/**
* @name incrsumabs2
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/sumabs2}
*/
setReadOnly( ns, 'incrsumabs2', require( '@stdlib/stats/incr/sumabs2' ) );

/**
* @name incrsummary
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/summary}
*/
setReadOnly( ns, 'incrsummary', require( '@stdlib/stats/incr/summary' ) );

/**
* @name incrsumprod
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/sumprod}
*/
setReadOnly( ns, 'incrsumprod', require( '@stdlib/stats/incr/sumprod' ) );

/**
* @name incrvariance
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/variance}
*/
setReadOnly( ns, 'incrvariance', require( '@stdlib/stats/incr/variance' ) );

/**
* @name incrvmr
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/vmr}
*/
setReadOnly( ns, 'incrvmr', require( '@stdlib/stats/incr/vmr' ) );

/**
* @name incrwmean
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/stats/incr/wmean}
*/
setReadOnly( ns, 'incrwmean', require( '@stdlib/stats/incr/wmean' ) );


// EXPORTS //

module.exports = ns;
