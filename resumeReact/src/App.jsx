import { useState } from "react";
import {
  PersonForm,
  ExperienceForm,
  EducationForm,
} from "./components/input.jsx";
import { Header } from "./components/output.jsx";
import { format } from "date-fns";
import { TopHeader } from "./components/header.jsx";
function App() {
  const [experienceId, setExperienceId] = useState(2);
  const [educationId, setEducationId] = useState(2);
  const [editButtons, setEditButtons] = useState("editButton");
  const toggleEdit = () => {
    if (editButtons === "editButton") setEditButtons("editButtonHidden");
    else setEditButtons("editButton");
  };
  const submitExperience = () => {
    setExperienceId(experienceId + 1);
    event.preventDefault();
  };
  const submitEducation = () => {
    setEducationId(educationId + 1);
    event.preventDefault();
  };
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
  const arrayOfEducation = education.map((item) => {
    return (
      <div key={item.id} className="listItem">
        <div className="firstHalflist">
          <li>
            {format(new Date(item.startDate), "MM/dd/yyyy")}
            {" - "}
            {format(new Date(item.endDate), "MM/dd/yyyy")}
          </li>
          <li>{item.location}</li>
          <button className={editButtons}>Edit</button>
        </div>
        <div className="secondHalfList">
          <li>{item.school}</li>
          <li>{item.degree}</li>
        </div>
        <br />
      </div>
    );
  });

  const arrayOfExperience = experience.map((item) => {
    return (
      <div key={item.id} className="listItem">
        <div className="firstHalflist">
          <li>
            {format(new Date(item.startDate), "MM/dd/yyyy")}
            {" - "}
            {format(new Date(item.endDate), "MM/dd/yyyy")}
          </li>
          <li>{item.location}</li>
          <button className={editButtons}>Edit</button>
        </div>

        <div className="secondHalfList">
          <li>{item.company}</li>
          <li>{item.position}</li>
          <li>{item.description}</li>
        </div>

        <br />
      </div>
    );
  });
  function changeName(input) {
    if (input.name === "") input.name = person.name;
    if (input.number === "") input.number = person.number;
    if (input.email === "") input.email = person.email;
    setPerson({ name: input.name, number: input.number, email: input.email });
  }
  function addExperience(newJob, title) {
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
  function addEducation(newSchool) {
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
  const [personalInfoOpen, setPersonalInfo] = useState(false);
  const [schoolInfoOpen, setSchoolInfo] = useState(false);
  const [workInfoOpen, setWorkInfo] = useState(false);

  const toggle = () => {
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
            <button onClick={toggle}>Personal Information</button>
            {personalInfoOpen && <PersonForm change={changeName} />}
            <button onClick={toggleWork}>Work Information</button>
            {workInfoOpen && (
              <ExperienceForm
                change={addExperience}
                id={experienceId}
                submit={submitExperience}
              />
            )}

            <button onClick={toggleSchool}>School Information</button>
            {schoolInfoOpen && (
              <EducationForm
                change={addEducation}
                id={educationId}
                submit={submitEducation}
              />
            )}
          </div>
        </div>
        <div className="rightSide">
          <div className={paperClasses}>
            <Header input={person} />
            <h2>Education</h2>
            <ul>{arrayOfExperience}</ul>
            <h3>Job History</h3>
            <ul>{arrayOfEducation}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export { App };
