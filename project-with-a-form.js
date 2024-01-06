function addProject() {
    const projectName = document.getElementById('projectName').value;
    const projectsName = document.getElementById("projectsName");
    const projectLink = document.getElementById('projectLink').value;
    const projectDescription = document.getElementById('projectDescription').value;
    const projectsDesc = document.getElementById("projectsDesc")
    const projectsView = document.getElementById('projectsView');
    const projectDiv = document.createElement('div');
    const button = document.getElementById("button")
    if(projectName == "" || projectDescription == "" || projectLink == ""){
        alert("Fill all the details")
    }
    console.log(projectName);
    projectsName.textContent = projectName
    projectsDesc.textContent = projectDescription
    
    button.addEventListener("click" , () =>{
        var a = document.createElement('a'); 
        a.setAttribute("href", projectLink);
        a.appendChild(button); 
        window.location.href = projectLink
        //alert(`Project Link: ${projectLink}`);
    })
    /*projectDiv.innerHTML = `
      <div class="project-gZB">
        <p class="text-Ej7">${projectName}</p>
        <p class="text-nVj">${projectDescription}</p>
        <div class="boto-secudrio-L1T">View Project</div>
      </div>
    `;*/

    projectsView.appendChild(projectDiv);

    // Clear form fields
    document.getElementById('projectName').value = '';
    document.getElementById('projectLink').value = '';
    document.getElementById('projectDescription').value = '';
}
