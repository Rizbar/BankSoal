/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({view}) => {
    return view.render('auth/beranda')
})

Route.get('/login', 'LoginController.index').as('login')
Route.post('/login', 'LoginController.login').as('login.post')

Route.get('/semester1', async ({view}) => {
    return view.render('auth/semester1')
})

Route.get('/uploadSoal', async ({view}) => {
    return view.render('auth/uploadSoal')
})

Route.get('/tableSoal', async ({view}) => {
    return view.render('auth/tableSoal')
})

Route.get('/liatSoal', async ({view}) => {
    return view.render('auth/liatSoal')
})

Route.get('/komentar', async ({view}) => {
    return view.render('auth/komentar')
})