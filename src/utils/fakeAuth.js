
var isLogged = sessionStorage.getItem("isLogged");
if (isLogged === null) sessionStorage.setItem("isLogged", false)

export const fakeAuth = {
    isAuthenticated: isLogged,
    authenticate(cb) {
        sessionStorage.setItem("isLogged", true)
        console.log("adentro")
        this.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signout(cb) {
        sessionStorage.setItem("isLogged", false)
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}