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

var data = new Array( 139 );
data[ 0 ] = require( './contents.json' );
data[ 1 ] = require( './etymology.json' );
data[ 2 ] = require( './extracts.json' );
data[ 3 ] = require( './chapter_1.json' );
data[ 4 ] = require( './chapter_2.json' );
data[ 5 ] = require( './chapter_3.json' );
data[ 6 ] = require( './chapter_4.json' );
data[ 7 ] = require( './chapter_5.json' );
data[ 8 ] = require( './chapter_6.json' );
data[ 9 ] = require( './chapter_7.json' );
data[ 10 ] = require( './chapter_8.json' );
data[ 11 ] = require( './chapter_9.json' );
data[ 12 ] = require( './chapter_10.json' );
data[ 13 ] = require( './chapter_11.json' );
data[ 14 ] = require( './chapter_12.json' );
data[ 15 ] = require( './chapter_13.json' );
data[ 16 ] = require( './chapter_14.json' );
data[ 17 ] = require( './chapter_15.json' );
data[ 18 ] = require( './chapter_16.json' );
data[ 19 ] = require( './chapter_17.json' );
data[ 20 ] = require( './chapter_18.json' );
data[ 21 ] = require( './chapter_19.json' );
data[ 22 ] = require( './chapter_20.json' );
data[ 23 ] = require( './chapter_21.json' );
data[ 24 ] = require( './chapter_22.json' );
data[ 25 ] = require( './chapter_23.json' );
data[ 26 ] = require( './chapter_24.json' );
data[ 27 ] = require( './chapter_25.json' );
data[ 28 ] = require( './chapter_26.json' );
data[ 29 ] = require( './chapter_27.json' );
data[ 30 ] = require( './chapter_28.json' );
data[ 31 ] = require( './chapter_29.json' );
data[ 32 ] = require( './chapter_30.json' );
data[ 33 ] = require( './chapter_31.json' );
data[ 34 ] = require( './chapter_32.json' );
data[ 35 ] = require( './chapter_33.json' );
data[ 36 ] = require( './chapter_34.json' );
data[ 37 ] = require( './chapter_35.json' );
data[ 38 ] = require( './chapter_36.json' );
data[ 39 ] = require( './chapter_37.json' );
data[ 40 ] = require( './chapter_38.json' );
data[ 41 ] = require( './chapter_39.json' );
data[ 42 ] = require( './chapter_40.json' );
data[ 43 ] = require( './chapter_41.json' );
data[ 44 ] = require( './chapter_42.json' );
data[ 45 ] = require( './chapter_43.json' );
data[ 46 ] = require( './chapter_44.json' );
data[ 47 ] = require( './chapter_45.json' );
data[ 48 ] = require( './chapter_46.json' );
data[ 49 ] = require( './chapter_47.json' );
data[ 50 ] = require( './chapter_48.json' );
data[ 51 ] = require( './chapter_49.json' );
data[ 52 ] = require( './chapter_50.json' );
data[ 53 ] = require( './chapter_51.json' );
data[ 54 ] = require( './chapter_52.json' );
data[ 55 ] = require( './chapter_53.json' );
data[ 56 ] = require( './chapter_54.json' );
data[ 57 ] = require( './chapter_55.json' );
data[ 58 ] = require( './chapter_56.json' );
data[ 59 ] = require( './chapter_57.json' );
data[ 60 ] = require( './chapter_58.json' );
data[ 61 ] = require( './chapter_59.json' );
data[ 62 ] = require( './chapter_60.json' );
data[ 63 ] = require( './chapter_61.json' );
data[ 64 ] = require( './chapter_62.json' );
data[ 65 ] = require( './chapter_63.json' );
data[ 66 ] = require( './chapter_64.json' );
data[ 67 ] = require( './chapter_65.json' );
data[ 68 ] = require( './chapter_66.json' );
data[ 69 ] = require( './chapter_67.json' );
data[ 70 ] = require( './chapter_68.json' );
data[ 71 ] = require( './chapter_69.json' );
data[ 72 ] = require( './chapter_70.json' );
data[ 73 ] = require( './chapter_71.json' );
data[ 74 ] = require( './chapter_72.json' );
data[ 75 ] = require( './chapter_73.json' );
data[ 76 ] = require( './chapter_74.json' );
data[ 77 ] = require( './chapter_75.json' );
data[ 78 ] = require( './chapter_76.json' );
data[ 79 ] = require( './chapter_77.json' );
data[ 80 ] = require( './chapter_78.json' );
data[ 81 ] = require( './chapter_79.json' );
data[ 82 ] = require( './chapter_80.json' );
data[ 83 ] = require( './chapter_81.json' );
data[ 84 ] = require( './chapter_82.json' );
data[ 85 ] = require( './chapter_83.json' );
data[ 86 ] = require( './chapter_84.json' );
data[ 87 ] = require( './chapter_85.json' );
data[ 88 ] = require( './chapter_86.json' );
data[ 89 ] = require( './chapter_87.json' );
data[ 90 ] = require( './chapter_88.json' );
data[ 91 ] = require( './chapter_89.json' );
data[ 92 ] = require( './chapter_90.json' );
data[ 93 ] = require( './chapter_91.json' );
data[ 94 ] = require( './chapter_92.json' );
data[ 95 ] = require( './chapter_93.json' );
data[ 96 ] = require( './chapter_94.json' );
data[ 97 ] = require( './chapter_95.json' );
data[ 98 ] = require( './chapter_96.json' );
data[ 99 ] = require( './chapter_97.json' );
data[ 100 ] = require( './chapter_98.json' );
data[ 101 ] = require( './chapter_99.json' );
data[ 102 ] = require( './chapter_100.json' );
data[ 103 ] = require( './chapter_101.json' );
data[ 104 ] = require( './chapter_102.json' );
data[ 105 ] = require( './chapter_103.json' );
data[ 106 ] = require( './chapter_104.json' );
data[ 107 ] = require( './chapter_105.json' );
data[ 108 ] = require( './chapter_106.json' );
data[ 109 ] = require( './chapter_107.json' );
data[ 110 ] = require( './chapter_108.json' );
data[ 111 ] = require( './chapter_109.json' );
data[ 112 ] = require( './chapter_110.json' );
data[ 113 ] = require( './chapter_111.json' );
data[ 114 ] = require( './chapter_112.json' );
data[ 115 ] = require( './chapter_113.json' );
data[ 116 ] = require( './chapter_114.json' );
data[ 117 ] = require( './chapter_115.json' );
data[ 118 ] = require( './chapter_116.json' );
data[ 119 ] = require( './chapter_117.json' );
data[ 120 ] = require( './chapter_118.json' );
data[ 121 ] = require( './chapter_119.json' );
data[ 122 ] = require( './chapter_120.json' );
data[ 123 ] = require( './chapter_121.json' );
data[ 124 ] = require( './chapter_122.json' );
data[ 125 ] = require( './chapter_123.json' );
data[ 126 ] = require( './chapter_124.json' );
data[ 127 ] = require( './chapter_125.json' );
data[ 128 ] = require( './chapter_126.json' );
data[ 129 ] = require( './chapter_127.json' );
data[ 130 ] = require( './chapter_128.json' );
data[ 131 ] = require( './chapter_129.json' );
data[ 132 ] = require( './chapter_130.json' );
data[ 133 ] = require( './chapter_131.json' );
data[ 134 ] = require( './chapter_132.json' );
data[ 135 ] = require( './chapter_133.json' );
data[ 136 ] = require( './chapter_134.json' );
data[ 137 ] = require( './chapter_135.json' );
data[ 138 ] = require( './epilogue.json' );


// EXPORTS //

module.exports = data;
