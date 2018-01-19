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

# Define a suffix for pretty printing results as a list:
find_print_wat_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_WAT_FLAGS ?= \
	-type f \
	-name "$(WAT_PATTERN)" \
	-regex "$(WAT_FILTER)" \
	$(FIND_FILES_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_WAT_FLAGS := -regextype posix-extended $(FIND_WAT_FLAGS)
endif

# Define a command for listing WebAssembly text files:
FIND_WAT_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_WAT_FLAGS)

# Define the list of files:
WAT_FILES ?= $(shell $(FIND_WAT_CMD))


# TARGETS #

# List all WebAssembly text files.
#
# This target prints a list of all WebAssembly text files.

list-wat-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_WAT_FLAGS) $(find_print_wat_list)

.PHONY: list-wat-files
