# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
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

# A `.gyp` file for building a Node.js native add-on.
#
# [1]: https://gyp.gsrc.io/docs/InputFormatReference.md
# [2]: https://gyp.gsrc.io/docs/UserDocumentation.md
{
  # List of files to include in this file:
  'includes': [
    './include.gypi',
  ],

  # Define variables to be used throughout the configuration for all targets:
  'variables': {
    # Target name should match the add-on export name:
    'addon_target_name%': 'addon',

    # Fortran compiler (to override -Dfortran_compiler=<compiler>):
    'fortran_compiler%': 'gfortran',

    # Fortran compiler flags:
    'fflags': [
      # Specify the Fortran standard to which a program is expected to conform:
      '-std=f95',

      # Indicate that the layout is free-form source code:
      '-ffree-form',

      # Aggressive optimization:
      '-O3',

      # Enable commonly used warning options:
      '-Wall',

      # Warn if source code contains problematic language features:
      '-Wextra',

      # Warn if a procedure is called without an explicit interface:
      '-Wimplicit-interface',

      # Do not transform names of entities specified in Fortran source files by appending underscores (i.e., don't mangle names, thus allowing easier usage in C wrappers):
      '-fno-underscoring',

      # Warn if source code contains Fortran 95 extensions and C-language constructs:
      '-pedantic',

      # Compile but do not link (output is an object file):
      '-c',
    ],

    # Set variables based on the host OS:
    'conditions': [
      [
        'OS=="win"',
        {
          # Define the object file suffix:
          'obj': 'obj',
        },
        {
          # Define the object file suffix:
          'obj': 'o',
        }
      ], # end condition (OS=="win")
    ], # end conditions
  }, # end variables

  # Define compile targets:
  'targets': [

    # Target to generate an add-on:
    {
      # The target name should match the add-on export name:
      'target_name': '<(addon_target_name)',

      # Define dependencies:
      'dependencies': [],

      # Define directories which contain relevant include headers:
      'include_dirs': [
        # Local include directory:
        '<@(include_dirs)',
      ],

      # List of source files:
      'sources': [
        '<@(src_files)',
      ],

      # Settings which should be applied when a target's object files are used as linker input:
      'link_settings': {
        # Define libraries:
        'libraries': [
          '<@(libraries)',
        ],

        # Define library directories:
        'library_dirs': [
          '<@(library_dirs)',
        ],
      },

      # C/C++ compiler flags:
      'cflags': [
        # Enable commonly used warning options:
        '-Wall',

        # Aggressive optimization:
        '-O3',
      ],

      # C specific compiler flags:
      'cflags_c': [
        # Specify the C standard to which a program is expected to conform:
        '-std=c99',
      ],

      # C++ specific compiler flags:
      'cflags_cpp': [
        # Specify the C++ standard to which a program is expected to conform:
        '-std=c++11',
      ],

      # Linker flags:
      'ldflags': [],

      # Apply conditions based on the host OS:
      'conditions': [
        [
          'OS=="mac"',
          {
            # Linker flags:
            'ldflags': [
              '-undefined dynamic_lookup',
              '-Wl,-no-pie',
              '-Wl,-search_paths_first',
            ],
          },
        ], # end condition (OS=="mac")
        [
          'OS!="win"',
          {
            # C/C++ flags:
            'cflags': [
              # Generate platform-independent code:
              '-fPIC',
            ],
          },
        ], # end condition (OS!="win")
      ], # end conditions

      # Define custom build actions for particular inputs:
      'rules': [
        {
          # Define a rule for processing Fortran files:
          'extension': 'f',

          # Define the pathnames to be used as inputs when performing processing:
          'inputs': [
            # Full path of the current input:
            '<(RULE_INPUT_PATH)'
          ],

          # Define the outputs produced during processing:
          'outputs': [
            # Store an output object file in a directory for placing intermediate results (only accessible within a single target):
            '<(INTERMEDIATE_DIR)/<(RULE_INPUT_ROOT).<(obj)'
          ],

          # Define the rule for compiling Fortran based on the host OS:
          'conditions': [
            [
              'OS=="win"',

              # Rule to compile Fortran on Windows:
              {
                'rule_name': 'compile_fortran_windows',
                'message': 'Compiling Fortran file <(RULE_INPUT_PATH) on Windows...',

                'process_outputs_as_sources': 0,

                # Define the command-line invocation:
                'action': [
                  '<(fortran_compiler)',
                  '<@(fflags)',
                  '<@(_inputs)',
                  '-o',
                  '<@(_outputs)',
                ],
              },

              # Rule to compile Fortran on non-Windows:
              {
                'rule_name': 'compile_fortran_linux',
                'message': 'Compiling Fortran file <(RULE_INPUT_PATH) on Linux...',

                'process_outputs_as_sources': 1,

                # Define the command-line invocation:
                'action': [
                  '<(fortran_compiler)',
                  '<@(fflags)',
                  '-fPIC', # generate platform-independent code
                  '<@(_inputs)',
                  '-o',
                  '<@(_outputs)',
                ],
              }
            ], # end condition (OS=="win")
          ], # end conditions
        }, # end rule (extension=="f")
      ], # end rules
    }, # end target <(addon_target_name)

    # Target to copy a generated add-on to a standard location:
    {
      'target_name': 'copy_addon',

      # Declare that the output of this target is not linked:
      'type': 'none',

      # Define dependencies:
      'dependencies': [
        # Require that the add-on be generated before building this target:
        '<(addon_target_name)',
      ],

      # Define a list of actions:
      'actions': [
        {
          'action_name': 'copy_addon',
          'message': 'Copying addon...',

          # Explicitly list the inputs in the command-line invocation below:
          'inputs': [],

          # Declare the expected outputs:
          'outputs': [
            '<(addon_output_dir)/<(addon_target_name).node',
          ],

          # Define the command-line invocation:
          'action': [
            'cp',
            '<(PRODUCT_DIR)/<(addon_target_name).node',
            '<(addon_output_dir)/<(addon_target_name).node',
          ],
        },
      ], # end actions
    }, # end target copy_addon
  ], # end targets
}
