import Image from "next/image"


function BackgroundRightEffect() {
  return (
    <div className="right-0 absolute -z-50 top-0">
        <Image src={"/background-right.png"} alt="Right background effect" width={800} height={800}/>
    </div>
  )
}

export default BackgroundRightEffect