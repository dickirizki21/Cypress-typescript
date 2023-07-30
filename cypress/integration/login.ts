import { AboutPages } from "./pages/about_pages"
import { DashboardPage } from "./pages/dashboard_pages"
import { LoginPage } from "./pages/login_pages"
import { ShoppingCartPages } from "./pages/shopping_cart_page"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let shoppingCart = new ShoppingCartPages()
const URL = 'https://www.saucedemo.com/'

it('Login Valid', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin() 
})

it('Login Invalid Password', () => {
    loginPage.login(URL,'standard_user','invalidPass')
    loginPage.assertLoginFail()
})

it('Detail Product Sauce labs backpack from product page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.sauceLabsBackpack() 
})

it('Add Bag to cart from page product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addBag() 
})

it('Remove Bag from cart from page product', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addBag()
    dashboardPage.removeBag() 
})

it('Remove Bag from Shopping Cart Page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    loginPage.assertLogin()
    dashboardPage.addBag()
    shoppingCart.removeBagCart()
})

it('Detail Product Sauce labs backpack from shopping cart page', () => {
    loginPage.login(URL,'standard_user','secret_sauce')
    dashboardPage.addBag()
    loginPage.assertLogin()
    shoppingCart.detailBagCart()
})

