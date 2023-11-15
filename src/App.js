import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import img1 from "./img/chair-grey.jpeg";
import img2 from "./img/table.webp";
import img3 from "./img/sofa.jpeg";
import img4 from "./img/chair-white.jpeg";
import img5 from "./img/wall-light.jpeg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: img1,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: img2,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "tables",
          price: "123.99",
        },
        {
          id: 3,
          title: "Диван",
          img: img3,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "sofa",
          price: "869.99",
        },
        {
          id: 4,
          title: "Стул белый",
          img: img4,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "chairs",
          price: "79.99",
        },
        {
          id: 5,
          title: "Лампа ",
          img: img5,
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing",
          category: "light",
          price: "25.00",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  addToOrder(item) {
    let isInArray=false
    this.state.orders.forEach(el=>{
      if(el.id===item.id)
      isInArray=true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
