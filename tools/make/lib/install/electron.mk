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

# Define the download URL:
DEPS_ELECTRON_URL ?= https://github.com/electron/electron/releases/download/v$(DEPS_ELECTRON_VERSION)/electron-v$(DEPS_ELECTRON_VERSION)-$(DEPS_ELECTRON_PLATFORM)-$(DEPS_ELECTRON_ARCH).zip

# Determine the basename for the download:
deps_electron_basename := $(notdir $(DEPS_ELECTRON_URL))

# Define the path to the file containing a checksum to verify a download:
DEPS_ELECTRON_CHECKSUM ?= $(shell $(CAT) $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(subst -,_,$(deps_electron_basename)))/sha256)

# Define the output path when downloading:
DEPS_ELECTRON_DOWNLOAD_OUT ?= $(DEPS_TMP_DIR)/$(deps_electron_basename)

# Define the path to a file specifying the location of the Electron executable...
ifeq ($(DEPS_ELECTRON_PLATFORM), darwin)
	deps_electron_path := dist/Electron.app/Contents/MacOS/Electron
else
ifeq ($(DEPS_ELECTRON_PLATFORM), linux)
	deps_electron_path := dist/electron
else
ifeq ($(DEPS_ELECTRON_PLATFORM), freebsd)
	deps_electron_path := dist/electron
else
ifeq ($(DEPS_ELECTRON_PLATFORM), sunos)
	deps_electron_path := dist/electron
else
ifeq ($(DEPS_ELECTRON_PLATFORM), win32)
	deps_electron_path := dist/electron.exe
endif
endif
endif
endif
endif

# Define the contents of the main Electron Node.js entry point:
deps_electron_index := 'var fs = require("fs");var path = require("path");var pathFile = path.join(__dirname, "path.txt");if (fs.existsSync(pathFile)){module.exports = path.join(__dirname, fs.readFileSync(pathFile, "utf-8"));} else {throw new Error("Electron failed to install correctly. Please try installing again.");}'

# Define the contents of the Electron Node.js CLI:
deps_electron_cli := '\#!/usr/bin/env node\nvar electron = require("./");var proc = require("child_process");var child = proc.spawn(electron, process.argv.slice(2), {"stdio": "inherit"});child.on("error", function (err) {console.error("Error: %%s", err.message);});child.on("close", function (code) {if (code !== 0) {console.error("Electron exited with a nonzero exit code: %%d", code);} process.exit(code);});'

# Define the contents of the Electron Node.js `package.json`:
deps_electron_package_json := '{"name":"@stdlib/electron","version":"VERSION","bin":{"electron":"cli.js"},"main":"index.js"}'
deps_electron_package_json := $(subst VERSION,$(DEPS_ELECTRON_VERSION),$(deps_electron_package_json))

# Define the build output prerequisites:
deps_electron_prereqs := \
	$(DEPS_ELECTRON_BUILD_OUT)/path.txt \
	$(DEPS_ELECTRON_BUILD_OUT)/index.js \
	$(DEPS_ELECTRON_BUILD_OUT)/cli.js \
	$(DEPS_ELECTRON_BUILD_OUT)/package.json

# Define the node modules destination directory:
deps_electron_dest := $(NODE_MODULES)/@stdlib/electron


# RULES #

#/
# Downloads an Electron distribution.
#
# @private
#/
$(DEPS_ELECTRON_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Electron...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_ELECTRON_URL) $(DEPS_ELECTRON_DOWNLOAD_OUT)

#/
# Creates a text file containing the executable path.
#
# @private
#/
$(DEPS_ELECTRON_BUILD_OUT)/path.txt: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_path) > $(DEPS_ELECTRON_BUILD_OUT)/path.txt

#/
# Creates the main entry point for a Node.js wrapper package.
#
# @private
#/
$(DEPS_ELECTRON_BUILD_OUT)/index.js: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_index) > $(DEPS_ELECTRON_BUILD_OUT)/index.js

#/
# Creates a Node.js Electron command-line interface (CLI).
#
# @private
#/
$(DEPS_ELECTRON_BUILD_OUT)/cli.js: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_cli) > $(DEPS_ELECTRON_BUILD_OUT)/cli.js

#/
# Creates an Node.js Electron package meta data file.
#
# @private
#/
$(DEPS_ELECTRON_BUILD_OUT)/package.json: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_package_json) > $(DEPS_ELECTRON_BUILD_OUT)/package.json

#/
# Extracts a downloaded Electron ZIP archive.
#
# @private
#/
$(DEPS_ELECTRON_BUILD_OUT): $(DEPS_ELECTRON_DOWNLOAD_OUT) $(deps_electron_prereqs) | $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Electron...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)/dist
	$(QUIET) $(UNZIP) -q $(DEPS_ELECTRON_DOWNLOAD_OUT) -d $@/dist

#/
# Downloads an Electron distribution.
#
# @private
#
# @example
# make deps-download-electron
#/
deps-download-electron: $(DEPS_ELECTRON_DOWNLOAD_OUT)

.PHONY: deps-download-electron

#/
# Verifies a downloaded Electron distribution.
#
# @private
#
# @example
# make deps-verify-electron
#/
deps-verify-electron: deps-download-electron
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_ELECTRON_DOWNLOAD_OUT) $(DEPS_ELECTRON_CHECKSUM) >&2

.PHONY: deps-verify-electron

#/
# Extracts an Electron download.
#
# @private
#
# @example
# make deps-extract-electron
#/
deps-extract-electron: $(DEPS_ELECTRON_BUILD_OUT)

.PHONY: deps-extract-electron

#/
# Tests an Electron installation.
#
# @private
#
# @example
# make deps-test-electron
#/
deps-test-electron: $(DEPS_ELECTRON_BUILD_OUT)/cli.js
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(NODE) $< --version >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-electron

#/
# Installs Electron.
#
# @example
# make install-deps-electron
#/
install-deps-electron: deps-download-electron deps-verify-electron deps-extract-electron deps-test-electron
	$(QUIET) $(MKDIR_RECURSIVE) $(deps_electron_dest)
	$(QUIET) $(CP) -rp $(DEPS_ELECTRON_BUILD_OUT)/* $(deps_electron_dest)

.PHONY: install-deps-electron

#/
# Removes an Electron distribution.
#
# ## Notes
#
# -   The rule does **not** remove an Electron download (if one exists).
#
# @example
# make clean-deps-electron
#/
clean-deps-electron: clean-deps-electron-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(deps_electron_dest)

.PHONY: clean-deps-electron

#/
# Removes Electron installation test artifacts.
#
# @example
# make clean-deps-electron-tests
#/
clean-deps-electron-tests:

.PHONY: clean-deps-electron-tests
