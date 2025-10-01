import React from 'react'

const Card = ({kaja,data,setData}) => {
    const handleclick=()=>{
        const expectedata=data.find(elm=>kaja.ticketId==elm.ticketId)
        const restdata=data.filter(elm=>kaja.ticketId!=elm.ticketId)
         if(expectedata.status=="Pending"){
            expectedata.status="Submitted"
         }else if(expectedata.status="Submitted"){
            expectedata.status="Reviewed"
         }
         setData([expectedata, ...restdata])
    }
  return (
     <div className="shadowed-md rounded-md cursor-pointer bg-slate-100 p-3" onClick={handleclick}>
        
              <div>
                <img
                  src={kaja.userImg}
                  alt=""
                  className="h-[80px] w-[80px] rounded-full"
                />
                <h1 className="font-semibold text-lg">{kaja.requestedBy}</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-2xl">{kaja.subject}</h1>
                <div>
                  <span
                    className={`font-semibold py-1 px-2 rounded mr-2 ${
                      kaja.priority == "High"
                        ? "text-red-500 bg-red-100"
                        : kaja.priority == "Medium"
                        ? "text-yellow-500 bg-amber-100"
                        : "text-green-500 bg-green-100"
                    }`}
                  >
                    {kaja.priority}
                  </span>
                  <span 
                  className={`font-semibold py-1 px-2 rounded mr-2 ${
                      kaja.status == "Pending"
                        ? "text-red-500 bg-red-100"
                        : kaja.status == "Submitted"
                        ? "text-yellow-500 bg-amber-100"
                        : "text-green-500 bg-green-100"
                    }`}
                  >{kaja.status}</span>
                </div>
              </div>
              <p className="text-xs text-slate-700">{kaja.description}</p>
            </div>
  )
}

export default Card