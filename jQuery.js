var fullNameSlot = document.getElementById("fullName");
var streetSlot = document.getElementById("street");
var stateSlot = document.getElementById("state");
var countrySlot = document.getElementById("country");
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
    
        var fullName = document.createElement("span");
        var street = document.createElement("span");
        var state = document.createElement("span");
        var country = document.createElement("span");
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
    
        fullName.innerHTML = resume.fullName;
        street.innerHTML = resume.street;
        state.innerHTML = resume.state;
        country.innerHTML = resume.country;
        telephone.innerHTML = resume.telephone;
        email.innerHTML = resume.email;
        dob.innerHTML = resume.dob;
        nationalities.innerHTML = "";
        languages.innerHTML = "";
        itSkills.innerHTML = "";
        otherSkills.innerHTML = resume.otherSkills;
        interests.innerHTML = "";
        education.innerHTML = "";
        experience.innerHTML = "";
        extraExp.innerHTML = "";
        awards.innerHTML = "";
        
        resume.nationalities.forEach(function(n){
            nationalities.innerHTML += n;
            if(n == resume.nationalities[resume.nationalities.length-1])
            {
    
            }
            else
            {
                nationalities.innerHTML += "<br>";
            }
        });
        resume.languages.forEach(function(n){
            languages.innerHTML += n[0]+": "+n[1];
            if(n == resume.languages[resume.languages.length-1])
            {
    
            }
            else
            {
                languages.innerHTML += "<br>";
            }
        });
        resume.itSkills.forEach(function(n){
            itSkills.innerHTML += n;
            if(n == resume.itSkills[resume.itSkills.length-1])
            {
    
            }
            else
            {
                itSkills.innerHTML += "<br>";
            }
        });
        resume.interests.forEach(function(n)
        {
            interests.innerHTML += n;
            if(n == resume.interests[resume.interests.length-1])
            {
    
            }
            else
            {
                interests.innerHTML += "<br>";
            }
        });
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
    
        fullNameSlot.appendChild(fullName);
        streetSlot.appendChild(street);
        stateSlot.appendChild(state);
        countrySlot.appendChild(country);
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

GetResumes(function(n){
    AssignResumeData(n);
})