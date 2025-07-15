const cityOptions = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Kakinada", "Rajahmundry", "Tadepalligudem", "Eluru"],
  "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Roing", "Bomdila", "Ziro", "Khonsa", "Kimin", "Deomali"],
  "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur", "Nagaon", "Tinsukia", "Diphu", "Bongaigaon", "Barpeta"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Begusarai", "Katihar", "Ara", "Samastipur"],
  "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Jagdalpur", "Raigarh", "Rajnandgaon", "Bhadravati"],
  "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Mormugao", "Calangute", "Madgaon"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Nadiad", "Anand", "Porbandar"],
  "Haryana": ["Gurgaon", "Faridabad", "Panipat", "Sonipat", "Ambala", "Yamunanagar", "Karnal", "Kurukshetra", "Rohtak", "Rewari", "Chandigarh"],
  "Himachal Pradesh": ["Shimla", "Mandi", "Dharamshala", "Solan", "Bilaspur", "Una", "Hamirpur", "Chamba", "Kangra", "Manali"],
  "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Bihar Sharif", "Giridih", "Hazaribagh", "Dumka", "Sahibganj"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubli", "Gulbarga", "Belagavi", "Dharwad", "Ballari", "Shimoga", "Davangere"],
  "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Alappuzha", "Kannur", "Kollam", "Palakkad", "Kottayam", "Malappuram"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Rewa", "Satna", "Ratlam", "Dewas"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane", "Aurangabad", "Solapur", "Kolhapur", "Navi Mumbai", "Amravati"],
  "Manipur": ["Imphal", "Thoubal", "Churachandpur", "Kakching", "Bishnupur", "Lilong", "Ukhrul", "Mayang Imphal", "Tamenglong", "Jiribam"],
  "Meghalaya": ["Shillong", "Tura", "Nongpoh", "Nongstoin", "Williamnagar", "Baghmara", "Jowai", "Resubelpara", "Dadenggre", "Nongtalang"],
  "Mizoram": ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Saiha", "Lawngtlai", "Mamit", "Khawzawl"],
  "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur", "Berhampur", "Sundargarh", "Balasore", "Bhadrak", "Balangir"],
  "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Hoshiarpur", "Pathankot", "Moga", "Phagwara"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota", "Bikaner", "Alwar", "Bhilwara", "Tonk", "Sikar"],
  "Sikkim": ["Gangtok", "Namchi", "Gyalshing", "Mangan", "Geyzing", "Rongli", "Pakyong", "Yuksom", "Ringpud"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirapalli", "Salem", "Tirunelveli", "Vellore", "Erode", "Thoothukudi", "Tiruppur"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam", "Ramagundam", "Mahbubnagar", "Nalgonda", "Adilabad", "Siddipet"],
  "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailasahar", "Belonia", "Amarpur", "Santirbazar", "Kamalanagar", "Teliamura", "Sabroom"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Varanasi", "Agra", "Meerut", "Aligarh", "Ghaziabad", "Allahabad", "Bareilly"],
  "Uttarakhand": ["Dehradun", "Haridwar", "Nainital", "Haldwani", "Roorkee", "Mussoorie", "Rudrapur", "Pantnagar", "Rishikesh", "Almora"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Chandannagar", "Darjeeling", "Kharagpur", "Malda"],
  "Delhi": ["New Delhi", "Old Delhi", "Dwarka", "Rohini", "Saket", "Karol Bagh", "Lajpat Nagar", "Connaught Place", "Punjabi Bagh", "Vasant Kunj"],
  "Jammu and Kashmir": ["Jammu", "Srinagar", "Anantnag", "Baramulla", "Sopore", "Udhampur", "Kathua", "Kulgam", "Rajouri", "Shopian"],
  "Ladakh": ["Leh", "Kargil", "Nubra Valley", "Khaltsi", "Lamayuru", "Diskit", "Pangong", "Fukche"]
};

function updateCities() {
  const state = document.getElementById("state").value;
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = '<option value="">-- Select City --</option>';

  if (cityOptions[state]) {
    cityOptions[state].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.appendChild(option);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault(); // Prevent actual form submission

  const form = document.getElementById('userForm');
  const formData = new FormData(form);
  const data = {};

  formData.forEach((value, key) => {
    if (data[key]) {
      if (!Array.isArray(data[key])) {
        data[key] = [data[key]];
      }
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });

  // Save to localStorage
  localStorage.setItem("formData", JSON.stringify(data));

  // Redirect to thank you page
  window.location.href = "submitted.html"; // or "thankyou.html"
}
