import $ from 'dom7';
import Framework7 from 'framework7/bundle';

// Import F7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';


// Import Routes
import routes from './routes.js';
// Import Store
import store from './store.js';

// Import main app component
import App from '../app.f7';


var app = new Framework7({
  name: 'DemoFramework', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component

  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV ==='production' ? {
    path: '/service-worker.js',
  } : {},
});
import Dom7 from 'dom7';
var $$ = Dom7;

function getAllTaches() {
  app.request.json('http://127.0.0.1/ToDoListAPI/API/getAllTache.php',function(data){
    var i = 0;
    var lh = data.length;
    var dataTache = "";
    for (i = 0;i<lh;i++){
      dataTache += "<tr>"
      +"<td>"+(i+1)+"</td>"
      +"<td>"+data[i].libelle+"</td>"
      +"<td>"+data[i].etat+"</td>"
      +"<td>"+data[i].idTypeTache+"</td>"
      +"</tr>";
    }

    $$('#listeTache').append($(dataTache));

    console.log(dataTache);
  })
}
