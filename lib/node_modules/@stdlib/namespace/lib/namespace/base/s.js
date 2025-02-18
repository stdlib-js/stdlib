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

/* eslint-disable stdlib/require-order, max-lines */

'use strict';

// MODULES //

var append = require( './../append.js' );


// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.sargs2multislice',
	'path': '@stdlib/slice/base/sargs2multislice',
	'value': require( '@stdlib/slice/base/sargs2multislice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/args2multislice',
		'@stdlib/slice/base/seq2multislice'
	]
});

ns.push({
	'alias': 'base.scalar2ndarray',
	'path': '@stdlib/ndarray/base/from-scalar',
	'value': require( '@stdlib/ndarray/base/from-scalar' ),
	'type': 'Function',
	'related': [
		'@stdlib/ndarray/array',
		'@stdlib/ndarray/base/ctor',
		'@stdlib/ndarray/ctor'
	]
});

ns.push({
	'alias': 'base.secd',
	'path': '@stdlib/math/base/special/secd',
	'value': require( '@stdlib/math/base/special/secd' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cosd',
		'@stdlib/math/base/special/cos'
	]
});

ns.push({
	'alias': 'base.seq2multislice',
	'path': '@stdlib/slice/base/seq2multislice',
	'value': require( '@stdlib/slice/base/seq2multislice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/seq2slice',
		'@stdlib/slice/base/sargs2multislice'
	]
});

ns.push({
	'alias': 'base.seq2slice',
	'path': '@stdlib/slice/base/seq2slice',
	'value': require( '@stdlib/slice/base/seq2slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/seq2multislice',
		'@stdlib/slice/base/slice2seq'
	]
});

ns.push({
	'alias': 'base.setHighWord',
	'path': '@stdlib/number/float64/base/set-high-word',
	'value': require( '@stdlib/number/float64/base/set-high-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/get-high-word',
		'@stdlib/number/float64/base/set-low-word'
	]
});

ns.push({
	'alias': 'base.setLowWord',
	'path': '@stdlib/number/float64/base/set-low-word',
	'value': require( '@stdlib/number/float64/base/set-low-word' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/get-low-word',
		'@stdlib/number/float64/base/set-high-word'
	]
});

ns.push({
	'alias': 'base.sici',
	'path': '@stdlib/math/base/special/sici',
	'value': require( '@stdlib/math/base/special/sici' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.signbit',
	'path': '@stdlib/number/float64/base/signbit',
	'value': require( '@stdlib/number/float64/base/signbit' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float32/base/signbit'
	]
});

ns.push({
	'alias': 'base.signbitf',
	'path': '@stdlib/number/float32/base/signbit',
	'value': require( '@stdlib/number/float32/base/signbit' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/signbit'
	]
});

ns.push({
	'alias': 'base.significandf',
	'path': '@stdlib/number/float32/base/significand',
	'value': require( '@stdlib/number/float32/base/significand' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.signum',
	'path': '@stdlib/math/base/special/signum',
	'value': require( '@stdlib/math/base/special/signum' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.signumf',
	'path': '@stdlib/math/base/special/signumf',
	'value': require( '@stdlib/math/base/special/signumf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/signum'
	]
});

ns.push({
	'alias': 'base.sin',
	'path': '@stdlib/math/base/special/sin',
	'value': require( '@stdlib/math/base/special/sin' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sinpi',
		'@stdlib/math/base/special/tan'
	]
});

ns.push({
	'alias': 'base.sinc',
	'path': '@stdlib/math/base/special/sinc',
	'value': require( '@stdlib/math/base/special/sinc' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.sincos',
	'path': '@stdlib/math/base/special/sincos',
	'value': require( '@stdlib/math/base/special/sincos' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cos',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/sincospi'
	]
});

ns.push({
	'alias': 'base.sincospi',
	'path': '@stdlib/math/base/special/sincospi',
	'value': require( '@stdlib/math/base/special/sincospi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cospi',
		'@stdlib/math/base/special/sincos',
		'@stdlib/math/base/special/sinpi'
	]
});

ns.push({
	'alias': 'base.sinh',
	'path': '@stdlib/math/base/special/sinh',
	'value': require( '@stdlib/math/base/special/sinh' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cosh',
		'@stdlib/math/base/special/sin',
		'@stdlib/math/base/special/tanh'
	]
});

ns.push({
	'alias': 'base.sinpi',
	'path': '@stdlib/math/base/special/sinpi',
	'value': require( '@stdlib/math/base/special/sinpi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sin'
	]
});

ns.push({
	'alias': 'base.slice2seq',
	'path': '@stdlib/slice/base/slice2seq',
	'value': require( '@stdlib/slice/base/slice2seq' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/seq2slice'
	]
});

ns.push({
	'alias': 'base.sliceLength',
	'path': '@stdlib/slice/base/length',
	'value': require( '@stdlib/slice/base/length' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/nonreduced-dimensions',
		'@stdlib/slice/base/reduced-dimensions',
		'@stdlib/slice/base/shape'
	]
});

ns.push({
	'alias': 'base.sliceNonReducedDimensions',
	'path': '@stdlib/slice/base/nonreduced-dimensions',
	'value': require( '@stdlib/slice/base/nonreduced-dimensions' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/length',
		'@stdlib/slice/base/reduced-dimensions',
		'@stdlib/slice/base/shape'
	]
});

ns.push({
	'alias': 'base.sliceReducedDimensions',
	'path': '@stdlib/slice/base/reduced-dimensions',
	'value': require( '@stdlib/slice/base/reduced-dimensions' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/length',
		'@stdlib/slice/base/nonreduced-dimensions',
		'@stdlib/slice/base/shape'
	]
});

ns.push({
	'alias': 'base.sliceShape',
	'path': '@stdlib/slice/base/shape',
	'value': require( '@stdlib/slice/base/shape' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/length',
		'@stdlib/slice/base/nonreduced-dimensions',
		'@stdlib/slice/base/reduced-dimensions'
	]
});

ns.push({
	'alias': 'base.snakecase',
	'path': '@stdlib/string/base/snakecase',
	'value': require( '@stdlib/string/base/snakecase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/camelcase',
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/stickycase',
		'@stdlib/string/base/uppercase'
	]
});

ns.push({
	'alias': 'base.spence',
	'path': '@stdlib/math/base/special/spence',
	'value': require( '@stdlib/math/base/special/spence' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.sqrt',
	'path': '@stdlib/math/base/special/sqrt',
	'value': require( '@stdlib/math/base/special/sqrt' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrt',
		'@stdlib/math/base/special/rsqrt'
	]
});

ns.push({
	'alias': 'base.sqrt1pm1',
	'path': '@stdlib/math/base/special/sqrt1pm1',
	'value': require( '@stdlib/math/base/special/sqrt1pm1' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.sqrtf',
	'path': '@stdlib/math/base/special/sqrtf',
	'value': require( '@stdlib/math/base/special/sqrtf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/cbrtf',
		'@stdlib/math/base/special/rsqrtf',
		'@stdlib/math/base/special/sqrt'
	]
});

ns.push({
	'alias': 'base.sqrtpi',
	'path': '@stdlib/math/base/special/sqrtpi',
	'value': require( '@stdlib/math/base/special/sqrtpi' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/special/sqrt',
		'@stdlib/math/base/special/sqrtpif'
	]
});

ns.push({
	'alias': 'base.startcase',
	'path': '@stdlib/string/base/startcase',
	'value': require( '@stdlib/string/base/startcase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/capitalize',
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/uppercase'
	]
});

ns.push({
	'alias': 'base.startsWith',
	'path': '@stdlib/string/base/starts-with',
	'value': require( '@stdlib/string/base/starts-with' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/ends-with'
	]
});

ns.push({
	'alias': 'base.stickycase',
	'path': '@stdlib/string/base/stickycase',
	'value': require( '@stdlib/string/base/stickycase' ),
	'type': 'Function',
	'related': [
		'@stdlib/string/base/camelcase',
		'@stdlib/string/base/lowercase',
		'@stdlib/string/base/snakecase',
		'@stdlib/string/base/uppercase'
	]
});

append( ns, require( './strided' ) );

ns.push({
	'alias': 'base.str2multislice',
	'path': '@stdlib/slice/base/str2multislice',
	'value': require( '@stdlib/slice/base/str2multislice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/str2slice'
	]
});

ns.push({
	'alias': 'base.str2slice',
	'path': '@stdlib/slice/base/str2slice',
	'value': require( '@stdlib/slice/base/str2slice' ),
	'type': 'Function',
	'related': [
		'@stdlib/slice/base/str2multislice'
	]
});

ns.push({
	'alias': 'base.sub',
	'path': '@stdlib/math/base/ops/sub',
	'value': require( '@stdlib/math/base/ops/sub' ),
	'type': 'Function',
	'related': [
		'@stdlib/number/float64/base/add',
		'@stdlib/math/base/ops/div',
		'@stdlib/math/base/ops/mul'
	]
});

ns.push({
	'alias': 'base.subf',
	'path': '@stdlib/math/base/ops/subf',
	'value': require( '@stdlib/math/base/ops/subf' ),
	'type': 'Function',
	'related': [
		'@stdlib/math/base/ops/addf',
		'@stdlib/math/base/ops/divf',
		'@stdlib/math/base/ops/mulf',
		'@stdlib/math/base/ops/sub'
	]
});

ns.push({
	'alias': 'base.sumSeries',
	'path': '@stdlib/math/base/tools/sum-series',
	'value': require( '@stdlib/math/base/tools/sum-series' ),
	'type': 'Function',
	'related': []
});


// EXPORTS //

module.exports = ns;
