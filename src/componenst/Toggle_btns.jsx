import Container from './container'

const Toggle_btns = ({togglebtn,settogglebtn}) => {
    const btns=["ALL","Pending","Submitted","Reviewed"]
  return (
   <Container>
      <div className="text-right my-7">
        {
            btns.map((btn,ind)=>{
                return  <button className= {`${ind==0&& "rounded-l-md"} ${ind==btn.length-1&& "rounded-r-md"}
                 all-btn ${togglebtn===btn&& "!bg-purple-500 !text-white"}`}
        onClick={()=>settogglebtn(btn)}
        >{btn}</button>
            })
        }
       </div>
   </Container>
  )
}

export default Toggle_btns