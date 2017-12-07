
# VARIABLES #

# Define the download URL:
DEPS_ELECTRON_URL ?= https://github.com/electron/electron/releases/download/v$(DEPS_ELECTRON_VERSION)/electron-v$(DEPS_ELECTRON_VERSION)-$(DEPS_ELECTRON_PLATFORM)-$(DEPS_ELECTRON_ARCH).zip

# Determine the basename for the download:
deps_electron_basename := $(notdir $(DEPS_ELECTRON_URL))

# Define the path to the file containing a checksum verify a download:
DEPS_ELECTRON_CHECKSUM ?= $(shell cat $(DEPS_CHECKSUMS_DIR)/$(subst .,_,$(subst -,_,$(deps_electron_basename)))/sha256)

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
deps_electron_cli := '\#!/usr/bin/env node\nvar electron = require("./");var proc = require("child_process");var child = proc.spawn(electron, process.argv.slice(2), {"stdio": "inherit"});child.on("close", function (code) {process.exit(code);});'

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


# TARGETS #

# Download.
#
# This target downloads an Electron distribution.

$(DEPS_ELECTRON_DOWNLOAD_OUT): | $(DEPS_TMP_DIR)
	$(QUIET) echo 'Downloading Electron...' >&2
	$(QUIET) $(DEPS_DOWNLOAD_BIN) $(DEPS_ELECTRON_URL) $(DEPS_ELECTRON_DOWNLOAD_OUT)


# Path.
#
# This target creates a text file containing the executable path.

$(DEPS_ELECTRON_BUILD_OUT)/path.txt: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_path) > $(DEPS_ELECTRON_BUILD_OUT)/path.txt


# Main entry point.
#
# This target creates the main entry point for the Node.js wrapper package.

$(DEPS_ELECTRON_BUILD_OUT)/index.js: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_index) > $(DEPS_ELECTRON_BUILD_OUT)/index.js


# Command-line interface.
#
# This target creates the Node.js Electron command-line interface (CLI).

$(DEPS_ELECTRON_BUILD_OUT)/cli.js: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_cli) > $(DEPS_ELECTRON_BUILD_OUT)/cli.js


# Package.json.
#
# This target creates the Node.js Electron package meta data file.

$(DEPS_ELECTRON_BUILD_OUT)/package.json: | $(DEPS_BUILD_DIR)
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) printf $(deps_electron_package_json) > $(DEPS_ELECTRON_BUILD_OUT)/package.json


# Extract.
#
# This target extracts a ZIP archive.

$(DEPS_ELECTRON_BUILD_OUT): $(DEPS_ELECTRON_DOWNLOAD_OUT) $(deps_electron_prereqs) | $(DEPS_BUILD_DIR)
	$(QUIET) echo 'Extracting Electron...' >&2
	$(QUIET) $(MKDIR_RECURSIVE) $(DEPS_ELECTRON_BUILD_OUT)/dist
	$(QUIET) $(UNZIP) -q $(DEPS_ELECTRON_DOWNLOAD_OUT) -d $@/dist


# Download Electron.
#
# This target downloads an Electron distribution.

deps-download-electron: $(DEPS_ELECTRON_DOWNLOAD_OUT)

.PHONY: deps-download-electron


# Verify download.
#
# This targets verifies a download.

deps-verify-electron: deps-download-electron
	$(QUIET) echo 'Verifying download...' >&2
	$(QUIET) $(DEPS_CHECKSUM_BIN) $(DEPS_ELECTRON_DOWNLOAD_OUT) $(DEPS_ELECTRON_CHECKSUM) >&2

.PHONY: deps-verify-electron


# Extract Electron.
#
# This target extracts an Electron download.

deps-extract-electron: $(DEPS_ELECTRON_BUILD_OUT)

.PHONY: deps-extract-electron


# Test install.
#
# This target tests an installation.

deps-test-electron: $(DEPS_ELECTRON_BUILD_OUT)/cli.js
	$(QUIET) echo 'Running tests...' >&2
	$(QUIET) $(NODE) $< --version >&2
	$(QUIET) echo '' >&2
	$(QUIET) echo 'Success.' >&2

.PHONY: deps-test-electron


# Install Electron.
#
# This target installs Electron.

install-deps-electron: deps-download-electron deps-verify-electron deps-extract-electron deps-test-electron
	$(QUIET) $(MKDIR_RECURSIVE) $(deps_electron_dest)
	$(QUIET) $(CP) -rp $(DEPS_ELECTRON_BUILD_OUT)/* $(deps_electron_dest)

.PHONY: install-deps-electron


# Clean Electron.
#
# This target removes an Electron distribution (but does not remove an Electron download if one exists).

clean-deps-electron: clean-deps-electron-tests
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(DEPS_ELECTRON_BUILD_OUT)
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(deps_electron_dest)

.PHONY: clean-deps-electron


# Clean tests.
#
# This targets remove installation tests.

clean-deps-electron-tests:

.PHONY: clean-deps-electron-tests
