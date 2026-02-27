/*  HI-FIVE TEAM
    HEALTH SUPPORT APPLICATION
    2026/02/27
*/
let currentLang = "ja";
 
const textData = {
    ja: {
        appTitle: "🏥 ヘルスサポート",
        langLabel: "🌐 言語：",
        fontLabel: "🔤 文字サイズ：",
 
        fontSmall: "小",
        fontMedium: "中",
        fontLarge: "大",
        fontXL: "特大",
 
        symptomTitle: "🩺 症状を入力してください",
        placeholder: "例：頭痛、発熱、腹痛",
        searchBtn: "🔍 症状から探す",
        resultTitle: "📋 診療案内",
        deptLabel: "診療科",
        hospitalSuffix: "を扱う近くの病院を表示中",
        adviceDefault: "⚠ 症状に応じたアドバイスを表示します",
        warningText: "⚠ これは医療診断ではありません。症状が続く場合は医療機関を受診してください。",
        mapTitle: "🗺️ あなたの近くの病院",
        mapNote: "※位置情報を許可すると、現在地周辺の病院が表示されます",
        enteredPrefix: "入力症状：",
        alertInput: "症状を入力してください"
    },
    en: {
        appTitle: "🏥 HEALTH SUPPORT",
        langLabel: "🌐 Language:",
        fontLabel: "🔤 Text size:",
 
        fontSmall: "Small",
        fontMedium: "Medium",
        fontLarge: "Large",
        fontXL: "Extra Large",
 
        symptomTitle: "🩺 Enter your symptoms",
        placeholder: "e.g. headache, fever, stomach pain",
        searchBtn: "🔍 Search",
        resultTitle: "📋 Clinical Guidance",
        deptLabel: "Recommended Department",
        hospitalSuffix: "hospitals near you",
        adviceDefault: "⚠ Advice will be shown here based on symptoms",
        warningText: "⚠ This is not a medical diagnosis. If symptoms persist, consult a medical professional.",
        mapTitle: "🗺️ Hospitals Near You",
        mapNote: "※ Allow location access to see hospitals near you",
        enteredPrefix: "Entered: ",
        alertInput: "Please enter your symptoms"
    }
};
 
const clinicData = {
    ja: {
        "救急科": "🚨 すぐに救急車を呼ぶか、緊急受診してください。",
        "脳神経内科": "🧠 強い頭痛やしびれが続く場合は早めに受診しましょう。",
        "内科": "🏥 安静にして、水分を十分に摂り経過を見てください。",
        "消化器内科": "🍽️ 消化の良いものを食べ、水分を摂ってください。",
        "整形外科": "🦴 痛む部位を固定し、無理に動かさないでください。",
        "眼科": "👁️ 目をこすらず清潔に保ってください。",
        "歯科": "🦷 痛みが強い場合は早めに受診を検討してください。",
        "耳鼻咽喉科": "👂 安静にし、喉や鼻を乾燥させないようにしましょう。",
        "循環器内科": "❤️ 胸の痛みがある場合は無理をせず受診してください。",
        "皮膚科": "🧴 かゆみや発疹が続く場合は受診しましょう。",
        "泌尿器科": "🚻 排尿時の痛みや違和感がある場合は受診してください。",
        "婦人科": "🌸 月経異常や強い腹痛がある場合は受診を検討してください。",
        "精神科": "🧠 強い不安や不眠が続く場合は専門医に相談しましょう。",
        "小児科": "👶 子どもの発熱や体調不良は早めに受診してください。",
    },
    en: {
        "Emergency Care": "🚨 Call an ambulance or visit an emergency room immediately.",
        "Neurology": "🧠 If severe headache or numbness persists, see a doctor early.",
        "Internal Medicine": "🏥 Rest well, stay hydrated, and monitor your condition.",
        "Gastroenterology": "🍽️ Eat easy-to-digest foods and keep yourself hydrated.",
        "Orthopedics": "🦴 Keep the painful area still and avoid forced movement.",
        "Ophthalmology": "👁️ Keep your eyes clean and do not rub them.",
        "Dentistry": "🦷 If pain is severe, consider visiting a dentist soon.",
        "Otolaryngology (ENT)": "👂 Rest and keep your throat/nose from drying out.",
        "Cardiology": "❤️ If you have chest pain, do not overexert and see a doctor.",
        "Dermatology": "🧴 If rash or itching continues, see a dermatologist.",
        "Urology": "🚻 If you have pain or discomfort when urinating, consult a doctor.",
        "Gynecology": "🌸 If you have menstrual problems or severe lower abdominal pain, see a specialist.",
        "Psychiatry": "🧠 If anxiety or insomnia continues, consider consulting a specialist.",
        "Pediatrics": "👶 If a child has fever or feels unwell, consult a pediatrician early.",
    }
};
 
// 症状キーワードの紐付け (日・英両方のキーワード)
const keywordToDept = {
 
    // 🧠 脳神経内科
    "頭痛": "Neurology", "headache": "Neurology",
    "めまい": "Neurology", "dizziness": "Neurology",
    "しびれ": "Neurology", "numbness": "Neurology",
    "ふらつき": "Neurology",
    "けいれん": "Neurology", "seizure": "Neurology",
 
    // 🏥 内科
    "発熱": "Internal Medicine", "fever": "Internal Medicine",
    "熱": "Internal Medicine",
    "咳": "Internal Medicine", "cough": "Internal Medicine",
    "風邪": "Internal Medicine", "cold": "Internal Medicine",
    "だるい": "Internal Medicine", "fatigue": "Internal Medicine",
    "倦怠感": "Internal Medicine",
    "寒気": "Internal Medicine", "chills": "Internal Medicine",
    "吐き気": "Internal Medicine", "nausea": "Internal Medicine",
 
    // 🍽 消化器内科
    "腹痛": "Gastroenterology", "stomach": "Gastroenterology",
    "お腹": "Gastroenterology",
    "下痢": "Gastroenterology", "diarrhea": "Gastroenterology",
    "便秘": "Gastroenterology", "constipation": "Gastroenterology",
    "嘔吐": "Gastroenterology", "vomit": "Gastroenterology",
 
    // 🦴 整形外科
    "けが": "Orthopedics", "injury": "Orthopedics",
    "骨折": "Orthopedics", "fracture": "Orthopedics",
    "打撲": "Orthopedics", "bruise": "Orthopedics",
    "腰痛": "Orthopedics", "back pain": "Orthopedics",
    "ひざ": "Orthopedics", "knee": "Orthopedics",
 
    // 👁 眼科
    "目": "Ophthalmology", "eye": "Ophthalmology",
    "目が痛い": "Ophthalmology",
    "かすむ": "Ophthalmology", "blurred": "Ophthalmology",
    "二重": "Ophthalmology", "double vision": "Ophthalmology",
    "充血": "Ophthalmology", "red eye": "Ophthalmology",
 
    // 🦷 歯科
    "歯": "Dentistry", "tooth": "Dentistry",
    "歯が痛い": "Dentistry", "toothache": "Dentistry",
    "あご": "Dentistry", "jaw": "Dentistry",
    "歯ぐき": "Dentistry", "gum": "Dentistry",
 
    // 👂 耳鼻咽喉科
    "耳": "Otolaryngology (ENT)", "ear": "Otolaryngology (ENT)",
    "耳鳴り": "Otolaryngology (ENT)", "tinnitus": "Otolaryngology (ENT)",
    "難聴": "Otolaryngology (ENT)", "hearing loss": "Otolaryngology (ENT)",
    "のど": "Otolaryngology (ENT)", "throat": "Otolaryngology (ENT)",
    "鼻水": "Otolaryngology (ENT)", "runny nose": "Otolaryngology (ENT)",
 
    // ❤️ 循環器内科
    "胸": "Cardiology", "chest": "Cardiology",
    "動悸": "Cardiology", "palpitation": "Cardiology",
    "息切れ": "Cardiology", "shortness of breath": "Cardiology",
 
    // 🚨 救急
    "意識": "Emergency Care", "unconscious": "Emergency Care",
    "倒れた": "Emergency Care",
    "呼吸困難": "Emergency Care",
    "激痛": "Emergency Care", "severe pain": "Emergency Care",
 
    // 🧴 皮膚科
    "かゆみ": "Dermatology", "itch": "Dermatology",
    "発疹": "Dermatology", "rash": "Dermatology",
 
    // 🚻 泌尿器科
    "排尿": "Urology", "urine": "Urology",
    "血尿": "Urology", "blood in urine": "Urology",
 
    // 🌸 婦人科
    "生理": "Gynecology", "period": "Gynecology",
    "不正出血": "Gynecology",
 
    // 🧠 精神科
    "不安": "Psychiatry", "anxiety": "Psychiatry",
    "不眠": "Psychiatry", "insomnia": "Psychiatry",
 
    // 👶 小児科
    "子ども": "Pediatrics", "child": "Pediatrics",
};
 
// 英語の科名を日本語に翻訳する用
const enToJaDept = {
    "Neurology": "脳神経内科",
    "Internal Medicine": "内科",
    "Gastroenterology": "消化器内科",
    "Orthopedics": "整形外科",
    "Ophthalmology": "眼科",
    "Dentistry": "歯科",
    "Otolaryngology (ENT)": "耳鼻咽喉科",
    "Cardiology": "循環器内科",
    "Emergency Care": "救急科",
 
    // ⭐ 追加
    "Dermatology": "皮膚科",
    "Urology": "泌尿器科",
    "Gynecology": "婦人科",
    "Psychiatry": "精神科",
    "Pediatrics": "小児科"
};
 
window.onload = function() {
    changeLanguage();
    getCurrentLocationAndShowHospitals("Hospital");
};
 
function changeLanguage() {
    currentLang = document.getElementById("langSelect").value;
    const t = textData[currentLang];
   
    document.getElementById("appTitle").textContent = t.appTitle;
    document.getElementById("langLabel").textContent = t.langLabel;
    document.getElementById("fontLabel").textContent = t.fontLabel;
    document.getElementById("symptomTitle").textContent = t.symptomTitle;
    document.getElementById("symptomInput").placeholder = t.placeholder;
    document.getElementById("searchBtn").textContent = t.searchBtn;
    document.getElementById("resultTitle").textContent = t.resultTitle;
    document.getElementById("deptLabel").textContent = t.deptLabel;
    document.getElementById("warningDisplay").textContent = t.warningText;
    document.getElementById("mapTitle").textContent = t.mapTitle;
    document.getElementById("mapNote").textContent = t.mapNote;
   
    const symptom = document.getElementById("symptomInput").value.trim();
    if (symptom !== "") {
        checkSymptom();
    } else {
        document.getElementById("adviceDisplay").textContent = t.adviceDefault;
        document.getElementById("departmentDisplay").textContent = "";
        document.getElementById("hospitalDisplay").innerHTML = "";
       
        const defaultQuery = currentLang === "ja" ? "病院" : "Hospital";
        getCurrentLocationAndShowHospitals(defaultQuery);
    }
 
    const fontSelect = document.getElementById("fontSizeSelect");
    fontSelect.options[0].text = t.fontSmall;
    fontSelect.options[1].text = t.fontMedium;
    fontSelect.options[2].text = t.fontLarge;
    fontSelect.options[3].text = t.fontXL;
}
function changeFontSize() {
    const size = document.getElementById("fontSizeSelect").value;
    document.body.style.fontSize = size + "px";
}
 
function checkSymptom() {
    const symptom = document.getElementById("symptomInput").value.trim().toLowerCase();
 
    if (symptom === "") {
        alert(textData[currentLang].alertInput);
        return;
    }
 
    document.getElementById("entered").textContent =
        textData[currentLang].enteredPrefix + symptom;
 
    let departments = [];
 
 
    let words = symptom.split(/[,、\s]+/);
 
    words.forEach(word => {
        word = word.trim();
 
        for (let key in keywordToDept) {
            if (word.includes(key)) {
                departments.push(keywordToDept[key]);
                break;
            }
        }
    });
 
    departments = [...new Set(departments)];
 
    if (departments.length === 0) {
        document.getElementById("departmentDisplay").textContent =
            currentLang === "ja" ? "該当する診療科がありません" : "-";
       
        document.getElementById("adviceDisplay").textContent =
            currentLang === "ja"
                ? "⚠ この症状にはまだ対応していません。"
                : "⚠ This symptom is not supported yet.";
       
        document.getElementById("hospitalDisplay").innerHTML = "";
       
        const defaultQuery = currentLang === "ja" ? "病院" : "Hospital";
        getCurrentLocationAndShowHospitals(defaultQuery);
        return;
    }
 
    let displayText = "";
    let adviceText = "";
 
    departments.forEach(deptKey => {
        if (currentLang === "ja") {
            const jaDept = enToJaDept[deptKey];
            displayText += jaDept + " / ";
           
            if (clinicData.ja[jaDept]) {
                adviceText += clinicData.ja[jaDept] + "\n";
            }
        } else {
            displayText += deptKey + " / ";
           
            if (clinicData.en[deptKey]) {
                adviceText += clinicData.en[deptKey] + "\n";
            }
        }
    });
 
    document.getElementById("departmentDisplay").textContent =
        displayText.slice(0, -3);
 
    document.getElementById("adviceDisplay").textContent = adviceText;
 
    document.getElementById("hospitalDisplay").innerHTML =
        `🏥 ${textData[currentLang].hospitalSuffix}`;
 
    getCurrentLocationAndShowHospitals(displayText);
}
 
function getCurrentLocationAndShowHospitals(query) {
    const defaultCenter = "34.6937,135.5023"; // 大阪
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const center = position.coords.latitude + "," + position.coords.longitude;
                updateMap(query, center);
            },
            function() {
                updateMap(query, defaultCenter);
            }
        );
    } else {
        updateMap(query, defaultCenter);
    }
}
 
function updateMap(query, center) {
    const mapFrame = document.getElementById("mapFrame");
   
    let fullQuery;
    let language;
   
    if (currentLang === "ja") {
        fullQuery = query + " 病院";
        language = "ja";
    } else {
        fullQuery = query + " Hospital";
        language = "en";
    }
   
    console.log("Current Language:", currentLang);
    console.log("Search Query:", fullQuery);
    console.log("Map Language:", language);
   
    mapFrame.src = `https://maps.google.com/maps?q=${encodeURIComponent(fullQuery)}&ll=${center}&z=14&output=embed&hl=${language}`;
}