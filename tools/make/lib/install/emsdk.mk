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

# Define the path to an executable for checking Python:
DEPS_CHECK_PYTHON ?= $(TOOLS_DIR)/scripts/check_python

# Define the download URL:
DEPS_EMSDK_URL ?= https://github.com/emscripten-core/emsdk.git

# Determine the basename for the download:
deps_emsdk_basename := emsdk

# Define the path to the file containing a checksum to verify a download:
DEPS_EMSDK_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_emsdk_basename))/sha256)

# Define the output path when downloading:
DEPS_EMSDK_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_emsdk_basename)

# Define the output path after extracting:
deps_emsdk_extract_out := $(DEPS_BUILD_DIR)/emsdk_extracted

# Define the path to the directory containing tests:
DEPS_EMSDK_TEST_DIR ?= $(DEPS_DIR)/test/emsdk

# Define the output directory path for compiled tests:
DEPS_EMSDK_TEST_OUT ?= $(DEPS_EMSDK_TEST_DIR)/build

# Define the path to a test file for checking an installation:
DEPS_EMSDK_TEST_INSTALL ?= $(DEPS_EMSDK_TEST_DIR)/test_install.c

# Define output paths for a compiled test file:
DEPS_EMSDK_TEST_INSTALL_WASM_OUT ?= $(DEPS_EMSDK_TEST_OUT)/test.wasm

# Define the path to the `emcc` compiler:
EMCC ?= $(DEPS_EMSDK_EMSCRIPTEN_EMCC)


# RULES #

#/
# Downloads the Emscripten SDK.
#
# @private
#/
$(DEPS_EMSDK_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Emscripten SDK...' >&2
	$(QUIET) $(GIT) clone $(DEPS_EMSDK_URL) $(DEPS_EMSDK_DOWNLOAD_OUT)

#/
# Extracts an Emscripten SDK download.
#
# @private
#/
$(DEPS_EMSDK_BUILD_OUT): | $(DEPS_BUILD_DIR) $(DEPS_EMSDK_DOWNLOAD_OUT)
	$(QUIET) echo 'Extracting Emscripten SDK...' >&2
	$(QUIET) $(CP) -a $(DEPS_EMSDK_DOWNLOAD_OUT) $(deps_emsdk_extract_out)
	$(QUIET) mv $(deps_emsdk_extract_out) $(DEPS_EMSDK_BUILD_OUT)

#/
# Creates a directory for storing compiled Emscripten SDK tests.
#
# @private
#/
$(DEPS_EMSDK_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_EMSDK_TEST_OUT)

#/
# Compiles a WebAssembly test file for testing an Emscripten SDK installation.
#
# @private
#/
$(DEPS_EMSDK_TEST_INSTALL_WASM_OUT): $(DEPS_EMSDK_BUILD_OUT) $(DEPS_EMSDK_TEST_OUT)
	$(QUIET) $(EMCC) $(DEPS_EMSDK_TEST_INSTALL) \
		-s WASM=1 \
		-o $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT)

#/
# Downloads the Emscripten SDK.
#
# @private
#
# @example
# make deps-download-emsdk
#/
deps-download-emsdk: $(DEPS_EMSDK_DOWNLOAD_OUT)

.PHONY: deps-download-emsdk

#/
# Verifies an Emscripten SDK download.
#
# @private
#
# @example
# make deps-verify-emsdk
#/
deps-verify-emsdk: deps-download-emsdk
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'Nothing to verify.' >&2

.PHONY: deps-verify-emsdk

#/
# Extracts an Emscripten SDK download.
#
# @private
#
# @example
# make deps-extract-emsdk
#/
deps-extract-emsdk: $(DEPS_EMSDK_BUILD_OUT)

.PHONY: deps-extract-emsdk

#/
# Checks a host system for Emscripten SDK installation prerequisites.
#
# @private
#
# @example
# make deps-prerequisites-emsdk
#/
deps-prerequisites-emsdk:
	$(QUIET) $(DEPS_CHECK_CMAKE)
	$(QUIET) $(DEPS_CHECK_GIT)
	$(QUIET) $(DEPS_CHECK_PYTHON)

.PHONY: deps-prerequisites-emsdk

#/
# Installs the Emscripten SDK.
#
# @private
#
# @example
# make deps-install-emsdk
#/
deps-install-emsdk: $(DEPS_EMSDK_BUILD_OUT) deps-prerequisites-emsdk
	$(QUIET) cd $(DEPS_EMSDK_BUILD_OUT) && $(GIT) pull
	$(QUIET) $(DEPS_EMSDK_BUILD_OUT)/emsdk install $(DEPS_EMSDK_VERSION)
	$(QUIET) $(DEPS_EMSDK_BUILD_OUT)/emsdk activate $(DEPS_EMSDK_VERSION)

.PHONY: deps-install-emsdk

#/
# Updates an installed Emscripten SDK.
#
# @private
#
# @example
# make deps-update-emsdk
#/
deps-update-emsdk: deps-install-emsdk deps-test-emsdk

.PHONY: deps-update-emsdk

#
# Tests an Emscripten SDK installation.
#
# @private
#
# @example
# make deps-test-emsdk
#/
deps-test-emsdk: $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT) deps-test-emsdk-wasm
	$(QUIET) echo '' >&2
	$(QUIET) echo 'emcc info...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) $(EMCC) -v >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-emsdk

#/
# Tests an Emscripten SDK installation for generating WebAssembly.
#
# @private
#
# @example
# make deps-test-emsdk-wasm
#/
deps-test-emsdk-wasm: $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo 'Running wasm tests...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'TODO: make test more robust' >&2
	$(QUIET) test -f $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT) >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-emsdk-wasm

#/
# Installs the Emscripten SDK.
#
# @example
# make install-deps-emsdk
#/
install-deps-emsdk: deps-download-emsdk deps-verify-emsdk deps-extract-emsdk deps-install-emsdk deps-test-emsdk

.PHONY: install-deps-emsdk

#/
# Removes an Emscripten SDK installation (but does not remove an Emscripten SDK download if one exists).
#
# @example
# make clean-deps-emsdk
#/
clean-deps-emsdk: clean-deps-emsdk-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_EMSDK_BUILD_OUT)

.PHONY: clean-deps-emsdk

#/
# Removes Emscripten SDK installation tests.
#
# @example
# make clean-deps-emsdk-tests
#/
clean-deps-emsdk-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_EMSDK_TEST_OUT)

.PHONY: clean-deps-emsdk-tests
