import { mudikrut } from "./constantValues";

export function initialRecord() {
    return {
        /*
         * Pension case data
         */
        bhaag: [1, 2, 5],
        karmchariNaam: [
            ["", "", "", ""],
            ["", "", "", ""]
        ],
        mudikrutTarikh: new Date().toLocaleDateString("en-GB").split("/"),
        karmchariHoddo: ["", ""],
        kacheriNaam: [
            "સરદાર પટેલ યુનિવર્સિટી,\nવલ્લભ વિદ્યાનગર-388120,\nજિ. આણંદ,\nગુજરાત.\nફોન નંબર: ૦૨૬૯૨-૨૨૬૮૧૫",
            "Sardar Patel University,\nVallabh Vidyanagar-388120,\nDist. Anand,\nGujarat.\nPhone No.: 02692-226815"
        ],

        // khaatu/vibhaag nu naam, vada nu naam, code number
        khaatu: ["", "", ""],
        vibhaag: ["", "", ""],

        janmTarikh: ["", "", ""],
        nokriDakhalTarikh: ["", "", ""],
        nivrutiPrakar: ["0"],
        nivrutiTarikh: ["", "", ""],
        notionalNivrutiTarikh: [
            ["", "", ""],
            ["", "", ""],
        ],
        gpfNumber: "",
        santrat: ["", "", ""],
        avsaanTarik: ["", "", ""], // avsaan paamela karmchari na kissa ma
        /*
         * Bhaag-5 data
         */
        isRajyaPatrit: true,
        isNotRajyaPatrit: undefined,

        isSarkariRajyaPatrit: undefined,
        isJillaPanchayatKar: undefined,
        isSarkariBinaRajyaPatrit: true,
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
        petaTijori: "આણંદ",
        jillo: "આણંદ",
        taluko: "આણંદ",

        // 2.3: 16
        paatrta: ['પત્ની'],
        paatrataNaam: [
            ["", "", "", ], // નામ 
            ["", "", "", ], // Name

        ],

        mudikrut,
        // 13: 
        apangSabhya: "",
        vali: "",
        // 15 (2):
        sagir: false,
        nayuktSagir: ["", "", ""],
        sadarhu: "",
        sagirAddress: "",
        pentionerSatheSambandh: "",

        // bhaag-2 (18)
        niyuktiTable: [
            ["", "", ["", ["", "", ""]], "", "", "", ""]
        ],

        // bhaag - 2 (19)
        pensionPatrNokri: [
            [
                ["", "", "", ],
                ["", "", "", ],
            ], // (એ) 
            [
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
            ], // (એ) 1
            [
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
            ], // (એ) 2
            [
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
            ], // (એ) 3
            [
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
                ["", "", "", ],
            ], // (એ) 4

            ["", "", ""], // C
            ["", "", ""], // D

        ],

        // bhaag - 2 (P5 onwards)
        bandData: {
            nivrutiSamayNo: {
                lastPayBand: "",
                lastPayGrade: "",
            },
            swaichitNivrutiSamayNo: {
                lastPayBand: "",
                lastPayGrade: "",
            },
            pensionPatrPagar: {
                pensionDateFrom: ["", "", ""],
                pensionDateTo: ["", "", ""],
            },
            pensionPatrPagarNiVigato: {
                payBand: Array(10).fill(""),
                gradePay: Array(10).fill(""),
                kulPagaar: "",
                sarvaadoDasMaas: "",
                chhelloPagaar: "",
                masikSarerashPpp: "",
            }
        },

        // bhaag - 2 (P7 onwards)
        monghvaari: "34952",
        pensionPatrNokariVarsh: "33", // (maximum 33)
        bhaag2_25_2: ['', ""],


        // 22:
        monthWiseRecord: [
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
            ["", "", "", "", "", ],
        ],
        // 27
        // મુડીકૃત રકમ nu table
        mudikrutRakamAge: "",
        // 28(2)

        leniRakamNiVigato: [
            ["મકાન પેશગી ", "", "", "", "", "", ],
            ["વાહન પેશગી ", "", "", "", "", "", ],
            ["પગાર ભથ્થાની વસુલાત ", "", "", "", "", "", ],
            ["અન્ય વસુલાત ", "", "", "", "", "", , ],
            ["", "", "", "", "", ],

        ]
    }
}