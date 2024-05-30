import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Students from "../../components/Navbar/Students";
const Home = () => {
  const [formData, setFormData] = useState([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [website,setWeb]=useState("");
  const [imageL,setImageL]=useState("");
  const [gender,setGen]=useState("");
  const [skills,setSkills]=useState([]);
const handleName = (event) => {
  event.preventDefault();
  const name= event.target.value;
    setName(name);
};
  const handleEmail=(event)=>{
    event.preventDefault();
    const email=event.target.value;
    setEmail(email);
  }
  const handleWebsite=(event)=>{
    event.preventDefault();
    const website=event.target.value;
    setWeb(website);
  }
  const handleImageLink=(event)=>{
    event.preventDefault();
    const imageLink=event.target.value;
    setImageL(imageLink);
  }
  const handleGender=(event)=>{
    event.preventDefault();
    const gender=event.target.value;
    setGen(gender);
  }
  const handleSkills = (event) => {
    const { value, checked } = event.target;
    setSkills((prevSkills) => {
      if (checked && !prevSkills.includes(value)) {
        return [...prevSkills, value];
      } else if (!checked && prevSkills.includes(value)) {
        return prevSkills.filter((skill) => skill !== value);
      }
      return prevSkills;
    });
  };
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormData(prevData=>[...prevData,{Name:name,Email:email,Website:website,ImageLink:imageL,Gender:gender,Skills:skills}])
  }
  

  return (
    <div className="bg-white h-[100vh]">
      <Navbar />
      <div className="flex w-[100%] justify-center px-3 my-3">
        <form onSubmit={handleSubmit}>
        <div className="w-[50%]">
          <div className="px-16">
            <div className="flex justify-between gap-8 my-5">
              <label
                htmlFor="name"
                className="text-black font-semibold text-lg"
              >
                Name
              </label>
              <input
                type="text"
                className="bg-white border-solid p-1 rounded text-black border-[#BDBDBD] border-[2px]"
                onChange={handleName}
              />
            </div>
            <div className="flex justify-between gap-8 my-5">
              <label
                htmlFor="email"
                className="text-black font-semibold text-lg"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-white border-solid p-1 rounded text-black border-[#BDBDBD] border-[2px]"
                onChange={handleEmail}
              />
            </div>
            <div className="flex justify-between gap-8 my-5">
              <label
                htmlFor="website"
                className="text-black font-semibold text-lg"
              >
                Website
              </label>
              <input
                type="text"
                className="bg-white border-solid p-1 rounded text-black border-[#BDBDBD] border-[2px]"
                onChange={handleWebsite}
              />
            </div>
            <div className="flex justify-between gap-8 my-5">
              <label
                htmlFor="imagelink"
                className="text-black font-semibold text-lg"
              >
                Image Link
              </label>
              <input
                type="text"
                className="bg-white border-solid p-1 rounded text-black border-[#BDBDBD] border-[2px]"
                onChange={handleImageLink}
              />
            </div>
            <div className="flex justify-between gap-8 my-5">
              <label
                htmlFor="gender"
                className="text-black font-semibold text-lg"
              >
                Gender
              </label>
              <select onChange={handleGender} className="bg-white text-black">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex justify-between gap-8 my-5">
              <label
                htmlFor="skills"
                className="text-black font-semibold text-lg"
              >
                Skills
              </label>
              <input
                type="checkbox"
                id="skill1"
                name="skill1"
                value="Java"
                className="bg-white"
                onChange={handleSkills}
              />
              <label htmlFor="skill1" className="font-bold">
                Java
              </label>
              <input
                type="checkbox"
                id="skill2"
                name="skill2"
                value="HTML"
                className="bg-white"
                onChange={handleSkills}
              />
              <label htmlFor="skill2" className="font-bold">
                HTML
              </label>
              <input
                type="checkbox"
                id="skill3"
                name="skill3"
                value="CSS"
                className="bg-white"
                onChange={handleSkills}
              />
              <label htmlFor="skill3" className="font-bold">
                CSS
              </label>
            </div>
            <div className="flex justify-between">
              <button type="submit" className="btn bg-[#0285F9] text-white text-lg border-none hover:bg-[#329fff]">
                Enroll Student
              </button>
              <button className="btn bg-[#D82942] text-white text-lg border-none hover:bg-[#f41d3d]">
                Clear
              </button>
            </div>
          </div>
        </div>
        </form>
        <div className="h-[500px] w-1 mx-4 my-4 bg-[#45D7AD]"></div>
        <div className="w-[50%]">
          <Students formData={formData}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
