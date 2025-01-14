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

# Define the path to an executable for checking CMake:
DEPS_CHECK_CMAKE ?= $(TOOLS_DIR)/scripts/check_cmake

# Define the path to an executable for checking git:
DEPS_CHECK_GIT ?= $(TOOLS_DIR)/scripts/check_git

# Define the download URL:
DEPS_WABT_URL ?= https://github.com/WebAssembly/wabt

# Determine the basename for the download:
deps_wabt_basename := wabt

# Define the path to the file containing a checksum to verify a download:
DEPS_WABT_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_wabt_basename))/sha256)

# Define the output path when downloading:
DEPS_WABT_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_wabt_basename)

# Define the output path after extracting:
deps_wabt_extract_out := $(DEPS_BUILD_DIR)/wabt_extracted

# Define the path to the directory containing tests:
DEPS_WABT_TEST_DIR ?= $(DEPS_DIR)/test/wabt

# Define the output directory path for compiled tests:
DEPS_WABT_TEST_OUT ?= $(DEPS_WABT_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_WABT_TEST_INSTALL ?= $(DEPS_WABT_TEST_DIR)/test_install.wasm

# Define output path for a compiled test file:
DEPS_WABT_TEST_INSTALL_WAT_OUT ?= $(DEPS_WABT_TEST_OUT)/test.wat
DEPS_WABT_TEST_INSTALL_WASM_OUT ?= $(DEPS_WABT_TEST_OUT)/test.wasm


# RULES #

#/
# Downloads the WebAssembly Binary Toolkit (WABT).
#
# @private
#/
$(DEPS_WABT_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading WebAssembly Binary Toolkit...' >&2
	$(QUIET) $(GIT) clone --recursive $(DEPS_WABT_URL) $(DEPS_WABT_DOWNLOAD_OUT)

#/
# Extracts a WebAssembly Binary Toolkit (WABT) download.
#
# @private
#/
$(DEPS_WABT_BUILD_OUT): | $(DEPS_BUILD_DIR) $(DEPS_WABT_DOWNLOAD_OUT)
	$(QUIET) echo 'Extracting WebAssembly Binary Toolkit...' >&2
	$(QUIET) $(CP) -a $(DEPS_WABT_DOWNLOAD_OUT) $(deps_wabt_extract_out)
	$(QUIET) mv $(deps_wabt_extract_out) $(DEPS_WABT_BUILD_OUT)

#/
# Creates a directory for storing compiled tests for testing a WebAssembly Binary Toolkit (WABT) installation.
#
# @private
#/
$(DEPS_WABT_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_WABT_TEST_OUT)

#/
# Compiles a WAT test file for testing a WebAssembly Binary Toolkit (WABT) installation.
#
# @private
#/
$(DEPS_WABT_TEST_INSTALL_WAT_OUT): $(DEPS_WABT_BUILD_OUT) $(DEPS_WABT_TEST_OUT)
	$(QUIET) $(DEPS_WABT_WASM2WAT) $(DEPS_WABT_TEST_INSTALL) \
		-o $(DEPS_WABT_TEST_INSTALL_WAT_OUT)

#/
# Compiles a WASM test file for testing a WebAssembly Binary Toolkit (WABT) installation.
#
# @private
#/
$(DEPS_WABT_TEST_INSTALL_WASM_OUT): $(DEPS_WABT_TEST_INSTALL_WAT_OUT)
	$(QUIET) $(DEPS_WABT_WAT2WASM) $(DEPS_WABT_TEST_INSTALL_WAT_OUT) \
		-o $(DEPS_WABT_TEST_INSTALL_WASM_OUT)

#/
# Downloads the WebAssembly Binary Toolkit (WABT).
#
# @private
#
# @example
# make deps-download-wabt
#/
deps-download-wabt: $(DEPS_WABT_DOWNLOAD_OUT)

.PHONY: deps-download-wabt

#/
# Verifies a WebAssembly Binary Toolkit (WABT) download.
#
# @private
#
# @example
# make deps-verify-wabt
#/
deps-verify-wabt: deps-download-wabt
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'Nothing to verify.' >&2

.PHONY: deps-verify-wabt

#/
# Extracts a WebAssembly Binary Toolkit (WABT) download.
#
# @private
#
# @example
# make deps-extract-wabt
#/
deps-extract-wabt: $(DEPS_WABT_BUILD_OUT)

.PHONY: deps-extract-wabt

#/
# Checks a host system for WebAssembly Binary Toolkit (WABT) installation prerequisites.
#
# @private
#
# @example
# make deps-prerequisites-wabt
#/
deps-prerequisites-wabt:
	$(QUIET) $(DEPS_CHECK_CMAKE)
	$(QUIET) $(DEPS_CHECK_GIT)

.PHONY: deps-prerequisites-wabt

#/
# Installs WebAssembly Binary Toolkit (WABT).
#
# @private
#
# @example
# make deps-install-wabt
#/
deps-install-wabt: $(DEPS_WABT_BUILD_OUT) deps-prerequisites-wabt
	$(QUIET) cd $(DEPS_WABT_BUILD_OUT) && \
		$(MKDIR_RECURSIVE) build && \
		cd build && \
		$(CMAKE) .. && \
		$(CMAKE) --build .

.PHONY: deps-install-wabt

#/
# Updates the WebAssembly Binary Toolkit (WABT).
#
# @private
#
# @example
# make deps-update-wabt
#/
deps-update-wabt: $(DEPS_WABT_BUILD_OUT)
	$(QUIET) cd $(DEPS_WABT_BUILD_OUT) && \
		$(GIT) pull && \
		$(GIT) submodule update --init --recursive && \
		$(DELETE) $(DELETE_FLAGS) $(DEPS_WABT_BUILD_OUT)/build &&
		$(MKDIR_RECURSIVE) $(DEPS_WABT_BUILD_OUT)/build && \
		cd $(DEPS_WABT_BUILD_OUT)/build && \
		$(CMAKE) .. && \
		$(CMAKE) --build .

.PHONY: deps-update-wabt

#/
# Tests a WebAssembly Binary Toolkit (WABT) installation.
#
# @private
#
# @example
# make deps-test-wabt
#/
deps-test-wabt: $(DEPS_WABT_TEST_INSTALL_WAT_OUT) $(DEPS_WABT_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-wabt

#/
# Installs the WebAssembly Binary Toolkit (WABT).
#
# @example
# make install-deps-wabt
#/
install-deps-wabt: deps-download-wabt deps-verify-wabt deps-extract-wabt deps-install-wabt deps-test-wabt

.PHONY: install-deps-wabt

#/
# Removes a WebAssembly Binary Toolkit (WABT) install (but does not remove a download if one exists).
#
# @example
# make clean-deps-wabt
#/
clean-deps-wabt: clean-deps-wabt-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_WABT_BUILD_OUT)

.PHONY: clean-deps-wabt

#/
# Removes WebAssembly Binary Toolkit (WABT) installation tests.
#
# @example
# make clean-deps-wabt-tests
#/
clean-deps-wabt-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_WABT_TEST_OUT)

.PHONY: clean-deps-wabt-tests
