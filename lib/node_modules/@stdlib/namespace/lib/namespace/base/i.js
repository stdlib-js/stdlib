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
	'path': '@stdlib/math/base/ops/imul',
	'value': require( '@stdlib/math/base/ops/imul' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/imuldw',
		'@stdlib/math/base/ops/uimul'
	]
});

ns.push({
	'alias': 'base.imuldw',
	'path': '@stdlib/math/base/ops/imuldw',
	'value': require( '@stdlib/math/base/ops/imuldw' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/imul',
		'@stdlib/math/base/ops/uimuldw'
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
	'alias': 'base.invcase',
	'path': '@stdlib/string/base/invcase',
	'value': require( '@stdlib/string/base/invcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/uppercase'
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
	'alias': 'base.isNegativeFinite',
	'path': '@stdlib/math/base/assert/is-negative-finite',
	'value': require( '@stdlib/math/base/assert/is-negative-finite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-positive-finite',
		'@stdlib/math/base/assert/is-nonnegative-finite',
		'@stdlib/math/base/assert/is-nonpositive-finite'
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
	'alias': 'base.isNonNegativeFinite',
	'path': '@stdlib/math/base/assert/is-nonnegative-finite',
	'value': require( '@stdlib/math/base/assert/is-nonnegative-finite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-negative-finite',
		'@stdlib/math/base/assert/is-positive-finite',
		'@stdlib/math/base/assert/is-nonpositive-finite'
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
	'alias': 'base.isNonPositiveFinite',
	'path': '@stdlib/math/base/assert/is-nonpositive-finite',
	'value': require( '@stdlib/math/base/assert/is-nonpositive-finite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-negative-finite',
		'@stdlib/math/base/assert/is-positive-finite',
		'@stdlib/math/base/assert/is-nonnegative-finite'
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
	'alias': 'base.isPositiveFinite',
	'path': '@stdlib/math/base/assert/is-positive-finite',
	'value': require( '@stdlib/math/base/assert/is-positive-finite' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/assert/is-negative-finite',
		'@stdlib/math/base/assert/is-nonnegative-finite',
		'@stdlib/math/base/assert/is-nonpositive-finite'
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


// EXPORTS //

module.exports = ns;
