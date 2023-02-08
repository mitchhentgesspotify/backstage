/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import chalk from 'chalk';
import inquirer, { Answers } from 'inquirer';
import { findPaths } from '@backstage/cli-common';
import { Task } from './lib/tasks';
import yaml from 'yaml';
import * as fs from 'fs-extra';
import * as path from 'path';

export default async (): Promise<void> => {
  /* eslint-disable-next-line no-restricted-syntax */
  const paths = findPaths(__dirname);

  const answers: Answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: chalk.blue('Enter a title for your Backstage instance'),
      validate: (value: any) => {
        if (!value) {
          return chalk.red(
            'Enter a title for your Backstage instance, but better this time',
          );
        } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(value)) {
          return chalk.red(
            'App name must be lowercase and contain only letters, digits, and dashes.',
          );
        }
        return true;
      },
    },
  ]);

  // $ create-app ~/dev/backstage-mhentges
  const appDir = paths.targetDir;
  const title = answers.title;

  const appConfig = yaml.parse(
    await fs.readFile(path.join(appDir, 'app-config.yaml'), 'utf8'),
  ) as any;
  appConfig.app.title = title;
  await fs.writeFile(
    path.join(appDir, 'app-config.yaml'),
    yaml.stringify(appConfig, {
      indent: 2,
    }),
    'utf8',
  );

  Task.log(`Title set to "${title}"`);
};
