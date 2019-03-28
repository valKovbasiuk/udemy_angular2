export class AuthService {
  loggedin = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedin);
      }, 900);
    });
    return promise;
  }

  login() {
    this.loggedin = true;
  }

  logout() {
    this.loggedin = false;
  }
}
