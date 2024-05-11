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
	'alias': 'base.tand',
	'path': '@stdlib/math/base/special/tand',
	'value': require( '@stdlib/math/base/special/tand' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/tan',
		'@stdlib/math/base/special/cosd',
		'@stdlib/math/base/special/sind'
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
	'alias': 'base.transpose',
	'path': '@stdlib/ndarray/base/transpose',
	'value': require( '@stdlib/ndarray/base/transpose' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/transpose'
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


// EXPORTS //

module.exports = ns;
