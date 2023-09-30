/* eslint-disable max-lines */

/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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
	'alias': 'namedtypedtuple',
	'path': '@stdlib/utils/named-typed-tuple',
	'value': require( '@stdlib/utils/named-typed-tuple' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/typed',
		'@stdlib/utils/named-tuple'
	]
});

ns.push({
	'alias': 'naryFunction',
	'path': '@stdlib/utils/nary-function',
	'value': require( '@stdlib/utils/nary-function' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/mask-arguments',
		'@stdlib/utils/pick-arguments'
	]
});

ns.push({
	'alias': 'nativeClass',
	'path': '@stdlib/utils/native-class',
	'value': require( '@stdlib/utils/native-class' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/constructor-name',
		'@stdlib/utils/type-of'
	]
});

ns.push({
	'alias': 'ndarray',
	'path': '@stdlib/ndarray/ctor',
	'value': require( '@stdlib/ndarray/ctor' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/fancy'
	]
});

ns.push({
	'alias': 'ndarray2array',
	'path': '@stdlib/ndarray/to-array',
	'value': require( '@stdlib/ndarray/to-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'ndarrayCastingModes',
	'path': '@stdlib/ndarray/casting-modes',
	'value': require( '@stdlib/ndarray/casting-modes' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'ndarrayDataTypes',
	'path': '@stdlib/ndarray/dtypes',
	'value': require( '@stdlib/ndarray/dtypes' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/dtypes',
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/array/typed-dtypes'
	]
});

ns.push({
	'alias': 'ndarrayDispatch',
	'path': '@stdlib/ndarray/dispatch',
	'value': require( '@stdlib/ndarray/dispatch' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'ndarrayIndexModes',
	'path': '@stdlib/ndarray/index-modes',
	'value': require( '@stdlib/ndarray/index-modes' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'ndarrayMinDataType',
	'path': '@stdlib/ndarray/min-dtype',
	'value': require( '@stdlib/ndarray/min-dtype' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/dtypes',
		'@stdlib/ndarray/promotion-rules',
		'@stdlib/ndarray/safe-casts'
	]
});

ns.push({
	'alias': 'ndarrayNextDataType',
	'path': '@stdlib/ndarray/next-dtype',
	'value': require( '@stdlib/ndarray/next-dtype' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/dtypes',
		'@stdlib/ndarray/promotion-rules',
		'@stdlib/ndarray/safe-casts'
	]
});

ns.push({
	'alias': 'ndarrayOrders',
	'path': '@stdlib/ndarray/orders',
	'value': require( '@stdlib/ndarray/orders' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'ndarrayPromotionRules',
	'path': '@stdlib/ndarray/promotion-rules',
	'value': require( '@stdlib/ndarray/promotion-rules' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/casting-modes',
		'@stdlib/ndarray/dtypes',
		'@stdlib/ndarray/safe-casts'
	]
});

ns.push({
	'alias': 'ndarraySafeCasts',
	'path': '@stdlib/ndarray/safe-casts',
	'value': require( '@stdlib/ndarray/safe-casts' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/casting-modes',
		'@stdlib/ndarray/dtypes',
		'@stdlib/ndarray/same-kind-casts'
	]
});

ns.push({
	'alias': 'ndarraySameKindCasts',
	'path': '@stdlib/ndarray/same-kind-casts',
	'value': require( '@stdlib/ndarray/same-kind-casts' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/casting-modes',
		'@stdlib/ndarray/dtypes',
		'@stdlib/ndarray/safe-casts'
	]
});

ns.push({
	'alias': 'ndempty',
	'path': '@stdlib/ndarray/empty',
	'value': require( '@stdlib/ndarray/empty' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/empty-like',
		'@stdlib/ndarray/full',
		'@stdlib/ndarray/ones',
		'@stdlib/ndarray/zeros'
	]
});

ns.push({
	'alias': 'ndemptyLike',
	'path': '@stdlib/ndarray/empty-like',
	'value': require( '@stdlib/ndarray/empty-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/empty',
		'@stdlib/ndarray/full-like',
		'@stdlib/ndarray/ones-like',
		'@stdlib/ndarray/zeros-like'
	]
});

ns.push({
	'alias': 'ndslice',
	'path': '@stdlib/ndarray/slice',
	'value': require( '@stdlib/ndarray/slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/slice-assign'
	]
});

ns.push({
	'alias': 'ndsliceAssign',
	'path': '@stdlib/ndarray/slice-assign',
	'value': require( '@stdlib/ndarray/slice-assign' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor',
		'@stdlib/ndarray/slice'
	]
});

ns.push({
	'alias': 'ndzeros',
	'path': '@stdlib/ndarray/zeros',
	'value': require( '@stdlib/ndarray/zeros' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/empty',
		'@stdlib/ndarray/full',
		'@stdlib/ndarray/ones',
		'@stdlib/ndarray/zeros-like'
	]
});

ns.push({
	'alias': 'ndzerosLike',
	'path': '@stdlib/ndarray/zeros-like',
	'value': require( '@stdlib/ndarray/zeros-like' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/empty-like',
		'@stdlib/ndarray/full-like',
		'@stdlib/ndarray/ones-like',
		'@stdlib/ndarray/zeros'
	]
});

ns.push({
	'alias': 'nextGraphemeClusterBreak',
	'path': '@stdlib/string/next-grapheme-cluster-break',
	'value': require( '@stdlib/string/next-grapheme-cluster-break' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/num-grapheme-clusters',
		'@stdlib/string/prev-grapheme-cluster-break'
	]
});

ns.push({
	'alias': 'nextTick',
	'path': '@stdlib/utils/next-tick',
	'value': require( '@stdlib/utils/next-tick' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'NIGHTINGALES_ROSE',
	'path': '@stdlib/datasets/nightingales-rose',
	'value': require( '@stdlib/datasets/nightingales-rose' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'NINF',
	'path': '@stdlib/constants/float64/ninf',
	'value': require( '@stdlib/constants/float64/ninf' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/ninf',
		'@stdlib/constants/float32/ninf',
		'@stdlib/constants/float64/pinf'
	]
});

ns.push({
	'alias': 'NODE_VERSION',
	'path': '@stdlib/process/node-version',
	'value': require( '@stdlib/process/node-version' ),
	'type': 'string',
	'related': []
});

ns.push({
	'alias': 'none',
	'path': '@stdlib/utils/none',
	'value': require( '@stdlib/utils/none' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any',
		'@stdlib/utils/every',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none-by',
		'@stdlib/utils/some'
	]
});

ns.push({
	'alias': 'noneBy',
	'path': '@stdlib/utils/none-by',
	'value': require( '@stdlib/utils/none-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by',
		'@stdlib/utils/every-by',
		'@stdlib/utils/for-each',
		'@stdlib/utils/none',
		'@stdlib/utils/none-by-right',
		'@stdlib/utils/some-by'
	]
});

ns.push({
	'alias': 'noneByAsync',
	'path': '@stdlib/utils/async/none-by',
	'value': require( '@stdlib/utils/async/none-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by',
		'@stdlib/utils/async/every-by',
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/none-by',
		'@stdlib/utils/async/none-by-right',
		'@stdlib/utils/async/some-by'
	]
});

ns.push({
	'alias': 'noneByRight',
	'path': '@stdlib/utils/none-by-right',
	'value': require( '@stdlib/utils/none-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/any-by-right',
		'@stdlib/utils/every-by-right',
		'@stdlib/utils/for-each-right',
		'@stdlib/utils/none',
		'@stdlib/utils/none-by',
		'@stdlib/utils/some-by-right'
	]
});

ns.push({
	'alias': 'noneByRightAsync',
	'path': '@stdlib/utils/async/none-by-right',
	'value': require( '@stdlib/utils/async/none-by-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/any-by-right',
		'@stdlib/utils/async/every-by-right',
		'@stdlib/utils/async/for-each-right',
		'@stdlib/utils/async/none-by',
		'@stdlib/utils/none-by-right',
		'@stdlib/utils/async/some-by-right'
	]
});

ns.push({
	'alias': 'nonEnumerableProperties',
	'path': '@stdlib/utils/nonenumerable-properties',
	'value': require( '@stdlib/utils/nonenumerable-properties' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-properties',
		'@stdlib/utils/inherited-nonenumerable-properties',
		'@stdlib/utils/nonenumerable-properties-in',
		'@stdlib/utils/properties'
	]
});

ns.push({
	'alias': 'nonEnumerablePropertiesIn',
	'path': '@stdlib/utils/nonenumerable-properties-in',
	'value': require( '@stdlib/utils/nonenumerable-properties-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-properties-in',
		'@stdlib/utils/inherited-nonenumerable-properties',
		'@stdlib/utils/nonenumerable-properties',
		'@stdlib/utils/properties-in'
	]
});

ns.push({
	'alias': 'nonEnumerablePropertyNames',
	'path': '@stdlib/utils/nonenumerable-property-names',
	'value': require( '@stdlib/utils/nonenumerable-property-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/keys',
		'@stdlib/utils/inherited-nonenumerable-property-names',
		'@stdlib/utils/nonenumerable-property-names-in',
		'@stdlib/utils/nonenumerable-property-symbols',
		'@stdlib/utils/property-names'
	]
});

ns.push({
	'alias': 'nonEnumerablePropertyNamesIn',
	'path': '@stdlib/utils/nonenumerable-property-names-in',
	'value': require( '@stdlib/utils/nonenumerable-property-names-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/keys-in',
		'@stdlib/utils/inherited-nonenumerable-property-names',
		'@stdlib/utils/nonenumerable-property-names',
		'@stdlib/utils/property-names-in'
	]
});

ns.push({
	'alias': 'nonEnumerablePropertySymbols',
	'path': '@stdlib/utils/nonenumerable-property-symbols',
	'value': require( '@stdlib/utils/nonenumerable-property-symbols' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-property-symbols',
		'@stdlib/utils/inherited-nonenumerable-property-symbols',
		'@stdlib/utils/nonenumerable-property-names',
		'@stdlib/utils/nonenumerable-property-symbols-in',
		'@stdlib/utils/property-symbols'
	]
});

ns.push({
	'alias': 'nonEnumerablePropertySymbolsIn',
	'path': '@stdlib/utils/nonenumerable-property-symbols-in',
	'value': require( '@stdlib/utils/nonenumerable-property-symbols-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/enumerable-property-symbols-in',
		'@stdlib/utils/inherited-nonenumerable-property-symbols',
		'@stdlib/utils/nonenumerable-property-names-in',
		'@stdlib/utils/nonenumerable-property-symbols',
		'@stdlib/utils/property-symbols-in'
	]
});

ns.push({
	'alias': 'nonIndexKeys',
	'path': '@stdlib/utils/nonindex-keys',
	'value': require( '@stdlib/utils/nonindex-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/entries',
		'@stdlib/utils/keys',
		'@stdlib/utils/values'
	]
});

ns.push({
	'alias': 'noop',
	'path': '@stdlib/utils/noop',
	'value': require( '@stdlib/utils/noop' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'now',
	'path': '@stdlib/time/now',
	'value': require( '@stdlib/time/now' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'NUM_CPUS',
	'path': '@stdlib/os/num-cpus',
	'value': require( '@stdlib/os/num-cpus' ),
	'type': 'number',
	'related': []
});

ns.push({
	'alias': 'num2words',
	'path': '@stdlib/string/num2words',
	'value': require( '@stdlib/string/num2words' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'Number',
	'path': '@stdlib/number/ctor',
	'value': require( '@stdlib/number/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'numGraphemeClusters',
	'path': '@stdlib/string/num-grapheme-clusters',
	'value': require( '@stdlib/string/num-grapheme-clusters' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/next-grapheme-cluster-break'
	]
});


// EXPORTS //

module.exports = ns;
