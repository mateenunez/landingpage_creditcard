import Image from "next/image"


function BackgroundLeftEffect() {
  return (
    <div className="left-0 absolute -z-50 top-0">
        <Image src={"/background-left.png"} alt="Left background effect" width={800} height={800}/>
    </div>
  )
}

export default BackgroundLeftEffect