// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAWKjbl_EhKEr-RXentdQhns6pywBG1MGA',
    authDomain: 'angular2-quota.firebaseapp.com',
    databaseURL: 'https://angular2-quota.firebaseio.com/angular2-quota',
    projectId: 'angular2-quota',
    messagingSenderId: '651502058548'
  }
};
