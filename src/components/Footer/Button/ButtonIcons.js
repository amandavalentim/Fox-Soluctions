
class App extends React.Component {
    state = {
      ButtonsIcons: [{
        id: 1,
        name: "Button 1",
        isStatus: false
      },{
        id: 2,
        name: "Button 2",
        isStatus: true
      },{
        id: 3,
        name: "Button 3",
        isStatus: false
      }]
    }    
    constructor() {
      super();
      this.onClickChangeStatus = 
        this.onClickChangeStatus.bind(this);
    }
    onClickChangeStatus(id) {
      const buttons = this
        .state
        .buttons
        .map(x => {
          if (x.id === id) {
            x.isStatus = !x.isStatus;
          }
          return x;
        }); 
        this.setState({buttons});
    }
    render() {
      const { buttons } = this.state; 
      return (
        <div>
        {buttons.map((e,i) => (
          <div style={{padding: 10}}>
            <button onClick={x => this.onClickChangeStatus(e.id)}>
              {e.name}
            </button>
            <span style={{padding: 10}}>
              {e.isStatus? "On": "Off" }
            </span>
          </div>
        ))}
        </div>
      )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

export default ButtonsIcons