import React from 'react';
import HomePage from './pages/hompage/homepage.component';
import {Switch,Route,Redirect} from 'react-router-dom';

import CheckoutPage from './pages/check-out/check-out.component.jsx';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up';

import Header from './components/header/header.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';

import './App.css';


class App extends React.Component {
	
	unsubscribFromAuth=null;


	componentDidMount() {

    const {setCurrentUser}=this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
      		const userRef=await createUserProfileDocument(userAuth);

      		userRef.onSnapshot(snapShot=>{
      			setCurrentUser({
      				
      					id:snapShot.id,
      					...snapShot.data()
      			
      			});
      		});

      		
      }

      setCurrentUser({
      	currentUser:userAuth
      })

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


	
  render() {
  	return (<div >
        	<Header />
          <Switch>
          	<Route exact path='/' component={HomePage}/>
          	<Route path='/shop' component={ShopPage}/>
            <Route exact path='/checkout' component={CheckoutPage}/>
          	<Route exact path='/sign in' render={()=>this.props.currentUser?
              ( <Redirect to='/' /> ):
               (<SignInSignUp/>)
             } />
    
          </Switch>
        </div>)
  };
}

const mapStateToProps=({user})=>({
  currentUser:user.currentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
