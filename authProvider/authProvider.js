const authProvider = {
  //login
  //login:(para)=>Promise.resolve()                //FMLA
  login: ({ username, password }) => {
    const request = new Request(
      "http://172.16.50.27:8000/api/auth/token/login/",
      {
        method: "POST",
        body: JSON.stringify({
          username: "choeda",
          password: "test",
        }),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem("auth", JSON.stringify(auth));
      })
      .catch(() => {
        throw new Error("Network Error");
      });
  },

  //logout
  //logout:() => Promise.resolve();                //FMLA
  logout: () => {
    localStorage.removeItem("auth");
    return Promise.resolve();
  },

  //checking errs when calling the API
  //checkError:error=>{ return Promise.resolve()}  //FMLA
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  //checkin auth when called upon when the user
  //navigates to a new location
  //checkAuth:param =>{ return Promise.resolve();}  //FMLA
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },

  //called when the user navigates to a new location,
  // to check for permissions / roles
  //getPermissions :params => Promise.resolve()     //FMLA
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
