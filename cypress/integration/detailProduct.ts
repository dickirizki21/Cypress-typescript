import { AboutPages } from "./pages/about_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { LoginPage } from "./pages/login_pages"
import { ShoppingCartPages } from "./pages/shopping_cart_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let shoppingCart = new ShoppingCartPages()
const URL = 'https://www.saucedemo.com/'

it('Detail Product Sauce labs backpack from product page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Detail Product Sauce labs backpack from shopping cart page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.addBag()
    loginPage.assertLogin()
    shoppingCart.detailBagCart()
})

