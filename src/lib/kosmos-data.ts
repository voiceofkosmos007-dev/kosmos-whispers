import anendraImage from "@/assets/anendra-saraswat.png.asset.json";
import ankurImage from "@/assets/ankur-mishra.png.asset.json";
import devendraImage from "@/assets/devendra.png.asset.json";
import krishanImage from "@/assets/krishan.png.asset.json";
import prabhatImage from "@/assets/prabhat.png.asset.json";
import prabodhImage from "@/assets/prabodh-shukla.png.asset.json";
import shaliniImage from "@/assets/shalini.png.asset.json";
import uditImage from "@/assets/udit-bhan.png.asset.json";
import vivekImage from "@/assets/vivek.png.asset.json";

export const priorities = [
  ["Security & Safety", "सुरक्षा एवं संरक्षा"],
  ["Tower & Common Area Maintenance", "टावर एवं साझा क्षेत्र रखरखाव"],
  ["CAM Transparency & Honest Accounting", "CAM पारदर्शिता एवं ईमानदार लेखांकन"],
  ["Housekeeping & Cleanliness", "हाउसकीपिंग एवं स्वच्छता"],
  ["Dog Management", "श्वान प्रबंधन"],
  ["AOA Functioning & Accountability", "AOA कार्यप्रणाली एवं जवाबदेही"],
  ["Builder / Suraksha / Government Follow-up", "बिल्डर / सुरक्षा / शासन से समन्वय"],
  ["Resident Communication & Issue Resolution", "निवासी संवाद एवं समस्या समाधान"],
] as const;

export const team = [
  { name: "Krishan Jeevan Sharma", role: "IT Professional | Community Focused", home: "KM35-106 · Tower B36", phone: "9911287655", image: krishanImage.url, summary: "15+ years in IT, with experience in software development, application design, cloud technologies and problem solving.", contributions: ["Created a volleyball court with residents and formed a structured society volleyball group.", "Helped improve common areas and install CCTV cameras through resident contributions.", "Followed up with the builder and authorities until tower seepage concerns were addressed.", "Advocates stronger security, better infrastructure and a safer environment."], vision: "A cleaner, more connected Kosmos with better infrastructure, sports and wellness, and faster technology-enabled issue resolution." },
  { name: "Prabhat Kumar Bhaskar", role: "Insurance & Risk Management Professional", home: "KM-10, Flat 3012 · Cluster B38", phone: "8800380997", image: prabhatImage.url, summary: "20+ years in insurance and risk management, with leadership experience across health, education and community welfare.", contributions: ["Promoted health and education activities for Kosmos residents.", "Supported residents’ interests through representation and community programmes.", "Brings two decades of risk-management experience to society safety and planning."], vision: "A healthier, safer and better-managed Kosmos built through sports, yoga, wellness and practical risk management." },
  { name: "Shalini Rana", role: "Entrepreneur | Two-term AOA Member", home: "KM20-1206 · Cluster B35", phone: "8287238137", image: shaliniImage.url, summary: "Apparel entrepreneur and elected AOA member for two consecutive terms, actively working on society concerns.", contributions: ["Worked on seepage, structural and fire-safety matters.", "Supported responsible dog management and resident coordination.", "Coordinated with the builder and public authorities on unresolved issues."], vision: "An accountable AOA that listens to residents, communicates clearly and follows every issue through to closure." },
  { name: "Vivek Dwivedi", role: "MBA — Marketing & Finance", home: "Tower KM14", phone: "8376007957", image: vivekImage.url, summary: "Brings 14+ years of MNC experience and a structured, data-driven approach to resident issues.", contributions: ["Promotes transparent financial reporting and fact-based decisions.", "Supports stronger maintenance monitoring and service accountability.", "Works toward timely communication and measurable outcomes."], vision: "A transparent and professionally managed Kosmos where decisions are backed by data and visible progress." },
  { name: "Devendra Singh Yadav", role: "Financial & Marketing Manager", home: "KM36-1503", phone: "9696767618", image: devendraImage.url, summary: "Financial adviser, marketing professional and sports enthusiast focused on transparent accounts and community facilities.", contributions: ["Advocates transparent CAM accounts and responsible fund use.", "Supports sports and recreation facilities for residents.", "Brings financial discipline to community planning."], vision: "A financially transparent, active and inclusive community with better facilities for every age group." },
  { name: "Ankur Mishra", role: "Community Leader | Resident Focused", home: "Cluster B35", phone: "9818904808", image: ankurImage.url, summary: "A hands-on resident leader with a record of improving shared spaces and bringing families together.", contributions: ["Led the KM21–22 reception renovation.", "Pursued seepage resolution and common-area CCTV improvements.", "Organised family-focused community activities and resident engagement."], vision: "A safe, well-maintained and connected Kosmos where residents participate and every concern receives follow-up." },
  { name: "Prabodh Shukla", role: "Litigation Counsel | Institutional & Policy Advisor", home: "KM22 · Cluster B35", phone: "9891879962", image: prabodhImage.url, summary: "Litigation counsel providing legal, institutional and policy support for community matters.", contributions: ["Provides legal support on infrastructure and resident concerns.", "Coordinates with authorities and institutions when escalation is needed.", "Advises on policy, compliance and resident rights."], vision: "A rights-aware, accountable society where important matters are pursued through the correct legal and institutional channels." },
  { name: "Adv. Anendra Kumar Saraswat", role: "Criminal Lawyer | 25+ Years Experience", home: "KM07-1201 · Cluster B38", phone: "9312382636", image: anendraImage.url, summary: "An experienced criminal lawyer offering practical legal guidance on society matters and resident rights.", contributions: ["Guides residents on disputes and society-related legal concerns.", "Supports builder coordination and formal follow-up.", "Advocates fair processes and protection of resident interests."], vision: "A secure and transparent Kosmos where residents’ rights are protected and disputes are handled fairly." },
  { name: "Udit Bhan", role: "Technology & Management Professional", home: "Greater Noida", image: uditImage.url, summary: "A technology and management professional supporting structured execution, sports and resident engagement.", contributions: ["Supports sports and community participation.", "Applies technology to improve communication and issue tracking.", "Promotes structured planning and timely execution."], vision: "A modern, connected Kosmos where technology helps residents collaborate and resolve issues faster." },
] as const;

export const agenda = [
  ["Complete Builder Accountability", "पूर्ण बिल्डर जवाबदेही", "Every rupee spent on maintenance will be properly accounted for.", "रखरखाव पर खर्च किए गए हर रुपये का पूरा हिसाब रखा जाएगा।"],
  ["Transparent AOA", "पारदर्शी AOA", "Accounts, AGM/MOM, notices and important information will be made public on the website.", "खाते, AGM/MOM, सूचनाएँ और महत्वपूर्ण जानकारी वेबसाइट पर सार्वजनिक की जाएगी।"],
  ["Structural Audit of Buildings", "भवनों का संरचनात्मक ऑडिट", "Safety audits of buildings through an authorised agency.", "अधिकृत एजेंसी से भवनों का सुरक्षा ऑडिट कराया जाएगा।"],
  ["Insurance Transparency", "बीमा में पारदर्शिता", "Complete information about building insurance and the claims process.", "भवन बीमा और दावा प्रक्रिया की पूरी जानकारी उपलब्ध कराई जाएगी।"],
  ["Sewage-free Buildings", "सीवेज-मुक्त भवन", "A permanent solution for leakage and water seepage issues.", "रिसाव और सीपेज की समस्याओं का स्थायी समाधान किया जाएगा।"],
  ["Plaster & Painting", "प्लास्टर और पेंटिंग", "Ensure responsibility for building plaster and painting is fulfilled.", "भवन के प्लास्टर और पेंटिंग की जिम्मेदारी पूरी कराई जाएगी।"],
  ["Better Roads, Lighting & Drainage", "बेहतर सड़कें, प्रकाश और जल निकासी", "Regular maintenance of roads, streetlights and drainage systems.", "सड़कों, स्ट्रीट लाइट और जल निकासी व्यवस्था का नियमित रखरखाव होगा।"],
  ["Responsible Dog Management", "जिम्मेदार श्वान प्रबंधन", "Safe and legally compliant arrangements for the safety of residents and animals.", "निवासियों और पशुओं की सुरक्षा के लिए सुरक्षित व कानूनसम्मत व्यवस्था होगी।"],
  ["Debris-free Society", "मलबा-मुक्त सोसायटी", "Keep the premises clean, safe and free from construction debris.", "परिसर को साफ, सुरक्षित और निर्माण मलबे से मुक्त रखा जाएगा।"],
  ["Modern Security System", "आधुनिक सुरक्षा व्यवस्था", "Technology-enabled security, proper verification and transparent tendering.", "तकनीक आधारित सुरक्षा, उचित सत्यापन और पारदर्शी टेंडर प्रक्रिया लागू होगी।"],
  ["Need-based Security Deployment", "आवश्यकतानुसार सुरक्षा तैनाती", "Deploy personnel and guards according to actual requirements.", "वास्तविक आवश्यकता के अनुसार सुरक्षा कर्मियों और गार्ड की तैनाती होगी।"],
  ["Review of Billing CAMPS", "बिलिंग CAMPS की समीक्षा", "Review CAMPS billing justification and eliminate unnecessary expenses.", "CAMPS बिलिंग के औचित्य की समीक्षा कर अनावश्यक खर्च समाप्त किए जाएंगे।"],
  ["Separate Electricity Arrangement for Kosmos", "Kosmos के लिए अलग बिजली व्यवस्था", "Audit Kosmos electricity arrangements and separate them from Wish Town where applicable.", "Kosmos की बिजली व्यवस्था का ऑडिट कर आवश्यकतानुसार Wish Town से अलग किया जाएगा।"],
  ["Electricity Bill Audit", "बिजली बिल ऑडिट", "Audit actual builder payments and recoveries made from residents.", "बिल्डर के वास्तविक भुगतान और निवासियों से वसूली का ऑडिट होगा।"],
  ["Solar Energy Initiative", "सौर ऊर्जा पहल", "Install solar panels at minimum possible cost for common-area lighting.", "साझा क्षेत्रों की रोशनी के लिए न्यूनतम लागत पर सोलर पैनल लगाए जाएंगे।"],
  ["Regular STP Inspection", "नियमित STP निरीक्षण", "Technical inspections every three months for better water and environmental management.", "बेहतर जल व पर्यावरण प्रबंधन के लिए हर तीन महीने में तकनीकी निरीक्षण होगा।"],
  ["Ganga Water Supply", "गंगा जल आपूर्ति", "Initiate action with concerned authorities to start Ganga water connectivity.", "गंगा जल कनेक्टिविटी शुरू कराने के लिए संबंधित अधिकारियों से कार्रवाई की जाएगी।"],
  ["Religious & Community Spaces", "धार्मिक और सामुदायिक स्थल", "Develop designated spaces for community and religious activities.", "सामुदायिक और धार्मिक गतिविधियों के लिए निर्धारित स्थान विकसित किए जाएंगे।"],
  ["Legal Action Against the Builder", "बिल्डर के विरुद्ध कानूनी कार्रवाई", "File cases before appropriate courts or forums wherever necessary.", "जहाँ आवश्यक हो, उचित न्यायालयों या मंचों पर मामले दायर किए जाएंगे।"],
  ["Sports & Talent Development for Children", "बच्चों के खेल और प्रतिभा विकास", "Organise sports, Olympics, lessons and skill-development programmes.", "खेल, ओलंपिक, प्रशिक्षण और कौशल-विकास कार्यक्रम आयोजित किए जाएंगे।"],
  ["Senior Citizens’ Forum", "वरिष्ठ नागरिक मंच", "Organise bhajan, book-reading, library and community activities for senior citizens.", "वरिष्ठ नागरिकों के लिए भजन, पुस्तक-पठन, पुस्तकालय और सामुदायिक गतिविधियाँ होंगी।"],
  ["Health & Medical Camps", "स्वास्थ्य और चिकित्सा शिविर", "Regular health camps for senior citizens and residents.", "वरिष्ठ नागरिकों और निवासियों के लिए नियमित स्वास्थ्य शिविर लगाए जाएंगे।"],
  ["Strong Tenant Verification", "सुदृढ़ किरायेदार सत्यापन", "Police verification, documentation and access-control system.", "पुलिस सत्यापन, दस्तावेजीकरण और प्रवेश-नियंत्रण व्यवस्था लागू होगी।"],
  ["Domestic Help Management", "घरेलू सहायक प्रबंधन", "Clear rules for registration, verification and functioning of domestic helpers.", "घरेलू सहायकों के पंजीकरण, सत्यापन और कार्य के लिए स्पष्ट नियम होंगे।"],
  ["Regulation of Society Events", "सोसायटी आयोजनों का नियमन", "Transparent rules for stalls, charges, cleanliness and waste management.", "स्टॉल, शुल्क, सफाई और कचरा प्रबंधन के लिए पारदर्शी नियम होंगे।"],
  ["Commission-free AOA", "कमीशन-मुक्त AOA", "No commissions or kickbacks in vendor selection and expenditure.", "विक्रेता चयन और खर्च में कोई कमीशन या रिश्वत नहीं होगी।"],
  ["Regulation of Property Brokers", "प्रॉपर्टी ब्रोकरों का नियमन", "RERA compliance and controlled access for brokers.", "RERA अनुपालन और ब्रोकरों के लिए नियंत्रित प्रवेश सुनिश्चित होगा।"],
  ["Stronger AOA Membership", "मजबूत AOA सदस्यता", "Connect the maximum eligible apartment owners with the AOA.", "अधिकतम पात्र फ्लैट मालिकों को AOA से जोड़ा जाएगा।"],
  ["Transparent Tender System", "पारदर्शी टेंडर व्यवस्था", "Selection of competent vendors through a transparent public tender process.", "पारदर्शी सार्वजनिक टेंडर प्रक्रिया से सक्षम विक्रेताओं का चयन होगा।"],
  ["Air Pollution Control", "वायु प्रदूषण नियंत्रण", "Control air pollution through dust-control measures and practical steps.", "धूल नियंत्रण और अन्य व्यावहारिक उपायों से वायु प्रदूषण कम किया जाएगा।"],
] as const;

export const manifestoCommitments = [
  {
    key: "A",
    title: ["A Seepage-Free Kosmos", "सीपेज-मुक्त कॉसमॉस"],
    summary: ["Every bathroom grouted. Every AC drain pipeline repaired or replaced.", "हर बाथरूम की ग्राउटिंग और हर एसी ड्रेन पाइप की मरम्मत या बदलाव।"],
    points: [
      ["AOA-led grouting drive for all flats", "सभी फ्लैटों के लिए AOA के नेतृत्व में ग्राउटिंग अभियान"],
      ["Ensure grouting twice a year", "साल में दो बार ग्राउटिंग सुनिश्चित करना"],
      ["Audit shaft and wall pipes, with remedial work as required", "शाफ्ट और दीवार की पाइपों का ऑडिट तथा आवश्यक सुधार कार्य"],
    ],
    deadline: ["3 Months", "3 महीने"],
  },
  {
    key: "B",
    title: ["Builder Accountability", "बिल्डर की जवाबदेही"],
    summary: ["Every rupee of maintenance and all pending work accounted for.", "रखरखाव के हर रुपये और सभी लंबित कार्यों का पूरा हिसाब।"],
    points: [
      ["Builder to show where every penny of maintenance charges was spent", "बिल्डर रखरखाव शुल्क के हर पैसे के खर्च का विवरण दे"],
      ["Proper completion of all pending work", "सभी लंबित कार्यों को उचित रूप से पूरा कराना"],
      ["Roads, lighting, drainage, debris removal and insurance accountability", "सड़क, प्रकाश, जल निकासी, मलबा हटाने और बीमा की जवाबदेही"],
    ],
    deadline: ["Ongoing", "निरंतर"],
  },
  {
    key: "C",
    title: ["Legal Action Against the Builder", "बिल्डर के विरुद्ध कानूनी कार्रवाई"],
    summary: ["Accountability through law", "कानून के माध्यम से जवाबदेही"],
    points: [
      ["₹50 Crore IFMS — secure complete records and pursue recovery with applicable interest for transfer to the AOA", "₹50 करोड़ IFMS — पूरे रिकॉर्ड प्राप्त कर लागू ब्याज सहित वसूली और AOA को हस्तांतरण"],
      ["Stop excessive ₹9–12 lakh transfer charges under the applicable RERA circular and help residents recover unlawful collections", "लागू RERA परिपत्र के तहत ₹9–12 लाख के अनुचित ट्रांसफर शुल्क को रोकना और अवैध वसूली वापस दिलाना"],
      ["Publish a legal white paper covering major cases, orders, expenses, progress and next steps", "प्रमुख मामलों, आदेशों, खर्च, प्रगति और अगले कदमों पर कानूनी श्वेत पत्र प्रकाशित करना"],
      ["Defend the society’s financial, legal and property interests through prompt legal action", "त्वरित कानूनी कार्रवाई से सोसायटी के वित्तीय, कानूनी और संपत्ति हितों की रक्षा"],
      ["Enforce the builder’s plaster, painting and pending repair obligations", "प्लास्टर, पेंटिंग और लंबित मरम्मत की बिल्डर की जिम्मेदारी लागू कराना"],
      ["Review, strengthen and pursue every pending AOA case", "हर लंबित AOA मामले की समीक्षा, मजबूती और सक्रिय पैरवी"],
      ["Create a strong AOA legal committee to scrutinise works, vendors, contracts, tenders and compliance", "कार्य, विक्रेता, अनुबंध, टेंडर और अनुपालन की जाँच के लिए मजबूत AOA कानूनी समिति"],
    ],
    deadline: ["2 Months", "2 महीने"],
  },
  {
    key: "D",
    title: ["Transparent, SOP-Based AOA", "पारदर्शी, SOP-आधारित AOA"],
    summary: ["A resident-first AOA that is easy to reach, with every flat owner as a member.", "निवासी-प्रथम, आसानी से उपलब्ध AOA जिसमें हर फ्लैट मालिक सदस्य हो।"],
    points: [
      ["Grow AOA membership from about 1,300 toward 100% of eligible flat owners", "लगभग 1,300 से बढ़ाकर सभी पात्र फ्लैट मालिकों तक AOA सदस्यता पहुँचाना"],
      ["Keep the website updated with all records, circulars and minutes of meetings", "सभी रिकॉर्ड, परिपत्र और बैठक कार्यवृत्त वेबसाइट पर नियमित अपडेट करना"],
      ["Dedicated AOA helpline for grievance redressal", "शिकायत निवारण के लिए समर्पित AOA हेल्पलाइन"],
      ["Publish audited accounts every three months", "हर तीन महीने में ऑडिट किए खाते प्रकाशित करना"],
      ["Select all vendors through public tender for a commission-free AOA", "कमीशन-मुक्त AOA के लिए सभी विक्रेताओं का चयन सार्वजनिक टेंडर से"],
      ["SOP calendar for horticulture, lifts, AC pipes each April and drainage before monsoon", "बागवानी, लिफ्ट, हर अप्रैल एसी पाइप और मानसून से पहले जल निकासी का SOP कैलेंडर"],
    ],
    deadline: ["SOPs: 2 Months · Membership: 3 Months", "SOP: 2 महीने · सदस्यता: 3 महीने"],
  },
] as const;

export const manifestoSections = [
  { title: ["Building Maintenance, Electricity & Water", "भवन रखरखाव, बिजली और पानी"], points: [["Structural audit through a competent authority", "सक्षम प्राधिकरण से संरचनात्मक ऑडिट"], ["Paint and plaster of all towers", "सभी टावरों की पेंटिंग और प्लास्टर"], ["Regular monitoring of building condition and cracks", "भवन की स्थिति और दरारों की नियमित निगरानी"], ["Separate the Kosmos meter from Wish Town", "कॉसमॉस मीटर को विश टाउन से अलग करना"], ["Audit bills so residents pay only actual charges", "बिल ऑडिट ताकि निवासी केवल वास्तविक शुल्क दें"], ["Solar power for common-area bills", "साझा क्षेत्रों के बिलों के लिए सौर ऊर्जा"], ["Quarterly STP inspection", "हर तीन महीने में STP निरीक्षण"], ["Push to start Ganga water supply", "गंगा जल आपूर्ति शुरू कराने का प्रयास"], ["Clean, well-maintained common areas", "स्वच्छ और सुव्यवस्थित साझा क्षेत्र"]] },
  { title: ["Security", "सुरक्षा"], points: [["New high-tech security agency with trained guards", "प्रशिक्षित गार्ड वाली नई हाई-टेक सुरक्षा एजेंसी"], ["Identify and adequately staff guard posts", "गार्ड पोस्ट चिन्हित कर पर्याप्त तैनाती"], ["Strict tenant and domestic help verification", "किरायेदार और घरेलू सहायकों का सख्त सत्यापन"], ["Access control and CCTV surveillance", "प्रवेश नियंत्रण और CCTV निगरानी"], ["Regulate property brokers as per RERA", "RERA के अनुसार प्रॉपर्टी ब्रोकरों का नियमन"]] },
  { title: ["Senior Citizens", "वरिष्ठ नागरिक"], points: [["Bhajan and religious clubs, and reading groups", "भजन, धार्मिक क्लब और पठन समूह"], ["Regular medical camps", "नियमित चिकित्सा शिविर"], ["Sanctioned space for religious activities", "धार्मिक गतिविधियों के लिए स्वीकृत स्थान"], ["Library and community support", "पुस्तकालय और सामुदायिक सहयोग"], ["Assistance with civic and health needs", "नागरिक और स्वास्थ्य आवश्यकताओं में सहायता"]] },
  { title: ["Fit Kosmos: Child & Youth", "फिट कॉसमॉस: बच्चे और युवा"], points: [["Sports facilities, teams and inter-society meets", "खेल सुविधाएँ, टीमें और अंतर-सोसायटी प्रतियोगिताएँ"], ["Sports and cultural workshops for children", "बच्चों के लिए खेल और सांस्कृतिक कार्यशालाएँ"], ["Olympiad, essay and book-writing workshops", "ओलंपियाड, निबंध और पुस्तक-लेखन कार्यशालाएँ"], ["Overall personality and talent development", "समग्र व्यक्तित्व और प्रतिभा विकास"]] },
] as const;