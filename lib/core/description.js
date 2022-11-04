const description = (program) => {
    program
        .version(require('../../package.json').version)
        .description('蛮牛多模板脚手架')
        .usage('<command> [options]');
};
module.exports = description;
