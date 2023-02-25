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
	'alias': 'random.strided.arcsine',
	'path': '@stdlib/random/strided/arcsine',
	'value': require( '@stdlib/random/strided/arcsine' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/arcsine',
		'@stdlib/random/base/arcsine',
		'@stdlib/random/array/arcsine'
	]
});

ns.push({
	'alias': 'random.strided.beta',
	'path': '@stdlib/random/strided/beta',
	'value': require( '@stdlib/random/strided/beta' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/beta',
		'@stdlib/random/base/beta',
		'@stdlib/random/array/beta'
	]
});

ns.push({
	'alias': 'random.strided.betaprime',
	'path': '@stdlib/random/strided/betaprime',
	'value': require( '@stdlib/random/strided/betaprime' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/betaprime',
		'@stdlib/random/base/betaprime',
		'@stdlib/random/array/betaprime'
	]
});

ns.push({
	'alias': 'random.strided.discreteUniform',
	'path': '@stdlib/random/strided/discrete-uniform',
	'value': require( '@stdlib/random/strided/discrete-uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/discrete-uniform',
		'@stdlib/random/base/discrete-uniform',
		'@stdlib/random/array/discrete-uniform',
		'@stdlib/random/strided/uniform'
	]
});

ns.push({
	'alias': 'random.strided.exponential',
	'path': '@stdlib/random/strided/exponential',
	'value': require( '@stdlib/random/strided/exponential' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/exponential',
		'@stdlib/random/base/exponential',
		'@stdlib/random/array/exponential'
	]
});

ns.push({
	'alias': 'random.strided.lognormal',
	'path': '@stdlib/random/strided/lognormal',
	'value': require( '@stdlib/random/strided/lognormal' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/lognormal',
		'@stdlib/random/base/lognormal',
		'@stdlib/random/array/lognormal'
	]
});

ns.push({
	'alias': 'random.strided.minstd',
	'path': '@stdlib/random/strided/minstd',
	'value': require( '@stdlib/random/strided/minstd' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/minstd',
		'@stdlib/random/base/minstd',
		'@stdlib/random/array/minstd',
		'@stdlib/random/strided/minstd-shuffle',
		'@stdlib/random/strided/randu'
	]
});

ns.push({
	'alias': 'random.strided.minstdShuffle',
	'path': '@stdlib/random/strided/minstd-shuffle',
	'value': require( '@stdlib/random/strided/minstd-shuffle' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/minstd-shuffle',
		'@stdlib/random/base/minstd-shuffle',
		'@stdlib/random/array/minstd-shuffle',
		'@stdlib/random/strided/minstd',
		'@stdlib/random/strided/randu'
	]
});

ns.push({
	'alias': 'random.strided.mt19937',
	'path': '@stdlib/random/strided/mt19937',
	'value': require( '@stdlib/random/strided/mt19937' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/mt19937',
		'@stdlib/random/base/mt19937',
		'@stdlib/random/array/mt19937',
		'@stdlib/random/strided/randu'
	]
});

ns.push({
	'alias': 'random.strided.normal',
	'path': '@stdlib/random/strided/normal',
	'value': require( '@stdlib/random/strided/normal' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/normal',
		'@stdlib/random/base/normal',
		'@stdlib/random/array/normal'
	]
});

ns.push({
	'alias': 'random.strided.randu',
	'path': '@stdlib/random/strided/randu',
	'value': require( '@stdlib/random/strided/randu' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/randu',
		'@stdlib/random/base/randu',
		'@stdlib/random/array/randu',
		'@stdlib/random/strided/uniform'
	]
});

ns.push({
	'alias': 'random.strided.uniform',
	'path': '@stdlib/random/strided/uniform',
	'value': require( '@stdlib/random/strided/uniform' ),
	'type': 'Function',
	'related': [
		'@stdlib/random/uniform',
		'@stdlib/random/base/uniform',
		'@stdlib/random/array/uniform',
		'@stdlib/random/strided/discrete-uniform'
	]
});


// EXPORTS //

module.exports = ns;
