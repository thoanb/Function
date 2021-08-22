/**
 * Bài 1: QUẢN LÝ TUYỂN SINH
 */


const area_A = 2;
const area_B = 1;
const area_C = 0.5;
const area_None = 0;

const object_1 = 2.5;
const object_2 = 1.5;
const object_3 = 1;
const object_None = 0;

function checkArea() {
    var radioAreaA = document.getElementById("areaA");
    var radioAreaB = document.getElementById("areaB");
    var radioAreaC = document.getElementById("areaC");
    var radioNone = document.getElementById("areaNone");
    if (radioAreaA.checked) {
        console.log("areaA");
        return "areaA";
    } else if (radioAreaB.checked) {
        console.log("areaB");
        return "areaB";
    } else if (radioAreaC.checked) {
        console.log("areaC");
        return "areaC";
    } else if (radioNone.checked) {
        console.log("areaNone");
        return "areaNone";
    }
}

function checkObject() {
    var radioObject1 = document.getElementById("object1");
    var radioObject2 = document.getElementById("object2");
    var radioObject3 = document.getElementById("object3");
    var radioObjectNone = document.getElementById("objectNone");
    if (radioObject1.checked) {
        console.log("object1");
        return "object1";
    } else if (radioObject2.checked) {
        console.log("object2");
        return "object2";
    } else if (radioObject3.checked) {
        console.log("object3");
        return "object3";
    } else if (radioObjectNone.checked) {
        console.log("objectNone");
        return "objectNone";
    }
}


function result() {
    var area = "";
    area = checkArea();
    var object = "";
    object = checkObject();
    var areaMark = 0;
    var objectMark = 0;
    switch (area) {
        case "areaA":
            areaMark = area_A;
            break;
        case "areaA":
            areaMark = area_B;
            break;
        case "areaA":
            areaMark = area_C;
            break;
        case "areaA":
            areaMark = area_None;
            break;
        default:
            console.log("Không hợp lệ");
    }
    switch (object) {
        case "object1":
            objectMark = object_1;
            break;
        case "object2":
            objectMark = object_2;
            break;
        case "object3":
            objectMark = object_3;
            break;
        case "objectNone":
            objectMark = object_None;
            break;
        default:
            console.log("Không hợp lệ");
    }

    var test1 = parseFloat(document.getElementById("inputTest1").value);
    var test2 = parseFloat(document.getElementById("inputTest2").value);
    var test3 = parseFloat(document.getElementById("inputTest3").value);
    console.log(test1, test2, test3);
    var result = 0;
    result = test1 + test2 + test3 + areaMark + objectMark;
    console.log(result);
    // document.getElementById("xuatTien").innerHTML = tongTien;
    // document.getElementById("divThanhTien").style.display = "block";

    var score = parseFloat(document.getElementById("inputScore").value);
    if (test1 > 0 && test2 > 0 && test3 > 0 && result >= score) {
        document.getElementById("txtThongBao").innerHTML = "Thi đậu";
    } else {
        document.getElementById("txtThongBao").innerHTML = "Thi rớt";
    }
}

document.getElementById("btnResult").onclick = result;


/**
 * Bài 2: TÍNH TIỀN ĐIỆN
 */

const FIST_50 = 500;
const NEXT_GREATER_50_100 = 650;
const NEXT_GREATER_100_200 = 850;
const NEXT_GREATER_200_350 = 1100;
const NEXT_GREATER_351 = 1300;

function totalCost() {
    var KW = document.getElementById("inputKW").value;
    var totalCost = 0;
    if (0 < KW && KW <= 50) {
        totalCost = KW * FIST_50;
        console.log("Tiền 50 KW đầu: " + totalCost);
    } else if (50 < KW && KW <= 100) {
        totalCost = 50 * FIST_50 + (KW - 50) * NEXT_GREATER_50_100;
        console.log("Tiền 50 KW tiếp theo: " + totalCost);
    } else if (100 < KW && KW <= 200) {
        totalCost = 50 * FIST_50 + 50 * NEXT_GREATER_50_100 + (KW - 100) * NEXT_GREATER_100_200;
        console.log("Tiền 100 KW tiếp theo: " + totalCost);
    } else if (200 < KW && KW <= 350) {
        totalCost = 50 * FIST_50 + 50 * NEXT_GREATER_50_100 + 100 * NEXT_GREATER_100_200 + (KW - 200) * NEXT_GREATER_200_350;
        console.log("Tiền 150 KW tiếp theo: " + totalCost);
    } else if (KW > 350) {
        totalCost = 50 * FIST_50 + 50 * NEXT_GREATER_50_100 + 100 * NEXT_GREATER_100_200 + 150 * NEXT_GREATER_200_350 + (KW - 350) * NEXT_GREATER_351;
        console.log("Tiền trên 150 KW: " + totalCost);
    } else {
        console.log("Số KW không hợp lệ");
    }

    document.getElementById("txtThongBaoElec").innerHTML = "Số tiền điện là: " + totalCost;

}

document.getElementById("btnTotalCost").onclick = totalCost;





/**
 * Bài 3: THUẾ THU NHẬP CÁ NHÂN
 */

const IMCOME_60 = 0.05;
const IMCOME_GREATER_60_120 = 0.1;
const IMCOME_GREATER_120_210 = 0.15;
const IMCOME_GREATER_210_384 = 0.2;
const IMCOME_GREATER_384_624 = 0.25;
const IMCOME_GREATER_624_960 = 0.30;
const IMCOME_GREATER_960 = 0.35;

var totalIncome = document.getElementById("inputTotalIncome");
totalIncome.addEventListener("change", formatNum);

function formatNum() {
    // alert("Hello");
    if (isFinite(totalIncome.value)) {
        totalIncome.value = new Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(totalIncome.value);
    }
}

function tax() {

    // var totalIncome = document.getElementById("inputTotalIncome").value;
    // totalIncome = parseFloat(totalIncome.replace(/,/g, ''));

    totalIncome = parseFloat(document.getElementById("inputTotalIncome").value.replace(/,/g, ''));

    var num = document.getElementById("inputNum").value;
    var taxIncome = 0;
    var tax = 0;
    taxIncome = totalIncome - 4e+6 - num * 1.6e+6;

    if (taxIncome <= 60e+6) {
        tax = taxIncome * 0.05;
    } else if (60e+6 < taxIncome && taxIncome <= 120e+6) {
        tax = 60e+6 * 0.05 + taxIncome * 0.1;
    } else if (120e+6 < taxIncome && taxIncome <= 210e+6) {
        tax = 60e+6 * 0.05 + 60e+6 * 0.1 + taxIncome * 0.15;
    } else if (210e+6 < taxIncome && taxIncome <= 384e+6) {
        tax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + taxIncome * 0.2;
    } else if (384e+6 < taxIncome && taxIncome < 624e+6) {
        tax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (384 - 210) * 0.2 + taxIncome * 0.25;
    } else if (624e+6 < taxIncome && taxIncome < 960e+6) {
        tax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (384 - 210) * 0.2 + (624 - 384) * 0.25 + taxIncome * 0.3;
    } else if (taxIncome > 960e+6) {
        tax = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (384 - 210) * 0.2 + (624 - 384) * 0.25 + (960 - 624) * 0.3 + taxIncome * 0.35;
    } else {
        console.log("Không hợp lệ");
    }

    // alert(new Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(tax));
    tax = new Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(tax);
    document.getElementById("txtThongBaoTax").innerHTML = "Thuế thu nhập cá nhân là: " + tax;
}

document.getElementById("btnTax").onclick = tax;


/**
 * TÍNH TIỀN CÁP
 */

INDI_INVOICE = 4.5;
INDI_BASIC = 20.5;
INDI_PRO = 7.5;

COM_INVOICE = 15;
COM_BASIC = 75;
COM_CONNECT_UNIT = 5;
COM_PRO = 50;

function myFunction(element) {
    // var catergory = document.getElementById("type").value;
    //document.getElementById("demo").innerHTML = "You selected: " + catergory;

    var valueText = element.options[element.selectedIndex].text;

    if (valueText == "Doanh nghiệp") {
        document.getElementById("inputAmount").style.display = "block";
        // console.log("Catergory la: " +valueText)
    } 
    else {
        document.getElementById("inputAmount").style.display = "none";
    }
    return valueText;
}
document.getElementById("inputAmount").style.display = "none";

// Tính tiền xử lý hoá đơn
function invoiceCheck() {
    var invoiceCost = 0;
    valueText = "";
    if (valueText == "Nhà dân") {
        invoiceCost = INDI_INVOICE;
    } else {
        invoiceCost = COM_INVOICE;
    }
    return invoiceCost;
}

// Tính phí dịch vụ cơ bản
function basicServiceCheck() {
    var basicServiceCost = 0;
    valueText = "";
    var connectAmount = parseInt(document.getElementById("inputAmount").value);
    if (valueText == "Nhà dân") {
        basicServiceCost = INDI_BASIC;
    } else if (connectAmount > 0) {
        basicServiceCost = COM_BASIC + connectAmount*COM_CONNECT_UNIT;
    } else {
        basicServiceCost = COM_BASIC;
    }
    return basicServiceCost;
}

// Tính phí thuê kênh cao cấp
function proChannelCheck() {
    var proChannelCost = 0;
    valueText = "";
    var proChannel = parseInt(document.getElementById("inputProChannel").value);
    if (valueText == "Nhà dân") {
        proChannelCost = proChannel*INDI_PRO;
    } else {
        proChannelCost = proChannel*COM_PRO;
    }
    return proChannelCost;
}

// Tính tổng tiền cáp
function totalInternet() {
    var totalInternetCost = 0;
    invoiceCost = invoiceCheck();
    basicServiceCost = basicServiceCheck();
    proChannelCost = proChannelCheck();
    totalInternetCost = invoiceCost + basicServiceCost + proChannelCost;

    document.getElementById("txtThongBaoInternet").innerHTML = "Số tiền cáp là: " +totalInternetCost;
    
}
document.getElementById("btnInternet").onclick = totalInternet;





