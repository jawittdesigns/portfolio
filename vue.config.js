const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const argv = require('yargs').argv

const config = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: '@import "src/sass/style.scss";',
      },
    },
  },
  pluginOptions: {
    stylelint: {
      fix: true,
      files: '',
      formatter: () => {},
    },
    lintStyleOnBuild: false,
  },
  configureWebpack: {
    name: process.env.VUE_APP_TITLE,
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    plugins: [],
  },
}

if (argv.preprocess) {
  config.configureWebpack.plugins.push(
    new PrerenderSpaPlugin({
      staticDir: path.resolve(__dirname, './dist'),
      routes: ['/', '/projects', '/contact', '/contact/submition'],
      postProcessHtml: function(context) {
        var titles = {
          '/': 'Jason Witt',
          '/projects': 'Projects',
          '/contact': 'Contact',
          '/contact/submition': 'Contact Submition',
        }
        return context.html.replace(/<title>[^<]*<\/title>/i, '<title>' + titles[context.route] + '</title>')
      },
    })
  )
}

module.exports = config
