(function () {
  'use strict';

  // Define your React Components
  class ListItem extends React.Component {
    render () {
      return (
        <li>
          <input id={this.props.item.id}
            type="checkbox"
            checked={this.props.item.done}
            onChange={(e) => this.props.onClickCallback(this.props.index, e)}/>
          <label htmlFor={this.props.item.id}>{this.props.item.value}</label>
        </li>
      );
    }
  }

  class TodoList extends React.Component {
    renderList () {
      var listItems = [];
      this.props.items.forEach((item, idx) => {
        listItems.push(<ListItem key={item.id} item={item} onClickCallback={this.props.itemClickCallback} index={idx}/>);
      });
      return <ul>{listItems}</ul>;
    }

    render () {
      return (
        <div>{this.renderList()}</div>
      );
    }
  }

  // Call CubxPolymer Factory Method for registiering <react-todo-list> Cubbles Component
  CubxPolymer({
    is: 'react-todo-list',

    cubxReady: function () {
      this._cubxReady = true;
      this._render();
    },

    modelItemsChanged: function () {
      this._cubxReady ? this._render() : null;
    },

    _toggleItemState: function (index) {
      var items = this.getItems();
      items[index].done = !items[index].done;
      this.setItems(items);
    },

    _render: function () {
      ReactDOM.render(<TodoList items={this.model.items} itemClickCallback={this._toggleItemState.bind(this)}/>, document.querySelector('[runtime-id="' + this.getRuntimeId() + '"]'));
    }
  });
}());
