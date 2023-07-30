import { AboutPages } from "./pages/about_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { LoginPage } from "./pages/login_pages"
import { ShoppingCartPages } from "./pages/shopping_cart_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let shoppingCart = new ShoppingCartPages()
const URL = 'https://www.saucedemo.com/'

it('Add Bag to cart from page product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addBag() 
})

