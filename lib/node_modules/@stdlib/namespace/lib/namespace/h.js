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
	'alias': 'HALF_LN2',
	'path': '@stdlib/constants/float64/half-ln-two',
	'value': require( '@stdlib/constants/float64/half-ln-two' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ln-two'
	]
});

ns.push({
	'alias': 'HALF_PI',
	'path': '@stdlib/constants/float64/half-pi',
	'value': require( '@stdlib/constants/float64/half-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'HARRISON_BOSTON_HOUSE_PRICES',
	'path': '@stdlib/datasets/harrison-boston-house-prices',
	'value': require( '@stdlib/datasets/harrison-boston-house-prices' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/harrison-boston-house-prices-corrected',
		'@stdlib/datasets/pace-boston-house-prices'
	]
});

ns.push({
	'alias': 'HARRISON_BOSTON_HOUSE_PRICES_CORRECTED',
	'path': '@stdlib/datasets/harrison-boston-house-prices-corrected',
	'value': require( '@stdlib/datasets/harrison-boston-house-prices-corrected' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/harrison-boston-house-prices',
		'@stdlib/datasets/pace-boston-house-prices'
	]
});

ns.push({
	'alias': 'hasArrayBufferSupport',
	'path': '@stdlib/assert/has-arraybuffer-support',
	'value': require( '@stdlib/assert/has-arraybuffer-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-float32array-support',
		'@stdlib/assert/has-float64array-support',
		'@stdlib/assert/has-int16array-support',
		'@stdlib/assert/has-int32array-support',
		'@stdlib/assert/has-int8array-support',
		'@stdlib/assert/has-node-buffer-support',
		'@stdlib/assert/has-sharedarraybuffer-support',
		'@stdlib/assert/has-uint16array-support',
		'@stdlib/assert/has-uint32array-support',
		'@stdlib/assert/has-uint8array-support',
		'@stdlib/assert/has-uint8clampedarray-support'
	]
});

ns.push({
	'alias': 'hasArrowFunctionSupport',
	'path': '@stdlib/assert/has-arrow-function-support',
	'value': require( '@stdlib/assert/has-arrow-function-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasAsyncAwaitSupport',
	'path': '@stdlib/assert/has-async-await-support',
	'value': require( '@stdlib/assert/has-async-await-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasAsyncIteratorSymbolSupport',
	'path': '@stdlib/assert/has-async-iterator-symbol-support',
	'value': require( '@stdlib/assert/has-async-iterator-symbol-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-iterator-symbol-support',
		'@stdlib/assert/has-symbol-support'
	]
});

ns.push({
	'alias': 'hasAtobSupport',
	'path': '@stdlib/assert/has-atob-support',
	'value': require( '@stdlib/assert/has-atob-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-btoa-support'
	]
});

ns.push({
	'alias': 'hasBigInt64ArraySupport',
	'path': '@stdlib/assert/has-bigint64array-support',
	'value': require( '@stdlib/assert/has-bigint64array-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-bigint-support',
		'@stdlib/assert/has-biguint64array-support'
	]
});

ns.push({
	'alias': 'hasBigIntSupport',
	'path': '@stdlib/assert/has-bigint-support',
	'value': require( '@stdlib/assert/has-bigint-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasBigUint64ArraySupport',
	'path': '@stdlib/assert/has-biguint64array-support',
	'value': require( '@stdlib/assert/has-biguint64array-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-bigint-support',
		'@stdlib/assert/has-bigint64array-support'
	]
});

ns.push({
	'alias': 'hasBtoaSupport',
	'path': '@stdlib/assert/has-btoa-support',
	'value': require( '@stdlib/assert/has-btoa-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-atob-support'
	]
});

ns.push({
	'alias': 'hasClassSupport',
	'path': '@stdlib/assert/has-class-support',
	'value': require( '@stdlib/assert/has-class-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasDataViewSupport',
	'path': '@stdlib/assert/has-dataview-support',
	'value': require( '@stdlib/assert/has-dataview-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-arraybuffer-support'
	]
});

ns.push({
	'alias': 'hasDefinePropertiesSupport',
	'path': '@stdlib/assert/has-define-properties-support',
	'value': require( '@stdlib/assert/has-define-properties-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-define-property-support'
	]
});

ns.push({
	'alias': 'hasDefinePropertySupport',
	'path': '@stdlib/assert/has-define-property-support',
	'value': require( '@stdlib/assert/has-define-property-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-define-properties-support'
	]
});

ns.push({
	'alias': 'hasFloat32ArraySupport',
	'path': '@stdlib/assert/has-float32array-support',
	'value': require( '@stdlib/assert/has-float32array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasFloat64ArraySupport',
	'path': '@stdlib/assert/has-float64array-support',
	'value': require( '@stdlib/assert/has-float64array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasFunctionNameSupport',
	'path': '@stdlib/assert/has-function-name-support',
	'value': require( '@stdlib/assert/has-function-name-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasGeneratorSupport',
	'path': '@stdlib/assert/has-generator-support',
	'value': require( '@stdlib/assert/has-generator-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasGlobalThisSupport',
	'path': '@stdlib/assert/has-globalthis-support',
	'value': require( '@stdlib/assert/has-globalthis-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/global'
	]
});

ns.push({
	'alias': 'hasInt8ArraySupport',
	'path': '@stdlib/assert/has-int8array-support',
	'value': require( '@stdlib/assert/has-int8array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasInt16ArraySupport',
	'path': '@stdlib/assert/has-int16array-support',
	'value': require( '@stdlib/assert/has-int16array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasInt32ArraySupport',
	'path': '@stdlib/assert/has-int32array-support',
	'value': require( '@stdlib/assert/has-int32array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasIteratorSymbolSupport',
	'path': '@stdlib/assert/has-iterator-symbol-support',
	'value': require( '@stdlib/assert/has-iterator-symbol-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-async-iterator-symbol-support',
		'@stdlib/assert/has-symbol-support'
	]
});

ns.push({
	'alias': 'hasMapSupport',
	'path': '@stdlib/assert/has-map-support',
	'value': require( '@stdlib/assert/has-map-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasNodeBufferSupport',
	'path': '@stdlib/assert/has-node-buffer-support',
	'value': require( '@stdlib/assert/has-node-buffer-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasOwnProp',
	'path': '@stdlib/assert/has-own-property',
	'value': require( '@stdlib/assert/has-own-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-property'
	]
});

ns.push({
	'alias': 'hasProp',
	'path': '@stdlib/assert/has-property',
	'value': require( '@stdlib/assert/has-property' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-own-property'
	]
});

ns.push({
	'alias': 'hasProxySupport',
	'path': '@stdlib/assert/has-proxy-support',
	'value': require( '@stdlib/assert/has-proxy-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasSetSupport',
	'path': '@stdlib/assert/has-set-support',
	'value': require( '@stdlib/assert/has-set-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasSharedArrayBufferSupport',
	'path': '@stdlib/assert/has-sharedarraybuffer-support',
	'value': require( '@stdlib/assert/has-sharedarraybuffer-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-arraybuffer-support',
		'@stdlib/assert/has-float32array-support',
		'@stdlib/assert/has-float64array-support',
		'@stdlib/assert/has-int16array-support',
		'@stdlib/assert/has-int32array-support',
		'@stdlib/assert/has-int8array-support',
		'@stdlib/assert/has-node-buffer-support',
		'@stdlib/assert/has-uint16array-support',
		'@stdlib/assert/has-uint32array-support',
		'@stdlib/assert/has-uint8array-support',
		'@stdlib/assert/has-uint8clampedarray-support'
	]
});

ns.push({
	'alias': 'hasSymbolSupport',
	'path': '@stdlib/assert/has-symbol-support',
	'value': require( '@stdlib/assert/has-symbol-support' ),
	'type': 'Function',
	'related': [
		'@stdlib/assert/has-iterator-symbol-support'
	]
});

ns.push({
	'alias': 'hasToStringTagSupport',
	'path': '@stdlib/assert/has-tostringtag-support',
	'value': require( '@stdlib/assert/has-tostringtag-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasUint8ArraySupport',
	'path': '@stdlib/assert/has-uint8array-support',
	'value': require( '@stdlib/assert/has-uint8array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasUint8ClampedArraySupport',
	'path': '@stdlib/assert/has-uint8clampedarray-support',
	'value': require( '@stdlib/assert/has-uint8clampedarray-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasUint16ArraySupport',
	'path': '@stdlib/assert/has-uint16array-support',
	'value': require( '@stdlib/assert/has-uint16array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasUint32ArraySupport',
	'path': '@stdlib/assert/has-uint32array-support',
	'value': require( '@stdlib/assert/has-uint32array-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasUTF16SurrogatePairAt',
	'path': '@stdlib/assert/has-utf16-surrogate-pair-at',
	'value': require( '@stdlib/assert/has-utf16-surrogate-pair-at' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasWeakMapSupport',
	'path': '@stdlib/assert/has-weakmap-support',
	'value': require( '@stdlib/assert/has-weakmap-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasWeakSetSupport',
	'path': '@stdlib/assert/has-weakset-support',
	'value': require( '@stdlib/assert/has-weakset-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'hasWebAssemblySupport',
	'path': '@stdlib/assert/has-wasm-support',
	'value': require( '@stdlib/assert/has-wasm-support' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'headercase',
	'path': '@stdlib/string/headercase',
	'value': require( '@stdlib/string/headercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/camelcase',
		'@stdlib/string/kebabcase',
		'@stdlib/string/pascalcase',
		'@stdlib/string/snakecase'
	]
});

ns.push({
	'alias': 'HERNDON_VENUS_SEMIDIAMETERS',
	'path': '@stdlib/datasets/herndon-venus-semidiameters',
	'value': require( '@stdlib/datasets/herndon-venus-semidiameters' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'homedir',
	'path': '@stdlib/os/homedir',
	'value': require( '@stdlib/os/homedir' ),
	'type': 'Function',
	'related': [
		'@stdlib/os/configdir',
		'@stdlib/os/tmpdir'
	]
});

ns.push({
	'alias': 'HOURS_IN_DAY',
	'path': '@stdlib/constants/time/hours-in-day',
	'value': require( '@stdlib/constants/time/hours-in-day' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/time/hours-in-week'
	]
});

ns.push({
	'alias': 'HOURS_IN_WEEK',
	'path': '@stdlib/constants/time/hours-in-week',
	'value': require( '@stdlib/constants/time/hours-in-week' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/time/hours-in-day'
	]
});

ns.push({
	'alias': 'hoursInMonth',
	'path': '@stdlib/time/hours-in-month',
	'value': require( '@stdlib/time/hours-in-month' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/hours-in-year'
	]
});

ns.push({
	'alias': 'hoursInYear',
	'path': '@stdlib/time/hours-in-year',
	'value': require( '@stdlib/time/hours-in-year' ),
	'type': 'Function',
	'related': [
		'@stdlib/time/hours-in-month'
	]
});

ns.push({
	'alias': 'httpServer',
	'path': '@stdlib/net/http-server',
	'value': require( '@stdlib/net/http-server' ),
	'type': 'Function',
	'related': []
});


// EXPORTS //

module.exports = ns;
