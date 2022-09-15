import React, { Component } from 'react'
import "../../assets/stylesheets/testimony.scss";
import { lastReviews } from "../../services";


export default class index extends Component {
    constructor(props){
       super(props);
       this.state = {
        data: [],
        error: null,
      };
    }
    async componentDidMount() {
        try {
            const response =  await lastReviews.getLastReviews();
            this.setState({
                data: response.data,
            });
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (

            <div className="testimony">
                <span></span>
                <h2>Que pensez-vous de nous?</h2>
                <h1>TÉMOIGNAGES</h1>
                <div className="allBox">
                {this.state.data.map((el, index) => {
                 return (
                    <div key={index} className="box ">
                        <h3>Fally</h3>
                        {/* <h3>&#160;{el.last_name}</h3>  */}
                        <h6>Bénéficiaire du programme</h6>
                        <h5>{el.role}</h5>
                        <p>"{el.opinion}"</p>
                    </div> 
                  );
                })}
         
                </div>

            </div>
        )
    }
}


   //////////////* STATIC -V BELLOW *////////////
            //          <div className="box pink">
            //             <h3>Fally</h3> 
            //             <h4>Bénificiarire</h4>
            //             <h5>De Kinkasha (ZAIRE)</h5>
            //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vel</p>
            //         </div>
            //         <div className="box green">
            //             <h3>Fally</h3>
            //             <h4>Bénificiarire</h4>
            //             <h5>De Kinkasha (ZAIRE)</h5>
            //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vel</p>
            //         </div>
            //         <div className="box blue">
            //             <h3>Fally</h3>
            //             <h4>Bénificiarire</h4>
            //             <h5>De Kinkasha (ZAIRE)</h5>
            //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium libero vel </p>
            // </div>