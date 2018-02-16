'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
  'use strict';

  // Define your React Components

  var ListItem = function (_React$Component) {
    _inherits(ListItem, _React$Component);

    function ListItem() {
      _classCallCheck(this, ListItem);

      return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(
          'li',
          null,
          React.createElement('input', { id: this.props.item.id,
            type: 'checkbox',
            checked: this.props.item.done,
            onChange: function onChange(e) {
              return _this2.props.onClickCallback(_this2.props.index, e);
            } }),
          React.createElement(
            'label',
            { htmlFor: this.props.item.id },
            this.props.item.value
          )
        );
      }
    }]);

    return ListItem;
  }(React.Component);

  var TodoList = function (_React$Component2) {
    _inherits(TodoList, _React$Component2);

    function TodoList() {
      _classCallCheck(this, TodoList);

      return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));
    }

    _createClass(TodoList, [{
      key: 'renderList',
      value: function renderList() {
        var _this4 = this;

        var listItems = [];
        this.props.items.forEach(function (item, idx) {
          listItems.push(React.createElement(ListItem, { key: item.id, item: item, onClickCallback: _this4.props.itemClickCallback, index: idx }));
        });
        return React.createElement(
          'ul',
          null,
          listItems
        );
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          null,
          this.renderList()
        );
      }
    }]);

    return TodoList;
  }(React.Component);

  // Call CubxPolymer Factory Method for registiering <react-todo-list> Cubbles Component


  CubxPolymer({
    is: 'react-todo-list',

    cubxReady: function cubxReady() {
      this._cubxReady = true;
      this._render();
    },

    modelItemsChanged: function modelItemsChanged() {
      this._cubxReady ? this._render() : null;
    },

    _toggleItemState: function _toggleItemState(index) {
      var items = this.getItems();
      items[index].done = !items[index].done;
      this.setItems(items);
    },

    _render: function _render() {
      ReactDOM.render(React.createElement(TodoList, { items: this.model.items, itemClickCallback: this._toggleItemState.bind(this) }), document.querySelector('[runtime-id="' + this.getRuntimeId() + '"]'));
    }
  });
})();
//# sourceMappingURL=react-todo-list.js.map
