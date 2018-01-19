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
	-not -path "$(ROOT_DIR)/.*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*"

ifneq ($(OS), Darwin)
	FIND_FILES_FLAGS := -regextype posix-extended $(FIND_FILES_FLAGS)
endif

# Define a command for finding files:
FIND_FILES_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS)

# Define the list of files:
FILES ?= $(shell $(FIND_FILES_CMD))


# TARGETS #

# List all files.
#
# This target prints a list of all files, excluding the `node_modules`, `build`, `reports`, and hidden directories.

list-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_FILES_FLAGS) $(find_print_list)

.PHONY: list-files
