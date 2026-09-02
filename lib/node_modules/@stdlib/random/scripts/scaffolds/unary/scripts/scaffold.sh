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

# Script for scaffolding a package generating pseudorandom numbers.
#
# Usage: scaffold.sh
#
# Environment Variables:
#
#   ALIAS                               Main export alias.
#   PKG                                 Package name.
#   BASE_PKG                            Base package name.
#   PARAM_1                             First parameter name.
#   PARAM_1_VALUE                       First parameter value.
#   PARAM_1_VALUE_AUX                   First parameter value (auxiliary).
#   PARAM_1_DESC                        First parameter description.
#   PARAM_1_DTYPE                       First parameter data type.
#   PARAM_1_JSDOC_DTYPE                 First parameter JSDoc data type.
#   PARAM_1_DTYPE_KIND                  First parameter data type kind.
#   OUTPUT_TS_DTYPE                     Output TypeScript data type.
#   OUTPUT_TS_TYPED_NDARRAY             Output TypeScript typed ndarray.
#   OUTPUT_DTYPE_KIND                   Output data type kind.
#   OUTPUT_DTYPE_POLICY                 Output data type policy.
#   DEFAULT_DTYPE                       Default output array data type.
#   DEFAULT_DTYPE_KIND                  Default output array data type kind.
#   FROM_DESC                           Description fragment describing from where pseudorandom numbers are drawn.
#   README_FROM_DESC                    Description fragment tailored for inclusion in the README.
#   README_HEADING                      Top-level README heading.
#   README_DTYPE_KIND_DESC              Data type kind description.
#   README_DTYPE_KIND_PKG               Data type kind package name.
#   REPL_TEXT_MAIN_DESC                 Main export description.
#   REPL_TEXT_ASSIGN_DESC               Assign method description.
#   REPL_TEXT_FACTORY_DESC              Factory method description.
#   REPL_TEXT_PARAM_1_DESC              First parameter description.
#   REPL_TEXT_ASSIGN_PARAM_1_DESC       First parameter description for the assign method.
#   KEYWORDS                            List of keywords.
#

## USER-DEFINED VARIABLES ##

# Define the main export alias:
alias=${ALIAS:-'exponential'}

# Define the package name:
pkg=${PKG:-'stdlib/random/exponential'}

# Define the base package name:
base_pkg=${BASE_PKG:-'stdlib/random/base/exponential'}

# Define the name of the first PRNG parameter:
param_1=${PARAM_1:-'lambda'}

# Define an example value for the first PRNG parameter:
param_1_value=${PARAM_1_VALUE:-'2.0'}

# Define an auxiliary example value for the first PRNG parameter:
param_1_value_aux=${PARAM_1_VALUE_AUX:-'10.0'}

# Define the first PRNG parameter description:
param_1_desc=${PARAM_1_DESC:-'rate parameter'}

# Define the first PRNG parameter data type:
param_1_dtype=${PARAM_1_DTYPE:-'number'}

# Define the first PRNG parameter JSDoc data type:
param_1_jsdoc_dtype=${PARAM_1_JSDOC_DTYPE:-'number'}

# Define the first PRNG parameter data type kind:
param_1_dtype_kind=${PARAM_1_DTYPE_KIND:-'real_and_generic'}

# Define the output array TypeScript data type:
output_ts_dtype=${OUTPUT_TS_DTYPE:-'RealFloatingPointAndGenericDataType'}

# Define the output ndarray TypeScript typed ndarray type definition:
output_ts_typed_ndarray=${OUTPUT_TS_TYPED_NDARRAY:-'floatndarray'}

# Define the output array data type kind:
output_dtype_kind=${OUTPUT_DTYPE_KIND:-'real_floating_point_and_generic'}

# Define the output array data type policy:
output_dtype_policy=${OUTPUT_DTYPE_POLICY:-'real_floating_point_and_generic'}

# Define the default data type:
default_dtype=${DEFAULT_DTYPE:-'float64'}

# Define the default data type kind:
default_dtype_kind=${DEFAULT_DTYPE_KIND:-'real_floating_point'}

# Define a description fragment:
from_desc=${FROM_DESC:-'an exponential distribution'}

# Define a description fragment for use in the README:
readme_from_desc=${README_FROM_DESC:-'an [exponential][@stdlib/random/base/exponential] distribution'}

# Define the README heading:
readme_heading=${README_HEADING:-'Exponential Random Numbers'}

# Define the data type kind description:
readme_dtype_kind_desc=${README_DTYPE_KIND_DESC:-'a real-valued floating-point'}

# Define the data type kind package:
readme_dtype_kind_pkg=${README_DTYPE_KIND_PKG:-'stdlib/ndarray/dtypes'}

# Define the REPL text main export description:
repl_text_main_desc=${REPL_TEXT_MAIN_DESC:-'Returns an ndarray containing pseudorandom numbers drawn from an exponential distribution.'}

# Define the REPL text description for the `assign` method:
repl_text_assign_desc=${REPL_TEXT_ASSIGN_DESC:-'Fills an array with pseudorandom numbers drawn from an exponential distribution.'}

# Define the REPL text description for the `factory` method:
repl_text_factory_desc=${REPL_TEXT_FACTORY_DESC:-'Returns a function for generating pseudorandom numbers drawn from an exponential distribution.'}

# Define the REPL text description for the first PRNG parameter:
repl_text_param_1_desc=${REPL_TEXT_PARAM_1_DESC:-'Rate parameter. If an ndarray, must be broadcast compatible with the specified array shape.'}

# Define the REPL text description for the first PRNG parameter for the `assign` method:
repl_text_assign_param_1_desc=${REPL_TEXT_ASSIGN_PARAM_1_DESC:-'Rate parameter. If an ndarray, must be broadcast compatible with the provided output array.'}

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
this_dir="${base_dir}/@stdlib/random/scripts/scaffolds/unary"

# Define the location of a utility for wrapping REPL text descriptions:
wrap="${base_dir}/@stdlib/_tools/repl-txt/wrap-desc/bin/cli"

# Wrap REPL text descriptions (note: 4 space indent and wrap at 80 characters):
repl_text_main_desc=$(echo "${repl_text_main_desc}" | "${wrap}")
repl_text_main_desc="${repl_text_main_desc/    /}"

repl_text_assign_desc=$(echo "${repl_text_assign_desc}" | "${wrap}")
repl_text_assign_desc="${repl_text_assign_desc/    /}"

repl_text_factory_desc=$(echo "${repl_text_factory_desc}" | "${wrap}")
repl_text_factory_desc="${repl_text_factory_desc/    /}"

repl_text_param_1_desc=$(echo "    ${repl_text_param_1_desc}" | "${wrap}")
repl_text_param_1_desc="${repl_text_param_1_desc/        /}"
repl_text_param_1_desc="${repl_text_param_1_desc//    /        }"

repl_text_assign_param_1_desc=$(echo "    ${repl_text_assign_param_1_desc}" | "${wrap}")
repl_text_assign_param_1_desc="${repl_text_assign_param_1_desc/        /}"
repl_text_assign_param_1_desc="${repl_text_assign_param_1_desc//    /        }"

repl_text_dtype_desc=$(echo "    Array data type. Must be ${readme_dtype_kind_desc} or \"generic\" data type." | "${wrap}")
repl_text_dtype_desc="${repl_text_dtype_desc/        /}"
repl_text_dtype_desc="${repl_text_dtype_desc//    /        }"

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
	"benchmark/benchmark.1d.js"
	"benchmark/benchmark.2d.js"
	"benchmark/benchmark.3d.assign.js"
	"benchmark/benchmark.3d.broadcast.js"
	"benchmark/benchmark.3d.js"
	"benchmark/benchmark.3d.same_shape.js"
	"benchmark/benchmark.4d.js"
	"benchmark/benchmark.5d.js"
	"benchmark/benchmark.factory.js"
	"docs/types/index.d.ts"
	"docs/types/test.ts"
	"docs/repl.txt"
	"examples/index.js"
	"lib/index.js"
	"lib/main.js"
	"lib/factory.js"
	"test/test.js"
	"test/test.assign.js"
	"test/test.factory.js"
	"test/test.main.js"
	"package.json"
	"README.md"
)

# Create the destination directories...
for dir in "${dirs[@]}"; do
	mkdir -p "${dest_dir}/${dir}"
done

# Copy the scaffold files to the destination directory...
for file in "${files[@]}"; do
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

regex="s/\\{\\{PARAM_1\\}\\}/${param_1}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_VALUE\\}\\}/${param_1_value}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_VALUE_AUX\\}\\}/${param_1_value_aux}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_DESC\\}\\}/${param_1_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_DTYPE\\}\\}/${param_1_dtype}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_JSDOC_DTYPE\\}\\}/${param_1_jsdoc_dtype}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{PARAM_1_DTYPE_KIND\\}\\}/${param_1_dtype_kind}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{OUTPUT_TS_DTYPE\\}\\}/${output_ts_dtype}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{OUTPUT_TS_TYPED_NDARRAY\\}\\}/${output_ts_typed_ndarray}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{OUTPUT_DTYPE_KIND\\}\\}/${output_dtype_kind}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{OUTPUT_DTYPE_POLICY\\}\\}/${output_dtype_policy}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{DEFAULT_DTYPE\\}\\}/${default_dtype}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{DEFAULT_DTYPE_KIND\\}\\}/${default_dtype_kind}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{FROM_DESC\\}\\}/${from_desc}/g;"
find_and_replace "${regex}"

readme_from_desc="${readme_from_desc/\@/\@}"
readme_from_desc="${readme_from_desc//\//\\/}"
regex="s/\\{\\{README_FROM_DESC\\}\\}/${readme_from_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{README_HEADING\\}\\}/${readme_heading}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{README_DTYPE_KIND_DESC\\}\\}/${readme_dtype_kind_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{README_DTYPE_KIND_PKG\\}\\}/${readme_dtype_kind_pkg//\//\\/}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_MAIN_DESC\\}\\}/${repl_text_main_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_ASSIGN_DESC\\}\\}/${repl_text_assign_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_FACTORY_DESC\\}\\}/${repl_text_factory_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_PARAM_1_DESC\\}\\}/${repl_text_param_1_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_ASSIGN_PARAM_1_DESC\\}\\}/${repl_text_assign_param_1_desc}/g;"
find_and_replace "${regex}"

regex="s/\\{\\{REPL_TEXT_DTYPE_DESC\\}\\}/${repl_text_dtype_desc}/g;"
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
