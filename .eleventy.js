module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/styles");
  eleventyConfig.addPassthroughCopy("src/assets/images");
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