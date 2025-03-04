/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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
	'alias': 'base.gammasgn',
	'path': '@stdlib/math/base/special/gammasgn',
	'value': require( '@stdlib/math/base/special/gammasgn' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/gamma'
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


// EXPORTS //

module.exports = ns;
