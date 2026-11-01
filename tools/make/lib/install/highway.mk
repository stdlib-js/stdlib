#/
# @license Apache-2.0
#
# Copyright (c) 2026 The Stdlib Authors.
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

# Define the download URL:
DEPS_HIGHWAY_URL ?= https://codeload.github.com/google/highway/tar.gz/refs/tags/$(DEPS_HIGHWAY_VERSION)

# Determine the basename for the download:
deps_highway_basename := highway-$(DEPS_HIGHWAY_VERSION).tar.gz

# Define the path to the file containing a checksum to verify a download:
DEPS_HIGHWAY_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(subst -,_,$(deps_highway_basename)))/sha256)

# Define the output path when downloading:
DEPS_HIGHWAY_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_highway_basename)

# Define the path to the directory containing tests:
DEPS_HIGHWAY_TEST_DIR ?= $(DEPS_DIR)/test/highway

# Define the output directory path for compiled tests:
DEPS_HIGHWAY_TEST_OUT ?= $(DEPS_HIGHWAY_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_HIGHWAY_TEST_INSTALL ?= $(DEPS_HIGHWAY_TEST_DIR)/test_install.cpp

# Define the output path for a test file:
DEPS_HIGHWAY_TEST_INSTALL_OUT ?= $(DEPS_HIGHWAY_TEST_OUT)/test_install

# Define the command for running CMake tests:
CTEST ?= ctest

# Define the native runtime build configuration:
DEPS_HIGHWAY_BUILD_TYPE ?= Release


# RULES #

#/
# Downloads a Highway distribution.
#
# @private
#/
$(DEPS_HIGHWAY_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Highway...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_HIGHWAY_URL) $(DEPS_HIGHWAY_DOWNLOAD_OUT)

#/
# Extracts a Highway gzipped tar archive.
#
# @private
#/
$(DEPS_HIGHWAY_BUILD_OUT): $(DEPS_HIGHWAY_DOWNLOAD_OUT) | deps-verify-highway $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Highway...' >&2
	$(QUIET) $(TAR) -zxf $(DEPS_HIGHWAY_DOWNLOAD_OUT) -C $(DEPS_BUILD_DIR)

#/
# Creates a directory for storing compiled tests.
#
# @private
#/
$(DEPS_HIGHWAY_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_HIGHWAY_TEST_OUT)

#/
# Compiles a test file for testing a Highway installation.
#
# @private
#/
$(DEPS_HIGHWAY_TEST_INSTALL_OUT): $(DEPS_HIGHWAY_BUILD_OUT) $(DEPS_HIGHWAY_TEST_INSTALL) | $(DEPS_HIGHWAY_TEST_OUT)
	$(QUIET) $(CXX) -std=c++17 -I $(DEPS_HIGHWAY_INCLUDE) $(DEPS_HIGHWAY_TEST_INSTALL) -o $(DEPS_HIGHWAY_TEST_INSTALL_OUT)

#/
# Downloads a Highway distribution.
#
# @private
#
# @example
# make deps-download-highway
#/
deps-download-highway: $(DEPS_HIGHWAY_DOWNLOAD_OUT)

.PHONY: deps-download-highway

#/
# Verifies a downloaded Highway distribution.
#
# @private
#
# @example
# make deps-verify-highway
#/
deps-verify-highway: deps-download-highway
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_HIGHWAY_DOWNLOAD_OUT) $(DEPS_HIGHWAY_CHECKSUM) >&2

.PHONY: deps-verify-highway

#/
# Extracts a downloaded Highway distribution.
#
# @private
#
# @example
# make deps-extract-highway
#/
deps-extract-highway: $(DEPS_HIGHWAY_BUILD_OUT)

.PHONY: deps-extract-highway

#/
# Tests an installed Highway distribution.
#
# @private
#
# @example
# make deps-test-highway
#/
deps-test-highway: $(DEPS_HIGHWAY_TEST_INSTALL_OUT)
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(DEPS_HIGHWAY_TEST_INSTALL_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-highway

#/
# Installs Highway.
#
# @example
# make install-deps-highway
#/
install-deps-highway: deps-download-highway deps-verify-highway deps-extract-highway deps-test-highway deps-build-highway

.PHONY: install-deps-highway

#/
# Builds and tests the native Highway runtime.
#
# @example
# make deps-build-highway
#/
deps-build-highway: CFLAGS ?=
deps-build-highway: CXXFLAGS ?=
deps-build-highway: LDFLAGS ?=
deps-build-highway: $(DEPS_HIGHWAY_BUILD_OUT) | $(DEPS_HIGHWAY_TEST_OUT)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_HIGHWAY_RUNTIME_OUT)
	$(QUIET) cd $(DEPS_HIGHWAY_RUNTIME_OUT) && $(CMAKE) \
		-DHIGHWAY_SOURCE="$(DEPS_HIGHWAY_INCLUDE)" \
		-DHIGHWAY_TEST_SOURCE="$(DEPS_HIGHWAY_TEST_DIR)/test_runtime.cpp" \
		-DHIGHWAY_TEST_OUT="$(DEPS_HIGHWAY_TEST_OUT)" \
		-DCMAKE_BUILD_TYPE="$(DEPS_HIGHWAY_BUILD_TYPE)" \
		-DCMAKE_C_COMPILER="$(CC)" \
		-DCMAKE_CXX_COMPILER="$(CXX)" \
		-DCMAKE_C_FLAGS="$(CFLAGS)" \
		-DCMAKE_CXX_FLAGS="$(CXXFLAGS)" \
		-DCMAKE_EXE_LINKER_FLAGS="$(LDFLAGS)" \
		$(TOOLS_DIR)/make/lib/install/highway
	$(QUIET) MAKEFLAGS= MFLAGS= $(CMAKE) --build $(DEPS_HIGHWAY_RUNTIME_OUT) --config $(DEPS_HIGHWAY_BUILD_TYPE) --target stdlib_highway_test
	$(QUIET) cd $(DEPS_HIGHWAY_RUNTIME_OUT) && $(CTEST) -C $(DEPS_HIGHWAY_BUILD_TYPE) --output-on-failure

.PHONY: deps-build-highway

#/
# Removes an installed Highway distribution.
#
# ## Notes
#
# -   The rule does **not** remove a Highway download (if one exists).
#
# @example
# make clean-deps-highway
#/
clean-deps-highway: clean-deps-highway-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_HIGHWAY_BUILD_OUT)

.PHONY: clean-deps-highway

#/
# Removes compiled Highway installation tests.
#
# @example
# make clean-deps-highway-tests
#/
clean-deps-highway-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_HIGHWAY_TEST_OUT)

.PHONY: clean-deps-highway-tests

#/
# Tests the native Highway build metadata.
#
# @example
# make deps-test-highway-build
#/
deps-test-highway-build: deps-build-highway
	$(QUIET) STDLIB_TEST_HIGHWAY_RUNTIME="$(DEPS_HIGHWAY_RUNTIME_OUT)" \
		STDLIB_TEST_HIGHWAY_SOURCE="$(DEPS_HIGHWAY_INCLUDE)" \
		FILES="$(TOOLS_DIR)/make/test/test.highway.js" \
		$(MAKE) -f $(this_file) test-javascript-files

.PHONY: deps-test-highway-build
