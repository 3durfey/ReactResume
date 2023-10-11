import { format } from "date-fns";

function ArrayExperience({
  experience,
  editButtons,
  editExperience,
  deleteExperience,
}) {
  return (
    <ul>
      {experience.map((item) => {
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
                onClick={() => editExperience(item.id)}
              >
                Edit
              </button>
              <button
                className={editButtons}
                onClick={() => deleteExperience(item.id)}
              >
                Delete
              </button>
            </div>

            <div className="secondHalfList">
              <li>{item.company}</li>
              <li>{item.position}</li>
              <li>{item.description}</li>
            </div>

            <br />
          </div>
        );
      })}
    </ul>
  );
}
export { ArrayExperience };
