export function initialRecord() {
    return {
        pages: [1, 5, 6, 7, 8, 10], // seva pothi pages
        /*
         * Pension case data
         */
        karmchariNaam: ["", "", ""],
        karmchariHoddo: "",
        kacheriNaam: "",
        khaatu: "",
        vibhaag: "",
        janmTarikh: ["", "", ""],
        nokriDakhalTarikh: ["", "", ""],
        nivrutiPrakar: "",
        nivrutiTarikh: ["", "", ""],
        santrat: ["", "", ""],
        avsaanTarik: ["", "", ""], // avsaan paamela karmchari na kissa ma
        /*
         * Bhaag-5 data
         */
        isSarkariRajyaPatrit: false,
        isJillaPanchayatKar: false,
        isSarkariBinaRajyaPatrit: false,
        isRojamadarKar: false,
        isWorkChargeKar: false,
        isPensionPatrGrantInAid: false,
        /*
         * Pension case -1
         */
        address: "",
    }
}