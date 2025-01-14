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
	'alias': 'FancyArray',
	'path': '@stdlib/ndarray/fancy',
	'value': require( '@stdlib/ndarray/fancy' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'fastmath.abs',
	'path': '@stdlib/math/base/special/fast/abs',
	'value': require( '@stdlib/math/base/special/fast/abs' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/abs'
	]
});

ns.push({
	'alias': 'fastmath.acosh',
	'path': '@stdlib/math/base/special/fast/acosh',
	'value': require( '@stdlib/math/base/special/fast/acosh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/acosh'
	]
});

ns.push({
	'alias': 'fastmath.ampbm',
	'path': '@stdlib/math/base/special/fast/alpha-max-plus-beta-min',
	'value': require( '@stdlib/math/base/special/fast/alpha-max-plus-beta-min' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hypot'
	]
});

ns.push({
	'alias': 'fastmath.asinh',
	'path': '@stdlib/math/base/special/fast/asinh',
	'value': require( '@stdlib/math/base/special/fast/asinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/asinh'
	]
});

ns.push({
	'alias': 'fastmath.atanh',
	'path': '@stdlib/math/base/special/fast/atanh',
	'value': require( '@stdlib/math/base/special/fast/atanh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/atanh'
	]
});

ns.push({
	'alias': 'fastmath.hypot',
	'path': '@stdlib/math/base/special/fast/hypot',
	'value': require( '@stdlib/math/base/special/fast/hypot' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/hypot'
	]
});

ns.push({
	'alias': 'fastmath.log2Uint32',
	'path': '@stdlib/math/base/special/fast/uint32-log2',
	'value': require( '@stdlib/math/base/special/fast/uint32-log2' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/log2'
	]
});

ns.push({
	'alias': 'fastmath.max',
	'path': '@stdlib/math/base/special/fast/max',
	'value': require( '@stdlib/math/base/special/fast/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/max'
	]
});

ns.push({
	'alias': 'fastmath.min',
	'path': '@stdlib/math/base/special/fast/min',
	'value': require( '@stdlib/math/base/special/fast/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/min'
	]
});

ns.push({
	'alias': 'fastmath.powint',
	'path': '@stdlib/math/base/special/fast/pow-int',
	'value': require( '@stdlib/math/base/special/fast/pow-int' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/pow'
	]
});

ns.push({
	'alias': 'fastmath.sqrtUint32',
	'path': '@stdlib/math/base/special/fast/uint32-sqrt',
	'value': require( '@stdlib/math/base/special/fast/uint32-sqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'FEMALE_FIRST_NAMES_EN',
	'path': '@stdlib/datasets/female-first-names-en',
	'value': require( '@stdlib/datasets/female-first-names-en' ),
	'type': 'Function',
	'related': [
		'@stdlib/datasets/male-first-names-en'
	]
});

ns.push({
	'alias': 'FIFO',
	'path': '@stdlib/utils/fifo',
	'value': require( '@stdlib/utils/fifo' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/stack'
	]
});

ns.push({
	'alias': 'filledarray',
	'path': '@stdlib/array/filled',
	'value': require( '@stdlib/array/filled' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/filled-by',
		'@stdlib/array/typed'
	]
});

ns.push({
	'alias': 'filledarrayBy',
	'path': '@stdlib/array/filled-by',
	'value': require( '@stdlib/array/filled-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/filled',
		'@stdlib/array/typed'
	]
});

ns.push({
	'alias': 'filterArguments',
	'path': '@stdlib/utils/filter-arguments',
	'value': require( '@stdlib/utils/filter-arguments' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/mask-arguments',
		'@stdlib/utils/reject-arguments',
		'@stdlib/utils/reorder-arguments',
		'@stdlib/utils/reverse-arguments'
	]
});

ns.push({
	'alias': 'find',
	'path': '@stdlib/utils/find',
	'value': require( '@stdlib/utils/find' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'firstChar',
	'path': '@stdlib/string/first',
	'value': require( '@stdlib/string/first' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/remove-first',
		'@stdlib/string/last'
	]
});

ns.push({
	'alias': 'FIVETHIRTYEIGHT_FFQ',
	'path': '@stdlib/datasets/fivethirtyeight-ffq',
	'value': require( '@stdlib/datasets/fivethirtyeight-ffq' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'flattenArray',
	'path': '@stdlib/utils/flatten-array',
	'value': require( '@stdlib/utils/flatten-array' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/flatten-object'
	]
});

ns.push({
	'alias': 'flattenObject',
	'path': '@stdlib/utils/flatten-object',
	'value': require( '@stdlib/utils/flatten-object' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/flatten-array'
	]
});

ns.push({
	'alias': 'flignerTest',
	'path': '@stdlib/stats/fligner-test',
	'value': require( '@stdlib/stats/fligner-test' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/bartlett-test'
	]
});

ns.push({
	'alias': 'FLOAT_WORD_ORDER',
	'path': '@stdlib/os/float-word-order',
	'value': require( '@stdlib/os/float-word-order' ),
	'type': 'Function',
	'related': [
		'@stdlib/os/byte-order'
	]
});

ns.push({
	'alias': 'FLOAT16_CBRT_EPS',
	'path': '@stdlib/constants/float16/cbrt-eps',
	'value': require( '@stdlib/constants/float16/cbrt-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/eps',
		'@stdlib/constants/float16/sqrt-eps',
		'@stdlib/constants/float32/cbrt-eps',
		'@stdlib/constants/float64/cbrt-eps'
	]
});

ns.push({
	'alias': 'FLOAT16_EPS',
	'path': '@stdlib/constants/float16/eps',
	'value': require( '@stdlib/constants/float16/eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/eps',
		'@stdlib/constants/float64/eps'
	]
});

ns.push({
	'alias': 'FLOAT16_EXPONENT_BIAS',
	'path': '@stdlib/constants/float16/exponent-bias',
	'value': require( '@stdlib/constants/float16/exponent-bias' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/exponent-bias',
		'@stdlib/constants/float64/exponent-bias'
	]
});

ns.push({
	'alias': 'FLOAT16_MAX',
	'path': '@stdlib/constants/float16/max',
	'value': require( '@stdlib/constants/float16/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/max',
		'@stdlib/constants/float64/max'
	]
});

ns.push({
	'alias': 'FLOAT16_MAX_SAFE_INTEGER',
	'path': '@stdlib/constants/float16/max-safe-integer',
	'value': require( '@stdlib/constants/float16/max-safe-integer' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/min-safe-integer',
		'@stdlib/constants/float32/max-safe-integer',
		'@stdlib/constants/float64/max-safe-integer'
	]
});

ns.push({
	'alias': 'FLOAT16_MIN_SAFE_INTEGER',
	'path': '@stdlib/constants/float16/min-safe-integer',
	'value': require( '@stdlib/constants/float16/min-safe-integer' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/max-safe-integer',
		'@stdlib/constants/float32/min-safe-integer',
		'@stdlib/constants/float64/min-safe-integer'
	]
});

ns.push({
	'alias': 'FLOAT16_NINF',
	'path': '@stdlib/constants/float16/ninf',
	'value': require( '@stdlib/constants/float16/ninf' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/pinf',
		'@stdlib/constants/float32/ninf',
		'@stdlib/constants/float64/ninf'
	]
});

ns.push({
	'alias': 'FLOAT16_NUM_BYTES',
	'path': '@stdlib/constants/float16/num-bytes',
	'value': require( '@stdlib/constants/float16/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/num-bytes',
		'@stdlib/constants/float64/num-bytes'
	]
});

ns.push({
	'alias': 'FLOAT16_PINF',
	'path': '@stdlib/constants/float16/pinf',
	'value': require( '@stdlib/constants/float16/pinf' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/ninf',
		'@stdlib/constants/float32/pinf',
		'@stdlib/constants/float64/pinf'
	]
});

ns.push({
	'alias': 'FLOAT16_PRECISION',
	'path': '@stdlib/constants/float16/precision',
	'value': require( '@stdlib/constants/float16/precision' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/precision',
		'@stdlib/constants/float64/precision'
	]
});

ns.push({
	'alias': 'FLOAT16_SMALLEST_NORMAL',
	'path': '@stdlib/constants/float16/smallest-normal',
	'value': require( '@stdlib/constants/float16/smallest-normal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/smallest-subnormal',
		'@stdlib/constants/float32/smallest-normal',
		'@stdlib/constants/float64/smallest-normal'
	]
});

ns.push({
	'alias': 'FLOAT16_SMALLEST_SUBNORMAL',
	'path': '@stdlib/constants/float16/smallest-subnormal',
	'value': require( '@stdlib/constants/float16/smallest-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/smallest-normal',
		'@stdlib/constants/float32/smallest-subnormal',
		'@stdlib/constants/float64/smallest-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT16_SQRT_EPS',
	'path': '@stdlib/constants/float16/sqrt-eps',
	'value': require( '@stdlib/constants/float16/sqrt-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/eps',
		'@stdlib/constants/float32/sqrt-eps',
		'@stdlib/constants/float64/sqrt-eps'
	]
});

ns.push({
	'alias': 'FLOAT32_ABS_MASK',
	'path': '@stdlib/constants/float32/abs-mask',
	'value': require( '@stdlib/constants/float32/abs-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/exponent-mask',
		'@stdlib/constants/float32/sign-mask',
		'@stdlib/constants/float32/significand-mask',
		'@stdlib/constants/float64/abs-mask'
	]
});

ns.push({
	'alias': 'FLOAT32_CBRT_EPS',
	'path': '@stdlib/constants/float32/cbrt-eps',
	'value': require( '@stdlib/constants/float32/cbrt-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/eps',
		'@stdlib/constants/float32/sqrt-eps',
		'@stdlib/constants/float64/cbrt-eps'
	]
});

ns.push({
	'alias': 'FLOAT32_E',
	'path': '@stdlib/constants/float32/e',
	'value': require( '@stdlib/constants/float32/e' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/e'
	]
});

ns.push({
	'alias': 'FLOAT32_EPS',
	'path': '@stdlib/constants/float32/eps',
	'value': require( '@stdlib/constants/float32/eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/eps'
	]
});

ns.push({
	'alias': 'FLOAT32_EXPONENT_BIAS',
	'path': '@stdlib/constants/float32/exponent-bias',
	'value': require( '@stdlib/constants/float32/exponent-bias' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/exponent-bias',
		'@stdlib/constants/float64/exponent-bias'
	]
});

ns.push({
	'alias': 'FLOAT32_EXPONENT_MASK',
	'path': '@stdlib/constants/float32/exponent-mask',
	'value': require( '@stdlib/constants/float32/exponent-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/exponent-mask',
		'@stdlib/constants/float32/sign-mask',
		'@stdlib/constants/float32/significand-mask',
		'@stdlib/constants/float32/abs-mask'
	]
});

ns.push({
	'alias': 'FLOAT32_FOURTH_PI',
	'path': '@stdlib/constants/float32/fourth-pi',
	'value': require( '@stdlib/constants/float32/fourth-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/half-pi',
		'@stdlib/constants/float32/pi',
		'@stdlib/constants/float32/two-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_HALF_LN_TWO',
	'path': '@stdlib/constants/float32/half-ln-two',
	'value': require( '@stdlib/constants/float32/half-ln-two' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/half-ln-two'
	]
});

ns.push({
	'alias': 'FLOAT32_HALF_PI',
	'path': '@stdlib/constants/float32/half-pi',
	'value': require( '@stdlib/constants/float32/half-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/fourth-pi',
		'@stdlib/constants/float32/pi',
		'@stdlib/constants/float32/two-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_LN_HALF',
	'path': '@stdlib/constants/float32/ln-half',
	'value': require( '@stdlib/constants/float32/ln-half' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/ln-half'
	]
});

ns.push({
	'alias': 'FLOAT32_LN_PI',
	'path': '@stdlib/constants/float32/ln-pi',
	'value': require( '@stdlib/constants/float32/ln-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/pi',
		'@stdlib/constants/float64/ln-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_LN_TEN',
	'path': '@stdlib/constants/float32/ln-ten',
	'value': require( '@stdlib/constants/float32/ln-ten' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/ln-two',
		'@stdlib/constants/float64/ln-ten'
	]
});

ns.push({
	'alias': 'FLOAT32_LN_TWO',
	'path': '@stdlib/constants/float32/ln-two',
	'value': require( '@stdlib/constants/float32/ln-two' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/ln-ten',
		'@stdlib/constants/float64/ln-two'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX',
	'path': '@stdlib/constants/float32/max',
	'value': require( '@stdlib/constants/float32/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/max',
		'@stdlib/constants/float64/max'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_BASE2_EXPONENT',
	'path': '@stdlib/constants/float32/max-base2-exponent',
	'value': require( '@stdlib/constants/float32/max-base2-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/max-base2-exponent-subnormal',
		'@stdlib/constants/float64/max-base2-exponent'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_BASE2_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float32/max-base2-exponent-subnormal',
	'value': require( '@stdlib/constants/float32/max-base2-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/max-base2-exponent',
		'@stdlib/constants/float64/max-base2-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_BASE10_EXPONENT',
	'path': '@stdlib/constants/float32/max-base10-exponent',
	'value': require( '@stdlib/constants/float32/max-base10-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/max-base10-exponent-subnormal',
		'@stdlib/constants/float64/max-base10-exponent'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_BASE10_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float32/max-base10-exponent-subnormal',
	'value': require( '@stdlib/constants/float32/max-base10-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/max-base10-exponent',
		'@stdlib/constants/float64/max-base10-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_SAFE_FIBONACCI',
	'path': '@stdlib/constants/float32/max-safe-fibonacci',
	'value': require( '@stdlib/constants/float32/max-safe-fibonacci' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-fibonacci'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_SAFE_INTEGER',
	'path': '@stdlib/constants/float32/max-safe-integer',
	'value': require( '@stdlib/constants/float32/max-safe-integer' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/max-safe-integer',
		'@stdlib/constants/float32/min-safe-integer',
		'@stdlib/constants/float64/max-safe-integer'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_SAFE_NTH_FACTORIAL',
	'path': '@stdlib/constants/float32/max-safe-nth-factorial',
	'value': require( '@stdlib/constants/float32/max-safe-nth-factorial' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-nth-factorial'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_SAFE_NTH_FIBONACCI',
	'path': '@stdlib/constants/float32/max-safe-nth-fibonacci',
	'value': require( '@stdlib/constants/float32/max-safe-nth-fibonacci' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-nth-fibonacci'
	]
});

ns.push({
	'alias': 'FLOAT32_MAX_SAFE_NTH_LUCAS',
	'path': '@stdlib/constants/float32/max-safe-nth-lucas',
	'value': require( '@stdlib/constants/float32/max-safe-nth-lucas' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-nth-lucas'
	]
});

ns.push({
	'alias': 'FLOAT32_MIN_BASE2_EXPONENT',
	'path': '@stdlib/constants/float32/min-base2-exponent',
	'value': require( '@stdlib/constants/float32/min-base2-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/min-base2-exponent-subnormal',
		'@stdlib/constants/float64/min-base2-exponent'
	]
});

ns.push({
	'alias': 'FLOAT32_MIN_BASE2_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float32/min-base2-exponent-subnormal',
	'value': require( '@stdlib/constants/float32/min-base2-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/min-base2-exponent',
		'@stdlib/constants/float64/min-base2-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT32_MIN_BASE10_EXPONENT',
	'path': '@stdlib/constants/float32/min-base10-exponent',
	'value': require( '@stdlib/constants/float32/min-base10-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/min-base10-exponent-subnormal',
		'@stdlib/constants/float64/min-base10-exponent'
	]
});

ns.push({
	'alias': 'FLOAT32_MIN_BASE10_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float32/min-base10-exponent-subnormal',
	'value': require( '@stdlib/constants/float32/min-base10-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/min-base10-exponent',
		'@stdlib/constants/float64/min-base10-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT32_MIN_SAFE_INTEGER',
	'path': '@stdlib/constants/float32/min-safe-integer',
	'value': require( '@stdlib/constants/float32/min-safe-integer' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/min-safe-integer',
		'@stdlib/constants/float32/max-safe-integer',
		'@stdlib/constants/float64/min-safe-integer'
	]
});

ns.push({
	'alias': 'FLOAT32_NAN',
	'path': '@stdlib/constants/float32/nan',
	'value': require( '@stdlib/constants/float32/nan' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/nan',
		'@stdlib/constants/float64/nan'
	]
});

ns.push({
	'alias': 'FLOAT32_NINF',
	'path': '@stdlib/constants/float32/ninf',
	'value': require( '@stdlib/constants/float32/ninf' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/pinf',
		'@stdlib/constants/float64/ninf'
	]
});

ns.push({
	'alias': 'FLOAT32_NUM_BYTES',
	'path': '@stdlib/constants/float32/num-bytes',
	'value': require( '@stdlib/constants/float32/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/num-bytes',
		'@stdlib/constants/float64/num-bytes'
	]
});

ns.push({
	'alias': 'FLOAT32_PHI',
	'path': '@stdlib/constants/float32/phi',
	'value': require( '@stdlib/constants/float32/phi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/phi'
	]
});

ns.push({
	'alias': 'FLOAT32_PI',
	'path': '@stdlib/constants/float32/pi',
	'value': require( '@stdlib/constants/float32/pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/fourth-pi',
		'@stdlib/constants/float32/half-pi',
		'@stdlib/constants/float32/two-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_PINF',
	'path': '@stdlib/constants/float32/pinf',
	'value': require( '@stdlib/constants/float32/pinf' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/ninf',
		'@stdlib/constants/float64/pinf'
	]
});

ns.push({
	'alias': 'FLOAT32_PRECISION',
	'path': '@stdlib/constants/float32/precision',
	'value': require( '@stdlib/constants/float32/precision' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/precision',
		'@stdlib/constants/float64/precision'
	]
});

ns.push({
	'alias': 'FLOAT32_SIGN_MASK',
	'path': '@stdlib/constants/float32/sign-mask',
	'value': require( '@stdlib/constants/float32/sign-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/exponent-mask',
		'@stdlib/constants/float32/significand-mask',
		'@stdlib/constants/float32/abs-mask',
		'@stdlib/constants/float64/sign-mask'
	]
});

ns.push({
	'alias': 'FLOAT32_SIGNIFICAND_MASK',
	'path': '@stdlib/constants/float32/significand-mask',
	'value': require( '@stdlib/constants/float32/significand-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/exponent-mask',
		'@stdlib/constants/float32/sign-mask',
		'@stdlib/constants/float32/abs-mask',
		'@stdlib/constants/float64/significand-mask'
	]
});

ns.push({
	'alias': 'FLOAT32_SMALLEST_NORMAL',
	'path': '@stdlib/constants/float32/smallest-normal',
	'value': require( '@stdlib/constants/float32/smallest-normal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/smallest-subnormal',
		'@stdlib/constants/float64/smallest-normal'
	]
});

ns.push({
	'alias': 'FLOAT32_SMALLEST_SUBNORMAL',
	'path': '@stdlib/constants/float32/smallest-subnormal',
	'value': require( '@stdlib/constants/float32/smallest-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/smallest-normal',
		'@stdlib/constants/float64/smallest-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_EPS',
	'path': '@stdlib/constants/float32/sqrt-eps',
	'value': require( '@stdlib/constants/float32/sqrt-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/eps',
		'@stdlib/constants/float64/sqrt-eps'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_HALF',
	'path': '@stdlib/constants/float32/sqrt-half',
	'value': require( '@stdlib/constants/float32/sqrt-half' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/sqrt-half'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_HALF_PI',
	'path': '@stdlib/constants/float32/sqrt-half-pi',
	'value': require( '@stdlib/constants/float32/sqrt-half-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/sqrt-half-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_PHI',
	'path': '@stdlib/constants/float32/sqrt-phi',
	'value': require( '@stdlib/constants/float32/sqrt-phi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/sqrt-phi'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_PI',
	'path': '@stdlib/constants/float32/sqrt-pi',
	'value': require( '@stdlib/constants/float32/sqrt-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/pi',
		'@stdlib/constants/float64/sqrt-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_THREE',
	'path': '@stdlib/constants/float32/sqrt-three',
	'value': require( '@stdlib/constants/float32/sqrt-three' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/sqrt-two',
		'@stdlib/constants/float64/sqrt-three'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_TWO',
	'path': '@stdlib/constants/float32/sqrt-two',
	'value': require( '@stdlib/constants/float32/sqrt-two' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/sqrt-three',
		'@stdlib/constants/float64/sqrt-two'
	]
});

ns.push({
	'alias': 'FLOAT32_SQRT_TWO_PI',
	'path': '@stdlib/constants/float32/sqrt-two-pi',
	'value': require( '@stdlib/constants/float32/sqrt-two-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/pi',
		'@stdlib/constants/float32/two-pi',
		'@stdlib/constants/float64/sqrt-two-pi'
	]
});

ns.push({
	'alias': 'FLOAT32_TWO_PI',
	'path': '@stdlib/constants/float32/two-pi',
	'value': require( '@stdlib/constants/float32/two-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/fourth-pi',
		'@stdlib/constants/float32/half-pi',
		'@stdlib/constants/float32/pi'
	]
});

ns.push({
	'alias': 'Float32Array',
	'path': '@stdlib/array/float32',
	'value': require( '@stdlib/array/float32' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float64',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'Float32ArrayFE',
	'path': '@stdlib/array/fixed-endian-float32',
	'value': require( '@stdlib/array/fixed-endian-float32' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/fixed-endian-float64',
		'@stdlib/array/float32'
	]
});

ns.push({
	'alias': 'Float32ArrayLE',
	'path': '@stdlib/array/little-endian-float32',
	'value': require( '@stdlib/array/little-endian-float32' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/big-endian-float32',
		'@stdlib/array/fixed-endian-float32',
		'@stdlib/array/float32',
		'@stdlib/array/little-endian-float64'
	]
});

ns.push({
	'alias': 'FLOAT64_EXPONENT_BIAS',
	'path': '@stdlib/constants/float64/exponent-bias',
	'value': require( '@stdlib/constants/float64/exponent-bias' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/exponent-bias',
		'@stdlib/constants/float32/exponent-bias'
	]
});

ns.push({
	'alias': 'FLOAT64_HIGH_WORD_ABS_MASK',
	'path': '@stdlib/constants/float64/high-word-abs-mask',
	'value': require( '@stdlib/constants/float64/high-word-abs-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/high-word-sign-mask',
		'@stdlib/constants/float64/high-word-exponent-mask',
		'@stdlib/constants/float64/high-word-significand-mask'
	]
});

ns.push({
	'alias': 'FLOAT64_HIGH_WORD_EXPONENT_MASK',
	'path': '@stdlib/constants/float64/high-word-exponent-mask',
	'value': require( '@stdlib/constants/float64/high-word-exponent-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/high-word-significand-mask',
		'@stdlib/constants/float64/high-word-sign-mask',
		'@stdlib/constants/float64/high-word-abs-mask'
	]
});

ns.push({
	'alias': 'FLOAT64_HIGH_WORD_SIGN_MASK',
	'path': '@stdlib/constants/float64/high-word-sign-mask',
	'value': require( '@stdlib/constants/float64/high-word-sign-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/high-word-exponent-mask',
		'@stdlib/constants/float64/high-word-significand-mask',
		'@stdlib/constants/float64/high-word-abs-mask'
	]
});

ns.push({
	'alias': 'FLOAT64_HIGH_WORD_SIGNIFICAND_MASK',
	'path': '@stdlib/constants/float64/high-word-significand-mask',
	'value': require( '@stdlib/constants/float64/high-word-significand-mask' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/high-word-exponent-mask',
		'@stdlib/constants/float64/high-word-sign-mask',
		'@stdlib/constants/float64/high-word-abs-mask'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX',
	'path': '@stdlib/constants/float64/max',
	'value': require( '@stdlib/constants/float64/max' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/max',
		'@stdlib/constants/float32/max'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_BASE2_EXPONENT',
	'path': '@stdlib/constants/float64/max-base2-exponent',
	'value': require( '@stdlib/constants/float64/max-base2-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base10-exponent',
		'@stdlib/constants/float64/max-base2-exponent-subnormal',
		'@stdlib/constants/float64/min-base2-exponent'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_BASE2_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float64/max-base2-exponent-subnormal',
	'value': require( '@stdlib/constants/float64/max-base2-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base10-exponent-subnormal',
		'@stdlib/constants/float64/max-base2-exponent',
		'@stdlib/constants/float64/min-base2-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_BASE10_EXPONENT',
	'path': '@stdlib/constants/float64/max-base10-exponent',
	'value': require( '@stdlib/constants/float64/max-base10-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base10-exponent-subnormal',
		'@stdlib/constants/float64/max-base2-exponent',
		'@stdlib/constants/float64/min-base10-exponent'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_BASE10_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float64/max-base10-exponent-subnormal',
	'value': require( '@stdlib/constants/float64/max-base10-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base10-exponent',
		'@stdlib/constants/float64/max-base2-exponent-subnormal',
		'@stdlib/constants/float64/min-base10-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_LN',
	'path': '@stdlib/constants/float64/max-ln',
	'value': require( '@stdlib/constants/float64/max-ln' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/min-ln'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_SAFE_FIBONACCI',
	'path': '@stdlib/constants/float64/max-safe-fibonacci',
	'value': require( '@stdlib/constants/float64/max-safe-fibonacci' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-nth-fibonacci'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_SAFE_INTEGER',
	'path': '@stdlib/constants/float64/max-safe-integer',
	'value': require( '@stdlib/constants/float64/max-safe-integer' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/max-safe-integer',
		'@stdlib/constants/float32/max-safe-integer',
		'@stdlib/constants/float64/min-safe-integer'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_SAFE_LUCAS',
	'path': '@stdlib/constants/float64/max-safe-lucas',
	'value': require( '@stdlib/constants/float64/max-safe-lucas' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-fibonacci',
		'@stdlib/constants/float64/max-safe-nth-lucas'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_SAFE_NTH_FIBONACCI',
	'path': '@stdlib/constants/float64/max-safe-nth-fibonacci',
	'value': require( '@stdlib/constants/float64/max-safe-nth-fibonacci' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-fibonacci'
	]
});

ns.push({
	'alias': 'FLOAT64_MAX_SAFE_NTH_LUCAS',
	'path': '@stdlib/constants/float64/max-safe-nth-lucas',
	'value': require( '@stdlib/constants/float64/max-safe-nth-lucas' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-safe-lucas',
		'@stdlib/constants/float64/max-safe-nth-fibonacci'
	]
});

ns.push({
	'alias': 'FLOAT64_MIN_BASE2_EXPONENT',
	'path': '@stdlib/constants/float64/min-base2-exponent',
	'value': require( '@stdlib/constants/float64/min-base2-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base2-exponent',
		'@stdlib/constants/float64/min-base10-exponent',
		'@stdlib/constants/float64/min-base2-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT64_MIN_BASE2_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float64/min-base2-exponent-subnormal',
	'value': require( '@stdlib/constants/float64/min-base2-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base2-exponent-subnormal',
		'@stdlib/constants/float64/min-base10-exponent-subnormal',
		'@stdlib/constants/float64/min-base2-exponent'
	]
});

ns.push({
	'alias': 'FLOAT64_MIN_BASE10_EXPONENT',
	'path': '@stdlib/constants/float64/min-base10-exponent',
	'value': require( '@stdlib/constants/float64/min-base10-exponent' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base10-exponent',
		'@stdlib/constants/float64/min-base10-exponent-subnormal',
		'@stdlib/constants/float64/min-base2-exponent'
	]
});

ns.push({
	'alias': 'FLOAT64_MIN_BASE10_EXPONENT_SUBNORMAL',
	'path': '@stdlib/constants/float64/min-base10-exponent-subnormal',
	'value': require( '@stdlib/constants/float64/min-base10-exponent-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-base10-exponent-subnormal',
		'@stdlib/constants/float64/min-base10-exponent',
		'@stdlib/constants/float64/min-base2-exponent-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT64_MIN_LN',
	'path': '@stdlib/constants/float64/min-ln',
	'value': require( '@stdlib/constants/float64/min-ln' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/max-ln'
	]
});

ns.push({
	'alias': 'FLOAT64_MIN_SAFE_INTEGER',
	'path': '@stdlib/constants/float64/min-safe-integer',
	'value': require( '@stdlib/constants/float64/min-safe-integer' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/min-safe-integer',
		'@stdlib/constants/float32/min-safe-integer',
		'@stdlib/constants/float64/max-safe-integer'
	]
});

ns.push({
	'alias': 'FLOAT64_NUM_BYTES',
	'path': '@stdlib/constants/float64/num-bytes',
	'value': require( '@stdlib/constants/float64/num-bytes' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/num-bytes',
		'@stdlib/constants/float32/num-bytes'
	]
});

ns.push({
	'alias': 'FLOAT64_PRECISION',
	'path': '@stdlib/constants/float64/precision',
	'value': require( '@stdlib/constants/float64/precision' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float16/precision',
		'@stdlib/constants/float32/precision'
	]
});

ns.push({
	'alias': 'FLOAT64_SMALLEST_NORMAL',
	'path': '@stdlib/constants/float64/smallest-normal',
	'value': require( '@stdlib/constants/float64/smallest-normal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/smallest-normal',
		'@stdlib/constants/float64/smallest-subnormal'
	]
});

ns.push({
	'alias': 'FLOAT64_SMALLEST_SUBNORMAL',
	'path': '@stdlib/constants/float64/smallest-subnormal',
	'value': require( '@stdlib/constants/float64/smallest-subnormal' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float32/smallest-subnormal',
		'@stdlib/constants/float64/smallest-normal'
	]
});

ns.push({
	'alias': 'Float64Array',
	'path': '@stdlib/array/float64',
	'value': require( '@stdlib/array/float64' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/buffer',
		'@stdlib/array/float32',
		'@stdlib/array/int16',
		'@stdlib/array/int32',
		'@stdlib/array/int8',
		'@stdlib/array/uint16',
		'@stdlib/array/uint32',
		'@stdlib/array/uint8',
		'@stdlib/array/uint8c'
	]
});

ns.push({
	'alias': 'Float64ArrayFE',
	'path': '@stdlib/array/fixed-endian-float64',
	'value': require( '@stdlib/array/fixed-endian-float64' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/fixed-endian-float32',
		'@stdlib/array/float64'
	]
});

ns.push({
	'alias': 'Float64ArrayLE',
	'path': '@stdlib/array/little-endian-float64',
	'value': require( '@stdlib/array/little-endian-float64' ),
	'type': 'Function',
	'related': [
		'@stdlib/array/big-endian-float64',
		'@stdlib/array/fixed-endian-float64',
		'@stdlib/array/float64',
		'@stdlib/array/little-endian-float32'
	]
});

ns.push({
	'alias': 'forEach',
	'path': '@stdlib/utils/for-each',
	'value': require( '@stdlib/utils/for-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/for-each-right'
	]
});

ns.push({
	'alias': 'forEachAsync',
	'path': '@stdlib/utils/async/for-each',
	'value': require( '@stdlib/utils/async/for-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each',
		'@stdlib/utils/async/for-each-right'
	]
});

ns.push({
	'alias': 'forEachChar',
	'path': '@stdlib/string/for-each',
	'value': require( '@stdlib/string/for-each' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each'
	]
});

ns.push({
	'alias': 'forEachRight',
	'path': '@stdlib/utils/for-each-right',
	'value': require( '@stdlib/utils/for-each-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each',
		'@stdlib/utils/async/for-each-right'
	]
});

ns.push({
	'alias': 'forEachRightAsync',
	'path': '@stdlib/utils/async/for-each-right',
	'value': require( '@stdlib/utils/async/for-each-right' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/for-each',
		'@stdlib/utils/for-each-right'
	]
});

ns.push({
	'alias': 'forIn',
	'path': '@stdlib/utils/for-in',
	'value': require( '@stdlib/utils/for-in' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each',
		'@stdlib/utils/for-own'
	]
});

ns.push({
	'alias': 'format',
	'path': '@stdlib/string/format',
	'value': require( '@stdlib/string/format' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'forOwn',
	'path': '@stdlib/utils/for-own',
	'value': require( '@stdlib/utils/for-own' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/for-each',
		'@stdlib/utils/for-in'
	]
});

ns.push({
	'alias': 'FOURTH_PI',
	'path': '@stdlib/constants/float64/fourth-pi',
	'value': require( '@stdlib/constants/float64/fourth-pi' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/pi'
	]
});

ns.push({
	'alias': 'FOURTH_ROOT_EPS',
	'path': '@stdlib/constants/float64/fourth-root-eps',
	'value': require( '@stdlib/constants/float64/fourth-root-eps' ),
	'type': 'number',
	'related': [
		'@stdlib/constants/float64/eps'
	]
});

ns.push({
	'alias': 'FRB_SF_WAGE_RIGIDITY',
	'path': '@stdlib/datasets/frb-sf-wage-rigidity',
	'value': require( '@stdlib/datasets/frb-sf-wage-rigidity' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'fromCodePoint',
	'path': '@stdlib/string/from-code-point',
	'value': require( '@stdlib/string/from-code-point' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/code-point-at'
	]
});

ns.push({
	'alias': 'Function',
	'path': '@stdlib/function/ctor',
	'value': require( '@stdlib/function/ctor' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'function2string',
	'path': '@stdlib/function/to-string',
	'value': require( '@stdlib/function/to-string' ),
	'type': 'Function',
	'related': [
		'@stdlib/function/ctor'
	]
});

ns.push({
	'alias': 'functionName',
	'path': '@stdlib/utils/function-name',
	'value': require( '@stdlib/utils/function-name' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/constructor-name'
	]
});

ns.push({
	'alias': 'functionSequence',
	'path': '@stdlib/utils/function-sequence',
	'value': require( '@stdlib/utils/function-sequence' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/compose',
		'@stdlib/utils/async/function-sequence'
	]
});

ns.push({
	'alias': 'functionSequenceAsync',
	'path': '@stdlib/utils/async/function-sequence',
	'value': require( '@stdlib/utils/async/function-sequence' ),
	'type': 'Function',
	'related': [
		'@stdlib/utils/async/compose',
		'@stdlib/utils/function-sequence'
	]
});


// EXPORTS //

module.exports = ns;
