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
     * Manipulate an element’s local DOM when the cubbles framework is initialized and ready to work.
     */
    cubxReady: function () {
      this._render();
    },

    _render: function () {

      class TodoList extends React.Component {
        render() {
          return(
            <div>
              <ul>
                <li>Hallo</li>
                <li>Welt!</li>
              </ul>
            </div>
          )
        }
      }

      ReactDOM.render(<TodoList/>, document.querySelector('[runtime-id="' + this.getRuntimeId() + '"]'));
    }
  });
}());
