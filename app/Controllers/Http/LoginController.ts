// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {
    public async index({view}) {
        return view.render('auth/login')
    }

    public async login({request, response, auth}) {
        const email = request.input('email')
        const password = request.input('password')

        try {
            await auth.attempt(email, password)
            return response.redirect('/uploadSoal')
        } catch (error) {
            return response.redirect('/login')
        }
    }
}
