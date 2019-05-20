import React, {Component} from 'react';
import TechComponent from '../tech/tech/technologies.component';

import { BrowserRouter as Router } from 'react-router-dom';

class TechContainer extends Component {
    render(){
        return(
            <TechComponent /> 
        );
    }
}
export default TechContainer;