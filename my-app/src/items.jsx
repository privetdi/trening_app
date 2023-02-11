//-------ЗАГОТОВКА КОДА-----------

const items = ['apple', 'pineapple', 'orange', 'apricot', 'lime', 'lemon', 'plum'];  
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      item: this.props.items,
    }
            this.props.value = items;
            this.props.result = items;
  };

     itemEvent = (e) => {
      let valueInput = e.target.value;
       console.log(valueInput)
       let arr = this.state.item;
       let arrValue =[];
      arr.map( (itemArr, ind) => {
                    if(itemArr.indexOf(valueInput) !== -1){
                    arrValue = [...arrValue, itemArr];
            }else{
            };
        this.props.result = arrValue;
        this.setState({items : null})
        console.log(this.props.result)
      })   
      }
  render() {
    return (
      <div className="filtered-list">
        <input className="filtered-list__input" onChange={this.itemEvent}></input>
        <ul className="filtered-list__list">
          {this.props.result.map( (item, ind) => (
            <li key={ind} className="filtered-list__item">{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

App.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string)
}

ReactDOM.render(<App items={items} />, document.querySelector("#app"))
