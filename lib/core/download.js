const download = require('download-git-repo');
const ora = require('ora');
const chalk = require('chalk');
const downloadFun = (url, projectName) => {
    const spinner = ora().start();
    spinner.text = '代码下载中……';
    download(url, projectName, { clone: true }, (err) => {
        if (!err) {
            spinner.succeed('代码下载成功');
            console.log(chalk.red.bold('cd ' + projectName));
            console.log(chalk.yellow.bold('npm install'));
            console.log(chalk.blue.bold('npm run dev'));
        } else {
            spinner.fail('代码下载失败');
        }
    });
};
module.exports = downloadFun;
