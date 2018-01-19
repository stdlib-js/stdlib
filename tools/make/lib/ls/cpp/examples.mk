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

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(OS), Darwin)
	find_kernel_prefix := -E
else
	find_kernel_prefix :=
endif

# Define a suffix for pretty printing results as a list:
find_print_cpp_examples_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_CPP_EXAMPLES_FLAGS ?= \
	-type f \
	-name "$(CPP_EXAMPLES_PATTERN)" \
	-path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/**" \
	-regex "$(EXAMPLES_FILTER)" \
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(TOOLS_DIR)/*" \
	-not -path "$(TOOLS_PKGS_DIR)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(DIST_DIR)/*" \
	-not -path "$(DEPS_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(EXAMPLES_FOLDER)/fixtures/*"


ifneq ($(OS), Darwin)
	FIND_CPP_EXAMPLES_FLAGS := -regextype posix-extended $(FIND_CPP_EXAMPLES_FLAGS)
endif

# Define a command to list example files:
FIND_CPP_EXAMPLES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_CPP_EXAMPLES_FLAGS)

# Define the list of example files:
CPP_EXAMPLES ?= $(shell $(FIND_CPP_EXAMPLES_CMD))

# TODO: does not include top-level examples?


# TARGETS #

# List example files.
#
# This target prints a newline-delimited list of example files.

list-examples-cpp:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_CPP_EXAMPLES_FLAGS) $(find_print_cpp_examples_list)

.PHONY: list-examples-cpp
