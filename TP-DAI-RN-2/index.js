import { registerRootComponent } from 'expo';
import ContactsList from './Components/ContactsList';
import Contact from './Components/Contact';
export default ContactsList;
export {Contact};
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
