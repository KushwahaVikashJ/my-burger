import React,{Component} from 'react';
import Aux from '../../hoc/Aux'; 
import classes from './Layout.css';
import SideDrawer from '../Navigation/Toolbar/Sidedrawer/Sidedrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';

class Layout extends Component{

    state={
        show:false
    }

    SideDrawerCloseHandler = ()=>{
        this.setState({
            show:false
        })
    }

    SideDrawerOpenHandler = ()=>{
        this.setState({
            show:true
        })
    }

    render(){
        return(
        <Aux>
            <SideDrawer open={this.state.show} close={this.SideDrawerCloseHandler}/>
            <Toolbar clicked={this.SideDrawerOpenHandler}/>

            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}
export default Layout;