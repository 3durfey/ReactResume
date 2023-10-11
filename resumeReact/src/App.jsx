import { useState } from "react";
import { v4 } from "uuid";
import {
  PersonForm,
  ExperienceForm,
  EducationForm,
} from "./components/input.jsx";
import { Header } from "./components/output.jsx";
import { TopHeader } from "./components/header.jsx";
import { ArrayOfEducation } from "./components/educationList.jsx";
import { ArrayExperience } from "./components/experienceList.jsx";
function App() {
  const unique_id = v4();
  const [experienceId, setExperienceId] = useState(2);
  const [educationId, setEducationId] = useState(1);
  const [editButtons, setEditButtons] = useState("editButton");
  const [personalInfoOpen, setPersonalInfo] = useState(false);
  const [schoolInfoOpen, setSchoolInfo] = useState(false);
  const [workInfoOpen, setWorkInfo] = useState(false);
  const [person, setPerson] = useState({
    name: "name",
    number: "number",
    email: "email",
  });
  const [experience, setExperience] = useState([
    {
      id: 0,
      company: "company",
      position: "position",
      location: "New York City",
      startDate: "10/10/2022",
      endDate: "10/10/2022",
      description:
        "Do you have an array of objects or data items and want to list them in your React app? Well, you’re at the right place! Rendering an array of objects is pretty simple and this blog has been written to make it even more simpler for you",
    },
    {
      id: 1,
      company: "company1",
      position: "position1",
      location: "Chicago",
      startDate: "10/10/2022",
      endDate: "10/10/2022",
      description:
        "Do you have an array of objects or data items and want to list them in your React app? Well, you’re at the right place! Rendering an array of objects is pretty simple and this blog has been written to make it even more simpler for you.",
    },
    {
      id: 2,
      company: "",
      position: "",
      location: "",
      startDate: "10/10/2022",
      endDate: "10/10/2022",
      description: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: 0,
      school: "school",
      degree: "degree",
      location: "location",
      endDate: "10/10/2022",
      startDate: "10/10/2022",
    },
    {
      id: 1,
      school: "school1",
      location: "location1",
      degree: "degree1",
      endDate: "10/10/2022",
      startDate: "10/10/2022",
    },
  ]);
  const toggleEdit = () => {
    if (editButtons === "editButton") setEditButtons("editButtonHidden");
    else setEditButtons("editButton");
  };
  const newExperience = () => {
    let tempID = unique_id;
    setExperienceId(tempID);
    setExperience([
      ...experience,
      {
        id: tempID,
        company: "",
        position: "",
        location: "",
        startDate: "10/10/2022",
        endDate: "10/10/2022",
        description: "",
      },
    ]);
    event.preventDefault();
  };
  const newEducation = () => {
    setEducationId(unique_id);
    event.preventDefault();
  };
  function editExperienceButton(input) {
    setExperienceId(input);
  }
  function editEducationButton(input) {
    setEducationId(input);
  }
  function deleteEducation(input) {
    if (input === educationId && education.length > 0) {
      setEducationId(education[education.length - 1].id);
    } else {
      setEducationId(0);
    }
    setEducation(
      education.filter((item) => {
        if (item.id !== input) {
          return item;
        }
      })
    );
  }
  function deleteExperience(input) {
    if (input === experienceId && experience.length > 0) {
      setExperienceId(experience[experience.length - 1].id);
    } else {
      setEducationId(0);
    }
    setExperience(
      experience.filter((item) => {
        if (item.id !== input) {
          return item;
        }
      })
    );
  }
  function changeName(input) {
    if (input.name === "") input.name = person.name;
    if (input.number === "") input.number = person.number;
    if (input.email === "") input.email = person.email;
    setPerson({ name: input.name, number: input.number, email: input.email });
  }
  //add new experience on submit button
  function editExperience(newJob, title) {
    let exists = false;
    let newArray = experience.map((item) => {
      if (item.id === newJob.id) {
        exists = true;
        if (title === "company") item.company = newJob.company;
        else if (title === "position") item.position = newJob.position;
        else if (title === "location") item.location = newJob.location;
        else if (title === "startDate") item.startDate = newJob.startDate;
        else if (title === "endDate") item.endDate = newJob.endDate;
        else if (title === "description") item.description = newJob.description;
      }
      return item;
    });
    if (exists) {
      setExperience(newArray);
    } else {
      setExperience([...experience, newJob]);
    }
  }
  function editEducation(newSchool) {
    let exists = false;
    let newArray = education.map((item) => {
      if (item.id === newSchool.id) {
        exists = true;
        if (newSchool.school === "") newSchool.school = item.school;
        if (newSchool.degree === "") newSchool.degree = item.degree;
        if (newSchool.location === "") newSchool.location = item.location;
        if (newSchool.startDate === new Date())
          newSchool.startDate = item.startDate;
        if (newSchool.endDate === new Date()) newSchool.endDate = item.endDate;
        return newSchool;
      }
      return item;
    });
    if (exists) {
      setEducation(newArray);
    } else {
      setEducation([...education, newSchool]);
    }
  }
  //functions to toggle the form input fields
  const toggleName = () => {
    setPersonalInfo((personalInfoOpen) => !personalInfoOpen);
    if (workInfoOpen) setWorkInfo(!workInfoOpen);
    if (schoolInfoOpen) setSchoolInfo(!schoolInfoOpen);
  };
  const toggleSchool = () => {
    setSchoolInfo((schoolInfoOpen) => !schoolInfoOpen);
    if (workInfoOpen) setWorkInfo(!workInfoOpen);
    if (personalInfoOpen) setPersonalInfo(!personalInfoOpen);
  };
  const toggleWork = () => {
    setWorkInfo((workInfoOpen) => !workInfoOpen);
    if (schoolInfoOpen) setSchoolInfo(!schoolInfoOpen);
    if (personalInfoOpen) setPersonalInfo(!personalInfoOpen);
  };
  let paperClasses = `paper print`;

  return (
    <>
      <TopHeader toggle={toggleEdit}></TopHeader>
      <div className="main">
        <div className="leftSide">
          <div className="infoSidebar">
            <button onClick={toggleName}>Personal Information</button>
            {personalInfoOpen && (
              <PersonForm change={changeName} info={person} />
            )}
            <button onClick={toggleWork}>Work Information</button>
            {workInfoOpen && (
              <ExperienceForm
                change={editExperience}
                id={experienceId}
                submit={newExperience}
                itemValues={experience.filter((item) => {
                  if (item.id === experienceId) {
                    return item;
                  }
                })}
              />
            )}

            <button onClick={toggleSchool}>School Information</button>
            {schoolInfoOpen && (
              <EducationForm
                change={editEducation}
                id={educationId}
                submit={newEducation}
                itemValues={education.filter((item) => {
                  if (item.id === educationId) {
                    return item;
                  }
                })}
              />
            )}
          </div>
        </div>
        <div className="rightSide">
          <div className={paperClasses}>
            <Header input={person} />
            <h2>Job History</h2>
            <ArrayExperience
              experience={experience}
              editButtons={editButtons}
              editExperience={editExperienceButton}
              deleteExperience={deleteExperience}
            />
            <h3>Education</h3>
            <ArrayOfEducation
              education={education}
              editButtons={editButtons}
              editEducation={editEducationButton}
              deleteEducation={deleteEducation}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export { App };
