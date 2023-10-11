import { format } from "date-fns";

function ArrayOfEducation({
  education,
  editButtons,
  editEducation,
  deleteEducation,
}) {

  return (
    <ul>
      {education.map((item) => {
        return (
          <div key={item.id} className="listItem">
            <div className="firstHalflist">
              <li>
                {format(new Date(item.startDate), "MM/dd/yyyy")}
                {" - "}
                {format(new Date(item.endDate), "MM/dd/yyyy")}
              </li>
              <li>{item.location}</li>
              <button
                className={editButtons}
                onClick={() => editEducation(item.id)}
              >
                Edit
              </button>
              <button
                className={editButtons}
                onClick={() => deleteEducation(item.id)}
              >
                Delete
              </button>
            </div>
            <div className="secondHalfList">
              <li>{item.school}</li>
              <li>{item.degree}</li>
            </div>
            <br />
          </div>
        );
      })}
    </ul>
  );
}
export { ArrayOfEducation };
