import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categiries: [
        { key: "all", name: "Всё" },
        { key: "chairs", name: "Стулья" },
        { key: "tables", name: "Столы" },
        { key: "sofa", name: "Диваны" },
        { key: "light", name: "Свет" },
      ],
    };
  }
  render() {
    return (
      <div className="categories">
       {this.state.categiries.map(el=>(
        <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
       ))}
      </div>
    );
  }
}

export default Categories;
