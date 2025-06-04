
    const toggleBtn = document.getElementById('dark-mode-toggle');
    const sunIcon = '☀️';
    const moonIcon = '🌙';
  
    // Load saved dark mode state or default to false (light mode)
    let darkMode = localStorage.getItem('darkMode') === 'true';
  
    // Function to update UI based on darkMode value
    function updateDarkModeUI() {
      if (darkMode) {
        document.documentElement.classList.add('dark-mode');
        toggleBtn.textContent = moonIcon;
        toggleBtn.setAttribute('aria-label', 'Toggle light mode');
        toggleBtn.setAttribute('title', 'Switch to light mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
        toggleBtn.textContent = sunIcon;
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.setAttribute('title', 'Switch to dark mode');
      }
    }
  
    // Initialize UI on page load
    updateDarkModeUI();
  
    toggleBtn.addEventListener('click', () => {
      // Add spin animation class
      toggleBtn.classList.add('spin');
  
      // Remove spin class after animation ends to allow future spins
      toggleBtn.addEventListener('animationend', () => {
        toggleBtn.classList.remove('spin');
      }, { once: true });
  
      // Toggle dark mode state
      darkMode = !darkMode;
  
      // Save state to localStorage
      localStorage.setItem('darkMode', darkMode);
  
      // Update UI accordingly
      updateDarkModeUI();
    });
  
    // Hamburger code unchanged...
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const buttonsContainer = document.querySelector('header .buttons');
  
    hamburgerBtn.addEventListener('click', () => {
      const expanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
      hamburgerBtn.setAttribute('aria-expanded', !expanded);
      buttonsContainer.classList.toggle('active');
    });
  
      


    const semesterCourses = {
        "1. semestris": ["Datoru tīkli I un ieskats nozarē"],
        "2. semestris": ["Matemātiskā analīze I"],
        "3. semestris": ["Praktiskā dziļā mašīnmācīšanās"],
        "4. semestris": ["Prakse I"],
        "5. semestris": ["Prakse II"],
        "6. semestris": ["ORACLE projektēšanas rīki"]
      };
    
      const courseDescriptions = {
        "Datoru tīkli I un ieskats nozarē": `<p>Kursā “Matemātiskā analīze I” apguvām diferencēšanu, integrēšanu, robežas un virknes - būtiskus rīkus, kas nepieciešami gan teorētiskajā, gan praktiskajā datorzinātnē. Lai gan kurss bija izaicinošs, tas palīdzēja attīstīt loģisko un analītisko domāšanu. Lielu daļu darba aizņēma uzdevumu risināšana, pierādījumu rakstīšana un formulējumu precīza izpratne, kas vēlāk noderēja citos kursos, piemēram, algoritmu analīzē un datu apstrādē.</p><img src="pictures/ethernet.jpg" alt="Ethernet vads" class="course-image">`,

        "Matemātiskā analīze I": `<p>Kursā “Datoru tīkli I” apgūst pamatus par datortīklu darbību, tostarp tīkla protokoliem, ierīcēm un savienojumiem. Praktiskajās nodarbībās mēs konfigurējām dažādus tīkla ierīces - piemēram, maršrutētājus un slēdžus - kā arī paši taisījām Ethernet tīkla vadus. Šīs praktiskās aktivitātes palīdzēja labāk izprast, kā darbojas datortīkli ikdienā un kā risināt reālas tīkla problēmas.</p><img src="pictures/integral.jpg" alt="Integrals" class="course-image">`,

        "Praktiskā dziļā mašīnmācīšanās": `<p>Kursā “Praktiskā dziļā mašīnmācīšanās” mēs apguvām, kā veidot un trenēt neironu tīklus, izmantojot tādus rīkus kā Python, TensorFlow un PyTorch. Lielāko daļu uzdevumu izpildījām tiešsaistē, piemēram, Google Colab vidē, kas ļauj ērti darbināt kodu ar GPU atbalstu bez lokālas konfigurēšanas. Daži izmantoja arī Kaggle un Jupyter Notebook, lai eksperimentētu ar datu kopām un veidotu klasifikatorus vai regresijas modeļus. Kurss deva praktiskas iemaņas, kā pielietot mašīnmācīšanās metodes reālās problēmās, piemēram, attēlu atpazīšanā un datu prognozēšanā.</p><img src="pictures/machine.jpg" alt="Robot thinking" class="course-image">`,

        "Prakse I": "Studiju laikā mums bija jāizpilda arī obligātā prakse, kas deva iespēju pielietot iegūtās zināšanas reālā darba vidē. Praksi varēja iziet dažādos IT uzņēmumos Latvijā, tostarp programmēšanas, datu analīzes vai tīklu administrēšanas jomās. Tā bija vērtīga pieredze, kur varēju gan iedziļināties esošajos projektos, gan attīstīt savas profesionālās prasmes un saprast, kā notiek darbs komandā. Daudziem prakse kļuva arī par soli tuvāk pirmajai darba vietai IT nozarē.",

        "Prakse II": "Savā praksē izstrādāju B2B mājaslapu uzņēmumam, kas nodarbojas ar vairumtirdzniecību. Izmantoju WordPress un WooCommerce platformas, pielāgoju dizainu atbilstoši klienta vajadzībām un konfigurēju katalogu bez tiešās pārdošanas funkcijas. Īpašu uzmanību pievērsu lietotāja pieredzei un informācijas strukturēšanai, kā arī izstrādāju funkcijas, kas ļauj biznesa klientiem ātri atrast un pieprasīt piedāvājumus konkrētiem produktiem. Šī pieredze man palīdzēja saprast, kā risināt praktiskas problēmas, sadarboties ar klientiem un strādāt pie reāla projekta no sākuma līdz beigām.",

        "ORACLE projektēšanas rīki": '<p>Kursā "ORACLE projektēšanas rīki" apguvām, kā izstrādāt un modelēt datu bāzes, izmantojot Oracle SQL Developer Data Modeler. Mācījāmies veidot konceptuālos, loģiskos un fiziskos datu modeļus, kā arī pārvērst tos SQL skriptos, lai izveidotu datu bāzes struktūru. Praktiskajos darbos analizējām prasības, zīmējām ER diagrammas un strukturējām tabulas ar pareizām atslēgām un relācijām. Šis kurss deva vērtīgu ieskatu datu bāzu projektēšanā un sagatavoja darbam ar lielām un sarežģītām informācijas sistēmām.</p><img src="pictures/apex.png" alt="ORACLE APEX" class="course-image">',

      };
    
      document.addEventListener("DOMContentLoaded", () => {
        const semesterSelect = document.getElementById("semester-select");
        const courseSelect = document.getElementById("course-select");
        const courseInfo = document.getElementById("course-info");
      
        // Hide course info initially
        courseInfo.style.display = "none";
      
        // Populate semester dropdown
        for (const semester in semesterCourses) {
          const option = document.createElement("option");
          option.value = semester;
          option.textContent = semester;
          semesterSelect.appendChild(option);
        }
      
        // Update course dropdown
        semesterSelect.addEventListener("change", () => {
          const selectedSemester = semesterSelect.value;
          const courses = semesterCourses[selectedSemester] || [];
      
          courseSelect.innerHTML = '<option disabled selected>Izvēlies kursu</option>';
          courseSelect.disabled = courses.length === 0;
      
          // Clear and hide course info when semester changes
          courseInfo.innerHTML = "";
          courseInfo.style.display = "none";
      
          courses.forEach(course => {
            const option = document.createElement("option");
            option.value = course;
            option.textContent = course;
            courseSelect.appendChild(option);
          });
        });
      
        // Show course description when course selected
        courseSelect.addEventListener("change", () => {
          const selectedCourse = courseSelect.value;
          const description = courseDescriptions[selectedCourse] || "Apraksts nav pieejams.";
          courseInfo.innerHTML = `<h3>${selectedCourse}</h3><p>${description}</p>`;
          courseInfo.style.display = "block";
        });
      });
      

      const semesterCourses2 = {
        "1st semester": ["Computer Networks I and Industry Insights"],
        "2nd semester": ["Mathematical Analysis I"],
        "3rd semester": ["Practical machine learning"],
        "4th semester": ["Internship I"],
        "5th semester": ["Internship II"],
        "6th semester": ["ORACLE projection tools"]
      };
    
      const courseDescriptions2 = {
        "Computer Networks I and Industry Insights": `<p>In the course "Computer Networks I" you will learn the basics of how computer networks work, including network protocols, devices, and connections. In practical classes, we configured various network devices - such as routers and switches - and also made our own Ethernet network cables. These practical activities helped us better understand how computer networks work in everyday life and how to solve real network problems.</p><img src="pictures/ethernet.jpg" alt="Ethernet vads" class="course-image">`,

        "Mathematical Analysis I": `<p>In the course “Mathematical Analysis I”, we learned differentiation, integration, limits and series - essential tools needed in both theoretical and practical computer science. Although the course was challenging, it helped develop logical and analytical thinking. A large part of the work was spent solving problems, writing proofs and understanding the exact formulations, which later came in handy in other courses, such as algorithm analysis and data processing.</p><img src="pictures/integral.jpg" alt="Integrals" class="course-image">`,

        "Practical machine learning": `<p>In the course “Practical machine learning”, we learned how to build and train neural networks using tools such as Python, TensorFlow, and PyTorch. We completed most of the tasks online, for example, in the Google Colab environment, which allows you to easily run code with GPU support without local configuration. Some also used Kaggle and Jupyter Notebook to experiment with datasets and build classifiers or regression models. The course gave us practical skills on how to apply machine learning methods to real-world problems, such as image recognition and data prediction.</p><img src="pictures/machine.jpg" alt="Robot thinking" class="course-image">`,

        "Internship I": "During our studies, we also had to complete a mandatory internship, which gave us the opportunity to apply the acquired knowledge in a real work environment. Internships were available at various IT companies in Latvia, including in the fields of programming, data analysis, or network administration. It was a valuable experience, where I could delve into existing projects, develop my professional skills, and understand how teamwork works. For many, the internship also became a step closer to their first job in the IT industry.",

        "Internship II": "In my internship, I developed a B2B website for a wholesale company. I used WordPress and WooCommerce platforms, customized the design according to the client's needs, and configured a catalog without a direct sales function. I paid special attention to the user experience and information structuring, as well as developed functions that allow business customers to quickly find and request offers for specific products. This experience helped me understand how to solve practical problems, collaborate with clients, and work on a real project from start to finish.",

        "ORACLE projection tools": '<p>In the course "ORACLE Design Tools" we learned how to design and model databases using Oracle SQL Developer Data Modeler. We learned to create conceptual, logical and physical data models, as well as convert them into SQL scripts to create a database structure. In practical work, we analyzed requirements, drew ER diagrams and structured tables with the correct keys and relationships. This course gave valuable insight into database design and prepared us for working with large and complex information systems.</p><img src="pictures/apex.png" alt="ORACLE APEX" class="course-image">',

      };
    
      document.addEventListener("DOMContentLoaded", () => {
        const semesterSelect2 = document.getElementById("semester-select2");
        const courseSelect2 = document.getElementById("course-select2");
        const courseInfo2 = document.getElementById("course-info2");
      
        // Hide course info initially
        courseInfo2.style.display = "none";
      
        // Populate semester dropdown
        for (const semester2 in semesterCourses2) {
          const option = document.createElement("option");
          option.value = semester2;
          option.textContent = semester2;
          semesterSelect2.appendChild(option);
        }
      
        // Update course dropdown
        semesterSelect2.addEventListener("change", () => {
          const selectedSemester2 = semesterSelect2.value;
          const courses2 = semesterCourses2[selectedSemester2] || [];
      
          courseSelect2.innerHTML = '<option disabled selected>Choose course</option>';
          courseSelect2.disabled = courses2.length === 0;
      
          // Clear and hide course info when semester changes
          courseInfo2.innerHTML = "";
          courseInfo2.style.display = "none";
      
          courses2.forEach(course2 => {
            const option = document.createElement("option");
            option.value = course2;
            option.textContent = course2;
            courseSelect2.appendChild(option);
          });
        });
      
        // Show course description when course selected
        courseSelect2.addEventListener("change", () => {
          const selectedCourse2 = courseSelect2.value;
          const description2 = courseDescriptions2[selectedCourse2] || "Description not available";
          courseInfo2.innerHTML = `<h3>${selectedCourse2}</h3><p>${description2}</p>`;
          courseInfo2.style.display = "block";
        });
      });