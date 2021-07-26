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

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'bartlettTest',
	'path': '@stdlib/stats/bartlett-test',
	'value': require( '@stdlib/stats/bartlett-test' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/vartest',
		'@stdlib/stats/levene-test'
	]
});

ns.push({
	'alias': 'base.abs',
	'path': '@stdlib/math/base/special/abs',
	'value': require( '@stdlib/math/base/special/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs2',
		'@stdlib/math/base/special/absf',
		'@stdlib/math/base/special/labs'
	]
});

ns.push({
	'alias': 'base.abs2',
	'path': '@stdlib/math/base/special/abs2',
	'value': require( '@stdlib/math/base/special/abs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs',
		'@stdlib/math/base/special/abs2f'
	]
});

ns.push({
	'alias': 'base.abs2f',
	'path': '@stdlib/math/base/special/abs2f',
	'value': require( '@stdlib/math/base/special/abs2f' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs2',
		'@stdlib/math/base/special/absf'
	]
});

ns.push({
	'alias': 'base.absdiff',
	'path': '@stdlib/math/base/utils/absolute-difference',
	'value': require( '@stdlib/math/base/utils/absolute-difference' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/utils/relative-difference',
		'@stdlib/math/base/utils/float64-epsilon-difference'
	]
});

ns.push({
	'alias': 'base.absf',
	'path': '@stdlib/math/base/special/absf',
	'value': require( '@stdlib/math/base/special/absf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs',
		'@stdlib/math/base/special/abs2f',
		'@stdlib/math/base/special/labs'
	]
});

ns.push({
	'alias': 'base.acos',
	'path': '@stdlib/math/base/special/acos',
	'value': require( '@stdlib/math/base/special/acos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.acosh',
	'path': '@stdlib/math/base/special/acosh',
	'value': require( '@stdlib/math/base/special/acosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.acot',
	'path': '@stdlib/math/base/special/acot',
	'value': require( '@stdlib/math/base/special/acot' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoth',
		'@stdlib/math/base/special/atan',
		'@stdlib/math/base/special/cot'
	]
});

ns.push({
	'alias': 'base.acoth',
	'path': '@stdlib/math/base/special/acoth',
	'value': require( '@stdlib/math/base/special/acoth' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/acot',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.acovercos',
	'path': '@stdlib/math/base/special/acovercos',
	'value': require( '@stdlib/math/base/special/acovercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acoversin',
		'@stdlib/math/base/special/avercos',
		'@stdlib/math/base/special/covercos',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.acoversin',
	'path': '@stdlib/math/base/special/acoversin',
	'value': require( '@stdlib/math/base/special/acoversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acovercos',
		'@stdlib/math/base/special/aversin',
		'@stdlib/math/base/special/coversin',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.ahavercos',
	'path': '@stdlib/math/base/special/ahavercos',
	'value': require( '@stdlib/math/base/special/ahavercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ahaversin',
		'@stdlib/math/base/special/havercos',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.ahaversin',
	'path': '@stdlib/math/base/special/ahaversin',
	'value': require( '@stdlib/math/base/special/ahaversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ahavercos',
		'@stdlib/math/base/special/haversin',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.asin',
	'path': '@stdlib/math/base/special/asin',
	'value': require( '@stdlib/math/base/special/asin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.asinh',
	'path': '@stdlib/math/base/special/asinh',
	'value': require( '@stdlib/math/base/special/asinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.atan',
	'path': '@stdlib/math/base/special/atan',
	'value': require( '@stdlib/math/base/special/atan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acos',
		'@stdlib/math/base/special/asin',
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'base.atan2',
	'path': '@stdlib/math/base/special/atan2',
	'value': require( '@stdlib/math/base/special/atan2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.atanh',
	'path': '@stdlib/math/base/special/atanh',
	'value': require( '@stdlib/math/base/special/atanh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh',
		'@stdlib/math/base/special/asinh',
		'@stdlib/math/base/special/atan'
	]
});

ns.push({
	'alias': 'base.avercos',
	'path': '@stdlib/math/base/special/avercos',
	'value': require( '@stdlib/math/base/special/avercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/aversin',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.aversin',
	'path': '@stdlib/math/base/special/aversin',
	'value': require( '@stdlib/math/base/special/aversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/avercos',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.bernoulli',
	'path': '@stdlib/math/base/special/bernoulli',
	'value': require( '@stdlib/math/base/special/bernoulli' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.besselj0',
	'path': '@stdlib/math/base/special/besselj0',
	'value': require( '@stdlib/math/base/special/besselj0' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/besselj1',
		'@stdlib/math/base/special/bessely0',
		'@stdlib/math/base/special/bessely1'
	]
});

ns.push({
	'alias': 'base.besselj1',
	'path': '@stdlib/math/base/special/besselj1',
	'value': require( '@stdlib/math/base/special/besselj1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/besselj0',
		'@stdlib/math/base/special/bessely0',
		'@stdlib/math/base/special/bessely1'
	]
});

ns.push({
	'alias': 'base.bessely0',
	'path': '@stdlib/math/base/special/bessely0',
	'value': require( '@stdlib/math/base/special/bessely0' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/besselj0',
		'@stdlib/math/base/special/besselj1',
		'@stdlib/math/base/special/bessely1'
	]
});

ns.push({
	'alias': 'base.bessely1',
	'path': '@stdlib/math/base/special/bessely1',
	'value': require( '@stdlib/math/base/special/bessely1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/besselj0',
		'@stdlib/math/base/special/besselj1',
		'@stdlib/math/base/special/bessely0'
	]
});

ns.push({
	'alias': 'base.beta',
	'path': '@stdlib/math/base/special/beta',
	'value': require( '@stdlib/math/base/special/beta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/betainc',
		'@stdlib/math/base/special/betaincinv',
		'@stdlib/math/base/special/betaln'
	]
});

ns.push({
	'alias': 'base.betainc',
	'path': '@stdlib/math/base/special/betainc',
	'value': require( '@stdlib/math/base/special/betainc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/beta',
		'@stdlib/math/base/special/betaincinv',
		'@stdlib/math/base/special/betaln'
	]
});

ns.push({
	'alias': 'base.betaincinv',
	'path': '@stdlib/math/base/special/betaincinv',
	'value': require( '@stdlib/math/base/special/betaincinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/beta',
		'@stdlib/math/base/special/betainc',
		'@stdlib/math/base/special/betaln'
	]
});

ns.push({
	'alias': 'base.betaln',
	'path': '@stdlib/math/base/special/betaln',
	'value': require( '@stdlib/math/base/special/betaln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/beta',
		'@stdlib/math/base/special/betainc',
		'@stdlib/math/base/special/betaincinv'
	]
});

ns.push({
	'alias': 'base.binet',
	'path': '@stdlib/math/base/special/binet',
	'value': require( '@stdlib/math/base/special/binet' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci',
		'@stdlib/math/base/special/negafibonacci'
	]
});

ns.push({
	'alias': 'base.binomcoef',
	'path': '@stdlib/math/base/special/binomcoef',
	'value': require( '@stdlib/math/base/special/binomcoef' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.binomcoefln',
	'path': '@stdlib/math/base/special/binomcoefln',
	'value': require( '@stdlib/math/base/special/binomcoefln' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.boxcox',
	'path': '@stdlib/math/base/special/boxcox',
	'value': require( '@stdlib/math/base/special/boxcox' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/boxcoxinv',
		'@stdlib/math/base/special/boxcox1p',
		'@stdlib/math/base/special/boxcox1pinv'
	]
});

ns.push({
	'alias': 'base.boxcox1p',
	'path': '@stdlib/math/base/special/boxcox1p',
	'value': require( '@stdlib/math/base/special/boxcox1p' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/boxcox',
		'@stdlib/math/base/special/boxcox1pinv',
		'@stdlib/math/base/special/boxcoxinv'
	]
});

ns.push({
	'alias': 'base.boxcox1pinv',
	'path': '@stdlib/math/base/special/boxcox1pinv',
	'value': require( '@stdlib/math/base/special/boxcox1pinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/boxcox',
		'@stdlib/math/base/special/boxcox1p',
		'@stdlib/math/base/special/boxcoxinv'
	]
});

ns.push({
	'alias': 'base.boxcoxinv',
	'path': '@stdlib/math/base/special/boxcoxinv',
	'value': require( '@stdlib/math/base/special/boxcoxinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/boxcox',
		'@stdlib/math/base/special/boxcox1p',
		'@stdlib/math/base/special/boxcox1pinv'
	]
});

ns.push({
	'alias': 'base.cabs',
	'path': '@stdlib/math/base/special/cabs',
	'value': require( '@stdlib/math/base/special/cabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs2',
		'@stdlib/math/base/special/abs'
	]
});

ns.push({
	'alias': 'base.cabs2',
	'path': '@stdlib/math/base/special/cabs2',
	'value': require( '@stdlib/math/base/special/cabs2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs',
		'@stdlib/math/base/special/abs2'
	]
});

ns.push({
	'alias': 'base.cadd',
	'path': '@stdlib/math/base/ops/cadd',
	'value': require( '@stdlib/math/base/ops/cadd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cdiv',
		'@stdlib/math/base/ops/cmul',
		'@stdlib/math/base/ops/csub'
	]
});

ns.push({
	'alias': 'base.cbrt',
	'path': '@stdlib/math/base/special/cbrt',
	'value': require( '@stdlib/math/base/special/cbrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow',
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.cbrtf',
	'path': '@stdlib/math/base/special/cbrtf',
	'value': require( '@stdlib/math/base/special/cbrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrt',
		'@stdlib/math/base/special/powf',
		'@stdlib/math/base/special/sqrtf'
	]
});

ns.push({
	'alias': 'base.cceil',
	'path': '@stdlib/math/base/special/cceil',
	'value': require( '@stdlib/math/base/special/cceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceiln',
		'@stdlib/math/base/special/cfloor',
		'@stdlib/math/base/special/cround'
	]
});

ns.push({
	'alias': 'base.cceiln',
	'path': '@stdlib/math/base/special/cceiln',
	'value': require( '@stdlib/math/base/special/cceiln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceil',
		'@stdlib/math/base/special/cfloorn',
		'@stdlib/math/base/special/croundn'
	]
});

ns.push({
	'alias': 'base.ccis',
	'path': '@stdlib/math/base/special/ccis',
	'value': require( '@stdlib/math/base/special/ccis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.cdiv',
	'path': '@stdlib/math/base/ops/cdiv',
	'value': require( '@stdlib/math/base/ops/cdiv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cadd',
		'@stdlib/math/base/ops/cmul',
		'@stdlib/math/base/ops/csub'
	]
});

ns.push({
	'alias': 'base.ceil',
	'path': '@stdlib/math/base/special/ceil',
	'value': require( '@stdlib/math/base/special/ceil' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/round'
	]
});

ns.push({
	'alias': 'base.ceil2',
	'path': '@stdlib/math/base/special/ceil2',
	'value': require( '@stdlib/math/base/special/ceil2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/base/special/round2'
	]
});

ns.push({
	'alias': 'base.ceil10',
	'path': '@stdlib/math/base/special/ceil10',
	'value': require( '@stdlib/math/base/special/ceil10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/base/special/round10'
	]
});

ns.push({
	'alias': 'base.ceilb',
	'path': '@stdlib/math/base/special/ceilb',
	'value': require( '@stdlib/math/base/special/ceilb' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floorb',
		'@stdlib/math/base/special/roundb'
	]
});

ns.push({
	'alias': 'base.ceilf',
	'path': '@stdlib/math/base/special/ceilf',
	'value': require( '@stdlib/math/base/special/ceilf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/floorf',
		'@stdlib/math/base/special/roundf'
	]
});

ns.push({
	'alias': 'base.ceiln',
	'path': '@stdlib/math/base/special/ceiln',
	'value': require( '@stdlib/math/base/special/ceiln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/ceilb',
		'@stdlib/math/base/special/floorn',
		'@stdlib/math/base/special/roundn'
	]
});

ns.push({
	'alias': 'base.ceilsd',
	'path': '@stdlib/math/base/special/ceilsd',
	'value': require( '@stdlib/math/base/special/ceilsd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/floorsd',
		'@stdlib/math/base/special/roundsd',
		'@stdlib/math/base/special/truncsd'
	]
});

ns.push({
	'alias': 'base.cexp',
	'path': '@stdlib/math/base/special/cexp',
	'value': require( '@stdlib/math/base/special/cexp' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.cflipsign',
	'path': '@stdlib/math/base/special/cflipsign',
	'value': require( '@stdlib/math/base/special/cflipsign' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cneg',
		'@stdlib/math/base/special/csignum'
	]
});

ns.push({
	'alias': 'base.cfloor',
	'path': '@stdlib/math/base/special/cfloor',
	'value': require( '@stdlib/math/base/special/cfloor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceil',
		'@stdlib/math/base/special/cfloorn',
		'@stdlib/math/base/special/cround'
	]
});

ns.push({
	'alias': 'base.cfloorn',
	'path': '@stdlib/math/base/special/cfloorn',
	'value': require( '@stdlib/math/base/special/cfloorn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceiln',
		'@stdlib/math/base/special/cfloor',
		'@stdlib/math/base/special/croundn'
	]
});

ns.push({
	'alias': 'base.cinv',
	'path': '@stdlib/math/base/special/cinv',
	'value': require( '@stdlib/math/base/special/cinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cdiv'
	]
});

ns.push({
	'alias': 'base.clamp',
	'path': '@stdlib/math/base/special/clamp',
	'value': require( '@stdlib/math/base/special/clamp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/clampf',
		'@stdlib/math/base/special/wrap'
	]
});

ns.push({
	'alias': 'base.clampf',
	'path': '@stdlib/math/base/special/clampf',
	'value': require( '@stdlib/math/base/special/clampf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/clamp',
		'@stdlib/math/base/special/wrapf'
	]
});

ns.push({
	'alias': 'base.cmul',
	'path': '@stdlib/math/base/ops/cmul',
	'value': require( '@stdlib/math/base/ops/cmul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cadd',
		'@stdlib/math/base/ops/cdiv',
		'@stdlib/math/base/ops/csub'
	]
});

ns.push({
	'alias': 'base.cneg',
	'path': '@stdlib/math/base/ops/cneg',
	'value': require( '@stdlib/math/base/ops/cneg' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs'
	]
});

ns.push({
	'alias': 'base.continuedFraction',
	'path': '@stdlib/math/base/tools/continued-fraction',
	'value': require( '@stdlib/math/base/tools/continued-fraction' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.copysign',
	'path': '@stdlib/math/base/special/copysign',
	'value': require( '@stdlib/math/base/special/copysign' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/flipsign'
	]
});

ns.push({
	'alias': 'base.cos',
	'path': '@stdlib/math/base/special/cos',
	'value': require( '@stdlib/math/base/special/cos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cospi',
		'@stdlib/math/base/special/cosm1',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.cosh',
	'path': '@stdlib/math/base/special/cosh',
	'value': require( '@stdlib/math/base/special/cosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sinh',
		'@stdlib/math/base/special/tanh'
	]
});

ns.push({
	'alias': 'base.cosm1',
	'path': '@stdlib/math/base/special/cosm1',
	'value': require( '@stdlib/math/base/special/cosm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos'
	]
});

ns.push({
	'alias': 'base.cospi',
	'path': '@stdlib/math/base/special/cospi',
	'value': require( '@stdlib/math/base/special/cospi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos'
	]
});

ns.push({
	'alias': 'base.covercos',
	'path': '@stdlib/math/base/special/covercos',
	'value': require( '@stdlib/math/base/special/covercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/coversin',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.coversin',
	'path': '@stdlib/math/base/special/coversin',
	'value': require( '@stdlib/math/base/special/coversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/covercos',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.cphase',
	'path': '@stdlib/math/base/special/cphase',
	'value': require( '@stdlib/math/base/special/cphase' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs'
	]
});

ns.push({
	'alias': 'base.cpolar',
	'path': '@stdlib/math/base/special/cpolar',
	'value': require( '@stdlib/math/base/special/cpolar' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cabs',
		'@stdlib/math/base/special/cphase'
	]
});

ns.push({
	'alias': 'base.cround',
	'path': '@stdlib/math/base/special/cround',
	'value': require( '@stdlib/math/base/special/cround' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceil',
		'@stdlib/math/base/special/cfloor',
		'@stdlib/math/base/special/croundn'
	]
});

ns.push({
	'alias': 'base.croundn',
	'path': '@stdlib/math/base/special/croundn',
	'value': require( '@stdlib/math/base/special/croundn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cceiln',
		'@stdlib/math/base/special/cfloorn',
		'@stdlib/math/base/special/cround'
	]
});

ns.push({
	'alias': 'base.csignum',
	'path': '@stdlib/math/base/special/csignum',
	'value': require( '@stdlib/math/base/special/csignum' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/signum'
	]
});

ns.push({
	'alias': 'base.csub',
	'path': '@stdlib/math/base/ops/csub',
	'value': require( '@stdlib/math/base/ops/csub' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/cadd',
		'@stdlib/math/base/ops/cdiv',
		'@stdlib/math/base/ops/cmul'
	]
});

ns.push({
	'alias': 'base.deg2rad',
	'path': '@stdlib/math/base/special/deg2rad',
	'value': require( '@stdlib/math/base/special/deg2rad' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rad2deg'
	]
});

ns.push({
	'alias': 'base.deg2radf',
	'path': '@stdlib/math/base/special/deg2radf',
	'value': require( '@stdlib/math/base/special/deg2radf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/deg2rad',
		'@stdlib/math/base/special/rad2degf'
	]
});

ns.push({
	'alias': 'base.digamma',
	'path': '@stdlib/math/base/special/digamma',
	'value': require( '@stdlib/math/base/special/digamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/trigamma'
	]
});

ns.push({
	'alias': 'base.diracDelta',
	'path': '@stdlib/math/base/special/dirac-delta',
	'value': require( '@stdlib/math/base/special/dirac-delta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/kronecker-delta'
	]
});

ns.push({
	'alias': 'base.dists.arcsine.Arcsine',
	'path': '@stdlib/stats/base/dists/arcsine/ctor',
	'value': require( '@stdlib/stats/base/dists/arcsine/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.cdf',
	'path': '@stdlib/stats/base/dists/arcsine/cdf',
	'value': require( '@stdlib/stats/base/dists/arcsine/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.entropy',
	'path': '@stdlib/stats/base/dists/arcsine/entropy',
	'value': require( '@stdlib/stats/base/dists/arcsine/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.kurtosis',
	'path': '@stdlib/stats/base/dists/arcsine/kurtosis',
	'value': require( '@stdlib/stats/base/dists/arcsine/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.logcdf',
	'path': '@stdlib/stats/base/dists/arcsine/logcdf',
	'value': require( '@stdlib/stats/base/dists/arcsine/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.logpdf',
	'path': '@stdlib/stats/base/dists/arcsine/logpdf',
	'value': require( '@stdlib/stats/base/dists/arcsine/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.mean',
	'path': '@stdlib/stats/base/dists/arcsine/mean',
	'value': require( '@stdlib/stats/base/dists/arcsine/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.median',
	'path': '@stdlib/stats/base/dists/arcsine/median',
	'value': require( '@stdlib/stats/base/dists/arcsine/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.mode',
	'path': '@stdlib/stats/base/dists/arcsine/mode',
	'value': require( '@stdlib/stats/base/dists/arcsine/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.pdf',
	'path': '@stdlib/stats/base/dists/arcsine/pdf',
	'value': require( '@stdlib/stats/base/dists/arcsine/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.quantile',
	'path': '@stdlib/stats/base/dists/arcsine/quantile',
	'value': require( '@stdlib/stats/base/dists/arcsine/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.skewness',
	'path': '@stdlib/stats/base/dists/arcsine/skewness',
	'value': require( '@stdlib/stats/base/dists/arcsine/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.stdev',
	'path': '@stdlib/stats/base/dists/arcsine/stdev',
	'value': require( '@stdlib/stats/base/dists/arcsine/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.arcsine.variance',
	'path': '@stdlib/stats/base/dists/arcsine/variance',
	'value': require( '@stdlib/stats/base/dists/arcsine/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.Bernoulli',
	'path': '@stdlib/stats/base/dists/bernoulli/ctor',
	'value': require( '@stdlib/stats/base/dists/bernoulli/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.cdf',
	'path': '@stdlib/stats/base/dists/bernoulli/cdf',
	'value': require( '@stdlib/stats/base/dists/bernoulli/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.entropy',
	'path': '@stdlib/stats/base/dists/bernoulli/entropy',
	'value': require( '@stdlib/stats/base/dists/bernoulli/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.kurtosis',
	'path': '@stdlib/stats/base/dists/bernoulli/kurtosis',
	'value': require( '@stdlib/stats/base/dists/bernoulli/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.mean',
	'path': '@stdlib/stats/base/dists/bernoulli/mean',
	'value': require( '@stdlib/stats/base/dists/bernoulli/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.median',
	'path': '@stdlib/stats/base/dists/bernoulli/median',
	'value': require( '@stdlib/stats/base/dists/bernoulli/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.mgf',
	'path': '@stdlib/stats/base/dists/bernoulli/mgf',
	'value': require( '@stdlib/stats/base/dists/bernoulli/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.mode',
	'path': '@stdlib/stats/base/dists/bernoulli/mode',
	'value': require( '@stdlib/stats/base/dists/bernoulli/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.pmf',
	'path': '@stdlib/stats/base/dists/bernoulli/pmf',
	'value': require( '@stdlib/stats/base/dists/bernoulli/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.quantile',
	'path': '@stdlib/stats/base/dists/bernoulli/quantile',
	'value': require( '@stdlib/stats/base/dists/bernoulli/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.skewness',
	'path': '@stdlib/stats/base/dists/bernoulli/skewness',
	'value': require( '@stdlib/stats/base/dists/bernoulli/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.stdev',
	'path': '@stdlib/stats/base/dists/bernoulli/stdev',
	'value': require( '@stdlib/stats/base/dists/bernoulli/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.bernoulli.variance',
	'path': '@stdlib/stats/base/dists/bernoulli/variance',
	'value': require( '@stdlib/stats/base/dists/bernoulli/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.Beta',
	'path': '@stdlib/stats/base/dists/beta/ctor',
	'value': require( '@stdlib/stats/base/dists/beta/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.cdf',
	'path': '@stdlib/stats/base/dists/beta/cdf',
	'value': require( '@stdlib/stats/base/dists/beta/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.entropy',
	'path': '@stdlib/stats/base/dists/beta/entropy',
	'value': require( '@stdlib/stats/base/dists/beta/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.kurtosis',
	'path': '@stdlib/stats/base/dists/beta/kurtosis',
	'value': require( '@stdlib/stats/base/dists/beta/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.logcdf',
	'path': '@stdlib/stats/base/dists/beta/logcdf',
	'value': require( '@stdlib/stats/base/dists/beta/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.logpdf',
	'path': '@stdlib/stats/base/dists/beta/logpdf',
	'value': require( '@stdlib/stats/base/dists/beta/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.mean',
	'path': '@stdlib/stats/base/dists/beta/mean',
	'value': require( '@stdlib/stats/base/dists/beta/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.median',
	'path': '@stdlib/stats/base/dists/beta/median',
	'value': require( '@stdlib/stats/base/dists/beta/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.mgf',
	'path': '@stdlib/stats/base/dists/beta/mgf',
	'value': require( '@stdlib/stats/base/dists/beta/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.mode',
	'path': '@stdlib/stats/base/dists/beta/mode',
	'value': require( '@stdlib/stats/base/dists/beta/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.pdf',
	'path': '@stdlib/stats/base/dists/beta/pdf',
	'value': require( '@stdlib/stats/base/dists/beta/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.quantile',
	'path': '@stdlib/stats/base/dists/beta/quantile',
	'value': require( '@stdlib/stats/base/dists/beta/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.skewness',
	'path': '@stdlib/stats/base/dists/beta/skewness',
	'value': require( '@stdlib/stats/base/dists/beta/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.stdev',
	'path': '@stdlib/stats/base/dists/beta/stdev',
	'value': require( '@stdlib/stats/base/dists/beta/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.beta.variance',
	'path': '@stdlib/stats/base/dists/beta/variance',
	'value': require( '@stdlib/stats/base/dists/beta/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.BetaPrime',
	'path': '@stdlib/stats/base/dists/betaprime/ctor',
	'value': require( '@stdlib/stats/base/dists/betaprime/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.cdf',
	'path': '@stdlib/stats/base/dists/betaprime/cdf',
	'value': require( '@stdlib/stats/base/dists/betaprime/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.kurtosis',
	'path': '@stdlib/stats/base/dists/betaprime/kurtosis',
	'value': require( '@stdlib/stats/base/dists/betaprime/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.logcdf',
	'path': '@stdlib/stats/base/dists/betaprime/logcdf',
	'value': require( '@stdlib/stats/base/dists/betaprime/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.logpdf',
	'path': '@stdlib/stats/base/dists/betaprime/logpdf',
	'value': require( '@stdlib/stats/base/dists/betaprime/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.mean',
	'path': '@stdlib/stats/base/dists/betaprime/mean',
	'value': require( '@stdlib/stats/base/dists/betaprime/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.mode',
	'path': '@stdlib/stats/base/dists/betaprime/mode',
	'value': require( '@stdlib/stats/base/dists/betaprime/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.pdf',
	'path': '@stdlib/stats/base/dists/betaprime/pdf',
	'value': require( '@stdlib/stats/base/dists/betaprime/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.quantile',
	'path': '@stdlib/stats/base/dists/betaprime/quantile',
	'value': require( '@stdlib/stats/base/dists/betaprime/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.skewness',
	'path': '@stdlib/stats/base/dists/betaprime/skewness',
	'value': require( '@stdlib/stats/base/dists/betaprime/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.stdev',
	'path': '@stdlib/stats/base/dists/betaprime/stdev',
	'value': require( '@stdlib/stats/base/dists/betaprime/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.betaprime.variance',
	'path': '@stdlib/stats/base/dists/betaprime/variance',
	'value': require( '@stdlib/stats/base/dists/betaprime/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.Binomial',
	'path': '@stdlib/stats/base/dists/binomial/ctor',
	'value': require( '@stdlib/stats/base/dists/binomial/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.cdf',
	'path': '@stdlib/stats/base/dists/binomial/cdf',
	'value': require( '@stdlib/stats/base/dists/binomial/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.entropy',
	'path': '@stdlib/stats/base/dists/binomial/entropy',
	'value': require( '@stdlib/stats/base/dists/binomial/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.kurtosis',
	'path': '@stdlib/stats/base/dists/binomial/kurtosis',
	'value': require( '@stdlib/stats/base/dists/binomial/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.logpmf',
	'path': '@stdlib/stats/base/dists/binomial/logpmf',
	'value': require( '@stdlib/stats/base/dists/binomial/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.mean',
	'path': '@stdlib/stats/base/dists/binomial/mean',
	'value': require( '@stdlib/stats/base/dists/binomial/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.median',
	'path': '@stdlib/stats/base/dists/binomial/median',
	'value': require( '@stdlib/stats/base/dists/binomial/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.mgf',
	'path': '@stdlib/stats/base/dists/binomial/mgf',
	'value': require( '@stdlib/stats/base/dists/binomial/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.mode',
	'path': '@stdlib/stats/base/dists/binomial/mode',
	'value': require( '@stdlib/stats/base/dists/binomial/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.pmf',
	'path': '@stdlib/stats/base/dists/binomial/pmf',
	'value': require( '@stdlib/stats/base/dists/binomial/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.quantile',
	'path': '@stdlib/stats/base/dists/binomial/quantile',
	'value': require( '@stdlib/stats/base/dists/binomial/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.skewness',
	'path': '@stdlib/stats/base/dists/binomial/skewness',
	'value': require( '@stdlib/stats/base/dists/binomial/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.stdev',
	'path': '@stdlib/stats/base/dists/binomial/stdev',
	'value': require( '@stdlib/stats/base/dists/binomial/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.binomial.variance',
	'path': '@stdlib/stats/base/dists/binomial/variance',
	'value': require( '@stdlib/stats/base/dists/binomial/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.Cauchy',
	'path': '@stdlib/stats/base/dists/cauchy/ctor',
	'value': require( '@stdlib/stats/base/dists/cauchy/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.cdf',
	'path': '@stdlib/stats/base/dists/cauchy/cdf',
	'value': require( '@stdlib/stats/base/dists/cauchy/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.entropy',
	'path': '@stdlib/stats/base/dists/cauchy/entropy',
	'value': require( '@stdlib/stats/base/dists/cauchy/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.logcdf',
	'path': '@stdlib/stats/base/dists/cauchy/logcdf',
	'value': require( '@stdlib/stats/base/dists/cauchy/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.logpdf',
	'path': '@stdlib/stats/base/dists/cauchy/logpdf',
	'value': require( '@stdlib/stats/base/dists/cauchy/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.median',
	'path': '@stdlib/stats/base/dists/cauchy/median',
	'value': require( '@stdlib/stats/base/dists/cauchy/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.mode',
	'path': '@stdlib/stats/base/dists/cauchy/mode',
	'value': require( '@stdlib/stats/base/dists/cauchy/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.pdf',
	'path': '@stdlib/stats/base/dists/cauchy/pdf',
	'value': require( '@stdlib/stats/base/dists/cauchy/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cauchy.quantile',
	'path': '@stdlib/stats/base/dists/cauchy/quantile',
	'value': require( '@stdlib/stats/base/dists/cauchy/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.cdf',
	'path': '@stdlib/stats/base/dists/chi/cdf',
	'value': require( '@stdlib/stats/base/dists/chi/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.Chi',
	'path': '@stdlib/stats/base/dists/chi/ctor',
	'value': require( '@stdlib/stats/base/dists/chi/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.entropy',
	'path': '@stdlib/stats/base/dists/chi/entropy',
	'value': require( '@stdlib/stats/base/dists/chi/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.kurtosis',
	'path': '@stdlib/stats/base/dists/chi/kurtosis',
	'value': require( '@stdlib/stats/base/dists/chi/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.logpdf',
	'path': '@stdlib/stats/base/dists/chi/logpdf',
	'value': require( '@stdlib/stats/base/dists/chi/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.mean',
	'path': '@stdlib/stats/base/dists/chi/mean',
	'value': require( '@stdlib/stats/base/dists/chi/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.mode',
	'path': '@stdlib/stats/base/dists/chi/mode',
	'value': require( '@stdlib/stats/base/dists/chi/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.pdf',
	'path': '@stdlib/stats/base/dists/chi/pdf',
	'value': require( '@stdlib/stats/base/dists/chi/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.quantile',
	'path': '@stdlib/stats/base/dists/chi/quantile',
	'value': require( '@stdlib/stats/base/dists/chi/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.skewness',
	'path': '@stdlib/stats/base/dists/chi/skewness',
	'value': require( '@stdlib/stats/base/dists/chi/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.stdev',
	'path': '@stdlib/stats/base/dists/chi/stdev',
	'value': require( '@stdlib/stats/base/dists/chi/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chi.variance',
	'path': '@stdlib/stats/base/dists/chi/variance',
	'value': require( '@stdlib/stats/base/dists/chi/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.cdf',
	'path': '@stdlib/stats/base/dists/chisquare/cdf',
	'value': require( '@stdlib/stats/base/dists/chisquare/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.ChiSquare',
	'path': '@stdlib/stats/base/dists/chisquare/ctor',
	'value': require( '@stdlib/stats/base/dists/chisquare/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.entropy',
	'path': '@stdlib/stats/base/dists/chisquare/entropy',
	'value': require( '@stdlib/stats/base/dists/chisquare/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.kurtosis',
	'path': '@stdlib/stats/base/dists/chisquare/kurtosis',
	'value': require( '@stdlib/stats/base/dists/chisquare/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.logpdf',
	'path': '@stdlib/stats/base/dists/chisquare/logpdf',
	'value': require( '@stdlib/stats/base/dists/chisquare/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.mean',
	'path': '@stdlib/stats/base/dists/chisquare/mean',
	'value': require( '@stdlib/stats/base/dists/chisquare/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.median',
	'path': '@stdlib/stats/base/dists/chisquare/median',
	'value': require( '@stdlib/stats/base/dists/chisquare/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.mgf',
	'path': '@stdlib/stats/base/dists/chisquare/mgf',
	'value': require( '@stdlib/stats/base/dists/chisquare/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.mode',
	'path': '@stdlib/stats/base/dists/chisquare/mode',
	'value': require( '@stdlib/stats/base/dists/chisquare/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.pdf',
	'path': '@stdlib/stats/base/dists/chisquare/pdf',
	'value': require( '@stdlib/stats/base/dists/chisquare/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.quantile',
	'path': '@stdlib/stats/base/dists/chisquare/quantile',
	'value': require( '@stdlib/stats/base/dists/chisquare/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.skewness',
	'path': '@stdlib/stats/base/dists/chisquare/skewness',
	'value': require( '@stdlib/stats/base/dists/chisquare/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.stdev',
	'path': '@stdlib/stats/base/dists/chisquare/stdev',
	'value': require( '@stdlib/stats/base/dists/chisquare/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.chisquare.variance',
	'path': '@stdlib/stats/base/dists/chisquare/variance',
	'value': require( '@stdlib/stats/base/dists/chisquare/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.cdf',
	'path': '@stdlib/stats/base/dists/cosine/cdf',
	'value': require( '@stdlib/stats/base/dists/cosine/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.Cosine',
	'path': '@stdlib/stats/base/dists/cosine/ctor',
	'value': require( '@stdlib/stats/base/dists/cosine/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.kurtosis',
	'path': '@stdlib/stats/base/dists/cosine/kurtosis',
	'value': require( '@stdlib/stats/base/dists/cosine/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.logcdf',
	'path': '@stdlib/stats/base/dists/cosine/logcdf',
	'value': require( '@stdlib/stats/base/dists/cosine/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.logpdf',
	'path': '@stdlib/stats/base/dists/cosine/logpdf',
	'value': require( '@stdlib/stats/base/dists/cosine/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.mean',
	'path': '@stdlib/stats/base/dists/cosine/mean',
	'value': require( '@stdlib/stats/base/dists/cosine/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.median',
	'path': '@stdlib/stats/base/dists/cosine/median',
	'value': require( '@stdlib/stats/base/dists/cosine/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.mgf',
	'path': '@stdlib/stats/base/dists/cosine/mgf',
	'value': require( '@stdlib/stats/base/dists/cosine/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.mode',
	'path': '@stdlib/stats/base/dists/cosine/mode',
	'value': require( '@stdlib/stats/base/dists/cosine/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.pdf',
	'path': '@stdlib/stats/base/dists/cosine/pdf',
	'value': require( '@stdlib/stats/base/dists/cosine/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.quantile',
	'path': '@stdlib/stats/base/dists/cosine/quantile',
	'value': require( '@stdlib/stats/base/dists/cosine/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.skewness',
	'path': '@stdlib/stats/base/dists/cosine/skewness',
	'value': require( '@stdlib/stats/base/dists/cosine/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.stdev',
	'path': '@stdlib/stats/base/dists/cosine/stdev',
	'value': require( '@stdlib/stats/base/dists/cosine/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.cosine.variance',
	'path': '@stdlib/stats/base/dists/cosine/variance',
	'value': require( '@stdlib/stats/base/dists/cosine/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.cdf',
	'path': '@stdlib/stats/base/dists/degenerate/cdf',
	'value': require( '@stdlib/stats/base/dists/degenerate/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.Degenerate',
	'path': '@stdlib/stats/base/dists/degenerate/ctor',
	'value': require( '@stdlib/stats/base/dists/degenerate/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.entropy',
	'path': '@stdlib/stats/base/dists/degenerate/entropy',
	'value': require( '@stdlib/stats/base/dists/degenerate/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.logcdf',
	'path': '@stdlib/stats/base/dists/degenerate/logcdf',
	'value': require( '@stdlib/stats/base/dists/degenerate/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.logpdf',
	'path': '@stdlib/stats/base/dists/degenerate/logpdf',
	'value': require( '@stdlib/stats/base/dists/degenerate/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.logpmf',
	'path': '@stdlib/stats/base/dists/degenerate/logpmf',
	'value': require( '@stdlib/stats/base/dists/degenerate/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.mean',
	'path': '@stdlib/stats/base/dists/degenerate/mean',
	'value': require( '@stdlib/stats/base/dists/degenerate/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.median',
	'path': '@stdlib/stats/base/dists/degenerate/median',
	'value': require( '@stdlib/stats/base/dists/degenerate/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.mgf',
	'path': '@stdlib/stats/base/dists/degenerate/mgf',
	'value': require( '@stdlib/stats/base/dists/degenerate/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.mode',
	'path': '@stdlib/stats/base/dists/degenerate/mode',
	'value': require( '@stdlib/stats/base/dists/degenerate/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.pdf',
	'path': '@stdlib/stats/base/dists/degenerate/pdf',
	'value': require( '@stdlib/stats/base/dists/degenerate/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.pmf',
	'path': '@stdlib/stats/base/dists/degenerate/pmf',
	'value': require( '@stdlib/stats/base/dists/degenerate/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.quantile',
	'path': '@stdlib/stats/base/dists/degenerate/quantile',
	'value': require( '@stdlib/stats/base/dists/degenerate/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.stdev',
	'path': '@stdlib/stats/base/dists/degenerate/stdev',
	'value': require( '@stdlib/stats/base/dists/degenerate/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.degenerate.variance',
	'path': '@stdlib/stats/base/dists/degenerate/variance',
	'value': require( '@stdlib/stats/base/dists/degenerate/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.cdf',
	'path': '@stdlib/stats/base/dists/discrete-uniform/cdf',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.DiscreteUniform',
	'path': '@stdlib/stats/base/dists/discrete-uniform/ctor',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.kurtosis',
	'path': '@stdlib/stats/base/dists/discrete-uniform/kurtosis',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.logcdf',
	'path': '@stdlib/stats/base/dists/discrete-uniform/logcdf',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.logpmf',
	'path': '@stdlib/stats/base/dists/discrete-uniform/logpmf',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.mean',
	'path': '@stdlib/stats/base/dists/discrete-uniform/mean',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.median',
	'path': '@stdlib/stats/base/dists/discrete-uniform/median',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.mgf',
	'path': '@stdlib/stats/base/dists/discrete-uniform/mgf',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.pmf',
	'path': '@stdlib/stats/base/dists/discrete-uniform/pmf',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.quantile',
	'path': '@stdlib/stats/base/dists/discrete-uniform/quantile',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.skewness',
	'path': '@stdlib/stats/base/dists/discrete-uniform/skewness',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.stdev',
	'path': '@stdlib/stats/base/dists/discrete-uniform/stdev',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.discreteUniform.variance',
	'path': '@stdlib/stats/base/dists/discrete-uniform/variance',
	'value': require( '@stdlib/stats/base/dists/discrete-uniform/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.cdf',
	'path': '@stdlib/stats/base/dists/erlang/cdf',
	'value': require( '@stdlib/stats/base/dists/erlang/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.entropy',
	'path': '@stdlib/stats/base/dists/erlang/entropy',
	'value': require( '@stdlib/stats/base/dists/erlang/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.Erlang',
	'path': '@stdlib/stats/base/dists/erlang/ctor',
	'value': require( '@stdlib/stats/base/dists/erlang/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.kurtosis',
	'path': '@stdlib/stats/base/dists/erlang/kurtosis',
	'value': require( '@stdlib/stats/base/dists/erlang/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.logpdf',
	'path': '@stdlib/stats/base/dists/erlang/logpdf',
	'value': require( '@stdlib/stats/base/dists/erlang/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.mean',
	'path': '@stdlib/stats/base/dists/erlang/mean',
	'value': require( '@stdlib/stats/base/dists/erlang/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.mgf',
	'path': '@stdlib/stats/base/dists/erlang/mgf',
	'value': require( '@stdlib/stats/base/dists/erlang/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.mode',
	'path': '@stdlib/stats/base/dists/erlang/mode',
	'value': require( '@stdlib/stats/base/dists/erlang/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.pdf',
	'path': '@stdlib/stats/base/dists/erlang/pdf',
	'value': require( '@stdlib/stats/base/dists/erlang/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.quantile',
	'path': '@stdlib/stats/base/dists/erlang/quantile',
	'value': require( '@stdlib/stats/base/dists/erlang/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.skewness',
	'path': '@stdlib/stats/base/dists/erlang/skewness',
	'value': require( '@stdlib/stats/base/dists/erlang/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.stdev',
	'path': '@stdlib/stats/base/dists/erlang/stdev',
	'value': require( '@stdlib/stats/base/dists/erlang/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.erlang.variance',
	'path': '@stdlib/stats/base/dists/erlang/variance',
	'value': require( '@stdlib/stats/base/dists/erlang/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.cdf',
	'path': '@stdlib/stats/base/dists/exponential/cdf',
	'value': require( '@stdlib/stats/base/dists/exponential/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.entropy',
	'path': '@stdlib/stats/base/dists/exponential/entropy',
	'value': require( '@stdlib/stats/base/dists/exponential/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.Exponential',
	'path': '@stdlib/stats/base/dists/exponential/ctor',
	'value': require( '@stdlib/stats/base/dists/exponential/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.kurtosis',
	'path': '@stdlib/stats/base/dists/exponential/kurtosis',
	'value': require( '@stdlib/stats/base/dists/exponential/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.logcdf',
	'path': '@stdlib/stats/base/dists/exponential/logcdf',
	'value': require( '@stdlib/stats/base/dists/exponential/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.logpdf',
	'path': '@stdlib/stats/base/dists/exponential/logpdf',
	'value': require( '@stdlib/stats/base/dists/exponential/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.mean',
	'path': '@stdlib/stats/base/dists/exponential/mean',
	'value': require( '@stdlib/stats/base/dists/exponential/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.median',
	'path': '@stdlib/stats/base/dists/exponential/median',
	'value': require( '@stdlib/stats/base/dists/exponential/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.mgf',
	'path': '@stdlib/stats/base/dists/exponential/mgf',
	'value': require( '@stdlib/stats/base/dists/exponential/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.mode',
	'path': '@stdlib/stats/base/dists/exponential/mode',
	'value': require( '@stdlib/stats/base/dists/exponential/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.pdf',
	'path': '@stdlib/stats/base/dists/exponential/pdf',
	'value': require( '@stdlib/stats/base/dists/exponential/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.quantile',
	'path': '@stdlib/stats/base/dists/exponential/quantile',
	'value': require( '@stdlib/stats/base/dists/exponential/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.skewness',
	'path': '@stdlib/stats/base/dists/exponential/skewness',
	'value': require( '@stdlib/stats/base/dists/exponential/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.stdev',
	'path': '@stdlib/stats/base/dists/exponential/stdev',
	'value': require( '@stdlib/stats/base/dists/exponential/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.exponential.variance',
	'path': '@stdlib/stats/base/dists/exponential/variance',
	'value': require( '@stdlib/stats/base/dists/exponential/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.cdf',
	'path': '@stdlib/stats/base/dists/f/cdf',
	'value': require( '@stdlib/stats/base/dists/f/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.entropy',
	'path': '@stdlib/stats/base/dists/f/entropy',
	'value': require( '@stdlib/stats/base/dists/f/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.F',
	'path': '@stdlib/stats/base/dists/f/ctor',
	'value': require( '@stdlib/stats/base/dists/f/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.kurtosis',
	'path': '@stdlib/stats/base/dists/f/kurtosis',
	'value': require( '@stdlib/stats/base/dists/f/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.mean',
	'path': '@stdlib/stats/base/dists/f/mean',
	'value': require( '@stdlib/stats/base/dists/f/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.mode',
	'path': '@stdlib/stats/base/dists/f/mode',
	'value': require( '@stdlib/stats/base/dists/f/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.pdf',
	'path': '@stdlib/stats/base/dists/f/pdf',
	'value': require( '@stdlib/stats/base/dists/f/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.quantile',
	'path': '@stdlib/stats/base/dists/f/quantile',
	'value': require( '@stdlib/stats/base/dists/f/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.skewness',
	'path': '@stdlib/stats/base/dists/f/skewness',
	'value': require( '@stdlib/stats/base/dists/f/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.stdev',
	'path': '@stdlib/stats/base/dists/f/stdev',
	'value': require( '@stdlib/stats/base/dists/f/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.f.variance',
	'path': '@stdlib/stats/base/dists/f/variance',
	'value': require( '@stdlib/stats/base/dists/f/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.cdf',
	'path': '@stdlib/stats/base/dists/frechet/cdf',
	'value': require( '@stdlib/stats/base/dists/frechet/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.entropy',
	'path': '@stdlib/stats/base/dists/frechet/entropy',
	'value': require( '@stdlib/stats/base/dists/frechet/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.Frechet',
	'path': '@stdlib/stats/base/dists/frechet/ctor',
	'value': require( '@stdlib/stats/base/dists/frechet/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.kurtosis',
	'path': '@stdlib/stats/base/dists/frechet/kurtosis',
	'value': require( '@stdlib/stats/base/dists/frechet/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.logcdf',
	'path': '@stdlib/stats/base/dists/frechet/logcdf',
	'value': require( '@stdlib/stats/base/dists/frechet/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.logpdf',
	'path': '@stdlib/stats/base/dists/frechet/logpdf',
	'value': require( '@stdlib/stats/base/dists/frechet/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.mean',
	'path': '@stdlib/stats/base/dists/frechet/mean',
	'value': require( '@stdlib/stats/base/dists/frechet/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.median',
	'path': '@stdlib/stats/base/dists/frechet/median',
	'value': require( '@stdlib/stats/base/dists/frechet/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.mode',
	'path': '@stdlib/stats/base/dists/frechet/mode',
	'value': require( '@stdlib/stats/base/dists/frechet/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.pdf',
	'path': '@stdlib/stats/base/dists/frechet/pdf',
	'value': require( '@stdlib/stats/base/dists/frechet/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.quantile',
	'path': '@stdlib/stats/base/dists/frechet/quantile',
	'value': require( '@stdlib/stats/base/dists/frechet/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.skewness',
	'path': '@stdlib/stats/base/dists/frechet/skewness',
	'value': require( '@stdlib/stats/base/dists/frechet/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.stdev',
	'path': '@stdlib/stats/base/dists/frechet/stdev',
	'value': require( '@stdlib/stats/base/dists/frechet/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.frechet.variance',
	'path': '@stdlib/stats/base/dists/frechet/variance',
	'value': require( '@stdlib/stats/base/dists/frechet/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.cdf',
	'path': '@stdlib/stats/base/dists/gamma/cdf',
	'value': require( '@stdlib/stats/base/dists/gamma/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.entropy',
	'path': '@stdlib/stats/base/dists/gamma/entropy',
	'value': require( '@stdlib/stats/base/dists/gamma/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.Gamma',
	'path': '@stdlib/stats/base/dists/gamma/ctor',
	'value': require( '@stdlib/stats/base/dists/gamma/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.kurtosis',
	'path': '@stdlib/stats/base/dists/gamma/kurtosis',
	'value': require( '@stdlib/stats/base/dists/gamma/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.logcdf',
	'path': '@stdlib/stats/base/dists/gamma/logcdf',
	'value': require( '@stdlib/stats/base/dists/gamma/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.logpdf',
	'path': '@stdlib/stats/base/dists/gamma/logpdf',
	'value': require( '@stdlib/stats/base/dists/gamma/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.mean',
	'path': '@stdlib/stats/base/dists/gamma/mean',
	'value': require( '@stdlib/stats/base/dists/gamma/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.mgf',
	'path': '@stdlib/stats/base/dists/gamma/mgf',
	'value': require( '@stdlib/stats/base/dists/gamma/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.mode',
	'path': '@stdlib/stats/base/dists/gamma/mode',
	'value': require( '@stdlib/stats/base/dists/gamma/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.pdf',
	'path': '@stdlib/stats/base/dists/gamma/pdf',
	'value': require( '@stdlib/stats/base/dists/gamma/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.quantile',
	'path': '@stdlib/stats/base/dists/gamma/quantile',
	'value': require( '@stdlib/stats/base/dists/gamma/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.skewness',
	'path': '@stdlib/stats/base/dists/gamma/skewness',
	'value': require( '@stdlib/stats/base/dists/gamma/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.stdev',
	'path': '@stdlib/stats/base/dists/gamma/stdev',
	'value': require( '@stdlib/stats/base/dists/gamma/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gamma.variance',
	'path': '@stdlib/stats/base/dists/gamma/variance',
	'value': require( '@stdlib/stats/base/dists/gamma/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.cdf',
	'path': '@stdlib/stats/base/dists/geometric/cdf',
	'value': require( '@stdlib/stats/base/dists/geometric/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.entropy',
	'path': '@stdlib/stats/base/dists/geometric/entropy',
	'value': require( '@stdlib/stats/base/dists/geometric/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.Geometric',
	'path': '@stdlib/stats/base/dists/geometric/ctor',
	'value': require( '@stdlib/stats/base/dists/geometric/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.kurtosis',
	'path': '@stdlib/stats/base/dists/geometric/kurtosis',
	'value': require( '@stdlib/stats/base/dists/geometric/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.logcdf',
	'path': '@stdlib/stats/base/dists/geometric/logcdf',
	'value': require( '@stdlib/stats/base/dists/geometric/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.logpmf',
	'path': '@stdlib/stats/base/dists/geometric/logpmf',
	'value': require( '@stdlib/stats/base/dists/geometric/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.mean',
	'path': '@stdlib/stats/base/dists/geometric/mean',
	'value': require( '@stdlib/stats/base/dists/geometric/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.median',
	'path': '@stdlib/stats/base/dists/geometric/median',
	'value': require( '@stdlib/stats/base/dists/geometric/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.mgf',
	'path': '@stdlib/stats/base/dists/geometric/mgf',
	'value': require( '@stdlib/stats/base/dists/geometric/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.mode',
	'path': '@stdlib/stats/base/dists/geometric/mode',
	'value': require( '@stdlib/stats/base/dists/geometric/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.pmf',
	'path': '@stdlib/stats/base/dists/geometric/pmf',
	'value': require( '@stdlib/stats/base/dists/geometric/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.quantile',
	'path': '@stdlib/stats/base/dists/geometric/quantile',
	'value': require( '@stdlib/stats/base/dists/geometric/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.skewness',
	'path': '@stdlib/stats/base/dists/geometric/skewness',
	'value': require( '@stdlib/stats/base/dists/geometric/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.stdev',
	'path': '@stdlib/stats/base/dists/geometric/stdev',
	'value': require( '@stdlib/stats/base/dists/geometric/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.geometric.variance',
	'path': '@stdlib/stats/base/dists/geometric/variance',
	'value': require( '@stdlib/stats/base/dists/geometric/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.cdf',
	'path': '@stdlib/stats/base/dists/gumbel/cdf',
	'value': require( '@stdlib/stats/base/dists/gumbel/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.entropy',
	'path': '@stdlib/stats/base/dists/gumbel/entropy',
	'value': require( '@stdlib/stats/base/dists/gumbel/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.Gumbel',
	'path': '@stdlib/stats/base/dists/gumbel/ctor',
	'value': require( '@stdlib/stats/base/dists/gumbel/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.kurtosis',
	'path': '@stdlib/stats/base/dists/gumbel/kurtosis',
	'value': require( '@stdlib/stats/base/dists/gumbel/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.logcdf',
	'path': '@stdlib/stats/base/dists/gumbel/logcdf',
	'value': require( '@stdlib/stats/base/dists/gumbel/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.logpdf',
	'path': '@stdlib/stats/base/dists/gumbel/logpdf',
	'value': require( '@stdlib/stats/base/dists/gumbel/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.mean',
	'path': '@stdlib/stats/base/dists/gumbel/mean',
	'value': require( '@stdlib/stats/base/dists/gumbel/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.median',
	'path': '@stdlib/stats/base/dists/gumbel/median',
	'value': require( '@stdlib/stats/base/dists/gumbel/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.mgf',
	'path': '@stdlib/stats/base/dists/gumbel/mgf',
	'value': require( '@stdlib/stats/base/dists/gumbel/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.mode',
	'path': '@stdlib/stats/base/dists/gumbel/mode',
	'value': require( '@stdlib/stats/base/dists/gumbel/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.pdf',
	'path': '@stdlib/stats/base/dists/gumbel/pdf',
	'value': require( '@stdlib/stats/base/dists/gumbel/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.quantile',
	'path': '@stdlib/stats/base/dists/gumbel/quantile',
	'value': require( '@stdlib/stats/base/dists/gumbel/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.skewness',
	'path': '@stdlib/stats/base/dists/gumbel/skewness',
	'value': require( '@stdlib/stats/base/dists/gumbel/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.stdev',
	'path': '@stdlib/stats/base/dists/gumbel/stdev',
	'value': require( '@stdlib/stats/base/dists/gumbel/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.gumbel.variance',
	'path': '@stdlib/stats/base/dists/gumbel/variance',
	'value': require( '@stdlib/stats/base/dists/gumbel/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.cdf',
	'path': '@stdlib/stats/base/dists/hypergeometric/cdf',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.Hypergeometric',
	'path': '@stdlib/stats/base/dists/hypergeometric/ctor',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.kurtosis',
	'path': '@stdlib/stats/base/dists/hypergeometric/kurtosis',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.logpmf',
	'path': '@stdlib/stats/base/dists/hypergeometric/logpmf',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.mean',
	'path': '@stdlib/stats/base/dists/hypergeometric/mean',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.mode',
	'path': '@stdlib/stats/base/dists/hypergeometric/mode',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.pmf',
	'path': '@stdlib/stats/base/dists/hypergeometric/pmf',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.quantile',
	'path': '@stdlib/stats/base/dists/hypergeometric/quantile',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.skewness',
	'path': '@stdlib/stats/base/dists/hypergeometric/skewness',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.stdev',
	'path': '@stdlib/stats/base/dists/hypergeometric/stdev',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.hypergeometric.variance',
	'path': '@stdlib/stats/base/dists/hypergeometric/variance',
	'value': require( '@stdlib/stats/base/dists/hypergeometric/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.cdf',
	'path': '@stdlib/stats/base/dists/invgamma/cdf',
	'value': require( '@stdlib/stats/base/dists/invgamma/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.entropy',
	'path': '@stdlib/stats/base/dists/invgamma/entropy',
	'value': require( '@stdlib/stats/base/dists/invgamma/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.InvGamma',
	'path': '@stdlib/stats/base/dists/invgamma/ctor',
	'value': require( '@stdlib/stats/base/dists/invgamma/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.kurtosis',
	'path': '@stdlib/stats/base/dists/invgamma/kurtosis',
	'value': require( '@stdlib/stats/base/dists/invgamma/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.logpdf',
	'path': '@stdlib/stats/base/dists/invgamma/logpdf',
	'value': require( '@stdlib/stats/base/dists/invgamma/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.mean',
	'path': '@stdlib/stats/base/dists/invgamma/mean',
	'value': require( '@stdlib/stats/base/dists/invgamma/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.mode',
	'path': '@stdlib/stats/base/dists/invgamma/mode',
	'value': require( '@stdlib/stats/base/dists/invgamma/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.pdf',
	'path': '@stdlib/stats/base/dists/invgamma/pdf',
	'value': require( '@stdlib/stats/base/dists/invgamma/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.quantile',
	'path': '@stdlib/stats/base/dists/invgamma/quantile',
	'value': require( '@stdlib/stats/base/dists/invgamma/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.skewness',
	'path': '@stdlib/stats/base/dists/invgamma/skewness',
	'value': require( '@stdlib/stats/base/dists/invgamma/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.stdev',
	'path': '@stdlib/stats/base/dists/invgamma/stdev',
	'value': require( '@stdlib/stats/base/dists/invgamma/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.invgamma.variance',
	'path': '@stdlib/stats/base/dists/invgamma/variance',
	'value': require( '@stdlib/stats/base/dists/invgamma/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.cdf',
	'path': '@stdlib/stats/base/dists/kumaraswamy/cdf',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.Kumaraswamy',
	'path': '@stdlib/stats/base/dists/kumaraswamy/ctor',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.kurtosis',
	'path': '@stdlib/stats/base/dists/kumaraswamy/kurtosis',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.logcdf',
	'path': '@stdlib/stats/base/dists/kumaraswamy/logcdf',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.logpdf',
	'path': '@stdlib/stats/base/dists/kumaraswamy/logpdf',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.mean',
	'path': '@stdlib/stats/base/dists/kumaraswamy/mean',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.median',
	'path': '@stdlib/stats/base/dists/kumaraswamy/median',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.mode',
	'path': '@stdlib/stats/base/dists/kumaraswamy/mode',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.pdf',
	'path': '@stdlib/stats/base/dists/kumaraswamy/pdf',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.quantile',
	'path': '@stdlib/stats/base/dists/kumaraswamy/quantile',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.skewness',
	'path': '@stdlib/stats/base/dists/kumaraswamy/skewness',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.stdev',
	'path': '@stdlib/stats/base/dists/kumaraswamy/stdev',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.kumaraswamy.variance',
	'path': '@stdlib/stats/base/dists/kumaraswamy/variance',
	'value': require( '@stdlib/stats/base/dists/kumaraswamy/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.cdf',
	'path': '@stdlib/stats/base/dists/laplace/cdf',
	'value': require( '@stdlib/stats/base/dists/laplace/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.entropy',
	'path': '@stdlib/stats/base/dists/laplace/entropy',
	'value': require( '@stdlib/stats/base/dists/laplace/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.kurtosis',
	'path': '@stdlib/stats/base/dists/laplace/kurtosis',
	'value': require( '@stdlib/stats/base/dists/laplace/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.Laplace',
	'path': '@stdlib/stats/base/dists/laplace/ctor',
	'value': require( '@stdlib/stats/base/dists/laplace/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.logcdf',
	'path': '@stdlib/stats/base/dists/laplace/logcdf',
	'value': require( '@stdlib/stats/base/dists/laplace/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.logpdf',
	'path': '@stdlib/stats/base/dists/laplace/logpdf',
	'value': require( '@stdlib/stats/base/dists/laplace/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.mean',
	'path': '@stdlib/stats/base/dists/laplace/mean',
	'value': require( '@stdlib/stats/base/dists/laplace/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.median',
	'path': '@stdlib/stats/base/dists/laplace/median',
	'value': require( '@stdlib/stats/base/dists/laplace/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.mgf',
	'path': '@stdlib/stats/base/dists/laplace/mgf',
	'value': require( '@stdlib/stats/base/dists/laplace/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.mode',
	'path': '@stdlib/stats/base/dists/laplace/mode',
	'value': require( '@stdlib/stats/base/dists/laplace/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.pdf',
	'path': '@stdlib/stats/base/dists/laplace/pdf',
	'value': require( '@stdlib/stats/base/dists/laplace/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.quantile',
	'path': '@stdlib/stats/base/dists/laplace/quantile',
	'value': require( '@stdlib/stats/base/dists/laplace/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.skewness',
	'path': '@stdlib/stats/base/dists/laplace/skewness',
	'value': require( '@stdlib/stats/base/dists/laplace/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.stdev',
	'path': '@stdlib/stats/base/dists/laplace/stdev',
	'value': require( '@stdlib/stats/base/dists/laplace/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.laplace.variance',
	'path': '@stdlib/stats/base/dists/laplace/variance',
	'value': require( '@stdlib/stats/base/dists/laplace/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.cdf',
	'path': '@stdlib/stats/base/dists/levy/cdf',
	'value': require( '@stdlib/stats/base/dists/levy/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.entropy',
	'path': '@stdlib/stats/base/dists/levy/entropy',
	'value': require( '@stdlib/stats/base/dists/levy/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.Levy',
	'path': '@stdlib/stats/base/dists/levy/ctor',
	'value': require( '@stdlib/stats/base/dists/levy/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.logcdf',
	'path': '@stdlib/stats/base/dists/levy/logcdf',
	'value': require( '@stdlib/stats/base/dists/levy/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.logpdf',
	'path': '@stdlib/stats/base/dists/levy/logpdf',
	'value': require( '@stdlib/stats/base/dists/levy/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.mean',
	'path': '@stdlib/stats/base/dists/levy/mean',
	'value': require( '@stdlib/stats/base/dists/levy/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.median',
	'path': '@stdlib/stats/base/dists/levy/median',
	'value': require( '@stdlib/stats/base/dists/levy/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.mode',
	'path': '@stdlib/stats/base/dists/levy/mode',
	'value': require( '@stdlib/stats/base/dists/levy/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.pdf',
	'path': '@stdlib/stats/base/dists/levy/pdf',
	'value': require( '@stdlib/stats/base/dists/levy/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.quantile',
	'path': '@stdlib/stats/base/dists/levy/quantile',
	'value': require( '@stdlib/stats/base/dists/levy/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.stdev',
	'path': '@stdlib/stats/base/dists/levy/stdev',
	'value': require( '@stdlib/stats/base/dists/levy/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.levy.variance',
	'path': '@stdlib/stats/base/dists/levy/variance',
	'value': require( '@stdlib/stats/base/dists/levy/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.cdf',
	'path': '@stdlib/stats/base/dists/logistic/cdf',
	'value': require( '@stdlib/stats/base/dists/logistic/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.entropy',
	'path': '@stdlib/stats/base/dists/logistic/entropy',
	'value': require( '@stdlib/stats/base/dists/logistic/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.kurtosis',
	'path': '@stdlib/stats/base/dists/logistic/kurtosis',
	'value': require( '@stdlib/stats/base/dists/logistic/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.logcdf',
	'path': '@stdlib/stats/base/dists/logistic/logcdf',
	'value': require( '@stdlib/stats/base/dists/logistic/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.Logistic',
	'path': '@stdlib/stats/base/dists/logistic/ctor',
	'value': require( '@stdlib/stats/base/dists/logistic/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.logpdf',
	'path': '@stdlib/stats/base/dists/logistic/logpdf',
	'value': require( '@stdlib/stats/base/dists/logistic/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.mean',
	'path': '@stdlib/stats/base/dists/logistic/mean',
	'value': require( '@stdlib/stats/base/dists/logistic/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.median',
	'path': '@stdlib/stats/base/dists/logistic/median',
	'value': require( '@stdlib/stats/base/dists/logistic/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.mgf',
	'path': '@stdlib/stats/base/dists/logistic/mgf',
	'value': require( '@stdlib/stats/base/dists/logistic/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.mode',
	'path': '@stdlib/stats/base/dists/logistic/mode',
	'value': require( '@stdlib/stats/base/dists/logistic/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.pdf',
	'path': '@stdlib/stats/base/dists/logistic/pdf',
	'value': require( '@stdlib/stats/base/dists/logistic/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.quantile',
	'path': '@stdlib/stats/base/dists/logistic/quantile',
	'value': require( '@stdlib/stats/base/dists/logistic/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.skewness',
	'path': '@stdlib/stats/base/dists/logistic/skewness',
	'value': require( '@stdlib/stats/base/dists/logistic/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.stdev',
	'path': '@stdlib/stats/base/dists/logistic/stdev',
	'value': require( '@stdlib/stats/base/dists/logistic/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.logistic.variance',
	'path': '@stdlib/stats/base/dists/logistic/variance',
	'value': require( '@stdlib/stats/base/dists/logistic/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.cdf',
	'path': '@stdlib/stats/base/dists/lognormal/cdf',
	'value': require( '@stdlib/stats/base/dists/lognormal/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.entropy',
	'path': '@stdlib/stats/base/dists/lognormal/entropy',
	'value': require( '@stdlib/stats/base/dists/lognormal/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.kurtosis',
	'path': '@stdlib/stats/base/dists/lognormal/kurtosis',
	'value': require( '@stdlib/stats/base/dists/lognormal/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.LogNormal',
	'path': '@stdlib/stats/base/dists/lognormal/ctor',
	'value': require( '@stdlib/stats/base/dists/lognormal/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.logpdf',
	'path': '@stdlib/stats/base/dists/lognormal/logpdf',
	'value': require( '@stdlib/stats/base/dists/lognormal/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.mean',
	'path': '@stdlib/stats/base/dists/lognormal/mean',
	'value': require( '@stdlib/stats/base/dists/lognormal/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.median',
	'path': '@stdlib/stats/base/dists/lognormal/median',
	'value': require( '@stdlib/stats/base/dists/lognormal/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.mode',
	'path': '@stdlib/stats/base/dists/lognormal/mode',
	'value': require( '@stdlib/stats/base/dists/lognormal/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.pdf',
	'path': '@stdlib/stats/base/dists/lognormal/pdf',
	'value': require( '@stdlib/stats/base/dists/lognormal/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.quantile',
	'path': '@stdlib/stats/base/dists/lognormal/quantile',
	'value': require( '@stdlib/stats/base/dists/lognormal/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.skewness',
	'path': '@stdlib/stats/base/dists/lognormal/skewness',
	'value': require( '@stdlib/stats/base/dists/lognormal/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.stdev',
	'path': '@stdlib/stats/base/dists/lognormal/stdev',
	'value': require( '@stdlib/stats/base/dists/lognormal/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.lognormal.variance',
	'path': '@stdlib/stats/base/dists/lognormal/variance',
	'value': require( '@stdlib/stats/base/dists/lognormal/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.cdf',
	'path': '@stdlib/stats/base/dists/negative-binomial/cdf',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.kurtosis',
	'path': '@stdlib/stats/base/dists/negative-binomial/kurtosis',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.logpmf',
	'path': '@stdlib/stats/base/dists/negative-binomial/logpmf',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.mean',
	'path': '@stdlib/stats/base/dists/negative-binomial/mean',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.mgf',
	'path': '@stdlib/stats/base/dists/negative-binomial/mgf',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.mode',
	'path': '@stdlib/stats/base/dists/negative-binomial/mode',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.NegativeBinomial',
	'path': '@stdlib/stats/base/dists/negative-binomial/ctor',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.pmf',
	'path': '@stdlib/stats/base/dists/negative-binomial/pmf',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.quantile',
	'path': '@stdlib/stats/base/dists/negative-binomial/quantile',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.skewness',
	'path': '@stdlib/stats/base/dists/negative-binomial/skewness',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.stdev',
	'path': '@stdlib/stats/base/dists/negative-binomial/stdev',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.negativeBinomial.variance',
	'path': '@stdlib/stats/base/dists/negative-binomial/variance',
	'value': require( '@stdlib/stats/base/dists/negative-binomial/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.cdf',
	'path': '@stdlib/stats/base/dists/normal/cdf',
	'value': require( '@stdlib/stats/base/dists/normal/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.entropy',
	'path': '@stdlib/stats/base/dists/normal/entropy',
	'value': require( '@stdlib/stats/base/dists/normal/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.kurtosis',
	'path': '@stdlib/stats/base/dists/normal/kurtosis',
	'value': require( '@stdlib/stats/base/dists/normal/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.logpdf',
	'path': '@stdlib/stats/base/dists/normal/logpdf',
	'value': require( '@stdlib/stats/base/dists/normal/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.mean',
	'path': '@stdlib/stats/base/dists/normal/mean',
	'value': require( '@stdlib/stats/base/dists/normal/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.median',
	'path': '@stdlib/stats/base/dists/normal/median',
	'value': require( '@stdlib/stats/base/dists/normal/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.mgf',
	'path': '@stdlib/stats/base/dists/normal/mgf',
	'value': require( '@stdlib/stats/base/dists/normal/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.mode',
	'path': '@stdlib/stats/base/dists/normal/mode',
	'value': require( '@stdlib/stats/base/dists/normal/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.Normal',
	'path': '@stdlib/stats/base/dists/normal/ctor',
	'value': require( '@stdlib/stats/base/dists/normal/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.pdf',
	'path': '@stdlib/stats/base/dists/normal/pdf',
	'value': require( '@stdlib/stats/base/dists/normal/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.quantile',
	'path': '@stdlib/stats/base/dists/normal/quantile',
	'value': require( '@stdlib/stats/base/dists/normal/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.skewness',
	'path': '@stdlib/stats/base/dists/normal/skewness',
	'value': require( '@stdlib/stats/base/dists/normal/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.stdev',
	'path': '@stdlib/stats/base/dists/normal/stdev',
	'value': require( '@stdlib/stats/base/dists/normal/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.normal.variance',
	'path': '@stdlib/stats/base/dists/normal/variance',
	'value': require( '@stdlib/stats/base/dists/normal/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.cdf',
	'path': '@stdlib/stats/base/dists/pareto-type1/cdf',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.entropy',
	'path': '@stdlib/stats/base/dists/pareto-type1/entropy',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.kurtosis',
	'path': '@stdlib/stats/base/dists/pareto-type1/kurtosis',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.logcdf',
	'path': '@stdlib/stats/base/dists/pareto-type1/logcdf',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.logpdf',
	'path': '@stdlib/stats/base/dists/pareto-type1/logpdf',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.mean',
	'path': '@stdlib/stats/base/dists/pareto-type1/mean',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.median',
	'path': '@stdlib/stats/base/dists/pareto-type1/median',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.mode',
	'path': '@stdlib/stats/base/dists/pareto-type1/mode',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.Pareto1',
	'path': '@stdlib/stats/base/dists/pareto-type1/ctor',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.pdf',
	'path': '@stdlib/stats/base/dists/pareto-type1/pdf',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.quantile',
	'path': '@stdlib/stats/base/dists/pareto-type1/quantile',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.skewness',
	'path': '@stdlib/stats/base/dists/pareto-type1/skewness',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.stdev',
	'path': '@stdlib/stats/base/dists/pareto-type1/stdev',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.pareto1.variance',
	'path': '@stdlib/stats/base/dists/pareto-type1/variance',
	'value': require( '@stdlib/stats/base/dists/pareto-type1/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.cdf',
	'path': '@stdlib/stats/base/dists/poisson/cdf',
	'value': require( '@stdlib/stats/base/dists/poisson/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.entropy',
	'path': '@stdlib/stats/base/dists/poisson/entropy',
	'value': require( '@stdlib/stats/base/dists/poisson/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.kurtosis',
	'path': '@stdlib/stats/base/dists/poisson/kurtosis',
	'value': require( '@stdlib/stats/base/dists/poisson/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.logpmf',
	'path': '@stdlib/stats/base/dists/poisson/logpmf',
	'value': require( '@stdlib/stats/base/dists/poisson/logpmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.mean',
	'path': '@stdlib/stats/base/dists/poisson/mean',
	'value': require( '@stdlib/stats/base/dists/poisson/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.median',
	'path': '@stdlib/stats/base/dists/poisson/median',
	'value': require( '@stdlib/stats/base/dists/poisson/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.mgf',
	'path': '@stdlib/stats/base/dists/poisson/mgf',
	'value': require( '@stdlib/stats/base/dists/poisson/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.mode',
	'path': '@stdlib/stats/base/dists/poisson/mode',
	'value': require( '@stdlib/stats/base/dists/poisson/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.pmf',
	'path': '@stdlib/stats/base/dists/poisson/pmf',
	'value': require( '@stdlib/stats/base/dists/poisson/pmf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.Poisson',
	'path': '@stdlib/stats/base/dists/poisson/ctor',
	'value': require( '@stdlib/stats/base/dists/poisson/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.quantile',
	'path': '@stdlib/stats/base/dists/poisson/quantile',
	'value': require( '@stdlib/stats/base/dists/poisson/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.skewness',
	'path': '@stdlib/stats/base/dists/poisson/skewness',
	'value': require( '@stdlib/stats/base/dists/poisson/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.stdev',
	'path': '@stdlib/stats/base/dists/poisson/stdev',
	'value': require( '@stdlib/stats/base/dists/poisson/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.poisson.variance',
	'path': '@stdlib/stats/base/dists/poisson/variance',
	'value': require( '@stdlib/stats/base/dists/poisson/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.cdf',
	'path': '@stdlib/stats/base/dists/rayleigh/cdf',
	'value': require( '@stdlib/stats/base/dists/rayleigh/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.entropy',
	'path': '@stdlib/stats/base/dists/rayleigh/entropy',
	'value': require( '@stdlib/stats/base/dists/rayleigh/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.kurtosis',
	'path': '@stdlib/stats/base/dists/rayleigh/kurtosis',
	'value': require( '@stdlib/stats/base/dists/rayleigh/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.logcdf',
	'path': '@stdlib/stats/base/dists/rayleigh/logcdf',
	'value': require( '@stdlib/stats/base/dists/rayleigh/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.logpdf',
	'path': '@stdlib/stats/base/dists/rayleigh/logpdf',
	'value': require( '@stdlib/stats/base/dists/rayleigh/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.mean',
	'path': '@stdlib/stats/base/dists/rayleigh/mean',
	'value': require( '@stdlib/stats/base/dists/rayleigh/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.median',
	'path': '@stdlib/stats/base/dists/rayleigh/median',
	'value': require( '@stdlib/stats/base/dists/rayleigh/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.mgf',
	'path': '@stdlib/stats/base/dists/rayleigh/mgf',
	'value': require( '@stdlib/stats/base/dists/rayleigh/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.mode',
	'path': '@stdlib/stats/base/dists/rayleigh/mode',
	'value': require( '@stdlib/stats/base/dists/rayleigh/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.pdf',
	'path': '@stdlib/stats/base/dists/rayleigh/pdf',
	'value': require( '@stdlib/stats/base/dists/rayleigh/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.quantile',
	'path': '@stdlib/stats/base/dists/rayleigh/quantile',
	'value': require( '@stdlib/stats/base/dists/rayleigh/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.Rayleigh',
	'path': '@stdlib/stats/base/dists/rayleigh/ctor',
	'value': require( '@stdlib/stats/base/dists/rayleigh/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.skewness',
	'path': '@stdlib/stats/base/dists/rayleigh/skewness',
	'value': require( '@stdlib/stats/base/dists/rayleigh/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.stdev',
	'path': '@stdlib/stats/base/dists/rayleigh/stdev',
	'value': require( '@stdlib/stats/base/dists/rayleigh/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.rayleigh.variance',
	'path': '@stdlib/stats/base/dists/rayleigh/variance',
	'value': require( '@stdlib/stats/base/dists/rayleigh/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.signrank.cdf',
	'path': '@stdlib/stats/base/dists/signrank/cdf',
	'value': require( '@stdlib/stats/base/dists/signrank/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.signrank.pdf',
	'path': '@stdlib/stats/base/dists/signrank/pdf',
	'value': require( '@stdlib/stats/base/dists/signrank/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.signrank.quantile',
	'path': '@stdlib/stats/base/dists/signrank/quantile',
	'value': require( '@stdlib/stats/base/dists/signrank/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.cdf',
	'path': '@stdlib/stats/base/dists/t/cdf',
	'value': require( '@stdlib/stats/base/dists/t/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.entropy',
	'path': '@stdlib/stats/base/dists/t/entropy',
	'value': require( '@stdlib/stats/base/dists/t/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.kurtosis',
	'path': '@stdlib/stats/base/dists/t/kurtosis',
	'value': require( '@stdlib/stats/base/dists/t/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.mean',
	'path': '@stdlib/stats/base/dists/t/mean',
	'value': require( '@stdlib/stats/base/dists/t/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.median',
	'path': '@stdlib/stats/base/dists/t/median',
	'value': require( '@stdlib/stats/base/dists/t/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.mode',
	'path': '@stdlib/stats/base/dists/t/mode',
	'value': require( '@stdlib/stats/base/dists/t/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.pdf',
	'path': '@stdlib/stats/base/dists/t/pdf',
	'value': require( '@stdlib/stats/base/dists/t/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.quantile',
	'path': '@stdlib/stats/base/dists/t/quantile',
	'value': require( '@stdlib/stats/base/dists/t/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.skewness',
	'path': '@stdlib/stats/base/dists/t/skewness',
	'value': require( '@stdlib/stats/base/dists/t/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.stdev',
	'path': '@stdlib/stats/base/dists/t/stdev',
	'value': require( '@stdlib/stats/base/dists/t/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.T',
	'path': '@stdlib/stats/base/dists/t/ctor',
	'value': require( '@stdlib/stats/base/dists/t/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.t.variance',
	'path': '@stdlib/stats/base/dists/t/variance',
	'value': require( '@stdlib/stats/base/dists/t/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.cdf',
	'path': '@stdlib/stats/base/dists/triangular/cdf',
	'value': require( '@stdlib/stats/base/dists/triangular/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.entropy',
	'path': '@stdlib/stats/base/dists/triangular/entropy',
	'value': require( '@stdlib/stats/base/dists/triangular/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.kurtosis',
	'path': '@stdlib/stats/base/dists/triangular/kurtosis',
	'value': require( '@stdlib/stats/base/dists/triangular/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.logcdf',
	'path': '@stdlib/stats/base/dists/triangular/logcdf',
	'value': require( '@stdlib/stats/base/dists/triangular/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.logpdf',
	'path': '@stdlib/stats/base/dists/triangular/logpdf',
	'value': require( '@stdlib/stats/base/dists/triangular/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.mean',
	'path': '@stdlib/stats/base/dists/triangular/mean',
	'value': require( '@stdlib/stats/base/dists/triangular/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.median',
	'path': '@stdlib/stats/base/dists/triangular/median',
	'value': require( '@stdlib/stats/base/dists/triangular/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.mgf',
	'path': '@stdlib/stats/base/dists/triangular/mgf',
	'value': require( '@stdlib/stats/base/dists/triangular/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.mode',
	'path': '@stdlib/stats/base/dists/triangular/mode',
	'value': require( '@stdlib/stats/base/dists/triangular/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.pdf',
	'path': '@stdlib/stats/base/dists/triangular/pdf',
	'value': require( '@stdlib/stats/base/dists/triangular/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.quantile',
	'path': '@stdlib/stats/base/dists/triangular/quantile',
	'value': require( '@stdlib/stats/base/dists/triangular/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.skewness',
	'path': '@stdlib/stats/base/dists/triangular/skewness',
	'value': require( '@stdlib/stats/base/dists/triangular/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.stdev',
	'path': '@stdlib/stats/base/dists/triangular/stdev',
	'value': require( '@stdlib/stats/base/dists/triangular/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.Triangular',
	'path': '@stdlib/stats/base/dists/triangular/ctor',
	'value': require( '@stdlib/stats/base/dists/triangular/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.triangular.variance',
	'path': '@stdlib/stats/base/dists/triangular/variance',
	'value': require( '@stdlib/stats/base/dists/triangular/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.cdf',
	'path': '@stdlib/stats/base/dists/uniform/cdf',
	'value': require( '@stdlib/stats/base/dists/uniform/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.entropy',
	'path': '@stdlib/stats/base/dists/uniform/entropy',
	'value': require( '@stdlib/stats/base/dists/uniform/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.kurtosis',
	'path': '@stdlib/stats/base/dists/uniform/kurtosis',
	'value': require( '@stdlib/stats/base/dists/uniform/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.logcdf',
	'path': '@stdlib/stats/base/dists/uniform/logcdf',
	'value': require( '@stdlib/stats/base/dists/uniform/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.logpdf',
	'path': '@stdlib/stats/base/dists/uniform/logpdf',
	'value': require( '@stdlib/stats/base/dists/uniform/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.mean',
	'path': '@stdlib/stats/base/dists/uniform/mean',
	'value': require( '@stdlib/stats/base/dists/uniform/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.median',
	'path': '@stdlib/stats/base/dists/uniform/median',
	'value': require( '@stdlib/stats/base/dists/uniform/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.mgf',
	'path': '@stdlib/stats/base/dists/uniform/mgf',
	'value': require( '@stdlib/stats/base/dists/uniform/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.pdf',
	'path': '@stdlib/stats/base/dists/uniform/pdf',
	'value': require( '@stdlib/stats/base/dists/uniform/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.quantile',
	'path': '@stdlib/stats/base/dists/uniform/quantile',
	'value': require( '@stdlib/stats/base/dists/uniform/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.skewness',
	'path': '@stdlib/stats/base/dists/uniform/skewness',
	'value': require( '@stdlib/stats/base/dists/uniform/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.stdev',
	'path': '@stdlib/stats/base/dists/uniform/stdev',
	'value': require( '@stdlib/stats/base/dists/uniform/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.Uniform',
	'path': '@stdlib/stats/base/dists/uniform/ctor',
	'value': require( '@stdlib/stats/base/dists/uniform/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.uniform.variance',
	'path': '@stdlib/stats/base/dists/uniform/variance',
	'value': require( '@stdlib/stats/base/dists/uniform/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.cdf',
	'path': '@stdlib/stats/base/dists/weibull/cdf',
	'value': require( '@stdlib/stats/base/dists/weibull/cdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.entropy',
	'path': '@stdlib/stats/base/dists/weibull/entropy',
	'value': require( '@stdlib/stats/base/dists/weibull/entropy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.kurtosis',
	'path': '@stdlib/stats/base/dists/weibull/kurtosis',
	'value': require( '@stdlib/stats/base/dists/weibull/kurtosis' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.logcdf',
	'path': '@stdlib/stats/base/dists/weibull/logcdf',
	'value': require( '@stdlib/stats/base/dists/weibull/logcdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.logpdf',
	'path': '@stdlib/stats/base/dists/weibull/logpdf',
	'value': require( '@stdlib/stats/base/dists/weibull/logpdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.mean',
	'path': '@stdlib/stats/base/dists/weibull/mean',
	'value': require( '@stdlib/stats/base/dists/weibull/mean' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.median',
	'path': '@stdlib/stats/base/dists/weibull/median',
	'value': require( '@stdlib/stats/base/dists/weibull/median' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.mgf',
	'path': '@stdlib/stats/base/dists/weibull/mgf',
	'value': require( '@stdlib/stats/base/dists/weibull/mgf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.mode',
	'path': '@stdlib/stats/base/dists/weibull/mode',
	'value': require( '@stdlib/stats/base/dists/weibull/mode' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.pdf',
	'path': '@stdlib/stats/base/dists/weibull/pdf',
	'value': require( '@stdlib/stats/base/dists/weibull/pdf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.quantile',
	'path': '@stdlib/stats/base/dists/weibull/quantile',
	'value': require( '@stdlib/stats/base/dists/weibull/quantile' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.skewness',
	'path': '@stdlib/stats/base/dists/weibull/skewness',
	'value': require( '@stdlib/stats/base/dists/weibull/skewness' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.stdev',
	'path': '@stdlib/stats/base/dists/weibull/stdev',
	'value': require( '@stdlib/stats/base/dists/weibull/stdev' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.variance',
	'path': '@stdlib/stats/base/dists/weibull/variance',
	'value': require( '@stdlib/stats/base/dists/weibull/variance' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.dists.weibull.Weibull',
	'path': '@stdlib/stats/base/dists/weibull/ctor',
	'value': require( '@stdlib/stats/base/dists/weibull/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.ellipe',
	'path': '@stdlib/math/base/special/ellipe',
	'value': require( '@stdlib/math/base/special/ellipe' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipk'
	]
});

ns.push({
	'alias': 'base.ellipk',
	'path': '@stdlib/math/base/special/ellipk',
	'value': require( '@stdlib/math/base/special/ellipk' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipe'
	]
});

ns.push({
	'alias': 'base.epsdiff',
	'path': '@stdlib/math/base/utils/float64-epsilon-difference',
	'value': require( '@stdlib/math/base/utils/float64-epsilon-difference' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/utils/absolute-difference',
		'@stdlib/math/base/utils/relative-difference'
	]
});

ns.push({
	'alias': 'base.erf',
	'path': '@stdlib/math/base/special/erf',
	'value': require( '@stdlib/math/base/special/erf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erfc',
		'@stdlib/math/base/special/erfinv',
		'@stdlib/math/base/special/erfcinv'
	]
});

ns.push({
	'alias': 'base.erfc',
	'path': '@stdlib/math/base/special/erfc',
	'value': require( '@stdlib/math/base/special/erfc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erf',
		'@stdlib/math/base/special/erfinv',
		'@stdlib/math/base/special/erfcinv'
	]
});

ns.push({
	'alias': 'base.erfcinv',
	'path': '@stdlib/math/base/special/erfcinv',
	'value': require( '@stdlib/math/base/special/erfcinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erf',
		'@stdlib/math/base/special/erfc',
		'@stdlib/math/base/special/erfinv'
	]
});

ns.push({
	'alias': 'base.erfinv',
	'path': '@stdlib/math/base/special/erfinv',
	'value': require( '@stdlib/math/base/special/erfinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erf',
		'@stdlib/math/base/special/erfc',
		'@stdlib/math/base/special/erfcinv'
	]
});

ns.push({
	'alias': 'base.eta',
	'path': '@stdlib/math/base/special/dirichlet-eta',
	'value': require( '@stdlib/math/base/special/dirichlet-eta' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.evalpoly',
	'path': '@stdlib/math/base/tools/evalpoly',
	'value': require( '@stdlib/math/base/tools/evalpoly' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalrational'
	]
});

ns.push({
	'alias': 'base.evalrational',
	'path': '@stdlib/math/base/tools/evalrational',
	'value': require( '@stdlib/math/base/tools/evalrational' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalpoly'
	]
});

ns.push({
	'alias': 'base.exp',
	'path': '@stdlib/math/base/special/exp',
	'value': require( '@stdlib/math/base/special/exp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp10',
		'@stdlib/math/base/special/exp2',
		'@stdlib/math/base/special/expm1',
		'@stdlib/math/base/special/ln'
	]
});

ns.push({
	'alias': 'base.exp2',
	'path': '@stdlib/math/base/special/exp2',
	'value': require( '@stdlib/math/base/special/exp2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/exp10',
		'@stdlib/math/base/special/log2'
	]
});

ns.push({
	'alias': 'base.exp10',
	'path': '@stdlib/math/base/special/exp10',
	'value': require( '@stdlib/math/base/special/exp10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/exp2',
		'@stdlib/math/base/special/log10'
	]
});

ns.push({
	'alias': 'base.expit',
	'path': '@stdlib/math/base/special/expit',
	'value': require( '@stdlib/math/base/special/expit' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/logit'
	]
});

ns.push({
	'alias': 'base.expm1',
	'path': '@stdlib/math/base/special/expm1',
	'value': require( '@stdlib/math/base/special/expm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/expm1rel'
	]
});

ns.push({
	'alias': 'base.expm1rel',
	'path': '@stdlib/math/base/special/expm1rel',
	'value': require( '@stdlib/math/base/special/expm1rel' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/expm1'
	]
});

ns.push({
	'alias': 'base.exponent',
	'path': '@stdlib/number/float64/base/exponent',
	'value': require( '@stdlib/number/float64/base/exponent' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/exponent'
	]
});

ns.push({
	'alias': 'base.exponentf',
	'path': '@stdlib/number/float32/base/exponent',
	'value': require( '@stdlib/number/float32/base/exponent' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/exponent'
	]
});

ns.push({
	'alias': 'base.factorial',
	'path': '@stdlib/math/base/special/factorial',
	'value': require( '@stdlib/math/base/special/factorial' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/factorialln'
	]
});

ns.push({
	'alias': 'base.factorialln',
	'path': '@stdlib/math/base/special/factorialln',
	'value': require( '@stdlib/math/base/special/factorialln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/factorial'
	]
});

ns.push({
	'alias': 'base.fallingFactorial',
	'path': '@stdlib/math/base/special/falling-factorial',
	'value': require( '@stdlib/math/base/special/falling-factorial' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rising-factorial'
	]
});

ns.push({
	'alias': 'base.fibonacci',
	'path': '@stdlib/math/base/special/fibonacci',
	'value': require( '@stdlib/math/base/special/fibonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/binet',
		'@stdlib/math/base/special/fibonacci-index',
		'@stdlib/math/base/special/lucas',
		'@stdlib/math/base/special/negafibonacci'
	]
});

ns.push({
	'alias': 'base.fibonacciIndex',
	'path': '@stdlib/math/base/special/fibonacci-index',
	'value': require( '@stdlib/math/base/special/fibonacci-index' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci'
	]
});

ns.push({
	'alias': 'base.fibpoly',
	'path': '@stdlib/math/base/tools/fibpoly',
	'value': require( '@stdlib/math/base/tools/fibpoly' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalpoly',
		'@stdlib/math/base/tools/lucaspoly'
	]
});

ns.push({
	'alias': 'base.flipsign',
	'path': '@stdlib/math/base/special/flipsign',
	'value': require( '@stdlib/math/base/special/flipsign' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/copysign'
	]
});

ns.push({
	'alias': 'base.float32ToInt32',
	'path': '@stdlib/number/float32/base/to-int32',
	'value': require( '@stdlib/number/float32/base/to-int32' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/to-uint32'
	]
});

ns.push({
	'alias': 'base.float32ToUint32',
	'path': '@stdlib/number/float32/base/to-uint32',
	'value': require( '@stdlib/number/float32/base/to-uint32' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/to-int32'
	]
});

ns.push({
	'alias': 'base.float64ToFloat32',
	'path': '@stdlib/number/float64/base/to-float32',
	'value': require( '@stdlib/number/float64/base/to-float32' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.float64ToInt32',
	'path': '@stdlib/number/float64/base/to-int32',
	'value': require( '@stdlib/number/float64/base/to-int32' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-uint32'
	]
});

ns.push({
	'alias': 'base.float64ToInt64Bytes',
	'path': '@stdlib/number/float64/base/to-int64-bytes',
	'value': require( '@stdlib/number/float64/base/to-int64-bytes' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-int32'
	]
});

ns.push({
	'alias': 'base.float64ToUint32',
	'path': '@stdlib/number/float64/base/to-uint32',
	'value': require( '@stdlib/number/float64/base/to-uint32' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-int32'
	]
});

ns.push({
	'alias': 'base.floor',
	'path': '@stdlib/math/base/special/floor',
	'value': require( '@stdlib/math/base/special/floor' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/round'
	]
});

ns.push({
	'alias': 'base.floor2',
	'path': '@stdlib/math/base/special/floor2',
	'value': require( '@stdlib/math/base/special/floor2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/base/special/round2'
	]
});

ns.push({
	'alias': 'base.floor10',
	'path': '@stdlib/math/base/special/floor10',
	'value': require( '@stdlib/math/base/special/floor10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/base/special/round10'
	]
});

ns.push({
	'alias': 'base.floorb',
	'path': '@stdlib/math/base/special/floorb',
	'value': require( '@stdlib/math/base/special/floorb' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilb',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/floorn',
		'@stdlib/math/base/special/roundb'
	]
});

ns.push({
	'alias': 'base.floorf',
	'path': '@stdlib/math/base/special/floorf',
	'value': require( '@stdlib/math/base/special/floorf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilf',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/roundf'
	]
});

ns.push({
	'alias': 'base.floorn',
	'path': '@stdlib/math/base/special/floorn',
	'value': require( '@stdlib/math/base/special/floorn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/floorb',
		'@stdlib/math/base/special/roundn'
	]
});

ns.push({
	'alias': 'base.floorsd',
	'path': '@stdlib/math/base/special/floorsd',
	'value': require( '@stdlib/math/base/special/floorsd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilsd',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/roundsd',
		'@stdlib/math/base/special/truncsd'
	]
});

ns.push({
	'alias': 'base.fresnel',
	'path': '@stdlib/math/base/special/fresnel',
	'value': require( '@stdlib/math/base/special/fresnel' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fresnelc',
		'@stdlib/math/base/special/fresnels'
	]
});

ns.push({
	'alias': 'base.fresnelc',
	'path': '@stdlib/math/base/special/fresnelc',
	'value': require( '@stdlib/math/base/special/fresnelc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fresnel',
		'@stdlib/math/base/special/fresnels'
	]
});

ns.push({
	'alias': 'base.fresnels',
	'path': '@stdlib/math/base/special/fresnels',
	'value': require( '@stdlib/math/base/special/fresnels' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fresnel',
		'@stdlib/math/base/special/fresnelc'
	]
});

ns.push({
	'alias': 'base.frexp',
	'path': '@stdlib/math/base/special/frexp',
	'value': require( '@stdlib/math/base/special/frexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ldexp'
	]
});

ns.push({
	'alias': 'base.fromBinaryString',
	'path': '@stdlib/number/float64/base/from-binary-string',
	'value': require( '@stdlib/number/float64/base/from-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/from-binary-string',
		'@stdlib/number/float64/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.fromBinaryStringf',
	'path': '@stdlib/number/float32/base/from-binary-string',
	'value': require( '@stdlib/number/float32/base/from-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/to-binary-string',
		'@stdlib/number/float64/base/from-binary-string'
	]
});

ns.push({
	'alias': 'base.fromBinaryStringUint8',
	'path': '@stdlib/number/uint8/base/from-binary-string',
	'value': require( '@stdlib/number/uint8/base/from-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint16/base/from-binary-string',
		'@stdlib/number/uint32/base/from-binary-string',
		'@stdlib/number/uint8/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.fromBinaryStringUint16',
	'path': '@stdlib/number/uint16/base/from-binary-string',
	'value': require( '@stdlib/number/uint16/base/from-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint16/base/to-binary-string',
		'@stdlib/number/uint32/base/from-binary-string',
		'@stdlib/number/uint8/base/from-binary-string'
	]
});

ns.push({
	'alias': 'base.fromBinaryStringUint32',
	'path': '@stdlib/number/uint32/base/from-binary-string',
	'value': require( '@stdlib/number/uint32/base/from-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint16/base/from-binary-string',
		'@stdlib/number/uint32/base/to-binary-string',
		'@stdlib/number/uint8/base/from-binary-string'
	]
});

ns.push({
	'alias': 'base.fromInt64Bytes',
	'path': '@stdlib/number/float64/base/from-int64-bytes',
	'value': require( '@stdlib/number/float64/base/from-int64-bytes' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-int64-bytes'
	]
});

ns.push({
	'alias': 'base.fromWordf',
	'path': '@stdlib/number/float32/base/from-word',
	'value': require( '@stdlib/number/float32/base/from-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/from-words'
	]
});

ns.push({
	'alias': 'base.fromWords',
	'path': '@stdlib/number/float64/base/from-words',
	'value': require( '@stdlib/number/float64/base/from-words' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/from-word'
	]
});

ns.push({
	'alias': 'base.gamma',
	'path': '@stdlib/math/base/special/gamma',
	'value': require( '@stdlib/math/base/special/gamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma1pm1',
		'@stdlib/math/base/special/gammainc',
		'@stdlib/math/base/special/gammaincinv',
		'@stdlib/math/base/special/gammaln'
	]
});

ns.push({
	'alias': 'base.gamma1pm1',
	'path': '@stdlib/math/base/special/gamma1pm1',
	'value': require( '@stdlib/math/base/special/gamma1pm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/gammainc',
		'@stdlib/math/base/special/gammaincinv',
		'@stdlib/math/base/special/gammaln'
	]
});

ns.push({
	'alias': 'base.gammaDeltaRatio',
	'path': '@stdlib/math/base/special/gamma-delta-ratio',
	'value': require( '@stdlib/math/base/special/gamma-delta-ratio' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma'
	]
});

ns.push({
	'alias': 'base.gammainc',
	'path': '@stdlib/math/base/special/gammainc',
	'value': require( '@stdlib/math/base/special/gammainc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/gamma1pm1',
		'@stdlib/math/base/special/gammaincinv',
		'@stdlib/math/base/special/gammaln'
	]
});

ns.push({
	'alias': 'base.gammaincinv',
	'path': '@stdlib/math/base/special/gammaincinv',
	'value': require( '@stdlib/math/base/special/gammaincinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/gamma1pm1',
		'@stdlib/math/base/special/gammainc',
		'@stdlib/math/base/special/gammaln'
	]
});

ns.push({
	'alias': 'base.gammaLanczosSum',
	'path': '@stdlib/math/base/special/gamma-lanczos-sum',
	'value': require( '@stdlib/math/base/special/gamma-lanczos-sum' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled'
	]
});

ns.push({
	'alias': 'base.gammaLanczosSumExpGScaled',
	'path': '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled',
	'value': require( '@stdlib/math/base/special/gamma-lanczos-sum-expg-scaled' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/gamma-lanczos-sum'
	]
});

ns.push({
	'alias': 'base.gammaln',
	'path': '@stdlib/math/base/special/gammaln',
	'value': require( '@stdlib/math/base/special/gammaln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma',
		'@stdlib/math/base/special/gammainc',
		'@stdlib/math/base/special/gammaincinv'
	]
});

ns.push({
	'alias': 'base.gcd',
	'path': '@stdlib/math/base/special/gcd',
	'value': require( '@stdlib/math/base/special/gcd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/lcm'
	]
});

ns.push({
	'alias': 'base.getHighWord',
	'path': '@stdlib/number/float64/base/get-high-word',
	'value': require( '@stdlib/number/float64/base/get-high-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/get-low-word',
		'@stdlib/number/float64/base/set-high-word'
	]
});

ns.push({
	'alias': 'base.getLowWord',
	'path': '@stdlib/number/float64/base/get-low-word',
	'value': require( '@stdlib/number/float64/base/get-low-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/get-high-word',
		'@stdlib/number/float64/base/set-high-word'
	]
});

ns.push({
	'alias': 'base.hacovercos',
	'path': '@stdlib/math/base/special/hacovercos',
	'value': require( '@stdlib/math/base/special/hacovercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hacoversin',
		'@stdlib/math/base/special/havercos'
	]
});

ns.push({
	'alias': 'base.hacoversin',
	'path': '@stdlib/math/base/special/hacoversin',
	'value': require( '@stdlib/math/base/special/hacoversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hacovercos',
		'@stdlib/math/base/special/haversin'
	]
});

ns.push({
	'alias': 'base.havercos',
	'path': '@stdlib/math/base/special/havercos',
	'value': require( '@stdlib/math/base/special/havercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/haversin',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.haversin',
	'path': '@stdlib/math/base/special/haversin',
	'value': require( '@stdlib/math/base/special/haversin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/havercos',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.heaviside',
	'path': '@stdlib/math/base/special/heaviside',
	'value': require( '@stdlib/math/base/special/heaviside' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ramp'
	]
});

ns.push({
	'alias': 'base.hermitepoly',
	'path': '@stdlib/math/base/tools/hermitepoly',
	'value': require( '@stdlib/math/base/tools/hermitepoly' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalpoly',
		'@stdlib/math/base/tools/normhermitepoly'
	]
});

ns.push({
	'alias': 'base.hypot',
	'path': '@stdlib/math/base/special/hypot',
	'value': require( '@stdlib/math/base/special/hypot' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.hypotf',
	'path': '@stdlib/math/base/special/hypotf',
	'value': require( '@stdlib/math/base/special/hypotf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hypot'
	]
});

ns.push({
	'alias': 'base.identity',
	'path': '@stdlib/math/base/special/identity',
	'value': require( '@stdlib/math/base/special/identity' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.identityf',
	'path': '@stdlib/math/base/special/identityf',
	'value': require( '@stdlib/math/base/special/identityf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/identityf'
	]
});

ns.push({
	'alias': 'base.imul',
	'path': '@stdlib/math/base/special/imul',
	'value': require( '@stdlib/math/base/special/imul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/imuldw',
		'@stdlib/math/base/special/uimul'
	]
});

ns.push({
	'alias': 'base.imuldw',
	'path': '@stdlib/math/base/special/imuldw',
	'value': require( '@stdlib/math/base/special/imuldw' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/imul',
		'@stdlib/math/base/special/uimuldw'
	]
});

ns.push({
	'alias': 'base.int32ToUint32',
	'path': '@stdlib/number/int32/base/to-uint32',
	'value': require( '@stdlib/number/int32/base/to-uint32' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint32/base/to-int32'
	]
});

ns.push({
	'alias': 'base.inv',
	'path': '@stdlib/math/base/special/inv',
	'value': require( '@stdlib/math/base/special/inv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow'
	]
});

ns.push({
	'alias': 'base.invf',
	'path': '@stdlib/math/base/special/invf',
	'value': require( '@stdlib/math/base/special/invf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/inv'
	]
});

ns.push({
	'alias': 'base.isComposite',
	'path': '@stdlib/math/base/assert/is-composite',
	'value': require( '@stdlib/math/base/assert/is-composite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-integer',
		'@stdlib/math/base/assert/is-prime'
	]
});

ns.push({
	'alias': 'base.isCoprime',
	'path': '@stdlib/math/base/assert/is-coprime',
	'value': require( '@stdlib/math/base/assert/is-coprime' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-composite',
		'@stdlib/math/base/assert/is-prime',
		'@stdlib/math/base/special/gcd'
	]
});

ns.push({
	'alias': 'base.isEven',
	'path': '@stdlib/math/base/assert/is-even',
	'value': require( '@stdlib/math/base/assert/is-even' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-odd'
	]
});

ns.push({
	'alias': 'base.isEvenInt32',
	'path': '@stdlib/math/base/assert/int32-is-even',
	'value': require( '@stdlib/math/base/assert/int32-is-even' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-even',
		'@stdlib/math/base/assert/int32-is-odd'
	]
});

ns.push({
	'alias': 'base.isFinite',
	'path': '@stdlib/math/base/assert/is-finite',
	'value': require( '@stdlib/math/base/assert/is-finite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-infinite'
	]
});

ns.push({
	'alias': 'base.isFinitef',
	'path': '@stdlib/math/base/assert/is-finitef',
	'value': require( '@stdlib/math/base/assert/is-finitef' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-infinitef'
	]
});

ns.push({
	'alias': 'base.isInfinite',
	'path': '@stdlib/math/base/assert/is-infinite',
	'value': require( '@stdlib/math/base/assert/is-infinite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-finite'
	]
});

ns.push({
	'alias': 'base.isInfinitef',
	'path': '@stdlib/math/base/assert/is-infinitef',
	'value': require( '@stdlib/math/base/assert/is-infinitef' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-finitef'
	]
});

ns.push({
	'alias': 'base.isInteger',
	'path': '@stdlib/math/base/assert/is-integer',
	'value': require( '@stdlib/math/base/assert/is-integer' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.isnan',
	'path': '@stdlib/math/base/assert/is-nan',
	'value': require( '@stdlib/math/base/assert/is-nan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-nanf'
	]
});

ns.push({
	'alias': 'base.isnanf',
	'path': '@stdlib/math/base/assert/is-nanf',
	'value': require( '@stdlib/math/base/assert/is-nanf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-nan'
	]
});

ns.push({
	'alias': 'base.isNegativeInteger',
	'path': '@stdlib/math/base/assert/is-negative-integer',
	'value': require( '@stdlib/math/base/assert/is-negative-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-integer',
		'@stdlib/math/base/assert/is-nonnegative-integer',
		'@stdlib/math/base/assert/is-nonpositive-integer',
		'@stdlib/math/base/assert/is-positive-integer'
	]
});

ns.push({
	'alias': 'base.isNegativeZero',
	'path': '@stdlib/math/base/assert/is-negative-zero',
	'value': require( '@stdlib/math/base/assert/is-negative-zero' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-positive-zero'
	]
});

ns.push({
	'alias': 'base.isNegativeZerof',
	'path': '@stdlib/math/base/assert/is-negative-zerof',
	'value': require( '@stdlib/math/base/assert/is-negative-zerof' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-negative-zero',
		'@stdlib/math/base/assert/is-positive-zerof'
	]
});

ns.push({
	'alias': 'base.isNonNegativeInteger',
	'path': '@stdlib/math/base/assert/is-nonnegative-integer',
	'value': require( '@stdlib/math/base/assert/is-nonnegative-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-integer',
		'@stdlib/math/base/assert/is-negative-integer',
		'@stdlib/math/base/assert/is-nonpositive-integer',
		'@stdlib/math/base/assert/is-positive-integer'
	]
});

ns.push({
	'alias': 'base.isNonPositiveInteger',
	'path': '@stdlib/math/base/assert/is-nonpositive-integer',
	'value': require( '@stdlib/math/base/assert/is-nonpositive-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-integer',
		'@stdlib/math/base/assert/is-negative-integer',
		'@stdlib/math/base/assert/is-nonnegative-integer',
		'@stdlib/math/base/assert/is-positive-integer'
	]
});

ns.push({
	'alias': 'base.isOdd',
	'path': '@stdlib/math/base/assert/is-odd',
	'value': require( '@stdlib/math/base/assert/is-odd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-even'
	]
});

ns.push({
	'alias': 'base.isOddInt32',
	'path': '@stdlib/math/base/assert/int32-is-odd',
	'value': require( '@stdlib/math/base/assert/int32-is-odd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/int32-is-even',
		'@stdlib/math/base/assert/is-odd'
	]
});

ns.push({
	'alias': 'base.isPositiveInteger',
	'path': '@stdlib/math/base/assert/is-positive-integer',
	'value': require( '@stdlib/math/base/assert/is-positive-integer' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-integer',
		'@stdlib/math/base/assert/is-negative-integer',
		'@stdlib/math/base/assert/is-nonnegative-integer',
		'@stdlib/math/base/assert/is-nonpositive-integer'
	]
});

ns.push({
	'alias': 'base.isPositiveZero',
	'path': '@stdlib/math/base/assert/is-positive-zero',
	'value': require( '@stdlib/math/base/assert/is-positive-zero' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-negative-zero'
	]
});

ns.push({
	'alias': 'base.isPositiveZerof',
	'path': '@stdlib/math/base/assert/is-positive-zerof',
	'value': require( '@stdlib/math/base/assert/is-positive-zerof' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-negative-zerof',
		'@stdlib/math/base/assert/is-positive-zero'
	]
});

ns.push({
	'alias': 'base.isPow2Uint32',
	'path': '@stdlib/math/base/assert/uint32-is-pow2',
	'value': require( '@stdlib/math/base/assert/uint32-is-pow2' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.isPrime',
	'path': '@stdlib/math/base/assert/is-prime',
	'value': require( '@stdlib/math/base/assert/is-prime' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-composite',
		'@stdlib/math/base/assert/is-integer'
	]
});

ns.push({
	'alias': 'base.isProbability',
	'path': '@stdlib/math/base/assert/is-probability',
	'value': require( '@stdlib/math/base/assert/is-probability' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.isSafeInteger',
	'path': '@stdlib/math/base/assert/is-safe-integer',
	'value': require( '@stdlib/math/base/assert/is-safe-integer' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.kernelBetainc',
	'path': '@stdlib/math/base/special/kernel-betainc',
	'value': require( '@stdlib/math/base/special/kernel-betainc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/betainc'
	]
});

ns.push({
	'alias': 'base.kernelBetaincinv',
	'path': '@stdlib/math/base/special/kernel-betaincinv',
	'value': require( '@stdlib/math/base/special/kernel-betaincinv' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/betaincinv'
	]
});

ns.push({
	'alias': 'base.kernelCos',
	'path': '@stdlib/math/base/special/kernel-cos',
	'value': require( '@stdlib/math/base/special/kernel-cos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/kernel-sin',
		'@stdlib/math/base/special/kernel-tan'
	]
});

ns.push({
	'alias': 'base.kernelSin',
	'path': '@stdlib/math/base/special/kernel-sin',
	'value': require( '@stdlib/math/base/special/kernel-sin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/kernel-cos',
		'@stdlib/math/base/special/kernel-tan',
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.kernelTan',
	'path': '@stdlib/math/base/special/kernel-tan',
	'value': require( '@stdlib/math/base/special/kernel-tan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/kernel-cos',
		'@stdlib/math/base/special/kernel-sin',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.kroneckerDelta',
	'path': '@stdlib/math/base/special/kronecker-delta',
	'value': require( '@stdlib/math/base/special/kronecker-delta' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/dirac-delta'
	]
});

ns.push({
	'alias': 'base.kroneckerDeltaf',
	'path': '@stdlib/math/base/special/kronecker-deltaf',
	'value': require( '@stdlib/math/base/special/kronecker-deltaf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/dirac-deltaf',
		'@stdlib/math/base/special/kronecker-delta'
	]
});

ns.push({
	'alias': 'base.labs',
	'path': '@stdlib/math/base/special/labs',
	'value': require( '@stdlib/math/base/special/labs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs'
	]
});

ns.push({
	'alias': 'base.lcm',
	'path': '@stdlib/math/base/special/lcm',
	'value': require( '@stdlib/math/base/special/lcm' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gcd'
	]
});

ns.push({
	'alias': 'base.ldexp',
	'path': '@stdlib/math/base/special/ldexp',
	'value': require( '@stdlib/math/base/special/ldexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/frexp'
	]
});

ns.push({
	'alias': 'base.ln',
	'path': '@stdlib/math/base/special/ln',
	'value': require( '@stdlib/math/base/special/ln' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/log10',
		'@stdlib/math/base/special/log1p',
		'@stdlib/math/base/special/log2'
	]
});

ns.push({
	'alias': 'base.log',
	'path': '@stdlib/math/base/special/log',
	'value': require( '@stdlib/math/base/special/log' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/log10',
		'@stdlib/math/base/special/log1p',
		'@stdlib/math/base/special/log2'
	]
});

ns.push({
	'alias': 'base.log1mexp',
	'path': '@stdlib/math/base/special/log1mexp',
	'value': require( '@stdlib/math/base/special/log1mexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/log1p',
		'@stdlib/math/base/special/log1pexp'
	]
});

ns.push({
	'alias': 'base.log1p',
	'path': '@stdlib/math/base/special/log1p',
	'value': require( '@stdlib/math/base/special/log1p' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/log'
	]
});

ns.push({
	'alias': 'base.log1pexp',
	'path': '@stdlib/math/base/special/log1pexp',
	'value': require( '@stdlib/math/base/special/log1pexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/log1mexp',
		'@stdlib/math/base/special/log1p'
	]
});

ns.push({
	'alias': 'base.log2',
	'path': '@stdlib/math/base/special/log2',
	'value': require( '@stdlib/math/base/special/log2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp2',
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/log'
	]
});

ns.push({
	'alias': 'base.log10',
	'path': '@stdlib/math/base/special/log10',
	'value': require( '@stdlib/math/base/special/log10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp10',
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/log'
	]
});

ns.push({
	'alias': 'base.logaddexp',
	'path': '@stdlib/math/base/special/logaddexp',
	'value': require( '@stdlib/math/base/special/logaddexp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/ln'
	]
});

ns.push({
	'alias': 'base.logit',
	'path': '@stdlib/math/base/special/logit',
	'value': require( '@stdlib/math/base/special/logit' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.lucas',
	'path': '@stdlib/math/base/special/lucas',
	'value': require( '@stdlib/math/base/special/lucas' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci',
		'@stdlib/math/base/special/negalucas'
	]
});

ns.push({
	'alias': 'base.lucaspoly',
	'path': '@stdlib/math/base/tools/lucaspoly',
	'value': require( '@stdlib/math/base/tools/lucaspoly' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalpoly',
		'@stdlib/math/base/tools/fibpoly'
	]
});

ns.push({
	'alias': 'base.max',
	'path': '@stdlib/math/base/special/max',
	'value': require( '@stdlib/math/base/special/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/min'
	]
});

ns.push({
	'alias': 'base.maxabs',
	'path': '@stdlib/math/base/special/maxabs',
	'value': require( '@stdlib/math/base/special/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/minabs'
	]
});

ns.push({
	'alias': 'base.min',
	'path': '@stdlib/math/base/special/min',
	'value': require( '@stdlib/math/base/special/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/minabs'
	]
});

ns.push({
	'alias': 'base.minabs',
	'path': '@stdlib/math/base/special/minabs',
	'value': require( '@stdlib/math/base/special/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/min'
	]
});

ns.push({
	'alias': 'base.minmax',
	'path': '@stdlib/math/base/special/minmax',
	'value': require( '@stdlib/math/base/special/minmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max',
		'@stdlib/math/base/special/min',
		'@stdlib/math/base/special/minmaxabs'
	]
});

ns.push({
	'alias': 'base.minmaxabs',
	'path': '@stdlib/math/base/special/minmaxabs',
	'value': require( '@stdlib/math/base/special/minmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/maxabs',
		'@stdlib/math/base/special/minabs',
		'@stdlib/math/base/special/minmax'
	]
});

ns.push({
	'alias': 'base.modf',
	'path': '@stdlib/math/base/special/modf',
	'value': require( '@stdlib/math/base/special/modf' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.ndarray',
	'path': '@stdlib/ndarray/base/ctor',
	'value': require( '@stdlib/ndarray/base/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'base.ndarrayUnary',
	'path': '@stdlib/ndarray/base/unary',
	'value': require( '@stdlib/ndarray/base/unary' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/base/binary',
		'@stdlib/ndarray/base/nullary',
		'@stdlib/ndarray/base/quaternary',
		'@stdlib/ndarray/base/quinary',
		'@stdlib/ndarray/base/ternary',
		'@stdlib/ndarray/dispatch'
	]
});

ns.push({
	'alias': 'base.negafibonacci',
	'path': '@stdlib/math/base/special/negafibonacci',
	'value': require( '@stdlib/math/base/special/negafibonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci',
		'@stdlib/math/base/special/negalucas'
	]
});

ns.push({
	'alias': 'base.negalucas',
	'path': '@stdlib/math/base/special/negalucas',
	'value': require( '@stdlib/math/base/special/negalucas' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci',
		'@stdlib/math/base/special/lucas',
		'@stdlib/math/base/special/negafibonacci'
	]
});

ns.push({
	'alias': 'base.nonfibonacci',
	'path': '@stdlib/math/base/special/nonfibonacci',
	'value': require( '@stdlib/math/base/special/nonfibonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci'
	]
});

ns.push({
	'alias': 'base.normalize',
	'path': '@stdlib/number/float64/base/normalize',
	'value': require( '@stdlib/number/float64/base/normalize' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/normalize'
	]
});

ns.push({
	'alias': 'base.normalizef',
	'path': '@stdlib/number/float32/base/normalize',
	'value': require( '@stdlib/number/float32/base/normalize' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/normalize'
	]
});

ns.push({
	'alias': 'base.normhermitepoly',
	'path': '@stdlib/math/base/tools/normhermitepoly',
	'value': require( '@stdlib/math/base/tools/normhermitepoly' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/tools/evalpoly',
		'@stdlib/math/base/tools/hermitepoly'
	]
});

ns.push({
	'alias': 'base.pdiff',
	'path': '@stdlib/math/base/special/pdiff',
	'value': require( '@stdlib/math/base/special/pdiff' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.pdifff',
	'path': '@stdlib/math/base/special/pdifff',
	'value': require( '@stdlib/math/base/special/pdifff' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pdiff'
	]
});

ns.push({
	'alias': 'base.polygamma',
	'path': '@stdlib/math/base/special/polygamma',
	'value': require( '@stdlib/math/base/special/polygamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/trigamma',
		'@stdlib/math/base/special/digamma',
		'@stdlib/math/base/special/gamma'
	]
});

ns.push({
	'alias': 'base.pow',
	'path': '@stdlib/math/base/special/pow',
	'value': require( '@stdlib/math/base/special/pow' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/exp',
		'@stdlib/math/base/special/powm1'
	]
});

ns.push({
	'alias': 'base.powm1',
	'path': '@stdlib/math/base/special/powm1',
	'value': require( '@stdlib/math/base/special/powm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow'
	]
});

ns.push({
	'alias': 'base.rad2deg',
	'path': '@stdlib/math/base/special/rad2deg',
	'value': require( '@stdlib/math/base/special/rad2deg' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/deg2rad'
	]
});

ns.push({
	'alias': 'base.ramp',
	'path': '@stdlib/math/base/special/ramp',
	'value': require( '@stdlib/math/base/special/ramp' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/heaviside'
	]
});

ns.push({
	'alias': 'base.rampf',
	'path': '@stdlib/math/base/special/rampf',
	'value': require( '@stdlib/math/base/special/rampf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/heavisidef',
		'@stdlib/math/base/special/ramp'
	]
});

ns.push({
	'alias': 'base.random.arcsine',
	'path': '@stdlib/random/base/arcsine',
	'value': require( '@stdlib/random/base/arcsine' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/beta'
	]
});

ns.push({
	'alias': 'base.random.bernoulli',
	'path': '@stdlib/random/base/bernoulli',
	'value': require( '@stdlib/random/base/bernoulli' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/binomial'
	]
});

ns.push({
	'alias': 'base.random.beta',
	'path': '@stdlib/random/base/beta',
	'value': require( '@stdlib/random/base/beta' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.betaprime',
	'path': '@stdlib/random/base/betaprime',
	'value': require( '@stdlib/random/base/betaprime' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.binomial',
	'path': '@stdlib/random/base/binomial',
	'value': require( '@stdlib/random/base/binomial' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.boxMuller',
	'path': '@stdlib/random/base/box-muller',
	'value': require( '@stdlib/random/base/box-muller' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.cauchy',
	'path': '@stdlib/random/base/cauchy',
	'value': require( '@stdlib/random/base/cauchy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.chi',
	'path': '@stdlib/random/base/chi',
	'value': require( '@stdlib/random/base/chi' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.chisquare',
	'path': '@stdlib/random/base/chisquare',
	'value': require( '@stdlib/random/base/chisquare' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.cosine',
	'path': '@stdlib/random/base/cosine',
	'value': require( '@stdlib/random/base/cosine' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.discreteUniform',
	'path': '@stdlib/random/base/discrete-uniform',
	'value': require( '@stdlib/random/base/discrete-uniform' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.erlang',
	'path': '@stdlib/random/base/erlang',
	'value': require( '@stdlib/random/base/erlang' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.exponential',
	'path': '@stdlib/random/base/exponential',
	'value': require( '@stdlib/random/base/exponential' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.f',
	'path': '@stdlib/random/base/f',
	'value': require( '@stdlib/random/base/f' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.frechet',
	'path': '@stdlib/random/base/frechet',
	'value': require( '@stdlib/random/base/frechet' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.gamma',
	'path': '@stdlib/random/base/gamma',
	'value': require( '@stdlib/random/base/gamma' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.geometric',
	'path': '@stdlib/random/base/geometric',
	'value': require( '@stdlib/random/base/geometric' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.gumbel',
	'path': '@stdlib/random/base/gumbel',
	'value': require( '@stdlib/random/base/gumbel' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.hypergeometric',
	'path': '@stdlib/random/base/hypergeometric',
	'value': require( '@stdlib/random/base/hypergeometric' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.improvedZiggurat',
	'path': '@stdlib/random/base/improved-ziggurat',
	'value': require( '@stdlib/random/base/improved-ziggurat' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.invgamma',
	'path': '@stdlib/random/base/invgamma',
	'value': require( '@stdlib/random/base/invgamma' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.kumaraswamy',
	'path': '@stdlib/random/base/kumaraswamy',
	'value': require( '@stdlib/random/base/kumaraswamy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.laplace',
	'path': '@stdlib/random/base/laplace',
	'value': require( '@stdlib/random/base/laplace' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.levy',
	'path': '@stdlib/random/base/levy',
	'value': require( '@stdlib/random/base/levy' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.logistic',
	'path': '@stdlib/random/base/logistic',
	'value': require( '@stdlib/random/base/logistic' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.lognormal',
	'path': '@stdlib/random/base/lognormal',
	'value': require( '@stdlib/random/base/lognormal' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.minstd',
	'path': '@stdlib/random/base/minstd',
	'value': require( '@stdlib/random/base/minstd' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/minstd-shuffle',
		'@stdlib/random/base/mt19937',
		'@stdlib/random/base/randi'
	]
});

ns.push({
	'alias': 'base.random.minstdShuffle',
	'path': '@stdlib/random/base/minstd-shuffle',
	'value': require( '@stdlib/random/base/minstd-shuffle' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/minstd',
		'@stdlib/random/base/mt19937',
		'@stdlib/random/base/randi'
	]
});

ns.push({
	'alias': 'base.random.mt19937',
	'path': '@stdlib/random/base/mt19937',
	'value': require( '@stdlib/random/base/mt19937' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/minstd',
		'@stdlib/random/base/randi'
	]
});

ns.push({
	'alias': 'base.random.negativeBinomial',
	'path': '@stdlib/random/base/negative-binomial',
	'value': require( '@stdlib/random/base/negative-binomial' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.normal',
	'path': '@stdlib/random/base/normal',
	'value': require( '@stdlib/random/base/normal' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.pareto1',
	'path': '@stdlib/random/base/pareto-type1',
	'value': require( '@stdlib/random/base/pareto-type1' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.poisson',
	'path': '@stdlib/random/base/poisson',
	'value': require( '@stdlib/random/base/poisson' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.randi',
	'path': '@stdlib/random/base/randi',
	'value': require( '@stdlib/random/base/randi' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/minstd',
		'@stdlib/random/base/minstd-shuffle',
		'@stdlib/random/base/mt19937'
	]
});

ns.push({
	'alias': 'base.random.randn',
	'path': '@stdlib/random/base/randn',
	'value': require( '@stdlib/random/base/randn' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/improved-ziggurat',
		'@stdlib/random/base/randu'
	]
});

ns.push({
	'alias': 'base.random.randu',
	'path': '@stdlib/random/base/randu',
	'value': require( '@stdlib/random/base/randu' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/discrete-uniform',
		'@stdlib/random/base/randn'
	]
});

ns.push({
	'alias': 'base.random.rayleigh',
	'path': '@stdlib/random/base/rayleigh',
	'value': require( '@stdlib/random/base/rayleigh' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.t',
	'path': '@stdlib/random/base/t',
	'value': require( '@stdlib/random/base/t' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.triangular',
	'path': '@stdlib/random/base/triangular',
	'value': require( '@stdlib/random/base/triangular' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.random.uniform',
	'path': '@stdlib/random/base/uniform',
	'value': require( '@stdlib/random/base/uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/base/discrete-uniform',
		'@stdlib/random/base/randu'
	]
});

ns.push({
	'alias': 'base.random.weibull',
	'path': '@stdlib/random/base/weibull',
	'value': require( '@stdlib/random/base/weibull' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.reldiff',
	'path': '@stdlib/math/base/utils/relative-difference',
	'value': require( '@stdlib/math/base/utils/relative-difference' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/utils/absolute-difference',
		'@stdlib/math/base/utils/float64-epsilon-difference'
	]
});

ns.push({
	'alias': 'base.rempio2',
	'path': '@stdlib/math/base/special/rempio2',
	'value': require( '@stdlib/math/base/special/rempio2' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.risingFactorial',
	'path': '@stdlib/math/base/special/rising-factorial',
	'value': require( '@stdlib/math/base/special/rising-factorial' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/falling-factorial'
	]
});

ns.push({
	'alias': 'base.rotl32',
	'path': '@stdlib/number/uint32/base/rotl',
	'value': require( '@stdlib/number/uint32/base/rotl' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint32/base/rotr'
	]
});

ns.push({
	'alias': 'base.rotr32',
	'path': '@stdlib/number/uint32/base/rotr',
	'value': require( '@stdlib/number/uint32/base/rotr' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/uint32/base/rotl'
	]
});

ns.push({
	'alias': 'base.round',
	'path': '@stdlib/math/base/special/round',
	'value': require( '@stdlib/math/base/special/round' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/roundn',
		'@stdlib/math/base/special/trunc'
	]
});

ns.push({
	'alias': 'base.round2',
	'path': '@stdlib/math/base/special/round2',
	'value': require( '@stdlib/math/base/special/round2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/round10'
	]
});

ns.push({
	'alias': 'base.round10',
	'path': '@stdlib/math/base/special/round10',
	'value': require( '@stdlib/math/base/special/round10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/round2'
	]
});

ns.push({
	'alias': 'base.roundb',
	'path': '@stdlib/math/base/special/roundb',
	'value': require( '@stdlib/math/base/special/roundb' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilb',
		'@stdlib/math/base/special/floorb',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/roundn'
	]
});

ns.push({
	'alias': 'base.roundn',
	'path': '@stdlib/math/base/special/roundn',
	'value': require( '@stdlib/math/base/special/roundn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floorn',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/roundb'
	]
});

ns.push({
	'alias': 'base.roundsd',
	'path': '@stdlib/math/base/special/roundsd',
	'value': require( '@stdlib/math/base/special/roundsd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilsd',
		'@stdlib/math/base/special/floorsd',
		'@stdlib/math/base/special/round',
		'@stdlib/math/base/special/truncsd'
	]
});

ns.push({
	'alias': 'base.rsqrt',
	'path': '@stdlib/math/base/special/rsqrt',
	'value': require( '@stdlib/math/base/special/rsqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.rsqrtf',
	'path': '@stdlib/math/base/special/rsqrtf',
	'value': require( '@stdlib/math/base/special/rsqrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/rsqrt',
		'@stdlib/math/base/special/sqrtf'
	]
});

ns.push({
	'alias': 'base.setHighWord',
	'path': '@stdlib/number/float64/base/set-high-word',
	'value': require( '@stdlib/number/float64/base/set-high-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/get-high-word',
		'@stdlib/number/float64/base/set-low-word'
	]
});

ns.push({
	'alias': 'base.setLowWord',
	'path': '@stdlib/number/float64/base/set-low-word',
	'value': require( '@stdlib/number/float64/base/set-low-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/get-low-word',
		'@stdlib/number/float64/base/set-high-word'
	]
});

ns.push({
	'alias': 'base.sici',
	'path': '@stdlib/math/base/special/sici',
	'value': require( '@stdlib/math/base/special/sici' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.signbit',
	'path': '@stdlib/number/float64/base/signbit',
	'value': require( '@stdlib/number/float64/base/signbit' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/signbit'
	]
});

ns.push({
	'alias': 'base.signbitf',
	'path': '@stdlib/number/float32/base/signbit',
	'value': require( '@stdlib/number/float32/base/signbit' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/signbit'
	]
});

ns.push({
	'alias': 'base.significandf',
	'path': '@stdlib/number/float32/base/significand',
	'value': require( '@stdlib/number/float32/base/significand' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.signum',
	'path': '@stdlib/math/base/special/signum',
	'value': require( '@stdlib/math/base/special/signum' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.signumf',
	'path': '@stdlib/math/base/special/signumf',
	'value': require( '@stdlib/math/base/special/signumf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/signum'
	]
});

ns.push({
	'alias': 'base.sin',
	'path': '@stdlib/math/base/special/sin',
	'value': require( '@stdlib/math/base/special/sin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sinpi',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.sinc',
	'path': '@stdlib/math/base/special/sinc',
	'value': require( '@stdlib/math/base/special/sinc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.sincos',
	'path': '@stdlib/math/base/special/sincos',
	'value': require( '@stdlib/math/base/special/sincos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/sincospi'
	]
});

ns.push({
	'alias': 'base.sincospi',
	'path': '@stdlib/math/base/special/sincospi',
	'value': require( '@stdlib/math/base/special/sincospi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cospi',
		'@stdlib/math/base/special/sincos',
		'@stdlib/math/base/special/sinpi'
	]
});

ns.push({
	'alias': 'base.sinh',
	'path': '@stdlib/math/base/special/sinh',
	'value': require( '@stdlib/math/base/special/sinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cosh',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/tanh'
	]
});

ns.push({
	'alias': 'base.sinpi',
	'path': '@stdlib/math/base/special/sinpi',
	'value': require( '@stdlib/math/base/special/sinpi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.spence',
	'path': '@stdlib/math/base/special/spence',
	'value': require( '@stdlib/math/base/special/spence' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.sqrt',
	'path': '@stdlib/math/base/special/sqrt',
	'value': require( '@stdlib/math/base/special/sqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrt',
		'@stdlib/math/base/special/rsqrt'
	]
});

ns.push({
	'alias': 'base.sqrt1pm1',
	'path': '@stdlib/math/base/special/sqrt1pm1',
	'value': require( '@stdlib/math/base/special/sqrt1pm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.sqrtf',
	'path': '@stdlib/math/base/special/sqrtf',
	'value': require( '@stdlib/math/base/special/sqrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrtf',
		'@stdlib/math/base/special/rsqrtf',
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.strided.binary',
	'path': '@stdlib/strided/base/binary',
	'value': require( '@stdlib/strided/base/binary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.ccopy',
	'path': '@stdlib/blas/base/ccopy',
	'value': require( '@stdlib/blas/base/ccopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/cswap',
		'@stdlib/blas/base/zcopy',
		'@stdlib/blas/ccopy'
	]
});

ns.push({
	'alias': 'base.strided.cswap',
	'path': '@stdlib/blas/base/cswap',
	'value': require( '@stdlib/blas/base/cswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ccopy',
		'@stdlib/blas/base/zswap',
		'@stdlib/blas/cswap'
	]
});

ns.push({
	'alias': 'base.strided.cumax',
	'path': '@stdlib/stats/base/cumax',
	'value': require( '@stdlib/stats/base/cumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/curange',
		'@stdlib/stats/base/dcumax',
		'@stdlib/stats/base/nancumax',
		'@stdlib/stats/base/scumax'
	]
});

ns.push({
	'alias': 'base.strided.cumaxabs',
	'path': '@stdlib/stats/base/cumaxabs',
	'value': require( '@stdlib/stats/base/cumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/base/curangeabs',
		'@stdlib/stats/base/dcumaxabs',
		'@stdlib/stats/base/nancumaxabs',
		'@stdlib/stats/base/scumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.cumin',
	'path': '@stdlib/stats/base/cumin',
	'value': require( '@stdlib/stats/base/cumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/curange',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/nancumin',
		'@stdlib/stats/base/scumin'
	]
});

ns.push({
	'alias': 'base.strided.cuminabs',
	'path': '@stdlib/stats/base/cuminabs',
	'value': require( '@stdlib/stats/base/cuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/curangeabs',
		'@stdlib/stats/base/dcuminabs',
		'@stdlib/stats/base/nancuminabs',
		'@stdlib/stats/base/scuminabs'
	]
});

ns.push({
	'alias': 'base.strided.dapx',
	'path': '@stdlib/blas/ext/base/dapx',
	'value': require( '@stdlib/blas/ext/base/dapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dwapx',
		'@stdlib/blas/ext/base/gapx',
		'@stdlib/blas/ext/base/sapx'
	]
});

ns.push({
	'alias': 'base.strided.dapxsum',
	'path': '@stdlib/blas/ext/base/dapxsum',
	'value': require( '@stdlib/blas/ext/base/dapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumkbn',
	'path': '@stdlib/blas/ext/base/dapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/dapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gapxsumkbn',
		'@stdlib/blas/ext/base/sapxsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumkbn2',
	'path': '@stdlib/blas/ext/base/dapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gapxsumkbn2',
		'@stdlib/blas/ext/base/sapxsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumors',
	'path': '@stdlib/blas/ext/base/dapxsumors',
	'value': require( '@stdlib/blas/ext/base/dapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gapxsumors',
		'@stdlib/blas/ext/base/sapxsumors'
	]
});

ns.push({
	'alias': 'base.strided.dapxsumpw',
	'path': '@stdlib/blas/ext/base/dapxsumpw',
	'value': require( '@stdlib/blas/ext/base/dapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dasum',
	'path': '@stdlib/blas/base/dasum',
	'value': require( '@stdlib/blas/base/dasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/dasum',
		'@stdlib/blas/ext/base/dsum'
	]
});

ns.push({
	'alias': 'base.strided.dasumpw',
	'path': '@stdlib/blas/ext/base/dasumpw',
	'value': require( '@stdlib/blas/ext/base/dasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/ext/base/dnanasumpw',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gasumpw',
		'@stdlib/blas/ext/base/sasumpw',
		'@stdlib/blas/ext/dasumpw'
	]
});

ns.push({
	'alias': 'base.strided.daxpy',
	'path': '@stdlib/blas/base/daxpy',
	'value': require( '@stdlib/blas/base/daxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/daxpy'
	]
});

ns.push({
	'alias': 'base.strided.dcopy',
	'path': '@stdlib/blas/base/dcopy',
	'value': require( '@stdlib/blas/base/dcopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/dcopy'
	]
});

ns.push({
	'alias': 'base.strided.dcumax',
	'path': '@stdlib/stats/base/dcumax',
	'value': require( '@stdlib/stats/base/dcumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/dcurange',
		'@stdlib/stats/base/dnancumax',
		'@stdlib/stats/base/scumax'
	]
});

ns.push({
	'alias': 'base.strided.dcumaxabs',
	'path': '@stdlib/stats/base/dcumaxabs',
	'value': require( '@stdlib/stats/base/dcumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/base/dcumax',
		'@stdlib/stats/base/dcuminabs',
		'@stdlib/stats/base/dnancumaxabs',
		'@stdlib/stats/base/scumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dcumin',
	'path': '@stdlib/stats/base/dcumin',
	'value': require( '@stdlib/stats/base/dcumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/dcumax',
		'@stdlib/stats/base/dcurange',
		'@stdlib/stats/base/dnancumin',
		'@stdlib/stats/base/scumin'
	]
});

ns.push({
	'alias': 'base.strided.dcuminabs',
	'path': '@stdlib/stats/base/dcuminabs',
	'value': require( '@stdlib/stats/base/dcuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/base/dcumaxabs',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/dnancuminabs',
		'@stdlib/stats/base/scuminabs'
	]
});

ns.push({
	'alias': 'base.strided.dcusum',
	'path': '@stdlib/blas/ext/base/dcusum',
	'value': require( '@stdlib/blas/ext/base/dcusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/dnancusum',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/scusum'
	]
});

ns.push({
	'alias': 'base.strided.dcusumkbn',
	'path': '@stdlib/blas/ext/base/dcusumkbn',
	'value': require( '@stdlib/blas/ext/base/dcusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumkbn',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/scusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dcusumkbn2',
	'path': '@stdlib/blas/ext/base/dcusumkbn2',
	'value': require( '@stdlib/blas/ext/base/dcusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumkbn2',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/scusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dcusumors',
	'path': '@stdlib/blas/ext/base/dcusumors',
	'value': require( '@stdlib/blas/ext/base/dcusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumors',
		'@stdlib/blas/ext/base/gcusumors',
		'@stdlib/blas/ext/base/scusumors'
	]
});

ns.push({
	'alias': 'base.strided.dcusumpw',
	'path': '@stdlib/blas/ext/base/dcusumpw',
	'value': require( '@stdlib/blas/ext/base/dcusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/dnancusumpw',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/scusumpw'
	]
});

ns.push({
	'alias': 'base.strided.ddot',
	'path': '@stdlib/blas/base/ddot',
	'value': require( '@stdlib/blas/base/ddot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/gdot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/ddot'
	]
});

ns.push({
	'alias': 'base.strided.dfill',
	'path': '@stdlib/blas/ext/base/dfill',
	'value': require( '@stdlib/blas/ext/base/dfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/base/sfill',
		'@stdlib/blas/ext/dfill'
	]
});

ns.push({
	'alias': 'base.strided.dmap',
	'path': '@stdlib/strided/base/dmap',
	'value': require( '@stdlib/strided/base/dmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.dmax',
	'path': '@stdlib/stats/base/dmax',
	'value': require( '@stdlib/stats/base/dmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/smax'
	]
});

ns.push({
	'alias': 'base.strided.dmaxabs',
	'path': '@stdlib/stats/base/dmaxabs',
	'value': require( '@stdlib/stats/base/dmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/smaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dmaxabssorted',
	'path': '@stdlib/stats/base/dmaxabssorted',
	'value': require( '@stdlib/stats/base/dmaxabssorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/dminabssorted',
		'@stdlib/stats/base/dnanmaxabssorted',
		'@stdlib/stats/base/maxabssorted',
		'@stdlib/stats/base/smaxabssorted'
	]
});

ns.push({
	'alias': 'base.strided.dmaxsorted',
	'path': '@stdlib/stats/base/dmaxsorted',
	'value': require( '@stdlib/stats/base/dmaxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dminsorted',
		'@stdlib/stats/base/dnanmaxsorted',
		'@stdlib/stats/base/maxsorted',
		'@stdlib/stats/base/smaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.dmean',
	'path': '@stdlib/stats/base/dmean',
	'value': require( '@stdlib/stats/base/dmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.dmeankbn',
	'path': '@stdlib/stats/base/dmeankbn',
	'value': require( '@stdlib/stats/base/dmeankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeankbn',
		'@stdlib/stats/base/meankbn',
		'@stdlib/stats/base/smeankbn'
	]
});

ns.push({
	'alias': 'base.strided.dmeankbn2',
	'path': '@stdlib/stats/base/dmeankbn2',
	'value': require( '@stdlib/stats/base/dmeankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeankbn2',
		'@stdlib/stats/base/meankbn2',
		'@stdlib/stats/base/smeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.dmeanli',
	'path': '@stdlib/stats/base/dmeanli',
	'value': require( '@stdlib/stats/base/dmeanli' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmeanlipw',
		'@stdlib/stats/base/dnanmeanli',
		'@stdlib/stats/base/meanli',
		'@stdlib/stats/base/smeanli'
	]
});

ns.push({
	'alias': 'base.strided.dmeanlipw',
	'path': '@stdlib/stats/base/dmeanlipw',
	'value': require( '@stdlib/stats/base/dmeanlipw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmeanli',
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/dnanmeanlipw',
		'@stdlib/stats/base/meanlipw',
		'@stdlib/stats/base/smeanlipw'
	]
});

ns.push({
	'alias': 'base.strided.dmeanors',
	'path': '@stdlib/stats/base/dmeanors',
	'value': require( '@stdlib/stats/base/dmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.dmeanpn',
	'path': '@stdlib/stats/base/dmeanpn',
	'value': require( '@stdlib/stats/base/dmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanpw',
	'path': '@stdlib/stats/base/dmeanpw',
	'value': require( '@stdlib/stats/base/dmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/base/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dmeanstdev',
	'path': '@stdlib/stats/base/dmeanstdev',
	'value': require( '@stdlib/stats/base/dmeanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmeanvar',
		'@stdlib/stats/base/dnanmeanstdev',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/meanstdev',
		'@stdlib/stats/base/smeanstdev'
	]
});

ns.push({
	'alias': 'base.strided.dmeanstdevpn',
	'path': '@stdlib/stats/base/dmeanstdevpn',
	'value': require( '@stdlib/stats/base/dmeanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dmeanstdev',
		'@stdlib/stats/base/dmeanvarpn',
		'@stdlib/stats/base/dnanmeanstdevpn',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/meanstdevpn',
		'@stdlib/stats/base/smeanstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanvar',
	'path': '@stdlib/stats/base/dmeanvar',
	'value': require( '@stdlib/stats/base/dmeanvar' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanvar',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/meanvar',
		'@stdlib/stats/base/smeanvar'
	]
});

ns.push({
	'alias': 'base.strided.dmeanvarpn',
	'path': '@stdlib/stats/base/dmeanvarpn',
	'value': require( '@stdlib/stats/base/dmeanvarpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dmeanstdevpn',
		'@stdlib/stats/base/dmeanvar',
		'@stdlib/stats/base/dnanmeanvarpn',
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/meanvarpn',
		'@stdlib/stats/base/smeanvarpn'
	]
});

ns.push({
	'alias': 'base.strided.dmeanwd',
	'path': '@stdlib/stats/base/dmeanwd',
	'value': require( '@stdlib/stats/base/dmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dmediansorted',
	'path': '@stdlib/stats/base/dmediansorted',
	'value': require( '@stdlib/stats/base/dmediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmedian',
		'@stdlib/stats/base/dnanmediansorted',
		'@stdlib/stats/base/mediansorted',
		'@stdlib/stats/base/smediansorted'
	]
});

ns.push({
	'alias': 'base.strided.dmidrange',
	'path': '@stdlib/stats/base/dmidrange',
	'value': require( '@stdlib/stats/base/dmidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanmidrange',
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/midrange',
		'@stdlib/stats/base/smidrange'
	]
});

ns.push({
	'alias': 'base.strided.dmin',
	'path': '@stdlib/stats/base/dmin',
	'value': require( '@stdlib/stats/base/dmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/smin'
	]
});

ns.push({
	'alias': 'base.strided.dminabs',
	'path': '@stdlib/stats/base/dminabs',
	'value': require( '@stdlib/stats/base/dminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/sminabs'
	]
});

ns.push({
	'alias': 'base.strided.dminsorted',
	'path': '@stdlib/stats/base/dminsorted',
	'value': require( '@stdlib/stats/base/dminsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/dnanminsorted',
		'@stdlib/stats/base/minsorted',
		'@stdlib/stats/base/sminsorted'
	]
});

ns.push({
	'alias': 'base.strided.dmskmap',
	'path': '@stdlib/strided/base/dmskmap',
	'value': require( '@stdlib/strided/base/dmskmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/mskunary',
		'@stdlib/strided/base/smskmap'
	]
});

ns.push({
	'alias': 'base.strided.dmskmax',
	'path': '@stdlib/stats/base/dmskmax',
	'value': require( '@stdlib/stats/base/dmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/smskmax'
	]
});

ns.push({
	'alias': 'base.strided.dmskmin',
	'path': '@stdlib/stats/base/dmskmin',
	'value': require( '@stdlib/stats/base/dmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/smskmin'
	]
});

ns.push({
	'alias': 'base.strided.dmskrange',
	'path': '@stdlib/stats/base/dmskrange',
	'value': require( '@stdlib/stats/base/dmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/mskrange',
		'@stdlib/stats/base/smskrange'
	]
});

ns.push({
	'alias': 'base.strided.dnanasum',
	'path': '@stdlib/blas/ext/base/dnanasum',
	'value': require( '@stdlib/blas/ext/base/dnanasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/dnanasumpw',
		'@stdlib/blas/ext/base/snanasum',
		'@stdlib/blas/ext/dnanasum'
	]
});

ns.push({
	'alias': 'base.strided.dnanasumors',
	'path': '@stdlib/blas/ext/base/dnanasumors',
	'value': require( '@stdlib/blas/ext/base/dnanasumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dasumors',
		'@stdlib/blas/ext/base/dnanasum',
		'@stdlib/blas/ext/base/snanasumors',
		'@stdlib/blas/ext/dnanasumors'
	]
});

ns.push({
	'alias': 'base.strided.dnanmax',
	'path': '@stdlib/stats/base/dnanmax',
	'value': require( '@stdlib/stats/base/dnanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.dnanmaxabs',
	'path': '@stdlib/stats/base/dnanmaxabs',
	'value': require( '@stdlib/stats/base/dnanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.dnanmean',
	'path': '@stdlib/stats/base/dnanmean',
	'value': require( '@stdlib/stats/base/dnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanors',
	'path': '@stdlib/stats/base/dnanmeanors',
	'value': require( '@stdlib/stats/base/dnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanpn',
	'path': '@stdlib/stats/base/dnanmeanpn',
	'value': require( '@stdlib/stats/base/dnanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanpw',
	'path': '@stdlib/stats/base/dnanmeanpw',
	'value': require( '@stdlib/stats/base/dnanmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanpw',
		'@stdlib/stats/base/snanmeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanmeanwd',
	'path': '@stdlib/stats/base/dnanmeanwd',
	'value': require( '@stdlib/stats/base/dnanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dnanmin',
	'path': '@stdlib/stats/base/dnanmin',
	'value': require( '@stdlib/stats/base/dnanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.dnanminabs',
	'path': '@stdlib/stats/base/dnanminabs',
	'value': require( '@stdlib/stats/base/dnanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskmax',
	'path': '@stdlib/stats/base/dnanmskmax',
	'value': require( '@stdlib/stats/base/dnanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskmin',
	'path': '@stdlib/stats/base/dnanmskmin',
	'value': require( '@stdlib/stats/base/dnanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.dnanmskrange',
	'path': '@stdlib/stats/base/dnanmskrange',
	'value': require( '@stdlib/stats/base/dnanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskrange',
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/nanmskrange',
		'@stdlib/stats/base/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.dnannsum',
	'path': '@stdlib/blas/ext/base/dnannsum',
	'value': require( '@stdlib/blas/ext/base/dnannsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gnannsum',
		'@stdlib/blas/ext/base/snannsum'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumkbn',
	'path': '@stdlib/blas/ext/base/dnannsumkbn',
	'value': require( '@stdlib/blas/ext/base/dnannsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnannsumkbn',
		'@stdlib/blas/ext/base/snannsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumkbn2',
	'path': '@stdlib/blas/ext/base/dnannsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dnannsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnannsumkbn2',
		'@stdlib/blas/ext/base/snannsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumors',
	'path': '@stdlib/blas/ext/base/dnannsumors',
	'value': require( '@stdlib/blas/ext/base/dnannsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumpw',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnannsumors',
		'@stdlib/blas/ext/base/snannsumors'
	]
});

ns.push({
	'alias': 'base.strided.dnannsumpw',
	'path': '@stdlib/blas/ext/base/dnannsumpw',
	'value': require( '@stdlib/blas/ext/base/dnannsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsum',
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/dnannsumkbn2',
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnannsumpw',
		'@stdlib/blas/ext/base/snannsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanrange',
	'path': '@stdlib/stats/base/dnanrange',
	'value': require( '@stdlib/stats/base/dnanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdev',
	'path': '@stdlib/stats/base/dnanstdev',
	'value': require( '@stdlib/stats/base/dnanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdev'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevch',
	'path': '@stdlib/stats/base/dnanstdevch',
	'value': require( '@stdlib/stats/base/dnanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/snanstdevch'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevpn',
	'path': '@stdlib/stats/base/dnanstdevpn',
	'value': require( '@stdlib/stats/base/dnanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/snanstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevtk',
	'path': '@stdlib/stats/base/dnanstdevtk',
	'value': require( '@stdlib/stats/base/dnanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/snanstdevtk'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevwd',
	'path': '@stdlib/stats/base/dnanstdevwd',
	'value': require( '@stdlib/stats/base/dnanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/snanstdevwd'
	]
});

ns.push({
	'alias': 'base.strided.dnanstdevyc',
	'path': '@stdlib/stats/base/dnanstdevyc',
	'value': require( '@stdlib/stats/base/dnanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/snanstdevyc'
	]
});

ns.push({
	'alias': 'base.strided.dnansum',
	'path': '@stdlib/blas/ext/base/dnansum',
	'value': require( '@stdlib/blas/ext/base/dnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gnansum'
	]
});

ns.push({
	'alias': 'base.strided.dnansumkbn',
	'path': '@stdlib/blas/ext/base/dnansumkbn',
	'value': require( '@stdlib/blas/ext/base/dnansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/snansumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dnansumkbn2',
	'path': '@stdlib/blas/ext/base/dnansumkbn2',
	'value': require( '@stdlib/blas/ext/base/dnansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dnansumors',
	'path': '@stdlib/blas/ext/base/dnansumors',
	'value': require( '@stdlib/blas/ext/base/dnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.dnansumpw',
	'path': '@stdlib/blas/ext/base/dnansumpw',
	'value': require( '@stdlib/blas/ext/base/dnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariance',
	'path': '@stdlib/stats/base/dnanvariance',
	'value': require( '@stdlib/stats/base/dnanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dnanvarm',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariance'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancech',
	'path': '@stdlib/stats/base/dnanvariancech',
	'value': require( '@stdlib/stats/base/dnanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/snanvariancech'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancepn',
	'path': '@stdlib/stats/base/dnanvariancepn',
	'value': require( '@stdlib/stats/base/dnanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/snanvariancepn'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancetk',
	'path': '@stdlib/stats/base/dnanvariancetk',
	'value': require( '@stdlib/stats/base/dnanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/snanvariancetk'
	]
});

ns.push({
	'alias': 'base.strided.dnanvariancewd',
	'path': '@stdlib/stats/base/dnanvariancewd',
	'value': require( '@stdlib/stats/base/dnanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/snanvariancewd'
	]
});

ns.push({
	'alias': 'base.strided.dnanvarianceyc',
	'path': '@stdlib/stats/base/dnanvarianceyc',
	'value': require( '@stdlib/stats/base/dnanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/snanvarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.dnrm2',
	'path': '@stdlib/blas/base/dnrm2',
	'value': require( '@stdlib/blas/base/dnrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gnrm2',
		'@stdlib/blas/base/snrm2',
		'@stdlib/blas/dnrm2'
	]
});

ns.push({
	'alias': 'base.strided.drange',
	'path': '@stdlib/stats/base/drange',
	'value': require( '@stdlib/stats/base/drange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.drev',
	'path': '@stdlib/blas/ext/base/drev',
	'value': require( '@stdlib/blas/ext/base/drev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/grev',
		'@stdlib/blas/ext/base/srev',
		'@stdlib/blas/ext/drev'
	]
});

ns.push({
	'alias': 'base.strided.dsapxsum',
	'path': '@stdlib/blas/ext/base/dsapxsum',
	'value': require( '@stdlib/blas/ext/base/dsapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.dsapxsumpw',
	'path': '@stdlib/blas/ext/base/dsapxsumpw',
	'value': require( '@stdlib/blas/ext/base/dsapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/dsapxsum',
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.dscal',
	'path': '@stdlib/blas/base/dscal',
	'value': require( '@stdlib/blas/base/dscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gscal',
		'@stdlib/blas/base/sscal',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/dscal'
	]
});

ns.push({
	'alias': 'base.strided.dsdot',
	'path': '@stdlib/blas/base/dsdot',
	'value': require( '@stdlib/blas/base/dsdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/dsdot'
	]
});

ns.push({
	'alias': 'base.strided.dsem',
	'path': '@stdlib/stats/base/dsem',
	'value': require( '@stdlib/stats/base/dsem' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansem',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/sem',
		'@stdlib/stats/base/ssem'
	]
});

ns.push({
	'alias': 'base.strided.dsemch',
	'path': '@stdlib/stats/base/dsemch',
	'value': require( '@stdlib/stats/base/dsemch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemch',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/semch',
		'@stdlib/stats/base/ssemch'
	]
});

ns.push({
	'alias': 'base.strided.dsempn',
	'path': '@stdlib/stats/base/dsempn',
	'value': require( '@stdlib/stats/base/dsempn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansempn',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/sempn',
		'@stdlib/stats/base/ssempn'
	]
});

ns.push({
	'alias': 'base.strided.dsemtk',
	'path': '@stdlib/stats/base/dsemtk',
	'value': require( '@stdlib/stats/base/dsemtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemtk',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/semtk',
		'@stdlib/stats/base/ssemtk'
	]
});

ns.push({
	'alias': 'base.strided.dsemwd',
	'path': '@stdlib/stats/base/dsemwd',
	'value': require( '@stdlib/stats/base/dsemwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemwd',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/semwd',
		'@stdlib/stats/base/ssemwd'
	]
});

ns.push({
	'alias': 'base.strided.dsemyc',
	'path': '@stdlib/stats/base/dsemyc',
	'value': require( '@stdlib/stats/base/dsemyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnansemyc',
		'@stdlib/stats/base/dsem',
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/semyc',
		'@stdlib/stats/base/ssemyc'
	]
});

ns.push({
	'alias': 'base.strided.dsmean',
	'path': '@stdlib/stats/base/dsmean',
	'value': require( '@stdlib/stats/base/dsmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanors',
	'path': '@stdlib/stats/base/dsmeanors',
	'value': require( '@stdlib/stats/base/dsmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanpn',
	'path': '@stdlib/stats/base/dsmeanpn',
	'value': require( '@stdlib/stats/base/dsmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanpw',
	'path': '@stdlib/stats/base/dsmeanpw',
	'value': require( '@stdlib/stats/base/dsmeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/base/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.dsmeanwd',
	'path': '@stdlib/stats/base/dsmeanwd',
	'value': require( '@stdlib/stats/base/dsmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/dsnanmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmean',
	'path': '@stdlib/stats/base/dsnanmean',
	'value': require( '@stdlib/stats/base/dsnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanors',
	'path': '@stdlib/stats/base/dsnanmeanors',
	'value': require( '@stdlib/stats/base/dsnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/dsmeanors',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanpn',
	'path': '@stdlib/stats/base/dsnanmeanpn',
	'value': require( '@stdlib/stats/base/dsnanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/dsmeanpn',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.dsnanmeanwd',
	'path': '@stdlib/stats/base/dsnanmeanwd',
	'value': require( '@stdlib/stats/base/dsnanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/dsmeanwd',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.dsnannsumors',
	'path': '@stdlib/blas/ext/base/dsnannsumors',
	'value': require( '@stdlib/blas/ext/base/dsnannsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsumors',
		'@stdlib/blas/ext/base/dsnannsum',
		'@stdlib/blas/ext/base/dsnansumors',
		'@stdlib/blas/ext/base/dssumors',
		'@stdlib/blas/ext/base/sdsnannsumors',
		'@stdlib/blas/ext/base/snannsumors'
	]
});

ns.push({
	'alias': 'base.strided.dsnansum',
	'path': '@stdlib/blas/ext/base/dsnansum',
	'value': require( '@stdlib/blas/ext/base/dsnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/snansum'
	]
});

ns.push({
	'alias': 'base.strided.dsnansumors',
	'path': '@stdlib/blas/ext/base/dsnansumors',
	'value': require( '@stdlib/blas/ext/base/dsnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmeanors',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dssumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.dsnansumpw',
	'path': '@stdlib/blas/ext/base/dsnansumpw',
	'value': require( '@stdlib/blas/ext/base/dsnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dsnanmeanpw',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.dsort2hp',
	'path': '@stdlib/blas/ext/base/dsort2hp',
	'value': require( '@stdlib/blas/ext/base/dsort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.dsort2ins',
	'path': '@stdlib/blas/ext/base/dsort2ins',
	'value': require( '@stdlib/blas/ext/base/dsort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.dsort2sh',
	'path': '@stdlib/blas/ext/base/dsort2sh',
	'value': require( '@stdlib/blas/ext/base/dsort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.dsorthp',
	'path': '@stdlib/blas/ext/base/dsorthp',
	'value': require( '@stdlib/blas/ext/base/dsorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.dsortins',
	'path': '@stdlib/blas/ext/base/dsortins',
	'value': require( '@stdlib/blas/ext/base/dsortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.dsortsh',
	'path': '@stdlib/blas/ext/base/dsortsh',
	'value': require( '@stdlib/blas/ext/base/dsortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.dssum',
	'path': '@stdlib/blas/ext/base/dssum',
	'value': require( '@stdlib/blas/ext/base/dssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansum',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/stats/base/dsmean'
	]
});

ns.push({
	'alias': 'base.strided.dssumors',
	'path': '@stdlib/blas/ext/base/dssumors',
	'value': require( '@stdlib/blas/ext/base/dssumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumors',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.dssumpw',
	'path': '@stdlib/blas/ext/base/dssumpw',
	'value': require( '@stdlib/blas/ext/base/dssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumpw',
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.dstdev',
	'path': '@stdlib/stats/base/dstdev',
	'value': require( '@stdlib/stats/base/dstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/dstdevm',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdev'
	]
});

ns.push({
	'alias': 'base.strided.dstdevch',
	'path': '@stdlib/stats/base/dstdevch',
	'value': require( '@stdlib/stats/base/dstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevch',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/sstdevch',
		'@stdlib/stats/base/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.dstdevpn',
	'path': '@stdlib/stats/base/dstdevpn',
	'value': require( '@stdlib/stats/base/dstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevpn',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dstdevmpn',
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/sstdevpn',
		'@stdlib/stats/base/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.dstdevtk',
	'path': '@stdlib/stats/base/dstdevtk',
	'value': require( '@stdlib/stats/base/dstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevtk',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/sstdevtk',
		'@stdlib/stats/base/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.dstdevwd',
	'path': '@stdlib/stats/base/dstdevwd',
	'value': require( '@stdlib/stats/base/dstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevwd',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.dstdevyc',
	'path': '@stdlib/stats/base/dstdevyc',
	'value': require( '@stdlib/stats/base/dstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevyc',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/sstdevyc',
		'@stdlib/stats/base/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.dsum',
	'path': '@stdlib/blas/ext/base/dsum',
	'value': require( '@stdlib/blas/ext/base/dsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/stats/base/dmean',
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.dsumkbn',
	'path': '@stdlib/blas/ext/base/dsumkbn',
	'value': require( '@stdlib/blas/ext/base/dsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.dsumkbn2',
	'path': '@stdlib/blas/ext/base/dsumkbn2',
	'value': require( '@stdlib/blas/ext/base/dsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.dsumors',
	'path': '@stdlib/blas/ext/base/dsumors',
	'value': require( '@stdlib/blas/ext/base/dsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.dsumpw',
	'path': '@stdlib/blas/ext/base/dsumpw',
	'value': require( '@stdlib/blas/ext/base/dsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.dsvariance',
	'path': '@stdlib/stats/base/dsvariance',
	'value': require( '@stdlib/stats/base/dsvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/dsnanvariance',
		'@stdlib/stats/base/variance',
		'@stdlib/stats/base/sdsvariance',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.dsvariancepn',
	'path': '@stdlib/stats/base/dsvariancepn',
	'value': require( '@stdlib/stats/base/dsvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/dsnanvariancepn',
		'@stdlib/stats/base/dsvariance',
		'@stdlib/stats/base/variancepn',
		'@stdlib/stats/base/sdsvariance',
		'@stdlib/stats/base/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.dswap',
	'path': '@stdlib/blas/base/dswap',
	'value': require( '@stdlib/blas/base/dswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/dswap'
	]
});

ns.push({
	'alias': 'base.strided.dvariance',
	'path': '@stdlib/stats/base/dvariance',
	'value': require( '@stdlib/stats/base/dvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/dvarm',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.dvariancech',
	'path': '@stdlib/stats/base/dvariancech',
	'value': require( '@stdlib/stats/base/dvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancech',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.dvariancepn',
	'path': '@stdlib/stats/base/dvariancepn',
	'value': require( '@stdlib/stats/base/dvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancepn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.dvariancetk',
	'path': '@stdlib/stats/base/dvariancetk',
	'value': require( '@stdlib/stats/base/dvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancetk',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.dvariancewd',
	'path': '@stdlib/stats/base/dvariancewd',
	'value': require( '@stdlib/stats/base/dvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svariancewd',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.dvarianceyc',
	'path': '@stdlib/stats/base/dvarianceyc',
	'value': require( '@stdlib/stats/base/dvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svarianceyc',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.dvarm',
	'path': '@stdlib/stats/base/dvarm',
	'value': require( '@stdlib/stats/base/dvarm' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarm',
		'@stdlib/stats/base/dstdevm',
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/svarm',
		'@stdlib/stats/base/varm'
	]
});

ns.push({
	'alias': 'base.strided.dvarmpn',
	'path': '@stdlib/stats/base/dvarmpn',
	'value': require( '@stdlib/stats/base/dvarmpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarmpn',
		'@stdlib/stats/base/dstdevmpn',
		'@stdlib/stats/base/dvarm',
		'@stdlib/stats/base/svarmpn',
		'@stdlib/stats/base/varmpn'
	]
});

ns.push({
	'alias': 'base.strided.dvarmtk',
	'path': '@stdlib/stats/base/dvarmtk',
	'value': require( '@stdlib/stats/base/dvarmtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarmtk',
		'@stdlib/stats/base/dstdevmtk',
		'@stdlib/stats/base/dvarm',
		'@stdlib/stats/base/svarmtk',
		'@stdlib/stats/base/varmtk'
	]
});

ns.push({
	'alias': 'base.strided.gapx',
	'path': '@stdlib/blas/ext/base/gapx',
	'value': require( '@stdlib/blas/ext/base/gapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapx',
		'@stdlib/blas/ext/base/gwapx',
		'@stdlib/blas/ext/base/sapx'
	]
});

ns.push({
	'alias': 'base.strided.gapxsum',
	'path': '@stdlib/blas/ext/base/gapxsum',
	'value': require( '@stdlib/blas/ext/base/gapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/sapxsum'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumkbn',
	'path': '@stdlib/blas/ext/base/gapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/gapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/sapxsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumkbn2',
	'path': '@stdlib/blas/ext/base/gapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/gapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn2',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/sapxsumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumors',
	'path': '@stdlib/blas/ext/base/gapxsumors',
	'value': require( '@stdlib/blas/ext/base/gapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumors',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/sapxsumors'
	]
});

ns.push({
	'alias': 'base.strided.gapxsumpw',
	'path': '@stdlib/blas/ext/base/gapxsumpw',
	'value': require( '@stdlib/blas/ext/base/gapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/sapxsumpw'
	]
});

ns.push({
	'alias': 'base.strided.gasum',
	'path': '@stdlib/blas/base/gasum',
	'value': require( '@stdlib/blas/base/gasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/gasum'
	]
});

ns.push({
	'alias': 'base.strided.gasumpw',
	'path': '@stdlib/blas/ext/base/gasumpw',
	'value': require( '@stdlib/blas/ext/base/gasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/gnanasumpw',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/sasumpw',
		'@stdlib/blas/ext/gasumpw'
	]
});

ns.push({
	'alias': 'base.strided.gaxpy',
	'path': '@stdlib/blas/base/gaxpy',
	'value': require( '@stdlib/blas/base/gaxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/gaxpy'
	]
});

ns.push({
	'alias': 'base.strided.gcopy',
	'path': '@stdlib/blas/base/gcopy',
	'value': require( '@stdlib/blas/base/gcopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/gcopy'
	]
});

ns.push({
	'alias': 'base.strided.gcusum',
	'path': '@stdlib/blas/ext/base/gcusum',
	'value': require( '@stdlib/blas/ext/base/gcusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/gnancusum',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/gcusum'
	]
});

ns.push({
	'alias': 'base.strided.gcusumkbn',
	'path': '@stdlib/blas/ext/base/gcusumkbn',
	'value': require( '@stdlib/blas/ext/base/gcusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/gnancusumkbn',
		'@stdlib/blas/ext/base/scusumkbn',
		'@stdlib/blas/ext/gcusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gcusumkbn2',
	'path': '@stdlib/blas/ext/base/gcusumkbn2',
	'value': require( '@stdlib/blas/ext/base/gcusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn2',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/gnancusumkbn2',
		'@stdlib/blas/ext/base/scusumkbn2',
		'@stdlib/blas/ext/gcusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gcusumors',
	'path': '@stdlib/blas/ext/base/gcusumors',
	'value': require( '@stdlib/blas/ext/base/gcusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumors',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/gnancusumors',
		'@stdlib/blas/ext/base/scusumors',
		'@stdlib/blas/ext/gcusumors'
	]
});

ns.push({
	'alias': 'base.strided.gcusumpw',
	'path': '@stdlib/blas/ext/base/gcusumpw',
	'value': require( '@stdlib/blas/ext/base/gcusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/gnancusumpw',
		'@stdlib/blas/ext/base/scusumpw',
		'@stdlib/blas/ext/gcusumpw'
	]
});

ns.push({
	'alias': 'base.strided.gdot',
	'path': '@stdlib/blas/base/gdot',
	'value': require( '@stdlib/blas/base/gdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/gdot'
	]
});

ns.push({
	'alias': 'base.strided.gfill',
	'path': '@stdlib/blas/ext/base/gfill',
	'value': require( '@stdlib/blas/ext/base/gfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dfill',
		'@stdlib/blas/ext/base/sfill',
		'@stdlib/blas/ext/gfill'
	]
});

ns.push({
	'alias': 'base.strided.gfillBy',
	'path': '@stdlib/blas/ext/base/gfill-by',
	'value': require( '@stdlib/blas/ext/base/gfill-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/gfill-by'
	]
});

ns.push({
	'alias': 'base.strided.gnannsumkbn',
	'path': '@stdlib/blas/ext/base/gnannsumkbn',
	'value': require( '@stdlib/blas/ext/base/gnannsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnannsumkbn',
		'@stdlib/blas/ext/base/gnannsum',
		'@stdlib/blas/ext/base/gnannsumkbn2',
		'@stdlib/blas/ext/base/gnannsumors',
		'@stdlib/blas/ext/base/gnannsumpw',
		'@stdlib/blas/ext/base/snannsumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gnansum',
	'path': '@stdlib/blas/ext/base/gnansum',
	'value': require( '@stdlib/blas/ext/base/gnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/stats/base/nanmean'
	]
});

ns.push({
	'alias': 'base.strided.gnansumkbn',
	'path': '@stdlib/blas/ext/base/gnansumkbn',
	'value': require( '@stdlib/blas/ext/base/gnansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/snansumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gnansumkbn2',
	'path': '@stdlib/blas/ext/base/gnansumkbn2',
	'value': require( '@stdlib/blas/ext/base/gnansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gnansumors',
	'path': '@stdlib/blas/ext/base/gnansumors',
	'value': require( '@stdlib/blas/ext/base/gnansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/snansumors'
	]
});

ns.push({
	'alias': 'base.strided.gnansumpw',
	'path': '@stdlib/blas/ext/base/gnansumpw',
	'value': require( '@stdlib/blas/ext/base/gnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.gnrm2',
	'path': '@stdlib/blas/base/gnrm2',
	'value': require( '@stdlib/blas/base/gnrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dnrm2',
		'@stdlib/blas/base/snrm2',
		'@stdlib/blas/gnrm2'
	]
});

ns.push({
	'alias': 'base.strided.grev',
	'path': '@stdlib/blas/ext/base/grev',
	'value': require( '@stdlib/blas/ext/base/grev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/drev',
		'@stdlib/blas/ext/base/srev',
		'@stdlib/blas/ext/grev'
	]
});

ns.push({
	'alias': 'base.strided.gscal',
	'path': '@stdlib/blas/base/gscal',
	'value': require( '@stdlib/blas/base/gscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dscal',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/base/sscal',
		'@stdlib/blas/gscal'
	]
});

ns.push({
	'alias': 'base.strided.gsort2hp',
	'path': '@stdlib/blas/ext/base/gsort2hp',
	'value': require( '@stdlib/blas/ext/base/gsort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.gsort2ins',
	'path': '@stdlib/blas/ext/base/gsort2ins',
	'value': require( '@stdlib/blas/ext/base/gsort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.gsort2sh',
	'path': '@stdlib/blas/ext/base/gsort2sh',
	'value': require( '@stdlib/blas/ext/base/gsort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.gsorthp',
	'path': '@stdlib/blas/ext/base/gsorthp',
	'value': require( '@stdlib/blas/ext/base/gsorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.gsortins',
	'path': '@stdlib/blas/ext/base/gsortins',
	'value': require( '@stdlib/blas/ext/base/gsortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.gsortsh',
	'path': '@stdlib/blas/ext/base/gsortsh',
	'value': require( '@stdlib/blas/ext/base/gsortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.gsum',
	'path': '@stdlib/blas/ext/base/gsum',
	'value': require( '@stdlib/blas/ext/base/gsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/gasum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/stats/base/mean'
	]
});

ns.push({
	'alias': 'base.strided.gsumkbn',
	'path': '@stdlib/blas/ext/base/gsumkbn',
	'value': require( '@stdlib/blas/ext/base/gsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.gsumkbn2',
	'path': '@stdlib/blas/ext/base/gsumkbn2',
	'value': require( '@stdlib/blas/ext/base/gsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.gsumors',
	'path': '@stdlib/blas/ext/base/gsumors',
	'value': require( '@stdlib/blas/ext/base/gsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.gsumpw',
	'path': '@stdlib/blas/ext/base/gsumpw',
	'value': require( '@stdlib/blas/ext/base/gsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/gsum',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.gswap',
	'path': '@stdlib/blas/base/gswap',
	'value': require( '@stdlib/blas/base/gswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/gswap'
	]
});

ns.push({
	'alias': 'base.strided.max',
	'path': '@stdlib/stats/base/max',
	'value': require( '@stdlib/stats/base/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/smax'
	]
});

ns.push({
	'alias': 'base.strided.maxabs',
	'path': '@stdlib/stats/base/maxabs',
	'value': require( '@stdlib/stats/base/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/smaxabs'
	]
});

ns.push({
	'alias': 'base.strided.maxBy',
	'path': '@stdlib/stats/base/max-by',
	'value': require( '@stdlib/stats/base/max-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/min-by',
		'@stdlib/stats/base/nanmax-by',
		'@stdlib/stats/base/smax'
	]
});

ns.push({
	'alias': 'base.strided.maxsorted',
	'path': '@stdlib/stats/base/maxsorted',
	'value': require( '@stdlib/stats/base/maxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/minsorted',
		'@stdlib/stats/base/nanmaxsorted',
		'@stdlib/stats/base/smaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.mean',
	'path': '@stdlib/stats/base/mean',
	'value': require( '@stdlib/stats/base/mean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.meankbn',
	'path': '@stdlib/stats/base/meankbn',
	'value': require( '@stdlib/stats/base/meankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeankbn',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeankbn',
		'@stdlib/stats/base/smeankbn'
	]
});

ns.push({
	'alias': 'base.strided.meankbn2',
	'path': '@stdlib/stats/base/meankbn2',
	'value': require( '@stdlib/stats/base/meankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeankbn2',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeankbn2',
		'@stdlib/stats/base/smeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.meanors',
	'path': '@stdlib/stats/base/meanors',
	'value': require( '@stdlib/stats/base/meanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.meanpn',
	'path': '@stdlib/stats/base/meanpn',
	'value': require( '@stdlib/stats/base/meanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.meanpw',
	'path': '@stdlib/stats/base/meanpw',
	'value': require( '@stdlib/stats/base/meanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanpw',
		'@stdlib/stats/base/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.meanwd',
	'path': '@stdlib/stats/base/meanwd',
	'value': require( '@stdlib/stats/base/meanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.mediansorted',
	'path': '@stdlib/stats/base/mediansorted',
	'value': require( '@stdlib/stats/base/mediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmediansorted',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/median',
		'@stdlib/stats/base/nanmediansorted',
		'@stdlib/stats/base/smediansorted'
	]
});

ns.push({
	'alias': 'base.strided.min',
	'path': '@stdlib/stats/base/min',
	'value': require( '@stdlib/stats/base/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/smin'
	]
});

ns.push({
	'alias': 'base.strided.minabs',
	'path': '@stdlib/stats/base/minabs',
	'value': require( '@stdlib/stats/base/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/sminabs'
	]
});

ns.push({
	'alias': 'base.strided.minBy',
	'path': '@stdlib/stats/base/min-by',
	'value': require( '@stdlib/stats/base/min-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/max-by',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanmin-by',
		'@stdlib/stats/base/smin'
	]
});

ns.push({
	'alias': 'base.strided.minsorted',
	'path': '@stdlib/stats/base/minsorted',
	'value': require( '@stdlib/stats/base/minsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminsorted',
		'@stdlib/stats/base/maxsorted',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanminsorted',
		'@stdlib/stats/base/sminsorted'
	]
});

ns.push({
	'alias': 'base.strided.mskmax',
	'path': '@stdlib/stats/base/mskmax',
	'value': require( '@stdlib/stats/base/mskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/smskmax'
	]
});

ns.push({
	'alias': 'base.strided.mskmin',
	'path': '@stdlib/stats/base/mskmin',
	'value': require( '@stdlib/stats/base/mskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/smskmin'
	]
});

ns.push({
	'alias': 'base.strided.mskrange',
	'path': '@stdlib/stats/base/mskrange',
	'value': require( '@stdlib/stats/base/mskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskrange',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/smskrange'
	]
});

ns.push({
	'alias': 'base.strided.mskunary',
	'path': '@stdlib/strided/base/mskunary',
	'value': require( '@stdlib/strided/base/mskunary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/msknullary',
		'@stdlib/strided/base/mskquaternary',
		'@stdlib/strided/base/mskquinary',
		'@stdlib/strided/base/mskternary',
		'@stdlib/strided/base/smskmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.nanmax',
	'path': '@stdlib/stats/base/nanmax',
	'value': require( '@stdlib/stats/base/nanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmaxabs',
	'path': '@stdlib/stats/base/nanmaxabs',
	'value': require( '@stdlib/stats/base/nanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.nanmaxBy',
	'path': '@stdlib/stats/base/nanmax-by',
	'value': require( '@stdlib/stats/base/nanmax-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/max-by',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanmin-by',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmean',
	'path': '@stdlib/stats/base/nanmean',
	'value': require( '@stdlib/stats/base/nanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanors',
	'path': '@stdlib/stats/base/nanmeanors',
	'value': require( '@stdlib/stats/base/nanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanpn',
	'path': '@stdlib/stats/base/nanmeanpn',
	'value': require( '@stdlib/stats/base/nanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.nanmeanwd',
	'path': '@stdlib/stats/base/nanmeanwd',
	'value': require( '@stdlib/stats/base/nanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.nanmin',
	'path': '@stdlib/stats/base/nanmin',
	'value': require( '@stdlib/stats/base/nanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.nanminabs',
	'path': '@stdlib/stats/base/nanminabs',
	'value': require( '@stdlib/stats/base/nanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.nanminBy',
	'path': '@stdlib/stats/base/nanmin-by',
	'value': require( '@stdlib/stats/base/nanmin-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/min-by',
		'@stdlib/stats/base/nanmax-by',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmax',
	'path': '@stdlib/stats/base/nanmskmax',
	'value': require( '@stdlib/stats/base/nanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.nanmskmin',
	'path': '@stdlib/stats/base/nanmskmin',
	'value': require( '@stdlib/stats/base/nanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.nanmskrange',
	'path': '@stdlib/stats/base/nanmskrange',
	'value': require( '@stdlib/stats/base/nanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskrange',
		'@stdlib/stats/base/mskrange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/snanmskrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrange',
	'path': '@stdlib/stats/base/nanrange',
	'value': require( '@stdlib/stats/base/nanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanrangeBy',
	'path': '@stdlib/stats/base/nanrange-by',
	'value': require( '@stdlib/stats/base/nanrange-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/nanmax-by',
		'@stdlib/stats/base/nanmin-by',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/range-by',
		'@stdlib/stats/base/snanrange'
	]
});

ns.push({
	'alias': 'base.strided.nanstdev',
	'path': '@stdlib/stats/base/nanstdev',
	'value': require( '@stdlib/stats/base/nanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/mskstdev',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/stdev'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevch',
	'path': '@stdlib/stats/base/nanstdevch',
	'value': require( '@stdlib/stats/base/nanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevch',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/stdevch'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevpn',
	'path': '@stdlib/stats/base/nanstdevpn',
	'value': require( '@stdlib/stats/base/nanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevpn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/stdevpn'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevtk',
	'path': '@stdlib/stats/base/nanstdevtk',
	'value': require( '@stdlib/stats/base/nanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevtk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/stdevtk'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevwd',
	'path': '@stdlib/stats/base/nanstdevwd',
	'value': require( '@stdlib/stats/base/nanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevwd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/stdevwd'
	]
});

ns.push({
	'alias': 'base.strided.nanstdevyc',
	'path': '@stdlib/stats/base/nanstdevyc',
	'value': require( '@stdlib/stats/base/nanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/stdevyc'
	]
});

ns.push({
	'alias': 'base.strided.nanvariance',
	'path': '@stdlib/stats/base/nanvariance',
	'value': require( '@stdlib/stats/base/nanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancech',
	'path': '@stdlib/stats/base/nanvariancech',
	'value': require( '@stdlib/stats/base/nanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancepn',
	'path': '@stdlib/stats/base/nanvariancepn',
	'value': require( '@stdlib/stats/base/nanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancetk',
	'path': '@stdlib/stats/base/nanvariancetk',
	'value': require( '@stdlib/stats/base/nanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.nanvariancewd',
	'path': '@stdlib/stats/base/nanvariancewd',
	'value': require( '@stdlib/stats/base/nanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.nanvarianceyc',
	'path': '@stdlib/stats/base/nanvarianceyc',
	'value': require( '@stdlib/stats/base/nanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.nullary',
	'path': '@stdlib/strided/base/nullary',
	'value': require( '@stdlib/strided/base/nullary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.quaternary',
	'path': '@stdlib/strided/base/quaternary',
	'value': require( '@stdlib/strided/base/quaternary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.quinary',
	'path': '@stdlib/strided/base/quinary',
	'value': require( '@stdlib/strided/base/quinary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/ternary',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.range',
	'path': '@stdlib/stats/base/range',
	'value': require( '@stdlib/stats/base/range' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.rangeBy',
	'path': '@stdlib/stats/base/range-by',
	'value': require( '@stdlib/stats/base/range-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/max-by',
		'@stdlib/stats/base/min-by',
		'@stdlib/stats/base/nanrange-by',
		'@stdlib/stats/base/range',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.sapx',
	'path': '@stdlib/blas/ext/base/sapx',
	'value': require( '@stdlib/blas/ext/base/sapx' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapx',
		'@stdlib/blas/ext/base/gapx',
		'@stdlib/blas/ext/base/swapx'
	]
});

ns.push({
	'alias': 'base.strided.sapxsum',
	'path': '@stdlib/blas/ext/base/sapxsum',
	'value': require( '@stdlib/blas/ext/base/sapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsum',
		'@stdlib/blas/ext/base/gapxsum',
		'@stdlib/blas/ext/base/sapxsumpw',
		'@stdlib/blas/ext/base/ssum'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumkbn',
	'path': '@stdlib/blas/ext/base/sapxsumkbn',
	'value': require( '@stdlib/blas/ext/base/sapxsumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn',
		'@stdlib/blas/ext/base/gapxsumkbn',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumkbn2',
	'path': '@stdlib/blas/ext/base/sapxsumkbn2',
	'value': require( '@stdlib/blas/ext/base/sapxsumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumkbn2',
		'@stdlib/blas/ext/base/gapxsumkbn2',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumors',
	'path': '@stdlib/blas/ext/base/sapxsumors',
	'value': require( '@stdlib/blas/ext/base/sapxsumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumors',
		'@stdlib/blas/ext/base/gapxsumors',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.sapxsumpw',
	'path': '@stdlib/blas/ext/base/sapxsumpw',
	'value': require( '@stdlib/blas/ext/base/sapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dapxsumpw',
		'@stdlib/blas/ext/base/gapxsumpw',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.sasum',
	'path': '@stdlib/blas/base/sasum',
	'value': require( '@stdlib/blas/base/sasum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dasum',
		'@stdlib/blas/base/gasum',
		'@stdlib/blas/sasum'
	]
});

ns.push({
	'alias': 'base.strided.sasumpw',
	'path': '@stdlib/blas/ext/base/sasumpw',
	'value': require( '@stdlib/blas/ext/base/sasumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/sasum',
		'@stdlib/blas/ext/base/dasumpw',
		'@stdlib/blas/ext/base/gasumpw',
		'@stdlib/blas/ext/base/snanasumpw',
		'@stdlib/blas/ext/base/ssumpw',
		'@stdlib/blas/ext/sasumpw'
	]
});

ns.push({
	'alias': 'base.strided.saxpy',
	'path': '@stdlib/blas/base/saxpy',
	'value': require( '@stdlib/blas/base/saxpy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/gaxpy',
		'@stdlib/blas/saxpy'
	]
});

ns.push({
	'alias': 'base.strided.scopy',
	'path': '@stdlib/blas/base/scopy',
	'value': require( '@stdlib/blas/base/scopy' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dcopy',
		'@stdlib/blas/base/gcopy',
		'@stdlib/blas/base/sswap',
		'@stdlib/blas/scopy'
	]
});

ns.push({
	'alias': 'base.strided.scumax',
	'path': '@stdlib/stats/base/scumax',
	'value': require( '@stdlib/stats/base/scumax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumax',
		'@stdlib/stats/base/dcumax',
		'@stdlib/stats/base/scumin',
		'@stdlib/stats/base/scurange',
		'@stdlib/stats/base/snancumax'
	]
});

ns.push({
	'alias': 'base.strided.scumaxabs',
	'path': '@stdlib/stats/base/scumaxabs',
	'value': require( '@stdlib/stats/base/scumaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumaxabs',
		'@stdlib/stats/base/dcumaxabs',
		'@stdlib/stats/base/scumax',
		'@stdlib/stats/base/scuminabs',
		'@stdlib/stats/base/snancumaxabs'
	]
});

ns.push({
	'alias': 'base.strided.scumin',
	'path': '@stdlib/stats/base/scumin',
	'value': require( '@stdlib/stats/base/scumin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cumin',
		'@stdlib/stats/base/dcumin',
		'@stdlib/stats/base/scumax',
		'@stdlib/stats/base/scurange',
		'@stdlib/stats/base/snancumin'
	]
});

ns.push({
	'alias': 'base.strided.scuminabs',
	'path': '@stdlib/stats/base/scuminabs',
	'value': require( '@stdlib/stats/base/scuminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/cuminabs',
		'@stdlib/stats/base/dcuminabs',
		'@stdlib/stats/base/scumaxabs',
		'@stdlib/stats/base/scumin',
		'@stdlib/stats/base/snancuminabs'
	]
});

ns.push({
	'alias': 'base.strided.scusum',
	'path': '@stdlib/blas/ext/base/scusum',
	'value': require( '@stdlib/blas/ext/base/scusum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusum',
		'@stdlib/blas/ext/base/gcusum',
		'@stdlib/blas/ext/base/scusumpw',
		'@stdlib/blas/ext/base/snancusum'
	]
});

ns.push({
	'alias': 'base.strided.scusumkbn',
	'path': '@stdlib/blas/ext/base/scusumkbn',
	'value': require( '@stdlib/blas/ext/base/scusumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn',
		'@stdlib/blas/ext/base/gcusumkbn',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/scusumkbn2',
		'@stdlib/blas/ext/base/snancusumkbn'
	]
});

ns.push({
	'alias': 'base.strided.scusumkbn2',
	'path': '@stdlib/blas/ext/base/scusumkbn2',
	'value': require( '@stdlib/blas/ext/base/scusumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumkbn2',
		'@stdlib/blas/ext/base/gcusumkbn2',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/scusumkbn',
		'@stdlib/blas/ext/base/snancusumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.scusumors',
	'path': '@stdlib/blas/ext/base/scusumors',
	'value': require( '@stdlib/blas/ext/base/scusumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumors',
		'@stdlib/blas/ext/base/gcusumors',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/snancusumors'
	]
});

ns.push({
	'alias': 'base.strided.scusumpw',
	'path': '@stdlib/blas/ext/base/scusumpw',
	'value': require( '@stdlib/blas/ext/base/scusumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dcusumpw',
		'@stdlib/blas/ext/base/gcusumpw',
		'@stdlib/blas/ext/base/scusum',
		'@stdlib/blas/ext/base/snancusumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdot',
	'path': '@stdlib/blas/base/sdot',
	'value': require( '@stdlib/blas/base/sdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/sdsdot',
		'@stdlib/blas/sdot'
	]
});

ns.push({
	'alias': 'base.strided.sdsapxsum',
	'path': '@stdlib/blas/ext/base/sdsapxsum',
	'value': require( '@stdlib/blas/ext/base/sdsapxsum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsapxsum',
		'@stdlib/blas/ext/base/sapxsum',
		'@stdlib/blas/ext/base/sdssum'
	]
});

ns.push({
	'alias': 'base.strided.sdsapxsumpw',
	'path': '@stdlib/blas/ext/base/sdsapxsumpw',
	'value': require( '@stdlib/blas/ext/base/sdsapxsumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsapxsumpw',
		'@stdlib/blas/ext/base/sapxsumpw',
		'@stdlib/blas/ext/base/sdsapxsum',
		'@stdlib/blas/ext/base/sdssumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdsdot',
	'path': '@stdlib/blas/base/sdsdot',
	'value': require( '@stdlib/blas/base/sdsdot' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/ddot',
		'@stdlib/blas/base/dsdot',
		'@stdlib/blas/base/sdot',
		'@stdlib/blas/sdsdot'
	]
});

ns.push({
	'alias': 'base.strided.sdsmean',
	'path': '@stdlib/stats/base/sdsmean',
	'value': require( '@stdlib/stats/base/sdsmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/sdsnanmean',
		'@stdlib/stats/base/smean'
	]
});

ns.push({
	'alias': 'base.strided.sdsmeanors',
	'path': '@stdlib/stats/base/sdsmeanors',
	'value': require( '@stdlib/stats/base/sdsmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/sdsnanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.sdsnanmean',
	'path': '@stdlib/stats/base/sdsnanmean',
	'value': require( '@stdlib/stats/base/sdsnanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/dsnanmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.sdsnanmeanors',
	'path': '@stdlib/stats/base/sdsnanmeanors',
	'value': require( '@stdlib/stats/base/sdsnanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/sdsmeanors',
		'@stdlib/stats/base/sdsnanmean'
	]
});

ns.push({
	'alias': 'base.strided.sdsnansum',
	'path': '@stdlib/blas/ext/base/sdsnansum',
	'value': require( '@stdlib/blas/ext/base/sdsnansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansum',
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/snansum'
	]
});

ns.push({
	'alias': 'base.strided.sdsnansumpw',
	'path': '@stdlib/blas/ext/base/sdsnansumpw',
	'value': require( '@stdlib/blas/ext/base/sdsnansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsnansumpw',
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/sdssumpw',
		'@stdlib/blas/ext/base/snansumpw'
	]
});

ns.push({
	'alias': 'base.strided.sdssum',
	'path': '@stdlib/blas/ext/base/sdssum',
	'value': require( '@stdlib/blas/ext/base/sdssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dssum',
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/sdsnansum',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.sdssumpw',
	'path': '@stdlib/blas/ext/base/sdssumpw',
	'value': require( '@stdlib/blas/ext/base/sdssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dssumpw',
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/sdsnansumpw',
		'@stdlib/blas/ext/base/sdssum',
		'@stdlib/blas/ext/base/ssumpw',
		'@stdlib/blas/ext/base/gsumpw'
	]
});

ns.push({
	'alias': 'base.strided.sfill',
	'path': '@stdlib/blas/ext/base/sfill',
	'value': require( '@stdlib/blas/ext/base/sfill' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dfill',
		'@stdlib/blas/ext/base/gfill',
		'@stdlib/blas/ext/sfill'
	]
});

ns.push({
	'alias': 'base.strided.smap',
	'path': '@stdlib/strided/base/smap',
	'value': require( '@stdlib/strided/base/smap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.smax',
	'path': '@stdlib/stats/base/smax',
	'value': require( '@stdlib/stats/base/smax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmax',
		'@stdlib/stats/base/max',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.smaxabs',
	'path': '@stdlib/stats/base/smaxabs',
	'value': require( '@stdlib/stats/base/smaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabs',
		'@stdlib/stats/base/maxabs',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/sminabs',
		'@stdlib/stats/base/snanmaxabs'
	]
});

ns.push({
	'alias': 'base.strided.smaxabssorted',
	'path': '@stdlib/stats/base/smaxabssorted',
	'value': require( '@stdlib/stats/base/smaxabssorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxabssorted',
		'@stdlib/stats/base/maxabssorted',
		'@stdlib/stats/base/smaxabs',
		'@stdlib/stats/base/smaxsorted',
		'@stdlib/stats/base/sminabssorted',
		'@stdlib/stats/base/snanmaxabssorted'
	]
});

ns.push({
	'alias': 'base.strided.smaxsorted',
	'path': '@stdlib/stats/base/smaxsorted',
	'value': require( '@stdlib/stats/base/smaxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmaxsorted',
		'@stdlib/stats/base/maxsorted',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/sminsorted',
		'@stdlib/stats/base/snanmaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.smean',
	'path': '@stdlib/stats/base/smean',
	'value': require( '@stdlib/stats/base/smean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmean',
		'@stdlib/stats/base/dsmean',
		'@stdlib/stats/base/mean',
		'@stdlib/stats/base/sdsmean',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.smeankbn',
	'path': '@stdlib/stats/base/smeankbn',
	'value': require( '@stdlib/stats/base/smeankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeankbn',
		'@stdlib/stats/base/meankbn',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeankbn'
	]
});

ns.push({
	'alias': 'base.strided.smeankbn2',
	'path': '@stdlib/stats/base/smeankbn2',
	'value': require( '@stdlib/stats/base/smeankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeankbn2',
		'@stdlib/stats/base/meankbn2',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.smeanli',
	'path': '@stdlib/stats/base/smeanli',
	'value': require( '@stdlib/stats/base/smeanli' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanli',
		'@stdlib/stats/base/meanli',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smeanlipw',
		'@stdlib/stats/base/snanmeanli'
	]
});

ns.push({
	'alias': 'base.strided.smeanlipw',
	'path': '@stdlib/stats/base/smeanlipw',
	'value': require( '@stdlib/stats/base/smeanlipw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanlipw',
		'@stdlib/stats/base/meanlipw',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smeanli',
		'@stdlib/stats/base/snanmeanlipw'
	]
});

ns.push({
	'alias': 'base.strided.smeanors',
	'path': '@stdlib/stats/base/smeanors',
	'value': require( '@stdlib/stats/base/smeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanors',
		'@stdlib/stats/base/meanors',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanors'
	]
});

ns.push({
	'alias': 'base.strided.smeanpn',
	'path': '@stdlib/stats/base/smeanpn',
	'value': require( '@stdlib/stats/base/smeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpn',
		'@stdlib/stats/base/meanpn',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanpn'
	]
});

ns.push({
	'alias': 'base.strided.smeanpw',
	'path': '@stdlib/stats/base/smeanpw',
	'value': require( '@stdlib/stats/base/smeanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanpw',
		'@stdlib/stats/base/meanpw',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanpw'
	]
});

ns.push({
	'alias': 'base.strided.smeanwd',
	'path': '@stdlib/stats/base/smeanwd',
	'value': require( '@stdlib/stats/base/smeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmeanwd',
		'@stdlib/stats/base/meanwd',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/snanmeanwd'
	]
});

ns.push({
	'alias': 'base.strided.smediansorted',
	'path': '@stdlib/stats/base/smediansorted',
	'value': require( '@stdlib/stats/base/smediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmediansorted',
		'@stdlib/stats/base/mediansorted',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smedian',
		'@stdlib/stats/base/snanmediansorted'
	]
});

ns.push({
	'alias': 'base.strided.smidrange',
	'path': '@stdlib/stats/base/smidrange',
	'value': require( '@stdlib/stats/base/smidrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmidrange',
		'@stdlib/stats/base/midrange',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanmidrange',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.smin',
	'path': '@stdlib/stats/base/smin',
	'value': require( '@stdlib/stats/base/smin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmin',
		'@stdlib/stats/base/min',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.sminabs',
	'path': '@stdlib/stats/base/sminabs',
	'value': require( '@stdlib/stats/base/sminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminabs',
		'@stdlib/stats/base/minabs',
		'@stdlib/stats/base/smaxabs',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.sminsorted',
	'path': '@stdlib/stats/base/sminsorted',
	'value': require( '@stdlib/stats/base/sminsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dminsorted',
		'@stdlib/stats/base/minsorted',
		'@stdlib/stats/base/smaxsorted',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanminsorted'
	]
});

ns.push({
	'alias': 'base.strided.smskmap',
	'path': '@stdlib/strided/base/smskmap',
	'value': require( '@stdlib/strided/base/smskmap' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskunary',
		'@stdlib/strided/base/smap'
	]
});

ns.push({
	'alias': 'base.strided.smskmax',
	'path': '@stdlib/stats/base/smskmax',
	'value': require( '@stdlib/stats/base/smskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmax',
		'@stdlib/stats/base/mskmax',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/smskmin',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanmksmax'
	]
});

ns.push({
	'alias': 'base.strided.smskmin',
	'path': '@stdlib/stats/base/smskmin',
	'value': require( '@stdlib/stats/base/smskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskmin',
		'@stdlib/stats/base/mskmin',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/smskmax',
		'@stdlib/stats/base/snanmin',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.smskrange',
	'path': '@stdlib/stats/base/smskrange',
	'value': require( '@stdlib/stats/base/smskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dmskrange',
		'@stdlib/stats/base/mskrange',
		'@stdlib/stats/base/smskmax',
		'@stdlib/stats/base/smskmin',
		'@stdlib/stats/base/snanrange',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.snanmax',
	'path': '@stdlib/stats/base/snanmax',
	'value': require( '@stdlib/stats/base/snanmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmax',
		'@stdlib/stats/base/nanmax',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmaxabs',
	'path': '@stdlib/stats/base/snanmaxabs',
	'value': require( '@stdlib/stats/base/snanmaxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmaxabs',
		'@stdlib/stats/base/nanmaxabs',
		'@stdlib/stats/base/smaxabs',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanminabs'
	]
});

ns.push({
	'alias': 'base.strided.snanmean',
	'path': '@stdlib/stats/base/snanmean',
	'value': require( '@stdlib/stats/base/snanmean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmean',
		'@stdlib/stats/base/smean',
		'@stdlib/stats/base/nanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanors',
	'path': '@stdlib/stats/base/snanmeanors',
	'value': require( '@stdlib/stats/base/snanmeanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanors',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/smeanors',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanpn',
	'path': '@stdlib/stats/base/snanmeanpn',
	'value': require( '@stdlib/stats/base/snanmeanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanpn',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/base/smeanpn',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmeanwd',
	'path': '@stdlib/stats/base/snanmeanwd',
	'value': require( '@stdlib/stats/base/snanmeanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmeanwd',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/base/smeanwd',
		'@stdlib/stats/base/snanmean'
	]
});

ns.push({
	'alias': 'base.strided.snanmin',
	'path': '@stdlib/stats/base/snanmin',
	'value': require( '@stdlib/stats/base/snanmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmin',
		'@stdlib/stats/base/nanmin',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanmax'
	]
});

ns.push({
	'alias': 'base.strided.snanminabs',
	'path': '@stdlib/stats/base/snanminabs',
	'value': require( '@stdlib/stats/base/snanminabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanminabs',
		'@stdlib/stats/base/nanminabs',
		'@stdlib/stats/base/sminabs',
		'@stdlib/stats/base/snanmaxabs',
		'@stdlib/stats/base/snanmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmskmax',
	'path': '@stdlib/stats/base/snanmskmax',
	'value': require( '@stdlib/stats/base/snanmskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmax',
		'@stdlib/stats/base/nanmskmax',
		'@stdlib/stats/base/smskmax',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.snanmskmin',
	'path': '@stdlib/stats/base/snanmskmin',
	'value': require( '@stdlib/stats/base/snanmskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskmin',
		'@stdlib/stats/base/nanmskmin',
		'@stdlib/stats/base/smskmin',
		'@stdlib/stats/base/snanmin',
		'@stdlib/stats/base/snanmskmax'
	]
});

ns.push({
	'alias': 'base.strided.snanmskrange',
	'path': '@stdlib/stats/base/snanmskrange',
	'value': require( '@stdlib/stats/base/snanmskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanmskrange',
		'@stdlib/stats/base/nanmskrange',
		'@stdlib/stats/base/smskrange',
		'@stdlib/stats/base/snanrange',
		'@stdlib/stats/base/snanmskmax',
		'@stdlib/stats/base/snanmskmin'
	]
});

ns.push({
	'alias': 'base.strided.snanrange',
	'path': '@stdlib/stats/base/snanrange',
	'value': require( '@stdlib/stats/base/snanrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanrange',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/base/snanmax',
		'@stdlib/stats/base/snanmin',
		'@stdlib/stats/base/srange'
	]
});

ns.push({
	'alias': 'base.strided.snanstdev',
	'path': '@stdlib/stats/base/snanstdev',
	'value': require( '@stdlib/stats/base/snanstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/smskstdev',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/sstdev'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevch',
	'path': '@stdlib/stats/base/snanstdevch',
	'value': require( '@stdlib/stats/base/snanstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/sstdevch'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevpn',
	'path': '@stdlib/stats/base/snanstdevpn',
	'value': require( '@stdlib/stats/base/snanstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/sstdevpn'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevtk',
	'path': '@stdlib/stats/base/snanstdevtk',
	'value': require( '@stdlib/stats/base/snanstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/sstdevtk'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevwd',
	'path': '@stdlib/stats/base/snanstdevwd',
	'value': require( '@stdlib/stats/base/snanstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/sstdevwd'
	]
});

ns.push({
	'alias': 'base.strided.snanstdevyc',
	'path': '@stdlib/stats/base/snanstdevyc',
	'value': require( '@stdlib/stats/base/snanstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/sstdevyc'
	]
});

ns.push({
	'alias': 'base.strided.snansum',
	'path': '@stdlib/blas/ext/base/snansum',
	'value': require( '@stdlib/blas/ext/base/snansum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansum',
		'@stdlib/blas/ext/base/gnansum',
		'@stdlib/stats/base/snanmean',
		'@stdlib/blas/ext/base/ssum'
	]
});

ns.push({
	'alias': 'base.strided.snansumkbn',
	'path': '@stdlib/blas/ext/base/snansumkbn',
	'value': require( '@stdlib/blas/ext/base/snansumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn',
		'@stdlib/blas/ext/base/gnansumkbn',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumkbn'
	]
});

ns.push({
	'alias': 'base.strided.snansumkbn2',
	'path': '@stdlib/blas/ext/base/snansumkbn2',
	'value': require( '@stdlib/blas/ext/base/snansumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumkbn2',
		'@stdlib/blas/ext/base/gnansumkbn2',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumkbn2'
	]
});

ns.push({
	'alias': 'base.strided.snansumors',
	'path': '@stdlib/blas/ext/base/snansumors',
	'value': require( '@stdlib/blas/ext/base/snansumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumors',
		'@stdlib/blas/ext/base/gnansumors',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.snansumpw',
	'path': '@stdlib/blas/ext/base/snansumpw',
	'value': require( '@stdlib/blas/ext/base/snansumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dnansumpw',
		'@stdlib/blas/ext/base/gnansumpw',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.snanvariance',
	'path': '@stdlib/stats/base/snanvariance',
	'value': require( '@stdlib/stats/base/snanvariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/smskvariance',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancech',
	'path': '@stdlib/stats/base/snanvariancech',
	'value': require( '@stdlib/stats/base/snanvariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancech',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancech'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancepn',
	'path': '@stdlib/stats/base/snanvariancepn',
	'value': require( '@stdlib/stats/base/snanvariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancepn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancetk',
	'path': '@stdlib/stats/base/snanvariancetk',
	'value': require( '@stdlib/stats/base/snanvariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancetk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancetk'
	]
});

ns.push({
	'alias': 'base.strided.snanvariancewd',
	'path': '@stdlib/stats/base/snanvariancewd',
	'value': require( '@stdlib/stats/base/snanvariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvariancewd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svariancewd'
	]
});

ns.push({
	'alias': 'base.strided.snanvarianceyc',
	'path': '@stdlib/stats/base/snanvarianceyc',
	'value': require( '@stdlib/stats/base/snanvarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dnanvarianceyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/svarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.snrm2',
	'path': '@stdlib/blas/base/snrm2',
	'value': require( '@stdlib/blas/base/snrm2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dnrm2',
		'@stdlib/blas/base/gnrm2',
		'@stdlib/blas/snrm2'
	]
});

ns.push({
	'alias': 'base.strided.srange',
	'path': '@stdlib/stats/base/srange',
	'value': require( '@stdlib/stats/base/srange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/drange',
		'@stdlib/stats/base/smax',
		'@stdlib/stats/base/smin',
		'@stdlib/stats/base/snanrange',
		'@stdlib/stats/base/range'
	]
});

ns.push({
	'alias': 'base.strided.srev',
	'path': '@stdlib/blas/ext/base/srev',
	'value': require( '@stdlib/blas/ext/base/srev' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/drev',
		'@stdlib/blas/ext/base/grev',
		'@stdlib/blas/ext/srev'
	]
});

ns.push({
	'alias': 'base.strided.sscal',
	'path': '@stdlib/blas/base/sscal',
	'value': require( '@stdlib/blas/base/sscal' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/daxpy',
		'@stdlib/blas/base/dscal',
		'@stdlib/blas/base/gscal',
		'@stdlib/blas/base/saxpy',
		'@stdlib/blas/sscal'
	]
});

ns.push({
	'alias': 'base.strided.ssort2hp',
	'path': '@stdlib/blas/ext/base/ssort2hp',
	'value': require( '@stdlib/blas/ext/base/ssort2hp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2hp',
		'@stdlib/blas/ext/base/gsort2hp',
		'@stdlib/blas/ext/base/ssorthp'
	]
});

ns.push({
	'alias': 'base.strided.ssort2ins',
	'path': '@stdlib/blas/ext/base/ssort2ins',
	'value': require( '@stdlib/blas/ext/base/ssort2ins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2ins',
		'@stdlib/blas/ext/base/gsort2ins',
		'@stdlib/blas/ext/base/ssortins'
	]
});

ns.push({
	'alias': 'base.strided.ssort2sh',
	'path': '@stdlib/blas/ext/base/ssort2sh',
	'value': require( '@stdlib/blas/ext/base/ssort2sh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsort2sh',
		'@stdlib/blas/ext/base/gsort2sh',
		'@stdlib/blas/ext/base/ssortsh'
	]
});

ns.push({
	'alias': 'base.strided.ssorthp',
	'path': '@stdlib/blas/ext/base/ssorthp',
	'value': require( '@stdlib/blas/ext/base/ssorthp' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsorthp',
		'@stdlib/blas/ext/base/gsorthp',
		'@stdlib/blas/ext/base/ssort2hp'
	]
});

ns.push({
	'alias': 'base.strided.ssortins',
	'path': '@stdlib/blas/ext/base/ssortins',
	'value': require( '@stdlib/blas/ext/base/ssortins' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortins',
		'@stdlib/blas/ext/base/gsortins',
		'@stdlib/blas/ext/base/ssort2ins'
	]
});

ns.push({
	'alias': 'base.strided.ssortsh',
	'path': '@stdlib/blas/ext/base/ssortsh',
	'value': require( '@stdlib/blas/ext/base/ssortsh' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsortsh',
		'@stdlib/blas/ext/base/gsortsh',
		'@stdlib/blas/ext/base/ssort2sh'
	]
});

ns.push({
	'alias': 'base.strided.sstdev',
	'path': '@stdlib/stats/base/sstdev',
	'value': require( '@stdlib/stats/base/sstdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/snanstdev',
		'@stdlib/stats/base/sstdevm',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/svariance'
	]
});

ns.push({
	'alias': 'base.strided.sstdevch',
	'path': '@stdlib/stats/base/sstdevch',
	'value': require( '@stdlib/stats/base/sstdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/snanstdevch',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevch',
		'@stdlib/stats/base/svariancech'
	]
});

ns.push({
	'alias': 'base.strided.sstdevpn',
	'path': '@stdlib/stats/base/sstdevpn',
	'value': require( '@stdlib/stats/base/sstdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/snanstdevpn',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/sstdevmpn',
		'@stdlib/stats/base/stdevpn',
		'@stdlib/stats/base/svariancepn'
	]
});

ns.push({
	'alias': 'base.strided.sstdevtk',
	'path': '@stdlib/stats/base/sstdevtk',
	'value': require( '@stdlib/stats/base/sstdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/snanstdevtk',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevtk',
		'@stdlib/stats/base/svariancetk'
	]
});

ns.push({
	'alias': 'base.strided.sstdevwd',
	'path': '@stdlib/stats/base/sstdevwd',
	'value': require( '@stdlib/stats/base/sstdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/snanstdevwd',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevwd',
		'@stdlib/stats/base/svariancewd'
	]
});

ns.push({
	'alias': 'base.strided.sstdevyc',
	'path': '@stdlib/stats/base/sstdevyc',
	'value': require( '@stdlib/stats/base/sstdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/snanstdevyc',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevyc',
		'@stdlib/stats/base/svarianceyc'
	]
});

ns.push({
	'alias': 'base.strided.ssum',
	'path': '@stdlib/blas/ext/base/ssum',
	'value': require( '@stdlib/blas/ext/base/ssum' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsum',
		'@stdlib/blas/ext/base/sasum',
		'@stdlib/stats/base/smean',
		'@stdlib/blas/ext/base/snansum',
		'@stdlib/blas/ext/base/gsum'
	]
});

ns.push({
	'alias': 'base.strided.ssumkbn',
	'path': '@stdlib/blas/ext/base/ssumkbn',
	'value': require( '@stdlib/blas/ext/base/ssumkbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn',
		'@stdlib/blas/ext/base/gsumkbn',
		'@stdlib/blas/ext/base/snansumkbn',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumkbn2',
	'path': '@stdlib/blas/ext/base/ssumkbn2',
	'value': require( '@stdlib/blas/ext/base/ssumkbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumkbn2',
		'@stdlib/blas/ext/base/gsumkbn2',
		'@stdlib/blas/ext/base/snansumkbn2',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn',
		'@stdlib/blas/ext/base/ssumors',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumors',
	'path': '@stdlib/blas/ext/base/ssumors',
	'value': require( '@stdlib/blas/ext/base/ssumors' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumors',
		'@stdlib/blas/ext/base/gsumors',
		'@stdlib/blas/ext/base/snansumors',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumpw'
	]
});

ns.push({
	'alias': 'base.strided.ssumpw',
	'path': '@stdlib/blas/ext/base/ssumpw',
	'value': require( '@stdlib/blas/ext/base/ssumpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/ext/base/dsumpw',
		'@stdlib/blas/ext/base/gsumpw',
		'@stdlib/blas/ext/base/snansumpw',
		'@stdlib/blas/ext/base/ssum',
		'@stdlib/blas/ext/base/ssumkbn2',
		'@stdlib/blas/ext/base/ssumors'
	]
});

ns.push({
	'alias': 'base.strided.sswap',
	'path': '@stdlib/blas/base/sswap',
	'value': require( '@stdlib/blas/base/sswap' ),
	'type': 'Function',
	'related': [
		'@stdlib/blas/base/dswap',
		'@stdlib/blas/base/gswap',
		'@stdlib/blas/base/scopy',
		'@stdlib/blas/sswap'
	]
});

ns.push({
	'alias': 'base.strided.stdev',
	'path': '@stdlib/stats/base/stdev',
	'value': require( '@stdlib/stats/base/stdev' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdev',
		'@stdlib/stats/base/nanstdev',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/stdevm',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.stdevch',
	'path': '@stdlib/stats/base/stdevch',
	'value': require( '@stdlib/stats/base/stdevch' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevch',
		'@stdlib/stats/base/nanstdevch',
		'@stdlib/stats/base/sstdevch',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.stdevpn',
	'path': '@stdlib/stats/base/stdevpn',
	'value': require( '@stdlib/stats/base/stdevpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevpn',
		'@stdlib/stats/base/nanstdevpn',
		'@stdlib/stats/base/sstdevpn',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/stdevmpn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.stdevtk',
	'path': '@stdlib/stats/base/stdevtk',
	'value': require( '@stdlib/stats/base/stdevtk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevtk',
		'@stdlib/stats/base/nanstdevtk',
		'@stdlib/stats/base/sstdevtk',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.stdevwd',
	'path': '@stdlib/stats/base/stdevwd',
	'value': require( '@stdlib/stats/base/stdevwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevwd',
		'@stdlib/stats/base/nanstdevwd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.stdevyc',
	'path': '@stdlib/stats/base/stdevyc',
	'value': require( '@stdlib/stats/base/stdevyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dstdevyc',
		'@stdlib/stats/base/nanstdevyc',
		'@stdlib/stats/base/sstdevyc',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.svariance',
	'path': '@stdlib/stats/base/svariance',
	'value': require( '@stdlib/stats/base/svariance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/snanvariance',
		'@stdlib/stats/base/sstdev',
		'@stdlib/stats/base/svarm',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.svariancech',
	'path': '@stdlib/stats/base/svariancech',
	'value': require( '@stdlib/stats/base/svariancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/snanvariancech',
		'@stdlib/stats/base/sstdevch',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancech'
	]
});

ns.push({
	'alias': 'base.strided.svariancepn',
	'path': '@stdlib/stats/base/svariancepn',
	'value': require( '@stdlib/stats/base/svariancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/snanvariancepn',
		'@stdlib/stats/base/sstdevpn',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/svarmpn',
		'@stdlib/stats/base/variancepn'
	]
});

ns.push({
	'alias': 'base.strided.svariancetk',
	'path': '@stdlib/stats/base/svariancetk',
	'value': require( '@stdlib/stats/base/svariancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/snanvariancetk',
		'@stdlib/stats/base/sstdevtk',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancetk'
	]
});

ns.push({
	'alias': 'base.strided.svariancewd',
	'path': '@stdlib/stats/base/svariancewd',
	'value': require( '@stdlib/stats/base/svariancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/snanvariancewd',
		'@stdlib/stats/base/sstdevwd',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/variancewd'
	]
});

ns.push({
	'alias': 'base.strided.svarianceyc',
	'path': '@stdlib/stats/base/svarianceyc',
	'value': require( '@stdlib/stats/base/svarianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/snanvarianceyc',
		'@stdlib/stats/base/sstdevyc',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/varianceyc'
	]
});

ns.push({
	'alias': 'base.strided.ternary',
	'path': '@stdlib/strided/base/ternary',
	'value': require( '@stdlib/strided/base/ternary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.unary',
	'path': '@stdlib/strided/base/unary',
	'value': require( '@stdlib/strided/base/unary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/binary',
		'@stdlib/strided/base/dmap',
		'@stdlib/strided/base/nullary',
		'@stdlib/strided/base/quaternary',
		'@stdlib/strided/base/quinary',
		'@stdlib/strided/base/smap',
		'@stdlib/strided/base/ternary'
	]
});

ns.push({
	'alias': 'base.strided.variance',
	'path': '@stdlib/stats/base/variance',
	'value': require( '@stdlib/stats/base/variance' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariance',
		'@stdlib/stats/base/nanvariance',
		'@stdlib/stats/base/stdev',
		'@stdlib/stats/base/svariance',
		'@stdlib/stats/base/varm'
	]
});

ns.push({
	'alias': 'base.strided.variancech',
	'path': '@stdlib/stats/base/variancech',
	'value': require( '@stdlib/stats/base/variancech' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancech',
		'@stdlib/stats/base/nanvariancech',
		'@stdlib/stats/base/stdevch',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.variancepn',
	'path': '@stdlib/stats/base/variancepn',
	'value': require( '@stdlib/stats/base/variancepn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancepn',
		'@stdlib/stats/base/nanvariancepn',
		'@stdlib/stats/base/stdevpn',
		'@stdlib/stats/base/variance',
		'@stdlib/stats/base/varmpn'
	]
});

ns.push({
	'alias': 'base.strided.variancetk',
	'path': '@stdlib/stats/base/variancetk',
	'value': require( '@stdlib/stats/base/variancetk' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancetk',
		'@stdlib/stats/base/nanvariancetk',
		'@stdlib/stats/base/stdevtk',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.variancewd',
	'path': '@stdlib/stats/base/variancewd',
	'value': require( '@stdlib/stats/base/variancewd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvariancewd',
		'@stdlib/stats/base/nanvariancewd',
		'@stdlib/stats/base/stdevwd',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.strided.varianceyc',
	'path': '@stdlib/stats/base/varianceyc',
	'value': require( '@stdlib/stats/base/varianceyc' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/base/dvarianceyc',
		'@stdlib/stats/base/nanvarianceyc',
		'@stdlib/stats/base/stdevyc',
		'@stdlib/stats/base/variance'
	]
});

ns.push({
	'alias': 'base.sumSeries',
	'path': '@stdlib/math/base/tools/sum-series',
	'value': require( '@stdlib/math/base/tools/sum-series' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.tan',
	'path': '@stdlib/math/base/special/tan',
	'value': require( '@stdlib/math/base/special/tan' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.tanh',
	'path': '@stdlib/math/base/special/tanh',
	'value': require( '@stdlib/math/base/special/tanh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cosh',
		'@stdlib/math/base/special/sinh',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.toBinaryString',
	'path': '@stdlib/number/float64/base/to-binary-string',
	'value': require( '@stdlib/number/float64/base/to-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/from-binary-string',
		'@stdlib/number/float32/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.toBinaryStringf',
	'path': '@stdlib/number/float32/base/to-binary-string',
	'value': require( '@stdlib/number/float32/base/to-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/from-binary-string',
		'@stdlib/number/float64/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.toBinaryStringUint8',
	'path': '@stdlib/number/uint8/base/to-binary-string',
	'value': require( '@stdlib/number/uint8/base/to-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.toBinaryStringUint16',
	'path': '@stdlib/number/uint16/base/to-binary-string',
	'value': require( '@stdlib/number/uint16/base/to-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.toBinaryStringUint32',
	'path': '@stdlib/number/uint32/base/to-binary-string',
	'value': require( '@stdlib/number/uint32/base/to-binary-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/to-binary-string'
	]
});

ns.push({
	'alias': 'base.toWordf',
	'path': '@stdlib/number/float32/base/to-word',
	'value': require( '@stdlib/number/float32/base/to-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/from-word',
		'@stdlib/number/float64/base/to-words'
	]
});

ns.push({
	'alias': 'base.toWords',
	'path': '@stdlib/number/float64/base/to-words',
	'value': require( '@stdlib/number/float64/base/to-words' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/from-words',
		'@stdlib/number/float32/base/to-word'
	]
});

ns.push({
	'alias': 'base.tribonacci',
	'path': '@stdlib/math/base/special/tribonacci',
	'value': require( '@stdlib/math/base/special/tribonacci' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/fibonacci'
	]
});

ns.push({
	'alias': 'base.trigamma',
	'path': '@stdlib/math/base/special/trigamma',
	'value': require( '@stdlib/math/base/special/trigamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/digamma',
		'@stdlib/math/base/special/gamma'
	]
});

ns.push({
	'alias': 'base.trunc',
	'path': '@stdlib/math/base/special/trunc',
	'value': require( '@stdlib/math/base/special/trunc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil',
		'@stdlib/math/base/special/floor',
		'@stdlib/math/base/special/round'
	]
});

ns.push({
	'alias': 'base.trunc2',
	'path': '@stdlib/math/base/special/trunc2',
	'value': require( '@stdlib/math/base/special/trunc2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil2',
		'@stdlib/math/base/special/floor2',
		'@stdlib/math/base/special/round2',
		'@stdlib/math/base/special/trunc',
		'@stdlib/math/base/special/trunc10'
	]
});

ns.push({
	'alias': 'base.trunc10',
	'path': '@stdlib/math/base/special/trunc10',
	'value': require( '@stdlib/math/base/special/trunc10' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceil10',
		'@stdlib/math/base/special/floor10',
		'@stdlib/math/base/special/round10',
		'@stdlib/math/base/special/trunc',
		'@stdlib/math/base/special/trunc2'
	]
});

ns.push({
	'alias': 'base.truncb',
	'path': '@stdlib/math/base/special/truncb',
	'value': require( '@stdlib/math/base/special/truncb' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilb',
		'@stdlib/math/base/special/floorb',
		'@stdlib/math/base/special/roundb',
		'@stdlib/math/base/special/trunc',
		'@stdlib/math/base/special/truncn'
	]
});

ns.push({
	'alias': 'base.truncf',
	'path': '@stdlib/math/base/special/truncf',
	'value': require( '@stdlib/math/base/special/truncf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilf',
		'@stdlib/math/base/special/floorf',
		'@stdlib/math/base/special/roundf',
		'@stdlib/math/base/special/trunc'
	]
});

ns.push({
	'alias': 'base.truncn',
	'path': '@stdlib/math/base/special/truncn',
	'value': require( '@stdlib/math/base/special/truncn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceiln',
		'@stdlib/math/base/special/floorn',
		'@stdlib/math/base/special/roundn',
		'@stdlib/math/base/special/trunc',
		'@stdlib/math/base/special/truncb'
	]
});

ns.push({
	'alias': 'base.truncsd',
	'path': '@stdlib/math/base/special/truncsd',
	'value': require( '@stdlib/math/base/special/truncsd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ceilsd',
		'@stdlib/math/base/special/floorsd',
		'@stdlib/math/base/special/roundsd',
		'@stdlib/math/base/special/trunc'
	]
});

ns.push({
	'alias': 'base.uimul',
	'path': '@stdlib/math/base/special/uimul',
	'value': require( '@stdlib/math/base/special/uimul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/imul'
	]
});

ns.push({
	'alias': 'base.uimuldw',
	'path': '@stdlib/math/base/special/uimuldw',
	'value': require( '@stdlib/math/base/special/uimuldw' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/imuldw',
		'@stdlib/math/base/special/uimul'
	]
});

ns.push({
	'alias': 'base.uint32ToInt32',
	'path': '@stdlib/number/uint32/base/to-int32',
	'value': require( '@stdlib/number/uint32/base/to-int32' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.vercos',
	'path': '@stdlib/math/base/special/vercos',
	'value': require( '@stdlib/math/base/special/vercos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/versin'
	]
});

ns.push({
	'alias': 'base.versin',
	'path': '@stdlib/math/base/special/versin',
	'value': require( '@stdlib/math/base/special/versin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/vercos'
	]
});

ns.push({
	'alias': 'base.wrap',
	'path': '@stdlib/math/base/special/wrap',
	'value': require( '@stdlib/math/base/special/wrap' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/clamp'
	]
});

ns.push({
	'alias': 'base.xlog1py',
	'path': '@stdlib/math/base/special/xlog1py',
	'value': require( '@stdlib/math/base/special/xlog1py' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log1p',
		'@stdlib/math/base/special/xlogy'
	]
});

ns.push({
	'alias': 'base.xlogy',
	'path': '@stdlib/math/base/special/xlogy',
	'value': require( '@stdlib/math/base/special/xlogy' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ln',
		'@stdlib/math/base/special/xlog1py'
	]
});

ns.push({
	'alias': 'base.zeta',
	'path': '@stdlib/math/base/special/riemann-zeta',
	'value': require( '@stdlib/math/base/special/riemann-zeta' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'bench',
	'path': '@stdlib/bench',
	'value': require( '@stdlib/bench' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/timeit'
	]
});

ns.push({
	'alias': 'BERNDT_CPS_WAGES_1985',
	'path': '@stdlib/datasets/berndt-cps-wages-1985',
	'value': require( '@stdlib/datasets/berndt-cps-wages-1985' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/berndt-cps-wages-1978'
	]
});

ns.push({
	'alias': 'bifurcate',
	'path': '@stdlib/utils/bifurcate',
	'value': require( '@stdlib/utils/bifurcate' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/bifurcate-own',
		'@stdlib/utils/group'
	]
});

ns.push({
	'alias': 'bifurcateBy',
	'path': '@stdlib/utils/bifurcate-by',
	'value': require( '@stdlib/utils/bifurcate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/group-by'
	]
});

ns.push({
	'alias': 'bifurcateByAsync',
	'path': '@stdlib/utils/async/bifurcate-by',
	'value': require( '@stdlib/utils/async/bifurcate-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/async/group-by'
	]
});

ns.push({
	'alias': 'bifurcateIn',
	'path': '@stdlib/utils/bifurcate-in',
	'value': require( '@stdlib/utils/bifurcate-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/bifurcate-own',
		'@stdlib/utils/group-in'
	]
});

ns.push({
	'alias': 'bifurcateOwn',
	'path': '@stdlib/utils/bifurcate-own',
	'value': require( '@stdlib/utils/bifurcate-own' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/bifurcate',
		'@stdlib/utils/bifurcate-by',
		'@stdlib/utils/bifurcate-in',
		'@stdlib/utils/group-own'
	]
});

ns.push({
	'alias': 'BigInt',
	'path': '@stdlib/bigint/ctor',
	'value': require( '@stdlib/bigint/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'binomialTest',
	'path': '@stdlib/stats/binomial-test',
	'value': require( '@stdlib/stats/binomial-test' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'Buffer',
	'path': '@stdlib/buffer/ctor',
	'value': require( '@stdlib/buffer/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer'
	]
});

ns.push({
	'alias': 'buffer2json',
	'path': '@stdlib/buffer/to-json',
	'value': require( '@stdlib/buffer/to-json' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/to-json',
		'@stdlib/buffer/reviver'
	]
});

ns.push({
	'alias': 'BYTE_ORDER',
	'path': '@stdlib/os/byte-order',
	'value': require( '@stdlib/os/byte-order' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/is-big-endian',
		'@stdlib/assert/is-little-endian'
	]
});


// EXPORTS //

module.exports = ns;
