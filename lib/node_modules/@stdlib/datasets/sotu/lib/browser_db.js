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

// This file is generated using `scripts/build.js`.

'use strict';

// MODULES //

var db0 = require( './../data/1790_george_washington_n.json' );
var db1 = require( './../data/1791_george_washington_n.json' );
var db2 = require( './../data/1792_george_washington_n.json' );
var db3 = require( './../data/1793_george_washington_n.json' );
var db4 = require( './../data/1794_george_washington_n.json' );
var db5 = require( './../data/1795_george_washington_n.json' );
var db6 = require( './../data/1796_george_washington_n.json' );
var db7 = require( './../data/1797_john_adams_f.json' );
var db8 = require( './../data/1798_john_adams_f.json' );
var db9 = require( './../data/1799_john_adams_f.json' );
var db10 = require( './../data/1800_john_adams_f.json' );
var db11 = require( './../data/1801_thomas_jefferson_dr.json' );
var db12 = require( './../data/1802_thomas_jefferson_dr.json' );
var db13 = require( './../data/1803_thomas_jefferson_dr.json' );
var db14 = require( './../data/1804_thomas_jefferson_dr.json' );
var db15 = require( './../data/1805_thomas_jefferson_dr.json' );
var db16 = require( './../data/1806_thomas_jefferson_dr.json' );
var db17 = require( './../data/1807_thomas_jefferson_dr.json' );
var db18 = require( './../data/1808_thomas_jefferson_dr.json' );
var db19 = require( './../data/1809_james_madison_dr.json' );
var db20 = require( './../data/1810_james_madison_dr.json' );
var db21 = require( './../data/1811_james_madison_dr.json' );
var db22 = require( './../data/1812_james_madison_dr.json' );
var db23 = require( './../data/1813_james_madison_dr.json' );
var db24 = require( './../data/1814_james_madison_dr.json' );
var db25 = require( './../data/1815_james_madison_dr.json' );
var db26 = require( './../data/1816_james_madison_dr.json' );
var db27 = require( './../data/1817_james_monroe_dr.json' );
var db28 = require( './../data/1818_james_monroe_dr.json' );
var db29 = require( './../data/1819_james_monroe_dr.json' );
var db30 = require( './../data/1820_james_monroe_dr.json' );
var db31 = require( './../data/1821_james_monroe_dr.json' );
var db32 = require( './../data/1822_james_monroe_dr.json' );
var db33 = require( './../data/1823_james_monroe_dr.json' );
var db34 = require( './../data/1824_james_monroe_dr.json' );
var db35 = require( './../data/1825_john_quincy_adams_dr.json' );
var db36 = require( './../data/1826_john_quincy_adams_dr.json' );
var db37 = require( './../data/1827_john_quincy_adams_dr.json' );
var db38 = require( './../data/1828_john_quincy_adams_dr.json' );
var db39 = require( './../data/1829_andrew_jackson_d.json' );
var db40 = require( './../data/1830_andrew_jackson_d.json' );
var db41 = require( './../data/1831_andrew_jackson_d.json' );
var db42 = require( './../data/1832_andrew_jackson_d.json' );
var db43 = require( './../data/1833_andrew_jackson_d.json' );
var db44 = require( './../data/1834_andrew_jackson_d.json' );
var db45 = require( './../data/1835_andrew_jackson_d.json' );
var db46 = require( './../data/1836_andrew_jackson_d.json' );
var db47 = require( './../data/1837_martin_van_buren_d.json' );
var db48 = require( './../data/1838_martin_van_buren_d.json' );
var db49 = require( './../data/1839_martin_van_buren_d.json' );
var db50 = require( './../data/1840_martin_van_buren_d.json' );
var db51 = require( './../data/1841_john_tyler_wd.json' );
var db52 = require( './../data/1842_john_tyler_wd.json' );
var db53 = require( './../data/1843_john_tyler_wd.json' );
var db54 = require( './../data/1844_john_tyler_wd.json' );
var db55 = require( './../data/1845_james_polk_d.json' );
var db56 = require( './../data/1846_james_polk_d.json' );
var db57 = require( './../data/1847_james_polk_d.json' );
var db58 = require( './../data/1848_james_polk_d.json' );
var db59 = require( './../data/1849_zachary_taylor_w.json' );
var db60 = require( './../data/1850_millard_fillmore_w.json' );
var db61 = require( './../data/1851_millard_fillmore_w.json' );
var db62 = require( './../data/1852_millard_fillmore_w.json' );
var db63 = require( './../data/1853_franklin_pierce_d.json' );
var db64 = require( './../data/1854_franklin_pierce_d.json' );
var db65 = require( './../data/1855_franklin_pierce_d.json' );
var db66 = require( './../data/1856_franklin_pierce_d.json' );
var db67 = require( './../data/1857_james_buchanan_d.json' );
var db68 = require( './../data/1858_james_buchanan_d.json' );
var db69 = require( './../data/1859_james_buchanan_d.json' );
var db70 = require( './../data/1860_james_buchanan_d.json' );
var db71 = require( './../data/1861_abraham_lincoln_r.json' );
var db72 = require( './../data/1862_abraham_lincoln_r.json' );
var db73 = require( './../data/1863_abraham_lincoln_r.json' );
var db74 = require( './../data/1864_abraham_lincoln_r.json' );
var db75 = require( './../data/1865_andrew_johnson_nu.json' );
var db76 = require( './../data/1866_andrew_johnson_nu.json' );
var db77 = require( './../data/1867_andrew_johnson_nu.json' );
var db78 = require( './../data/1868_andrew_johnson_nu.json' );
var db79 = require( './../data/1869_ulysses_s_grant_r.json' );
var db80 = require( './../data/1870_ulysses_s_grant_r.json' );
var db81 = require( './../data/1871_ulysses_s_grant_r.json' );
var db82 = require( './../data/1872_ulysses_s_grant_r.json' );
var db83 = require( './../data/1873_ulysses_s_grant_r.json' );
var db84 = require( './../data/1874_ulysses_s_grant_r.json' );
var db85 = require( './../data/1875_ulysses_s_grant_r.json' );
var db86 = require( './../data/1876_ulysses_s_grant_r.json' );
var db87 = require( './../data/1877_rutherford_b_hayes_r.json' );
var db88 = require( './../data/1878_rutherford_b_hayes_r.json' );
var db89 = require( './../data/1879_rutherford_b_hayes_r.json' );
var db90 = require( './../data/1880_rutherford_b_hayes_r.json' );
var db91 = require( './../data/1881_chester_a_arthur_r.json' );
var db92 = require( './../data/1882_chester_a_arthur_r.json' );
var db93 = require( './../data/1883_chester_a_arthur_r.json' );
var db94 = require( './../data/1884_chester_a_arthur_r.json' );
var db95 = require( './../data/1885_grover_cleveland_d.json' );
var db96 = require( './../data/1886_grover_cleveland_d.json' );
var db97 = require( './../data/1887_grover_cleveland_d.json' );
var db98 = require( './../data/1888_grover_cleveland_d.json' );
var db99 = require( './../data/1889_benjamin_harrison_r.json' );
var db100 = require( './../data/1890_benjamin_harrison_r.json' );
var db101 = require( './../data/1891_benjamin_harrison_r.json' );
var db102 = require( './../data/1892_benjamin_harrison_r.json' );
var db103 = require( './../data/1893_grover_cleveland_d.json' );
var db104 = require( './../data/1894_grover_cleveland_d.json' );
var db105 = require( './../data/1895_grover_cleveland_d.json' );
var db106 = require( './../data/1896_grover_cleveland_d.json' );
var db107 = require( './../data/1897_william_mc_kinley_r.json' );
var db108 = require( './../data/1898_william_mc_kinley_r.json' );
var db109 = require( './../data/1899_william_mc_kinley_r.json' );
var db110 = require( './../data/1900_william_mc_kinley_r.json' );
var db111 = require( './../data/1901_theodore_roosevelt_r.json' );
var db112 = require( './../data/1902_theodore_roosevelt_r.json' );
var db113 = require( './../data/1903_theodore_roosevelt_r.json' );
var db114 = require( './../data/1904_theodore_roosevelt_r.json' );
var db115 = require( './../data/1905_theodore_roosevelt_r.json' );
var db116 = require( './../data/1906_theodore_roosevelt_r.json' );
var db117 = require( './../data/1907_theodore_roosevelt_r.json' );
var db118 = require( './../data/1908_theodore_roosevelt_r.json' );
var db119 = require( './../data/1909_william_h_taft_r.json' );
var db120 = require( './../data/1910_william_h_taft_r.json' );
var db121 = require( './../data/1911_william_h_taft_r.json' );
var db122 = require( './../data/1912_william_h_taft_r.json' );
var db123 = require( './../data/1913_woodrow_wilson_d.json' );
var db124 = require( './../data/1914_woodrow_wilson_d.json' );
var db125 = require( './../data/1915_woodrow_wilson_d.json' );
var db126 = require( './../data/1916_woodrow_wilson_d.json' );
var db127 = require( './../data/1917_woodrow_wilson_d.json' );
var db128 = require( './../data/1918_woodrow_wilson_d.json' );
var db129 = require( './../data/1919_woodrow_wilson_d.json' );
var db130 = require( './../data/1920_woodrow_wilson_d.json' );
var db131 = require( './../data/1921_warren_g_harding_r.json' );
var db132 = require( './../data/1922_warren_g_harding_r.json' );
var db133 = require( './../data/1923_calvin_coolidge_r.json' );
var db134 = require( './../data/1924_calvin_coolidge_r.json' );
var db135 = require( './../data/1925_calvin_coolidge_r.json' );
var db136 = require( './../data/1926_calvin_coolidge_r.json' );
var db137 = require( './../data/1927_calvin_coolidge_r.json' );
var db138 = require( './../data/1928_calvin_coolidge_r.json' );
var db139 = require( './../data/1929_herbert_hoover_r.json' );
var db140 = require( './../data/1930_herbert_hoover_r.json' );
var db141 = require( './../data/1931_herbert_hoover_r.json' );
var db142 = require( './../data/1932_herbert_hoover_r.json' );
var db143 = require( './../data/1934_franklin_d_roosevelt_d.json' );
var db144 = require( './../data/1935_franklin_d_roosevelt_d.json' );
var db145 = require( './../data/1936_franklin_d_roosevelt_d.json' );
var db146 = require( './../data/1937_franklin_d_roosevelt_d.json' );
var db147 = require( './../data/1938_franklin_d_roosevelt_d.json' );
var db148 = require( './../data/1939_franklin_d_roosevelt_d.json' );
var db149 = require( './../data/1940_franklin_d_roosevelt_d.json' );
var db150 = require( './../data/1941_franklin_d_roosevelt_d.json' );
var db151 = require( './../data/1942_franklin_d_roosevelt_d.json' );
var db152 = require( './../data/1943_franklin_d_roosevelt_d.json' );
var db153 = require( './../data/1944_franklin_d_roosevelt_d.json' );
var db154 = require( './../data/1945_franklin_d_roosevelt_d.json' );
var db155 = require( './../data/1946_harry_s_truman_d.json' );
var db156 = require( './../data/1947_harry_s_truman_d.json' );
var db157 = require( './../data/1948_harry_s_truman_d.json' );
var db158 = require( './../data/1949_harry_s_truman_d.json' );
var db159 = require( './../data/1950_harry_s_truman_d.json' );
var db160 = require( './../data/1951_harry_s_truman_d.json' );
var db161 = require( './../data/1952_harry_s_truman_d.json' );
var db162 = require( './../data/1953_dwight_d_eisenhower_r.json' );
var db163 = require( './../data/1953_harry_s_truman_d.json' );
var db164 = require( './../data/1954_dwight_d_eisenhower_r.json' );
var db165 = require( './../data/1955_dwight_d_eisenhower_r.json' );
var db166 = require( './../data/1956_dwight_d_eisenhower_r.json' );
var db167 = require( './../data/1957_dwight_d_eisenhower_r.json' );
var db168 = require( './../data/1958_dwight_d_eisenhower_r.json' );
var db169 = require( './../data/1959_dwight_d_eisenhower_r.json' );
var db170 = require( './../data/1960_dwight_d_eisenhower_r.json' );
var db171 = require( './../data/1961_dwight_d_eisenhower_r.json' );
var db172 = require( './../data/1961_john_f_kennedy_d.json' );
var db173 = require( './../data/1962_john_f_kennedy_d.json' );
var db174 = require( './../data/1963_john_f_kennedy_d.json' );
var db175 = require( './../data/1964_lyndon_b_johnson_d.json' );
var db176 = require( './../data/1965_lyndon_b_johnson_d.json' );
var db177 = require( './../data/1966_lyndon_b_johnson_d.json' );
var db178 = require( './../data/1967_lyndon_b_johnson_d.json' );
var db179 = require( './../data/1968_lyndon_b_johnson_d.json' );
var db180 = require( './../data/1969_lyndon_b_johnson_d.json' );
var db181 = require( './../data/1970_richard_nixon_r.json' );
var db182 = require( './../data/1971_richard_nixon_r.json' );
var db183 = require( './../data/1972_richard_nixon_r.json' );
var db184 = require( './../data/1973_richard_nixon_r.json' );
var db185 = require( './../data/1974_richard_nixon_r.json' );
var db186 = require( './../data/1975_gerald_r_ford_r.json' );
var db187 = require( './../data/1976_gerald_r_ford_r.json' );
var db188 = require( './../data/1977_gerald_r_ford_r.json' );
var db189 = require( './../data/1978_jimmy_carter_d.json' );
var db190 = require( './../data/1979_jimmy_carter_d.json' );
var db191 = require( './../data/1980_jimmy_carter_d.json' );
var db192 = require( './../data/1981_jimmy_carter_d.json' );
var db193 = require( './../data/1982_ronald_reagan_r.json' );
var db194 = require( './../data/1983_ronald_reagan_r.json' );
var db195 = require( './../data/1984_ronald_reagan_r.json' );
var db196 = require( './../data/1985_ronald_reagan_r.json' );
var db197 = require( './../data/1986_ronald_reagan_r.json' );
var db198 = require( './../data/1987_ronald_reagan_r.json' );
var db199 = require( './../data/1988_ronald_reagan_r.json' );
var db200 = require( './../data/1989_george_bush_r.json' );
var db201 = require( './../data/1990_george_bush_r.json' );
var db202 = require( './../data/1991_george_bush_r.json' );
var db203 = require( './../data/1992_george_bush_r.json' );
var db204 = require( './../data/1993_william_j_clinton_d.json' );
var db205 = require( './../data/1994_william_j_clinton_d.json' );
var db206 = require( './../data/1995_william_j_clinton_d.json' );
var db207 = require( './../data/1996_william_j_clinton_d.json' );
var db208 = require( './../data/1997_william_j_clinton_d.json' );
var db209 = require( './../data/1998_william_j_clinton_d.json' );
var db210 = require( './../data/1999_william_j_clinton_d.json' );
var db211 = require( './../data/2000_william_j_clinton_d.json' );
var db212 = require( './../data/2001_george_w_bush_r.json' );
var db213 = require( './../data/2002_george_w_bush_r.json' );
var db214 = require( './../data/2003_george_w_bush_r.json' );
var db215 = require( './../data/2004_george_w_bush_r.json' );
var db216 = require( './../data/2005_george_w_bush_r.json' );
var db217 = require( './../data/2006_george_w_bush_r.json' );
var db218 = require( './../data/2007_george_w_bush_r.json' );
var db219 = require( './../data/2008_george_w_bush_r.json' );
var db220 = require( './../data/2009_barack_obama_d.json' );
var db221 = require( './../data/2010_barack_obama_d.json' );
var db222 = require( './../data/2011_barack_obama_d.json' );
var db223 = require( './../data/2012_barack_obama_d.json' );
var db224 = require( './../data/2013_barack_obama_d.json' );
var db225 = require( './../data/2014_barack_obama_d.json' );
var db226 = require( './../data/2015_barack_obama_d.json' );
var db227 = require( './../data/2016_barack_obama_d.json' );
var db228 = require( './../data/2017_donald_j_trump_r.json' );
var db229 = require( './../data/2018_donald_j_trump_r.json' );
var db230 = require( './../data/2019_donald_j_trump_r.json' );
var db231 = require( './../data/2020_donald_j_trump_r.json' );
var db232 = require( './../data/2021_joseph_r_biden_d.json' );


// MAIN //

var db = [
	db0,
	db1,
	db2,
	db3,
	db4,
	db5,
	db6,
	db7,
	db8,
	db9,
	db10,
	db11,
	db12,
	db13,
	db14,
	db15,
	db16,
	db17,
	db18,
	db19,
	db20,
	db21,
	db22,
	db23,
	db24,
	db25,
	db26,
	db27,
	db28,
	db29,
	db30,
	db31,
	db32,
	db33,
	db34,
	db35,
	db36,
	db37,
	db38,
	db39,
	db40,
	db41,
	db42,
	db43,
	db44,
	db45,
	db46,
	db47,
	db48,
	db49,
	db50,
	db51,
	db52,
	db53,
	db54,
	db55,
	db56,
	db57,
	db58,
	db59,
	db60,
	db61,
	db62,
	db63,
	db64,
	db65,
	db66,
	db67,
	db68,
	db69,
	db70,
	db71,
	db72,
	db73,
	db74,
	db75,
	db76,
	db77,
	db78,
	db79,
	db80,
	db81,
	db82,
	db83,
	db84,
	db85,
	db86,
	db87,
	db88,
	db89,
	db90,
	db91,
	db92,
	db93,
	db94,
	db95,
	db96,
	db97,
	db98,
	db99,
	db100,
	db101,
	db102,
	db103,
	db104,
	db105,
	db106,
	db107,
	db108,
	db109,
	db110,
	db111,
	db112,
	db113,
	db114,
	db115,
	db116,
	db117,
	db118,
	db119,
	db120,
	db121,
	db122,
	db123,
	db124,
	db125,
	db126,
	db127,
	db128,
	db129,
	db130,
	db131,
	db132,
	db133,
	db134,
	db135,
	db136,
	db137,
	db138,
	db139,
	db140,
	db141,
	db142,
	db143,
	db144,
	db145,
	db146,
	db147,
	db148,
	db149,
	db150,
	db151,
	db152,
	db153,
	db154,
	db155,
	db156,
	db157,
	db158,
	db159,
	db160,
	db161,
	db162,
	db163,
	db164,
	db165,
	db166,
	db167,
	db168,
	db169,
	db170,
	db171,
	db172,
	db173,
	db174,
	db175,
	db176,
	db177,
	db178,
	db179,
	db180,
	db181,
	db182,
	db183,
	db184,
	db185,
	db186,
	db187,
	db188,
	db189,
	db190,
	db191,
	db192,
	db193,
	db194,
	db195,
	db196,
	db197,
	db198,
	db199,
	db200,
	db201,
	db202,
	db203,
	db204,
	db205,
	db206,
	db207,
	db208,
	db209,
	db210,
	db211,
	db212,
	db213,
	db214,
	db215,
	db216,
	db217,
	db218,
	db219,
	db220,
	db221,
	db222,
	db223,
	db224,
	db225,
	db226,
	db227,
	db228,
	db229,
	db230,
	db231,
	db232
];


// EXPORTS //

module.exports = db;
