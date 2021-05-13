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

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'UINT8_MAX',
	'path': '@stdlib/constants/uint8/max',
	'value': require( '@stdlib/constants/uint8/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int8/max'
	]
});

ns.push({
	'alias': 'UINT8_NUM_BYTES',
	'path': '@stdlib/constants/uint8/num-bytes',
	'value': require( '@stdlib/constants/uint8/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int8/num-bytes',
		'@stdlib/constants/uint16/num-bytes',
		'@stdlib/constants/uint32/num-bytes'
	]
});

ns.push({
	'alias': 'Uint8Array',
	'path': '@stdlib/array/uint8',
	'value': require( '@stdlib/array/uint8' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'Uint8ClampedArray',
	'path': '@stdlib/array/uint8c',
	'value': require( '@stdlib/array/uint8c' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8'
	]
});

ns.push({
	'alias': 'UINT16_MAX',
	'path': '@stdlib/constants/uint16/max',
	'value': require( '@stdlib/constants/uint16/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int16/max'
	]
});

ns.push({
	'alias': 'UINT16_NUM_BYTES',
	'path': '@stdlib/constants/uint16/num-bytes',
	'value': require( '@stdlib/constants/uint16/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int16/num-bytes',
		'@stdlib/constants/uint32/num-bytes',
		'@stdlib/constants/uint8/num-bytes'
	]
});

ns.push({
	'alias': 'Uint16Array',
	'path': '@stdlib/array/uint16',
	'value': require( '@stdlib/array/uint16' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'UINT32_MAX',
	'path': '@stdlib/constants/uint32/max',
	'value': require( '@stdlib/constants/uint32/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int32/max'
	]
});

ns.push({
	'alias': 'UINT32_NUM_BYTES',
	'path': '@stdlib/constants/uint32/num-bytes',
	'value': require( '@stdlib/constants/uint32/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/int32/num-bytes',
		'@stdlib/constants/uint16/num-bytes',
		'@stdlib/constants/uint8/num-bytes'
	]
});

ns.push({
	'alias': 'Uint32Array',
	'path': '@stdlib/array/uint32',
	'value': require( '@stdlib/array/uint32' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'umask',
	'path': '@stdlib/process/umask',
	'value': require( '@stdlib/process/umask' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/chmod'
	]
});

ns.push({
	'alias': 'uncapitalize',
	'path': '@stdlib/string/uncapitalize',
	'value': require( '@stdlib/string/uncapitalize' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/capitalize',
		'@stdlib/string/lowercase'
	]
});

ns.push({
	'alias': 'uncapitalizeKeys',
	'path': '@stdlib/utils/uncapitalize-keys',
	'value': require( '@stdlib/utils/uncapitalize-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/capitalize-keys',
		'@stdlib/utils/lowercase-keys'
	]
});

ns.push({
	'alias': 'uncurry',
	'path': '@stdlib/utils/uncurry',
	'value': require( '@stdlib/utils/uncurry' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/curry',
		'@stdlib/utils/uncurry-right'
	]
});

ns.push({
	'alias': 'uncurryRight',
	'path': '@stdlib/utils/uncurry-right',
	'value': require( '@stdlib/utils/uncurry-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/curry',
		'@stdlib/utils/curry-right',
		'@stdlib/utils/uncurry'
	]
});

ns.push({
	'alias': 'UNICODE_MAX',
	'path': '@stdlib/constants/unicode/max',
	'value': require( '@stdlib/constants/unicode/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/unicode/max-bmp'
	]
});

ns.push({
	'alias': 'UNICODE_MAX_BMP',
	'path': '@stdlib/constants/unicode/max-bmp',
	'value': require( '@stdlib/constants/unicode/max-bmp' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/unicode/max'
	]
});

ns.push({
	'alias': 'UnicodeColumnChartSparkline',
	'path': '@stdlib/plot/sparklines/unicode/column',
	'value': require( '@stdlib/plot/sparklines/unicode/column' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode',
		'@stdlib/plot/sparklines/unicode/line',
		'@stdlib/plot/sparklines/unicode/tristate',
		'@stdlib/plot/sparklines/unicode/up-down',
		'@stdlib/plot/sparklines/unicode/win-loss'
	]
});

ns.push({
	'alias': 'UnicodeLineChartSparkline',
	'path': '@stdlib/plot/sparklines/unicode/line',
	'value': require( '@stdlib/plot/sparklines/unicode/line' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode',
		'@stdlib/plot/sparklines/unicode/column',
		'@stdlib/plot/sparklines/unicode/tristate',
		'@stdlib/plot/sparklines/unicode/up-down',
		'@stdlib/plot/sparklines/unicode/win-loss'
	]
});

ns.push({
	'alias': 'UnicodeSparkline',
	'path': '@stdlib/plot/sparklines/unicode',
	'value': require( '@stdlib/plot/sparklines/unicode' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode/column',
		'@stdlib/plot/sparklines/unicode/line',
		'@stdlib/plot/sparklines/unicode/tristate',
		'@stdlib/plot/sparklines/unicode/up-down',
		'@stdlib/plot/sparklines/unicode/win-loss'
	]
});

ns.push({
	'alias': 'UnicodeTristateChartSparkline',
	'path': '@stdlib/plot/sparklines/unicode/tristate',
	'value': require( '@stdlib/plot/sparklines/unicode/tristate' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode',
		'@stdlib/plot/sparklines/unicode/column',
		'@stdlib/plot/sparklines/unicode/line',
		'@stdlib/plot/sparklines/unicode/up-down',
		'@stdlib/plot/sparklines/unicode/win-loss'
	]
});

ns.push({
	'alias': 'UnicodeUpDownChartSparkline',
	'path': '@stdlib/plot/sparklines/unicode/up-down',
	'value': require( '@stdlib/plot/sparklines/unicode/up-down' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode',
		'@stdlib/plot/sparklines/unicode/column',
		'@stdlib/plot/sparklines/unicode/line',
		'@stdlib/plot/sparklines/unicode/tristate',
		'@stdlib/plot/sparklines/unicode/win-loss'
	]
});

ns.push({
	'alias': 'UnicodeWinLossChartSparkline',
	'path': '@stdlib/plot/sparklines/unicode/win-loss',
	'value': require( '@stdlib/plot/sparklines/unicode/win-loss' ),
	'type': 'Function',
	'related': [
		'@stdlib/plot',
		'@stdlib/plot/ctor',
		'@stdlib/plot/sparklines/unicode',
		'@stdlib/plot/sparklines/unicode/column',
		'@stdlib/plot/sparklines/unicode/line',
		'@stdlib/plot/sparklines/unicode/tristate',
		'@stdlib/plot/sparklines/unicode/up-down'
	]
});

ns.push({
	'alias': 'unlink',
	'path': '@stdlib/fs/unlink',
	'value': require( '@stdlib/fs/unlink' ),
	'type': 'Function',
	'related': [
		'@stdlib/fs/exists',
		'@stdlib/fs/rmdir'
	]
});

ns.push({
	'alias': 'unshift',
	'path': '@stdlib/utils/unshift',
	'value': require( '@stdlib/utils/unshift' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/pop',
		'@stdlib/utils/push',
		'@stdlib/utils/shift'
	]
});

ns.push({
	'alias': 'until',
	'path': '@stdlib/utils/until',
	'value': require( '@stdlib/utils/until' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/do-until',
		'@stdlib/utils/do-while',
		'@stdlib/utils/async/until',
		'@stdlib/utils/until-each',
		'@stdlib/utils/while'
	]
});

ns.push({
	'alias': 'untilAsync',
	'path': '@stdlib/utils/async/until',
	'value': require( '@stdlib/utils/async/until' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/do-until',
		'@stdlib/utils/async/do-while',
		'@stdlib/utils/until',
		'@stdlib/utils/async/until-each',
		'@stdlib/utils/async/while'
	]
});

ns.push({
	'alias': 'untilEach',
	'path': '@stdlib/utils/until-each',
	'value': require( '@stdlib/utils/until-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/until-each',
		'@stdlib/utils/until-each-right',
		'@stdlib/utils/while-each'
	]
});

ns.push({
	'alias': 'untilEachRight',
	'path': '@stdlib/utils/until-each-right',
	'value': require( '@stdlib/utils/until-each-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/until-each',
		'@stdlib/utils/async/until-each',
		'@stdlib/utils/while-each-right'
	]
});

ns.push({
	'alias': 'unzip',
	'path': '@stdlib/utils/unzip',
	'value': require( '@stdlib/utils/unzip' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/zip'
	]
});

ns.push({
	'alias': 'uppercase',
	'path': '@stdlib/string/uppercase',
	'value': require( '@stdlib/string/uppercase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/capitalize',
		'@stdlib/string/lowercase'
	]
});

ns.push({
	'alias': 'uppercaseKeys',
	'path': '@stdlib/utils/uppercase-keys',
	'value': require( '@stdlib/utils/uppercase-keys' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/capitalize-keys',
		'@stdlib/utils/lowercase-keys'
	]
});

ns.push({
	'alias': 'US_STATES_ABBR',
	'path': '@stdlib/datasets/us-states-abbr',
	'value': require( '@stdlib/datasets/us-states-abbr' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/us-states-capitals',
		'@stdlib/datasets/us-states-names'
	]
});

ns.push({
	'alias': 'US_STATES_CAPITALS',
	'path': '@stdlib/datasets/us-states-capitals',
	'value': require( '@stdlib/datasets/us-states-capitals' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/us-states-abbr',
		'@stdlib/datasets/us-states-capitals-names',
		'@stdlib/datasets/us-states-names',
		'@stdlib/datasets/us-states-names-capitals'
	]
});

ns.push({
	'alias': 'US_STATES_CAPITALS_NAMES',
	'path': '@stdlib/datasets/us-states-capitals-names',
	'value': require( '@stdlib/datasets/us-states-capitals-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/us-states-capitals',
		'@stdlib/datasets/us-states-names',
		'@stdlib/datasets/us-states-names-capitals'
	]
});

ns.push({
	'alias': 'US_STATES_NAMES',
	'path': '@stdlib/datasets/us-states-names',
	'value': require( '@stdlib/datasets/us-states-names' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/us-states-abbr',
		'@stdlib/datasets/us-states-capitals',
		'@stdlib/datasets/us-states-capitals-names',
		'@stdlib/datasets/us-states-names-capitals'
	]
});

ns.push({
	'alias': 'US_STATES_NAMES_CAPITALS',
	'path': '@stdlib/datasets/us-states-names-capitals',
	'value': require( '@stdlib/datasets/us-states-names-capitals' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/us-states-capitals',
		'@stdlib/datasets/us-states-names',
		'@stdlib/datasets/us-states-names-capitals'
	]
});

ns.push({
	'alias': 'utf16ToUTF8Array',
	'path': '@stdlib/string/utf16-to-utf8-array',
	'value': require( '@stdlib/string/utf16-to-utf8-array' ),
	'type': 'Function',
	'related': []
});


// EXPORTS //

module.exports = ns;
