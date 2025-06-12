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

/* eslint-disable max-lines */

'use strict';

// MAIN //

/*
* When adding names to the namespace, ensure that they are added in alphabetical order according to alias (namespace key).
*/

var ns = [];

ns.push({
	'alias': 'base.strided.mapBy',
	'path': '@stdlib/strided/base/map-by',
	'value': require( '@stdlib/strided/base/map-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/map-by2',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.mapBy2',
	'path': '@stdlib/strided/base/map-by2',
	'value': require( '@stdlib/strided/base/map-by2' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/map-by',
		'@stdlib/strided/base/binary'
	]
});

ns.push({
	'alias': 'base.strided.max',
	'path': '@stdlib/stats/strided/max',
	'value': require( '@stdlib/stats/strided/max' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/smax'
	]
});

ns.push({
	'alias': 'base.strided.maxabs',
	'path': '@stdlib/stats/strided/maxabs',
	'value': require( '@stdlib/stats/strided/maxabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxabs',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/minabs',
		'@stdlib/stats/strided/nanmaxabs',
		'@stdlib/stats/strided/smaxabs'
	]
});

ns.push({
	'alias': 'base.strided.maxBy',
	'path': '@stdlib/stats/strided/max-by',
	'value': require( '@stdlib/stats/strided/max-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmax',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/min-by',
		'@stdlib/stats/strided/nanmax-by',
		'@stdlib/stats/strided/smax'
	]
});

ns.push({
	'alias': 'base.strided.maxsorted',
	'path': '@stdlib/stats/strided/maxsorted',
	'value': require( '@stdlib/stats/strided/maxsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmaxsorted',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/minsorted',
		'@stdlib/stats/base/nanmaxsorted',
		'@stdlib/stats/strided/smaxsorted'
	]
});

ns.push({
	'alias': 'base.strided.maxViewBufferIndex',
	'path': '@stdlib/strided/base/max-view-buffer-index',
	'value': require( '@stdlib/strided/base/max-view-buffer-index' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.strided.mean',
	'path': '@stdlib/stats/strided/mean',
	'value': require( '@stdlib/stats/strided/mean' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmean',
		'@stdlib/stats/base/nanmean',
		'@stdlib/stats/strided/smean'
	]
});

ns.push({
	'alias': 'base.strided.meankbn',
	'path': '@stdlib/stats/strided/meankbn',
	'value': require( '@stdlib/stats/strided/meankbn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeankbn',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/nanmeankbn',
		'@stdlib/stats/base/smeankbn'
	]
});

ns.push({
	'alias': 'base.strided.meankbn2',
	'path': '@stdlib/stats/strided/meankbn2',
	'value': require( '@stdlib/stats/strided/meankbn2' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeankbn2',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/nanmeankbn2',
		'@stdlib/stats/base/smeankbn2'
	]
});

ns.push({
	'alias': 'base.strided.meanors',
	'path': '@stdlib/stats/base/meanors',
	'value': require( '@stdlib/stats/base/meanors' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanors',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/nanmeanors',
		'@stdlib/stats/base/smeanors'
	]
});

ns.push({
	'alias': 'base.strided.meanpn',
	'path': '@stdlib/stats/base/meanpn',
	'value': require( '@stdlib/stats/base/meanpn' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpn',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/nanmeanpn',
		'@stdlib/stats/strided/smeanpn'
	]
});

ns.push({
	'alias': 'base.strided.meanpw',
	'path': '@stdlib/stats/base/meanpw',
	'value': require( '@stdlib/stats/base/meanpw' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanpw',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/nanmeanpw',
		'@stdlib/stats/strided/smeanpw'
	]
});

ns.push({
	'alias': 'base.strided.meanwd',
	'path': '@stdlib/stats/base/meanwd',
	'value': require( '@stdlib/stats/base/meanwd' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmeanwd',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/nanmeanwd',
		'@stdlib/stats/strided/smeanwd'
	]
});

ns.push({
	'alias': 'base.strided.mediansorted',
	'path': '@stdlib/stats/strided/mediansorted',
	'value': require( '@stdlib/stats/strided/mediansorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmediansorted',
		'@stdlib/stats/strided/mean',
		'@stdlib/stats/base/median',
		'@stdlib/stats/base/nanmediansorted',
		'@stdlib/stats/strided/smediansorted'
	]
});

ns.push({
	'alias': 'base.strided.metaDataProps',
	'path': '@stdlib/strided/base/meta-data-props',
	'value': require( '@stdlib/strided/base/meta-data-props' ),
	'type': 'Function',
	'related': []
});

ns.push({
	'alias': 'base.strided.min',
	'path': '@stdlib/stats/strided/min',
	'value': require( '@stdlib/stats/strided/min' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/smin'
	]
});

ns.push({
	'alias': 'base.strided.minabs',
	'path': '@stdlib/stats/strided/minabs',
	'value': require( '@stdlib/stats/strided/minabs' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminabs',
		'@stdlib/stats/strided/maxabs',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/nanminabs',
		'@stdlib/stats/strided/sminabs'
	]
});

ns.push({
	'alias': 'base.strided.minBy',
	'path': '@stdlib/stats/strided/min-by',
	'value': require( '@stdlib/stats/strided/min-by' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmin',
		'@stdlib/stats/strided/max-by',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/nanmin-by',
		'@stdlib/stats/strided/smin'
	]
});

ns.push({
	'alias': 'base.strided.minsorted',
	'path': '@stdlib/stats/strided/minsorted',
	'value': require( '@stdlib/stats/strided/minsorted' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dminsorted',
		'@stdlib/stats/strided/maxsorted',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/base/nanminsorted',
		'@stdlib/stats/strided/sminsorted'
	]
});

ns.push({
	'alias': 'base.strided.minViewBufferIndex',
	'path': '@stdlib/strided/base/min-view-buffer-index',
	'value': require( '@stdlib/strided/base/min-view-buffer-index' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/offset-view'
	]
});

ns.push({
	'alias': 'base.strided.mskmax',
	'path': '@stdlib/stats/strided/mskmax',
	'value': require( '@stdlib/stats/strided/mskmax' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmax',
		'@stdlib/stats/strided/max',
		'@stdlib/stats/strided/mskmin',
		'@stdlib/stats/strided/nanmax',
		'@stdlib/stats/strided/smskmax'
	]
});

ns.push({
	'alias': 'base.strided.mskmin',
	'path': '@stdlib/stats/strided/mskmin',
	'value': require( '@stdlib/stats/strided/mskmin' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskmin',
		'@stdlib/stats/strided/min',
		'@stdlib/stats/strided/mskmax',
		'@stdlib/stats/strided/nanmin',
		'@stdlib/stats/strided/smskmin'
	]
});

ns.push({
	'alias': 'base.strided.mskrange',
	'path': '@stdlib/stats/strided/mskrange',
	'value': require( '@stdlib/stats/strided/mskrange' ),
	'type': 'Function',
	'related': [
		'@stdlib/stats/strided/dmskrange',
		'@stdlib/stats/base/range',
		'@stdlib/stats/strided/mskmax',
		'@stdlib/stats/strided/mskmin',
		'@stdlib/stats/base/nanrange',
		'@stdlib/stats/strided/smskrange'
	]
});

ns.push({
	'alias': 'base.strided.mskunary',
	'path': '@stdlib/strided/base/mskunary',
	'value': require( '@stdlib/strided/base/mskunary' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/dmskmap',
		'@stdlib/strided/base/mskbinary',
		'@stdlib/strided/base/msknullary',
		'@stdlib/strided/base/mskquaternary',
		'@stdlib/strided/base/mskquinary',
		'@stdlib/strided/base/mskternary',
		'@stdlib/strided/base/smskmap',
		'@stdlib/strided/base/unary'
	]
});

ns.push({
	'alias': 'base.strided.mskunaryDtypeSignatures',
	'path': '@stdlib/strided/base/mskunary-dtype-signatures',
	'value': require( '@stdlib/strided/base/mskunary-dtype-signatures' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/mskunary-signature-callbacks'
	]
});

ns.push({
	'alias': 'base.strided.mskunarySignatureCallbacks',
	'path': '@stdlib/strided/base/mskunary-signature-callbacks',
	'value': require( '@stdlib/strided/base/mskunary-signature-callbacks' ),
	'type': 'Function',
	'related': [
		'@stdlib/strided/base/mskunary-dtype-signatures'
	]
});


// EXPORTS //

module.exports = ns;
