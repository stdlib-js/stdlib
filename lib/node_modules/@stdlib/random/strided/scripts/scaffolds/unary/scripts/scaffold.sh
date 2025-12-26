#!/usr/bin/env bash
#
# @license Apache-2.0
#
# Copyright (c) 2024 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Script for scaffolding a package exposing an iterator which applies a unary mathematical function.
#
# Usage: scaffold.h
#
# Environment Variables:
#
#   ALIAS                               Main export alias.
#   PKG                                 Package name.
#   BASE_PKG                            Base package name.
#   UNIFORM_PRNG_PKG_BASENAME           Basename of package for generating an array of uniformly distributed pseudorandom numbers.
#   PARAM_1                             First parameter name.
#   PARAM_1_STRIDE                      First stride parameter name.
#   PARAM_1_OFFSET                      First offset parameter name.
#   PARAM_1_VALUE                       First parameter value.
#   PARAM_1_RAND_MIN                    First parameter minimum random value.
#   PARAM_1_RAND_MAX                    First parameter maximum random value.
#   PARAM_1_DESC                        First parameter description.
#   PARAM_1_DTYPE                       First parameter data type.
#   FROM_DESC                           Description fragment describing from where pseudorandom numbers are drawn.
#   README_FROM_DESC                    Description fragment tailored for inclusion in the README.
#   README_HEADING                      Top-level README heading.
#   REPL_TEXT_MAIN_DESC                 Main export description.
#   REPL_TEXT_NDARRAY_DESC              ndarray method description.
#   REPL_TEXT_FACTORY_DESC              Factory method description.
#   REPL_TEXT_PARAM_1_DESC              First parameter description.
#   KEYWORDS                            List of keywords.
#

## USER-DEFINED VARIABLES ##

# Define the main export alias:
alias=${ALIAS:-'exponential'}

# Define the package name:
pkg=${PKG:-'stdlib/random/array/exponential'}

# Define the base package name:
base_pkg=${BASE_PKG:-'stdlib/random/base/exponential'}

# Define the basename for the package for generating uniformly distributed pseudorandom numbers:
uniform_prng_pkg_basename=${UNIFORM_PRNG_PKG_BASENAME:-'uniform'}

# Define the name of the first PRNG parameter:
param_1=${PARAM_1:-'lambda'}

# Define the name of the first PRNG parameter stride:
param_1_stride=${PARAM_1_STRIDE:-'sl'}

# Define the name of the first PRNG parameter offset:
param_1_offset=${PARAM_1_OFFSET:-'ol'}

# Define an example value for the first PRNG parameter:
param_1_value=${PARAM_1_VALUE:-'2.0'}

# Define the minimum value when generating pseudorandom values for the first PRNG parameter:
param_1_rand_min=${PARAM_1_RAND_MIN:-'2.0'}

# Define the maximum value when generating pseudorandom values for the first PRNG parameter:
param_1_rand_max=${PARAM_1_RAND_MAX:-'5.0'}

# Define the first PRNG parameter description:
param_1_desc=${PARAM_1_DESC:-'rate parameter'}

# Define the first PRNG parameter data type:
param_1_dtype=${PARAM_1_DTYPE:-'number'}

# Define a description fragment:
from_desc=${FROM_DESC:-'an exponential distribution'}

# Define a description fragment for use in the README:
readme_from_desc=${README_FROM_DESC:-'an [exponential][@stdlib/random/base/exponential] distribution'}

# Define the README heading:
readme_heading=${README_HEADING:-'Exponential Random Numbers'}

# Define the REPL text main export description:
repl_text_main_desc=${REPL_TEXT_MAIN_DESC:-'Fills a strided array with pseudorandom numbers drawn from an exponential distribution.'}

# Define the REPL text description for the `ndarray` method:
repl_text_ndarray_desc=${REPL_TEXT_NDARRAY_DESC:-'Fills a strided array with pseudorandom numbers drawn from an exponential distribution using alternative indexing semantics.'}

# Define the REPL text description for the `factory` method:
repl_text_factory_desc=${REPL_TEXT_FACTORY_DESC:-'Returns a function for filling strided arrays with pseudorandom numbers drawn from an exponential distribution.'}

# Define the REPL text description for the first PRNG parameter:
repl_text_param_1_desc=${REPL_TEXT_PARAM_1_DESC:-'Rate parameter.'}

# Define a list of keywords:
if [[ -z "${KEYWORDS:-}" ]]; then
keywords=(
	"exponential"
	"exp"
	"continuous"
)
else
	IFS=','; read -ra keywords <<< "${KEYWORDS}"; IFS=' ';
fi


## COMPUTED VARIABLES ##

# Converts from camel case to a underscored delineated string.
#
# $1 - string to convert
camelcase_to_snakecase() {
	echo "$1" | sed 's/\([^A-Z]\)\([A-Z]\)/\1_\2/g' | sed 's/\([A-Z]\)\([A-Z]\)\([^A-Z]\)/\1_\2\3/g' | tr '[:upper:]' '[:lower:]'
}

# Determine the root project directory:
root_dir="$(git rev-parse --show-toplevel)"

# Define the project source code directory:
base_dir="${root_dir}/lib/node_modules"

# Define the destination path:
dest_dir="${base_dir}/@${pkg}"

# Define the location of this scaffold:
this_dir="${base_dir}/@stdlib/random/strided/scripts/scaffolds/unary"

# Define the location of a utility for wrapping REPL text descriptions:
wrap="${base_dir}/@stdlib/_tools/repl-txt/wrap-desc/bin/cli"

# Wrap REPL text descriptions (note: 4 space indent and wrap at 80 characters):
repl_text_main_desc=$(echo "${repl_text_main_desc}" | "${wrap}")
repl_text_main_desc="${repl_text_main_desc/    /}"

repl_text_ndarray_desc=$(echo "${repl_text_ndarray_desc}" | "${wrap}")
repl_text_ndarray_desc="${repl_text_ndarray_desc/    /}"

repl_text_factory_desc=$(echo "${repl_text_factory_desc}" | "${wrap}")
repl_text_factory_desc="${repl_text_factory_desc/    /}"

repl_text_param_1_desc=$(echo "${repl_text_param_1_desc}" | "${wrap}")
repl_text_param_1_desc="${repl_text_param_1_desc/    /}"

# Define the copyright year:
year=$(date +'%Y')

# Define the copyright holders:
copyright='The Stdlib Authors'


## SCRIPT ##

# Define the list of scaffold directories:
dirs=(
	"benchmark"
	"docs"
	"docs/types"
	"examples"
	"lib"
	"test"
)

# Define the list of scaffold files:
files=(
	"benchmark/benchmark.float32.broadcast.js"
	"benchmark/benchmark.float32.js"
	"benchmark/benchmark.float64.broadcast.js"
	"benchmark/benchmark.float64.js"
	"benchmark/benchmark.generic.broadcast.js"
	"benchmark/benchmark.generic.js"
	"docs/types/index.d.ts"
	"docs/types/test.ts"
	"docs/repl.txt"
	"examples/index.js"
	"lib/index.js"
	"lib/main.js"
	"lib/factory.js"
	"test/test.js"
	"test/test.ndarray.js"
	"test/test.factory.js"
	"test/test.main.js"
	"package.json"
	"README.md"
)

# Create the destination directories...
for dir in ${dirs[*]}; do
	mkdir -p "${dest_dir}/${dir}"
done

# Copy the scaffold files to the destination directory...
for file in ${files[*]}; do
	cp "${this_dir}/data/${file//\./__}.txt" "${dest_dir}/${file}"
done

# Performs a find and replace across the destination directory.
#
# $1 - regular expression
find_and_replace() {
	find "${dest_dir}" -type f -print0 | xargs -0 perl -pi -w -e "$1"
}

# Performs a find and replace across a specified file.
#
# $1 - file
# $2 - regular expression
file_find_and_replace() {
	find "${dest_dir}/$1" -type f -print0 | xargs -0 perl -pi -w -e "$2"
}

# Joins a list of strings.
#
# $1 - separator
# $* - list of strings to join
join() {
	local d=$1; shift; local f=$1; shift; printf %s "$f" "${@/#/$d}";
}

# For each of the variables defined above, insert into the scaffold files...
regex="s/\\{\\{YEAR\\}\\}/${year}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{COPYRIGHT\\}\\}/${copyright}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{ALIAS\\}\\}/${alias}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PKG\\}\\}/${pkg//\//\\/}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{BASE_PKG\\}\\}/${base_pkg//\//\\/}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{UNIFORM_PRNG_PKG_BASENAME\\}\\}/${uniform_prng_pkg_basename}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1\\}\\}/${param_1}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_STRIDE\\}\\}/${param_1_stride}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_OFFSET\\}\\}/${param_1_offset}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_VALUE\\}\\}/${param_1_value}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_RAND_MIN\\}\\}/${param_1_rand_min}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_RAND_MAX\\}\\}/${param_1_rand_max}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_DESC\\}\\}/${param_1_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_DTYPE\\}\\}/${param_1_dtype}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{FROM_DESC\\}\\}/${from_desc}/g;"
find_and_replace "${regex}"

readme_from_desc="${readme_from_desc/\@/\@}"
readme_from_desc="${readme_from_desc//\//\\/}"
regex="s/\\{\\{README_FROM_DESC\\}\\}/${readme_from_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{README_HEADING\\}\\}/${readme_heading}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_MAIN_DESC\\}\\}/${repl_text_main_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_NDARRAY_DESC\\}\\}/${repl_text_ndarray_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_FACTORY_DESC\\}\\}/${repl_text_factory_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_PARAM_1_DESC\\}\\}/${repl_text_param_1_desc}/g;"
find_and_replace "${regex}"

keywords_sep='",\n    "'
if [ "${#keywords[*]}" -eq 0 ]; then
	words=''
else
	words=$(join "${keywords_sep}" "${keywords[@]}")
	words="\\n    \"${words}\","
fi
regex="s/\\{\\{KEYWORDS\\}\\}/${words}/g;"
find_and_replace "${regex}"
