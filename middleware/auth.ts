export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated

    console.log('defineNuxtRouteMiddleware')
    console.log(to)
    console.log(from)
})
