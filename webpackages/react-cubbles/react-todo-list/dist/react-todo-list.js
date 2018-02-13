'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  'use strict';
  /**
   * Get help:
   * > Lifecycle callbacks:
   * https://www.polymer-project.org/1.0/docs/devguide/registering-elements.html#lifecycle-callbacks
   *
   * Access the Cubbles-Component-Model:
   * > Access slot values:
   * slot 'a': this.getA(); | this.setA(value)
   */

  CubxPolymer({
    is: 'react-todo-list',

    /**
     * Manipulate an element’s local DOM when the element is created and initialized.
     */
    ready: function ready() {},

    /**
     * Manipulate an element’s local DOM when the element is attached to the document.
     */
    attached: function attached() {},

    /**
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function cubxReady() {
      this._render();
    },

    _render: function _render() {
      var TodoList = function (_React$Component) {
        _inherits(TodoList, _React$Component);

        function TodoList() {
          _classCallCheck(this, TodoList);

          return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
        }

        _createClass(TodoList, [{
          key: 'render',
          value: function render() {
            return React.createElement(
              'div',
              null,
              React.createElement(
                'ul',
                null,
                React.createElement(
                  'li',
                  null,
                  'Hallo'
                ),
                React.createElement(
                  'li',
                  null,
                  'Welt!'
                )
              )
            );
          }
        }]);

        return TodoList;
      }(React.Component);

      ReactDOM.render(React.createElement(TodoList, null), document.querySelector('[runtime-id="' + this.getRuntimeId() + '"]'));
    }
  });
})();
//# sourceMappingURL=react-todo-list.js.map
