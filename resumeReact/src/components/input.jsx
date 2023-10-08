import PropTypes from "prop-types";

function PersonForm({ change }) {
  let info = { name: "", number: "", email: "" };
  function changeName(input) {
    info.name = input;
    change(info);
  }
  function changeEmail(input) {
    info.email = input;
    change(info);
  }
  function changeNumber(input) {
    info.number = input;
    change(info);
  }

  return (
    <>
      <form className="entryForm">
        <label>
          Name:
          <input
            className="input"
            onChange={(e) => {
              changeName(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          Email:
          <input
            className="input"
            placeholder={"sfsdff"}
            type="email"
            onChange={(e) => {
              changeEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Phone Number:
          <input
            className="input"
            onChange={(e) => {
              changeNumber(e.target.value);
            }}
            type="tel"
          />
        </label>
      </form>
    </>
  );
}
function reset() {
  let inputs = document.getElementsByClassName("input");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}
function ExperienceForm({ change, id, submit }) {
  let experience = {
    id: id,
    company: " ",
    position: " ",
    location: " ",
    startDate: new Date(),
    endDate: new Date(),
    description: " ",
  };

  return (
    <>
      <form
        className="entryForm"
        onSubmit={() => {
          submit();
          reset();
        }}
      >
        <label>
          Company:
          <input
            className="input"
            type="text"
            onChange={(e) => {
              experience.company = e.target.value;
              change(experience, "company");
            }}
          />
        </label>
        <label>
          Position:
          <input
            className="input"
            type="text"
            onChange={(e) => {
              experience.position = e.target.value;
              change(experience, "position");
            }}
          />
        </label>

        <label>
          Start Date:
          <input
            type="date"
            onChange={(e) => {
              experience.startDate = new Date(e.target.value);
              change(experience, "startDate");
            }}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            onChange={(e) => {
              experience.endDate = new Date(e.target.value);
              change(experience, "endDate");
            }}
          />
        </label>
        <label>
          Location:
          <input
            className="input"
            type="text"
            onChange={(e) => {
              experience.location = e.target.value;
              change(experience, "location");
            }}
          />
        </label>
        <label>
          Description:
          <textArea
            className="input"
            onChange={(e) => {
              experience.description = e.target.value;
              change(experience, "description");
            }}
          />
        </label>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
}

function EducationForm({ id, change, submit }) {
  let education = {
    id: id,
    school: "",
    degree: "",
    location: "",
    endDate: new Date(),
    startDate: new Date(),
  };
  return (
    <>
      <form
        className="entryForm"
        onSubmit={() => {
          submit();
          reset();
        }}
      >
        <label>
          School:
          <input
            className="input"
            type="text"
            onChange={(e) => {
              education.school = e.target.value;
              change(education);
            }}
          />
        </label>
        <label>
          Location:
          <input
            className="input"
            type="text"
            onChange={(e) => {
              education.location = e.target.value;
              change(education);
            }}
          />
        </label>
        <label>
          Degree:
          <input
            className="input"
            type="text"
            onChange={(e) => {
              education.degree = e.target.value;
              change(education);
            }}
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            onChange={(e) => {
              education.startDate = e.target.value;
              change(education);
            }}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            onChange={(e) => {
              education.endDate = e.target.value;
              change(education);
            }}
          />
        </label>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
}

export { PersonForm, ExperienceForm, EducationForm };
PersonForm.propTypes = {
  change: PropTypes.string.isRequired,
};
