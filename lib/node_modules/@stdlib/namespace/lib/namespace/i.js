/* eslint-disable max-lines */

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

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'identity',
	'path': '@stdlib/utils/identity-function',
	'value': require( '@stdlib/utils/identity-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/constant-function'
	]
});

ns.push({
	'alias': 'ifelse',
	'path': '@stdlib/utils/if-else',
	'value': require( '@stdlib/utils/if-else' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/if-else',
		'@stdlib/utils/if-then'
	]
});

ns.push({
	'alias': 'ifelseAsync',
	'path': '@stdlib/utils/async/if-else',
	'value': require( '@stdlib/utils/async/if-else' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/if-then',
		'@stdlib/utils/if-else'
	]
});

ns.push({
	'alias': 'ifthen',
	'path': '@stdlib/utils/if-then',
	'value': require( '@stdlib/utils/if-then' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/if-then',
		'@stdlib/utils/if-else'
	]
});

ns.push({
	'alias': 'ifthenAsync',
	'path': '@stdlib/utils/async/if-then',
	'value': require( '@stdlib/utils/async/if-then' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/if-else',
		'@stdlib/utils/if-then'
	]
});

ns.push({
	'alias': 'imag',
	'path': '@stdlib/complex/imag',
	'value': require( '@stdlib/complex/imag' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/real',
		'@stdlib/complex/reim'
	]
});

ns.push({
	'alias': 'imagf',
	'path': '@stdlib/complex/imagf',
	'value': require( '@stdlib/complex/imagf' ),
	'type': 'Function',
	'related': [
		'@stdlib/complex/imag',
		'@stdlib/complex/realf',
		'@stdlib/complex/reimf'
	]
});

ns.push({
	'alias': 'IMG_ACANTHUS_MOLLIS',
	'path': '@stdlib/datasets/img-acanthus-mollis',
	'value': require( '@stdlib/datasets/img-acanthus-mollis' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/img-allium-oreophilum'
	]
});

ns.push({
	'alias': 'IMG_AIRPLANE_FROM_ABOVE',
	'path': '@stdlib/datasets/img-airplane-from-above',
	'value': require( '@stdlib/datasets/img-airplane-from-above' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'IMG_ALLIUM_OREOPHILUM',
	'path': '@stdlib/datasets/img-allium-oreophilum',
	'value': require( '@stdlib/datasets/img-allium-oreophilum' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/img-acanthus-mollis'
	]
});

ns.push({
	'alias': 'IMG_BLACK_CANYON',
	'path': '@stdlib/datasets/img-black-canyon',
	'value': require( '@stdlib/datasets/img-black-canyon' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'IMG_DUST_BOWL_HOME',
	'path': '@stdlib/datasets/img-dust-bowl-home',
	'value': require( '@stdlib/datasets/img-dust-bowl-home' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'IMG_FRENCH_ALPINE_LANDSCAPE',
	'path': '@stdlib/datasets/img-french-alpine-landscape',
	'value': require( '@stdlib/datasets/img-french-alpine-landscape' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'IMG_LOCOMOTION_HOUSE_CAT',
	'path': '@stdlib/datasets/img-locomotion-house-cat',
	'value': require( '@stdlib/datasets/img-locomotion-house-cat' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/img-locomotion-nude-male'
	]
});

ns.push({
	'alias': 'IMG_LOCOMOTION_NUDE_MALE',
	'path': '@stdlib/datasets/img-locomotion-nude-male',
	'value': require( '@stdlib/datasets/img-locomotion-nude-male' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/img-locomotion-house-cat'
	]
});

ns.push({
	'alias': 'IMG_MARCH_PASTORAL',
	'path': '@stdlib/datasets/img-march-pastoral',
	'value': require( '@stdlib/datasets/img-march-pastoral' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'IMG_NAGASAKI_BOATS',
	'path': '@stdlib/datasets/img-nagasaki-boats',
	'value': require( '@stdlib/datasets/img-nagasaki-boats' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'incrapcorr',
	'path': '@stdlib/stats/incr/apcorr',
	'value': require( '@stdlib/stats/incr/apcorr' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/apcorrmat',
		'@stdlib/stats/incr/mapcorr',
		'@stdlib/stats/incr/pcorr',
		'@stdlib/stats/incr/pcorr2'
	]
});

ns.push({
	'alias': 'incrBinaryClassification',
	'path': '@stdlib/ml/incr/binary-classification',
	'value': require( '@stdlib/ml/incr/binary-classification' ),
	'type': 'Function',
	'related': [
		'@stdlib/ml/incr/sgd-regression'
	]
});

ns.push({
	'alias': 'incrcount',
	'path': '@stdlib/stats/incr/count',
	'value': require( '@stdlib/stats/incr/count' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/sum',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrcovariance',
	'path': '@stdlib/stats/incr/covariance',
	'value': require( '@stdlib/stats/incr/covariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mcovariance',
		'@stdlib/stats/incr/pcorr',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrcovmat',
	'path': '@stdlib/stats/incr/covmat',
	'value': require( '@stdlib/stats/incr/covmat' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/covariance',
		'@stdlib/stats/incr/mcovmat',
		'@stdlib/stats/incr/pcorrmat'
	]
});

ns.push({
	'alias': 'incrcv',
	'path': '@stdlib/stats/incr/cv',
	'value': require( '@stdlib/stats/incr/cv' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mcv',
		'@stdlib/stats/incr/stdev',
		'@stdlib/stats/incr/vmr'
	]
});

ns.push({
	'alias': 'increwmean',
	'path': '@stdlib/stats/incr/ewmean',
	'value': require( '@stdlib/stats/incr/ewmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/ewvariance',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/wmean'
	]
});

ns.push({
	'alias': 'increwstdev',
	'path': '@stdlib/stats/incr/ewstdev',
	'value': require( '@stdlib/stats/incr/ewstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/ewvariance',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/stdev'
	]
});

ns.push({
	'alias': 'increwvariance',
	'path': '@stdlib/stats/incr/ewvariance',
	'value': require( '@stdlib/stats/incr/ewvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/ewmean',
		'@stdlib/stats/incr/ewstdev',
		'@stdlib/stats/incr/variance',
		'@stdlib/stats/incr/mvariance'
	]
});

ns.push({
	'alias': 'incrgmean',
	'path': '@stdlib/stats/incr/gmean',
	'value': require( '@stdlib/stats/incr/gmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/hmean',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mgmean',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrgrubbs',
	'path': '@stdlib/stats/incr/grubbs',
	'value': require( '@stdlib/stats/incr/grubbs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mgrubbs'
	]
});

ns.push({
	'alias': 'incrhmean',
	'path': '@stdlib/stats/incr/hmean',
	'value': require( '@stdlib/stats/incr/hmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/gmean',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mhmean',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrkmeans',
	'path': '@stdlib/ml/incr/kmeans',
	'value': require( '@stdlib/ml/incr/kmeans' ),
	'type': 'Function',
	'related': [
		'@stdlib/ml/incr/ewkmeans',
		'@stdlib/ml/incr/mkmeans',
		'@stdlib/ml/incr/skmeans'
	]
});

ns.push({
	'alias': 'incrkurtosis',
	'path': '@stdlib/stats/incr/kurtosis',
	'value': require( '@stdlib/stats/incr/kurtosis' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mkurtosis',
		'@stdlib/stats/incr/skewness',
		'@stdlib/stats/incr/stdev',
		'@stdlib/stats/incr/summary',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrmaape',
	'path': '@stdlib/stats/incr/maape',
	'value': require( '@stdlib/stats/incr/maape' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mae',
		'@stdlib/stats/incr/mape',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mmaape'
	]
});

ns.push({
	'alias': 'incrmae',
	'path': '@stdlib/stats/incr/mae',
	'value': require( '@stdlib/stats/incr/mae' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mape',
		'@stdlib/stats/incr/me',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mmae'
	]
});

ns.push({
	'alias': 'incrmapcorr',
	'path': '@stdlib/stats/incr/mapcorr',
	'value': require( '@stdlib/stats/incr/mapcorr' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/apcorr',
		'@stdlib/stats/incr/mapcorrmat',
		'@stdlib/stats/incr/mpcorr',
		'@stdlib/stats/incr/mpcorr2'
	]
});

ns.push({
	'alias': 'incrmape',
	'path': '@stdlib/stats/incr/mape',
	'value': require( '@stdlib/stats/incr/mape' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/maape',
		'@stdlib/stats/incr/mae',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mmape'
	]
});

ns.push({
	'alias': 'incrmax',
	'path': '@stdlib/stats/incr/max',
	'value': require( '@stdlib/stats/incr/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/midrange',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/range',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrmaxabs',
	'path': '@stdlib/stats/incr/maxabs',
	'value': require( '@stdlib/stats/incr/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/minabs',
		'@stdlib/stats/incr/mmaxabs'
	]
});

ns.push({
	'alias': 'incrmcovariance',
	'path': '@stdlib/stats/incr/mcovariance',
	'value': require( '@stdlib/stats/incr/mcovariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/covariance',
		'@stdlib/stats/incr/mcovmat',
		'@stdlib/stats/incr/mpcorr',
		'@stdlib/stats/incr/mvariance'
	]
});

ns.push({
	'alias': 'incrmcv',
	'path': '@stdlib/stats/incr/mcv',
	'value': require( '@stdlib/stats/incr/mcv' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/cv',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/mvmr'
	]
});

ns.push({
	'alias': 'incrmda',
	'path': '@stdlib/stats/incr/mda',
	'value': require( '@stdlib/stats/incr/mda' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mape',
		'@stdlib/stats/incr/mmda'
	]
});

ns.push({
	'alias': 'incrme',
	'path': '@stdlib/stats/incr/me',
	'value': require( '@stdlib/stats/incr/me' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mae',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mme'
	]
});

ns.push({
	'alias': 'incrmean',
	'path': '@stdlib/stats/incr/mean',
	'value': require( '@stdlib/stats/incr/mean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/midrange',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/stdev',
		'@stdlib/stats/incr/sum',
		'@stdlib/stats/incr/summary',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrmeanabs',
	'path': '@stdlib/stats/incr/meanabs',
	'value': require( '@stdlib/stats/incr/meanabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mmeanabs',
		'@stdlib/stats/incr/sumabs'
	]
});

ns.push({
	'alias': 'incrmeanabs2',
	'path': '@stdlib/stats/incr/meanabs2',
	'value': require( '@stdlib/stats/incr/meanabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/meanabs',
		'@stdlib/stats/incr/mmeanabs2',
		'@stdlib/stats/incr/sumabs2'
	]
});

ns.push({
	'alias': 'incrmeanstdev',
	'path': '@stdlib/stats/incr/meanstdev',
	'value': require( '@stdlib/stats/incr/meanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/meanvar',
		'@stdlib/stats/incr/mmeanstdev',
		'@stdlib/stats/incr/stdev'
	]
});

ns.push({
	'alias': 'incrmeanvar',
	'path': '@stdlib/stats/incr/meanvar',
	'value': require( '@stdlib/stats/incr/meanvar' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/meanstdev',
		'@stdlib/stats/incr/mmeanvar',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrmgmean',
	'path': '@stdlib/stats/incr/mgmean',
	'value': require( '@stdlib/stats/incr/mgmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/gmean',
		'@stdlib/stats/incr/mhmean',
		'@stdlib/stats/incr/mmean'
	]
});

ns.push({
	'alias': 'incrmgrubbs',
	'path': '@stdlib/stats/incr/mgrubbs',
	'value': require( '@stdlib/stats/incr/mgrubbs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/grubbs'
	]
});

ns.push({
	'alias': 'incrmhmean',
	'path': '@stdlib/stats/incr/mhmean',
	'value': require( '@stdlib/stats/incr/mhmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/hmean',
		'@stdlib/stats/incr/mgmean',
		'@stdlib/stats/incr/mmean'
	]
});

ns.push({
	'alias': 'incrmidrange',
	'path': '@stdlib/stats/incr/midrange',
	'value': require( '@stdlib/stats/incr/midrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/range',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrmin',
	'path': '@stdlib/stats/incr/min',
	'value': require( '@stdlib/stats/incr/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/midrange',
		'@stdlib/stats/incr/mmin',
		'@stdlib/stats/incr/range',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrminabs',
	'path': '@stdlib/stats/incr/minabs',
	'value': require( '@stdlib/stats/incr/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/maxabs',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/mminabs'
	]
});

ns.push({
	'alias': 'incrminmax',
	'path': '@stdlib/stats/incr/minmax',
	'value': require( '@stdlib/stats/incr/minmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/mminmax',
		'@stdlib/stats/incr/range'
	]
});

ns.push({
	'alias': 'incrminmaxabs',
	'path': '@stdlib/stats/incr/minmaxabs',
	'value': require( '@stdlib/stats/incr/minmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/maxabs',
		'@stdlib/stats/incr/minabs',
		'@stdlib/stats/incr/minmax',
		'@stdlib/stats/incr/mminmaxabs'
	]
});

ns.push({
	'alias': 'incrmmaape',
	'path': '@stdlib/stats/incr/mmaape',
	'value': require( '@stdlib/stats/incr/mmaape' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/maape',
		'@stdlib/stats/incr/mmape',
		'@stdlib/stats/incr/mmpe',
		'@stdlib/stats/incr/mmean'
	]
});

ns.push({
	'alias': 'incrmmae',
	'path': '@stdlib/stats/incr/mmae',
	'value': require( '@stdlib/stats/incr/mmae' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mae',
		'@stdlib/stats/incr/mme',
		'@stdlib/stats/incr/mmean'
	]
});

ns.push({
	'alias': 'incrmmape',
	'path': '@stdlib/stats/incr/mmape',
	'value': require( '@stdlib/stats/incr/mmape' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mape',
		'@stdlib/stats/incr/mmaape',
		'@stdlib/stats/incr/mmpe',
		'@stdlib/stats/incr/mmean'
	]
});

ns.push({
	'alias': 'incrmmax',
	'path': '@stdlib/stats/incr/mmax',
	'value': require( '@stdlib/stats/incr/mmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/mmidrange',
		'@stdlib/stats/incr/mmin',
		'@stdlib/stats/incr/mrange',
		'@stdlib/stats/incr/msummary'
	]
});

ns.push({
	'alias': 'incrmmaxabs',
	'path': '@stdlib/stats/incr/mmaxabs',
	'value': require( '@stdlib/stats/incr/mmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/maxabs',
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/mminabs'
	]
});

ns.push({
	'alias': 'incrmmda',
	'path': '@stdlib/stats/incr/mmda',
	'value': require( '@stdlib/stats/incr/mmda' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mda',
		'@stdlib/stats/incr/mmape'
	]
});

ns.push({
	'alias': 'incrmme',
	'path': '@stdlib/stats/incr/mme',
	'value': require( '@stdlib/stats/incr/mme' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/me',
		'@stdlib/stats/incr/mmae',
		'@stdlib/stats/incr/mmean'
	]
});

ns.push({
	'alias': 'incrmmean',
	'path': '@stdlib/stats/incr/mmean',
	'value': require( '@stdlib/stats/incr/mmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/msum',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/msummary',
		'@stdlib/stats/incr/mvariance'
	]
});

ns.push({
	'alias': 'incrmmeanabs',
	'path': '@stdlib/stats/incr/mmeanabs',
	'value': require( '@stdlib/stats/incr/mmeanabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/meanabs',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/msumabs'
	]
});

ns.push({
	'alias': 'incrmmeanabs2',
	'path': '@stdlib/stats/incr/mmeanabs2',
	'value': require( '@stdlib/stats/incr/mmeanabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/meanabs2',
		'@stdlib/stats/incr/mmeanabs',
		'@stdlib/stats/incr/msumabs2'
	]
});

ns.push({
	'alias': 'incrmmeanstdev',
	'path': '@stdlib/stats/incr/mmeanstdev',
	'value': require( '@stdlib/stats/incr/mmeanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/meanstdev',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mmeanvar',
		'@stdlib/stats/incr/mstdev'
	]
});

ns.push({
	'alias': 'incrmmeanvar',
	'path': '@stdlib/stats/incr/mmeanvar',
	'value': require( '@stdlib/stats/incr/mmeanvar' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/meanvar',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mmeanstdev',
		'@stdlib/stats/incr/mvariance'
	]
});

ns.push({
	'alias': 'incrmmidrange',
	'path': '@stdlib/stats/incr/mmidrange',
	'value': require( '@stdlib/stats/incr/mmidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/mmin',
		'@stdlib/stats/incr/mrange'
	]
});

ns.push({
	'alias': 'incrmmin',
	'path': '@stdlib/stats/incr/mmin',
	'value': require( '@stdlib/stats/incr/mmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/mmidrange',
		'@stdlib/stats/incr/mrange',
		'@stdlib/stats/incr/msummary'
	]
});

ns.push({
	'alias': 'incrmminabs',
	'path': '@stdlib/stats/incr/mminabs',
	'value': require( '@stdlib/stats/incr/mminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/minabs',
		'@stdlib/stats/incr/mmaxabs',
		'@stdlib/stats/incr/mmin'
	]
});

ns.push({
	'alias': 'incrmminmax',
	'path': '@stdlib/stats/incr/mminmax',
	'value': require( '@stdlib/stats/incr/mminmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/minmax',
		'@stdlib/stats/incr/mmin',
		'@stdlib/stats/incr/mrange'
	]
});

ns.push({
	'alias': 'incrmminmaxabs',
	'path': '@stdlib/stats/incr/mminmaxabs',
	'value': require( '@stdlib/stats/incr/mminmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/minmaxabs',
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/mmaxabs',
		'@stdlib/stats/incr/mmin',
		'@stdlib/stats/incr/mminabs',
		'@stdlib/stats/incr/mminmax'
	]
});

ns.push({
	'alias': 'incrmmpe',
	'path': '@stdlib/stats/incr/mmpe',
	'value': require( '@stdlib/stats/incr/mmpe' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmape',
		'@stdlib/stats/incr/mme',
		'@stdlib/stats/incr/mpe'
	]
});

ns.push({
	'alias': 'incrmmse',
	'path': '@stdlib/stats/incr/mmse',
	'value': require( '@stdlib/stats/incr/mmse' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mrmse',
		'@stdlib/stats/incr/mrss',
		'@stdlib/stats/incr/mse'
	]
});

ns.push({
	'alias': 'incrmpcorr',
	'path': '@stdlib/stats/incr/mpcorr',
	'value': require( '@stdlib/stats/incr/mpcorr' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mcovariance',
		'@stdlib/stats/incr/mpcorrdist',
		'@stdlib/stats/incr/mpcorrdistmat',
		'@stdlib/stats/incr/mpcorrmat',
		'@stdlib/stats/incr/pcorr'
	]
});

ns.push({
	'alias': 'incrmpcorr2',
	'path': '@stdlib/stats/incr/mpcorr2',
	'value': require( '@stdlib/stats/incr/mpcorr2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mapcorr',
		'@stdlib/stats/incr/mpcorr',
		'@stdlib/stats/incr/mpcorr2mat',
		'@stdlib/stats/incr/pcorr2'
	]
});

ns.push({
	'alias': 'incrmpcorrdist',
	'path': '@stdlib/stats/incr/mpcorrdist',
	'value': require( '@stdlib/stats/incr/mpcorrdist' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mpcorr',
		'@stdlib/stats/incr/mpcorrdistmat',
		'@stdlib/stats/incr/pcorrdist'
	]
});

ns.push({
	'alias': 'incrmpe',
	'path': '@stdlib/stats/incr/mpe',
	'value': require( '@stdlib/stats/incr/mpe' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mape',
		'@stdlib/stats/incr/me',
		'@stdlib/stats/incr/mmpe'
	]
});

ns.push({
	'alias': 'incrmprod',
	'path': '@stdlib/stats/incr/mprod',
	'value': require( '@stdlib/stats/incr/mprod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/msum',
		'@stdlib/stats/incr/prod'
	]
});

ns.push({
	'alias': 'incrmrange',
	'path': '@stdlib/stats/incr/mrange',
	'value': require( '@stdlib/stats/incr/mrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmax',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mmin',
		'@stdlib/stats/incr/msummary',
		'@stdlib/stats/incr/range'
	]
});

ns.push({
	'alias': 'incrmrmse',
	'path': '@stdlib/stats/incr/mrmse',
	'value': require( '@stdlib/stats/incr/mrmse' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmse',
		'@stdlib/stats/incr/mrss',
		'@stdlib/stats/incr/rmse'
	]
});

ns.push({
	'alias': 'incrmrss',
	'path': '@stdlib/stats/incr/mrss',
	'value': require( '@stdlib/stats/incr/mrss' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/rss',
		'@stdlib/stats/incr/mmse',
		'@stdlib/stats/incr/mrmse'
	]
});

ns.push({
	'alias': 'incrmse',
	'path': '@stdlib/stats/incr/mse',
	'value': require( '@stdlib/stats/incr/mse' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmse',
		'@stdlib/stats/incr/rmse',
		'@stdlib/stats/incr/rss'
	]
});

ns.push({
	'alias': 'incrmstdev',
	'path': '@stdlib/stats/incr/mstdev',
	'value': require( '@stdlib/stats/incr/mstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/msummary',
		'@stdlib/stats/incr/mvariance',
		'@stdlib/stats/incr/stdev'
	]
});

ns.push({
	'alias': 'incrmsum',
	'path': '@stdlib/stats/incr/msum',
	'value': require( '@stdlib/stats/incr/msum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/msummary',
		'@stdlib/stats/incr/sum'
	]
});

ns.push({
	'alias': 'incrmsumabs',
	'path': '@stdlib/stats/incr/msumabs',
	'value': require( '@stdlib/stats/incr/msumabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmeanabs',
		'@stdlib/stats/incr/msum',
		'@stdlib/stats/incr/sum',
		'@stdlib/stats/incr/sumabs'
	]
});

ns.push({
	'alias': 'incrmsumabs2',
	'path': '@stdlib/stats/incr/msumabs2',
	'value': require( '@stdlib/stats/incr/msumabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmeanabs2',
		'@stdlib/stats/incr/msumabs',
		'@stdlib/stats/incr/sumabs',
		'@stdlib/stats/incr/sumabs2'
	]
});

ns.push({
	'alias': 'incrmsummary',
	'path': '@stdlib/stats/incr/msummary',
	'value': require( '@stdlib/stats/incr/msummary' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/msum',
		'@stdlib/stats/incr/mvariance',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrmsumprod',
	'path': '@stdlib/stats/incr/msumprod',
	'value': require( '@stdlib/stats/incr/msumprod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mprod',
		'@stdlib/stats/incr/msum',
		'@stdlib/stats/incr/sumprod'
	]
});

ns.push({
	'alias': 'incrmvariance',
	'path': '@stdlib/stats/incr/mvariance',
	'value': require( '@stdlib/stats/incr/mvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/msummary',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrmvmr',
	'path': '@stdlib/stats/incr/mvmr',
	'value': require( '@stdlib/stats/incr/mvmr' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/mvariance',
		'@stdlib/stats/incr/vmr'
	]
});

ns.push({
	'alias': 'incrnancount',
	'path': '@stdlib/stats/incr/nancount',
	'value': require( '@stdlib/stats/incr/nancount' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/nanmean',
		'@stdlib/stats/incr/nansum'
	]
});

ns.push({
	'alias': 'incrnansum',
	'path': '@stdlib/stats/incr/nansum',
	'value': require( '@stdlib/stats/incr/nansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/nanmean',
		'@stdlib/stats/incr/nansumabs',
		'@stdlib/stats/incr/sum'
	]
});

ns.push({
	'alias': 'incrnansumabs',
	'path': '@stdlib/stats/incr/nansumabs',
	'value': require( '@stdlib/stats/incr/nansumabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/nanmeanabs',
		'@stdlib/stats/incr/nansum',
		'@stdlib/stats/incr/nansumabs2',
		'@stdlib/stats/incr/sumabs'
	]
});

ns.push({
	'alias': 'incrnansumabs2',
	'path': '@stdlib/stats/incr/nansumabs2',
	'value': require( '@stdlib/stats/incr/nansumabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/nanmeanabs2',
		'@stdlib/stats/incr/nansum',
		'@stdlib/stats/incr/nansumabs',
		'@stdlib/stats/incr/sumabs2'
	]
});

ns.push({
	'alias': 'incrpcorr',
	'path': '@stdlib/stats/incr/pcorr',
	'value': require( '@stdlib/stats/incr/pcorr' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/covariance',
		'@stdlib/stats/incr/mpcorr',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrpcorr2',
	'path': '@stdlib/stats/incr/pcorr2',
	'value': require( '@stdlib/stats/incr/pcorr2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/apcorr',
		'@stdlib/stats/incr/mpcorr2',
		'@stdlib/stats/incr/pcorr',
		'@stdlib/stats/incr/pcorr2mat'
	]
});

ns.push({
	'alias': 'incrpcorrdist',
	'path': '@stdlib/stats/incr/pcorrdist',
	'value': require( '@stdlib/stats/incr/pcorrdist' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/covariance',
		'@stdlib/stats/incr/pcorr',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrpcorrdistmat',
	'path': '@stdlib/stats/incr/pcorrdistmat',
	'value': require( '@stdlib/stats/incr/pcorrdistmat' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mpcorrdistmat',
		'@stdlib/stats/incr/pcorrdist',
		'@stdlib/stats/incr/pcorrmat'
	]
});

ns.push({
	'alias': 'incrpcorrmat',
	'path': '@stdlib/stats/incr/pcorrmat',
	'value': require( '@stdlib/stats/incr/pcorrmat' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/covmat',
		'@stdlib/stats/incr/mpcorrmat',
		'@stdlib/stats/incr/pcorr',
		'@stdlib/stats/incr/pcorrdistmat'
	]
});

ns.push({
	'alias': 'incrprod',
	'path': '@stdlib/stats/incr/prod',
	'value': require( '@stdlib/stats/incr/prod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mprod',
		'@stdlib/stats/incr/sum',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrrange',
	'path': '@stdlib/stats/incr/range',
	'value': require( '@stdlib/stats/incr/range' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/mrange',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrrmse',
	'path': '@stdlib/stats/incr/rmse',
	'value': require( '@stdlib/stats/incr/rmse' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mrmse',
		'@stdlib/stats/incr/mse',
		'@stdlib/stats/incr/rss'
	]
});

ns.push({
	'alias': 'incrrss',
	'path': '@stdlib/stats/incr/rss',
	'value': require( '@stdlib/stats/incr/rss' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mrss',
		'@stdlib/stats/incr/mse',
		'@stdlib/stats/incr/rmse'
	]
});

ns.push({
	'alias': 'incrSGDRegression',
	'path': '@stdlib/ml/incr/sgd-regression',
	'value': require( '@stdlib/ml/incr/sgd-regression' ),
	'type': 'Function',
	'related': [
		'@stdlib/ml/incr/binary-classification'
	]
});

ns.push({
	'alias': 'incrskewness',
	'path': '@stdlib/stats/incr/skewness',
	'value': require( '@stdlib/stats/incr/skewness' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/kurtosis',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mskewness',
		'@stdlib/stats/incr/stdev',
		'@stdlib/stats/incr/summary',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrspace',
	'path': '@stdlib/array/incrspace',
	'value': require( '@stdlib/array/incrspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/linspace',
		'@stdlib/array/logspace'
	]
});

ns.push({
	'alias': 'incrstdev',
	'path': '@stdlib/stats/incr/stdev',
	'value': require( '@stdlib/stats/incr/stdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/kurtosis',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/skewness',
		'@stdlib/stats/incr/summary',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrsum',
	'path': '@stdlib/stats/incr/sum',
	'value': require( '@stdlib/stats/incr/sum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/count',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/msum',
		'@stdlib/stats/incr/prod',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrsumabs',
	'path': '@stdlib/stats/incr/sumabs',
	'value': require( '@stdlib/stats/incr/sumabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/meanabs',
		'@stdlib/stats/incr/msumabs',
		'@stdlib/stats/incr/sum'
	]
});

ns.push({
	'alias': 'incrsumabs2',
	'path': '@stdlib/stats/incr/sumabs2',
	'value': require( '@stdlib/stats/incr/sumabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/meanabs2',
		'@stdlib/stats/incr/msumabs2',
		'@stdlib/stats/incr/sumabs'
	]
});

ns.push({
	'alias': 'incrsummary',
	'path': '@stdlib/stats/incr/summary',
	'value': require( '@stdlib/stats/incr/summary' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/count',
		'@stdlib/stats/incr/kurtosis',
		'@stdlib/stats/incr/max',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/midrange',
		'@stdlib/stats/incr/min',
		'@stdlib/stats/incr/msummary',
		'@stdlib/stats/incr/range',
		'@stdlib/stats/incr/skewness',
		'@stdlib/stats/incr/stdev',
		'@stdlib/stats/incr/sum',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrsumprod',
	'path': '@stdlib/stats/incr/sumprod',
	'value': require( '@stdlib/stats/incr/sumprod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/msumprod',
		'@stdlib/stats/incr/prod',
		'@stdlib/stats/incr/sum'
	]
});

ns.push({
	'alias': 'incrvariance',
	'path': '@stdlib/stats/incr/variance',
	'value': require( '@stdlib/stats/incr/variance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/kurtosis',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mstdev',
		'@stdlib/stats/incr/skewness',
		'@stdlib/stats/incr/stdev',
		'@stdlib/stats/incr/summary'
	]
});

ns.push({
	'alias': 'incrvmr',
	'path': '@stdlib/stats/incr/vmr',
	'value': require( '@stdlib/stats/incr/vmr' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mvmr',
		'@stdlib/stats/incr/variance'
	]
});

ns.push({
	'alias': 'incrwmean',
	'path': '@stdlib/stats/incr/wmean',
	'value': require( '@stdlib/stats/incr/wmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/incr/ewmean',
		'@stdlib/stats/incr/mean',
		'@stdlib/stats/incr/mmean',
		'@stdlib/stats/incr/wvariance'
	]
});

ns.push({
	'alias': 'ind2sub',
	'path': '@stdlib/ndarray/ind2sub',
	'value': require( '@stdlib/ndarray/ind2sub' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/sub2ind'
	]
});

ns.push({
	'alias': 'indexOf',
	'path': '@stdlib/utils/index-of',
	'value': require( '@stdlib/utils/index-of' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'inherit',
	'path': '@stdlib/utils/inherit',
	'value': require( '@stdlib/utils/inherit' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'inheritedEnumerableProperties',
	'path': '@stdlib/utils/inherited-enumerable-properties',
	'value': require( '@stdlib/utils/inherited-enumerable-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-properties',
		'@stdlib/utils/enumerable-properties-in',
		'@stdlib/utils/inherited-enumerable-property-symbols',
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/inherited-nonenumerable-properties',
		'@stdlib/utils/inherited-properties'
	]
});

ns.push({
	'alias': 'inheritedEnumerablePropertySymbols',
	'path': '@stdlib/utils/inherited-enumerable-property-symbols',
	'value': require( '@stdlib/utils/inherited-enumerable-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-properties',
		'@stdlib/utils/enumerable-property-symbols',
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/nonenumerable-property-symbols',
		'@stdlib/utils/nonenumerable-property-symbols-in',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'inheritedKeys',
	'path': '@stdlib/utils/inherited-keys',
	'value': require( '@stdlib/utils/inherited-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/keys',
		'@stdlib/utils/keys-in',
		'@stdlib/utils/inherited-property-names',
		'@stdlib/utils/inherited-property-symbols'
	]
});

ns.push({
	'alias': 'inheritedNonEnumerableProperties',
	'path': '@stdlib/utils/inherited-nonenumerable-properties',
	'value': require( '@stdlib/utils/inherited-nonenumerable-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-enumerable-properties',
		'@stdlib/utils/inherited-nonenumerable-property-names',
		'@stdlib/utils/inherited-nonenumerable-property-symbols',
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/nonenumerable-properties',
		'@stdlib/utils/nonenumerable-properties-in',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'inheritedNonEnumerablePropertyNames',
	'path': '@stdlib/utils/inherited-nonenumerable-property-names',
	'value': require( '@stdlib/utils/inherited-nonenumerable-property-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-nonenumerable-properties',
		'@stdlib/utils/inherited-nonenumerable-property-symbols',
		'@stdlib/utils/keys',
		'@stdlib/utils/nonenumerable-property-names',
		'@stdlib/utils/nonenumerable-property-names-in',
		'@stdlib/utils/nonenumerable-property-symbols',
		'@stdlib/utils/property-names'
	]
});

ns.push({
	'alias': 'inheritedNonEnumerablePropertySymbols',
	'path': '@stdlib/utils/inherited-nonenumerable-property-symbols',
	'value': require( '@stdlib/utils/inherited-nonenumerable-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-nonenumerable-properties',
		'@stdlib/utils/inherited-nonenumerable-property-names',
		'@stdlib/utils/nonenumerable-properties',
		'@stdlib/utils/nonenumerable-property-names',
		'@stdlib/utils/nonenumerable-property-symbols',
		'@stdlib/utils/nonenumerable-property-symbols-in',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'inheritedProperties',
	'path': '@stdlib/utils/inherited-properties',
	'value': require( '@stdlib/utils/inherited-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/properties',
		'@stdlib/utils/properties-in',
		'@stdlib/utils/inherited-property-names',
		'@stdlib/utils/inherited-property-symbols'
	]
});

ns.push({
	'alias': 'inheritedPropertyDescriptor',
	'path': '@stdlib/utils/inherited-property-descriptor',
	'value': require( '@stdlib/utils/inherited-property-descriptor' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/property-descriptor',
		'@stdlib/utils/property-descriptor-in',
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/inherited-property-descriptors',
		'@stdlib/utils/inherited-property-names',
		'@stdlib/utils/inherited-property-symbols'
	]
});

ns.push({
	'alias': 'inheritedPropertyDescriptors',
	'path': '@stdlib/utils/inherited-property-descriptors',
	'value': require( '@stdlib/utils/inherited-property-descriptors' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/property-descriptors',
		'@stdlib/utils/property-descriptors-in',
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/inherited-property-names',
		'@stdlib/utils/inherited-property-symbols'
	]
});

ns.push({
	'alias': 'inheritedPropertyNames',
	'path': '@stdlib/utils/inherited-property-names',
	'value': require( '@stdlib/utils/inherited-property-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/inherited-property-descriptors',
		'@stdlib/utils/inherited-property-symbols',
		'@stdlib/utils/property-names',
		'@stdlib/utils/property-names-in'
	]
});

ns.push({
	'alias': 'inheritedPropertySymbols',
	'path': '@stdlib/utils/inherited-property-symbols',
	'value': require( '@stdlib/utils/inherited-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-keys',
		'@stdlib/utils/inherited-property-descriptors',
		'@stdlib/utils/inherited-property-names',
		'@stdlib/utils/property-symbols',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'inheritedWritableProperties',
	'path': '@stdlib/utils/inherited-writable-properties',
	'value': require( '@stdlib/utils/inherited-writable-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-readable-properties',
		'@stdlib/utils/inherited-writable-property-names',
		'@stdlib/utils/inherited-writable-property-symbols',
		'@stdlib/utils/writable-properties',
		'@stdlib/utils/writable-properties-in',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'inheritedWritablePropertyNames',
	'path': '@stdlib/utils/inherited-writable-property-names',
	'value': require( '@stdlib/utils/inherited-writable-property-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-readable-property-names',
		'@stdlib/utils/inherited-writable-property-symbols',
		'@stdlib/utils/writable-property-names',
		'@stdlib/utils/writable-property-names-in',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'inheritedWritablePropertySymbols',
	'path': '@stdlib/utils/inherited-writable-property-symbols',
	'value': require( '@stdlib/utils/inherited-writable-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/inherited-readable-property-symbols',
		'@stdlib/utils/inherited-writable-property-names',
		'@stdlib/utils/writable-property-symbols',
		'@stdlib/utils/writable-property-symbols-in',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'inmap',
	'path': '@stdlib/utils/inmap',
	'value': require( '@stdlib/utils/inmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each',
		'@stdlib/utils/inmap-right',
		'@stdlib/utils/map'
	]
});

ns.push({
	'alias': 'inmapAsync',
	'path': '@stdlib/utils/async/inmap',
	'value': require( '@stdlib/utils/async/inmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/async/inmap-right',
		'@stdlib/utils/async/map',
		'@stdlib/utils/inmap'
	]
});

ns.push({
	'alias': 'inmapRight',
	'path': '@stdlib/utils/inmap-right',
	'value': require( '@stdlib/utils/inmap-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/inmap',
		'@stdlib/utils/map-right'
	]
});

ns.push({
	'alias': 'inmapRightAsync',
	'path': '@stdlib/utils/async/inmap-right',
	'value': require( '@stdlib/utils/async/inmap-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/for-each-right',
		'@stdlib/utils/async/inmap',
		'@stdlib/utils/async/map-right',
		'@stdlib/utils/inmap-right'
	]
});

ns.push({
	'alias': 'inspectSinkStream',
	'path': '@stdlib/streams/node/inspect-sink',
	'value': require( '@stdlib/streams/node/inspect-sink' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/debug-sink',
		'@stdlib/streams/node/inspect'
	]
});

ns.push({
	'alias': 'inspectStream',
	'path': '@stdlib/streams/node/inspect',
	'value': require( '@stdlib/streams/node/inspect' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/debug'
	]
});

ns.push({
	'alias': 'instanceOf',
	'path': '@stdlib/assert/instance-of',
	'value': require( '@stdlib/assert/instance-of' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-prototype-of',
		'@stdlib/utils/constructor-name',
		'@stdlib/utils/inherit',
		'@stdlib/utils/type-of'
	]
});

ns.push({
	'alias': 'INT8_MAX',
	'path': '@stdlib/constants/int8/max',
	'value': require( '@stdlib/constants/int8/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int8/min'
	]
});

ns.push({
	'alias': 'INT8_MIN',
	'path': '@stdlib/constants/int8/min',
	'value': require( '@stdlib/constants/int8/min' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int8/max'
	]
});

ns.push({
	'alias': 'INT8_NUM_BYTES',
	'path': '@stdlib/constants/int8/num-bytes',
	'value': require( '@stdlib/constants/int8/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int16/num-bytes',
		'@stdlib/constants/int32/num-bytes',
		'@stdlib/constants/uint8/num-bytes'
	]
});

ns.push({
	'alias': 'Int8Array',
	'path': '@stdlib/array/int8',
	'value': require( '@stdlib/array/int8' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'INT16_MAX',
	'path': '@stdlib/constants/int16/max',
	'value': require( '@stdlib/constants/int16/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int16/min'
	]
});

ns.push({
	'alias': 'INT16_MIN',
	'path': '@stdlib/constants/int16/min',
	'value': require( '@stdlib/constants/int16/min' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int16/max'
	]
});

ns.push({
	'alias': 'INT16_NUM_BYTES',
	'path': '@stdlib/constants/int16/num-bytes',
	'value': require( '@stdlib/constants/int16/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int32/num-bytes',
		'@stdlib/constants/int8/num-bytes',
		'@stdlib/constants/uint16/num-bytes'
	]
});

ns.push({
	'alias': 'Int16Array',
	'path': '@stdlib/array/int16',
	'value': require( '@stdlib/array/int16' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'INT32_MAX',
	'path': '@stdlib/constants/int32/max',
	'value': require( '@stdlib/constants/int32/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int32/min'
	]
});

ns.push({
	'alias': 'INT32_MIN',
	'path': '@stdlib/constants/int32/min',
	'value': require( '@stdlib/constants/int32/min' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int32/max'
	]
});

ns.push({
	'alias': 'INT32_NUM_BYTES',
	'path': '@stdlib/constants/int32/num-bytes',
	'value': require( '@stdlib/constants/int32/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int16/num-bytes',
		'@stdlib/constants/int8/num-bytes',
		'@stdlib/constants/uint32/num-bytes'
	]
});

ns.push({
	'alias': 'Int32Array',
	'path': '@stdlib/array/int32',
	'value': require( '@stdlib/array/int32' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'IS_BIG_ENDIAN',
	'path': '@stdlib/assert/is-big-endian',
	'value': require( '@stdlib/assert/is-big-endian' ),
	'type': 'boolean',
	'related': [
		'@stdlib/assert/is-little-endian'
	]
});

ns.push({
	'alias': 'IS_BROWSER',
	'path': '@stdlib/assert/is-browser',
	'value': require( '@stdlib/assert/is-browser' ),
	'type': 'boolean',
	'related': []
});

ns.push({
	'alias': 'IS_DARWIN',
	'path': '@stdlib/assert/is-darwin',
	'value': require( '@stdlib/assert/is-darwin' ),
	'type': 'boolean',
	'related': []
});

ns.push({
	'alias': 'IS_ELECTRON',
	'path': '@stdlib/assert/is-electron',
	'value': require( '@stdlib/assert/is-electron' ),
	'type': 'boolean',
	'related': [
		'@stdlib/assert/is-electron-main',
		'@stdlib/assert/is-electron-renderer'
	]
});

ns.push({
	'alias': 'IS_ELECTRON_MAIN',
	'path': '@stdlib/assert/is-electron-main',
	'value': require( '@stdlib/assert/is-electron-main' ),
	'type': 'boolean',
	'related': [
		'@stdlib/assert/is-electron',
		'@stdlib/assert/is-electron-renderer'
	]
});

ns.push({
	'alias': 'IS_ELECTRON_RENDERER',
	'path': '@stdlib/assert/is-electron-renderer',
	'value': require( '@stdlib/assert/is-electron-renderer' ),
	'type': 'boolean',
	'related': [
		'@stdlib/assert/is-electron',
		'@stdlib/assert/is-electron-main'
	]
});

ns.push({
	'alias': 'IS_LITTLE_ENDIAN',
	'path': '@stdlib/assert/is-little-endian',
	'value': require( '@stdlib/assert/is-little-endian' ),
	'type': 'boolean',
	'related': [
		'@stdlib/assert/is-big-endian'
	]
});

ns.push({
	'alias': 'IS_NODE',
	'path': '@stdlib/assert/is-node',
	'value': require( '@stdlib/assert/is-node' ),
	'type': 'boolean',
	'related': []
});

ns.push({
	'alias': 'IS_WEB_WORKER',
	'path': '@stdlib/assert/is-web-worker',
	'value': require( '@stdlib/assert/is-web-worker' ),
	'type': 'boolean',
	'related': []
});

ns.push({
	'alias': 'IS_WINDOWS',
	'path': '@stdlib/assert/is-windows',
	'value': require( '@stdlib/assert/is-windows' ),
	'type': 'boolean',
	'related': []
});

ns.push({
	'alias': 'isAbsolutePath',
	'path': '@stdlib/assert/is-absolute-path',
	'value': require( '@stdlib/assert/is-absolute-path' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-relative-path'
	]
});

ns.push({
	'alias': 'isAccessorArray',
	'path': '@stdlib/assert/is-accessor-array',
	'value': require( '@stdlib/assert/is-accessor-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array-like',
		'@stdlib/assert/is-array-like-object',
		'@stdlib/assert/is-collection'
	]
});

ns.push({
	'alias': 'isAccessorProperty',
	'path': '@stdlib/assert/is-accessor-property',
	'value': require( '@stdlib/assert/is-accessor-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-own-property',
		'@stdlib/assert/is-accessor-property-in',
		'@stdlib/assert/is-data-property'
	]
});

ns.push({
	'alias': 'isAccessorPropertyIn',
	'path': '@stdlib/assert/is-accessor-property-in',
	'value': require( '@stdlib/assert/is-accessor-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-property',
		'@stdlib/assert/is-accessor-property',
		'@stdlib/assert/is-data-property-in'
	]
});

ns.push({
	'alias': 'isAlphagram',
	'path': '@stdlib/assert/is-alphagram',
	'value': require( '@stdlib/assert/is-alphagram' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-anagram'
	]
});

ns.push({
	'alias': 'isAlphaNumeric',
	'path': '@stdlib/assert/is-alphanumeric',
	'value': require( '@stdlib/assert/is-alphanumeric' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-digit-string'
	]
});

ns.push({
	'alias': 'isAnagram',
	'path': '@stdlib/assert/is-anagram',
	'value': require( '@stdlib/assert/is-anagram' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-alphagram'
	]
});

ns.push({
	'alias': 'isArguments',
	'path': '@stdlib/assert/is-arguments',
	'value': require( '@stdlib/assert/is-arguments' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isArray',
	'path': '@stdlib/assert/is-array',
	'value': require( '@stdlib/assert/is-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array-like'
	]
});

ns.push({
	'alias': 'isArrayArray',
	'path': '@stdlib/assert/is-array-array',
	'value': require( '@stdlib/assert/is-array-array' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isArrayBuffer',
	'path': '@stdlib/assert/is-arraybuffer',
	'value': require( '@stdlib/assert/is-arraybuffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-sharedarraybuffer',
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isArrayBufferView',
	'path': '@stdlib/assert/is-arraybuffer-view',
	'value': require( '@stdlib/assert/is-arraybuffer-view' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-dataview',
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isArrayLength',
	'path': '@stdlib/assert/is-array-length',
	'value': require( '@stdlib/assert/is-array-length' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isArrayLike',
	'path': '@stdlib/assert/is-array-like',
	'value': require( '@stdlib/assert/is-array-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-array-like-object',
		'@stdlib/assert/is-collection'
	]
});

ns.push({
	'alias': 'isArrayLikeObject',
	'path': '@stdlib/assert/is-array-like-object',
	'value': require( '@stdlib/assert/is-array-like-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-array-like',
		'@stdlib/assert/is-collection'
	]
});

ns.push({
	'alias': 'isASCII',
	'path': '@stdlib/assert/is-ascii',
	'value': require( '@stdlib/assert/is-ascii' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isBetween',
	'path': '@stdlib/assert/is-between',
	'value': require( '@stdlib/assert/is-between' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-between-array'
	]
});

ns.push({
	'alias': 'isBetweenArray',
	'path': '@stdlib/assert/is-between-array',
	'value': require( '@stdlib/assert/is-between-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-between'
	]
});

ns.push({
	'alias': 'isBigInt',
	'path': '@stdlib/assert/is-bigint',
	'value': require( '@stdlib/assert/is-bigint' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isBigInt64Array',
	'path': '@stdlib/assert/is-bigint64array',
	'value': require( '@stdlib/assert/is-bigint64array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-biguint64array'
	]
});

ns.push({
	'alias': 'isBigUint64Array',
	'path': '@stdlib/assert/is-biguint64array',
	'value': require( '@stdlib/assert/is-biguint64array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-bigint64array'
	]
});

ns.push({
	'alias': 'isBinaryString',
	'path': '@stdlib/assert/is-binary-string',
	'value': require( '@stdlib/assert/is-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isBlankString',
	'path': '@stdlib/assert/is-blank-string',
	'value': require( '@stdlib/assert/is-blank-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string',
		'@stdlib/assert/is-empty-string'
	]
});

ns.push({
	'alias': 'isBoolean',
	'path': '@stdlib/assert/is-boolean',
	'value': require( '@stdlib/assert/is-boolean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isBooleanArray',
	'path': '@stdlib/assert/is-boolean-array',
	'value': require( '@stdlib/assert/is-boolean-array' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isBoxedPrimitive',
	'path': '@stdlib/assert/is-boxed-primitive',
	'value': require( '@stdlib/assert/is-boxed-primitive' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-primitive'
	]
});

ns.push({
	'alias': 'isBuffer',
	'path': '@stdlib/assert/is-buffer',
	'value': require( '@stdlib/assert/is-buffer' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isCapitalized',
	'path': '@stdlib/assert/is-capitalized',
	'value': require( '@stdlib/assert/is-capitalized' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isCentrosymmetricMatrix',
	'path': '@stdlib/assert/is-centrosymmetric-matrix',
	'value': require( '@stdlib/assert/is-centrosymmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-square-matrix',
		'@stdlib/assert/is-symmetric-matrix'
	]
});

ns.push({
	'alias': 'isCircular',
	'path': '@stdlib/assert/is-circular',
	'value': require( '@stdlib/assert/is-circular' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-circular-array',
		'@stdlib/assert/is-circular-plain-object'
	]
});

ns.push({
	'alias': 'isCircularArray',
	'path': '@stdlib/assert/is-circular-array',
	'value': require( '@stdlib/assert/is-circular-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-circular',
		'@stdlib/assert/is-circular-plain-object'
	]
});

ns.push({
	'alias': 'isCircularPlainObject',
	'path': '@stdlib/assert/is-circular-plain-object',
	'value': require( '@stdlib/assert/is-circular-plain-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-circular',
		'@stdlib/assert/is-circular-array'
	]
});

ns.push({
	'alias': 'isClass',
	'path': '@stdlib/assert/is-class',
	'value': require( '@stdlib/assert/is-class' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isCollection',
	'path': '@stdlib/assert/is-collection',
	'value': require( '@stdlib/assert/is-collection' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array-like',
		'@stdlib/assert/is-array-like-object'
	]
});

ns.push({
	'alias': 'isComplex',
	'path': '@stdlib/assert/is-complex',
	'value': require( '@stdlib/assert/is-complex' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex64',
		'@stdlib/assert/is-complex128'
	]
});

ns.push({
	'alias': 'isComplex64',
	'path': '@stdlib/assert/is-complex64',
	'value': require( '@stdlib/assert/is-complex64' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex',
		'@stdlib/assert/is-complex128'
	]
});

ns.push({
	'alias': 'isComplex64Array',
	'path': '@stdlib/assert/is-complex64array',
	'value': require( '@stdlib/assert/is-complex64array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex',
		'@stdlib/assert/is-complex64',
		'@stdlib/assert/is-complex128array',
		'@stdlib/assert/is-complex-typed-array'
	]
});

ns.push({
	'alias': 'isComplex64MatrixLike',
	'path': '@stdlib/assert/is-complex64matrix-like',
	'value': require( '@stdlib/assert/is-complex64matrix-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex128matrix-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-matrix-like'
	]
});

ns.push({
	'alias': 'isComplex64ndarrayLike',
	'path': '@stdlib/assert/is-complex64ndarray-like',
	'value': require( '@stdlib/assert/is-complex64ndarray-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex128ndarray-like',
		'@stdlib/assert/is-ndarray-like'
	]
});

ns.push({
	'alias': 'isComplex64VectorLike',
	'path': '@stdlib/assert/is-complex64vector-like',
	'value': require( '@stdlib/assert/is-complex64vector-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex128vector-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-vector-like'
	]
});

ns.push({
	'alias': 'isComplex128',
	'path': '@stdlib/assert/is-complex128',
	'value': require( '@stdlib/assert/is-complex128' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex',
		'@stdlib/assert/is-complex64'
	]
});

ns.push({
	'alias': 'isComplex128Array',
	'path': '@stdlib/assert/is-complex128array',
	'value': require( '@stdlib/assert/is-complex128array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex',
		'@stdlib/assert/is-complex128',
		'@stdlib/assert/is-complex64array',
		'@stdlib/assert/is-complex-typed-array'
	]
});

ns.push({
	'alias': 'isComplex128MatrixLike',
	'path': '@stdlib/assert/is-complex128matrix-like',
	'value': require( '@stdlib/assert/is-complex128matrix-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex64matrix-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-matrix-like'
	]
});

ns.push({
	'alias': 'isComplex128ndarrayLike',
	'path': '@stdlib/assert/is-complex128ndarray-like',
	'value': require( '@stdlib/assert/is-complex128ndarray-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex64ndarray-like',
		'@stdlib/assert/is-ndarray-like'
	]
});

ns.push({
	'alias': 'isComplex128VectorLike',
	'path': '@stdlib/assert/is-complex128vector-like',
	'value': require( '@stdlib/assert/is-complex128vector-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex64vector-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-vector-like'
	]
});

ns.push({
	'alias': 'isComplexLike',
	'path': '@stdlib/assert/is-complex-like',
	'value': require( '@stdlib/assert/is-complex-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex',
		'@stdlib/assert/is-complex64',
		'@stdlib/assert/is-complex128'
	]
});

ns.push({
	'alias': 'isComplexTypedArray',
	'path': '@stdlib/assert/is-complex-typed-array',
	'value': require( '@stdlib/assert/is-complex-typed-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex',
		'@stdlib/assert/is-complex64array',
		'@stdlib/assert/is-complex128array'
	]
});

ns.push({
	'alias': 'isComplexTypedArrayLike',
	'path': '@stdlib/assert/is-complex-typed-array-like',
	'value': require( '@stdlib/assert/is-complex-typed-array-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex-like',
		'@stdlib/assert/is-complex-typed-array',
		'@stdlib/assert/is-complex64array',
		'@stdlib/assert/is-complex128array'
	]
});

ns.push({
	'alias': 'isComposite',
	'path': '@stdlib/assert/is-composite',
	'value': require( '@stdlib/assert/is-composite' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-prime'
	]
});

ns.push({
	'alias': 'isConfigurableProperty',
	'path': '@stdlib/assert/is-configurable-property',
	'value': require( '@stdlib/assert/is-configurable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property-in',
		'@stdlib/assert/is-enumerable-property',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isConfigurablePropertyIn',
	'path': '@stdlib/assert/is-configurable-property-in',
	'value': require( '@stdlib/assert/is-configurable-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property',
		'@stdlib/assert/is-enumerable-property-in',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isCubeNumber',
	'path': '@stdlib/assert/is-cube-number',
	'value': require( '@stdlib/assert/is-cube-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-square-number'
	]
});

ns.push({
	'alias': 'isDataProperty',
	'path': '@stdlib/assert/is-data-property',
	'value': require( '@stdlib/assert/is-data-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-own-property',
		'@stdlib/assert/is-accessor-property',
		'@stdlib/assert/is-data-property-in'
	]
});

ns.push({
	'alias': 'isDataPropertyIn',
	'path': '@stdlib/assert/is-data-property-in',
	'value': require( '@stdlib/assert/is-data-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-property',
		'@stdlib/assert/is-accessor-property-in',
		'@stdlib/assert/is-data-property'
	]
});

ns.push({
	'alias': 'isDataView',
	'path': '@stdlib/assert/is-dataview',
	'value': require( '@stdlib/assert/is-dataview' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-arraybuffer',
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isDateObject',
	'path': '@stdlib/assert/is-date-object',
	'value': require( '@stdlib/assert/is-date-object' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isDateObjectArray',
	'path': '@stdlib/assert/is-date-object-array',
	'value': require( '@stdlib/assert/is-date-object-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-date-object'
	]
});

ns.push({
	'alias': 'isDigitString',
	'path': '@stdlib/assert/is-digit-string',
	'value': require( '@stdlib/assert/is-digit-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-hex-string',
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isEmailAddress',
	'path': '@stdlib/assert/is-email-address',
	'value': require( '@stdlib/assert/is-email-address' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isEmptyArray',
	'path': '@stdlib/assert/is-empty-array',
	'value': require( '@stdlib/assert/is-empty-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-empty-array-like-object',
		'@stdlib/assert/is-empty-collection'
	]
});

ns.push({
	'alias': 'isEmptyArrayLikeObject',
	'path': '@stdlib/assert/is-empty-array-like-object',
	'value': require( '@stdlib/assert/is-empty-array-like-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array-like-object',
		'@stdlib/assert/is-empty-array',
		'@stdlib/assert/is-empty-collection'
	]
});

ns.push({
	'alias': 'isEmptyCollection',
	'path': '@stdlib/assert/is-empty-collection',
	'value': require( '@stdlib/assert/is-empty-collection' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-collection',
		'@stdlib/assert/is-empty-array',
		'@stdlib/assert/is-empty-array-like-object'
	]
});

ns.push({
	'alias': 'isEmptyObject',
	'path': '@stdlib/assert/is-empty-object',
	'value': require( '@stdlib/assert/is-empty-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-object',
		'@stdlib/assert/is-plain-object'
	]
});

ns.push({
	'alias': 'isEmptyString',
	'path': '@stdlib/assert/is-empty-string',
	'value': require( '@stdlib/assert/is-empty-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isEnumerableProperty',
	'path': '@stdlib/assert/is-enumerable-property',
	'value': require( '@stdlib/assert/is-enumerable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property',
		'@stdlib/assert/is-enumerable-property-in',
		'@stdlib/assert/is-nonenumerable-property',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isEnumerablePropertyIn',
	'path': '@stdlib/assert/is-enumerable-property-in',
	'value': require( '@stdlib/assert/is-enumerable-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property-in',
		'@stdlib/assert/is-enumerable-property',
		'@stdlib/assert/is-nonenumerable-property-in',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isError',
	'path': '@stdlib/assert/is-error',
	'value': require( '@stdlib/assert/is-error' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isEvalError',
	'path': '@stdlib/assert/is-eval-error',
	'value': require( '@stdlib/assert/is-eval-error' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-error'
	]
});

ns.push({
	'alias': 'isEven',
	'path': '@stdlib/assert/is-even',
	'value': require( '@stdlib/assert/is-even' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-odd'
	]
});

ns.push({
	'alias': 'isFalsy',
	'path': '@stdlib/assert/is-falsy',
	'value': require( '@stdlib/assert/is-falsy' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-falsy-array',
		'@stdlib/assert/is-truthy'
	]
});

ns.push({
	'alias': 'isFalsyArray',
	'path': '@stdlib/assert/is-falsy-array',
	'value': require( '@stdlib/assert/is-falsy-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-falsy',
		'@stdlib/assert/is-truthy-array'
	]
});

ns.push({
	'alias': 'isFinite',
	'path': '@stdlib/assert/is-finite',
	'value': require( '@stdlib/assert/is-finite' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-finite-array',
		'@stdlib/assert/is-infinite'
	]
});

ns.push({
	'alias': 'isFiniteArray',
	'path': '@stdlib/assert/is-finite-array',
	'value': require( '@stdlib/assert/is-finite-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-finite',
		'@stdlib/assert/is-infinite'
	]
});

ns.push({
	'alias': 'isFloat32Array',
	'path': '@stdlib/assert/is-float32array',
	'value': require( '@stdlib/assert/is-float32array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float64array'
	]
});

ns.push({
	'alias': 'isFloat32MatrixLike',
	'path': '@stdlib/assert/is-float32matrix-like',
	'value': require( '@stdlib/assert/is-float32matrix-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float64matrix-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-matrix-like'
	]
});

ns.push({
	'alias': 'isFloat32ndarrayLike',
	'path': '@stdlib/assert/is-float32ndarray-like',
	'value': require( '@stdlib/assert/is-float32ndarray-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float64ndarray-like',
		'@stdlib/assert/is-ndarray-like'
	]
});

ns.push({
	'alias': 'isFloat32VectorLike',
	'path': '@stdlib/assert/is-float32vector-like',
	'value': require( '@stdlib/assert/is-float32vector-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float64vector-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-vector-like'
	]
});

ns.push({
	'alias': 'isFloat64Array',
	'path': '@stdlib/assert/is-float64array',
	'value': require( '@stdlib/assert/is-float64array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float32array'
	]
});

ns.push({
	'alias': 'isFloat64MatrixLike',
	'path': '@stdlib/assert/is-float64matrix-like',
	'value': require( '@stdlib/assert/is-float64matrix-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float32matrix-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-matrix-like'
	]
});

ns.push({
	'alias': 'isFloat64ndarrayLike',
	'path': '@stdlib/assert/is-float64ndarray-like',
	'value': require( '@stdlib/assert/is-float64ndarray-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float32ndarray-like',
		'@stdlib/assert/is-ndarray-like'
	]
});

ns.push({
	'alias': 'isFloat64VectorLike',
	'path': '@stdlib/assert/is-float64vector-like',
	'value': require( '@stdlib/assert/is-float64vector-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-float32vector-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-vector-like'
	]
});

ns.push({
	'alias': 'isFunction',
	'path': '@stdlib/assert/is-function',
	'value': require( '@stdlib/assert/is-function' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isFunctionArray',
	'path': '@stdlib/assert/is-function-array',
	'value': require( '@stdlib/assert/is-function-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isGeneratorObject',
	'path': '@stdlib/assert/is-generator-object',
	'value': require( '@stdlib/assert/is-generator-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-generator-support',
		'@stdlib/assert/is-generator-object-like'
	]
});

ns.push({
	'alias': 'isGeneratorObjectLike',
	'path': '@stdlib/assert/is-generator-object-like',
	'value': require( '@stdlib/assert/is-generator-object-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-generator-support',
		'@stdlib/assert/is-generator-object'
	]
});

ns.push({
	'alias': 'isgzipBuffer',
	'path': '@stdlib/assert/is-gzip-buffer',
	'value': require( '@stdlib/assert/is-gzip-buffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-buffer',
		'@stdlib/assert/is-uint8array'
	]
});

ns.push({
	'alias': 'isHexString',
	'path': '@stdlib/assert/is-hex-string',
	'value': require( '@stdlib/assert/is-hex-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isInfinite',
	'path': '@stdlib/assert/is-infinite',
	'value': require( '@stdlib/assert/is-infinite' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-finite'
	]
});

ns.push({
	'alias': 'isInheritedProperty',
	'path': '@stdlib/assert/is-inherited-property',
	'value': require( '@stdlib/assert/is-inherited-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-own-property',
		'@stdlib/assert/has-property'
	]
});

ns.push({
	'alias': 'isInt8Array',
	'path': '@stdlib/assert/is-int8array',
	'value': require( '@stdlib/assert/is-int8array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-int16array',
		'@stdlib/assert/is-int32array'
	]
});

ns.push({
	'alias': 'isInt16Array',
	'path': '@stdlib/assert/is-int16array',
	'value': require( '@stdlib/assert/is-int16array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-int32array',
		'@stdlib/assert/is-int8array'
	]
});

ns.push({
	'alias': 'isInt32Array',
	'path': '@stdlib/assert/is-int32array',
	'value': require( '@stdlib/assert/is-int32array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-int16array',
		'@stdlib/assert/is-int8array'
	]
});

ns.push({
	'alias': 'isInteger',
	'path': '@stdlib/assert/is-integer',
	'value': require( '@stdlib/assert/is-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isIntegerArray',
	'path': '@stdlib/assert/is-integer-array',
	'value': require( '@stdlib/assert/is-integer-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isIterableLike',
	'path': '@stdlib/assert/is-iterable-like',
	'value': require( '@stdlib/assert/is-iterable-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-iterator-like'
	]
});

ns.push({
	'alias': 'isIteratorLike',
	'path': '@stdlib/assert/is-iterator-like',
	'value': require( '@stdlib/assert/is-iterator-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-iterable-like'
	]
});

ns.push({
	'alias': 'isJSON',
	'path': '@stdlib/assert/is-json',
	'value': require( '@stdlib/assert/is-json' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isLeapYear',
	'path': '@stdlib/assert/is-leap-year',
	'value': require( '@stdlib/assert/is-leap-year' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isLocalhost',
	'path': '@stdlib/assert/is-localhost',
	'value': require( '@stdlib/assert/is-localhost' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isLowercase',
	'path': '@stdlib/assert/is-lowercase',
	'value': require( '@stdlib/assert/is-lowercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string',
		'@stdlib/assert/is-uppercase'
	]
});

ns.push({
	'alias': 'isMatrixLike',
	'path': '@stdlib/assert/is-matrix-like',
	'value': require( '@stdlib/assert/is-matrix-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-array-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-typed-array-like',
		'@stdlib/assert/is-vector-like'
	]
});

ns.push({
	'alias': 'isMethod',
	'path': '@stdlib/assert/is-method',
	'value': require( '@stdlib/assert/is-method' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-own-property',
		'@stdlib/assert/is-function',
		'@stdlib/assert/is-method-in'
	]
});

ns.push({
	'alias': 'isMethodIn',
	'path': '@stdlib/assert/is-method-in',
	'value': require( '@stdlib/assert/is-method-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-property',
		'@stdlib/assert/is-function',
		'@stdlib/assert/is-method'
	]
});

ns.push({
	'alias': 'isMultiSlice',
	'path': '@stdlib/assert/is-multi-slice',
	'value': require( '@stdlib/assert/is-multi-slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-slice',
		'@stdlib/slice/multi'
	]
});

ns.push({
	'alias': 'isNamedTypedTupleLike',
	'path': '@stdlib/assert/is-named-typed-tuple-like',
	'value': require( '@stdlib/assert/is-named-typed-tuple-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/named-typed-tuple'
	]
});

ns.push({
	'alias': 'isnan',
	'path': '@stdlib/assert/is-nan',
	'value': require( '@stdlib/assert/is-nan' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isNaNArray',
	'path': '@stdlib/assert/is-nan-array',
	'value': require( '@stdlib/assert/is-nan-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-nan'
	]
});

ns.push({
	'alias': 'isNativeFunction',
	'path': '@stdlib/assert/is-native-function',
	'value': require( '@stdlib/assert/is-native-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-function'
	]
});

ns.push({
	'alias': 'isndarrayLike',
	'path': '@stdlib/assert/is-ndarray-like',
	'value': require( '@stdlib/assert/is-ndarray-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-array-like',
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-typed-array-like',
		'@stdlib/assert/is-vector-like'
	]
});

ns.push({
	'alias': 'isNegativeInteger',
	'path': '@stdlib/assert/is-negative-integer',
	'value': require( '@stdlib/assert/is-negative-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer'
	]
});

ns.push({
	'alias': 'isNegativeIntegerArray',
	'path': '@stdlib/assert/is-negative-integer-array',
	'value': require( '@stdlib/assert/is-negative-integer-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isNegativeNumber',
	'path': '@stdlib/assert/is-negative-number',
	'value': require( '@stdlib/assert/is-negative-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isNegativeNumberArray',
	'path': '@stdlib/assert/is-negative-number-array',
	'value': require( '@stdlib/assert/is-negative-number-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isNegativeZero',
	'path': '@stdlib/assert/is-negative-zero',
	'value': require( '@stdlib/assert/is-negative-zero' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-positive-zero'
	]
});

ns.push({
	'alias': 'isNodeBuiltin',
	'path': '@stdlib/assert/is-node-builtin',
	'value': require( '@stdlib/assert/is-node-builtin' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isNodeDuplexStreamLike',
	'path': '@stdlib/assert/is-node-duplex-stream-like',
	'value': require( '@stdlib/assert/is-node-duplex-stream-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-node-stream-like'
	]
});

ns.push({
	'alias': 'isNodeReadableStreamLike',
	'path': '@stdlib/assert/is-node-readable-stream-like',
	'value': require( '@stdlib/assert/is-node-readable-stream-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-node-stream-like'
	]
});

ns.push({
	'alias': 'isNodeREPL',
	'path': '@stdlib/assert/is-node-repl',
	'value': require( '@stdlib/assert/is-node-repl' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isNodeStreamLike',
	'path': '@stdlib/assert/is-node-stream-like',
	'value': require( '@stdlib/assert/is-node-stream-like' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isNodeTransformStreamLike',
	'path': '@stdlib/assert/is-node-transform-stream-like',
	'value': require( '@stdlib/assert/is-node-transform-stream-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-node-stream-like'
	]
});

ns.push({
	'alias': 'isNodeWritableStreamLike',
	'path': '@stdlib/assert/is-node-writable-stream-like',
	'value': require( '@stdlib/assert/is-node-writable-stream-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-node-stream-like'
	]
});

ns.push({
	'alias': 'isNonConfigurableProperty',
	'path': '@stdlib/assert/is-nonconfigurable-property',
	'value': require( '@stdlib/assert/is-nonconfigurable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property',
		'@stdlib/assert/is-enumerable-property',
		'@stdlib/assert/is-nonconfigurable-property-in',
		'@stdlib/assert/is-nonenumerable-property',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isNonConfigurablePropertyIn',
	'path': '@stdlib/assert/is-nonconfigurable-property-in',
	'value': require( '@stdlib/assert/is-nonconfigurable-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property-in',
		'@stdlib/assert/is-enumerable-property-in',
		'@stdlib/assert/is-nonconfigurable-property',
		'@stdlib/assert/is-nonenumerable-property-in',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isNonEnumerableProperty',
	'path': '@stdlib/assert/is-nonenumerable-property',
	'value': require( '@stdlib/assert/is-nonenumerable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property',
		'@stdlib/assert/is-enumerable-property',
		'@stdlib/assert/is-nonconfigurable-property',
		'@stdlib/assert/is-nonenumerable-property-in',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isNonEnumerablePropertyIn',
	'path': '@stdlib/assert/is-nonenumerable-property-in',
	'value': require( '@stdlib/assert/is-nonenumerable-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-configurable-property-in',
		'@stdlib/assert/is-enumerable-property-in',
		'@stdlib/assert/is-nonconfigurable-property-in',
		'@stdlib/assert/is-nonenumerable-property',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isNonNegativeInteger',
	'path': '@stdlib/assert/is-nonnegative-integer',
	'value': require( '@stdlib/assert/is-nonnegative-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer'
	]
});

ns.push({
	'alias': 'isNonNegativeIntegerArray',
	'path': '@stdlib/assert/is-nonnegative-integer-array',
	'value': require( '@stdlib/assert/is-nonnegative-integer-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isNonNegativeNumber',
	'path': '@stdlib/assert/is-nonnegative-number',
	'value': require( '@stdlib/assert/is-nonnegative-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isNonNegativeNumberArray',
	'path': '@stdlib/assert/is-nonnegative-number-array',
	'value': require( '@stdlib/assert/is-nonnegative-number-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isNonPositiveInteger',
	'path': '@stdlib/assert/is-nonpositive-integer',
	'value': require( '@stdlib/assert/is-nonpositive-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer'
	]
});

ns.push({
	'alias': 'isNonPositiveIntegerArray',
	'path': '@stdlib/assert/is-nonpositive-integer-array',
	'value': require( '@stdlib/assert/is-nonpositive-integer-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isNonPositiveNumber',
	'path': '@stdlib/assert/is-nonpositive-number',
	'value': require( '@stdlib/assert/is-nonpositive-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isNonPositiveNumberArray',
	'path': '@stdlib/assert/is-nonpositive-number-array',
	'value': require( '@stdlib/assert/is-nonpositive-number-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array'
	]
});

ns.push({
	'alias': 'isNonSymmetricMatrix',
	'path': '@stdlib/assert/is-nonsymmetric-matrix',
	'value': require( '@stdlib/assert/is-nonsymmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-square-matrix',
		'@stdlib/assert/is-symmetric-matrix'
	]
});

ns.push({
	'alias': 'isNull',
	'path': '@stdlib/assert/is-null',
	'value': require( '@stdlib/assert/is-null' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-undefined',
		'@stdlib/assert/is-undefined-or-null'
	]
});

ns.push({
	'alias': 'isNullArray',
	'path': '@stdlib/assert/is-null-array',
	'value': require( '@stdlib/assert/is-null-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-null'
	]
});

ns.push({
	'alias': 'isNumber',
	'path': '@stdlib/assert/is-number',
	'value': require( '@stdlib/assert/is-number' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isNumberArray',
	'path': '@stdlib/assert/is-number-array',
	'value': require( '@stdlib/assert/is-number-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-numeric-array'
	]
});

ns.push({
	'alias': 'isNumericArray',
	'path': '@stdlib/assert/is-numeric-array',
	'value': require( '@stdlib/assert/is-numeric-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-number-array',
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isObject',
	'path': '@stdlib/assert/is-object',
	'value': require( '@stdlib/assert/is-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-object-like',
		'@stdlib/assert/is-plain-object'
	]
});

ns.push({
	'alias': 'isObjectArray',
	'path': '@stdlib/assert/is-object-array',
	'value': require( '@stdlib/assert/is-object-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-object'
	]
});

ns.push({
	'alias': 'isObjectLike',
	'path': '@stdlib/assert/is-object-like',
	'value': require( '@stdlib/assert/is-object-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-object',
		'@stdlib/assert/is-plain-object'
	]
});

ns.push({
	'alias': 'isOdd',
	'path': '@stdlib/assert/is-odd',
	'value': require( '@stdlib/assert/is-odd' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-even'
	]
});

ns.push({
	'alias': 'isoWeeksInYear',
	'path': '@stdlib/time/iso-weeks-in-year',
	'value': require( '@stdlib/time/iso-weeks-in-year' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isPersymmetricMatrix',
	'path': '@stdlib/assert/is-persymmetric-matrix',
	'value': require( '@stdlib/assert/is-persymmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-square-matrix',
		'@stdlib/assert/is-symmetric-matrix'
	]
});

ns.push({
	'alias': 'isPlainObject',
	'path': '@stdlib/assert/is-plain-object',
	'value': require( '@stdlib/assert/is-plain-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-object'
	]
});

ns.push({
	'alias': 'isPlainObjectArray',
	'path': '@stdlib/assert/is-plain-object-array',
	'value': require( '@stdlib/assert/is-plain-object-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-plain-object'
	]
});

ns.push({
	'alias': 'isPositiveInteger',
	'path': '@stdlib/assert/is-positive-integer',
	'value': require( '@stdlib/assert/is-positive-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer'
	]
});

ns.push({
	'alias': 'isPositiveIntegerArray',
	'path': '@stdlib/assert/is-positive-integer-array',
	'value': require( '@stdlib/assert/is-positive-integer-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-positive-integer'
	]
});

ns.push({
	'alias': 'isPositiveNumber',
	'path': '@stdlib/assert/is-positive-number',
	'value': require( '@stdlib/assert/is-positive-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isPositiveNumberArray',
	'path': '@stdlib/assert/is-positive-number-array',
	'value': require( '@stdlib/assert/is-positive-number-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-positive-number'
	]
});

ns.push({
	'alias': 'isPositiveZero',
	'path': '@stdlib/assert/is-positive-zero',
	'value': require( '@stdlib/assert/is-positive-zero' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-negative-zero'
	]
});

ns.push({
	'alias': 'isPrime',
	'path': '@stdlib/assert/is-prime',
	'value': require( '@stdlib/assert/is-prime' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-composite',
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isPrimitive',
	'path': '@stdlib/assert/is-primitive',
	'value': require( '@stdlib/assert/is-primitive' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-boxed-primitive'
	]
});

ns.push({
	'alias': 'isPrimitiveArray',
	'path': '@stdlib/assert/is-primitive-array',
	'value': require( '@stdlib/assert/is-primitive-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-primitive'
	]
});

ns.push({
	'alias': 'isPRNGLike',
	'path': '@stdlib/assert/is-prng-like',
	'value': require( '@stdlib/assert/is-prng-like' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isProbability',
	'path': '@stdlib/assert/is-probability',
	'value': require( '@stdlib/assert/is-probability' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isProbabilityArray',
	'path': '@stdlib/assert/is-probability-array',
	'value': require( '@stdlib/assert/is-probability-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-probability'
	]
});

ns.push({
	'alias': 'isPropertyKey',
	'path': '@stdlib/assert/is-property-key',
	'value': require( '@stdlib/assert/is-property-key' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-string',
		'@stdlib/assert/is-symbol',
		'@stdlib/assert/is-nonnegative-integer',
		'@stdlib/assert/has-own-property',
		'@stdlib/assert/has-property'
	]
});

ns.push({
	'alias': 'isPrototypeOf',
	'path': '@stdlib/assert/is-prototype-of',
	'value': require( '@stdlib/assert/is-prototype-of' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/get-prototype-of'
	]
});

ns.push({
	'alias': 'isRangeError',
	'path': '@stdlib/assert/is-range-error',
	'value': require( '@stdlib/assert/is-range-error' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-error'
	]
});

ns.push({
	'alias': 'isReadableProperty',
	'path': '@stdlib/assert/is-readable-property',
	'value': require( '@stdlib/assert/is-readable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property',
		'@stdlib/assert/is-read-write-property',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isReadablePropertyIn',
	'path': '@stdlib/assert/is-readable-property-in',
	'value': require( '@stdlib/assert/is-readable-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property-in',
		'@stdlib/assert/is-read-write-property-in',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isReadOnlyProperty',
	'path': '@stdlib/assert/is-read-only-property',
	'value': require( '@stdlib/assert/is-read-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property-in',
		'@stdlib/assert/is-read-write-property',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isReadOnlyPropertyIn',
	'path': '@stdlib/assert/is-read-only-property-in',
	'value': require( '@stdlib/assert/is-read-only-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property',
		'@stdlib/assert/is-read-write-property-in',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isReadWriteProperty',
	'path': '@stdlib/assert/is-read-write-property',
	'value': require( '@stdlib/assert/is-read-write-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property',
		'@stdlib/assert/is-read-write-property-in',
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-writable-property'
	]
});

ns.push({
	'alias': 'isReadWritePropertyIn',
	'path': '@stdlib/assert/is-read-write-property-in',
	'value': require( '@stdlib/assert/is-read-write-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property-in',
		'@stdlib/assert/is-read-write-property',
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-writable-property-in'
	]
});

ns.push({
	'alias': 'isReferenceError',
	'path': '@stdlib/assert/is-reference-error',
	'value': require( '@stdlib/assert/is-reference-error' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-error'
	]
});

ns.push({
	'alias': 'isRegExp',
	'path': '@stdlib/assert/is-regexp',
	'value': require( '@stdlib/assert/is-regexp' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isRegExpString',
	'path': '@stdlib/assert/is-regexp-string',
	'value': require( '@stdlib/assert/is-regexp-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-regexp'
	]
});

ns.push({
	'alias': 'isRelativePath',
	'path': '@stdlib/assert/is-relative-path',
	'value': require( '@stdlib/assert/is-relative-path' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-absolute-path'
	]
});

ns.push({
	'alias': 'isSafeInteger',
	'path': '@stdlib/assert/is-safe-integer',
	'value': require( '@stdlib/assert/is-safe-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number'
	]
});

ns.push({
	'alias': 'isSafeIntegerArray',
	'path': '@stdlib/assert/is-safe-integer-array',
	'value': require( '@stdlib/assert/is-safe-integer-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-safe-integer'
	]
});

ns.push({
	'alias': 'isSameComplex64',
	'path': '@stdlib/assert/is-same-complex64',
	'value': require( '@stdlib/assert/is-same-complex64' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex64',
		'@stdlib/assert/is-same-complex128',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isSameComplex64Array',
	'path': '@stdlib/assert/is-same-complex64array',
	'value': require( '@stdlib/assert/is-same-complex64array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex64array',
		'@stdlib/assert/is-same-complex128array',
		'@stdlib/assert/is-same-float32array',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isSameComplex128',
	'path': '@stdlib/assert/is-same-complex128',
	'value': require( '@stdlib/assert/is-same-complex128' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex128',
		'@stdlib/assert/is-same-complex64',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isSameComplex128Array',
	'path': '@stdlib/assert/is-same-complex128array',
	'value': require( '@stdlib/assert/is-same-complex128array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-complex128array',
		'@stdlib/assert/is-same-complex64array',
		'@stdlib/assert/is-same-float64array',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isSameFloat32Array',
	'path': '@stdlib/assert/is-same-float32array',
	'value': require( '@stdlib/assert/is-same-float32array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-same-float64array',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isSameFloat64Array',
	'path': '@stdlib/assert/is-same-float64array',
	'value': require( '@stdlib/assert/is-same-float64array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-same-float32array',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isSameNativeClass',
	'path': '@stdlib/assert/is-same-native-class',
	'value': require( '@stdlib/assert/is-same-native-class' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-equal',
		'@stdlib/assert/is-same-type',
		'@stdlib/assert/is-same-value',
		'@stdlib/assert/is-strict-equal'
	]
});

ns.push({
	'alias': 'isSameType',
	'path': '@stdlib/assert/is-same-type',
	'value': require( '@stdlib/assert/is-same-type' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-equal',
		'@stdlib/assert/is-same-native-class',
		'@stdlib/assert/is-same-value',
		'@stdlib/assert/is-strict-equal'
	]
});

ns.push({
	'alias': 'isSameValue',
	'path': '@stdlib/assert/is-same-value',
	'value': require( '@stdlib/assert/is-same-value' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-equal',
		'@stdlib/assert/is-same-value-zero',
		'@stdlib/assert/is-strict-equal'
	]
});

ns.push({
	'alias': 'isSameValueZero',
	'path': '@stdlib/assert/is-same-value-zero',
	'value': require( '@stdlib/assert/is-same-value-zero' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-equal',
		'@stdlib/assert/is-same-value',
		'@stdlib/assert/is-strict-equal'
	]
});

ns.push({
	'alias': 'isSharedArrayBuffer',
	'path': '@stdlib/assert/is-sharedarraybuffer',
	'value': require( '@stdlib/assert/is-sharedarraybuffer' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-arraybuffer',
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isSkewCentrosymmetricMatrix',
	'path': '@stdlib/assert/is-skew-centrosymmetric-matrix',
	'value': require( '@stdlib/assert/is-skew-centrosymmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-centrosymmetric-matrix',
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-skew-symmetric-matrix'
	]
});

ns.push({
	'alias': 'isSkewPersymmetricMatrix',
	'path': '@stdlib/assert/is-skew-persymmetric-matrix',
	'value': require( '@stdlib/assert/is-skew-persymmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-persymmetric-matrix',
		'@stdlib/assert/is-skew-symmetric-matrix'
	]
});

ns.push({
	'alias': 'isSkewSymmetricMatrix',
	'path': '@stdlib/assert/is-skew-symmetric-matrix',
	'value': require( '@stdlib/assert/is-skew-symmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-skew-symmetric-matrix',
		'@stdlib/assert/is-square-matrix'
	]
});

ns.push({
	'alias': 'isSlice',
	'path': '@stdlib/assert/is-slice',
	'value': require( '@stdlib/assert/is-slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-multi-slice',
		'@stdlib/assert/is-slice-like',
		'@stdlib/slice/ctor'
	]
});

ns.push({
	'alias': 'isSquareMatrix',
	'path': '@stdlib/assert/is-square-matrix',
	'value': require( '@stdlib/assert/is-square-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-symmetric-matrix'
	]
});

ns.push({
	'alias': 'isSquareNumber',
	'path': '@stdlib/assert/is-square-number',
	'value': require( '@stdlib/assert/is-square-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-cube-number',
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-triangular-number'
	]
});

ns.push({
	'alias': 'isSquareTriangularNumber',
	'path': '@stdlib/assert/is-square-triangular-number',
	'value': require( '@stdlib/assert/is-square-triangular-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-square-number',
		'@stdlib/assert/is-triangular-number'
	]
});

ns.push({
	'alias': 'isStrictEqual',
	'path': '@stdlib/assert/is-strict-equal',
	'value': require( '@stdlib/assert/is-strict-equal' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-equal',
		'@stdlib/assert/is-same-value'
	]
});

ns.push({
	'alias': 'isString',
	'path': '@stdlib/assert/is-string',
	'value': require( '@stdlib/assert/is-string' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isStringArray',
	'path': '@stdlib/assert/is-string-array',
	'value': require( '@stdlib/assert/is-string-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isSymbol',
	'path': '@stdlib/assert/is-symbol',
	'value': require( '@stdlib/assert/is-symbol' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isSymbolArray',
	'path': '@stdlib/assert/is-symbol-array',
	'value': require( '@stdlib/assert/is-symbol-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-symbol'
	]
});

ns.push({
	'alias': 'isSymmetricMatrix',
	'path': '@stdlib/assert/is-symmetric-matrix',
	'value': require( '@stdlib/assert/is-symmetric-matrix' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-nonsymmetric-matrix',
		'@stdlib/assert/is-square-matrix'
	]
});

ns.push({
	'alias': 'isSyntaxError',
	'path': '@stdlib/assert/is-syntax-error',
	'value': require( '@stdlib/assert/is-syntax-error' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-error'
	]
});

ns.push({
	'alias': 'isTriangularNumber',
	'path': '@stdlib/assert/is-triangular-number',
	'value': require( '@stdlib/assert/is-triangular-number' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-integer',
		'@stdlib/assert/is-number',
		'@stdlib/assert/is-square-number',
		'@stdlib/assert/is-square-triangular-number'
	]
});

ns.push({
	'alias': 'isTruthy',
	'path': '@stdlib/assert/is-truthy',
	'value': require( '@stdlib/assert/is-truthy' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-falsy'
	]
});

ns.push({
	'alias': 'isTruthyArray',
	'path': '@stdlib/assert/is-truthy-array',
	'value': require( '@stdlib/assert/is-truthy-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-falsy-array',
		'@stdlib/assert/is-truthy'
	]
});

ns.push({
	'alias': 'isTypedArray',
	'path': '@stdlib/assert/is-typed-array',
	'value': require( '@stdlib/assert/is-typed-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-typed-array-like'
	]
});

ns.push({
	'alias': 'isTypedArrayLength',
	'path': '@stdlib/assert/is-typed-array-length',
	'value': require( '@stdlib/assert/is-typed-array-length' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array-length',
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isTypedArrayLike',
	'path': '@stdlib/assert/is-typed-array-like',
	'value': require( '@stdlib/assert/is-typed-array-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-typed-array'
	]
});

ns.push({
	'alias': 'isTypeError',
	'path': '@stdlib/assert/is-type-error',
	'value': require( '@stdlib/assert/is-type-error' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-error'
	]
});

ns.push({
	'alias': 'isUint8Array',
	'path': '@stdlib/assert/is-uint8array',
	'value': require( '@stdlib/assert/is-uint8array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-typed-array',
		'@stdlib/assert/is-uint16array',
		'@stdlib/assert/is-uint32array'
	]
});

ns.push({
	'alias': 'isUint8ClampedArray',
	'path': '@stdlib/assert/is-uint8clampedarray',
	'value': require( '@stdlib/assert/is-uint8clampedarray' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-typed-array',
		'@stdlib/assert/is-uint8array'
	]
});

ns.push({
	'alias': 'isUint16Array',
	'path': '@stdlib/assert/is-uint16array',
	'value': require( '@stdlib/assert/is-uint16array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-typed-array',
		'@stdlib/assert/is-uint32array',
		'@stdlib/assert/is-uint8array'
	]
});

ns.push({
	'alias': 'isUint32Array',
	'path': '@stdlib/assert/is-uint32array',
	'value': require( '@stdlib/assert/is-uint32array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-typed-array',
		'@stdlib/assert/is-uint16array',
		'@stdlib/assert/is-uint8array'
	]
});

ns.push({
	'alias': 'isUNCPath',
	'path': '@stdlib/assert/is-unc-path',
	'value': require( '@stdlib/assert/is-unc-path' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isUndefined',
	'path': '@stdlib/assert/is-undefined',
	'value': require( '@stdlib/assert/is-undefined' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-null',
		'@stdlib/assert/is-undefined-or-null'
	]
});

ns.push({
	'alias': 'isUndefinedOrNull',
	'path': '@stdlib/assert/is-undefined-or-null',
	'value': require( '@stdlib/assert/is-undefined-or-null' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-null',
		'@stdlib/assert/is-undefined'
	]
});

ns.push({
	'alias': 'isUnityProbabilityArray',
	'path': '@stdlib/assert/is-unity-probability-array',
	'value': require( '@stdlib/assert/is-unity-probability-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-probability',
		'@stdlib/assert/is-probability-array'
	]
});

ns.push({
	'alias': 'isUppercase',
	'path': '@stdlib/assert/is-uppercase',
	'value': require( '@stdlib/assert/is-uppercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-lowercase',
		'@stdlib/assert/is-string'
	]
});

ns.push({
	'alias': 'isURI',
	'path': '@stdlib/assert/is-uri',
	'value': require( '@stdlib/assert/is-uri' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'isURIError',
	'path': '@stdlib/assert/is-uri-error',
	'value': require( '@stdlib/assert/is-uri-error' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-error'
	]
});

ns.push({
	'alias': 'isVectorLike',
	'path': '@stdlib/assert/is-vector-like',
	'value': require( '@stdlib/assert/is-vector-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-array',
		'@stdlib/assert/is-array-like',
		'@stdlib/assert/is-matrix-like',
		'@stdlib/assert/is-ndarray-like',
		'@stdlib/assert/is-typed-array-like'
	]
});

ns.push({
	'alias': 'isWhitespace',
	'path': '@stdlib/assert/is-whitespace',
	'value': require( '@stdlib/assert/is-whitespace' ),
	'type': 'Function',
	'related': [
		'@stdlib/regexp/whitespace'
	]
});

ns.push({
	'alias': 'isWritableProperty',
	'path': '@stdlib/assert/is-writable-property',
	'value': require( '@stdlib/assert/is-writable-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-readable-property',
		'@stdlib/assert/is-read-write-property',
		'@stdlib/assert/is-writable-property-in',
		'@stdlib/assert/is-write-only-property'
	]
});

ns.push({
	'alias': 'isWritablePropertyIn',
	'path': '@stdlib/assert/is-writable-property-in',
	'value': require( '@stdlib/assert/is-writable-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-readable-property-in',
		'@stdlib/assert/is-read-write-property-in',
		'@stdlib/assert/is-writable-property',
		'@stdlib/assert/is-write-only-property-in'
	]
});

ns.push({
	'alias': 'isWriteOnlyProperty',
	'path': '@stdlib/assert/is-write-only-property',
	'value': require( '@stdlib/assert/is-write-only-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property',
		'@stdlib/assert/is-read-write-property',
		'@stdlib/assert/is-writable-property',
		'@stdlib/assert/is-write-only-property-in'
	]
});

ns.push({
	'alias': 'isWriteOnlyPropertyIn',
	'path': '@stdlib/assert/is-write-only-property-in',
	'value': require( '@stdlib/assert/is-write-only-property-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-read-only-property-in',
		'@stdlib/assert/is-read-write-property-in',
		'@stdlib/assert/is-writable-property-in',
		'@stdlib/assert/is-write-only-property'
	]
});

ns.push({
	'alias': 'iterAbs',
	'path': '@stdlib/math/iter/special/abs',
	'value': require( '@stdlib/math/iter/special/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs',
		'@stdlib/math/iter/special/abs2'
	]
});

ns.push({
	'alias': 'iterAbs2',
	'path': '@stdlib/math/iter/special/abs2',
	'value': require( '@stdlib/math/iter/special/abs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs2',
		'@stdlib/math/iter/special/abs'
	]
});

ns.push({
	'alias': 'iterAcos',
	'path': '@stdlib/math/iter/special/acos',
	'value': require( '@stdlib/math/iter/special/acos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/iter/special/acosh',
		'@stdlib/math/iter/special/asin',
		'@stdlib/math/iter/special/atan'
	]
});

ns.push({
	'alias': 'iterAcosh',
	'path': '@stdlib/math/iter/special/acosh',
	'value': require( '@stdlib/math/iter/special/acosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/iter/special/acos',
		'@stdlib/math/iter/special/asinh',
		'@stdlib/math/iter/special/atanh'
	]
});

ns.push({
	'alias': 'iterAcot',
	'path': '@stdlib/math/iter/special/acot',
	'value': require( '@stdlib/math/iter/special/acot' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acot',
		'@stdlib/math/iter/special/acos',
		'@stdlib/math/iter/special/acoth',
		'@stdlib/math/iter/special/asin',
		'@stdlib/math/iter/special/atan'
	]
});

ns.push({
	'alias': 'iterAcoth',
	'path': '@stdlib/math/iter/special/acoth',
	'value': require( '@stdlib/math/iter/special/acoth' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/iter/special/acosh',
		'@stdlib/math/iter/special/acot',
		'@stdlib/math/iter/special/asinh',
		'@stdlib/math/iter/special/atanh'
	]
});

ns.push({
	'alias': 'iterAcovercos',
	'path': '@stdlib/math/iter/special/acovercos',
	'value': require( '@stdlib/math/iter/special/acovercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acovercos',
		'@stdlib/math/iter/special/acoversin',
		'@stdlib/math/iter/special/avercos',
		'@stdlib/math/iter/special/covercos',
		'@stdlib/math/iter/special/vercos'
	]
});

ns.push({
	'alias': 'iterAcoversin',
	'path': '@stdlib/math/iter/special/acoversin',
	'value': require( '@stdlib/math/iter/special/acoversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoversin',
		'@stdlib/math/iter/special/acovercos',
		'@stdlib/math/iter/special/aversin',
		'@stdlib/math/iter/special/coversin',
		'@stdlib/math/iter/special/versin'
	]
});

ns.push({
	'alias': 'iterAdd',
	'path': '@stdlib/math/iter/ops/add',
	'value': require( '@stdlib/math/iter/ops/add' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/ops/divide',
		'@stdlib/math/iter/ops/multiply',
		'@stdlib/math/iter/ops/subtract'
	]
});

ns.push({
	'alias': 'iterAdvance',
	'path': '@stdlib/iter/advance',
	'value': require( '@stdlib/iter/advance' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/head',
		'@stdlib/iter/slice',
		'@stdlib/iter/tail'
	]
});

ns.push({
	'alias': 'iterAhavercos',
	'path': '@stdlib/math/iter/special/ahavercos',
	'value': require( '@stdlib/math/iter/special/ahavercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ahavercos',
		'@stdlib/math/iter/special/ahaversin',
		'@stdlib/math/iter/special/havercos',
		'@stdlib/math/iter/special/vercos'
	]
});

ns.push({
	'alias': 'iterAhaversin',
	'path': '@stdlib/math/iter/special/ahaversin',
	'value': require( '@stdlib/math/iter/special/ahaversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ahaversin',
		'@stdlib/math/iter/special/ahavercos',
		'@stdlib/math/iter/special/haversin',
		'@stdlib/math/iter/special/versin'
	]
});

ns.push({
	'alias': 'iterAny',
	'path': '@stdlib/iter/any',
	'value': require( '@stdlib/iter/any' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any-by',
		'@stdlib/iter/every',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none',
		'@stdlib/iter/some'
	]
});

ns.push({
	'alias': 'iterAnyBy',
	'path': '@stdlib/iter/any-by',
	'value': require( '@stdlib/iter/any-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any',
		'@stdlib/iter/every-by',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none-by',
		'@stdlib/iter/some-by'
	]
});

ns.push({
	'alias': 'iterAsin',
	'path': '@stdlib/math/iter/special/asin',
	'value': require( '@stdlib/math/iter/special/asin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asin',
		'@stdlib/math/iter/special/acos',
		'@stdlib/math/iter/special/asinh',
		'@stdlib/math/iter/special/atan'
	]
});

ns.push({
	'alias': 'iterAsinh',
	'path': '@stdlib/math/iter/special/asinh',
	'value': require( '@stdlib/math/iter/special/asinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/iter/special/acosh',
		'@stdlib/math/iter/special/asin',
		'@stdlib/math/iter/special/atanh'
	]
});

ns.push({
	'alias': 'iterAtan',
	'path': '@stdlib/math/iter/special/atan',
	'value': require( '@stdlib/math/iter/special/atan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atan',
		'@stdlib/math/iter/special/acos',
		'@stdlib/math/iter/special/asin',
		'@stdlib/math/iter/special/atanh'
	]
});

ns.push({
	'alias': 'iterAtan2',
	'path': '@stdlib/math/iter/special/atan2',
	'value': require( '@stdlib/math/iter/special/atan2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atan2',
		'@stdlib/math/iter/special/atan'
	]
});

ns.push({
	'alias': 'iterAtanh',
	'path': '@stdlib/math/iter/special/atanh',
	'value': require( '@stdlib/math/iter/special/atanh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atanh',
		'@stdlib/math/iter/special/acosh',
		'@stdlib/math/iter/special/asinh',
		'@stdlib/math/iter/special/atan'
	]
});

ns.push({
	'alias': 'iterator2array',
	'path': '@stdlib/array/from-iterator',
	'value': require( '@stdlib/array/from-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/to-iterator',
		'@stdlib/iter/to-array-view',
		'@stdlib/iter/to-strided-array'
	]
});

ns.push({
	'alias': 'iterator2arrayview',
	'path': '@stdlib/iter/to-array-view',
	'value': require( '@stdlib/iter/to-array-view' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-view-iterator',
		'@stdlib/iter/to-strided-array',
		'@stdlib/iter/to-array-view-right'
	]
});

ns.push({
	'alias': 'iterator2arrayviewRight',
	'path': '@stdlib/iter/to-array-view-right',
	'value': require( '@stdlib/iter/to-array-view-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/array/to-view-iterator-right',
		'@stdlib/iter/to-strided-array',
		'@stdlib/iter/to-array-view'
	]
});

ns.push({
	'alias': 'iteratorStream',
	'path': '@stdlib/streams/node/from-iterator',
	'value': require( '@stdlib/streams/node/from-iterator' ),
	'type': 'Function',
	'related': [
		'@stdlib/streams/node/from-array'
	]
});

ns.push({
	'alias': 'IteratorSymbol',
	'path': '@stdlib/symbol/iterator',
	'value': require( '@stdlib/symbol/iterator' ),
	'type': 'symbol',
	'related': [
		'@stdlib/symbol/ctor'
	]
});

ns.push({
	'alias': 'iterAvercos',
	'path': '@stdlib/math/iter/special/avercos',
	'value': require( '@stdlib/math/iter/special/avercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/avercos',
		'@stdlib/math/iter/special/aversin',
		'@stdlib/math/iter/special/versin'
	]
});

ns.push({
	'alias': 'iterAversin',
	'path': '@stdlib/math/iter/special/aversin',
	'value': require( '@stdlib/math/iter/special/aversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/aversin',
		'@stdlib/math/iter/special/avercos',
		'@stdlib/math/iter/special/vercos'
	]
});

ns.push({
	'alias': 'iterawgn',
	'path': '@stdlib/simulate/iter/awgn',
	'value': require( '@stdlib/simulate/iter/awgn' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/awln',
		'@stdlib/simulate/iter/awun'
	]
});

ns.push({
	'alias': 'iterawln',
	'path': '@stdlib/simulate/iter/awln',
	'value': require( '@stdlib/simulate/iter/awln' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/awgn',
		'@stdlib/simulate/iter/awun'
	]
});

ns.push({
	'alias': 'iterawun',
	'path': '@stdlib/simulate/iter/awun',
	'value': require( '@stdlib/simulate/iter/awun' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/awgn',
		'@stdlib/simulate/iter/awln'
	]
});

ns.push({
	'alias': 'iterBartlettHannPulse',
	'path': '@stdlib/simulate/iter/bartlett-hann-pulse',
	'value': require( '@stdlib/simulate/iter/bartlett-hann-pulse' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/bartlett-pulse',
		'@stdlib/simulate/iter/hann-pulse',
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterBartlettPulse',
	'path': '@stdlib/simulate/iter/bartlett-pulse',
	'value': require( '@stdlib/simulate/iter/bartlett-pulse' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/bartlett-hann-pulse',
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterBesselj0',
	'path': '@stdlib/math/iter/special/besselj0',
	'value': require( '@stdlib/math/iter/special/besselj0' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/besselj0',
		'@stdlib/math/iter/special/besselj1',
		'@stdlib/math/iter/special/bessely0',
		'@stdlib/math/iter/special/bessely1'
	]
});

ns.push({
	'alias': 'iterBesselj1',
	'path': '@stdlib/math/iter/special/besselj1',
	'value': require( '@stdlib/math/iter/special/besselj1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/besselj1',
		'@stdlib/math/iter/special/besselj0',
		'@stdlib/math/iter/special/bessely0',
		'@stdlib/math/iter/special/bessely1'
	]
});

ns.push({
	'alias': 'iterBessely0',
	'path': '@stdlib/math/iter/special/bessely0',
	'value': require( '@stdlib/math/iter/special/bessely0' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/bessely0',
		'@stdlib/math/iter/special/besselj0',
		'@stdlib/math/iter/special/besselj1',
		'@stdlib/math/iter/special/bessely1'
	]
});

ns.push({
	'alias': 'iterBessely1',
	'path': '@stdlib/math/iter/special/bessely1',
	'value': require( '@stdlib/math/iter/special/bessely1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/bessely1',
		'@stdlib/math/iter/special/besselj0',
		'@stdlib/math/iter/special/besselj1',
		'@stdlib/math/iter/special/bessely0'
	]
});

ns.push({
	'alias': 'iterBeta',
	'path': '@stdlib/math/iter/special/beta',
	'value': require( '@stdlib/math/iter/special/beta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/beta',
		'@stdlib/math/iter/special/betainc',
		'@stdlib/math/iter/special/betaincinv',
		'@stdlib/math/iter/special/betaln'
	]
});

ns.push({
	'alias': 'iterBetaln',
	'path': '@stdlib/math/iter/special/betaln',
	'value': require( '@stdlib/math/iter/special/betaln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/betaln',
		'@stdlib/math/iter/special/beta',
		'@stdlib/math/iter/special/betainc',
		'@stdlib/math/iter/special/betaincinv'
	]
});

ns.push({
	'alias': 'iterBinet',
	'path': '@stdlib/math/iter/special/binet',
	'value': require( '@stdlib/math/iter/special/binet' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/binet',
		'@stdlib/math/iter/special/fibonacci',
		'@stdlib/math/iter/special/negafibonacci'
	]
});

ns.push({
	'alias': 'iterCbrt',
	'path': '@stdlib/math/iter/special/cbrt',
	'value': require( '@stdlib/math/iter/special/cbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrt',
		'@stdlib/math/iter/special/pow',
		'@stdlib/math/iter/special/sqrt'
	]
});

ns.push({
	'alias': 'iterCeil',
	'path': '@stdlib/math/iter/special/ceil',
	'value': require( '@stdlib/math/iter/special/ceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/iter/special/ceiln',
		'@stdlib/math/iter/special/floor',
		'@stdlib/math/iter/special/round'
	]
});

ns.push({
	'alias': 'iterCeil2',
	'path': '@stdlib/math/iter/special/ceil2',
	'value': require( '@stdlib/math/iter/special/ceil2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/iter/special/ceil',
		'@stdlib/math/iter/special/ceil10',
		'@stdlib/math/iter/special/floor2',
		'@stdlib/math/iter/special/round2'
	]
});

ns.push({
	'alias': 'iterCeil10',
	'path': '@stdlib/math/iter/special/ceil10',
	'value': require( '@stdlib/math/iter/special/ceil10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/iter/special/ceil',
		'@stdlib/math/iter/special/ceil2',
		'@stdlib/math/iter/special/floor10',
		'@stdlib/math/iter/special/round10'
	]
});

ns.push({
	'alias': 'iterCompositesSeq',
	'path': '@stdlib/math/iter/sequences/composites',
	'value': require( '@stdlib/math/iter/sequences/composites' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/positive-integers',
		'@stdlib/math/iter/sequences/primes'
	]
});

ns.push({
	'alias': 'iterConcat',
	'path': '@stdlib/iter/concat',
	'value': require( '@stdlib/iter/concat' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/interleave'
	]
});

ns.push({
	'alias': 'iterConstant',
	'path': '@stdlib/iter/constant',
	'value': require( '@stdlib/iter/constant' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/constant-function'
	]
});

ns.push({
	'alias': 'iterContinuedFraction',
	'path': '@stdlib/math/iter/utils/continued-fraction',
	'value': require( '@stdlib/math/iter/utils/continued-fraction' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/continued-fraction',
		'@stdlib/math/iter/utils/convergents',
		'@stdlib/math/iter/utils/generalized-continued-fraction'
	]
});

ns.push({
	'alias': 'iterContinuedFractionSeq',
	'path': '@stdlib/math/iter/sequences/continued-fraction',
	'value': require( '@stdlib/math/iter/sequences/continued-fraction' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/utils/continued-fraction',
		'@stdlib/math/iter/utils/convergents'
	]
});

ns.push({
	'alias': 'iterCos',
	'path': '@stdlib/math/iter/special/cos',
	'value': require( '@stdlib/math/iter/special/cos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/iter/special/cospi',
		'@stdlib/math/iter/special/sin',
		'@stdlib/math/iter/special/tan'
	]
});

ns.push({
	'alias': 'iterCosh',
	'path': '@stdlib/math/iter/special/cosh',
	'value': require( '@stdlib/math/iter/special/cosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cosh',
		'@stdlib/math/iter/special/cos',
		'@stdlib/math/iter/special/sinh',
		'@stdlib/math/iter/special/tanh'
	]
});

ns.push({
	'alias': 'iterCosineWave',
	'path': '@stdlib/simulate/iter/cosine-wave',
	'value': require( '@stdlib/simulate/iter/cosine-wave' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/sawtooth-wave',
		'@stdlib/simulate/iter/sine-wave',
		'@stdlib/simulate/iter/square-wave',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterCosm1',
	'path': '@stdlib/math/iter/special/cosm1',
	'value': require( '@stdlib/math/iter/special/cosm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cosm1',
		'@stdlib/math/iter/special/cos'
	]
});

ns.push({
	'alias': 'iterCospi',
	'path': '@stdlib/math/iter/special/cospi',
	'value': require( '@stdlib/math/iter/special/cospi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cospi',
		'@stdlib/math/iter/special/cos'
	]
});

ns.push({
	'alias': 'iterCounter',
	'path': '@stdlib/iter/counter',
	'value': require( '@stdlib/iter/counter' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/length'
	]
});

ns.push({
	'alias': 'iterCovercos',
	'path': '@stdlib/math/iter/special/covercos',
	'value': require( '@stdlib/math/iter/special/covercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/covercos',
		'@stdlib/math/iter/special/coversin',
		'@stdlib/math/iter/special/vercos'
	]
});

ns.push({
	'alias': 'iterCoversin',
	'path': '@stdlib/math/iter/special/coversin',
	'value': require( '@stdlib/math/iter/special/coversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/coversin',
		'@stdlib/math/iter/special/covercos',
		'@stdlib/math/iter/special/versin'
	]
});

ns.push({
	'alias': 'iterCubesSeq',
	'path': '@stdlib/math/iter/sequences/cubes',
	'value': require( '@stdlib/math/iter/sequences/cubes' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/fourth-powers',
		'@stdlib/math/iter/sequences/squares'
	]
});

ns.push({
	'alias': 'itercugmean',
	'path': '@stdlib/stats/iter/cugmean',
	'value': require( '@stdlib/stats/iter/cugmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cuhmean',
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/gmean',
		'@stdlib/stats/iter/mgmean'
	]
});

ns.push({
	'alias': 'itercuhmean',
	'path': '@stdlib/stats/iter/cuhmean',
	'value': require( '@stdlib/stats/iter/cuhmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cugmean',
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/hmean',
		'@stdlib/stats/iter/mhmean'
	]
});

ns.push({
	'alias': 'itercumax',
	'path': '@stdlib/stats/iter/cumax',
	'value': require( '@stdlib/stats/iter/cumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumidrange',
		'@stdlib/stats/iter/cumin',
		'@stdlib/stats/iter/curange',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/max'
	]
});

ns.push({
	'alias': 'itercumaxabs',
	'path': '@stdlib/stats/iter/cumaxabs',
	'value': require( '@stdlib/stats/iter/cumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumax',
		'@stdlib/stats/iter/cuminabs',
		'@stdlib/stats/iter/maxabs'
	]
});

ns.push({
	'alias': 'itercumean',
	'path': '@stdlib/stats/iter/cumean',
	'value': require( '@stdlib/stats/iter/cumean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumidrange',
		'@stdlib/stats/iter/custdev',
		'@stdlib/stats/iter/cusum',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/cuvariance',
		'@stdlib/stats/iter/mean'
	]
});

ns.push({
	'alias': 'itercumeanabs',
	'path': '@stdlib/stats/iter/cumeanabs',
	'value': require( '@stdlib/stats/iter/cumeanabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/cumeanabs2',
		'@stdlib/stats/iter/cusumabs',
		'@stdlib/stats/iter/meanabs'
	]
});

ns.push({
	'alias': 'itercumeanabs2',
	'path': '@stdlib/stats/iter/cumeanabs2',
	'value': require( '@stdlib/stats/iter/cumeanabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/cumeanabs',
		'@stdlib/stats/iter/cusumabs2',
		'@stdlib/stats/iter/meanabs2'
	]
});

ns.push({
	'alias': 'itercumidrange',
	'path': '@stdlib/stats/iter/cumidrange',
	'value': require( '@stdlib/stats/iter/cumidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/cumax',
		'@stdlib/stats/iter/cumin',
		'@stdlib/stats/iter/curange',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/midrange'
	]
});

ns.push({
	'alias': 'itercumin',
	'path': '@stdlib/stats/iter/cumin',
	'value': require( '@stdlib/stats/iter/cumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumax',
		'@stdlib/stats/iter/cumidrange',
		'@stdlib/stats/iter/curange',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/min'
	]
});

ns.push({
	'alias': 'itercuminabs',
	'path': '@stdlib/stats/iter/cuminabs',
	'value': require( '@stdlib/stats/iter/cuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumaxabs',
		'@stdlib/stats/iter/cumin',
		'@stdlib/stats/iter/minabs'
	]
});

ns.push({
	'alias': 'itercuprod',
	'path': '@stdlib/stats/iter/cuprod',
	'value': require( '@stdlib/stats/iter/cuprod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cusum',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/prod'
	]
});

ns.push({
	'alias': 'itercurange',
	'path': '@stdlib/stats/iter/curange',
	'value': require( '@stdlib/stats/iter/curange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumax',
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/cumin',
		'@stdlib/stats/iter/cusummary',
		'@stdlib/stats/iter/range'
	]
});

ns.push({
	'alias': 'itercusum',
	'path': '@stdlib/stats/iter/cusum',
	'value': require( '@stdlib/stats/iter/cusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumean',
		'@stdlib/stats/iter/sum',
		'@stdlib/stats/iter/cuprod',
		'@stdlib/stats/iter/cusummary'
	]
});

ns.push({
	'alias': 'itercusumabs',
	'path': '@stdlib/stats/iter/cusumabs',
	'value': require( '@stdlib/stats/iter/cusumabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumeanabs',
		'@stdlib/stats/iter/cusum',
		'@stdlib/stats/iter/sumabs'
	]
});

ns.push({
	'alias': 'itercusumabs2',
	'path': '@stdlib/stats/iter/cusumabs2',
	'value': require( '@stdlib/stats/iter/cusumabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/cumeanabs2',
		'@stdlib/stats/iter/cusumabs',
		'@stdlib/stats/iter/sumabs2'
	]
});

ns.push({
	'alias': 'iterDatespace',
	'path': '@stdlib/iter/datespace',
	'value': require( '@stdlib/iter/datespace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/iter/incrspace',
		'@stdlib/iter/linspace',
		'@stdlib/iter/logspace',
		'@stdlib/iter/step'
	]
});

ns.push({
	'alias': 'iterDedupe',
	'path': '@stdlib/iter/dedupe',
	'value': require( '@stdlib/iter/dedupe' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/dedupe-by',
		'@stdlib/iter/unique'
	]
});

ns.push({
	'alias': 'iterDedupeBy',
	'path': '@stdlib/iter/dedupe-by',
	'value': require( '@stdlib/iter/dedupe-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/dedupe',
		'@stdlib/iter/unique'
	]
});

ns.push({
	'alias': 'iterDeg2rad',
	'path': '@stdlib/math/iter/special/deg2rad',
	'value': require( '@stdlib/math/iter/special/deg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/deg2rad',
		'@stdlib/math/iter/special/rad2deg'
	]
});

ns.push({
	'alias': 'iterDigamma',
	'path': '@stdlib/math/iter/special/digamma',
	'value': require( '@stdlib/math/iter/special/digamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/digamma',
		'@stdlib/math/iter/special/gamma',
		'@stdlib/math/iter/special/trigamma'
	]
});

ns.push({
	'alias': 'iterDiracComb',
	'path': '@stdlib/simulate/iter/dirac-comb',
	'value': require( '@stdlib/simulate/iter/dirac-comb' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse'
	]
});

ns.push({
	'alias': 'iterDiracDelta',
	'path': '@stdlib/math/iter/special/dirac-delta',
	'value': require( '@stdlib/math/iter/special/dirac-delta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/dirac-delta',
		'@stdlib/math/iter/special/kronecker-delta'
	]
});

ns.push({
	'alias': 'iterDivide',
	'path': '@stdlib/math/iter/ops/divide',
	'value': require( '@stdlib/math/iter/ops/divide' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/ops/add',
		'@stdlib/math/iter/ops/divide',
		'@stdlib/math/iter/ops/multiply'
	]
});

ns.push({
	'alias': 'iterEllipe',
	'path': '@stdlib/math/iter/special/ellipe',
	'value': require( '@stdlib/math/iter/special/ellipe' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipe',
		'@stdlib/math/iter/special/ellipk'
	]
});

ns.push({
	'alias': 'iterEllipk',
	'path': '@stdlib/math/iter/special/ellipk',
	'value': require( '@stdlib/math/iter/special/ellipk' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipk',
		'@stdlib/math/iter/special/ellipe'
	]
});

ns.push({
	'alias': 'iterEmpty',
	'path': '@stdlib/iter/empty',
	'value': require( '@stdlib/iter/empty' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/constant'
	]
});

ns.push({
	'alias': 'iterErf',
	'path': '@stdlib/math/iter/special/erf',
	'value': require( '@stdlib/math/iter/special/erf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erf',
		'@stdlib/math/iter/special/erfc',
		'@stdlib/math/iter/special/erfinv',
		'@stdlib/math/iter/special/erfcinv'
	]
});

ns.push({
	'alias': 'iterErfc',
	'path': '@stdlib/math/iter/special/erfc',
	'value': require( '@stdlib/math/iter/special/erfc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erfc',
		'@stdlib/math/iter/special/erf',
		'@stdlib/math/iter/special/erfinv',
		'@stdlib/math/iter/special/erfcinv'
	]
});

ns.push({
	'alias': 'iterErfcinv',
	'path': '@stdlib/math/iter/special/erfcinv',
	'value': require( '@stdlib/math/iter/special/erfcinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erfcinv',
		'@stdlib/math/iter/special/erf',
		'@stdlib/math/iter/special/erfc',
		'@stdlib/math/iter/special/erfinv'
	]
});

ns.push({
	'alias': 'iterErfinv',
	'path': '@stdlib/math/iter/special/erfinv',
	'value': require( '@stdlib/math/iter/special/erfinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erfinv',
		'@stdlib/math/iter/special/erf',
		'@stdlib/math/iter/special/erfc',
		'@stdlib/math/iter/special/erfcinv'
	]
});

ns.push({
	'alias': 'iterEta',
	'path': '@stdlib/math/iter/special/dirichlet-eta',
	'value': require( '@stdlib/math/iter/special/dirichlet-eta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/dirichlet-eta'
	]
});

ns.push({
	'alias': 'iterEvenIntegersSeq',
	'path': '@stdlib/math/iter/sequences/even-integers',
	'value': require( '@stdlib/math/iter/sequences/even-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/odd-integers'
	]
});

ns.push({
	'alias': 'iterEvery',
	'path': '@stdlib/iter/every',
	'value': require( '@stdlib/iter/every' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any',
		'@stdlib/iter/every-by',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none',
		'@stdlib/iter/some'
	]
});

ns.push({
	'alias': 'iterEveryBy',
	'path': '@stdlib/iter/every-by',
	'value': require( '@stdlib/iter/every-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any-by',
		'@stdlib/iter/every',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none-by',
		'@stdlib/iter/some-by'
	]
});

ns.push({
	'alias': 'iterExp',
	'path': '@stdlib/math/iter/special/exp',
	'value': require( '@stdlib/math/iter/special/exp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/iter/special/exp10',
		'@stdlib/math/iter/special/exp2',
		'@stdlib/math/iter/special/expm1',
		'@stdlib/math/iter/special/ln'
	]
});

ns.push({
	'alias': 'iterExp2',
	'path': '@stdlib/math/iter/special/exp2',
	'value': require( '@stdlib/math/iter/special/exp2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp2',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/exp10',
		'@stdlib/math/iter/special/log2'
	]
});

ns.push({
	'alias': 'iterExp10',
	'path': '@stdlib/math/iter/special/exp10',
	'value': require( '@stdlib/math/iter/special/exp10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp10',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/exp2',
		'@stdlib/math/iter/special/log10'
	]
});

ns.push({
	'alias': 'iterExpit',
	'path': '@stdlib/math/iter/special/expit',
	'value': require( '@stdlib/math/iter/special/expit' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/expit',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/logit'
	]
});

ns.push({
	'alias': 'iterExpm1',
	'path': '@stdlib/math/iter/special/expm1',
	'value': require( '@stdlib/math/iter/special/expm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/expm1',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/expm1rel'
	]
});

ns.push({
	'alias': 'iterExpm1rel',
	'path': '@stdlib/math/iter/special/expm1rel',
	'value': require( '@stdlib/math/iter/special/expm1rel' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/expm1rel',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/expm1'
	]
});

ns.push({
	'alias': 'iterFactorial',
	'path': '@stdlib/math/iter/special/factorial',
	'value': require( '@stdlib/math/iter/special/factorial' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/factorial',
		'@stdlib/math/iter/special/factorialln',
		'@stdlib/math/iter/sequences/factorial'
	]
});

ns.push({
	'alias': 'iterFactorialln',
	'path': '@stdlib/math/iter/special/factorialln',
	'value': require( '@stdlib/math/iter/special/factorialln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/factorialln',
		'@stdlib/math/iter/special/factorial'
	]
});

ns.push({
	'alias': 'iterFactorialsSeq',
	'path': '@stdlib/math/iter/sequences/factorials',
	'value': require( '@stdlib/math/iter/sequences/factorials' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/special/factorial'
	]
});

ns.push({
	'alias': 'iterFibonacciSeq',
	'path': '@stdlib/math/iter/sequences/fibonacci',
	'value': require( '@stdlib/math/iter/sequences/fibonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci',
		'@stdlib/math/iter/sequences/lucas',
		'@stdlib/math/iter/sequences/negafibonacci',
		'@stdlib/math/iter/sequences/nonfibonacci'
	]
});

ns.push({
	'alias': 'iterFifthPowersSeq',
	'path': '@stdlib/math/iter/sequences/fifth-powers',
	'value': require( '@stdlib/math/iter/sequences/fifth-powers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/cubes',
		'@stdlib/math/iter/sequences/fourth-powers',
		'@stdlib/math/iter/sequences/squares'
	]
});

ns.push({
	'alias': 'iterFill',
	'path': '@stdlib/iter/fill',
	'value': require( '@stdlib/iter/fill' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/replace',
		'@stdlib/iter/replace-by'
	]
});

ns.push({
	'alias': 'iterFilter',
	'path': '@stdlib/iter/filter',
	'value': require( '@stdlib/iter/filter' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/filter-map',
		'@stdlib/iter/map',
		'@stdlib/iter/reject'
	]
});

ns.push({
	'alias': 'iterFilterMap',
	'path': '@stdlib/iter/filter-map',
	'value': require( '@stdlib/iter/filter-map' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/filter',
		'@stdlib/iter/map'
	]
});

ns.push({
	'alias': 'iterFirst',
	'path': '@stdlib/iter/first',
	'value': require( '@stdlib/iter/first' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/head',
		'@stdlib/iter/last',
		'@stdlib/iter/nth'
	]
});

ns.push({
	'alias': 'iterFlatTopPulse',
	'path': '@stdlib/simulate/iter/flat-top-pulse',
	'value': require( '@stdlib/simulate/iter/flat-top-pulse' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse'
	]
});

ns.push({
	'alias': 'iterFloor',
	'path': '@stdlib/math/iter/special/floor',
	'value': require( '@stdlib/math/iter/special/floor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/floor',
		'@stdlib/math/iter/special/ceil',
		'@stdlib/math/iter/special/round'
	]
});

ns.push({
	'alias': 'iterFloor2',
	'path': '@stdlib/math/iter/special/floor2',
	'value': require( '@stdlib/math/iter/special/floor2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/iter/special/ceil2',
		'@stdlib/math/iter/special/floor',
		'@stdlib/math/iter/special/floor10',
		'@stdlib/math/iter/special/round2'
	]
});

ns.push({
	'alias': 'iterFloor10',
	'path': '@stdlib/math/iter/special/floor10',
	'value': require( '@stdlib/math/iter/special/floor10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/iter/special/ceil10',
		'@stdlib/math/iter/special/floor',
		'@stdlib/math/iter/special/floor2',
		'@stdlib/math/iter/special/round10'
	]
});

ns.push({
	'alias': 'iterFlow',
	'path': '@stdlib/iter/flow',
	'value': require( '@stdlib/iter/flow' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/pipeline'
	]
});

ns.push({
	'alias': 'iterForEach',
	'path': '@stdlib/iter/for-each',
	'value': require( '@stdlib/iter/for-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/map'
	]
});

ns.push({
	'alias': 'iterFourthPowersSeq',
	'path': '@stdlib/math/iter/sequences/fourth-powers',
	'value': require( '@stdlib/math/iter/sequences/fourth-powers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/cubes',
		'@stdlib/math/iter/sequences/fifth-powers',
		'@stdlib/math/iter/sequences/squares'
	]
});

ns.push({
	'alias': 'iterFresnelc',
	'path': '@stdlib/math/iter/special/fresnelc',
	'value': require( '@stdlib/math/iter/special/fresnelc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fresnelc',
		'@stdlib/math/iter/special/fresnel',
		'@stdlib/math/iter/special/fresnels'
	]
});

ns.push({
	'alias': 'iterFresnels',
	'path': '@stdlib/math/iter/special/fresnels',
	'value': require( '@stdlib/math/iter/special/fresnels' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fresnels',
		'@stdlib/math/iter/special/fresnel',
		'@stdlib/math/iter/special/fresnelc'
	]
});

ns.push({
	'alias': 'iterGamma',
	'path': '@stdlib/math/iter/special/gamma',
	'value': require( '@stdlib/math/iter/special/gamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/iter/special/gamma1pm1',
		'@stdlib/math/iter/special/gammainc',
		'@stdlib/math/iter/special/gammaincinv',
		'@stdlib/math/iter/special/gammaln'
	]
});

ns.push({
	'alias': 'iterGamma1pm1',
	'path': '@stdlib/math/iter/special/gamma1pm1',
	'value': require( '@stdlib/math/iter/special/gamma1pm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma1pm1',
		'@stdlib/math/iter/special/gamma'
	]
});

ns.push({
	'alias': 'iterGammaln',
	'path': '@stdlib/math/iter/special/gammaln',
	'value': require( '@stdlib/math/iter/special/gammaln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gammaln',
		'@stdlib/math/iter/special/gamma',
		'@stdlib/math/iter/special/gammainc',
		'@stdlib/math/iter/special/gammaincinv'
	]
});

ns.push({
	'alias': 'iterHacovercos',
	'path': '@stdlib/math/iter/special/hacovercos',
	'value': require( '@stdlib/math/iter/special/hacovercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hacovercos',
		'@stdlib/math/iter/special/covercos',
		'@stdlib/math/iter/special/hacoversin'
	]
});

ns.push({
	'alias': 'iterHacoversin',
	'path': '@stdlib/math/iter/special/hacoversin',
	'value': require( '@stdlib/math/iter/special/hacoversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hacoversin',
		'@stdlib/math/iter/special/coversin',
		'@stdlib/math/iter/special/hacovercos'
	]
});

ns.push({
	'alias': 'iterHannPulse',
	'path': '@stdlib/simulate/iter/hann-pulse',
	'value': require( '@stdlib/simulate/iter/hann-pulse' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/bartlett-hann-pulse',
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/sine-wave'
	]
});

ns.push({
	'alias': 'iterHavercos',
	'path': '@stdlib/math/iter/special/havercos',
	'value': require( '@stdlib/math/iter/special/havercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/havercos',
		'@stdlib/math/iter/special/haversin',
		'@stdlib/math/iter/special/vercos'
	]
});

ns.push({
	'alias': 'iterHaversin',
	'path': '@stdlib/math/iter/special/haversin',
	'value': require( '@stdlib/math/iter/special/haversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/haversin',
		'@stdlib/math/iter/special/havercos',
		'@stdlib/math/iter/special/versin'
	]
});

ns.push({
	'alias': 'iterHead',
	'path': '@stdlib/iter/head',
	'value': require( '@stdlib/iter/head' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/first',
		'@stdlib/iter/slice',
		'@stdlib/iter/tail'
	]
});

ns.push({
	'alias': 'iterIncrspace',
	'path': '@stdlib/iter/incrspace',
	'value': require( '@stdlib/iter/incrspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/iter/datespace',
		'@stdlib/iter/geomspace',
		'@stdlib/iter/linspace',
		'@stdlib/iter/logspace',
		'@stdlib/iter/step',
		'@stdlib/iter/unitspace'
	]
});

ns.push({
	'alias': 'iterIntegersSeq',
	'path': '@stdlib/math/iter/sequences/integers',
	'value': require( '@stdlib/math/iter/sequences/integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/negative-integers',
		'@stdlib/math/iter/sequences/nonnegative-integers',
		'@stdlib/math/iter/sequences/nonpositive-integers',
		'@stdlib/math/iter/sequences/positive-integers'
	]
});

ns.push({
	'alias': 'iterIntersection',
	'path': '@stdlib/iter/intersection',
	'value': require( '@stdlib/iter/intersection' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/intersection-by',
		'@stdlib/iter/intersection-by-hash',
		'@stdlib/iter/union',
		'@stdlib/iter/unique'
	]
});

ns.push({
	'alias': 'iterIntersectionByHash',
	'path': '@stdlib/iter/intersection-by-hash',
	'value': require( '@stdlib/iter/intersection-by-hash' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/intersection',
		'@stdlib/iter/intersection-by',
		'@stdlib/iter/union-by-hash',
		'@stdlib/iter/unique-by-hash'
	]
});

ns.push({
	'alias': 'iterInv',
	'path': '@stdlib/math/iter/special/inv',
	'value': require( '@stdlib/math/iter/special/inv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/inv',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLanczosPulse',
	'path': '@stdlib/simulate/iter/lanczos-pulse',
	'value': require( '@stdlib/simulate/iter/lanczos-pulse' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/periodic-sinc'
	]
});

ns.push({
	'alias': 'iterLast',
	'path': '@stdlib/iter/last',
	'value': require( '@stdlib/iter/last' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/first',
		'@stdlib/iter/nth'
	]
});

ns.push({
	'alias': 'iterLength',
	'path': '@stdlib/iter/length',
	'value': require( '@stdlib/iter/length' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/counter'
	]
});

ns.push({
	'alias': 'iterLinspace',
	'path': '@stdlib/iter/linspace',
	'value': require( '@stdlib/iter/linspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/iter/datespace',
		'@stdlib/iter/geomspace',
		'@stdlib/iter/incrspace',
		'@stdlib/iter/logspace',
		'@stdlib/iter/step',
		'@stdlib/iter/unitspace'
	]
});

ns.push({
	'alias': 'iterLn',
	'path': '@stdlib/math/iter/special/ln',
	'value': require( '@stdlib/math/iter/special/ln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ln',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/log10',
		'@stdlib/math/iter/special/log1p',
		'@stdlib/math/iter/special/log2'
	]
});

ns.push({
	'alias': 'iterLog',
	'path': '@stdlib/math/iter/special/log',
	'value': require( '@stdlib/math/iter/special/log' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log',
		'@stdlib/math/iter/special/log10',
		'@stdlib/math/iter/special/log1p',
		'@stdlib/math/iter/special/log2',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLog1mexp',
	'path': '@stdlib/math/iter/special/log1mexp',
	'value': require( '@stdlib/math/iter/special/log1mexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log1mexp',
		'@stdlib/math/iter/special/log',
		'@stdlib/math/iter/special/log1p',
		'@stdlib/math/iter/special/log1pexp',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLog1p',
	'path': '@stdlib/math/iter/special/log1p',
	'value': require( '@stdlib/math/iter/special/log1p' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log1p',
		'@stdlib/math/iter/special/log',
		'@stdlib/math/iter/special/log10',
		'@stdlib/math/iter/special/log2',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLog1pexp',
	'path': '@stdlib/math/iter/special/log1pexp',
	'value': require( '@stdlib/math/iter/special/log1pexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log1pexp',
		'@stdlib/math/iter/special/log',
		'@stdlib/math/iter/special/log1p',
		'@stdlib/math/iter/special/log1mexp',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLog2',
	'path': '@stdlib/math/iter/special/log2',
	'value': require( '@stdlib/math/iter/special/log2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log2',
		'@stdlib/math/iter/special/log',
		'@stdlib/math/iter/special/log10',
		'@stdlib/math/iter/special/log1p',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLog10',
	'path': '@stdlib/math/iter/special/log10',
	'value': require( '@stdlib/math/iter/special/log10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log10',
		'@stdlib/math/iter/special/log',
		'@stdlib/math/iter/special/log1p',
		'@stdlib/math/iter/special/log2',
		'@stdlib/math/iter/special/pow'
	]
});

ns.push({
	'alias': 'iterLogit',
	'path': '@stdlib/math/iter/special/logit',
	'value': require( '@stdlib/math/iter/special/logit' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/logit'
	]
});

ns.push({
	'alias': 'iterLogspace',
	'path': '@stdlib/iter/logspace',
	'value': require( '@stdlib/iter/logspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/iter/datespace',
		'@stdlib/iter/geomspace',
		'@stdlib/iter/incrspace',
		'@stdlib/iter/linspace',
		'@stdlib/iter/step'
	]
});

ns.push({
	'alias': 'iterLucasSeq',
	'path': '@stdlib/math/iter/sequences/lucas',
	'value': require( '@stdlib/math/iter/sequences/lucas' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/lucas',
		'@stdlib/math/iter/sequences/fibonacci',
		'@stdlib/math/iter/sequences/negalucas'
	]
});

ns.push({
	'alias': 'iterMap',
	'path': '@stdlib/iter/map',
	'value': require( '@stdlib/iter/map' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/filter',
		'@stdlib/iter/filter-map',
		'@stdlib/iter/for-each',
		'@stdlib/iter/reduce',
		'@stdlib/iter/reject'
	]
});

ns.push({
	'alias': 'iterMapN',
	'path': '@stdlib/iter/mapn',
	'value': require( '@stdlib/iter/mapn' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/filter-mapn',
		'@stdlib/iter/map'
	]
});

ns.push({
	'alias': 'itermax',
	'path': '@stdlib/stats/iter/max',
	'value': require( '@stdlib/stats/iter/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/midrange',
		'@stdlib/stats/iter/min',
		'@stdlib/stats/iter/mmax',
		'@stdlib/stats/iter/range',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'itermaxabs',
	'path': '@stdlib/stats/iter/maxabs',
	'value': require( '@stdlib/stats/iter/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/max',
		'@stdlib/stats/iter/minabs',
		'@stdlib/stats/iter/mmaxabs'
	]
});

ns.push({
	'alias': 'itermean',
	'path': '@stdlib/stats/iter/mean',
	'value': require( '@stdlib/stats/iter/mean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/midrange',
		'@stdlib/stats/iter/mmean',
		'@stdlib/stats/iter/stdev',
		'@stdlib/stats/iter/sum',
		'@stdlib/stats/iter/summary',
		'@stdlib/stats/iter/variance'
	]
});

ns.push({
	'alias': 'itermeanabs',
	'path': '@stdlib/stats/iter/meanabs',
	'value': require( '@stdlib/stats/iter/meanabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/mmeanabs',
		'@stdlib/stats/iter/sumabs'
	]
});

ns.push({
	'alias': 'itermeanabs2',
	'path': '@stdlib/stats/iter/meanabs2',
	'value': require( '@stdlib/stats/iter/meanabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/meanabs',
		'@stdlib/stats/iter/mmeanabs2',
		'@stdlib/stats/iter/sumabs2'
	]
});

ns.push({
	'alias': 'itermidrange',
	'path': '@stdlib/stats/iter/midrange',
	'value': require( '@stdlib/stats/iter/midrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/max',
		'@stdlib/stats/iter/min',
		'@stdlib/stats/iter/range',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'itermin',
	'path': '@stdlib/stats/iter/min',
	'value': require( '@stdlib/stats/iter/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/max',
		'@stdlib/stats/iter/midrange',
		'@stdlib/stats/iter/mmin',
		'@stdlib/stats/iter/range',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'iterminabs',
	'path': '@stdlib/stats/iter/minabs',
	'value': require( '@stdlib/stats/iter/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/maxabs',
		'@stdlib/stats/iter/min',
		'@stdlib/stats/iter/mminabs'
	]
});

ns.push({
	'alias': 'itermmax',
	'path': '@stdlib/stats/iter/mmax',
	'value': require( '@stdlib/stats/iter/mmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/max',
		'@stdlib/stats/iter/mmidrange',
		'@stdlib/stats/iter/mmin',
		'@stdlib/stats/iter/mrange',
		'@stdlib/stats/iter/msummary'
	]
});

ns.push({
	'alias': 'itermmaxabs',
	'path': '@stdlib/stats/iter/mmaxabs',
	'value': require( '@stdlib/stats/iter/mmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/maxabs',
		'@stdlib/stats/iter/mmax',
		'@stdlib/stats/iter/mminabs'
	]
});

ns.push({
	'alias': 'itermmean',
	'path': '@stdlib/stats/iter/mmean',
	'value': require( '@stdlib/stats/iter/mmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/msum',
		'@stdlib/stats/iter/mstdev',
		'@stdlib/stats/iter/msummary',
		'@stdlib/stats/iter/mvariance'
	]
});

ns.push({
	'alias': 'itermmeanabs',
	'path': '@stdlib/stats/iter/mmeanabs',
	'value': require( '@stdlib/stats/iter/mmeanabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/meanabs',
		'@stdlib/stats/iter/mmean',
		'@stdlib/stats/iter/msumabs'
	]
});

ns.push({
	'alias': 'itermmeanabs2',
	'path': '@stdlib/stats/iter/mmeanabs2',
	'value': require( '@stdlib/stats/iter/mmeanabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/meanabs2',
		'@stdlib/stats/iter/mmeanabs',
		'@stdlib/stats/iter/msumabs2'
	]
});

ns.push({
	'alias': 'itermmidrange',
	'path': '@stdlib/stats/iter/mmidrange',
	'value': require( '@stdlib/stats/iter/mmidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/midrange',
		'@stdlib/stats/iter/mmean',
		'@stdlib/stats/iter/mmax',
		'@stdlib/stats/iter/mmin',
		'@stdlib/stats/iter/mrange'
	]
});

ns.push({
	'alias': 'itermmin',
	'path': '@stdlib/stats/iter/mmin',
	'value': require( '@stdlib/stats/iter/mmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/min',
		'@stdlib/stats/iter/mmax',
		'@stdlib/stats/iter/mmidrange',
		'@stdlib/stats/iter/mrange',
		'@stdlib/stats/iter/msummary'
	]
});

ns.push({
	'alias': 'itermminabs',
	'path': '@stdlib/stats/iter/mminabs',
	'value': require( '@stdlib/stats/iter/mminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/minabs',
		'@stdlib/stats/iter/mmaxabs',
		'@stdlib/stats/iter/mmin'
	]
});

ns.push({
	'alias': 'iterMod',
	'path': '@stdlib/math/iter/ops/mod',
	'value': require( '@stdlib/math/iter/ops/mod' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/ops/divide'
	]
});

ns.push({
	'alias': 'itermprod',
	'path': '@stdlib/stats/iter/mprod',
	'value': require( '@stdlib/stats/iter/mprod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/msum',
		'@stdlib/stats/iter/prod'
	]
});

ns.push({
	'alias': 'itermrange',
	'path': '@stdlib/stats/iter/mrange',
	'value': require( '@stdlib/stats/iter/mrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mmax',
		'@stdlib/stats/iter/mmean',
		'@stdlib/stats/iter/mmin',
		'@stdlib/stats/iter/msummary',
		'@stdlib/stats/iter/range'
	]
});

ns.push({
	'alias': 'itermsum',
	'path': '@stdlib/stats/iter/msum',
	'value': require( '@stdlib/stats/iter/msum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mmean',
		'@stdlib/stats/iter/msummary',
		'@stdlib/stats/iter/sum'
	]
});

ns.push({
	'alias': 'itermsumabs',
	'path': '@stdlib/stats/iter/msumabs',
	'value': require( '@stdlib/stats/iter/msumabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mmeanabs',
		'@stdlib/stats/iter/msum',
		'@stdlib/stats/iter/sum',
		'@stdlib/stats/iter/sumabs'
	]
});

ns.push({
	'alias': 'itermsumabs2',
	'path': '@stdlib/stats/iter/msumabs2',
	'value': require( '@stdlib/stats/iter/msumabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mmeanabs2',
		'@stdlib/stats/iter/msumabs',
		'@stdlib/stats/iter/sumabs',
		'@stdlib/stats/iter/sumabs2'
	]
});

ns.push({
	'alias': 'iterMultiply',
	'path': '@stdlib/math/iter/ops/multiply',
	'value': require( '@stdlib/math/iter/ops/multiply' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/ops/add',
		'@stdlib/math/iter/ops/divide',
		'@stdlib/math/iter/ops/subtract'
	]
});

ns.push({
	'alias': 'iterNegaFibonacciSeq',
	'path': '@stdlib/math/iter/sequences/negafibonacci',
	'value': require( '@stdlib/math/iter/sequences/negafibonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/negafibonacci',
		'@stdlib/math/iter/sequences/fibonacci',
		'@stdlib/math/iter/sequences/nonfibonacci'
	]
});

ns.push({
	'alias': 'iterNegaLucasSeq',
	'path': '@stdlib/math/iter/sequences/negalucas',
	'value': require( '@stdlib/math/iter/sequences/negalucas' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/negalucas',
		'@stdlib/math/iter/sequences/lucas',
		'@stdlib/math/iter/sequences/negafibonacci'
	]
});

ns.push({
	'alias': 'iterNegativeEvenIntegersSeq',
	'path': '@stdlib/math/iter/sequences/negative-even-integers',
	'value': require( '@stdlib/math/iter/sequences/negative-even-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/even-integers',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/negative-integers',
		'@stdlib/math/iter/sequences/negative-odd-integers',
		'@stdlib/math/iter/sequences/positive-even-integers',
		'@stdlib/math/iter/sequences/nonpositive-even-integers'
	]
});

ns.push({
	'alias': 'iterNegativeIntegersSeq',
	'path': '@stdlib/math/iter/sequences/negative-integers',
	'value': require( '@stdlib/math/iter/sequences/negative-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/nonnegative-integers',
		'@stdlib/math/iter/sequences/nonpositive-integers',
		'@stdlib/math/iter/sequences/positive-integers'
	]
});

ns.push({
	'alias': 'iterNegativeOddIntegersSeq',
	'path': '@stdlib/math/iter/sequences/negative-odd-integers',
	'value': require( '@stdlib/math/iter/sequences/negative-odd-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/odd-integers',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/negative-integers',
		'@stdlib/math/iter/sequences/negative-even-integers',
		'@stdlib/math/iter/sequences/positive-odd-integers'
	]
});

ns.push({
	'alias': 'iterNone',
	'path': '@stdlib/iter/none',
	'value': require( '@stdlib/iter/none' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any',
		'@stdlib/iter/every',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none-by',
		'@stdlib/iter/some'
	]
});

ns.push({
	'alias': 'iterNoneBy',
	'path': '@stdlib/iter/none-by',
	'value': require( '@stdlib/iter/none-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any-by',
		'@stdlib/iter/every-by',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none',
		'@stdlib/iter/some-by'
	]
});

ns.push({
	'alias': 'iterNonFibonacciSeq',
	'path': '@stdlib/math/iter/sequences/nonfibonacci',
	'value': require( '@stdlib/math/iter/sequences/nonfibonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/nonfibonacci',
		'@stdlib/math/iter/sequences/fibonacci'
	]
});

ns.push({
	'alias': 'iterNonNegativeEvenIntegersSeq',
	'path': '@stdlib/math/iter/sequences/nonnegative-even-integers',
	'value': require( '@stdlib/math/iter/sequences/nonnegative-even-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/even-integers',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/nonnegative-integers',
		'@stdlib/math/iter/sequences/nonpositive-even-integers',
		'@stdlib/math/iter/sequences/positive-even-integers'
	]
});

ns.push({
	'alias': 'iterNonNegativeIntegersSeq',
	'path': '@stdlib/math/iter/sequences/nonnegative-integers',
	'value': require( '@stdlib/math/iter/sequences/nonnegative-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/negative-integers',
		'@stdlib/math/iter/sequences/nonpositive-integers',
		'@stdlib/math/iter/sequences/positive-integers'
	]
});

ns.push({
	'alias': 'iterNonPositiveEvenIntegersSeq',
	'path': '@stdlib/math/iter/sequences/nonpositive-even-integers',
	'value': require( '@stdlib/math/iter/sequences/nonpositive-even-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/even-integers',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/nonnegative-even-integers',
		'@stdlib/math/iter/sequences/nonpositive-integers',
		'@stdlib/math/iter/sequences/negative-even-integers'
	]
});

ns.push({
	'alias': 'iterNonPositiveIntegersSeq',
	'path': '@stdlib/math/iter/sequences/nonpositive-integers',
	'value': require( '@stdlib/math/iter/sequences/nonpositive-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/negative-integers',
		'@stdlib/math/iter/sequences/nonnegative-integers',
		'@stdlib/math/iter/sequences/positive-integers'
	]
});

ns.push({
	'alias': 'iterNonSquaresSeq',
	'path': '@stdlib/math/iter/sequences/nonsquares',
	'value': require( '@stdlib/math/iter/sequences/nonsquares' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/cubes',
		'@stdlib/math/iter/sequences/squares'
	]
});

ns.push({
	'alias': 'iterNth',
	'path': '@stdlib/iter/nth',
	'value': require( '@stdlib/iter/nth' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/first',
		'@stdlib/iter/last'
	]
});

ns.push({
	'alias': 'iterOddIntegersSeq',
	'path': '@stdlib/math/iter/sequences/odd-integers',
	'value': require( '@stdlib/math/iter/sequences/odd-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/even-integers',
		'@stdlib/math/iter/sequences/integers'
	]
});

ns.push({
	'alias': 'iterPeriodicSinc',
	'path': '@stdlib/simulate/iter/periodic-sinc',
	'value': require( '@stdlib/simulate/iter/periodic-sinc' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/sine-wave'
	]
});

ns.push({
	'alias': 'iterPipeline',
	'path': '@stdlib/iter/pipeline',
	'value': require( '@stdlib/iter/pipeline' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/flow',
		'@stdlib/iter/pipeline-thunk'
	]
});

ns.push({
	'alias': 'iterPop',
	'path': '@stdlib/iter/pop',
	'value': require( '@stdlib/iter/pop' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/push',
		'@stdlib/iter/shift',
		'@stdlib/iter/slice'
	]
});

ns.push({
	'alias': 'iterPositiveEvenIntegersSeq',
	'path': '@stdlib/math/iter/sequences/positive-even-integers',
	'value': require( '@stdlib/math/iter/sequences/positive-even-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/even-integers',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/negative-even-integers',
		'@stdlib/math/iter/sequences/nonnegative-even-integers',
		'@stdlib/math/iter/sequences/positive-integers',
		'@stdlib/math/iter/sequences/positive-odd-integers'
	]
});

ns.push({
	'alias': 'iterPositiveIntegersSeq',
	'path': '@stdlib/math/iter/sequences/positive-integers',
	'value': require( '@stdlib/math/iter/sequences/positive-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/nonnegative-integers',
		'@stdlib/math/iter/sequences/nonpositive-integers',
		'@stdlib/math/iter/sequences/negative-integers'
	]
});

ns.push({
	'alias': 'iterPositiveOddIntegersSeq',
	'path': '@stdlib/math/iter/sequences/positive-odd-integers',
	'value': require( '@stdlib/math/iter/sequences/positive-odd-integers' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/odd-integers',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/negative-odd-integers',
		'@stdlib/math/iter/sequences/nonnegative-odd-integers',
		'@stdlib/math/iter/sequences/positive-even-integers',
		'@stdlib/math/iter/sequences/positive-integers'
	]
});

ns.push({
	'alias': 'iterPow',
	'path': '@stdlib/math/iter/special/pow',
	'value': require( '@stdlib/math/iter/special/pow' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow',
		'@stdlib/math/iter/special/exp',
		'@stdlib/math/iter/special/powm1',
		'@stdlib/math/iter/special/log'
	]
});

ns.push({
	'alias': 'iterPrimesSeq',
	'path': '@stdlib/math/iter/sequences/primes',
	'value': require( '@stdlib/math/iter/sequences/primes' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/composites',
		'@stdlib/math/iter/sequences/integers',
		'@stdlib/math/iter/sequences/positive-integers'
	]
});

ns.push({
	'alias': 'iterprod',
	'path': '@stdlib/stats/iter/prod',
	'value': require( '@stdlib/stats/iter/prod' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mprod',
		'@stdlib/stats/iter/sum',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'iterPulse',
	'path': '@stdlib/simulate/iter/pulse',
	'value': require( '@stdlib/simulate/iter/pulse' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/sawtooth-wave',
		'@stdlib/simulate/iter/sine-wave',
		'@stdlib/simulate/iter/square-wave',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterPush',
	'path': '@stdlib/iter/push',
	'value': require( '@stdlib/iter/push' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/concat',
		'@stdlib/iter/unshift'
	]
});

ns.push({
	'alias': 'iterRad2deg',
	'path': '@stdlib/math/iter/special/rad2deg',
	'value': require( '@stdlib/math/iter/special/rad2deg' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rad2deg',
		'@stdlib/math/iter/special/deg2rad'
	]
});

ns.push({
	'alias': 'iterRamp',
	'path': '@stdlib/math/iter/special/ramp',
	'value': require( '@stdlib/math/iter/special/ramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ramp',
		'@stdlib/math/iter/special/heaviside'
	]
});

ns.push({
	'alias': 'iterrange',
	'path': '@stdlib/stats/iter/range',
	'value': require( '@stdlib/stats/iter/range' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/max',
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/min',
		'@stdlib/stats/iter/mrange',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'iterReject',
	'path': '@stdlib/iter/reject',
	'value': require( '@stdlib/iter/reject' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/filter',
		'@stdlib/iter/map'
	]
});

ns.push({
	'alias': 'iterReplicate',
	'path': '@stdlib/iter/replicate',
	'value': require( '@stdlib/iter/replicate' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/interleave',
		'@stdlib/iter/intersperse',
		'@stdlib/iter/replicate-by',
		'@stdlib/iter/splice'
	]
});

ns.push({
	'alias': 'iterReplicateBy',
	'path': '@stdlib/iter/replicate-by',
	'value': require( '@stdlib/iter/replicate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/interleave',
		'@stdlib/iter/intersperse',
		'@stdlib/iter/replicate',
		'@stdlib/iter/splice'
	]
});

ns.push({
	'alias': 'iterRound',
	'path': '@stdlib/math/iter/special/round',
	'value': require( '@stdlib/math/iter/special/round' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/round',
		'@stdlib/math/iter/special/ceil',
		'@stdlib/math/iter/special/floor',
		'@stdlib/math/iter/special/roundn',
		'@stdlib/math/iter/special/trunc'
	]
});

ns.push({
	'alias': 'iterRound2',
	'path': '@stdlib/math/iter/special/round2',
	'value': require( '@stdlib/math/iter/special/round2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/round2',
		'@stdlib/math/iter/special/ceil2',
		'@stdlib/math/iter/special/floor2',
		'@stdlib/math/iter/special/round',
		'@stdlib/math/iter/special/round10',
		'@stdlib/math/iter/special/trunc2'
	]
});

ns.push({
	'alias': 'iterRound10',
	'path': '@stdlib/math/iter/special/round10',
	'value': require( '@stdlib/math/iter/special/round10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/round10',
		'@stdlib/math/iter/special/ceil10',
		'@stdlib/math/iter/special/floor10',
		'@stdlib/math/iter/special/round',
		'@stdlib/math/iter/special/round2',
		'@stdlib/math/iter/special/trunc10'
	]
});

ns.push({
	'alias': 'iterRsqrt',
	'path': '@stdlib/math/iter/special/rsqrt',
	'value': require( '@stdlib/math/iter/special/rsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rsqrt',
		'@stdlib/math/iter/special/sqrt'
	]
});

ns.push({
	'alias': 'iterSawtoothWave',
	'path': '@stdlib/simulate/iter/sawtooth-wave',
	'value': require( '@stdlib/simulate/iter/sawtooth-wave' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/sine-wave',
		'@stdlib/simulate/iter/square-wave',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterShift',
	'path': '@stdlib/iter/shift',
	'value': require( '@stdlib/iter/shift' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/pop',
		'@stdlib/iter/slice',
		'@stdlib/iter/unshift'
	]
});

ns.push({
	'alias': 'iterSignum',
	'path': '@stdlib/math/iter/special/signum',
	'value': require( '@stdlib/math/iter/special/signum' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/signum'
	]
});

ns.push({
	'alias': 'iterSin',
	'path': '@stdlib/math/iter/special/sin',
	'value': require( '@stdlib/math/iter/special/sin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sin',
		'@stdlib/math/iter/special/cos',
		'@stdlib/math/iter/special/sinpi',
		'@stdlib/math/iter/special/tan'
	]
});

ns.push({
	'alias': 'iterSinc',
	'path': '@stdlib/math/iter/special/sinc',
	'value': require( '@stdlib/math/iter/special/sinc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sinc',
		'@stdlib/math/iter/special/sin'
	]
});

ns.push({
	'alias': 'iterSineWave',
	'path': '@stdlib/simulate/iter/sine-wave',
	'value': require( '@stdlib/simulate/iter/sine-wave' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/cosine-wave',
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/sawtooth-wave',
		'@stdlib/simulate/iter/square-wave',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterSinh',
	'path': '@stdlib/math/iter/special/sinh',
	'value': require( '@stdlib/math/iter/special/sinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sinh',
		'@stdlib/math/iter/special/cosh',
		'@stdlib/math/iter/special/tanh'
	]
});

ns.push({
	'alias': 'iterSinpi',
	'path': '@stdlib/math/iter/special/sinpi',
	'value': require( '@stdlib/math/iter/special/sinpi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sinpi',
		'@stdlib/math/iter/special/sin'
	]
});

ns.push({
	'alias': 'iterSlice',
	'path': '@stdlib/iter/slice',
	'value': require( '@stdlib/iter/slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/first',
		'@stdlib/iter/head',
		'@stdlib/iter/tail'
	]
});

ns.push({
	'alias': 'iterSome',
	'path': '@stdlib/iter/some',
	'value': require( '@stdlib/iter/some' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any',
		'@stdlib/iter/every',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none',
		'@stdlib/iter/some-by'
	]
});

ns.push({
	'alias': 'iterSomeBy',
	'path': '@stdlib/iter/some-by',
	'value': require( '@stdlib/iter/some-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/any-by',
		'@stdlib/iter/every-by',
		'@stdlib/iter/for-each',
		'@stdlib/iter/none-by',
		'@stdlib/iter/some'
	]
});

ns.push({
	'alias': 'iterSpence',
	'path': '@stdlib/math/iter/special/spence',
	'value': require( '@stdlib/math/iter/special/spence' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/spence'
	]
});

ns.push({
	'alias': 'iterSqrt',
	'path': '@stdlib/math/iter/special/sqrt',
	'value': require( '@stdlib/math/iter/special/sqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt',
		'@stdlib/math/iter/special/cbrt',
		'@stdlib/math/iter/special/rsqrt'
	]
});

ns.push({
	'alias': 'iterSqrt1pm1',
	'path': '@stdlib/math/iter/special/sqrt1pm1',
	'value': require( '@stdlib/math/iter/special/sqrt1pm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt1pm1',
		'@stdlib/math/iter/special/sqrt'
	]
});

ns.push({
	'alias': 'iterSquaredTriangularSeq',
	'path': '@stdlib/math/iter/sequences/squared-triangular',
	'value': require( '@stdlib/math/iter/sequences/squared-triangular' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/triangular'
	]
});

ns.push({
	'alias': 'iterSquaresSeq',
	'path': '@stdlib/math/iter/sequences/squares',
	'value': require( '@stdlib/math/iter/sequences/squares' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/cubes',
		'@stdlib/math/iter/sequences/nonsquares'
	]
});

ns.push({
	'alias': 'iterSquareWave',
	'path': '@stdlib/simulate/iter/square-wave',
	'value': require( '@stdlib/simulate/iter/square-wave' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/sawtooth-wave',
		'@stdlib/simulate/iter/sine-wave',
		'@stdlib/simulate/iter/triangle-wave'
	]
});

ns.push({
	'alias': 'iterstdev',
	'path': '@stdlib/stats/iter/stdev',
	'value': require( '@stdlib/stats/iter/stdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/kurtosis',
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/mstdev',
		'@stdlib/stats/iter/skewness',
		'@stdlib/stats/iter/summary',
		'@stdlib/stats/iter/variance'
	]
});

ns.push({
	'alias': 'iterStep',
	'path': '@stdlib/iter/step',
	'value': require( '@stdlib/iter/step' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/iter/datespace',
		'@stdlib/iter/geomspace',
		'@stdlib/iter/incrspace',
		'@stdlib/iter/linspace',
		'@stdlib/iter/logspace',
		'@stdlib/iter/unitspace'
	]
});

ns.push({
	'alias': 'iterStrided',
	'path': '@stdlib/iter/strided',
	'value': require( '@stdlib/iter/strided' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/advance',
		'@stdlib/iter/nth',
		'@stdlib/iter/strided-by'
	]
});

ns.push({
	'alias': 'iterStridedBy',
	'path': '@stdlib/iter/strided-by',
	'value': require( '@stdlib/iter/strided-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/advance',
		'@stdlib/iter/nth',
		'@stdlib/iter/strided'
	]
});

ns.push({
	'alias': 'iterSubtract',
	'path': '@stdlib/math/iter/ops/subtract',
	'value': require( '@stdlib/math/iter/ops/subtract' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/ops/add',
		'@stdlib/math/iter/ops/divide',
		'@stdlib/math/iter/ops/multiply'
	]
});

ns.push({
	'alias': 'itersum',
	'path': '@stdlib/stats/iter/sum',
	'value': require( '@stdlib/stats/iter/sum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/msum',
		'@stdlib/stats/iter/prod',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'itersumabs',
	'path': '@stdlib/stats/iter/sumabs',
	'value': require( '@stdlib/stats/iter/sumabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/meanabs',
		'@stdlib/stats/iter/msumabs',
		'@stdlib/stats/iter/sum'
	]
});

ns.push({
	'alias': 'itersumabs2',
	'path': '@stdlib/stats/iter/sumabs2',
	'value': require( '@stdlib/stats/iter/sumabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/meanabs2',
		'@stdlib/stats/iter/msumabs2',
		'@stdlib/stats/iter/sumabs'
	]
});

ns.push({
	'alias': 'iterTan',
	'path': '@stdlib/math/iter/special/tan',
	'value': require( '@stdlib/math/iter/special/tan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/tan',
		'@stdlib/math/iter/special/cos',
		'@stdlib/math/iter/special/sin'
	]
});

ns.push({
	'alias': 'iterTanh',
	'path': '@stdlib/math/iter/special/tanh',
	'value': require( '@stdlib/math/iter/special/tanh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/tanh',
		'@stdlib/math/iter/special/cosh',
		'@stdlib/math/iter/special/sinh',
		'@stdlib/math/iter/special/tan'
	]
});

ns.push({
	'alias': 'iterThunk',
	'path': '@stdlib/iter/pipeline-thunk',
	'value': require( '@stdlib/iter/pipeline-thunk' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/pipeline'
	]
});

ns.push({
	'alias': 'iterTriangleWave',
	'path': '@stdlib/simulate/iter/triangle-wave',
	'value': require( '@stdlib/simulate/iter/triangle-wave' ),
	'type': 'Function',
	'related': [
		'@stdlib/simulate/iter/pulse',
		'@stdlib/simulate/iter/sawtooth-wave',
		'@stdlib/simulate/iter/sine-wave',
		'@stdlib/simulate/iter/square-wave'
	]
});

ns.push({
	'alias': 'iterTriangularSeq',
	'path': '@stdlib/math/iter/sequences/triangular',
	'value': require( '@stdlib/math/iter/sequences/triangular' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/iter/sequences/squared-triangular'
	]
});

ns.push({
	'alias': 'iterTrigamma',
	'path': '@stdlib/math/iter/special/trigamma',
	'value': require( '@stdlib/math/iter/special/trigamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/trigamma',
		'@stdlib/math/iter/special/digamma',
		'@stdlib/math/iter/special/gamma'
	]
});

ns.push({
	'alias': 'iterTrunc',
	'path': '@stdlib/math/iter/special/trunc',
	'value': require( '@stdlib/math/iter/special/trunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/trunc',
		'@stdlib/math/iter/special/ceil',
		'@stdlib/math/iter/special/floor',
		'@stdlib/math/iter/special/round'
	]
});

ns.push({
	'alias': 'iterTrunc2',
	'path': '@stdlib/math/iter/special/trunc2',
	'value': require( '@stdlib/math/iter/special/trunc2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/trunc2',
		'@stdlib/math/iter/special/ceil2',
		'@stdlib/math/iter/special/floor2',
		'@stdlib/math/iter/special/round2',
		'@stdlib/math/iter/special/trunc'
	]
});

ns.push({
	'alias': 'iterTrunc10',
	'path': '@stdlib/math/iter/special/trunc10',
	'value': require( '@stdlib/math/iter/special/trunc10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/trunc10',
		'@stdlib/math/iter/special/ceil10',
		'@stdlib/math/iter/special/floor10',
		'@stdlib/math/iter/special/round10',
		'@stdlib/math/iter/special/trunc'
	]
});

ns.push({
	'alias': 'iterUnion',
	'path': '@stdlib/iter/union',
	'value': require( '@stdlib/iter/union' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/intersection',
		'@stdlib/iter/unique',
		'@stdlib/iter/union-by',
		'@stdlib/iter/union-by-hash'
	]
});

ns.push({
	'alias': 'iterUnique',
	'path': '@stdlib/iter/unique',
	'value': require( '@stdlib/iter/unique' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/unique-by',
		'@stdlib/iter/unique-by-hash'
	]
});

ns.push({
	'alias': 'iterUniqueBy',
	'path': '@stdlib/iter/unique-by',
	'value': require( '@stdlib/iter/unique-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/unique',
		'@stdlib/iter/unique-by-hash'
	]
});

ns.push({
	'alias': 'iterUniqueByHash',
	'path': '@stdlib/iter/unique-by-hash',
	'value': require( '@stdlib/iter/unique-by-hash' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/unique',
		'@stdlib/iter/unique-by'
	]
});

ns.push({
	'alias': 'iterUnitspace',
	'path': '@stdlib/iter/unitspace',
	'value': require( '@stdlib/iter/unitspace' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/from-iterator',
		'@stdlib/iter/incrspace',
		'@stdlib/iter/linspace',
		'@stdlib/iter/step'
	]
});

ns.push({
	'alias': 'iterUnshift',
	'path': '@stdlib/iter/unshift',
	'value': require( '@stdlib/iter/unshift' ),
	'type': 'Function',
	'related': [
		'@stdlib/iter/concat',
		'@stdlib/iter/push',
		'@stdlib/iter/shift'
	]
});

ns.push({
	'alias': 'itervariance',
	'path': '@stdlib/stats/iter/variance',
	'value': require( '@stdlib/stats/iter/variance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/iter/kurtosis',
		'@stdlib/stats/iter/mean',
		'@stdlib/stats/iter/mvariance',
		'@stdlib/stats/iter/skewness',
		'@stdlib/stats/iter/stdev',
		'@stdlib/stats/iter/summary'
	]
});

ns.push({
	'alias': 'iterVercos',
	'path': '@stdlib/math/iter/special/vercos',
	'value': require( '@stdlib/math/iter/special/vercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/vercos',
		'@stdlib/math/iter/special/cos',
		'@stdlib/math/iter/special/sin',
		'@stdlib/math/iter/special/versin'
	]
});

ns.push({
	'alias': 'iterVersin',
	'path': '@stdlib/math/iter/special/versin',
	'value': require( '@stdlib/math/iter/special/versin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/versin',
		'@stdlib/math/iter/special/cos',
		'@stdlib/math/iter/special/sin',
		'@stdlib/math/iter/special/vercos'
	]
});

ns.push({
	'alias': 'iterZeta',
	'path': '@stdlib/math/iter/special/riemann-zeta',
	'value': require( '@stdlib/math/iter/special/riemann-zeta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/riemann-zeta'
	]
});


// EXPORTS //

module.exports = ns;
