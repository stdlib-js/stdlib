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


// EXPORTS //

module.exports = ns;
