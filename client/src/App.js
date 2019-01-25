import React from "react";
import "./style.css";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    };
    this.clickOnMeat = this.clickOnMeat.bind(this);
    this.clickOnFruit = this.clickOnFruit.bind(this);
  }

  componentWillMount() {
    var query = "cheese";
    Axios.get(`/api/food?q=${query}`)
      .then(res => {
        const foods = res.data;
        this.setState({ foods });
        console.log({ foods });
      })
      .then(this.refreshFood)
      .catch(function(error) {
        console.log(error);
      });
  }

  clickOnMeat() {
    Axios.get("/api/food?q=meat")
      .then(res => {
        const foods = res.data;
        this.setState({ foods });
        console.log({ foods });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  clickOnFruit() {
    Axios.get("/api/food?q=fruit")
      .then(res => {
        const foods = res.data;
        this.setState({ foods });
        console.log({ foods });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickOnMeat}>meat</button>
        <button onClick={this.clickOnFruit}>fruit</button>
        {this.state.foods.map(item => (
          <Food
            carbohidrates={item.carbohydrate_g}
            proteins={item.protein_g}
            fat={item.fat_g}
            kcal={item.kcal}
            description={item.description}
          />
        ))}
      </div>
    );
  }
}

class Food extends React.Component {
  render() {
    return (
      <div className="App">
        {this.props.description}
        {this.props.kcal}
        {this.props.proteins}
        {this.props.fat}
        {this.props.carbohidrates}
      </div>
    );
  }
}

export default App;
