module.exports = {
    loginBtn: $('(//android.widget.TextView[@text="Login"])[2]'),
    username: $('//android.widget.EditText[@content-desc="Username input field"]'),
    password: $('//android.widget.EditText[@content-desc="Password input field"]'),
    verify_page:$('//android.widget.TextView[@text="Products"]'),
    three_dots:$('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView'),
    LogInBtn:$('//android.widget.TextView[@text="Log In"]'),
    PriceMenuBtn:$('//android.view.ViewGroup[@content-desc="sort button"]/android.widget.ImageView'),
    DropdownPricevalue:$('//android.widget.TextView[@text="Price - Ascending"]'),
    PriceList:$$('//android.widget.TextView[@content-desc="store item price"]'),
    FirstItemPrice:$('//android.widget.TextView[@content-desc="store item price" and @text="$7.99"]'),
    selectFirstItem:$('(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView'),
    addToCart:$('//android.widget.TextView[@text="Add To Cart"]'),
    cartIcon:$('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView'),
    productInCart:$('//android.view.ViewGroup[@content-desc="product row"]')
}