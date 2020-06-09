function Factory() {
    var callTotal = 0;
    var smsTotal = 0;
    var total = 0;

    function calculations(str) {
        if (str == 'call') {
            callTotal += 2.75
            total += 2.75
        }
        if (str == 'sms') {
            smsTotal += 0.75
            total += 0.75
        }

    }
    function getCalls() {
        return callTotal;

    }
    function getSms() {
        return smsTotal;
    }
    function getTotals() {
        return total;

    }
    return {
        calculations,
        getCalls,
        getSms,
        getTotals,
    }

}