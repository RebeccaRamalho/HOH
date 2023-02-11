import React, {Component} from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import { reviewService } from "../../services";

import "../../assets/stylesheets/TestimonyForm.scss";


   
class index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            last_name:"",
            first_name:"",
            opinion:"",
            role:"",
            error: null
            
         };
    }



  handleChange = (e) => {
    
    const { name, value } = e.target;
    this.setState({ [name]: value }); 
    console.log("name", value);
  };

  handleSubmit = async (e) => {
 
    e.preventDefault();
    try {
      const response = await reviewService.testimony(
        this.state.last_name,    
        this.state.first_name,
        this.state.opinion,
        this.state.role
      );

      this.props.history.push("/");
    } catch (error) {
      console.error(error);
      this.setState({ error: error });
    }
  };
    render() {
        return (
            <>
        <h1>Votre message</h1>

        <form  action="POST"  className="ui form"  onSubmit={this.handleSubmit}>
            
            <div class=" fiels">
                <label htmlFor="last_name">Votre nom</label>
                <input type="text" id="last_name" name="last_name" required onChange={this.handleChange} value={this.state.last_name}/>

                <label htmlFor="first_name">Votre prénom</label>
                <input type="text" id="first_name" name="first_name" required onChange={this.handleChange} value={this.state.first_name}/>

                <label htmlFor="role">Votre Metier</label>
                <input type="text" id="role" name="role"  required onChange={this.handleChange} value={this.state.role}/>

                <label htmlFor="opinion">Message</label>
                <textarea name="opinion" id="opinion" required onChange={this.handleChange} value={this.state.opinion}/>

            </div>
            
            <button type="submit" class="ui blue label submit icon button" onClick={this.handleSubmit}>
            <i class="icone edit"></i> Envoyer
            </button>
        </form>
        </>
        );
    }
}

export default index;