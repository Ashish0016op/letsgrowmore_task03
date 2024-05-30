import { Link } from "react-router-dom";
import jayImage from "../../assets/jay.jpg";

const Students = ({ formData }) => {
  console.log("value is", formData);
  return (
    <div>
      <p className="text-center text-3xl font-bold text-black">
        Enrolled Students
      </p>
      <div className="flex justify-center px-2 py-6 h-[65vh] overflow-y-auto overflow-hidden">

        <table className="w-full">
          <thead>
            <tr className="bg-[#A8C83E] text-white">
              <th className="border-solid border-2">Description</th>
              <th className="border-solid border-2">Image</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((student, index) => (
              <tr key={index} className={`${index%2!=0?"bg-[#cadc92]":""}`}>
                <td className="border-solid border-2 h-[192px]">
                  <div className="py-2 px-1 text-black">
                    <p>{student.Name}</p>
                    <p>{student.Gender}</p>
                    <p>{student.Email}</p>
                    <Link className="text-blue-600" to={student.Website}>{student.Website}</Link>
                    <p>{student.Skills.join(', ')}</p>
                  </div>
                </td>
                <td className="border-solid border-2 flex justify-center h-[192px] items-center">
                  <img src={student.ImageLink} className="h-full w-[80%] p-[10px]" alt="Student Image" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default Students;
