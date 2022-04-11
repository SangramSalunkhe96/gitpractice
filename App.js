import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";
import HomeScreen from "./Screens/HomeScreen";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import ViewUsersScreen from "./Screens/ViewUsersScreen";
import ViewPropertyScreen from "./Screens/ViewPropertyScreen";
import AddPropertyScreen from "./Screens/AddPropertyScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import FarmerOrSellerProfileScreen from "./Screens/FarmerOrSellerProfileScreen";
import AdminProfileScreen from "./Screens/AdminProfileScreen";
import EditProfileScreen from "./Screens/EditProfileScreen";
import BuyerProfileScreen from "./Screens/BuyerProfileScreen";
import PropertyDetailsScreen from "./Screens/PropertyDetailsScreen";
import GetContact from "./Screens/GetContact";
import ForgotPassScreen from "./Screens/ForgotPassScreen";
import AddFacilities from "./Screens/AddFacilities";

function App() {
  return (
    <div>
      <Router>
        <Navigation />

        <Switch>
          <Route path="/viewusers" component={ViewUsersScreen} />
          <Route path="/viewproperty" component={ViewPropertyScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/registration" component={RegistrationScreen} />
          <Route path="/addproperty" component={AddPropertyScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/adminprofile" component={AdminProfileScreen} />
          <Route path="/FarmerOrSellerprofile" component={FarmerOrSellerProfileScreen} />
          <Route path="/buyerprofile" component={BuyerProfileScreen} />
          <Route path="/editprofile" component={EditProfileScreen} />
          <Route path="/propertydetails" component={PropertyDetailsScreen} />
          <Route path="/getcontact" component={GetContact} />
          <Route path="/forgotpass" component={ForgotPassScreen} />
          <Route path="/addfacilities" component={AddFacilities} />

          <Route path="/" component={HomeScreen} />
        </Switch>
        <Footer>
          <Footer />
        </Footer>
      </Router>
    </div>
  );
}

export default App;
