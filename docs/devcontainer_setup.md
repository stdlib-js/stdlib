<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Devcontainer Setup

> step by step tutorial on how to setup the repo in a devcontainer.

## Introduction

We appreciate your interest in contributing to stdlib! Below, we've provided a step-by-step tutorial on how to set up the project locally on your device using a devcontainer.

The stdlib repository includes a preconfigured devcontainer, making it the easiest way to set up your development environment. It ensures proper linting, EditorConfig, and tooling are configured right from the start.

### Prerequisites

setting up the stdlib devcontainer **requires** the following prerequisites:


-   [Git][git]: version control
-   [Docker][docker]: containerization
-   [VS Code][vscode]: preferred IDE


### Download

To acquire the source code, first navigate to the parent directory into which you want to place the project [Git][git] repository

<!-- run-disable -->

```bash
$ cd /path/to/parent/destination/directory
```

Next, clone the repository.

<!-- run-disable -->

```bash
$ git clone https://github.com/stdlib-js/stdlib.git
```

If you are wanting to contribute to stdlib, first [fork][github-fork] the repository and amend the previous command.

<!-- run-disable -->

```bash
$ git clone https://github.com/<username>/stdlib.git
```

Open the repo in VS Code.

```bash
$ cd stdlib && code .
```

When prompted, Open the repo in the dev container.

![image](https://github.com/user-attachments/assets/233c08d2-57ec-46c4-8e12-ecb3ca608f83)

Kindly be patient as the post create script may take some time to install all the required languages and dependencies.

![image](https://github.com/user-attachments/assets/8cd011e8-ec41-4216-be1c-d10ce5824928)

Close the terminal and wait for other dependencies to install.

![image](https://github.com/user-attachments/assets/06dbea2a-fb02-446a-a527-2f0626272811)

![image](https://github.com/user-attachments/assets/f7199eb5-f0a4-4fa2-aeba-856279b95c9f)

Close the terminal after the installation is completed.

![image](https://github.com/user-attachments/assets/267cd367-2eff-4d8b-8fb6-721cf5b066e2)

If you see this when you open the terminal then the devcontainer installation was successful!

![image](https://github.com/user-attachments/assets/598259d3-7ce2-4e86-8147-78ba634701a7)

<section class="links">

[git]: http://git-scm.com/

[docker]: https://www.docker.com/

[vscode]: https://code.visualstudio.com/

[github-fork]: https://help.github.com/articles/fork-a-repo/

</section>

<!-- /.links -->
