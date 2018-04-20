// import * as $ from 'jquery'
// import 'bootstrap'
var onSubmitFunc = function (event) {
    event.preventDefault();
    var username = document.getElementById('input-username');
    var password = document.getElementById('input-password');
    var sex = document.getElementById('input-sex');
    var services = document.getElementsByName('services');
    var favors = document.getElementsByName('favorite-item');
    var chosenService = getService(services);
    var chosenFavors = getFavors(favors);
    var results = [username, password, sex, chosenService, chosenFavors];
    var labels = document.getElementsByTagName('label');
    setLabelToElem(labels);
    var print = pushToModal(results);
    document.getElementById('my-modal-body').innerHTML = print;
};
var getService = function (services) {
    for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
        var item = services_1[_i];
        if (item.checked)
            return item;
    }
};
var getFavors = function (favors) {
    var checkedFavors = [];
    for (var _i = 0, favors_1 = favors; _i < favors_1.length; _i++) {
        var item = favors_1[_i];
        if (item.checked)
            checkedFavors.push(item);
    }
    return checkedFavors;
};
// Set a new property 'label' for all element have <label>
var setLabelToElem = function (labels) {
    for (var _i = 0, labels_1 = labels; _i < labels_1.length; _i++) {
        var lbl = labels_1[_i];
        if (lbl.htmlFor !== '') {
            var element = document.getElementById(lbl.htmlFor);
            if (element)
                element.label = lbl;
        }
    }
};
var pushToModal = function (infors) {
    var result = '';
    for (var i = 0; i < infors.length; i++) {
        var element = infors[i];
        if (i < 3) {
            result += "<div>" + element.label.innerHTML + ": " + element.value + "</div>";
        }
        else if (i < 4) {
            result += "<div>Service: " + element.label.innerHTML + "</div>";
        }
        else {
            result += "<div>Favorites: ";
            if (element instanceof Array) {
                for (var _i = 0, element_1 = element; _i < element_1.length; _i++) {
                    var it = element_1[_i];
                    result += it.label.innerHTML + " ";
                }
            }
            result += "</div>";
        }
    }
    return result;
};
