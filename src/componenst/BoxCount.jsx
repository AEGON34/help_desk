import Container from './container'

const BoxCount = ({data}) => {
  const pendingdata=data.filter(element=>element.status=='Pending')
  const submitedgdata=data.filter(element=>element.status=='Submitted')
  const revieweddata=data.filter(element=>element.status=='Reviewed')
  return (
    <div>   <Container>
      
        <div className="grid grid-cols-3 gap-4 my-11">
        <div className=" h-40 bg-gray-600 rounded-xl text-white flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Panding</h1>
          <p className="font-semibold text-2xl">{pendingdata.length}</p>
        </div>
        <div className=" h-40 bg-green-600 rounded-xl text-white flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Submited</h1>
          <p className="font-semibold text-2xl">{submitedgdata.length}</p>
        </div>
        <div className=" h-40 bg-teal-500 rounded-xl text-white flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Reviewed</h1>
          <p className="font-semibold text-2xl">{revieweddata.length}</p>
        </div>
      </div>
    </Container></div>
  )
}

export default BoxCount