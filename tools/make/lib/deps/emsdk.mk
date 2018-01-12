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
DEPS_EMSDK_URL ?= https://github.com/juj/emsdk.git

# Determine the basename for the download:
deps_emsdk_basename := emsdk

# Define the path to the file containing a checksum to verify a download:
DEPS_EMSDK_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(deps_emsdk_basename))/sha256)

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
DEPS_EMSDK_TEST_INSTALL_ASM_OUT ?= $(DEPS_EMSDK_TEST_OUT)/test.asm.js
DEPS_EMSDK_TEST_INSTALL_WASM_OUT ?= $(DEPS_EMSDK_TEST_OUT)/test.html

# Define the web browser to run tests:
DEPS_EMSDK_TEST_INSTALL_BROWSER ?= firefox

# Define the port over which to serve web browser tests:
DEPS_EMSDK_TEST_INSTALL_PORT ?= 6931

# Define the Emscripten SDK to install:
deps_emsdk := sdk-$(DEPS_EMSDK_VERSION)-64bit

# Define the Binaryen tool to install:
deps_emsdk_binaryen := binaryen-$(DEPS_EMSDK_BINARYEN_VERSION)-64bit

# Define the path to the `emcc` compiler:
EMCC ?= $(DEPS_EMSDK_BUILD_OUT)/emscripten/$(DEPS_EMSDK_VERSION)/emcc

# Define the path to an executable for running HTML pages:
EMRUN ?= $(DEPS_EMSDK_BUILD_OUT)/emscripten/$(DEPS_EMSDK_VERSION)/emrun


# TARGETS #

# Download.
#
# This target downloads an Emscripten SDK.

$(DEPS_EMSDK_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Emscripten SDK...' >&2
	$(QUIET) $(GIT) clone $(DEPS_EMSDK_URL) $(DEPS_EMSDK_DOWNLOAD_OUT)


# Extract.
#
# This target extracts a download.

$(DEPS_EMSDK_BUILD_OUT): | $(DEPS_BUILD_DIR) $(DEPS_EMSDK_DOWNLOAD_OUT)
	$(QUIET) echo 'Extracting Emscripten SDK...' >&2
	$(QUIET) $(CP) -a $(DEPS_EMSDK_DOWNLOAD_OUT) $(deps_emsdk_extract_out)
	$(QUIET) mv $(deps_emsdk_extract_out) $(DEPS_EMSDK_BUILD_OUT)


# Create directory for tests.
#
# This target creates a directory for storing compiled tests.

$(DEPS_EMSDK_TEST_OUT):
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_EMSDK_TEST_OUT)


# Compile asm.js install test.
#
# This target compiles an asm.js test file for testing an installation.

$(DEPS_EMSDK_TEST_INSTALL_ASM_OUT): $(DEPS_EMSDK_BUILD_OUT) $(DEPS_EMSDK_TEST_OUT)
	$(QUIET) $(EMCC) $(DEPS_EMSDK_TEST_INSTALL) \
		-o $(DEPS_EMSDK_TEST_INSTALL_ASM_OUT)


# Compile WebAssembly install test.
#
# This target compiles a WebAssembly test file for testing an installation.

$(DEPS_EMSDK_TEST_INSTALL_WASM_OUT): $(DEPS_EMSDK_BUILD_OUT) $(DEPS_EMSDK_TEST_OUT)
	$(QUIET) $(EMCC) $(DEPS_EMSDK_TEST_INSTALL) \
		-s WASM=1 \
		-o $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT)


# Download Emscripten SDK.
#
# This target downloads an Emscripten SDK.

deps-download-emsdk: $(DEPS_EMSDK_DOWNLOAD_OUT)

.PHONY: deps-download-emsdk


# Verify download.
#
# This targets verifies a download.

deps-verify-emsdk: deps-download-emsdk
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) echo 'Nothing to verify.' >&2

.PHONY: deps-verify-emsdk


# Extract Emscripten SDK.
#
# This target extracts an Emscripten SDK download.

deps-extract-emsdk: $(DEPS_EMSDK_BUILD_OUT)

.PHONY: deps-extract-emsdk


# Check for prerequisites.
#
# This target checks a host system for installation prerequisites.

deps-prerequisites-emsdk:
	$(QUIET) $(DEPS_CHECK_CMAKE)
	$(QUIET) $(DEPS_CHECK_GIT)
	$(QUIET) $(DEPS_CHECK_PYTHON)

.PHONY: deps-prerequisites-emsdk


# Install Emscripten SDK.
#
# This target performs an Emscripten SDK install sequence.

deps-install-emsdk: $(DEPS_EMSDK_BUILD_OUT) deps-prerequisites-emsdk
	$(QUIET) cd $(DEPS_EMSDK_BUILD_OUT) && $(GIT) pull
	$(QUIET) $(DEPS_EMSDK_BUILD_OUT)/emsdk install $(deps_emsdk) $(deps_emsdk_binaryen)
	$(QUIET) $(DEPS_EMSDK_BUILD_OUT)/emsdk activate $(deps_emsdk) $(deps_emsdk_binaryen)

.PHONY: deps-install-emsdk


# Update Emscripten SDK.
#
# This target updates an Emscripten SDK.

deps-update-emsdk: deps-install-emsdk deps-test-emsdk

.PHONY: deps-update-emsdk


# Test install.
#
# This target tests an installation.

deps-test-emsdk: $(DEPS_EMSDK_TEST_INSTALL_ASM_OUT) $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'emcc info...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) $(EMCC) -v >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Running asm.js tests...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) $(NODE) $(DEPS_EMSDK_TEST_INSTALL_ASM_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-emsdk


# Test WebAssembly install.
#
# This target tests an installation for generating WebAssembly.

deps-test-emsdk-wasm: $(DEPS_EMSDK_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo 'Running wasm tests...' >&2
	$(QUIET) echo '' >&2
	$(QUIET) $(EMRUN) \
		--browser $(DEPS_EMSDK_TEST_INSTALL_BROWSER) \
		--port $(DEPS_EMSDK_TEST_INSTALL_PORT) \
		--browser_info \
		--system_info \
		--no_emrun_detect \
		$(DEPS_EMSDK_TEST_INSTALL_WASM_OUT)
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-emsdk-wasm


# Install Emscripten SDK.
#
# This target installs an Emscripten SDK.

install-deps-emsdk: deps-download-emsdk deps-verify-emsdk deps-extract-emsdk deps-install-emsdk deps-test-emsdk

.PHONY: install-deps-emsdk


# Clean Emscripten SDK.
#
# This target removes an Emscripten SDK install (but does not remove an Emscripten SDK download if one exists).

clean-deps-emsdk: clean-deps-emsdk-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_EMSDK_BUILD_OUT)

.PHONY: clean-deps-emsdk


# Clean installation tests.
#
# This target remove installation tests.

clean-deps-emsdk-tests:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_EMSDK_TEST_OUT)

.PHONY: clean-deps-emsdk-tests
