#/
# @license Apache-2.0
#
# Copyright 2017 The Stdlib Authors
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
#/

# VARIABLES #

# Define command flags:
FIND_MAKEFILES_FLAGS ?= \
	-name 'Makefile' \
	-o \
	-name '*.mk'


# RULES #

#/
# Prints the runtime value of a `Makefile` variable.
#
# ## Notes
#
# -   The rule uses the following format:
#
#     ```bash
#     $ make inspect.<variable>
#     ```
#
# @example
# make inspect.ROOT_DIR
#
# @example
# make inspect.CC
#/
inspect.%:
	$(QUIET) echo '$*=$($*)'

#/
# Asserts that a `Makefile` variable is set.
#
# ## Notes
#
# -   The rule uses the following format:
#
#     ```bash
#     $ make assert.<variable>
#     ```
#
# -   If a variable is **not** set, the recipe exits with a non-zero exit code.
#
# @example
# make inspect.CXX
#/
assert.%:
	$(QUIET) if [[ "${${*}}" = "" ]]; then \
		echo "\nError: You must set the environment variable: ${*}.\n"; \
		exit 1; \
	fi

#/
# Prints a sorted list of `Makefile` variable names.
#
# ## Notes
#
# -   The list of variables is **not** exhaustive, as the list does **not** include built-in variables. Built-in variables could be included by dumping the `Makefile` database via `make -qp`.
# -   To remove duplicates, pipe to `uniq`.
#
# @example
# make list-variables
#/
list-variables:
	$(QUIET) find $(TOOLS_MAKE_DIR) $(FIND_MAKEFILES_FLAGS) \
	| xargs grep -e '^[A-Z0-9_]\{1,\} ?=' -e '^[A-Za-z0-9_]\{1,\} :=' \
	| awk '{print $$1}' \
	| sed 's/.*:\(.*\)/\1/' \
	| sort

.PHONY: list-variables
