export function initialRecord() {
    return {
        pages: [], // seva pothi pages
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
        isSarkariRajyaPatrit: undefined,
        isJillaPanchayatKar: undefined,
        isSarkariBinaRajyaPatrit: undefined,
        isRojamadarKar: undefined,
        isWorkChargeKar: undefined,
        isPensionPatrGrantInAid: undefined,
        /*
         * Pension case -1
         */
        address: "",
        // કુટુંબના સભ્યોના નામ	
        // જન્મ તારીખ	
        // કર્મચારી/ અધિકારી સાથે સંબંધ
        // નોંધ         
        members: [
            ["", ["", "", ""], "", ""],
        ],

        /*
        ૯ જીલ્લા/ પેટા તિજોરીએથી 
        */
        petaTijori: "",
        jillo: "",
        taluko: "",

        mudikrut: "",
        mudikrutTarikh: new Date().toLocaleDateString("en-GB").split("/"),
        // 13: 
        apangSabhya: "",
        vali: "",
        // 15 (2):
        sagir: false,
        nayuktSagir: ["", "", ""],
        sadarhu: "",
        sagirAddress: "",
        pentionerSatheSambandh: "",

    }
}