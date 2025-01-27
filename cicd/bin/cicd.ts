#!/usr/bin/env node

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CicdStack } from '../lib/cicd-stack';

const app = new cdk.App();

// Environment-agnostic stack (deploy anywhere)
new CicdStack(app, 'gg-ha-cicd-stack');
