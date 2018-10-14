import $ from 'jquery'

export default invoice => {
    renderInvoiceValues(invoice);
}

const renderInvoiceValues = invoice => {
    renderTotalValue(invoice.totalValue);
    renderLocation(invoice.location);
    renderDate(invoice.date);
    renderProducts(invoice.products);
    renderUsers(invoice.users);
}

const renderTotalValue = value => {
    let valueWithMask = setMoneyMask(value);
    $("#total-value").append(valueWithMask);
}

const renderLocation = location => {
    $("#location").append(location);
}

const renderDate = date => {
    $("#date").append(date);
}

const renderProducts = products => {
    var productList = $("#products-list");
    products.forEach(product => {
        let nameWithAmount = `${product.amount} - ${product.name}`;
        let name = getListElement(nameWithAmount).addClass("detail-list-name");
        let value = getListElement(setMoneyMask(product.unityValue)).addClass("detail-list-value");
        let node = getNodeList().addClass("detail-list-node").append(name, value);
        productList.append(node);
    });
}

const renderUsers = users => {
    var usersList = $("#users-list");
    users.forEach(user => {
        let valueWithMask = setMoneyMask(user.valueToPay);
        let value = getListElement(valueWithMask).addClass("detail-list-value");
        let name = getListElement(user.name).addClass("detail-list-name");
        let node = getNodeList().addClass("detail-list-node").append(name, value);
        usersList.append(node);
    });
}

const getNodeList = () => {
    return $("<li></li>")
        .addClass("list-group-item");
}

const getListElement = value => {
    return $("<div></div>")
        .append(
            $("<p></p>")
                .addClass("value-text")
                .append(value)
        );
}

const setMoneyMask = price => {
    return `R$ ${price.toFixed(2).replace(".", ",")}`;
}