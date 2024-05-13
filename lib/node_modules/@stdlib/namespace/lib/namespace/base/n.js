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
	'alias': 'base.ndzeros',
	'path': '@stdlib/ndarray/base/zeros',
	'value': require( '@stdlib/ndarray/base/zeros' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/base/ctor',
		'@stdlib/ndarray/base/full',
		'@stdlib/ndarray/base/ones',
		'@stdlib/ndarray/base/zeros-like'
	]
});

ns.push({
	'alias': 'base.ndzerosLike',
	'path': '@stdlib/ndarray/base/zeros-like',
	'value': require( '@stdlib/ndarray/base/zeros-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/base/ctor',
		'@stdlib/ndarray/base/full-like',
		'@stdlib/ndarray/base/ones-like',
		'@stdlib/ndarray/base/zeros'
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
	'alias': 'base.normalizeMultiSlice',
	'path': '@stdlib/slice/base/normalize-multi-slice',
	'value': require( '@stdlib/slice/base/normalize-multi-slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/normalize-slice'
	]
});

ns.push({
	'alias': 'base.normalizeSlice',
	'path': '@stdlib/slice/base/normalize-slice',
	'value': require( '@stdlib/slice/base/normalize-slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/normalize-multi-slice'
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


// EXPORTS //

module.exports = ns;
