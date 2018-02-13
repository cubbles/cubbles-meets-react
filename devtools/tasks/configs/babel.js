'use strict';
module.exports.tasks = {
  babel: {
    options: {
      sourceMap: true,
      presets: [ 'babel-preset-react', 'babel-preset-es2015' ].map(require.resolve)
      // presets: [ 'babel-preset-env' ].map(require.resolve)
    },
    dist: {
      files: {
        '<%= param.src %>/react-todo-list/dist/react-todo-list.js': '<%= param.src %>/react-todo-list/src/react-todo-list.js'
      }
    }
  }
}
