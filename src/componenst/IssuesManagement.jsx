import { use, useState } from "react";
import Toggle_btns from "./toggle_btns";
import BoxCount from "./BoxCount";
import Container from "./container";
import Card from "./Card";

const IssuesManagement = ({ facepromise }) => {
  const [togglebtn, settogglebtn] = useState("ALL");
  const initialdata = use(facepromise);
  const [data,setData]=useState(initialdata)
  const filtereddata = togglebtn == "ALL"? data : data.filter(element=>element.status==togglebtn)
  return (
    <div>
      <BoxCount data={data}></BoxCount>
      <Toggle_btns
        togglebtn={togglebtn}
        settogglebtn={settogglebtn}
      ></Toggle_btns>
     <Container>
       <div className="grid grid-cols-3 gap-3">
        {filtereddata.map((kaja,ind) => {
          return (
           <Card kaja={kaja} data={data} setData={setData}></Card>
          );
        })}
      </div>
     </Container>
    </div>
  );
};

export default IssuesManagement;
