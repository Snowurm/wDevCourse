var profilePictureSlot = document.getElementById("profilePicture");
var fullNameSlot = document.getElementById("fullName");
var addressSlot = document.getElementById("address");
var telephoneSlot = document.getElementById("telephone");
var emailSlot = document.getElementById("email");
var dobSlot = document.getElementById("dob");
var nationalitiesSlot = document.getElementById("nationalities");
var languagesSlot = document.getElementById("languages");
var itSkillsSlot = document.getElementById("itSkills");
var otherSkillsSlot = document.getElementById("otherSkills");
var interestsSlot = document.getElementById("interests");
var educationSlot = document.getElementById("education");
var experienceSlot = document.getElementById("experience");
var extraExpSlot = document.getElementById("extraexpslot");
var awardsSlot = document.getElementById("awards");

function GetResumes(func)
{
    var request = new XMLHttpRequest();
    var url = "https://raw.githubusercontent.com/Snowurm/jsons/main/resumes.json";
    request.open("GET",url,true);
    request.send(null);
    request.onload = function(){
        var resumes = JSON.parse(request.responseText);
        func(resumes);
    }
}
function AssignResumeData(resumes)
{
    resumes.forEach(function(resume) {
    
        var profilePicture = document.createElement("span");
        var fullName = document.createElement("span");
        var address = document.createElement("span");
        var telephone = document.createElement("span");
        var email = document.createElement("span");
        var dob = document.createElement("span");
        var nationalities = document.createElement("span");
        var languages = document.createElement("span");
        var itSkills = document.createElement("span");
        var otherSkills = document.createElement("span");
        var interests = document.createElement("span");
        var education = document.createElement("span");
        var experience = document.createElement("span");
        var extraExp = document.createElement("span");
        var awards = document.createElement("span");

        var profilePictureHold = document.createElement("img");
        profilePictureHold.setAttribute("src",resume.profilePicture);
        profilePictureHold.setAttribute("alt","Profile picture");
        profilePicture.appendChild(profilePictureHold);

        var fullNameHold = document.createElement("h2");
        fullNameHold.innerHTML = resume.fullName;
        fullName.appendChild(fullNameHold);

        var addressHold = document.createElement("span");
        addressHold.setAttribute("class","leftDetails");
        addressHold.innerHTML = resume.address[0] + ", "+resume.address[1]+"<br>"+resume.address[2];
        address.appendChild(addressHold);

        var telephoneHold = document.createElement("span");
        telephoneHold.setAttribute("class","leftDetails");
        telephoneHold.innerHTML = resume.telephone;
        telephone.appendChild(telephoneHold);

        var emailHold = document.createElement("span");
        emailHold.setAttribute("class","leftDetails");
        emailHold.innerHTML = resume.email;
        email.appendChild(emailHold);

        var dobHold = document.createElement("span");
        dobHold.setAttribute("class","leftDetails");
        dobHold.innerHTML = resume.dob;
        dob.appendChild(dobHold);

        var otherSkillsHold = document.createElement("span");
        otherSkillsHold.setAttribute("class","leftDetails");
        otherSkillsHold.innerHTML = resume.otherSkills;
        otherSkills.appendChild(otherSkillsHold);

        var nationalitiesHold = document.createElement("span");
        nationalitiesHold.setAttribute("class","leftDetails");
        nationalitiesHold.innerHTML = resume.nationalities[0] + "<br>"+resume.nationalities[1];
        nationalities.appendChild(nationalitiesHold);
        
        var languagesHold = document.createElement("span");
        languagesHold.setAttribute("class", "leftDetails");
        resume.languages.forEach(function(n){
            languagesHold.innerHTML += n[0]+": "+n[1];
            if(n == resume.languages[resume.languages.length-1])
            {
    
            }
            else
            {
                languagesHold.innerHTML += "<br>";
            }
        });
        languages.appendChild(languagesHold);

        var itSkillsHold = document.createElement("span");
        itSkillsHold.setAttribute("class","leftDetails");
        resume.itSkills.forEach(function(n){
            itSkillsHold.innerHTML += n;
            if(n == resume.itSkills[resume.itSkills.length-1])
            {
    
            }
            else
            {
                itSkillsHold.innerHTML += "<br>";
            }
        });
        itSkills.appendChild(itSkillsHold);

        var interestsHold = document.createElement("span");
        interestsHold.setAttribute("class","leftDetails");
        resume.interests.forEach(function(n)
        {
            interestsHold.innerHTML += n;
            if(n == resume.interests[resume.interests.length-1])
            {
    
            }
            else
            {
                interestsHold.innerHTML += "<br>";
            }
        });
        interests.appendChild(interestsHold);

        resume.education.forEach(function(n)
        {
            var holder = document.createElement("tr");
            var yearSlot = document.createElement("td");
            var detailsSlot = document.createElement("td");
    
            yearSlot.setAttribute("class","year");
    
            yearSlot.innerHTML = n[0];
            detailsSlot.innerHTML = n[1];
    
            holder.appendChild(yearSlot);
            holder.appendChild(detailsSlot);
    
            education.appendChild(holder);
        });
        resume.experience.forEach(function(n)
        {
            var holder = document.createElement("tr");
            var yearSlot = document.createElement("td");
            var detailsSlot = document.createElement("td");
    
            yearSlot.setAttribute("class","year");
    
            yearSlot.innerHTML = n[0];
            detailsSlot.innerHTML = n[1];
    
            holder.appendChild(yearSlot);
            holder.appendChild(detailsSlot);
    
            experience.appendChild(holder);
        });
        resume.extraExp.forEach(function(n)
        {
            var holder = document.createElement("tr");
            var yearSlot = document.createElement("td");
            var detailsSlot = document.createElement("td");
    
            yearSlot.setAttribute("class","year");
    
            yearSlot.innerHTML = n[0];
            detailsSlot.innerHTML = n[1];
    
            holder.appendChild(yearSlot);
            holder.appendChild(detailsSlot);
    
            extraExp.appendChild(holder);
        });
        resume.awards.forEach(function(n)
        {
            var holder = document.createElement("tr");
            var yearSlot = document.createElement("td");
            var detailsSlot = document.createElement("td");
    
            yearSlot.setAttribute("class","year");
    
            yearSlot.innerHTML = n[0];
            detailsSlot.innerHTML = n[1];
    
            holder.appendChild(yearSlot);
            holder.appendChild(detailsSlot);
    
            awards.appendChild(holder);
        });
    
        profilePictureSlot.appendChild(profilePicture);
        fullNameSlot.appendChild(fullName);
        addressSlot.appendChild(address);
        telephoneSlot.appendChild(telephone);
        emailSlot.appendChild(email);
        dobSlot.appendChild(dob);
        nationalitiesSlot.appendChild(nationalities);
        languagesSlot.appendChild(languages);
        itSkillsSlot.appendChild(itSkills);
        otherSkillsSlot.appendChild(otherSkills);
        interestsSlot.appendChild(interests);
        educationSlot.appendChild(education);
        experienceSlot.appendChild(experience);
        extraExpSlot.appendChild(extraExp);
        awardsSlot.appendChild(awards);
    });
}
