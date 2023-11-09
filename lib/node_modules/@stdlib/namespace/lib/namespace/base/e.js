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
	'alias': 'base.ellipe',
	'path': '@stdlib/math/base/special/ellipe',
	'value': require( '@stdlib/math/base/special/ellipe' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipj',
		'@stdlib/math/base/special/ellipk'
	]
});

ns.push({
	'alias': 'base.ellipj',
	'path': '@stdlib/math/base/special/ellipj',
	'value': require( '@stdlib/math/base/special/ellipj' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipe',
		'@stdlib/math/base/special/ellipk'
	]
});

ns.push({
	'alias': 'base.ellipk',
	'path': '@stdlib/math/base/special/ellipk',
	'value': require( '@stdlib/math/base/special/ellipk' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/ellipe',
		'@stdlib/math/base/special/ellipj'
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
		'@stdlib/math/base/special/erfcinv',
		'@stdlib/math/base/special/erfcx'
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
		'@stdlib/math/base/special/erfinv',
		'@stdlib/math/base/special/erfcx'
	]
});

ns.push({
	'alias': 'base.erfcx',
	'path': '@stdlib/math/base/special/erfcx',
	'value': require( '@stdlib/math/base/special/erfcx' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/erfc',
		'@stdlib/math/base/special/erfcinv',
		'@stdlib/math/base/special/erf',
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


// EXPORTS //

module.exports = ns;
