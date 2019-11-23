import React, {Component} from 'react';
import Auxx from '../Auxx/Auxx';

// Component Layout have Header and Footer components...and show everything that is passed as children
class Layout extends Component{
    render(){
        return (
            <Auxx>
                <div>Header</div>
                    {this.props.children}
                <div>Footer</div>
            </Auxx>
        );
    }
}

export default Layout;