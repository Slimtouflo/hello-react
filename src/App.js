import { Component } from "react";
import members from "./members.js";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // Initialisation du state de notre composant App
  //   // Le state se résume à une propriété de notre classe App
  //   // En React la propriété state sera toujours un objet
  //   this.state = {}
  // }
  // équivalent à (depuis ES2019)
  state = {
    // members: members
    // simplification possible car la clé et la valeur portent le même nom
    members
  };

  // La méthode render sera automatiquement appelée lorsque le composant App sera interrogé dans du JSX sous la forme suivante : <App />
  render() {
    const listMembers = this.state.members.map((member) => {
      return (
        <li>{member.name}</li>
      )
    })

    return (
      <div className="container">
        <h1>Hello React</h1>
        <p>Liste des membres de la formation :</p>
        <ul>
          {/* <li>{this.state.members[0].name}</li> */}
          {listMembers}
        </ul>
      </div>
    )
  }
}