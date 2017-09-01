
# VARIABLES #

# Define the commit message for processing Markdown equations:
GIT_COMMIT_MESSAGE_EQUATIONS ?= 'Process Markdown equations'

# Define the commit message for inserting resource URLs into HTML equation elements:
GIT_COMMIT_MESSAGE_SRC_URLS ?= 'Insert src urls into equation elements'

# Define the command to commit staged files after processing Markdown equations:
GIT_COMMIT_EQUATIONS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_EQUATIONS)

# Define the command to commit staged files after inserting resource URLs:
GIT_COMMIT_SRC_URLS ?= $(GIT_COMMIT) -m $(GIT_COMMIT_MESSAGE_SRC_URLS)

# Define the path relative to a processed Markdown file for storing equation resources:
EQUATION_RESOURCES_PATH ?= ./docs/img/

# Define the path to the [remark][1] executable.
#
# To install remark:
#     $ npm install remark-cli
#
# [1]: https://github.com/wooorm/remark/

REMARK ?= $(BIN_DIR)/remark

# Define the path to the remark configuration file:
REMARK_EQUATIONS_CONF ?= $(CONFIG_DIR)/remark/.remarkrc.js

# Define the path to the remark ignore file:
REMARK_EQUATIONS_IGNORE ?= $(CONFIG_DIR)/remark/.remarkignore

# Define the path to the local remark plugins directory:
REMARK_LOCAL_PLUGINS_DIR ?= $(TOOLS_DIR)/remark/plugins

# Define the path to a plugin which processes Markdown equation comments:
REMARK_IMG_EQUATIONS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-img-equations
REMARK_IMG_EQUATIONS_PLUGIN_SETTINGS ?=
REMARK_IMG_EQUATIONS_PLUGIN_FLAGS ?= --use $(REMARK_IMG_EQUATIONS_PLUGIN)=$(REMARK_IMG_EQUATIONS_PLUGIN_SETTINGS)

# Define the path to a plugin which creates SVG equation files from Markdown equation comments:
REMARK_SVG_EQUATIONS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-svg-equations-to-file
REMARK_SVG_EQUATIONS_PLUGIN_SETTINGS ?= '"'dir'"':'"'$(EQUATION_RESOURCES_PATH)'"'
REMARK_SVG_EQUATIONS_PLUGIN_FLAGS ?= --use $(REMARK_SVG_EQUATIONS_PLUGIN)=$(REMARK_SVG_EQUATIONS_PLUGIN_SETTINGS)

# Define the path to a plugin which inserts resource URLs into Markdown image equation elements:
REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-img-equations-src-urls
REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_SETTINGS ?= '"'dir'"':'"'$(EQUATION_RESOURCES_PATH)'"'
REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_FLAGS ?= --use $(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN)=$(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_SETTINGS)

# Define the path to a plugin which resolves package identifiers to URLs:
REMARK_STDLIB_URLS_PLUGIN ?= $(REMARK_LOCAL_PLUGINS_DIR)/remark-stdlib-urls-github
REMARK_STDLIB_URLS_PLUGIN_SETTINGS ?=
REMARK_STDLIB_URLS_PLUGIN_FLAGS ?= --use $(REMARK_STDLIB_URLS_PLUGIN)=$(REMARK_STDLIB_URLS_PLUGIN_SETTINGS)

# Define command-line options when invoking the remark executable:
REMARK_FLAGS ?= \
	--ext $(MARKDOWN_FILENAME_EXT) \
	--rc-path $(REMARK_EQUATIONS_CONF) \
	--ignore-path $(REMARK_EQUATIONS_IGNORE)

# Define the remark output option:
REMARK_OUTPUT_FLAG ?= --output


# TARGETS #

# Process Markdown files containing equations.
#
# This target processes Markdown files containing Markdown equation elements as follows:
#
# 1. Files containing equation comments are transformed to include equation elements.
# 2. SVG files are generated for each equation.
# 3. Processed files are committed to source control.
# 4. Resource URLs are inserted in image equation elements.
# 5. Processed files are committed to source control.

markdown-equations: $(NODE_MODULES)
	$(QUIET) $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		$(REMARK_IMG_EQUATIONS_PLUGIN_FLAGS) \
		$(REMARK_SVG_EQUATIONS_PLUGIN_FLAGS) \
		$(REMARK_OUTPUT_FLAG) && \
	$(GIT_ADD) && \
	$(GIT_COMMIT_EQUATIONS) && \
	$(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		$(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_FLAGS) \
		$(REMARK_OUTPUT_FLAG) && \
	$(GIT_ADD) && \
	$(GIT_COMMIT_SRC_URLS)

.PHONY: markdown-equations


# Generate image equation elements.
#
# This target transforms Markdown files containing equation comment markup to include image equation elements.

markdown-img-equations: $(NODE_MODULES)
	$(QUIET) $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		$(REMARK_IMG_EQUATIONS_PLUGIN_FLAGS) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-img-equations


# Generate SVG equation files.
#
# This target generates SVG equation files from Markdown equation comments.

markdown-svg-equations: $(NODE_MODULES)
	$(QUIET) $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		$(REMARK_SVG_EQUATIONS_PLUGIN_FLAGS)

.PHONY: markdown-svg-equations


# Insert resource URLs.
#
# This target inserts resource URLs into Markdown image equation elements. Note that this target assumes that image equation files already exist and have been committed to source control.

markdown-img-equations-src-urls: $(NODE_MODULES)
	$(QUIET) $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		$(REMARK_IMG_EQUATIONS_SRC_URLS_PLUGIN_FLAGS) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-img-equations-src-urls


# Insert repository package URLs.
#
# This target resolves package identifiers to GitHub repository URLs and updates Markdown files accordingly.

markdown-stdlib-urls: $(NODE_MODULES)
	$(QUIET) $(REMARK) $(MARKDOWN_FILES) \
		$(REMARK_FLAGS) \
		$(REMARK_STDLIB_URLS_PLUGIN_FLAGS) \
		$(REMARK_OUTPUT_FLAG)

.PHONY: markdown-stdlib-urls


# Clean SVG equation files.
#
# This target removes SVG equation files.

clean-markdown-svg-equations:
	$(QUIET) $(DELETE) -f $(SVG_EQUATION_FILES)

.PHONY: clean-markdown-svg-equations
