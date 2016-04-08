
# VARIABLES #

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	FILES ?= $(shell find -E $(ROOT) \
		-name "$(FILES_PATTERN)" \
		-regex "$(FILES_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
else
	FILES ?= $(shell find $(ROOT) \
		-name "$(FILES_PATTERN)" \
		-regextype posix-extended \
		-regex "$(FILES_FILTER)" \
		-not -path "$(ROOT)/.*" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)
endif


# TARGETS #

# List all files.
#
# This target prints a list of all files, excluding the `node_modules`, `build`, `reports`, and hidden directories.

list-files:
	@printf '%s\n' $(FILES)


.PHONY: list-files
