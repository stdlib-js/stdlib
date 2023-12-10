/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
	'alias': 'random.array.arcsine',
	'path': '@stdlib/random/array/arcsine',
	'value': require( '@stdlib/random/array/arcsine' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/arcsine',
		'@stdlib/random/base/arcsine',
		'@stdlib/random/strided/arcsine'
	]
});

ns.push({
	'alias': 'random.array.beta',
	'path': '@stdlib/random/array/beta',
	'value': require( '@stdlib/random/array/beta' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/beta',
		'@stdlib/random/base/beta',
		'@stdlib/random/strided/beta'
	]
});

ns.push({
	'alias': 'random.array.betaprime',
	'path': '@stdlib/random/array/betaprime',
	'value': require( '@stdlib/random/array/betaprime' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/betaprime',
		'@stdlib/random/base/betaprime',
		'@stdlib/random/strided/betaprime'
	]
});

ns.push({
	'alias': 'random.array.cosine',
	'path': '@stdlib/random/array/cosine',
	'value': require( '@stdlib/random/array/cosine' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/cosine',
		'@stdlib/random/base/cosine',
		'@stdlib/random/strided/cosine'
	]
});

ns.push({
	'alias': 'random.array.discreteUniform',
	'path': '@stdlib/random/array/discrete-uniform',
	'value': require( '@stdlib/random/array/discrete-uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/uniform',
		'@stdlib/random/discrete-uniform',
		'@stdlib/random/base/discrete-uniform',
		'@stdlib/random/strided/discrete-uniform'
	]
});

ns.push({
	'alias': 'random.array.exponential',
	'path': '@stdlib/random/array/exponential',
	'value': require( '@stdlib/random/array/exponential' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/exponential',
		'@stdlib/random/base/exponential',
		'@stdlib/random/strided/exponential'
	]
});

ns.push({
	'alias': 'random.array.gamma',
	'path': '@stdlib/random/array/gamma',
	'value': require( '@stdlib/random/array/gamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/gamma',
		'@stdlib/random/base/gamma',
		'@stdlib/random/strided/gamma'
	]
});

ns.push({
	'alias': 'random.array.invgamma',
	'path': '@stdlib/random/array/invgamma',
	'value': require( '@stdlib/random/array/invgamma' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/invgamma',
		'@stdlib/random/base/invgamma',
		'@stdlib/random/strided/invgamma'
	]
});

ns.push({
	'alias': 'random.array.lognormal',
	'path': '@stdlib/random/array/lognormal',
	'value': require( '@stdlib/random/array/lognormal' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/lognormal',
		'@stdlib/random/base/lognormal',
		'@stdlib/random/strided/lognormal'
	]
});

ns.push({
	'alias': 'random.array.minstd',
	'path': '@stdlib/random/array/minstd',
	'value': require( '@stdlib/random/array/minstd' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/minstd-shuffle',
		'@stdlib/random/array/randu',
		'@stdlib/random/minstd',
		'@stdlib/random/base/minstd',
		'@stdlib/random/strided/minstd'
	]
});

ns.push({
	'alias': 'random.array.minstdShuffle',
	'path': '@stdlib/random/array/minstd-shuffle',
	'value': require( '@stdlib/random/array/minstd-shuffle' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/minstd',
		'@stdlib/random/array/randu',
		'@stdlib/random/minstd-shuffle',
		'@stdlib/random/base/minstd-shuffle',
		'@stdlib/random/strided/minstd-shuffle'
	]
});

ns.push({
	'alias': 'random.array.mt19937',
	'path': '@stdlib/random/array/mt19937',
	'value': require( '@stdlib/random/array/mt19937' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/randu',
		'@stdlib/random/mt19937',
		'@stdlib/random/base/mt19937',
		'@stdlib/random/strided/mt19937'
	]
});

ns.push({
	'alias': 'random.array.normal',
	'path': '@stdlib/random/array/normal',
	'value': require( '@stdlib/random/array/normal' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/normal',
		'@stdlib/random/base/normal',
		'@stdlib/random/strided/normal'
	]
});

ns.push({
	'alias': 'random.array.randu',
	'path': '@stdlib/random/array/randu',
	'value': require( '@stdlib/random/array/randu' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/uniform',
		'@stdlib/random/base/randu',
		'@stdlib/random/strided/randu',
		'@stdlib/random/randu'
	]
});

ns.push({
	'alias': 'random.array.uniform',
	'path': '@stdlib/random/array/uniform',
	'value': require( '@stdlib/random/array/uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/array/discrete-uniform',
		'@stdlib/random/base/uniform',
		'@stdlib/random/strided/uniform',
		'@stdlib/random/uniform'
	]
});


// EXPORTS //

module.exports = ns;
