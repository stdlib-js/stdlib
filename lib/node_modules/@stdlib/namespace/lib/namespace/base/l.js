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
	'alias': 'base.log1pmx',
	'path': '@stdlib/math/base/special/log1pmx',
	'value': require( '@stdlib/math/base/special/log1pmx' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ln',
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


// EXPORTS //

module.exports = ns;
