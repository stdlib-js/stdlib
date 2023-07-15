/* eslint-disable max-lines */

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
	'alias': 'base.firstCodePoint',
	'path': '@stdlib/string/base/first-code-point',
	'value': require( '@stdlib/string/base/first-code-point' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/first',
		'@stdlib/string/base/first-grapheme-cluster',
		'@stdlib/string/base/last-code-point',
		'@stdlib/string/base/remove-first-code-point',
		'@stdlib/string/first'
	]
});

ns.push({
	'alias': 'base.firstCodeUnit',
	'path': '@stdlib/string/base/first',
	'value': require( '@stdlib/string/base/first' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/first-code-point',
		'@stdlib/string/base/first-grapheme-cluster',
		'@stdlib/string/base/last',
		'@stdlib/string/base/remove-first',
		'@stdlib/string/first'
	]
});

ns.push({
	'alias': 'base.firstGraphemeCluster',
	'path': '@stdlib/string/base/first-grapheme-cluster',
	'value': require( '@stdlib/string/base/first-grapheme-cluster' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/first',
		'@stdlib/string/base/first-code-point',
		'@stdlib/string/base/last-grapheme-cluster',
		'@stdlib/string/base/remove-first-grapheme-cluster',
		'@stdlib/string/first'
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
	'alias': 'base.flipsignf',
	'path': '@stdlib/math/base/special/flipsignf',
	'value': require( '@stdlib/math/base/special/flipsignf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/copysignf',
		'@stdlib/math/base/special/flipsign'
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
	'alias': 'base.forEachChar',
	'path': '@stdlib/string/base/for-each',
	'value': require( '@stdlib/string/base/for-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/for-each-code-point',
		'@stdlib/string/base/for-each-grapheme-cluster',
		'@stdlib/string/for-each'
	]
});

ns.push({
	'alias': 'base.forEachCodePoint',
	'path': '@stdlib/string/base/for-each-code-point',
	'value': require( '@stdlib/string/base/for-each-code-point' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/for-each',
		'@stdlib/string/base/for-each-grapheme-cluster',
		'@stdlib/string/for-each'
	]
});

ns.push({
	'alias': 'base.forEachGraphemeCluster',
	'path': '@stdlib/string/base/for-each-grapheme-cluster',
	'value': require( '@stdlib/string/base/for-each-grapheme-cluster' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/for-each',
		'@stdlib/string/base/for-each-code-point',
		'@stdlib/string/for-each'
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


// EXPORTS //

module.exports = ns;
