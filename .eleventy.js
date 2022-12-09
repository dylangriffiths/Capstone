module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/styles");
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