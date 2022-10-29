module.exports = config => {
    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemlpateEngine: 'njk',
      dir: {
        input: 'src',
        output: '_site'
      }
    };
  };