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
  { name: "Krishan Jeevan Sharma", role: "IT Professional | Community Focused", home: "KM35-106 · Tower B36", phone: "9911287655", image: krishanImage.url, summary: "15+ years in IT. Led volleyball court, common-area CCTV and seepage follow-up initiatives." },
  { name: "Prabhat Kumar Bhaskar", role: "Insurance & Risk Management Professional", home: "KM-10, Flat 3012 · Cluster B38", phone: "8800380997", image: prabhatImage.url, summary: "20+ years in insurance and risk management; active in health, education and community welfare." },
  { name: "Shalini Rana", role: "Entrepreneur | Two-term AOA Member", home: "KM20-1206 · Cluster B35", phone: "8287238137", image: shaliniImage.url, summary: "Works on seepage, structural and fire safety, dog management and coordination with authorities." },
  { name: "Vivek Dwivedi", role: "MBA — Marketing & Finance", home: "Tower KM14", phone: "8376007957", image: vivekImage.url, summary: "Brings 14+ years of MNC experience and a data-driven approach to resident issues." },
  { name: "Devendra Singh Yadav", role: "Financial & Marketing Manager", home: "KM36-1503", phone: "9696767618", image: devendraImage.url, summary: "Financial advisor and sports enthusiast focused on transparent accounts and community facilities." },
  { name: "Ankur Mishra", role: "Community Leader | Resident Focused", home: "Cluster B35", phone: "9818904808", image: ankurImage.url, summary: "Led KM21–22 reception renovation, seepage follow-up, CCTV and family-focused community activities." },
  { name: "Prabodh Shukla", role: "Litigation Counsel | Institutional & Policy Advisor", home: "KM22 · Cluster B35", phone: "9891879962", image: prabodhImage.url, summary: "Provides legal support and coordinates with authorities on infrastructure and resident concerns." },
  { name: "Adv. Anendra Kumar Saraswat", role: "Criminal Lawyer | 25+ Years Experience", home: "KM07-1201 · Cluster B38", phone: "9312382636", image: anendraImage.url, summary: "Offers legal guidance on society matters, resident rights, disputes and builder coordination." },
  { name: "Udit Bhan", role: "Technology & Management Professional", home: "Greater Noida", image: uditImage.url, summary: "Supports sports, resident engagement and issue resolution through technology and structured execution." },
] as const;

export const agenda = [
  { title: priorities[0][0], hindi: priorities[0][1], see: "Security gaps, inconsistent monitoring and areas that need stronger vigilance.", seeHi: "सुरक्षा व्यवस्था में कमियाँ, असंगत निगरानी और अधिक सतर्कता की आवश्यकता।", do: "Review current systems, coordinate with authorities and use technology for stronger monitoring.", doHi: "मौजूदा व्यवस्था की समीक्षा, अधिकारियों से समन्वय और बेहतर निगरानी के लिए तकनीक का उपयोग।", outcome: "A safer and more secure community for every family.", outcomeHi: "हर परिवार के लिए अधिक सुरक्षित समुदाय।" },
  { title: priorities[1][0], hindi: priorities[1][1], see: "Wear and tear, delayed repairs and inconsistent maintenance standards.", seeHi: "टूट-फूट, मरम्मत में देरी और रखरखाव के असमान मानक।", do: "Track repairs regularly and follow up with service providers and the builder.", doHi: "मरम्मत की नियमित निगरानी और सेवा प्रदाताओं व बिल्डर से निरंतर समन्वय।", outcome: "Cleaner, better-maintained towers and functional common areas.", outcomeHi: "स्वच्छ, सुव्यवस्थित टावर और बेहतर साझा क्षेत्र।" },
  { title: priorities[2][0], hindi: priorities[2][1], see: "Limited clarity on collections, expenses and fund utilisation.", seeHi: "संग्रह, खर्च और धन के उपयोग पर स्पष्ट जानकारी का अभाव।", do: "Ensure regular reporting and make key financial information accessible.", doHi: "नियमित रिपोर्टिंग और प्रमुख वित्तीय जानकारी को सभी के लिए सुलभ बनाना।", outcome: "Transparent, accurate and well-communicated CAM accounting.", outcomeHi: "पारदर्शी, सटीक और स्पष्ट CAM लेखांकन।" },
  { title: priorities[3][0], hindi: priorities[3][1], see: "Inconsistent housekeeping and delayed resolution in some areas.", seeHi: "कुछ क्षेत्रों में असंगत सफाई और समाधान में देरी।", do: "Strengthen monitoring and service-provider accountability.", doHi: "निगरानी और सेवा प्रदाताओं की जवाबदेही मजबूत करना।", outcome: "Cleaner, greener and healthier surroundings.", outcomeHi: "अधिक स्वच्छ, हरित और स्वस्थ परिसर।" },
  { title: priorities[4][0], hindi: priorities[4][1], see: "Concerns around stray dogs, pet etiquette and related conflict.", seeHi: "आवारा कुत्तों, पालतू शिष्टाचार और संबंधित विवादों की चिंता।", do: "Work with residents and authorities on balanced, humane solutions.", doHi: "निवासियों और अधिकारियों के साथ संतुलित व मानवीय समाधान पर काम करना।", outcome: "A safer, more harmonious environment for all.", outcomeHi: "सभी के लिए सुरक्षित और सौहार्दपूर्ण वातावरण।" },
  { title: priorities[5][0], hindi: priorities[5][1], see: "Need for better coordination, faster decisions and clearer communication.", seeHi: "बेहतर समन्वय, तेज निर्णय और स्पष्ट संवाद की आवश्यकता।", do: "Promote transparent processes, regular updates and resident participation.", doHi: "पारदर्शी प्रक्रिया, नियमित अपडेट और निवासी भागीदारी को बढ़ावा देना।", outcome: "An efficient, accountable and resident-focused AOA.", outcomeHi: "कुशल, जवाबदेह और निवासी-केंद्रित AOA।" },
  { title: priorities[6][0], hindi: priorities[6][1], see: "Pending issues with the builder, Suraksha and government authorities.", seeHi: "बिल्डर, सुरक्षा और सरकारी अधिकारियों से संबंधित लंबित मुद्दे।", do: "Follow up consistently, escalate where needed and track progress.", doHi: "निरंतर फॉलो-अप, आवश्यक एस्केलेशन और प्रगति की निगरानी।", outcome: "Timely action on important pending matters.", outcomeHi: "महत्वपूर्ण लंबित मामलों पर समयबद्ध कार्रवाई।" },
  { title: priorities[7][0], hindi: priorities[7][1], see: "Delayed updates and slow issue resolution.", seeHi: "अपडेट में देरी और समस्याओं का धीमा समाधान।", do: "Improve communication channels and track every issue to closure.", doHi: "संवाद माध्यम बेहतर करना और हर समस्या को समाधान तक ट्रैक करना।", outcome: "Faster, transparent and effective issue resolution.", outcomeHi: "तेज, पारदर्शी और प्रभावी समस्या समाधान।" },
] as const;