#! /usr/bin/env node
const { program } = require('commander'); //专门处理命令选项参数
const inquirer = require('inquirer'); //命令行问答交互工具
const config = require('../config');
const downloadFun = require('../lib/core/download');
const description = require('../lib/core/description');
description(program);

program
    .command('create ,<projectName> [other...]')
    .alias('crt')
    .description('创建项目')
    .action(async (projectName, args) => {
        // console.log(project);
        // console.log(args);

        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'framwork',
                choices: config.framwork,
                message: '请选择你所使用的框架',
            },
        ]);
        downloadFun(config.foramworkUrl[answer.framwork], projectName);
    });

program.parse(process.argv);
