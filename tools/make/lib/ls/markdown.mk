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
find_print_markdown_list := -exec printf '%s\n' {} \;

# Define the command flags:
FIND_MARKDOWN_FLAGS ?= \
	-type f \
	-name "$(MARKDOWN_PATTERN)" \
	-regex "$(MARKDOWN_FILTER)" \
	-not -path "$(ROOT_DIR)/.git/*" \
	-not -path "$(NODE_MODULES)/*" \
	-not -path "$(DOCS_DIR)/**/$(NODE_MODULES_FOLDER)/*" \
	-not -path "$(BUILD_DIR)/*" \
	-not -path "$(ROOT_DIR)/**/$(BUILD_FOLDER)/*" \
	-not -path "$(ROOT_DIR)/**/$(TMP_FOLDER)/*" \
	-not -path "$(REPORTS_DIR)/*" \
	-not -path "$(TMP_DIR)/*"

ifneq ($(OS), Darwin)
	FIND_MARKDOWN_FLAGS := -regextype posix-extended $(FIND_MARKDOWN_FLAGS)
endif

# Define a command for listing Markdown files:
FIND_MARKDOWN_CMD ?= find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_MARKDOWN_FLAGS)

# Define the list of files:
MARKDOWN_FILES ?= $(shell $(FIND_MARKDOWN_CMD))


# TARGETS #

# List all Markdown files.
#
# This target prints a list of all Markdown files, excluding the `node_modules`, `build`, and `reports` directories.

list-markdown-files:
	$(QUIET) find $(find_kernel_prefix) $(ROOT_DIR) $(FIND_MARKDOWN_FLAGS) $(find_print_markdown_list)

.PHONY: list-markdown-files
