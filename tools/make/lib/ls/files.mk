#/
# @license Apache-2.0
#
# Copyright (c) 2017 The Stdlib Authors.
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

# Define the command flags:
FIND_FILES_FLAGS ?= \
	-type f \
	-name "$(FILES_PATTERN)" \
	-regex "$(FILES_FILTER)" \
	$(FIND_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_FILES_FLAGS := -regextype posix-extended $(FIND_FILES_FLAGS)
endif

# Define a command for finding files:
FIND_FILES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS)

# Define the list of files:
FILES ?= $(shell $(FIND_FILES_CMD))


# RULES #

#/
# Prints a list of files satisfying filter criteria.
#
# ## Notes
#
# -   This target prints a list of all files, excluding the `node_modules`, `build`, `reports`, and hidden directories.
#
# @param {string} [FILES_FILTER] - file path pattern (e.g., `.*/math/base/special/abs/.*`)
# @param {string} [FILES_PATTERN] - file name pattern (e.g., `*.js`)
#
# @example
# make list-files
#
# @example
# make list-files FILES_FILTER='.*/math/base/special/abs/.*'
#
# @example
# make list-files FILES_FILTER='.*/math/base/special/abs/.*' FILES_PATTERN='*.js'
list-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS) $(find_print_list)

.PHONY: list-files
