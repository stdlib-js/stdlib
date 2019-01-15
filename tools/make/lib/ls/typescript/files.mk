#/
# @license Apache-2.0
#
# Copyright (c) 2019 The Stdlib Authors.
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
FIND_TYPESCRIPT_FLAGS ?= \
	-type f \
	-name "$(TYPESCRIPT_PATTERN)" \
	-regex "$(TYPESCRIPT_FILTER)" \
	$(FIND_FILES_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_TYPESCRIPT_FLAGS := -regextype posix-extended $(FIND_TYPESCRIPT_FLAGS)
endif

# Define a command for listing TypeScript files:
FIND_TYPESCRIPT_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TYPESCRIPT_FLAGS)

# Define the list of files:
TYPESCRIPT_FILES ?= $(shell $(FIND_TYPESCRIPT_CMD))


# TARGETS #

# List all TypeScript files.
#
# This target prints a list of all TypeScript files.

list-typescript-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TYPESCRIPT_FLAGS) $(find_print_list)

.PHONY: list-typescript-files
