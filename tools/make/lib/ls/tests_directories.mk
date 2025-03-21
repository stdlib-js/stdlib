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
FIND_TESTS_DIRS_FLAGS ?= \
	-type d \
	-name "$(TESTS_FOLDER)" \
	-regex "$(TESTS_FILTER)" \
	$(FIND_TESTS_DIRS_EXCLUDE_FLAGS)

ifneq ($(OS), Darwin)
	FIND_TESTS_DIRS_FLAGS := -regextype posix-extended $(FIND_TESTS_DIRS_FLAGS)
endif

# Define a command to list test directories:
FIND_TESTS_DIRS_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TESTS_DIRS_FLAGS)

# Define the list of test directories:
TESTS_DIRS ?= $(shell $(FIND_TESTS_DIRS_CMD))


# TARGETS #

# List test directories.
#
# This target prints a newline-delimited list of test directories.

list-tests-dirs:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_TESTS_DIRS_FLAGS) $(find_print_list)

.PHONY: list-tests-dirs
